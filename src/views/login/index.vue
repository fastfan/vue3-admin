<!--
 * @Author: fastfan
 * @Date: 2025-02-07 21:52:40
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-09 00:27:15
 * @Description: your description
-->
<template>
    <div>login</div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
jsx;
const userStore = useUserStore();
console.log(userStore);
</script>
<style lang="less" scoped></style>
