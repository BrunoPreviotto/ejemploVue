<script setup lang="ts">


import { ref } from 'vue';


const props = defineProps<{
  id : number
  
}>()



let dato = ref([{}])

// CONSULTA LA API EN BUSQUEDA DEL PRODUCTO | TIENE QUE SER MODULAR
async function mounted() {
  try {
    console.log("https://fakestoreapi.com/products/" + props.id);
    const respuesta = await fetch("https://fakestoreapi.com/products/" + props.id);
    dato = await respuesta.json();
    console.log(dato.title);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

mounted();

</script>

<template>
  

  <div class="card m-2 mi-componente text-center">
    <div class="card-header">
      <!-- TITULO DEL PRODUCTO -->
      <h2 class="fw-bold text-info">{{ dato.title }}</h2>
    </div>
    <div class="card-body">
      <!-- IMAGEN DEL PRODUCTO -->
      <img :src="dato.image" class="img-fluid" alt="">
    </div>
      
    <div class="card-footer">
      <!-- PRECIO DEL PODUCTO -->
      <h3>${{dato.price}}</h3>

      <!-- DESCRIPCION DEL PRODUCTO -->
      <p>{{dato.description}}</p>
    </div>
    
  </div>

         
      
    
  
</template>

<style scoped>
  
  img{
    height: 500px;
  }

  .mi-componente {
  width: 75vw; /* Esto hará que tu componente tenga el ancho de toda la ventana del navegador */
  height: 100vh; /* Esto hará que tu componente tenga la altura de toda la ventana del navegador */
}
  
</style>
