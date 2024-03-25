<template>
  <v-card class="elevation-12">
    <v-toolbar color="blue-lighten-3" dark flat>
      <v-toolbar-title>Check</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-container>
                <v-text-field v-model="selectedDate" type="month" outlined required @change="getData"></v-text-field>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-form>
        <v-tabs
          v-model="tab"
          align-tabs="center"
          stacked
          color="blue-lighten-3"
        >
          <v-tab value="tab-1">
            PENDING
          </v-tab>
          <v-tab value="tab-2">
            ACCEPTED
          </v-tab>
          <v-tab value="tab-3">
            REJECTED
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="tab-1">
            <v-card>
              <v-card-text><Card v-for="(data, index) in check_pending" :key="index" :card="data" /></v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="tab-2">
            <v-card>
              <v-card-text><Card v-for="(data, index) in check_approved" :key="index" :card="data" /></v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="tab-3">
            <v-card>
              <v-card-text><Card v-for="(data, index) in check_rejected" :key="index" :card="data" /></v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
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
      check_pending: null,
      check_approved: null,
      check_rejected: null,
      selectedDate : '2024-03'
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
          const response = await axios.get('http://127.0.0.1:8000/api/deposits/' + date[1] + '/' + date[0])
          this.check_pending = response.data.pending
          this.check_approved = response.data.approved ?? [];
          this.check_rejected = response.data.rejected ?? [];
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
