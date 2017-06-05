<template>
    <div>
        <canvas ref="canvas" @click="onClick()" class="canvas" :width="width" :height="height"></canvas>
    </div>
</template>
<style scoped>
    .canvas {
        width: 100% !important;
        height: 100% !important;
    }
</style>
<script>
    import _ from 'lodash'
    export default {
        name: 'Abstract-saturation',
        data () {
            return {
                width: 0,
                height: 0,
                triangles: [],
                canvas: {},
                Hue: (Math.random() * 360).toFixed(0),
                pixelRatio: window.devicePixelRatio
            }
        },
        props: {
            fraction: {
              type: Number,
              default: 0.15
            },
            speed: {
              type: Number,
              default: 50
            }
        },
        watch: {
          'speed': 'animate',
          'fraction': 'reDraw'
        },
        computed: {
            AnimationSize () {
             return Math.min(this.width, this.height) * this.fraction
          }
        },
        mounted () {
            this.height = this.$refs.canvas.parentNode.parentNode.offsetHeight * this.pixelRatio
            this.width = this.$refs.canvas.parentNode.parentNode.offsetWidth * this.pixelRatio
            this.canvas = this.$refs.canvas
            this.create()
            this.animate()
            this.setListeners()
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.setWidthAndHeight)
        },
        methods: {
            setListeners () {
                window.addEventListener('resize', this.setWidthAndHeight)
            },
            setWidthAndHeight: _.debounce(function () {
                    this.height = this.$refs.canvas.parentNode.parentNode.offsetHeight * this.pixelRatio
                    this.width = this.$refs.canvas.parentNode.parentNode.offsetWidth * this.pixelRatio
                    let self = this
                    setTimeout(function () {
                        self.reDraw()
                    }, 10)
                }, 45),
            onClick () {
               this.reDraw()
            },
            reDraw () {
                this.canvas.getContext('2d').clearRect(0, 0, this.width, this.height)
                this.triangles = []
                this.create()
            },
            create () {
                let tri = this.generate({pos: {}, to: {}})
                let minVal = Math.max(tri.pos.x1, tri.pos.y1, tri.pos.x2, tri.pos.y2, tri.pos.x3, tri.pos.y3)
                let i = 0
                while (minVal < Math.max(this.width, this.height) + this.AnimationSize * 4) {
                    let oTri = Object.create(tri)

                    tri = this.generate(oTri, i % 2 === 0)
                    minVal = Math.max(tri.pos.x1, tri.pos.y1, tri.pos.x2, tri.pos.y2, tri.pos.x3, tri.pos.y3)

                    this.triangles.push(tri)
                    i++
                }
                this.drawCanvas()
            },
            generate (old, second) {
                let t = {pos: {}, to: {}}
                let n = ~~(Math.random() * 2) // negative?

                t.pos.x1 = old.pos.x2 || -this.AnimationSize * 4
                t.pos.y1 = old.pos.y2 || -this.AnimationSize * 4
                t.pos.x2 = old.pos.x3 || Math.random() * this.AnimationSize + t.pos.x1 * (n && old.pos.x2 ? -1 : 1)
                t.pos.y2 = old.pos.y3 || Math.random() * this.AnimationSize + t.pos.y1 * (n && old.pos.y2 ? -1 : 1)
                t.pos.x3 = Math.random() * this.AnimationSize + t.pos.x2
                t.pos.y3 = Math.random() * this.AnimationSize + t.pos.y2 * (second ? -0.25 : 0.25)

                t.to.x1 = t.pos.x1
                t.to.y1 = t.pos.y1
                t.to.x2 = t.pos.x2
                t.to.y2 = t.pos.y2
                t.to.x3 = t.pos.x3
                t.to.y3 = t.pos.y3
                return t
            },
            drawCanvas () {
                let ctx = this.canvas.getContext('2d')
                ctx.clearRect(0, 0, this.width, this.height)
                for (let i in this.triangles) {
                    this.drawTriangle(this.triangles[i])
                    ctx.fillStyle = 'hsla(0, 0%, ' + this.Hue / 4 + '%, .75)'
                    ctx.fill()
                }
            },
            drawTriangle (o) {
                let ctx = this.canvas.getContext('2d')
                ctx.beginPath()
                ctx.moveTo(o.pos.x1, o.pos.y1 + this.height / 2)
                ctx.lineTo(o.pos.x2, o.pos.y2 + this.height / 2)
                ctx.lineTo(o.pos.x3, o.pos.y3 + this.height / 2)
                ctx.closePath()
            },
            animate () {
                let self = this
                let max = this.fraction
                setInterval(function () {
                    for (let i in self.triangles) {
                        let t = self.triangles[i]
                        let move = (Math.random() * max)

                        if (self.Hue < 0 && self.Hue > 360) self.Hue += 0.01
                        else self.Hue -= 0.01

                        if (i > 0 && i < self.triangles.length) {
                            if (t.pos.x1 <= t.to.x1 + max && t.pos.x1 >= t.to.x1 - max) t.to.x1 = (Math.random() * self.AnimationSize) * (~~(Math.random() * 2) ? -1 : 1) + t.pos.x1
                            if (t.pos.y1 <= t.to.y1 + max && t.pos.y1 >= t.to.y1 - max) t.to.y1 = (Math.random() * self.AnimationSize) * (~~(Math.random() * 2) ? -1 : 1) + t.pos.y1

                            t.to.x1 = Math.min(self.AnimationSize * self.fraction + t.pos.x1, Math.max(-self.AnimationSize * self.fraction - t.pos.x1, t.to.x1))
                            t.to.y1 = Math.min(self.AnimationSize * self.fraction + t.pos.y1, Math.max(-self.AnimationSize * self.fraction - t.pos.y1, t.to.y1))

                            t.pos.x1 += move * (t.pos.x1 < t.to.x1 ? 1 : -1)
                            t.pos.y1 += move * (t.pos.y1 < t.to.y1 ? 1 : -1)

                            t.pos.x1 = Math.min(Math.max(t.pos.x1, -self.AnimationSize - t.pos.x1), self.AnimationSize + t.pos.x1)
                            t.pos.y1 = Math.min(Math.max(t.pos.y1, -self.AnimationSize - t.pos.y1), self.AnimationSize + t.pos.y1)

                            t.pos.x2 = self.triangles[i - 1].pos.x3
                            t.pos.y2 = self.triangles[i - 1].pos.y3
                            t.pos.x3 = self.triangles[i - 1].pos.x1
                            t.pos.y3 = self.triangles[i - 1].pos.y1
                        }
                    }

                    if (self.Hue < 0 && self.Hue > 360) self.Hue += 0.01
                    else self.Hue -= 0.01

                    self.drawCanvas()
                }, 1000 / this.speed)
            }
        }
    }
</script>
