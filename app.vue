<template>
  <div>
    <div>
      {{ myRef }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const myRef = ref('Look at me im on SST')
</script>