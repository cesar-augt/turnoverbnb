import { createStore } from 'vuex'

export default createStore({
  state: {
    deposit:{
        id: '',
        amount: 0,
        description: ''
    }
  },
  getters: {
  },
  mutations: {
    setDeposit(state, data) {
      state.deposit.id = data.id;
      state.deposit.amount = data.amount;
      state.deposit.description = data.description;
    }
  },
  actions: {
  },
  modules: {
  }
})
