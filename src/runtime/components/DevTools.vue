<template>
  <div class="custom-devtools" :class="[moduleConfig.defaultPosition]">
    <form @submit.prevent v-if="moduleConfig.openByDefault">
      <h3>Devtools</h3>
      <label v-for="(value, key) in formModel" :for="key" :key="key">
        <DevToolsInputField
          v-if="typeof formModel[key] === 'string'"
          v-model="formModel[key]"
          :formModel="formModel"
          :label="key"
        />
      </label>

      <hr v-if="hasSlots" />
      <h4 v-if="hasSlots">Custom Area</h4>
      <slot />
      <hr />

      <h4>Devtools Options</h4>
      <label for="positionClass">
        <p>Position</p>
        <select v-model="moduleConfig.defaultPosition" id="positionClass">
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </label>
    </form>

    <button
      class="toggle"
      @click="moduleConfig.openByDefault = !moduleConfig.openByDefault"
    >
      {{ moduleConfig.openByDefault ? "Close" : "Open" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { Ref, useSlots, computed } from "vue";
import { PublicRuntimeConfig } from "@nuxt/schema";

import { useDevToolsModel } from "../composables/useDevToolsModel";
import { useModuleConfig } from "../composables/useModuleConfig";

const { moduleConfig } = useModuleConfig();

let { model: formModel }: { model: Ref<Partial<PublicRuntimeConfig>> } =
  useDevToolsModel();

const $slots = useSlots();
const hasSlots = computed(
  () =>
    !!(
      $slots.default &&
      $slots.default().length &&
      $slots.default()[0].children?.length
    )
);
</script>

<style scoped>
p {
  margin-bottom: 0.1rem;
}
label {
  padding-bottom: 0.5rem;
}
input,
select {
  width: 100%;
}
form {
  margin-bottom: 2em;
}
hr {
  border: 1px solid currentColor;
  margin: 1em 0;
}
button {
  background-color: linen;
  padding: 0.5em 1em;
  border-radius: 0.2em;
}
.custom-devtools {
  height: min-content;
  position: absolute;
  padding: 1em;
  background: rgba(255, 249, 227, 0.9);
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
