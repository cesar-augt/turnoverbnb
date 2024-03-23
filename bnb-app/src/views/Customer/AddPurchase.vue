<template>
  <br>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>PURCHASE</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-text-field v-model="amount" label="Amount" outlined required></v-text-field>
        <v-text-field v-model="description" label="Descrition" outlined required></v-text-field>
        <v-text-field v-model="date" type="date" label="Descrition" outlined required></v-text-field>
        <v-btn color="primary" dark block type="submit">ADD PURCHASE</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
      
</template>
  
  <script>
  import axios from '../../service/auth';
  
  export default {
    data() {
      return {
        description: '',
        amount: '',
        date : ''
      };
    },
    methods: {
      async submit() {
        try {
          await axios.post('/purchase', { amount: this.amount, description: this.description , date : this.date});
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
    },
  };
  </script>