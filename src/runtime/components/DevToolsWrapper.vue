<template>
  <div class="devtools-layout" :class="[moduleConfig.rootClass]">
    <ClientOnly>
      <DevTools>
        <slot />
      </DevTools>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useModuleConfig } from "../composables/useModuleConfig";
const { moduleConfig } = useModuleConfig();
</script>

<style scoped>
.devtools-layout {
  position: absolute;
  min-height: 100vh;
  inset: 0;
}
</style>
