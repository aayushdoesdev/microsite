<script setup>
import { ref, computed } from "vue";
// import AnimatedTitle from "@/components/AnimatedTitle.vue"

// ── State ────────────────────────────────────────────
const loanAmount = ref(80); // in Lakhs
const interestRate = ref(6.75); // % per annum
const tenure = ref(20); // in years

// EMI
const emi = computed(() => {
  const principal = loanAmount.value * 100000;
  const r = interestRate.value / (12 * 100);
  const n = tenure.value * 12;

  const value = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return Math.round(value);
});

const totalPayable = computed(() => emi.value * tenure.value * 12);
const principalAmount = computed(() => loanAmount.value * 100000);
const interestAmount = computed(
  () => totalPayable.value - principalAmount.value
);

// helpers
const formatINR = (val) => `₹${val.toLocaleString("en-IN")}`;
const formatLakhs = (val) => `₹${val.toFixed(2)} Lacs`;

// ── ApexCharts semi-circle config ─────────────────────
// pick a notional max EMI for 100% (tune as you like)
const MAX_EMI = 200000;

// percentage of max EMI, clamped 0–100
const emiPercent = computed(() =>
  Math.max(0, Math.min(100, (emi.value / MAX_EMI) * 100))
);

// series is the dynamic value
const chartSeries = computed(() => [emiPercent.value]);

// static options (semi-circle radialBar)
const chartOptions = computed(() => ({
  chart: {
    type: "radialBar",
    sparkline: { enabled: true },
  },
  labels: ["EMI Load"],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "60%",
        background: "transparent",
      },
      track: {
        background: "#F3F4F6",
        strokeWidth: "100%",
      },
      dataLabels: {
        name: {
          show: true,
          fontSize: "12px",
          color: "#6B7280",
          offsetY: 30,
        },
        value: {
          show: true,
          fontSize: "20px",
          fontWeight: 600,
          offsetY: -10,
          formatter: (val) => `${Math.round(val)}%`,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      gradientToColors: ["#1D65C1"],
      stops: [0, 100],
    },
  },
  colors: ["#1D65C1"],
  grid: {
    padding: {
      top: -20,
      bottom: -20,
    },
  },
}));
</script>

<template>
  <section class="max-w-7xl mx-auto py-10 px-4 xl:px-0">
     <h1 class="title-text">EMI Calculator</h1>
    <div
      class="mx-auto bg-white rounded-3xl shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-10"
    >
      <!-- LEFT: sliders -->
      <div class="flex-1 space-y-8">
        <!-- Loan Amount -->
        <div>
          <div
            class="flex justify-between text-xs font-medium text-gray-600 mb-1"
          >
            <span>Loan Amount</span>
            <span>{{ formatLakhs(loanAmount) }}</span>
          </div>

          <input
            v-model.number="loanAmount"
            type="range"
            min="1"
            max="300"
            step="1"
            class="w-full accent-slate-500"
          />

          <div class="flex justify-between text-[11px] text-gray-400 mt-1">
            <span>₹1 Lac</span>
            <span>₹3 Cr</span>
          </div>
        </div>

        <!-- Interest Rate -->
        <div>
          <div
            class="flex justify-between text-xs font-medium text-gray-600 mb-1"
          >
            <span>Interest Rate (% P.A.)</span>
            <span>{{ interestRate.toFixed(2) }}%</span>
          </div>

          <input
            v-model.number="interestRate"
            type="range"
            min="1"
            max="30"
            step="0.1"
            class="w-full accent-slate-500"
          />

          <div class="flex justify-between text-[11px] text-gray-400 mt-1">
            <span>1%</span>
            <span>30%</span>
          </div>
        </div>

        <!-- Loan Tenure -->
        <div>
          <div
            class="flex justify-between text-xs font-medium text-gray-600 mb-1"
          >
            <span>Loan Tenure</span>
            <span>{{ tenure }} Years</span>
          </div>

          <input
            v-model.number="tenure"
            type="range"
            min="1"
            max="30"
            step="1"
            class="w-full accent-slate-500"
          />

          <div class="flex justify-between text-[11px] text-gray-400 mt-1">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: chart + summary -->
      <div
        class="flex-1 flex flex-col items-center md:items-stretch justify-between"
      >
        <!-- Semi-circle Apex chart -->
        <div class="w-80 sm:w-52 mx-auto mb-4 flex justify-center">
          <apexchart
            type="radialBar"
            :options="chartOptions"
            :series="chartSeries"
            height="420"
            width="250"
          />
        </div>

        <!-- EMI Value -->
        <div class="text-center mb-6">
          <p class="text-xs text-gray-500 mb-1">Your Monthly Home EMI</p>
          <p class="text-2xl font-semibold text-gray-900">
            {{ formatINR(emi) }}
          </p>
        </div>

        <!-- Breakdown -->
        <div
          class="w-full flex flex-col sm:flex-row sm:justify-between gap-4 text-sm mt-auto pt-4 border-t border-gray-100"
        >
          <div class="text-center sm:text-left">
            <p class="text-gray-500 mb-1">Interest Amount</p>
            <p class="text-red-600 font-semibold">
              {{ formatINR(interestAmount) }}
            </p>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-gray-500 mb-1">Principal Amount</p>
            <p class="text-blue-600 font-semibold">
              {{ formatINR(principalAmount) }}
            </p>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-gray-500 mb-1">Total Payable Amount</p>
            <p class="text-black font-semibold">
              {{ formatINR(totalPayable) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
