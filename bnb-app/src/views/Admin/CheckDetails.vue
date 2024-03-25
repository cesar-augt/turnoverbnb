<template>
  <br>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK DETAILS</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form  @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-text-field  v-model="amount" label="Amount" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  v-model="description" label="Descrition" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field  type="date" label="Descrition" readonly outlined required></v-text-field>
          </v-row>
          <v-row>
            <v-img src="http://127.0.0.1:8000/storage/fotos/1711328380.jpg"></v-img>
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
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.id = this.$store.state.deposit.id
      this.amount = this.$store.state.deposit.amount
      this.description = this.$store.state.deposit.description
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