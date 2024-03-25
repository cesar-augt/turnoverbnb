<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK CONTROL</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <Card v-for="(data, index) in check" :key="index" :card="data" @click="openDetails(data)" />
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
      tab: 'tab-2',
      check: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/control')
        this.check = response.data
      } catch (error) {
        console.error(error)
      }
    },
    openDetails(data) {
      try {
        this.$store.commit('setDeposit', { id: data.id, amount: data.amount, description: data.description, name_image: data.name_image })
        this.$router.push('/check/details')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
