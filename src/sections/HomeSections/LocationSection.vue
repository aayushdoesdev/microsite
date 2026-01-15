<script setup>
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import 'leaflet/dist/leaflet.css'
import L from "leaflet";

// Fix default icons (common Vue 3/Vite issue)
delete (L.Icon.Default.prototype)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const projectStore = useProjectStore();
const { specificProjectData } = storeToRefs(projectStore);

const map = ref(null);
const marker = ref(null);

const initMap = (coords) => {
  if (map.value || coords.length !== 2) return;
  
  map.value = L.map("map").setView(coords, 13);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);
  
  marker.value = L.marker(coords).addTo(map.value)
    .bindPopup(`Project Location: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`)
    .openPopup();
};

watch(() => specificProjectData.value?.glocation, async (glocation) => {
  if (!glocation || map.value) return;
  
  const coords = glocation.split(",").map(c => parseFloat(c.trim()));
  if (isNaN(coords[0]) || isNaN(coords[1])) {
    console.error("Invalid coordinates:", glocation);
    return;
  }
  
  await nextTick();
  initMap(coords);
}, { immediate: true });

onUnmounted(() => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto py-10 px-4 2xl:px-0">
    <h1 class="title-text">Project Location</h1>
    <div id="map" class="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg border mt-4" />
    <p v-if="!specificProjectData.glocation" class="mt-4 text-gray-500">No location data available.</p>
  </section>
</template>

<style>
#map { height: 400px; } /* Fallback for Tailwind */
</style>
