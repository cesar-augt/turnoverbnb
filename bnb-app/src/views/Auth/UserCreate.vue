<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" :error-messages="errors && errors.name" label="Username" outlined required></v-text-field>
        <v-text-field v-model="email"  :error-messages="errors && errors.email" label="Email" outlined required></v-text-field>
        <v-text-field v-model="password" :error-messages="errors && errors.password" label="Password" outlined required type="password"></v-text-field>
        <v-btn color="blue-lighten-3" dark block type="submit">ADD USER</v-btn>
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
        errors: []
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/login/store', { email: this.email, password: this.password, name: this.username  })
            .then(function (response) {
              return response
            }).catch(error => {
              console.error(error);
            });
          if(response.status === 422 ){  
            this.errors = response.data.errors  
          }
          if(response.status === 200){
            this.$router.push('/');
          } 
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
