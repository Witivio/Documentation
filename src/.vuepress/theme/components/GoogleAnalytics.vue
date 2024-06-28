<template>
    <div id="google-analytics">
      <router-view />
    </div>
  </template>
  
<script>
export default {
  name: 'GoogleAnalytics',
  mounted() {
    // Ajouter le script gtag.js
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-08F13DPZ2Y';
    document.head.appendChild(script1);

    // Ajouter le script de configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-08F13DPZ2Y');
    `;
    document.head.appendChild(script2);
  }
}
</script>