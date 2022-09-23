<script>
import NavigationBar from '../components/NavigationBar.vue'
import ContactFooter from '../components/ContactFooter.vue'

  export default {
      components:{
      NavigationBar,
      ContactFooter,
    },

    mounted(){
      let html2pdfScript = document.createElement('script');
      html2pdfScript.setAttribute('src' , 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js');
      html2pdfScript.setAttribute('integrity' , 'sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==');
      html2pdfScript.setAttribute('crossorigin' , 'anonymous');
      html2pdfScript.setAttribute('referrerpolicy' , 'no-referrer');
      document.head.appendChild(html2pdfScript);
    }
  }
</script>

<template>
  <NavigationBar />
  <div class="resume">
    <div class="introduction">
    <h1>Rodrigue GASPARD</h1>
    <h2>About myself</h2>
    <p>After obtaining a bachelor's degree in computer science at the University of Angers in France, I worked as a software developer in an art school for a year and a half. I'm currently looking for a Master's degree and an internship in Southeast Asia in software development in order to learn new skills and to practice English at a professional level. I'm very passionate about computer science, as it provide me with skills and tools that are very useful in my daily activities, and also it gives me interesting challenges that motivates me to push myself forward. I mainly use Arch Linux as my operating system.</p>
    </div>
    <div class="workExperience">
    </div>
    <div class="academicBackground">
    </div>
  </div>
  <ContactFooter />
</template>

<style>
  .resume {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: auto;
    align-items: center;
  }

  .workExperience {
    display: flex;
  }

  .academicBackground {
    display: flex;
  }
</style>
