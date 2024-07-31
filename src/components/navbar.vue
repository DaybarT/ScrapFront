<script setup>
import { RouterLink } from 'vue-router'
import 'primeicons/primeicons.css'
</script>
<template>
    <nav>
        <RouterLink to="/">
            <span class="pi pi-home"></span>
        </RouterLink>
        <RouterLink to="/carrefour">
            <span>Carrefour</span>
        </RouterLink>
        <RouterLink to="/makro">
            <span>Makro</span>
        </RouterLink>
        <RouterLink to="/alcampo">
            <span>Alcampo</span>
        </RouterLink>
        <RouterLink to="/eci">
            <span>El Corte Ingles</span>
        </RouterLink>
    </nav>
</template>

<script>
export default{
    name: 'navbar'
};
</script>

<style scoped>
nav{
    width: 100%;
    height: 80px;
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
span{

    font-size: 2rem;
}

</style>