import abstractHue from './components/abstractHue'
import abstractSaturation from './components/abstract-saturation.vue'
import ringBlue from './components/ringBlue.vue'
import ringGreen from './components/ringGreen.vue'

function plugin (Vue) {
  Vue.component('abstract-hue', abstractHue)
  Vue.component('abstract-saturation', abstractSaturation)
  Vue.component('ring-blue', ringBlue)
  Vue.component('ring-green', ringGreen)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version
}
