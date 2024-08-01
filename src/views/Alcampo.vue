<script setup>
import { ref, onMounted } from 'vue';
import 'primeicons/primeicons.css';
import fetchData from '/src/functions/fetch.js';

// Define a ref to hold the product data
const data = ref([]);

// Fetch products when the component is mounted
const fetchProducts = async () => {
  try {
    data.value = await fetchData('GET', '/public/exampleObjs/json_alcampo.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchProducts when the component mounts
onMounted(fetchProducts);
</script>

<template>
  <p hidden id="shop">Alcampo</p>
  <div class="product" v-for="(item, index) in data" :key="index">
    <table>
      <tr>
        <td>
          <p style="font-weight: bold;">{{ item.producto }}</p>
          <p>Disponible: 
            <i class="pi pi-check-circle" v-if="item.disponible" style="color: green;"></i>
            <i class="pi pi-times-circle" v-else style="color: red;"></i>
          </p>
          <p>{{ item.precio }}<i class="pi pi-euro" style="font-size: 12px;"></i></p>
          <p><i class="pi pi-euro" style="font-size: 12px;"></i>{{ item.precio_litro }}/L</p>
        </td>
        <td>
          <a :href="item.url" target="_blank"><img :src="item.imagen" alt="imagen" height="100px"></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="css" scoped>
.product{
  border: 2px solid;
  border-radius: 10px;
  border-color:  hsla(160, 100%, 37%, 1);
  margin: 5px;
  align-items: center;
  align-content: center;
}
img{
  border-radius: 10px;;
}

</style>


