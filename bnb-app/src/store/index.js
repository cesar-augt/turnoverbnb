import { createStore } from 'vuex'

export default createStore({
  state: {
    deposit:{
        id: '',
        amount: 0,
        email: '',
        name_image: '',
        name: '',
        account: ''
    },
    balance:{
      current: 0
    }
  },
  getters: {
  },
  mutations: {
    setDeposit(state, data) {
      state.deposit.id = data.id;
      state.deposit.amount = data.amount;
      state.deposit.email = data.email;
      state.deposit.url_image =  data.url_image;
      state.deposit.name = data.name;
      state.deposit.account = data.account;
    },
    setBalance(state, data){
      state.balance.current = data.current
    }
  },
  actions: {
  },
  modules: {
  }
})
