import CommentsItem from './main.vue'

CommentsItem.install = function (Vue) {
  Vue.component(CommentsItem.name, CommentsItem)
}

export default CommentsItem
