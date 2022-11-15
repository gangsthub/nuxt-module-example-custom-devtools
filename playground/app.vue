<template>
  <DevToolsWrapper>
    <div>
      Nuxt module playground!
      <input type="text" v-model="envVar" />
    </div>
  </DevToolsWrapper>
</template>

<script setup>
import { useNuxtApp } from "#imports";

const { $useEnvVar } = useNuxtApp();

const envVar = $useEnvVar("testEnvVar");
</script>
