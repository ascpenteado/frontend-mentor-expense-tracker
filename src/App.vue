<template>
  <main>
    <div class="app-container">
      <AccountBalance :balance="balance" />
      <WhiteBox>
        <BarChart :expenses="expensesMock" />
        <TotalExpenses :totalExpenses="totalExpenses" />
      </WhiteBox>
    </div>
  </main>
</template>

<script setup lang="ts">
import AccountBalance from '@/components/AccountBalance/AccountBalance.vue'
import BarChart from '@/components/BarChart/BarChart.vue'
import WhiteBox from '@/components/WhiteBox/WhiteBox.vue'
import TotalExpenses from '@/components/TotalExpenses/TotalExpenses.vue'
import { generate7DaysExpensesMock } from './mocks/expenses.mock'

const expensesMock = generate7DaysExpensesMock().sort((a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime()
})

const totalExpenses = Number(
  expensesMock
    .reduce((acc, expense) => {
      return acc + expense.amount
    }, 0)
    .toFixed(2)
)

const balance = (10000 - totalExpenses).toFixed(2)
</script>

<style lang="scss">
@import url('./styles/main.scss');
</style>
