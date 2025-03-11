import { createStore } from "vuex"

// let x = {
//   name: '...',
//   surname: '---',
//   fullname: function() {
//     return this.name + ' ' + this.surname
//   }
// }
// x.fullname() // '... ---'


const store = createStore({
  state: {
    count: 0,
    // single source of truth over whole project
    // RU: единый источник правды по всему проекту
  },
  mutations: {
    increment(state, payload) { // payload == {...}
      if (payload) {
        state.count += payload
      } else {
        state.count++
      }
    },
    decrement(state, payload) { // payload == {...}
      if (payload) {
        state.count -= payload
      } else {
        state.count--
      }
    }
    // sync operations
    // RU: синхронные операции
  },
  actions: {
    // async operations
    // RU: асинхронные операции
  },
})

export default store

