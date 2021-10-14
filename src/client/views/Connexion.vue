<template>
  <div class="connexion-client">
    <form action="" @submit.prevent="authenticateUser">
      <div class="form-field-container">
        <form-field 
            v-for="champ in credentials" 
            :key="champ" 
            :champs="champs" 
            :champ="champ" 
            :v="v$" >
        </form-field>
        <input type="submit" value="Connexion">  
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import FormField from'../components/FormField.vue'
export default {
  name:'connexion-client',
  components:{
    FormField
  },
  setup(){
    return{
      v$:useVuelidate()
    }
  },
  data(){
    return{
      champs:'credentials',
      credentials:{
        nom:{
          label:'Nom :',
          name:'nom',
          value:''
        },
        mdp:{
          label:'Mot de passe :',
          name:'mdp',
          value:'',
          password:true
        }
      }
    }
  },
  validations(){
    return{
      credentials:{
        nom:{
          value:{
            required:helpers.withMessage('votre nom est necessaire pour se connecter', required)
          }
        },
        mdp:{
          value:{
            required:helpers.withMessage('votre mot de passe est necessaire pour se connecter', required)
          }
        }
      }
    }
  },
  methods:{
    async authenticateUser(){
      var isValidCredentials=await this.v$.validate();
      if(isValidCredentials){
        console.log('checking your credentials ...')
      }
      else{
        console.log('Sorry');
      }
    }
  }

}
</script>

<style>
.form-field-container{
  
}
.form-field-container input[type=submit]{
   width:25%;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: rgb(99, 96, 96);
    color:white;
    font-size:1em;
}
</style>