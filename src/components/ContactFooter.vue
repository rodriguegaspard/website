<template>
<footer>
  <div class="contactinfo">
  </div>
  <div class="links">
    <img src="../resources/gmail.svg" />
    <img src="../resources/signal.png" />
    <img src="../resources/github.png" />
    <img src="../resources/linkedin.png" />
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
