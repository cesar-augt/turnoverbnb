<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK DEPOSIT</v-toolbar-title>
    </v-toolbar>
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-container>
          <v-row justify="center">
            <v-col lg="2" >
              <v-text-field v-model="total" type="text" label="Current Balance"  v-mask="'$###.###,##'"  readonly outlined > </v-text-field>
            </v-col>
            <v-col lg="6" >
            </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submit">
        <v-container>
          <v-row justify="center">
            <v-col lg="8" >
              <v-text-field v-model="amount" :error-messages="errors.amount" label="Amount" outlined required v-mask="'$###.###,##'" hint="The money will be deposited in your account once the check is accepted">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" >
              <v-text-field v-model="description"  :error-messages="errors.description" label="Descrition" outlined required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" >
              <v-file-input 
                :error-messages="errors.check_file" 
                v-model="selectedFile.name"
                accept="image/*"
                label="Escolha uma imagem"
                outlined
                prepend-icon="mdi-camera"
                @change="handleImageUpload"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="8" >
              <v-btn color="blue-lighten-3"  :loading="loading" dark block type="submit">ADD DEPOSIT</v-btn>
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
        description: '',
        amount: '',
        date : '',
        selectedFile: {
          name:''
        },
        errors: [],
        loading: false,
        total: 0
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.total = this.$store.state.balance.current
      },
      async submit() {
        try {
          this.loading = true
          await this.uploadImage()
          this.loading = false
        } catch (error) {
          console.error(error);
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
        if(this.selectedFile.name != ''){
          formData.append('check_file', this.selectedFile, this.selectedFile.name);
        }
        formData.append('amount', this.amount.replace("$", ""));
        formData.append('description', this.description);

        try {
          const response = await axios.post('/deposit/file', formData , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(function (response) {
              return response
            }).catch(function (error) {
              console.log(error)
            });
            if(response.status === 422){
              this.errors = response.data.errors  
            }
            if(response.status === 201){
              this.$router.push('/home');
            }  
        } catch (error) {
          console.error(error); 
        }
      }
    },
  };
  </script>
