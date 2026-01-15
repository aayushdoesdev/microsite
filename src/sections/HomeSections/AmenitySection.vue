<script setup>
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

const projectStore = useProjectStore();
const { specificProjectData } = storeToRefs(projectStore);
</script>

<template>
  <section class="bg-[#E1EFF4] py-10">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="title-text mb-8">Codename LIT – Amenities</h1>

      <div
        v-if="specificProjectData?.amenities?.length"
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6"
      >
        <div
          v-for="(amenity, index) in specificProjectData.amenities"
          :key="index"
          class="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition"
        >
          <!-- Icon -->
          <div class="h-10 w-10 flex items-center justify-center rounded-full bg-[#E1EFF4] text-[#1B5E7A]">
            ✓
          </div>

          <!-- Text -->
          <span class="text-sm font-medium text-gray-800">
            {{ amenity }}
          </span>
        </div>
      </div>

      <p v-else class="text-gray-500">
        No amenities available.
      </p>
    </div>
  </section>
</template>
