<template>
    <section>
        <div class="grid" v-if="cells" :style="gridStyles">
            <EmptyCell v-for="_ in totalCells"/>
            <Food v-for="item in foods" :food="item" :key="item.id"/>
            <SquareCell v-for="item in cells" :cell="item" :key="item.id"/>
        </div>
    </section>
</template>

<script setup lang="ts">
// Components
import SquareCell from "./SquareCell.vue";
import Food from "./Food.vue";
import EmptyCell from "./EmptyCell.vue";
import { useGrid } from "@/composables/useGrid";

const {
    cells,
    foods,
    totalCells,
    gridStyles,
} = useGrid();
</script>

<style scoped lang="scss">
.grid {
    background: black;
    display: grid;
}
</style>