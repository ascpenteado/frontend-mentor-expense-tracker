<template>
  <div class="bar-chart-container">
    <h1 class="title">Spending - Last 7 days</h1>

    <canvas ref="expensesRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Expense } from '@/types/expenses.types'
import { renderBarChart } from './BarChart.helpers'

type BarChartProps = {
  expenses: Expense[]
}

const { expenses } = defineProps<BarChartProps>()

const expensesRef = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (expensesRef.value) {
    renderBarChart(expenses, expensesRef.value)
  }
})
</script>

<style scoped lang="scss">
@import url('./BarChart.styles.scss');
</style>
