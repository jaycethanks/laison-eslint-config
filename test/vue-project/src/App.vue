<template>
  <button @click="plus">
    add
  </button>
  <button @click="minus">
    minus
  </button>
  <button @click="changeOuter">
    changeouter
  </button>
  <h2
    ref="h2"
    a="1"
    b="2"
    c="3"
    d="4"
    e="5"
    f="6"
    g="7"
  />
  <h2 ref="h2">
    {{ state.outerText }}
  </h2>
  <ul>
    <li v-for="i in 10" :key="i" ref="itemRefs">
      {{ i }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowReactive } from 'vue';

const h2 = ref();
const state = shallowReactive({ outerText: 1, outer: { innerText: 1, inner: { deep: { count: [] } } } });
function plus() {
  (state.outer.inner.deep.count as number[]).push(1);
}
function minus() {
  (state.outer.inner.deep.count as number[]).push(-1);
}
function changeOuter() {
  state.outerText++;
}
const itemRefs = ref([]);

onMounted(() => {
  console.log('[itemRefs]: ', itemRefs);
});
</script>
