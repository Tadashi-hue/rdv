<template>
  <div class="link-button">
      <router-link :to=route> {{label}}</router-link>
  </div>
</template>

<script>
export default {
    name:'link-button',
    props:['label','route']
}
</script>

<style>
.link-button a{
    margin:4px;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    padding-bottom:10px;
    border-radius: 5px;
    color: black;
    background-color:gray;
    text-decoration:none;
}

</style>