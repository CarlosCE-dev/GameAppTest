<template>
    <div class="cell" :style="styleCell">
        <div class="player">
            <div class="level">{{ currentLevel }}</div>
            <span class="name">{{ cell.id }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCell } from '../composables/useCell';
import type { ICell } from '../models/ICell';
import { useMovement } from '../composables/useMovement';

const { cell } = defineProps<{
  cell: ICell
}>()

const { styleCell } = useMovement(cell);
const { currentLevel } = useCell(cell);
</script>

<style scoped>
.cell {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.player {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: red;
    border: black 1px solid;
}

.name {
    position: absolute;
    left: 0;
    top: 0px;
    margin: 1px 1px;
    font-family: Arial, Helvetica, sans-serif;
    color:white;
    font-size: 10px;
}

.level {
    font-size: 32px;
    font-weight: 600;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>