<template>
    <div id="hubspot">
      <router-view />
    </div>
  </template>


<script>
export default {
  name: 'Hubspot',
  mounted() {
    // Ajouter le script HubSpot
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/5583418.js`;
    document.head.appendChild(script);
  }
}
</script>