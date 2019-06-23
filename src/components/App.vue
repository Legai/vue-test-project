<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss" src="../assets/main.scss">

</style>
