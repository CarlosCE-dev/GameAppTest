<template>
    <div class="grid">
        <SquareCell v-for="(item) in cells" :cell="item" :key="item.id"/>
    </div>
</template>

<script setup lang="ts">
import SquareCell from "./SquareCell.vue";
import type { ICell } from '@/models/ICell';

const cells:ICell[] = [
    {
        id: 1,
        top: 0,
        left: 0
    },
    {
        id: 1,
        top: 1,
        left: 2
    },
    {
        id: 1,
        top: 5,
        left: 9
    }
];
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