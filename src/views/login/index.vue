<template>
  <div class="login">login</div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
console.log(userStore)
</script>
<style lang="scss" scoped>
.login {
  color: red;
}
</style>
