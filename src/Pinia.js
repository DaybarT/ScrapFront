import {defineStore} from 'pinia';
import fetchData from './functions/fetch';
export const useProductStore = defineStore('productStore', {
  state: () => ({
    data: [
      {
        source: 'makro',
        items: []
      },
      {
        source: 'eci',
        items: []
      },
      {
        source: 'alcampo',
        items: []
      },
      {
        source: 'carrefour',
        items: []
      }
    ]
  }),
  actions: {
    async fetchProducts(shop,producto) {
      try {
        const shopItem = this.data.find(item => item.source === shop);
        if (shopItem) {
          shopItem.items = [];
        }

        const shopData = await fetchData('GET', `http://192.168.1.65:9000/${shop}/${producto}`);
        
        // Actualiza el array data con los nuevos datos obtenidos
        if (shopItem) {
          shopItem.items = shopData;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
});