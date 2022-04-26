<template>
    <section>
        <div class="grid" v-if="cells" :style="gridStyles">
            <EmptyCell v-for="(_) in totalCells"/>
        </div>
        <Food v-for="(item) in foods" :food="item" :key="item.id"/>
        <SquareCell v-for="(item, index) in cells" :cell="item" :index="index" :key="item.id"/>
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
    cellsPerRow
} = useGrid();

const gridStyles = {
    gridTemplateColumns: `repeat(${cellsPerRow}, 50px)`
}

</script>

<style scoped lang="scss">
.grid {
    background: black;
    display: grid;
}
</style>