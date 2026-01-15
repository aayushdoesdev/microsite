<script setup></script>

<template>
  <footer class="bg-[#2F4F3F12] py-20 font-poppins px-4 2xl:px-0">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div class="w-full md:w-1/2 space-y-6">
        <h1 class="font-semibold uppercase text-[50px]">get in touch !</h1>
        <p class="font-normal">
          Vida Crest, Meherpada, NM Joshi Marg, Jacob circle, Byculla (W) Mumbai
          - 400011
        </p>
        <div class="flex items-center gap-2">
            <i class="pi pi-phone"></i>
            <p>+359 893 054 546</p>
        </div>
        <div class="flex items-center gap-2">
            <i class="pi pi-envelope"></i>
            <p>contact@xlivery.com</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 space-y-4">
        <input type="text" placeholder="Name" class="w-full p-3 bg-white">
        <input type="text" placeholder="Email" class="w-full p-3 bg-white">
        <input type="text" placeholder="Contact" class="w-full p-3 bg-white">
        <textarea name="" id="" placeholder="Message" class="w-full p-2"></textarea>

        <div class="flex justify-start">
            <button class="px-16 py-3 bg-[#1C84A6] text-white">Submit</button>
        </div>
      </div>
    </div>
  </footer>
</template>
