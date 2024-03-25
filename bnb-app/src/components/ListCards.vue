<template>
  <v-card elevation="2"  class="elevate">
  <v-container fluid>
        <v-row>
          <!-- Lado esquerdo: nome e descrição -->
          <v-col cols="6" class="text-left">
            <div>
              <span class="font-weight-bold">{{ card.description }}</span>
            </div>
            <div>
              <span>{{ card.created_at }}</span>
            </div>
          </v-col>

          <!-- Lado direito: valor -->
          <v-col cols="6" class="text-right">
            <div class="font-weight-bold" >{{ card.amount }}</div>
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