<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';



let datos = ref([{}])





/** cONSULTA LA API PARA TRAER LOS PRODUCTOS | DEBERIA HACERSE EN UNA SOLA CLASE */
async function mounted() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    datos = await respuesta.json();
   
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

mounted();



</script>

<template>

    <!-- RECORRE EL JSON DEL PRDUCTO Y PASA UNO POR TARJETA -->
    <div class="row mi-componente justify-content-center">
      <Card class="col-4" v-for="dato in datos" :id="dato.id" :titulo="dato.title" :precio="dato.price" :imagen="dato.image" ></Card>      >
   
  </div>
   
  
  
  
  
    
</template>

<style scoped>

.mi-componente {
  width: 75vw; /* Esto hará que tu componente tenga el ancho de toda la ventana del navegador */
  height: 100vh; /* Esto hará que tu componente tenga la altura de toda la ventana del navegador */
}

</style>
