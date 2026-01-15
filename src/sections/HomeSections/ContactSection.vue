<script setup>
import { onMounted, ref } from "vue";
import { useProjectStore } from "@/stores/projectStore";
import { storeToRefs } from "pinia";

const projectStore = useProjectStore();
const { specificProjectData, sourcingManagerData } = storeToRefs(projectStore);

</script>

<template>
  <section class="bg-[#E1EFF4] py-10 font-poppins px-4 2xl:px-0">
    <div class="max-w-7xl mx-auto text-center">
      <div class="">
        <p class="font-semibold uppercase">Contact Us</p>
        <h1 class="font-semibold text-[40px] md:text-[60px]">Let's Start Your Journey</h1>
        <p class="nrml-text">
          Connect with our expert team to discover your <br />dream home and
          experience luxury living at its finest
        </p>
      </div>

      <div class="mt-16 border border-black p-6 rounded-2xl relative">
        <h3 class="title-text mt-6">Your Dedicated Agent</h3>
        <p class="nrml-text">
          Get in touch with our expert to schedule a site visit and explore your
          future home
        </p>

        <div
          class="border border-black p-6 rounded-2xl max-w-[90%] mx-auto mt-10"
        >
          <div
            class="border border-black px-4 py-3 rounded-lg w-fit bg-[#E1EFF4] absolute -top-6 left-1/2 -translate-x-1/2"
          >
            <i class="pi pi-phone text-[20px]"></i>
          </div>
          <p class="uppercase text-[14px]">Agent Name</p>
          <h3 class="font-semibold text-[30px]">{{ sourcingManagerData?.name }}</h3>
        </div>

        <div
          class="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between mt-10 max-w-[60%] mx-auto"
        >
          <div class="flex items-center gap-4">
            <i class="pi pi-phone"></i>
            <div class="text-left">
              <p class="text-[14px]">Call Now</p>
              <p class="font-semibold">+91 {{ sourcingManagerData?.phoneNumber }}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <i class="pi pi-whatsapp"></i>
            <div class="text-left">
              <p class="text-[14px]">WhatsApp</p>
              <p class="font-semibold">Chat Now</p>
            </div>
          </div>
        </div>

        <p class="mt-6">Available Monday - Saturday, 9:00 AM - 7:00 PM</p>
      </div>

      <div
        class="mt-10 border border-black p-6 rounded-2xl text-left space-y-4"
      >
        <div class="flex items-center gap-2">
          <i class="pi pi-trophy"></i>
          <p class="font-semibold text-[20px]">Project Disclaimer</p>
        </div>
        <p class="nrml-text">
          {{ specificProjectData?.description }}
        </p>

        <div class="border-t border-black pt-4 flex items-center justify-between">
            <div class="">
                <p class="text-[14px]">Project RERA Number</p>
                <p class="font-semibold">{{ specificProjectData?.projectReraNumber }}</p>
            </div>
            <div class="">
                <p class="text-[14px]">Builder</p>
                <p class="font-semibold">{{ specificProjectData?.builderName }}</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
