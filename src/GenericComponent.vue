<template>
    <h1>Generic Component</h1>
    <p :id="props.value">Value: {{ props.value }}</p>
</template>

<script setup lang="ts" generic="T">

const props = defineProps<{
    value: T
}>();

</script>