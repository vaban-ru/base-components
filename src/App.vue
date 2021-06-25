<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");
body {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e4e4e4;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
