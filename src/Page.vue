<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
</script>

<template>
  <div>
    <button @click="router.push({name: 'Player'})">Go to player page and check settings</button>
  </div>
</template>

<style scoped>

</style>