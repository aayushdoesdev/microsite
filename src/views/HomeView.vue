<script setup>
import HeroSection from "@/sections/HomeSections/HeroSection.vue";
import AmenitySection from "@/sections/HomeSections/AmenitySection.vue";
import HighlightSection from "@/sections/HomeSections/HighlightSection.vue";
import FloorPlanSection from "@/sections/HomeSections/FloorPlanSection.vue";
import MasterLayoutSection from "@/sections/HomeSections/MasterLayoutSection.vue";
import LocationSection from "@/sections/HomeSections/LocationSection.vue";
import EmiSection from "@/sections/HomeSections/EmiSection.vue";
import ContactSection from "@/sections/HomeSections/ContactSection.vue";
</script>

<template>
  <section class="">
    <HeroSection id=""/>
    <AmenitySection id="amenities"/>
    <HighlightSection id="highlights"/>
    <FloorPlanSection id="floor"/>
    <MasterLayoutSection id="master"/>
    <LocationSection id="location"/>
    <EmiSection/>
    <ContactSection/>
  </section>
</template>
