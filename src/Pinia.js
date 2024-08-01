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
    async fetchProducts(shop) {
      try {
        const shopItem = this.data.find(item => item.source === shop);
        if (shopItem) {
          shopItem.items = [];
        }

        const shopData = await fetchData('GET', `/public/exampleObjs/json_${shop}.json`);
        
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