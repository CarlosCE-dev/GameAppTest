<template>
    <div class="cell" :style="styleCell">
        <div class="player" :style="playerStyle">
            <span class="name" :style="textStyle">{{ cell.name }}</span>
            <span class="level" :style="textStyle">{{ currentLevel }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCell } from '../composables/useCell';
import type { ICell } from '../models/ICell';
import { useMovement } from '../composables/useMovement';
import { getCorrectColor } from '../helpers/view';

const { cell } = defineProps<{
  cell: ICell
}>();
const playerStyle = {
    backgroundColor: cell.color,
};
const textStyle = {
    color: getCorrectColor(cell.color)
};
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
    line-height: 14px;
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
    font-size: 10px;
}

.level {
    font-size: 18px;
    font-weight: 600;
}
</style>