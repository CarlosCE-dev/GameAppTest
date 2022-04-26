<template>
    <div class="cell" :style="styleCell">
        <div class="player">

        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFood } from '@/models/IFood';
import { useMovement } from '../composables/useMovement';

const { food } = defineProps<{
  food: IFood
}>()

const { styleCell } = useMovement(food);
</script>

<style scoped lang="scss">
.cell {
    top: 0;
    left: 0;
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.player {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    animation: fadeIn 5s;
    -webkit-animation: fadeIn .5s ease;
    -moz-animation: fadeIn .5s ease;
    -o-animation: fadeIn .5s ease;
    -ms-animation: fadeIn .5s ease;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>