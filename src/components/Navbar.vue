<template>
  <div id="Navbar" class="">
    <!--Navigation-->
    <ul class="row m-0 text-center nav-style nav fixed-bottom">
      <li class="col-4 align-self-center">
        <router-link
          to="/"
          class="nav-link"
          exact-active-class="active">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
                <font-awesome-icon :icon="['fas', 'home']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="">
                <font-awesome-icon :icon="['fas', 'home']" size="2x" class=""/>
                Inicio
            </mq-layout>
        </router-link>
      </li>
      <li class="col-4 align-self-center">
        <router-link
          to="/webdevelopment"
          class="nav-link"
          exact-active-class="active">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
                <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="">
                <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class=""/>
                Desarrollo Web
            </mq-layout>
        </router-link>
      </li>
      <li class="col-4 align-self-center">
        <router-link 
          to="/photography" 
          class="nav-link" 
          exact-active-class="active">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
              <font-awesome-icon :icon="['fas', 'camera']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="">
              <font-awesome-icon :icon="['fas', 'camera']" size="2x" class=""/>
              Fotografía
            </mq-layout>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>