<script setup>
import 'primeicons/primeicons.css'
</script>

<template>
        <div class="searcher">
            <input type="search" id="search">
            <button type="button" id="go">Buscar</button>
        </div>
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