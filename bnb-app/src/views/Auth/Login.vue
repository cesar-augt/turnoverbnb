<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-container>
          <v-row>
            <v-text-field v-model="email" label="Email" outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="password" label="Password" outlined required type="password"></v-text-field>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="blue-lighten-3" dark block type="submit">Login</v-btn>
              </v-col>
              <v-col>
                <v-btn color="red" dark block type="button" @click="createUser" >Create a new user</v-btn>
              </v-col>
            </v-row>
        
      </v-container>
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
      async createUser(){
        try {
          this.$router.push('/user/create');
        }catch (error) {
          console.error(error)
        }
      }
    },
  };
  </script>