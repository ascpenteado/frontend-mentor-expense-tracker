<template>
  <div class="account-balance-container">
    <div class="info">
      <span>My balance:</span>
      <span class="balance">$ {{ balance }}</span>
    </div>

    <div class="logo">
      <img src="../../assets/images/logo.svg" alt="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
export type AccountBalanceProps = {
  balance: string
}

const { balance } = defineProps<AccountBalanceProps>()
</script>
<style scoped lang="scss">
@import './AccountBalance.styles.scss';
</style>
