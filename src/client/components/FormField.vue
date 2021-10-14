<template>
  <div class="form-field">
      <label for="">{{ champ.label }}</label>
      <input type="text" v-model="champ.value">
      <div class="error-message" v-for=" error in v[champs][champ.name]['value']['$errors']" :key="error.$uid">
         <p>{{ error.$message }}</p> 
      </div>
  </div>
</template>

<script>
export default {
    name:'form-field',
    props:['champ','v','champs'],
}
</script>

<style>
.form-field{
    margin:auto;
    padding: 10px;
}
.form-field label{
    display: inline-block;
    width:3cm;
    text-align: left;
}
.form-field input[type=text]{
  width:25%;
  padding: 12px 20px;
  margin: 8px auto;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form-field input[type=submit]{
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.error-message{
    color: red;
    font-size:0.8em;
}

</style>