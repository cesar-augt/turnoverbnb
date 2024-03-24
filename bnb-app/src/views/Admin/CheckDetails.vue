<template>
  <br>
  <br>
  <br>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>CHECK DETAILS</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field  label="Amount" readonly outlined required></v-text-field>
        <v-text-field  label="Descrition" readonly outlined required></v-text-field>
        <v-text-field  type="date" label="Descrition" readonly outlined required></v-text-field>
        <v-btn color="primary" dark block>Aprove</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
      
</template>
  
<script>
import axios from '../../service/auth';
// export default {
//   params: {
//     parametros: Array,
//   },
//   setup(params) {
//     console.log(params.parametros); // ['param1', 'param2', 'param3']
//   },
// };
</script>