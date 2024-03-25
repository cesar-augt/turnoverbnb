import { createStore } from 'vuex'

export default createStore({
  state: {
    deposit:{
        id: '',
        amount: 0,
        description: '',
        name_image: ''
    }
  },
  getters: {
  },
  mutations: {
    setDeposit(state, data) {
      state.deposit.id = data.id;
      state.deposit.amount = data.amount;
      state.deposit.description = data.description;
      state.deposit.name_image =  data.name_image;
    }
  },
  actions: {
  },
  modules: {
  }
})
