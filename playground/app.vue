<template>
  <div>
    {{ envVar }}
  </div>
  <DevToolsWrapper />
</template>

<script setup>
import { useNuxtApp } from "#imports";

const { $useEnvVar } = useNuxtApp();

const envVar = $useEnvVar("testEnvVar");
</script>
