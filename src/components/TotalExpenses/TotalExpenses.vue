<template>
  <div class="total-expenses-container">
    <div class="info">
      <div class="title">Total this month</div>
      <div class="value">$ {{ totalExpenses }}</div>
    </div>
    <div class="comparsion">
      <p class="percentage">+2.4%</p>
      <p>from last month</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  type TotalExpensesProps = {
    totalExpenses: number
  }

  const { totalExpenses } = defineProps<TotalExpensesProps>()
</script>

<style scoped lang="scss">
@import url('./TotalExpenses.styles.scss');
</style>
