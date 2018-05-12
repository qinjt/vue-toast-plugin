import ToastComponent from './index.vue'

let Toast = {}
Toast.install = (Vue, options) => {

  let opt = {
    duration: 3000
  }

  for(let key in options) {
    opt[key] = options[key]
  }

  Vue.prototype.$toast = (message, option) => {

    if(typeof option == 'object') {
      for(let key in option) {
        opt[key] = option[key]
      }
    }

    const ToastController = Vue.extend(ToastComponent)

    let instance = new ToastController().$mount(document.createElement('div'))

    instance.message = message
    instance.visible = true

    document.body.appendChild(instance.$el)

    setInterval(() => {
      instance.visible = false
      document.body.removeChild(instance.$el)
    }, opt.duration)
  }

  Vue.prototype.$toast['show'] = (message, option) => {
    Vue.prototype.$toast(message, option)
  }
}

if(window.Vue) {
  Vue.use(Toast)
}

export default Toast;