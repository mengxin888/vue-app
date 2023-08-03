<template>
    <div>{{ username }}</div>
    <div>{{ data.name }}</div>
    <div>LogInPage</div>
    <p>123</p>
</template>
<script setup>
import { ref,reactive } from 'vue';
let username = ref('hello world');
let data=reactive({
    name:'hello world'
})
</script>
<style  scoped>
</style>






```