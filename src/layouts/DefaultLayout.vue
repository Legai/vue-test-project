<template>
  <div class="page">
    <header class="header">
      <nav>
        <router-link to="/"
                     active-class="header-link-active"
                     class="header-link"
                     exact>
          Home
        </router-link>
        <router-link to="form"
                     active-class="header-link-active"
                     class="header-link"
                     exact>
          Form
        </router-link>
      </nav>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout'
  };
</script>

<style scoped>

</style>
