<script>
import NavigationBar from '../components/NavigationBar.vue'
import ContactFooter from '../components/ContactFooter.vue'

export default {
  components: {
    NavigationBar,
    ContactFooter
  }
}
</script>

<template>
  <NavigationBar />
  <div class="homeContent">
  </div>
  <ContactFooter />
</template>

<style>
  .homeContent {
    align-items: center;
  }
</style>

