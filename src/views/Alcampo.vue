<script setup>
import { useProductStore } from '@/Pinia';
import 'primeicons/primeicons.css';

const store = useProductStore();
</script>

<template>
  <!-- toLower -->
  <p hidden id="shop">alcampo</p> 
  <div class="container">

  <div v-for="(source, sourceIndex) in store.data.filter(source => source.source === 'alcampo')" :key="sourceIndex" class="caja">
  <div class="product" v-for="(item, itemIndex) in source.items" :key="itemIndex">
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
</div>
</div>

</template>



<style lang="css" scoped>
.product {
  border: 2px solid;
  border-radius: 10px;
  box-shadow: 0 0 8px  hsla(160, 100%, 37%, 1);
  margin: 5px;
  align-items: center;
  align-content: center;
  width: 300px;
}
img {
  border-radius: 10px;
}
.container {
  display: flex;
  flex-wrap: wrap; /* Asegura que los elementos se envuelvan si es necesario */
  justify-content: center; 
  align-items: flex-start; 
  margin-top: 100px;
}
.caja {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>