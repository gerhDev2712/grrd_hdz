<template>
  <div id="CardIMG" class="p-0">

    <router-link :to="link">
        <div class="card bg-dark text-white">
            <img src="@/assets/img/carousel/vap_1.jpg" class="card-img" height="300px" :alt="altIMG">
            <div class="card-img-overlay">     
                <h5 class="card-title">{{title}}</h5>       
                <p class="card-text">{{content}}</p>
                <p class="card-text">{{footer}}</p>
            </div>  
        </div>
    </router-link>

  </div>
</template>

<script>

export default {
    name: 'CardIMG',
    props: {
        srcIMG: String,
        altIMG: String,
        title: String,
        content: String,
        footer: String,
        link: String
    },
    computed:{
    }
}
</script>

<style>

</style>