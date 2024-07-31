<template>
  <main>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <pre>{{ item.producto }}</pre>
      </li>
    </ul>
  </main>
</template>

<script>
import fetchData from "/src/functions/fetch.js"

export default {
  data() {
    return {
      data: [] // Inicialmente vacío, se llenará con los datos obtenidos
    };
  },
  async created() {
    try {
      const response = await fetchData("GET", "/public/exampleObjs/json_alcampo.json");
      this.data = response; // Asigna la respuesta a la propiedad reactiva `data`
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
</script>


