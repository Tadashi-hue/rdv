<template>
  <div class="inscription-client">
     <form action="" @submit.prevent="submitForm" class="formulaire-inscription">
         <form-field 
            v-for="champ in champs" 
            :key="champ" 
            :champs="nomChamps" 
            :champ="champ" 
            :v="v$" >
        </form-field>
         <input type="submit" value="Save">
     </form>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import FormField from '../components/FormField.vue'
import { password } from'../../utility/customValidators'
export default {
    name:'inscription-client',
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
            nomChamps:'champs',
            champs:{
                nom:{
                    label:'Nom: ',
                    name:'nom',
                    value:''
                },
                prenom:{
                    label:'Prenom: ',
                    name:'prenom',
                    value:''
                },
                telephone:{
                    label:'Telephone: ',
                    name:'telephone',
                    value:''
                },
                mail:{
                    label:'Mail: ',
                    name:'mail',
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
            champs:{
                nom:{
                    value:{
                        required:helpers.withMessage('*Ce champ est obligatoire', required)
                    }
                },
                prenom:{
                    value:{
                        required:helpers.withMessage('*Ce champ est obligatoire', required)
                    }
                },
                telephone:{
                    value:{
                        required:helpers.withMessage('*Ce champ est obligatoire', required)
                    }
                },
                mail:{
                    value:{
                        required:helpers.withMessage('*Ce champ est obligatoire', required),
                        email:helpers.withMessage('*Veuillez saisir une adresse mail valide ex: example@domaine.com', email),
                    }
                },
                mdp:{
                    value:{
                        password:helpers.withMessage('*Le mot de passe doit contenir au moins 6 caractères', password),
                    }
                }
            }

        }
    },
    methods:{
        async submitForm(){
            const isCorrect=await this.v$.$validate()
            if(!isCorrect){
                console.log("Sorry")
            }
            else{
                const client={
                    nom:this.champs.nom.value,
                    prenom:this.champs.prenom.value,
                    telephone:this.champs.telephone.value,
                    mail:this.champs.mail.value 
                }
                var res=await fetch('http://localhost:3000/clients',{
                    method:"POST",
                    body:JSON.stringify(client),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                alert('Vous compte a été crée avec succès');
                this.$router.push({name:'AccueilClient'})
            }
                
        }
    }
}
</script>

<style>
.formulaire-inscription{
    margin:auto;
}
.formulaire-inscription input[type=submit]{
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
.formulaire-inscription label, td{
    text-align: left;
}

</style>