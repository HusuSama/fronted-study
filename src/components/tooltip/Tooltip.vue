<template>
    <div :class="Styles.trigger">
        <div :class="[Styles.tooltip, Styles[`tooltip-${props.position}`]]" :data-tooltip="props.content"></div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import Styles from "./index.module.css";

type TooltipPosition = "top" | "bottom" | "left" | "right"

interface Props {
    content: string,
    position?: TooltipPosition
}

// const props = defineProps<Props>()

const props = withDefaults(defineProps<Props>(), {
    position: "top"
})
</script>
