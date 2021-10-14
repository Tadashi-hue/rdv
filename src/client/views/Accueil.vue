<template>
  <div class="accueil-client">
      <p>Bienvenu sur notre Application de prise de rendez-vous </p>
      <button @click="showLogingModal">Prendre Un rendez-vous</button>
      <modal v-if="isGonnaLog"></modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
    name:'accueil',
    components:{ Modal },
    data(){
        return{
            isGonnaLog:false
        }
    },
    methods:{
        showLogingModal(){
            this.isGonnaLog=true;
        }
    }
}
</script>

<style>

</style>