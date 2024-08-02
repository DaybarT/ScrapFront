<script setup>
import { useProductStore } from '@/Pinia';
import 'primeicons/primeicons.css'

const store = useProductStore();

const fetchProducts = async (event) => {
  event.preventDefault();
  let shop = document.getElementById('shop').textContent;
  let producto = document.getElementById('search').value;

  await store.fetchProducts(shop,producto);
};

    </script>

<template>
    <form @submit.prevent="fetchProducts">
        <div class="searcher">
            <input type="text" id="search">
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