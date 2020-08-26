<template>
  <div id="App" class="">

    <Header></Header>
    <Navbar></Navbar>

    

    <mq-layout mq="md+">
      <router-view class="container-fluid mb-5"></router-view>
    </mq-layout>

    <mq-layout :mq="['xs', 'sm']">
      <router-view class="container-fluid mb-3"></router-view>
    </mq-layout>

    <div class="row w-100"></div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>

.mb-25{
    /*margin-bottom: 2000px; */
    padding-bottom: 25px;
}

.mb-25{
    /*margin-bottom: 2000px; */
    padding-bottom: 25px;
}

.mb-150{
    /*margin-bottom: 2000px; */
    padding-bottom: 150px;
}

</style>