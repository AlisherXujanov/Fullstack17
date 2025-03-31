export default {
  namespaced: true,
  state: {
    val: 0
  },
  mutations: {
    setRange(state, payload) {
      state.val = payload;
    }
  },
  actions: {
    updateRange({ commit }, value) {
      commit('setRange', value);
    }
  },
};