<script setup>
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

const projectStore = useProjectStore();
const { specificProjectData } = storeToRefs(projectStore);
</script>

<template>
    <section class="max-w-7xl mx-auto py-10 px-4 2xl:px-0">
         <h1 class="title-text">Master Layout</h1>
    </section>
</template>

