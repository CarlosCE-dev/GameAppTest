<template>
    <transition-group name="flip-list" tag="ul" class="list-group m-2">
        <li class="list-group-item" v-for="(item, index) in store.playersSorted" :key="item.id">
            {{ item.name }} - {{  convertToRoman(item.level) }}
        </li>
        <li class="list-group-item list-group-item-danger" v-for="(item, index) in store.deadPlayers" :key="item.id">
            {{ item.name }} - {{  convertToRoman(item.level) }}
        </li>
    </transition-group>
</template>
<script setup lang="ts">import { useGameStore } from '@/stores/game';
import { convertToRoman } from '../helpers/number';

const store = useGameStore();



</script>

<style lang="scss" scoped>
.flip-list-move {
    transition: transform .200s;
}
</style>