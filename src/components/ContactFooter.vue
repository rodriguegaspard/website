<template>
<footer>
  <div class="contactinfo">
  </div>
  <div class="links">
    <img src="../assets/media/gmail.svg" />
    <img src="../assets/media/signal.png" />
    <img src="../assets/media/github.png" />
    <img src="../assets/media/linkedin.png" />
  </div>
</footer>
</template>

<style>
.links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.links > img {
  width: 75px;
  object-fit: contain;
}

.contactinfo {

}
</style>
