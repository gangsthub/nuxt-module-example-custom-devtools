<template>
  <p>{{ label }}</p>
  <input v-bind="$attrs" type="text" v-model="formModel[label]" :id="label" />
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { PublicRuntimeConfig } from "@nuxt/schema";

defineProps<{
  formModel: Ref<Partial<PublicRuntimeConfig>>;
  label: string;
}>();
</script>
