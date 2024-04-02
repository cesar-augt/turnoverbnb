<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>CHECK CONTROL</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <div v-if="error">
          <p>{{ error }}</p>
        </div>
        <v-container>
          <v-row justify="center">
            <v-col lg="8" >
              <Card v-for="(data, index) in check" :key="index" :card="data" @click="openDetails(data)" />
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
      tab: 'tab-2',
      check: null,
      error: null,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('/control')
        this.check = response.data
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    openDetails(data) {
      try {
        this.$store.commit('setDeposit', { id: data.id, amount: data.amount, name: data.user.name, url_image: data.url_image ,  email: data.user.email, account: data.user.id })
        this.$router.push('/check/details')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
