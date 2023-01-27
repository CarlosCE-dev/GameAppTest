<template>
    <section class="d-flex">
        <LeaderBoards />
        <div class="grid m-2" v-if="cells">
            <Zone v-for="item in zones" :zone="item" :key="item.id"/>
            <Food v-for="item in foods" :food="item" :key="item.id"/>
            <Cell v-for="item in cells" :cell="item" :key="item.id"/>
        </div>
    </section>
</template>

<script setup lang="ts">
// Components
import Cell from "./Cell.vue";
import Food from "./Food.vue";
import Zone from "./Zone.vue";
import { useGrid } from "@/composables/useGrid";
import LeaderBoards from "./LeaderBoards.vue";

const {
    cells,
    foods,
    zones
} = useGrid();
</script>

<style scoped lang="scss">
.grid {
    position: relative;
    background: black;
    display: grid;
}
</style>