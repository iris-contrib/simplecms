import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    book: 'normal',
    project: 'nuxt'
  },
  mutations: {
    increment (state, n) {
      state.counter += n
    },
    setBook (state, book) {
      console.log('=====', book)
      state.book = book
    }
  }
})

export default store
