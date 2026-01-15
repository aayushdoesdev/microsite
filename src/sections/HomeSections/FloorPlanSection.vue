<script setup>
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

const projectStore = useProjectStore();
const { specificProjectData } = storeToRefs(projectStore);
</script>

<template>
    <section class="max-w-7xl mx-auto py-10 px-4 2xl:px-0">
         <h1 class="title-text">Typical Floor Plan</h1>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div v-for="img in specificProjectData?.floorPlan" class="">
                <img :src="img" alt="">
            </div>
         </div>
    </section>
</template>

