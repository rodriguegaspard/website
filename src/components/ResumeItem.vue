<script>
  export default {
    props: {
      title: String,
      duration: String,
      description: String,
      logo: String
    }
  }
</script>

<template>
  <div class="resumeItem">
    <div class="resumeItemTitle">
      <h3>{{ duration }}</h3>
      <h3>{{ title }}</h3>
      <img :src="logo" :alt="title"/>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style>
  .resumeItem {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 10vw;
  }

  .resumeItemTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .resumeItemTitle > img {
    width: 50px;
    object-fit: contain;
  }
</style>
