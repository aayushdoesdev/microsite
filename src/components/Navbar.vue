<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const scrollToSection = (id) => {
  closeSidebar();

  // wait for sidebar close animation
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
};
</script>

<template>
  <!-- NAVBAR -->
  <nav class="bg-[#E1EFF4] py-4 px-4 2xl:px-0 relative z-50">
    <div
      class="max-w-7xl mx-auto flex items-center justify-between font-poppins text-[14px]"
    >
      <div>
        <img src="/svg/adani-logo.svg" alt="Logo" />
      </div>

      <div class="hidden xl:flex items-center gap-6">
        <a href="#">About</a>
        <a href="#amenities">Amenities</a>
        <a href="#highlights">Project Highlights</a>
        <a href="#floor">Typical Floor Plan</a>
        <a href="#master">Master Layout</a>
        <a href="#location">Location</a>
      </div>

      <div class="flex items-center gap-3">
        <button class="border border-black px-4 py-2 rounded-full">
          Enquire Now
        </button>

        <div class="xl:hidden">
          <button
            class="pi pi-bars text-[20px]"
            @click="isSidebarOpen = true"
          ></button>
        </div>
      </div>
    </div>
  </nav>

  <!-- OVERLAY -->
  <div
    v-if="isSidebarOpen"
    class="fixed inset-0 bg-black/40 z-40"
    @click="closeSidebar"
  ></div>

  <!-- SIDEBAR -->
  <aside
    class="fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="p-6 flex flex-col gap-6">
      <!-- Close Button -->
      <div class="flex justify-between items-center">
        <img src="/svg/adani-logo.svg" alt="Logo" class="h-6" />
        <button class="text-xl" @click="closeSidebar">✕</button>
      </div>

      <!-- Links -->
      <nav class="flex flex-col gap-4 text-sm">
        <a href="#" @click.prevent="scrollToSection('about')">About</a>

        <a href="#amenities" @click.prevent="scrollToSection('amenities')">
          Amenities
        </a>

        <a href="#highlights" @click.prevent="scrollToSection('highlights')">
          Project Highlights
        </a>

        <a href="#floor" @click.prevent="scrollToSection('floor')">
          Typical Floor Plan
        </a>

        <a href="#master" @click.prevent="scrollToSection('master')">
          Master Layout
        </a>

        <a href="#location" @click.prevent="scrollToSection('location')">
          Location
        </a>
      </nav>
    </div>
  </aside>
</template>
