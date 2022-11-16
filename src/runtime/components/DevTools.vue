<template>
  <div class="custom-devtools" :class="[moduleConfig.defaultPosition]">
    <header>
      <h3>
        <span><img src="../images/cogwheel.png" alt="" /></span>
        <span>Devtools</span>
      </h3>
    </header>
    <form @submit.prevent v-if="moduleConfig.openByDefault">
      <h4 class="title">Runtime Config</h4>
      <label v-for="(value, key) in formModel" :for="key" :key="key">
        <DevToolsInputField
          v-if="typeof formModel[key] === 'string'"
          v-model="formModel[key]"
          :formModel="formModel"
          :label="key"
        />
      </label>

      <hr v-if="hasSlots" />
      <h4 class="title" v-if="hasSlots">Custom Area</h4>
      <slot />
      <hr />

      <h4 class="title">Devtools Options</h4>
      <label for="positionClass">
        <p class="title">Position</p>
        <select v-model="moduleConfig.defaultPosition" id="positionClass">
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </label>
    </form>

    <footer>
      <button
        class="toggle"
        @click="moduleConfig.openByDefault = !moduleConfig.openByDefault"
      >
        {{ moduleConfig.openByDefault ? "Close" : "Open" }}
      </button>
    </footer>
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
header {
  background-color: blueviolet;
  color: white;
  padding: 0.4em 0.8em;
}
header h3 {
  margin: 0;
  display: flex;

  align-items: center;
}
header h3 > span:nth-child(2) {
  padding-left: 0.5em;
}
header h3 img {
  height: 1em;
  width: 1em;
  filter: invert(1);
}
p {
  margin-bottom: 0.1rem;
}
h4 {
  margin-top: 0em;
}
label {
  padding-bottom: 0.5rem;
}
select {
  width: 100%;
  border-radius: 0.2em;
  padding: 0.2em 0.3em;
}
form,
footer {
  padding: 1em;
}
form {
  margin-bottom: 1em;
}
.title {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 70%;
}
hr {
  border: 1px solid currentColor;
  margin: 1.5em 0;
}
button {
  background-color: linen;
  padding: 0.5em 1em;
  border-radius: 0.2em;
}
.custom-devtools {
  height: min-content;
  position: absolute;
  background: hsl(288deg 100% 90% / 90%);
}
.custom-devtools.top-left {
  left: 0;
  top: 0;
  border-end-end-radius: 0.5em;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0/0.1),
    0 2px 4px -2px rgb(0 0 0/0.1);
}
.custom-devtools.top-right {
  right: 0;
  top: 0;
  border-end-start-radius: 0.5em;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0/0.1),
    0 2px 4px -2px rgb(0 0 0/0.1);
}
.custom-devtools.bottom-left {
  bottom: 0;
  left: 0;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 -4px 6px -1px rgb(0 0 0/0.1),
    0 -2px 4px -2px rgb(0 0 0/0.1);
}
.custom-devtools.bottom-left,
.custom-devtools.bottom-left header {
  border-start-end-radius: 0.5em;
}
.custom-devtools.bottom-right {
  bottom: 0;
  right: 0;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 -4px 6px -1px rgb(0 0 0/0.1),
    0 -2px 4px -2px rgb(0 0 0/0.1);
}
.custom-devtools.bottom-right,
.custom-devtools.bottom-right header {
  border-start-start-radius: 0.5em;
}
</style>
