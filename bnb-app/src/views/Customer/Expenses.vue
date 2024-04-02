<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>Expenses</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row justify="center">
            <v-col lg="2" >
              <v-text-field v-model="selectedDate" type="month" outlined required @change="getData"></v-text-field>
            </v-col>
            <v-col lg="6">
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row justify="center">
            <v-col lg="8" >
              <Card v-for="(data, index) in expenses" :key="index" :card="data" />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import Card from '../../components/ListCards';
import axios from '../../service/auth';

export default {
  components: {
    Card
  },
  data() {
    return {
      expenses: null,
      selectedDate : ''
    }
  },
  mounted() {
    this.getYearAndMonth()
    this.getData()
  },
  methods: {
    getYearAndMonth(){
      const date = new Date()
      this.selectedDate =  date.getFullYear()
      this.selectedDate += "-" + (date.getMonth() + 1).toString().padStart(2, "0")
    },
    async getData() {
      try {
        const date = this.selectedDate.split('-')
        if(date[0] >= 2020 && date[0] <= 2100){
          const response = await axios.get('/purchases/' + date[1] + '/' + date[0])
          this.expenses = response.data.purchases
          this.expenses.forEach((item) => {
            item.type = "purchases";
          });
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
