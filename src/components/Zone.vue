<template>
	<div class="cell" :style="styleZone"></div>
</template>

<script setup lang="ts">
import { useZone } from '@/composables/useZone';
import type { IZone } from '@/models/IZone';
const { zone } = defineProps<{
	zone: IZone
}>();

const { styleZone } = useZone(zone);
</script>

<style scoped lang="scss">
.cell {
	top: 0;
	left: 0;
	position: absolute;
	width: 50px;
	height: 50px;
	border: 1px rgba(0, 255, 0, 0.459) solid;
	transition: background 0.4s ease;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>