<script setup>
import { useProductStore } from '@/Pinia';
import 'primeicons/primeicons.css';

const store = useProductStore();
</script>
<template>
  <p hidden id="shop">makro</p>
  <div class="container">

  <div v-for="(source, sourceIndex) in store.data.filter(source => source.source === 'makro')" :key="sourceIndex" class="caja">
  <div class="product" v-for="(item, itemIndex) in source.items" :key="itemIndex">
    <table>
      <tr>
        <td>
          <p style="font-weight: bold;">{{ item.name_product }}</p>
          <p><i class="pi pi-euro" style="font-size: 12px;"></i>{{ item.unity_price }}</p>
          <p>{{ item.total_price }}<i class="pi pi-euro" style="font-size: 12px;"></i> total </p>
          <p>{{ item.price_w_iva }}<i class="pi pi-euro" style="font-size: 12px;"></i> total </p>
        </td>
        <td>
          <a :href="item.url" target="_blank"><img :src="item.image" alt="imagen" height="100px"></a>
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
  