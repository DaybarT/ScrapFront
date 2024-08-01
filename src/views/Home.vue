<template>
  <div class="container">
    <h1>¡Bienvenido a <span class="highlight">ScrapProducts</span> 🎉</h1>
    <p>¡Hola y bienvenido a ScrapProducts!</p>
    <p>Nuestra aplicación está diseñada para facilitarte la búsqueda de productos de diversas tiendas en línea sin complicaciones. Aquí te explicamos cómo funciona:</p>
    <ul>
      <li><strong>Recupera Productos:</strong> ScrapProducts se conecta directamente con las tiendas en línea a través de nuestro backend en Python. Cuando buscas un producto, nuestro backend hace las solicitudes necesarias a las páginas web indicadas.</li>
      <li><strong>Sin Bases de Datos:</strong> A diferencia de otras aplicaciones, ScrapProducts no utiliza bases de datos. En lugar de eso, tu búsqueda activa desencadena una serie de peticiones en tiempo real a los sitios web de productos. La información es recuperada y enviada directamente a tu navegador sin intermediarios.</li>
      <li><strong>Tecnología de Vanguardia:</strong> Nuestro frontend, desarrollado en Vue.js, se encarga de presentar los datos de forma clara y atractiva. Mientras tanto, el backend en Python asegura que cada solicitud sea gestionada de manera eficiente y precisa.</li>
    </ul>
    <p>¡Estamos encantados de que estés aquí y esperamos que encuentres exactamente lo que buscas!</p>
  </div>
</template>

<style scoped>
.container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px  hsla(160, 100%, 37%, 1);
    }
    h1 {
      color: #2c3e50;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      margin: 10px 0;
    }
    .highlight {
      color: #3498db;
      font-weight: bold;
    }
</style>
