<template>
    <div class="cell" :style="styleCell">
        <div class="player" :style="playerStyle">
            <div class="level" :style="textStyle">{{ currentLevel }}</div>
            <span class="name" :style="textStyle">{{ index }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCell } from '../composables/useCell';
import type { ICell } from '../models/ICell';
import { useMovement } from '../composables/useMovement';
import { getCorrectColor } from '../helpers/view';

const { cell, index } = defineProps<{
  cell: ICell,
  index: number
}>()

const playerStyle = {
    backgroundColor: cell.color,
};
const textStyle = {
    color: getCorrectColor(cell.color)
}
const { styleCell } = useMovement(cell);
const { currentLevel } = useCell(cell);
</script>

<style scoped lang="scss">
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
    border: black 1px solid;
}

.name {
    position: absolute;
    left: 0;
    top: 0px;
    margin: 1px 1px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
}

.level {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>