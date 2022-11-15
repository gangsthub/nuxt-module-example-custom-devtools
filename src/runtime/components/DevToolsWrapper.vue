<template>
  <div class="devtools-layout" :class="[moduleConfig.rootClass]">
    <slot />
    <DevTools />
  </div>
</template>

<script setup lang="ts">
import { useModuleConfig } from "../composables/useModuleConfig";
const { moduleConfig } = useModuleConfig();
</script>

<style scoped>
.devtools-layout {
  position: absolute;
  inset: 0;
  min-height: 100vh;
}
</style>
