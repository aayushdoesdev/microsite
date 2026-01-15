<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Luxurious Living, Redefined",
    description:
      "Step into a world of 2 and 3 BHK residences, where modern design meets enduring comfort.",
    image: "https://img.freepik.com/free-photo/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_181624-18618.jpg",
  },
  {
    title: "Designed For Elegance",
    description:
      "Thoughtfully planned spaces that elevate your everyday living experience.",
    image: "https://img.freepik.com/free-photo/office-buildings-with-modern-architecture_107420-95734.jpg",
  },
  {
    title: "Urban Comfort, Perfected",
    description:
      "A harmonious blend of modern architecture and natural surroundings.",
    image: "https://img.freepik.com/free-photo/landscape-modern-city_1127-351.jpg",
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto py-10 px-4 2xl:px-0">
    <h1 class="title-text mb-16">Project Highlights</h1>

    <Swiper
      :modules="[Navigation, EffectFade]"
      effect="fade"
      :slides-per-view="1"
      :allow-touch-move="false"
      :fade-effect="{ crossFade: true }"
      :navigation="{
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      }"
      class="relative"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index" class="py-10">
        <div class="flex flex-col xl:flex-row items-center gap-12">
          <!-- LEFT CONTENT -->
          <div class="w-full xl:w-1/2">
            <h1 class="font-poppins uppercase text-[50px] leading-tight mb-6">
              {{ slide.title }}
            </h1>

            <p class="nrml-text max-w-md">
              {{ slide.description }}
            </p>

            <!-- Navigation -->
            <div class="flex gap-4 mt-10">
              <button class="pi pi-arrow-left prev-btn nav-btn"></button>
              <button class="pi pi-arrow-right next-btn nav-btn"></button>
            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="w-1/2 flex justify-center">
            <div class="relative">
              <!-- Outer soft shape -->
              <div
                class="absolute inset-0 rounded-full bg-blue-100 blur-xl scale-100"
              ></div>

              <!-- Circular Image -->
              <div
                class="relative w-[420px] h-[420px] rounded-full overflow-hidden shadow-xl"
              >
                <img
                  :src="slide.image"
                  class="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #000;
  color: #fff;
}

.swiper-slide {
  opacity: 0 !important;
  pointer-events: none;
}

.swiper-slide-active {
  opacity: 1 !important;
  pointer-events: auto;
}
</style>
