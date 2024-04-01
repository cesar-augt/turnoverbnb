<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>PURCHASE</v-toolbar-title>
    </v-toolbar>
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-text-field v-model="total" type="text" label="Current Balance"  v-mask="'$###.###,##'"  readonly outlined > </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="onClickSubmit">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="amount" :error-messages="errors.amount" label="Amount" outlined v-mask="'$###.###,##'" suffix="USD"></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="date" type="date" label="Date" :error-messages="errors.date"  outlined ></v-text-field>
          <v-text-field v-model="description" label="Descrition" :error-messages="errors.description"  outlined ></v-text-field>
          <v-btn color="blue-lighten-3" dark block type="submit" :loading="loading">ADD PURCHASE</v-btn>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
  <div class="text-center ma-2">
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
  </div>
</template>
  
  <script>
  import axios from '../../service/auth';
  
  export default {
    data() {
      return {
        description: '',
        amount: '',
        date : '',
        errors: [],
        loading: false,
        total: 0,
        snackbar: false,
        snack_text: '',
      };
    },
    mounted() {
      this.getData()
    },
    watch: {
      inputValue(newValue) {
        this.amount = this.removeMask(newValue);
      }
    },
    methods: {
      getData() {
        this.total = this.$store.state.balance.current
      },
      async onClickSubmit(){
        try {
          this.loading = true
          await this.submit()
          this.loading = false
        } catch (error) {
          console.error(error);
        }
      },
      async submit() {
        try {
          const response = await axios.post('/purchase', { amount: this.removeMask(this.amount), description: this.description , date : this.date})
            .then(function (response) {
              return response
            }).catch(function (error) {
              console.log(error)
            })
            if(response.status === 422){
              this.errors = response.data.errors  
            }
            if(response.status === 402){
              this.snackbar = true
              this.snack_text = response.data.message  
            }
            if(response.status === 201){
              this.$router.push('/home');
            }  
        } catch (error) {
          console.error(error);
        }
      },   
      removeMask(value) {
        return value.replace(/\D/g, '');
      } 
    }
  };
  </script>
