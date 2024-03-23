<template>
  <br>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email" outlined required></v-text-field>
        <v-text-field v-model="password" label="Password" outlined required type="password"></v-text-field>
        <v-btn color="primary" dark block type="submit">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
      
</template>
  
  <script>
  import axios from '../../service/auth';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/login', { email: this.username, password: this.password });
          const token = response.data.token;
          localStorage.setItem('token', token);
          // Redirecione para a página protegida após o login
          this.$router.push('/protected-route');
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
    },
  };
  </script>