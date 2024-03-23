<template>
  <div class="about">
    <br>
    <br>
    <div>
      <v-row>
        <v-col>
          <v-text-field label="Label"></v-text-field>
        </v-col>
        <v-col>
          <!-- Seu segundo componente aqui -->
          <v-btn color="secondary">+</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-text-field label="Label"></v-text-field>
        </v-col>
        <v-col>
          <!-- Seu segundo componente aqui -->
          <v-btn color="secondary">+</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      TRANSACTIONS
    </div>
    <v-card class="mx-auto" max-width="300" >
    <v-list :items="items"></v-list>
  </v-card>
    
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Item #1',
          value: 1,
        },
        {
          title: 'Item #2',
          value: 2,
        },
        {
          title: 'Item #3',
          value: 3,
        },
      ],
    }),
  }
</script>
