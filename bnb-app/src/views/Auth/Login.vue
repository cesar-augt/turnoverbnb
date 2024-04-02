<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>BNB Bank</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-container>
          <v-row justify="center">
            <v-col lg="6" >
              <v-text-field v-model="email" :error-messages="errors && errors.email"  label="Email" outlined ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="6" >
              <v-text-field v-model="password" label="Password" outlined :error-messages="errors && errors.password" type="password"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="6" >
              <v-link dark flat @click="createUser">Already have an account?</v-link>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="6" >
              <v-btn color="blue-lighten-3"  :loading="loading" dark block type="submit">Login</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
  <v-snackbar v-model="snackbar">
      {{ snack_text }}
      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
  
  <script>
  import axios from '../../service/auth';
  
  export default {
    data() {
      return {
        email: '', 
        password: '',
        snackbar: false,
        snack_text: '',
        errors: []
      };
    },
    methods: {
      async submit() {
        try {
          await this.login()
          await this.isAdmin()
        } catch (error) {
          console.error(error);
        }
      },
      async login() {
        try {
          const response = await axios.post('/login', { email: this.email, password: this.password })
            .then(function (response) {
              localStorage.setItem('token', response.data.access_token)
              return response
            })
            .catch(error => {
              console.error('Erro ao fazer a requisição:', error);
            });
            if(response.status === 401){   
              this.snackbar = true
              this.snack_text = response.data.message  
            }
            if(response.status === 422){
              this.errors = response.data.errors  
            }
            if(response.status === 200){
              await this.isAdmin()
              this.$router.push('/home');
            }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
      createUser(){
        try {
          this.$router.push('/user/create');
        }catch (error) {
          console.error(error)
        }
      },
      async isAdmin(){
        try {
          const response = await axios.get('/login/admin')
          .then(function (response) {
           return response
          })
          .catch(error => {
            console.error('Erro ao fazer a requisição:', error);
          });
          if(response.status === 200){
            this.$router.push('/check/control');
          }
        }catch (error) {
          console.error(error)
        }
      }
    },
  };
  </script>
