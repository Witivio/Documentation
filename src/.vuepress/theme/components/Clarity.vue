<template>
    <div id="clarity">
      <router-view />
    </div>
  </template>
  
<script>
export default {
  name: 'Clarity',
  mounted() {
    // Ajouter le script Clarity
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (c, l, a, r, i, t, y) { 
        c[a] = c[a] || function () { 
          (c[a].q = c[a].q || []).push(arguments) 
        }; 
        t = l.createElement(r); 
        t.async = 1; 
        t.src = "https://www.clarity.ms/tag/" + i; 
        y = l.getElementsByTagName(r)[0]; 
        y.parentNode.insertBefore(t, y); 
      })(window, document, "clarity", "script", "86qny1xjbr");
    `;
    document.head.appendChild(script);
  }
}
</script>