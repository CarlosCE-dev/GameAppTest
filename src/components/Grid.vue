<template>
    <section>
        <div class="grid" v-if="cells">
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

const {
    cells,
    foods,
    zones
} = useGrid();
</script>

<style scoped lang="scss">
.grid {
    background: black;
    display: grid;
}
</style>