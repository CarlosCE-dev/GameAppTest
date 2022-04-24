<template>
    <div class="grid" v-if="cells">
        <SquareCell v-for="(item) in cells" :cell="item" :key="item.id"/>
    </div>
</template>

<script setup lang="ts">
import SquareCell from "./SquareCell.vue";
import { useGameStore } from '../stores/game';
import { storeToRefs } from "pinia";

const store = useGameStore();
        
const { cells } = storeToRefs(store);
const { randomizePositions } = store;

setInterval(() => {
    randomizePositions();
}, 2000);
</script>

<style scoped>
.grid {
    position: relative;
    width: 500px;
    height: 900px;
    border: 1px black solid;
    background: #333;
    background-image: linear-gradient(rgba(0, 255, 0, .7) 1px, transparent .1em), linear-gradient(90deg, rgba(0, 255, 0, .7) 1px, transparent .1em);
    background-size: 50px 50px;
}
</style>