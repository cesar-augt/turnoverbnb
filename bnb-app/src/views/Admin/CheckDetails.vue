<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK DETAILS</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form  @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-text-field  v-model="description" label="Descrition" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  v-model="amount" label="Amount" v-mask="'$###.###,##'" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  type="date" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-img :src="url_image" width="400" height="200"></v-img>
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
import axios from '../../service/auth';
export default {
  data() {
    return {
      id: '',
      amount: 0,
      description: '',
      url_image:''
    }
  },
  mounted() {
    this.getData()
    this.url_image = import.meta.env.VITE_API_URL + "/" + this.name_image
    console.log(this.url_image)
  },
  methods: {
    getData() {
      this.id = this.$store.state.deposit.id
      this.amount = this.$store.state.deposit.amount
      this.description = this.$store.state.deposit.description
      this.name_image = this.$store.state.deposit.name_image
    },
    async submit(){
      try {
        await axios.put('/deposit/approve/' + this.id);
        this.$router.push('/deposit');
      }catch (error) {
        console.error(error)
      }
    },
    async reject(){
      try {
        await axios.put('/deposit/reject/' + this.id);
        this.$router.push('/deposit');
      }catch (error) {
        console.error(error)
      }
    }
  }
}
</script>