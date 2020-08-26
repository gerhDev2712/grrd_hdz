<template>
  <div id="Navbar" class="">
    <!--Navigation-->
    
    <ul class="row m-0 text-center nav-style nav fixed-bottom ">
      <li class="col-3 p-0 align-self-center">
        <router-link
          to="/"
          class="nav-link"
          exact-active-class="btn btn-primary">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
                <font-awesome-icon :icon="['fas', 'home']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="row align-items-center">
              <div class="col m-0 p-2 text-right ">
                <font-awesome-icon :icon="['fas', 'home']" size="2x" class=""/>                
              </div>
              <div class="col m-0 p-2 text-left">
                <span class="">Inicio</span>
              </div>
            </mq-layout>
        </router-link>
      </li>
      <li class="col-3 p-0 align-self-center">
        <router-link
          to="/webdevelopment"
          class="nav-link"
          exact-active-class="btn btn-info">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
                <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="row align-items-center">
              <div class="col m-0 p-2 text-right ">
                <font-awesome-icon :icon="['fas', 'laptop-code']" size="2x" class=""/>                
              </div>
              <div class="col m-0 p-2 text-left">
                <span class="">Diseño Web</span>
              </div>
            </mq-layout>
        </router-link>
      </li>
      <li class="col-3 p-0 align-self-center">
        <router-link 
          to="/photography" 
          class="nav-link" 
          exact-active-class="btn btn-danger">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
              <font-awesome-icon :icon="['fas', 'camera']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="row align-items-center">
              <div class="col m-0 p-2 text-right ">
                <font-awesome-icon :icon="['fas', 'camera']" size="2x" class=""/>                
              </div>
              <div class="col m-0 p-2 text-left">
                <span class="">Fotografía</span>
              </div>
            </mq-layout>
        </router-link>
      </li>
      <li class="col-3 p-0 align-self-center">
        <router-link 
          to="/contact" 
          class="nav-link" 
          exact-active-class="btn btn-success">
            <!--Smartphone-->
            <mq-layout :mq="['xs', 'sm']" class="">
              <font-awesome-icon :icon="['fas', 'comments']" size="2x" class=""/>
            </mq-layout>
            <!--PC-->
            <mq-layout mq="md+" class="row align-items-center">
              <div class="col m-0 p-2 text-right ">
                <font-awesome-icon :icon="['fas', 'comments']" size="2x" class=""/>                
              </div>
              <div class="col m-0 p-2 text-left">
                <span class="">Contacto</span>
              </div>
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