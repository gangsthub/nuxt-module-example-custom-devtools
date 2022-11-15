<template>
  <DevToolsWrapper>
    <div>
      Nuxt module playground!
      <ClientOnly>
        <code>{{ envVar }}</code>
      </ClientOnly>
    </div>
  </DevToolsWrapper>
</template>

<script setup>
import { useNuxtApp } from "#imports";

const { $useEnvVar } = useNuxtApp();

const envVar = $useEnvVar("testEnvVar");
</script>
