<template>
  <div :class="[moduleConfig.rootClass]">
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

<style scoped></style>
