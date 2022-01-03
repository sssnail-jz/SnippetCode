import CommentsItem from './CommentsItem/index.js'
import ReplyItem from './ReplyItem/index.js'

const components = [CommentsItem, ReplyItem]

// 函数功能：注册组件
const install = function (Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.1',
  name: 'SnippetComments',
  install,
  CommentsItem,
  ReplyItem
}
