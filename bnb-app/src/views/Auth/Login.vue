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
        email: '', 
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          await axios.post('/login', { email: this.email, password: this.password }).then(response => {
              localStorage.setItem('token', response.data.access_token)
            })
            .catch(error => {
              console.error('Erro ao fazer a requisição:', error);
            });
          this.$router.push('/home');
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
    },
  };
  </script>