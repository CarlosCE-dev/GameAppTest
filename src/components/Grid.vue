<template>
    <div class="grid" v-if="cells">
        <Food v-for="(item) in foods" :food="item" :key="item.id"/>
        <SquareCell v-for="(item, index) in cells" :cell="item" :index="index" :key="item.id"/>
    </div>
</template>

<script setup lang="ts">
// Components
import SquareCell from "./SquareCell.vue";
import Food from "./Food.vue";

// Store
import { useGameStore } from '../stores/game';
import { storeToRefs } from "pinia";

const store = useGameStore();
        
const { cells, foods } = storeToRefs(store);
const { randomizePositions } = store;

setInterval(() => {
    randomizePositions();
}, 2000);
</script>

<style scoped lang="scss">
.grid {
    position: relative;
    width: 501px;
    height: 900px;
    background: #333;
    background-image: linear-gradient(rgba(0, 255, 0, .7) 1px, transparent .1em), linear-gradient(90deg, rgba(0, 255, 0, .7) 1px, transparent .1em);
    background-size: 50px 50px;
}
</style>