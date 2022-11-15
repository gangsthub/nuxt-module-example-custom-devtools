<template>
  <div class="custom-devtools" :class="[positionClass]">
    <form @submit.prevent v-if="isOpen">
      <h2>Devtools</h2>
      <label v-for="(value, key) in formModel" :for="key" :key="key">
        <div v-if="typeof value === 'string'">
          <p>{{ key }}</p>
          <input type="text" v-model="formModel[key]" :id="key" />
        </div>
      </label>
      <label for="position">
        <p>Position</p>
        <select v-model="positionClass" id="position">
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </label>
    </form>
    <button class="toggle" @click="isOpen = !isOpen">
      {{ isOpen ? "Close" : "Open" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useDevToolsModel } from "../composables/useDevToolsModel";
import { useModuleConfig } from "../composables/useModuleConfig";

const { moduleConfig } = useModuleConfig();
const positionClass = ref(moduleConfig.defaultPosition);
const isOpen = ref(moduleConfig.openByDefault);

let formModel = useDevToolsModel();
</script>

<style scoped>
p {
  margin-bottom: 0.1rem;
}
label {
  margin-bottom: 0.5rem;
}
input,
select {
  width: 100%;
}
form {
  margin-bottom: 1em;
}
.custom-devtools {
  position: absolute;
  height: min-content;
  padding: 1em;
  background: rgba(255, 249, 227, 0.9);
  z-index: 9999;
}
.custom-devtools.top-left {
  left: 0;
  top: 0;
}
.custom-devtools.top-right {
  right: 0;
  top: 0;
}
.custom-devtools.bottom-left {
  bottom: 0;
  left: 0;
}
.custom-devtools.bottom-right {
  bottom: 0;
  right: 0;
}
</style>
