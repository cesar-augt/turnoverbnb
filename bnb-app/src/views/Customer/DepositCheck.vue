<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK DEPOSIT</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-text-field v-model="description" label="Descrition" outlined required></v-text-field>
        <v-text-field v-model="amount" label="Amount" outlined required v-mask="'$###.###,##'"></v-text-field>
        <div>
          <v-file-input
            v-model="selectedFile.name"
            accept="image/*"
            label="Escolha uma imagem"
            outlined
            prepend-icon="mdi-camera"
            @change="handleImageUpload"
          ></v-file-input>
        </div>
        <v-btn color="blue-lighten-3" dark block type="submit">ADD DEPOSIT</v-btn>
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
        date : '',
        selectedFile: {
          name:''
        }
      };
    },
    methods: {
      async submit() {
        try {
          this.uploadImage()
          this.$router.push('/home');
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
      handleImageUpload(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadImage() {
        if (!this.selectedFile) {
          alert('Por favor, selecione um arquivo.');
          return;
        }
        const formData = new FormData();
        formData.append('foto', this.selectedFile, this.selectedFile.name);
        formData.append('amount', this.amount.replace("$", ""));
        formData.append('description', this.description);
       
        try {

          axios.post('/deposit/file', formData , {
          headers: {
            'Content-Type': 'multipart/form-data'
          }});

          this.$router.push('/home');

        } catch (error) {
          console.error('Erro ao enviar a imagem:', error);
        }
      }
    },
  };
  </script>