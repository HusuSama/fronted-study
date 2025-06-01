<template>
    <div class="trigger">
        <div :class="['tooltip', props.position]" :data-tooltip="props.content"></div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import "./index.css";

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
