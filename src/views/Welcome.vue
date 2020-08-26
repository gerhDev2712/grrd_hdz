<template>
  <div id="Welcome" class="row m-0 p-0 my-5 pb-5 justify-content-around">

    <main class="col-12">

        <div class="row justify-content-around m-0">

            <!--PC-->
            <mq-layout mq="md+" class="col-4 my-3" v-for="item in bienvenida" :key="item">
                <div class="">
                    <h3 class="h3 text-left d-none d-md-block">{{item.header}}</h3>
                </div>
                <Card
                    class=" mt-4"
                    :isHeader="item.setHeader"
                    :isFooter="item.setFooter"
                    :isButton="item.setButtton"
                    :title="item.title"
                    :content="item.content"
                    :footer="item.footer"
                    :enlace="item.link"
                    :bgColor="item.bg_color"
                    :textColor="item.text_color"
                >
                </Card>
            </mq-layout>

            <!--Mobile-->
            <mq-layout :mq="['xs', 'sm']" class="col-12 my-4" v-for="item in bienvenida" :key="item">
                <div class="">
                    <h3 class="h-4 text-center d-block d-md-none">{{item.header}}</h3>
                </div>
                <Card
                    class=" mt-4"
                    :isHeader="item.setHeader"
                    :isFooter="item.setFooter"
                    :isButton="item.setButtton"
                    :title="item.title"
                    :content="item.content"
                    :footer="item.footer"
                    :enlace="item.link"
                    :bgColor="item.bg_color"
                    :textColor="item.text_color"
                >
                </Card>
            </mq-layout>

        </div>

    </main>

  </div>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
    name: 'Welcome',
    components: {
        Card
    },
    data () {
        return {
            bienvenida: [
                {
                    setHeader: false,
                    setFooter: true,
                    setButtton: true,
                    header: 'Desarrollo Web',
                    title: 'Horario de atención: Lunes a Viernes de 8:00 a 18:00 hrs.',
                    content:'El Call Center de la Facultad de Psicología de la UNAM brinda intervención psicológica gratuita por vía telefónica al público en general.',
                    footer: 'Llamar a 5025 0855',
                    link: '/',
                    bg_color: 'bg-primary',
                    text_color: 'text-white'
                },
                {
                    setHeader: false,
                    setFooter: true,
                    setButtton: true,
                    header: 'Desarrollo Web',
                    title: 'Horario de atención: Lunes a Viernes de 8:00 a 18:00 hrs.',
                    content:'El Call Center de la Facultad de Psicología de la UNAM brinda intervención psicológica gratuita por vía telefónica al público en general.',
                    footer: 'Llamar a 5025 0855',
                    link: '/',
                    bg_color: 'bg-primary',
                    text_color: 'text-white'
                },
                {
                    setHeader: false,
                    setFooter: true,
                    setButtton: true,
                    header: 'Desarrollo Web',
                    title: 'Horario de atención: Lunes a Viernes de 8:00 a 18:00 hrs.',
                    content:'El Call Center de la Facultad de Psicología de la UNAM brinda intervención psicológica gratuita por vía telefónica al público en general.',
                    footer: 'Llamar a 5025 0855',
                    link: '/',
                    bg_color: 'bg-primary',
                    text_color: 'text-white'
                }
            ]
            
        
        }
    }
}
</script>

<style>
.p-bt{
    /*margin-bottom: 2000px; */
    padding-bottom: 25px;
}

</style>