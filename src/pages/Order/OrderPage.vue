<template>
   <div class="modal" v-if="open">
     <button @click="closeModal">X</button>
     <div class="modal-content" v-scroll-lock="open">
       <p>A bunch of scrollable modal content</p>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       open: false,
     }
   },
   methods: {
     openModal() {
       this.open = true
     },
     closeModal() {
       this.open = false
     },
   },
 }
 </script>