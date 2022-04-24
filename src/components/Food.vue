<template>
    <div class="cell" :style="styleCell">
        <div class="player">

        </div>
    </div>
</template>

<script setup lang="ts">
import { useCell } from '../composables/useCell';
import type { ICell } from '../models/ICell';

const { cell } = defineProps<{
  cell: ICell
}>()

const { styleCell } = useCell(cell);
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
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
}
</style>