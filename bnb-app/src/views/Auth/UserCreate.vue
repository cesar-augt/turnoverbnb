<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" label="Username" outlined required></v-text-field>
        <v-text-field v-model="email" label="Email" outlined required></v-text-field>
        <v-text-field v-model="password" label="Password" outlined required type="password"></v-text-field>
        <v-btn color="blue-lighten-3" dark block type="submit">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
      
</template>
  
  <script>
  import axios from '../../service/auth';
  
  export default {
    data() {
      return {
        username : '',
        email: '', 
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          await axios.post('/login/store', { email: this.email, password: this.password, name: this.username  }).then(response => {
            this.$router.push('/login');
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