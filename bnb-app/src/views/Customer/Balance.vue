<template>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>BALANCE</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
              <v-col>
                {{total_purchases}}
              </v-col>
              <v-col>
                <v-btn color="primary" dark block type="submit">ADD PURCHASE</v-btn>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                {{total_deposits}}
              </v-col>
              <v-col>
                <v-btn color="primary" dark block type="submit">ADD DEPOSIT</v-btn>
              </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
                {{total}}
            </v-col>
            <v-col>
                <v-text-field v-model="selectedDate" type="month" label="Descrition" outlined required @change="getData"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-form>
        <Card v-for="(data, index) in balance" :key="index" :card="data" />
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
      total: 0,
      total_purchases: 0,
      total_deposits: 0,
      selectedDate : '',
      expenses: null,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const date = this.selectedDate.split('-')
        if(date[0] >= 2020){
          const response = await axios.get('http://127.0.0.1:8000/api/balance/' + date[1] + '/' + date[0])
          this.balance = response.data.balance
          this.total_purchases = response.data.total_purchases
          this.total_deposits = response.data.total_deposits
          this.total = this.total_deposits - this.total_purchases
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
