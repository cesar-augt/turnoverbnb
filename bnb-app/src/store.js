import { createStore } from 'vuex';

const store = createStore({
  state: {
    amount: 0,
    description: '',
    id: null
  },
  mutations: {
    set(state, amount, description, id) {
      state.amount = amount;
      state.description = description;
      state.id = id;
    }
  }
});

export default store;