<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK DETAILS</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form  @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-text-field  v-model="name" label="CUSTOMER" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  v-model="email" label="CUSTOMER EMAIL" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  v-model="account" label="ACCOUNT" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  v-model="amount" label="Amount" v-mask="'$###.###,##'" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-img :src="url_image" max-width="2000" max-height="1000"></v-img>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="blue-lighten-3" dark block type="submit" >Aprove</v-btn>
            </v-col>
            <v-col>
              <v-btn color="red" dark block type="button" @click="reject" >Reject</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
      
</template>
  
<script>
import axios from '../../service/auth'

export default {
  data() {
    return {
      id: '',
      amount: 0,
      url_image:'',
      email: '',
      name: '',
      account_id: ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.id = this.$store.state.deposit.id
      this.amount = this.$store.state.deposit.amount
      this.url_image = this.$store.state.deposit.url_image
      this.account = this.$store.state.deposit.account
      this.name = this.$store.state.deposit.name
      this.email = this.$store.state.deposit.email
    },
    async submit(){
      try {
        await axios.put('/deposit/approve/' + this.id);
        this.$router.push('/check/control');
      }catch (error) {
        console.error(error)
      }
    },
    async reject(){
      try {
        await axios.put('/deposit/reject/' + this.id);
        this.$router.push('/check/control');
      }catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
