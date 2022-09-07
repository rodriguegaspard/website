<script>
  export default {
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
  <div class="resume">
    <p>This is a resume</p>
  </div>
</template>

<style>
</style>
