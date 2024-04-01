<template>
  <v-card >
    <v-app-bar color="blue-lighten-3" dark flat app>
            <v-container  justify-center>
              <v-app-title >BNB Bank</v-app-title>
            </v-container>
          </v-app-bar>
    <v-toolbar color="blue-lighten-3" extended  dark flat>
      <v-container>
        <v-row>
          <v-col>
            BALANCE
          </v-col>
        </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="total" type="text" label="Current Balance"  v-mask="'$###.###,##'"  readonly outlined ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="selectedDate" type="month" outlined required @change="getData"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
              <v-col>
                <v-text-field v-model="total_deposits" type="text" label="Incomes" readonly outlined  v-mask="'$###.###,##'"></v-text-field>
              </v-col>
              <v-col>
                <v-card @click="openDeposit">
                  <v-card-title>
                    <v-icon>mdi-plus</v-icon>
                  </v-card-title>
                  <v-card-text>
                    DEPOSIT A CHECK
                  </v-card-text>
                </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                <v-text-field v-model="total_purchases" type="text" label="Expenses" v-mask="'$###.###,##'" readonly outlined ></v-text-field>
              </v-col>
              <v-col>
                <v-card @click="openPurchase">
                  <v-card-title>
                    <v-icon>mdi-plus</v-icon>
                  </v-card-title>
                  <v-card-text>
                    PURCHASE
                  </v-card-text>
                </v-card>
              </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-form>
        <div class="text-left font-weight-bold">TRANSACTIONS</div>
        <ListCard v-for="(data, index) in balance" :key="index" :card="data" />
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import ListCard from '../../components/ListCards';

import axios from '../../service/auth';

export default {
  components: {
    ListCard
  },
  data() {
    return {
      total: 0,
      total_purchases: 0,
      total_deposits: 0,
      selectedDate : '',
      balance: null,
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
        if(date[0] >= 2020){
          const response = await axios.get('/balance/' + date[1] + '/' + date[0])
          this.balance = response.data.balance
          this.total_purchases = response.data.total_purchases
          this.total_deposits = response.data.total_deposits
          this.total = this.total_deposits - this.total_purchases
          this.$store.commit('setBalance', { current: this.total })
        }
      } catch (error) {
        console.error(error)
      }
    },
    openDeposit(){
      this.$router.push('/deposit');
    },
    openPurchase(){
      this.$router.push('/purchase');
    }
  }
}
</script>
