<template>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Expenses</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <Card v-for="(data, index) in expenses" :key="index" :card="data" />
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
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/deposit/03/2024')
        this.expenses = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
