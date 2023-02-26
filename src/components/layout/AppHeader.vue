<template>
  <header>
    <div class="container">
      <img src="/favicon.png" />
      <h2>MyFilms</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .container {
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
      margin: 0;
      font-family: 'Pacifico', cursive;
    }

    img {
      width: 40px;
    }
  }
}
</style>
