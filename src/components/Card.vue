<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'



defineProps<{
  id : number
  titulo?: string
  precio?: number
  imagen? : string
}>()

//const precioAlto = (precio : number) => {return precio > 100}


</script>

<template>
  
    <!-- TARJETA DEL PRODUCTO -->
      <div class="card m-2 w-25">
        <div class="card-header">
          <!-- TITULO DEL PRODUCTO -->
          <h2 class="fw-bold text-info tituloTargjeta">{{ titulo }}</h2>
        </div>
        <div class="card-body">
          <!-- IMAGEN DEL PRODUCTO -->
          <img :src="imagen" class="img-fluid" alt="">
        </div>
        
          <div class="card-footer">

            <!-- PRECIO DEL PRODUCTO | SI EL PRECIO ES MATOR A 100  SE PINTA EN ROJO -->
            <h3 v-if="precio != null && precio > 100" class="text-danger">${{precio}}</h3>

            
          </div>

          <!-- LINK A LA PAGINA DEL DETALLE DEL PRODUCTO -->
          <router-link :to="{ name: 'Producto', query: { id: id } }">Detalle</router-link>
        
      </div>
    
      
      
     
         
      
    
  
</template>

<style scoped>
  img{
    height: 300px;
    width: 200px;
  }

  .tituloTargjeta{
    height: 250px;
    margin-top: 20px;
  }

  
  
</style>
