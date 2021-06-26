<template>
  <div id="app">
    <div class="container">
      <div class="app-nav">
        <router-link class="app-nav__link" :to="{ name: 'Button' }"
          >Кнопка</router-link
        >
        <router-link class="app-nav__link" :to="{ name: 'Alert' }"
          >Алерт</router-link
        >
        <router-link class="app-nav__link" :to="{ name: 'Label' }"
          >Лейбл</router-link
        >
      </div>
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
  padding-left: 16px;
  padding-right: 16px;
}

.app-nav {
  display: flex;
  padding-top: 16px;

  &__link {
    color: #000;
    text-decoration: none;
    font-size: 18px;

    &.router-link-exact-active {
      text-decoration: underline;
    }

    & + .app-nav__link {
      margin-left: 16px;
    }
  }
}
</style>
