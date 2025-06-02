<template>
    <dialog ref='dialog' :class="Styles.dialog">
        <slot />
    </dialog>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef, watch } from 'vue';
import Styles from "./index.module.css";

interface Props {
    visible: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    visible: false
})

watch(props, () => {
    if (props.visible === true) {
        openDialog()
    } else {
        closeDialog()
    }
})

const dialogRef = useTemplateRef('dialog')

// TODO: 在vue中，可以使用 transition 进行动画播放和过渡效果，但可能需要使用 v-if 或 v-show 等去进行 dialog 显示

const openDialog = () => {
    dialogRef.value?.classList.add(Styles['dialog-open'])
    const onAnimationEnd = () => {
        dialogRef.value?.classList.remove(Styles['dialog-open'])
        dialogRef.value?.removeEventListener("animationend", onAnimationEnd)
    }
    dialogRef.value?.addEventListener("animationend", onAnimationEnd)
    dialogRef.value?.showModal()
}

const closeDialog = () => {
    dialogRef.value?.classList.add(Styles['dialog-closing']);
    const onAnimationEnd = () => {
        dialogRef.value?.close()
        dialogRef.value?.classList.remove(Styles['dialog-closing'])
        dialogRef.value?.removeEventListener('animationend', onAnimationEnd)
    }
    dialogRef.value?.addEventListener('animationend', onAnimationEnd)
}

onMounted(() => {
    dialogRef.value?.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault()
            closeDialog()
        }
    })
})

</script>
