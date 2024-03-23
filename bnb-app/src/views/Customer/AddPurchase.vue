<template>
  <br>
  <br>
 <div>
   <div>Purchase</div>
   <div>
      CURRENT BALANCE
   </div>
   <div>
      $ 6320.00
   </div>
   <v-card class="mx-auto" max-width="300" >
    <v-text-field label="AMOUNT"></v-text-field>
    <v-text-field label="DATE"></v-text-field>
    <v-text-field label="DESCRIPTION"></v-text-field>
    <v-btn density="default">Default Button</v-btn>
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
