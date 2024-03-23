<template>
  <v-card
    elevation="16"
    max-width="344"
  >
  <v-container>
    <v-row>
      <v-col>
        <v-card-item>
            <v-card-title>
              {{ card.description }}
            </v-card-title>
            <v-card-subtitle>
              {{ card.amount }}
            </v-card-subtitle>
          </v-card-item>
        </v-col>
        <v-col>
          aaa
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

  
  <script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  </style>