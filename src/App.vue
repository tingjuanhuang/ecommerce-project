<template>
  <div id="nav">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>
