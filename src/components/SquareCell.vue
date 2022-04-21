<template>
    <div class="cell" :style="styleCell">
        <div class="player">

        </div>
    </div>
</template>

<script lang="ts">
// Models
import { watch, computed, defineComponent, type PropType } from 'vue';
import { useCell } from '../composables/useCell';
import type { ICell } from '../models/ICell';

interface Props {
    cell: ICell
}

export default defineComponent({
    props: {
      cell: { type: Object as PropType<ICell>, required: true }  
    },
    setup(props) {
        const { styleCell } = useCell(props.cell);

        return {
            styleCell
        }
    }
})



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
    width: 40px;
    height: 40px;
    background-color: red;
    border: black 1px solid;
}
</style>