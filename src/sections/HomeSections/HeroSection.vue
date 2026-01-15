<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const route = useRoute();
const projectStore = useProjectStore();

const { specificProjectData } = storeToRefs(projectStore);

// fallback IDs (SAFE DEFAULTS)
const DEFAULT_PROJECT_ID = "695ce360dfae219c1d7020a1";
const DEFAULT_MANAGER_ID = "68e6a437b71ee3a333f26a55";

// Extract params safely
const projectId =
  typeof route.params.projectId === "string"
    ? route.params.projectId
    : DEFAULT_PROJECT_ID;

const managerId =
  typeof route.params.managerId === "string"
    ? route.params.managerId
    : DEFAULT_MANAGER_ID;

onMounted(async () => {
  await projectStore.getProjectByid(projectId);
  await projectStore.getSourcingManagerById(managerId);
});
</script>


<template>
  <section class="max-w-7xl mx-auto px-4 py-10 2xl:px-0 font-poppins">
    <div class="">
      <h1 class="font-medium text-[30px]">{{ specificProjectData?.projectName }}</h1>
      <div class="flex flex-col items-start md:flex-row md:items-center gap-2 nrml-text">
        <p>{{ specificProjectData?.venue }}</p>
        •
        <p>Price starting @ Rs. {{ specificProjectData?.minPrice }} Onwards*</p>
      </div>
    </div>

    <div class="mt-6">
      <Swiper 
        :modules="[Navigation]" 
        :navigation="false"
        :slides-per-view="1" 
        :space-between="10" 
        @swiper="onSwiper" 
        @slideChange="onSlideChange"
      >
        <!-- Replace with your actual project images, e.g., specificProjectData?.images array -->
        <SwiperSlide v-for="(image, index) in specificProjectData?.propertyPictures || []" :key="index">
          <img :src="image" :alt="`Project image ${index + 1}`" class="w-full h-[600px] object-cover rounded-3xl" />
        </SwiperSlide>
      </Swiper>

      <div class="flex items-center justify-center gap-4 mt-6">
        <button 
          class="pi pi-arrow-left p-4 rounded-full border border-black hover:bg-gray-100 transition-colors" 
          @click="swiperRef?.slidePrev()"
        ></button>
        <button 
          class="pi pi-arrow-right p-4 rounded-full border border-black hover:bg-gray-100 transition-colors" 
          @click="swiperRef?.slideNext()"
        ></button>
      </div>
    </div>

    <div class="mt-6">
      <p class="nrml-text">
        {{ specificProjectData?.description }}
      </p>
    </div>
  </section>
</template>
