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
  <body>
    <p>Welcome to the home page.</p>
  </body>
  <ContactFooter />
</template>
