<template>
    <div>
        <div ref="ring" class="ring" @click="randomRadius()">
        </div>
    </div>
</template>
<style scoped>
    .ring {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 650px;
        height: 600px;
        margin-top: -300px;
        margin-left: -325px;
    }

    .ring::after,
    .ring::before {
        -webkit-transform-origin: center center;
        -moz-transform-origin: center center;
        -ms-transform-origin: center center;
        -o-transform-origin: center center;
        transform-origin: center center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        content: '';
    }

    .ring::after {
        -webkit-animation: clockwise 10s linear infinite;
        -moz-animation: clockwise 10s linear infinite;
        animation: clockwise 10s linear infinite;
        box-shadow: inset 0 33.33333px 0 rgba(0, 228, 173, 0.7), inset 33.33333px 0 0 rgba(49, 255, 206, 0.7), inset -33.33333px 0 rgba(151, 255, 230, 0.7), inset -33.33333px 0 0 rgba(228, 255, 248, 0.7);
    }

    .ring::before {
        -webkit-animation: counterclockwise 10s linear infinite;
        -moz-animation: counterclockwise 10s linear infinite;
        animation: counterclockwise 10s linear infinite;
        box-shadow: inset 0 33.33333px 0 rgba(1, 27, 174, 0.7), inset 33.33333px 0 0 rgba(1, 39, 250, 0.7), inset -33.33333px 0 rgba(99, 122, 254, 0.7), inset -33.33333px 0 0 rgba(175, 187, 255, 0.7);
    }

    @-webkit-keyframes clockwise {
        0% {
            -webkit-transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -webkit-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
        }
        100% {
            -webkit-transform: rotateZ(360deg) scaleX(1) scaleY(1);
        }
    }

    @-moz-keyframes clockwise {
        0% {
            -moz-transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -moz-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
        }
        100% {
            -moz-transform: rotateZ(360deg) scaleX(1) scaleY(1);
        }
    }

    @keyframes clockwise {
        0% {
            -webkit-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -moz-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -ms-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -o-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -webkit-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
            -moz-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
            -ms-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
            -o-transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
            transform: rotateZ(180deg) scaleX(0.87) scaleY(0.95);
        }
        100% {
            -webkit-transform: rotateZ(360deg) scaleX(1) scaleY(1);
            -moz-transform: rotateZ(360deg) scaleX(1) scaleY(1);
            -ms-transform: rotateZ(360deg) scaleX(1) scaleY(1);
            -o-transform: rotateZ(360deg) scaleX(1) scaleY(1);
            transform: rotateZ(360deg) scaleX(1) scaleY(1);
        }
    }

    @-webkit-keyframes counterclockwise {
        0% {
            -webkit-transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -webkit-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
        }
        100% {
            -webkit-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
        }
    }

    @-moz-keyframes counterclockwise {
        0% {
            -moz-transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -moz-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
        }
        100% {
            -moz-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
        }
    }

    @keyframes counterclockwise {
        0% {
            -webkit-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -moz-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -ms-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            -o-transform: rotateZ(0deg) scaleX(1) scaleY(1);
            transform: rotateZ(0deg) scaleX(1) scaleY(1);
        }
        50% {
            -webkit-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
            -moz-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
            -ms-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
            -o-transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
            transform: rotateZ(-180deg) scaleX(0.98) scaleY(0.89);
        }
        100% {
            -webkit-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
            -moz-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
            -ms-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
            -o-transform: rotateZ(-360deg) scaleX(1) scaleY(1);
            transform: rotateZ(-360deg) scaleX(1) scaleY(1);
        }
    }

</style>
<script>
    import _ from 'lodash'
    export default {
        name: 'Ring-green',
        data () {
            return {
                ring: {},
                ringRadius: '',
                ringSize: {},
                height: 0,
                width: 0
            }
        },
        mounted () {
          this.ring = this.$refs.ring
          this.setWidthAndHeight()
          this.setRingRadius()
          this.calculateRingSize()
          this.setListeners()
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.setResize)
        },
        methods: {
            setListeners () {
                window.addEventListener('resize', this.setResize)
            },
            setWidthAndHeight () {
                this.height = this.$refs.ring.parentNode.parentNode.offsetHeight
                this.width = this.$refs.ring.parentNode.parentNode.offsetWidth
            },
            setResize: _.debounce(function () {
                this.setWidthAndHeight()
                let self = this
                setTimeout(function () {
                    self.setRingRadius()
                    self.calculateRingSize()
                }, 10)
            }, 45),
            randomRadius () {
               this.ringRadius = this.ringRadius + (Math.random() - 0.5) * 10
              this.calculateRingSize()
            },
            setRingRadius () {
                this.ringRadius = this.width > this.height ? this.height : this.width
                this.ringRadius = this.ringRadius / 100 * 60
            },
            calculateRingSize () {
                if (window.innerWidth < 600) {
                    this.ring.classList.add('mobile')
                    this.ringSize = {
                        width: this.ringRadius + 10,
                        height: this.ringRadius,
                        marginTop: -this.ringRadius / 2,
                        marginLeft: -(this.ringRadius + 10) / 2
                    }
                } else {
                    this.ring.classList.remove('mobile')
                    this.ringSize = {
                        width: this.ringRadius + 40,
                        height: this.ringRadius,
                        marginTop: -this.ringRadius / 2,
                        marginLeft: -(this.ringRadius + 40) / 2
                    }
                }
                this.ring.style.width = this.ringSize.width + 'px'
                this.ring.style.height = this.ringSize.height + 'px'
                this.ring.style.marginTop = this.ringSize.marginTop + 'px'
                this.ring.style.marginLeft = this.ringSize.marginLeft + 'px'
            }
        }
    }
</script>
