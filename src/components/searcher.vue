<script setup>
import { ref } from 'vue'; // Importa los composables necesarios
import 'primeicons/primeicons.css'
import fetchData from '/src/functions/fetch.js';


const data = ref([]);
const fetchProducts = async (event) => {
    event.preventDefault();
    // let shop = document.getElementById('shop').textContent;
    try {
    data.value = await fetchData('GET', '/public/exampleObjs/json_alcampo.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

    </script>

<template>
    <form @submit.prevent="fetchProducts">
        <div class="searcher">
            <input type="search" id="search">
            <button type="submit" id="go">Buscar</button>
        </div>
    </form>
</template>
<style scoped>
.searcher{
    width: 100%;
    height: 50px;
    position:fixed;
    top: 60px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>