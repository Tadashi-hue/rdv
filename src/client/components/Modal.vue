<template>
    <div class="modal">
      <p>Connectez-vous ou Inscrivez-vous</p>
      <table >
        <tr>
            <td style="text-align:center;">
                <link-button label="Connexion" :route="{ name:'connexion' }"></link-button>
            </td>
            <td style="text-align:center;">
                <link-button label="Inscription" :route="{ name:'inscription' }"></link-button>
            </td>
        </tr>
      </table>   
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue'
export default {
    components:{LinkButton}
}
</script>

<style>
.modal{
    margin:2cm auto;
    padding:1cm;
    width: 10cm;
    height:3cm;
    border-radius: 10px;
    box-shadow: 5px 10px 18px #888888;
}
.modal table{
    margin: auto;
}

</style>