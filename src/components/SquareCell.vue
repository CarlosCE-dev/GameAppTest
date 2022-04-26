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
    top: 0;
    left: 0;
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-transition: all 0.2s ease 0.2s; 
    -moz-transition: all 0.2s ease 0.2s;
    -o-transition: all 0.2s ease 0.2s;
    -ms-transition: all 0.2s ease 0.2s;
    transition: all 0.2s ease 0.2s
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
    transition:left 1s linear;
    transition:right 1s linear;
    transition:top 1s linear;
    transition:bottom 1s linear;
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