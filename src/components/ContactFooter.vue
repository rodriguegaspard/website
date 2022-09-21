<template>
<footer>
  <div class="contactinfo">
  </div>
  <div class="links">
    <img src="../assets/media/gmail.png" />
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
  align-content: center;
  width: 100vw;
  height: 5vw;
}

.links > img {
  width: 75px;
  object-fit: contain;
  filter: grayscale(1);
  transition: 0.1s;
}

.links > img:hover {
  filter: grayscale(0);
}

</style>
