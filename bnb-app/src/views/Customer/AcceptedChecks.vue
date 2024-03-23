<template>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Check</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-container>
                <v-text-field v-model="selectedDate" type="month" label="Descrition" outlined required @change="getData"></v-text-field>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-form>
        <Card v-for="(data, index) in check" :key="index" :card="data" />
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
      check: null,
      selectedDate:''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const date = this.selectedDate.split('-')
        if(date[0] >= 2020 && date[0] <= 2100){
          const response = await axios.get('http://127.0.0.1:8000/api/purchases/' + date[1] + '/' + date[0])
          this.check = response.data
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
