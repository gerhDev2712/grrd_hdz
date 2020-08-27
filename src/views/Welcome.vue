<template>
  <div id="Welcome" class="row m-0 p-0 my-5 pb-5 justify-content-around">

    <main class="col-12">
        
        <div class="row justify-content-around m-0 my-4">
            <div class="col-12">
                <article class="text-justify">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates pariatur fugit facere iusto, maiores architecto. Vero distinctio tempora enim architecto perferendis eveniet, ad similique aspernatur? Reiciendis veniam asperiores voluptatum dolorum.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, illo. Iste odio, placeat doloremque dicta nulla praesentium dolor, minus omnis eum enim alias, possimus voluptatum obcaecati repudiandae perferendis nihil iusto.
                    </p>
                </article>
            </div>
        </div>

        <div class="row justify-content-around m-0">

            <!--PC-->
            <mq-layout mq="md+" class="col-4 my-3" v-for="(item, index) in examples" :key="index">
                
                <CardIMG
                    :srcIMG="item.srcIMg"
                    :altIMG="item.altIMG"
                    :title="item.title"
                    :content="item.content"
                    :footer="item.footer"
                    :link="item.link"
                >

                </CardIMG>

            </mq-layout>

            <!--Mobile-->
            <mq-layout :mq="['xs', 'sm']" class="col-12 my-4" v-for="(item, array) in examples" :key="array">
                
                <CardIMG
                    :srcIMG="item.srcIMg"
                    :altIMG="item.altIMG"
                    :title="item.title"
                    :content="item.content"
                    :footer="item.footer"
                    :link="item.link"
                >

                </CardIMG>

            </mq-layout>

        </div>

    </main>

  </div>
</template>

<script>

//import Card from '@/components/Card.vue'
import CardIMG from '@/components/CardIMG.vue'

export default {
    name: 'Welcome',
    components: {
        //Card,
        CardIMG
    },
    data () {
        return {
            examples: [
                {
                    srcIMG: 'vap_1',
                    altIMG: 'Proyectos desarrollados íntegramente por mí',
                    title: 'Desarrollo Web',
                    content: 'Proyectos desarrollados íntegramente por mí',
                    footer: 'VueJS - PWA - Bootstrap - Firebase',
                    link: '/webdevelopment'

                },
                {
                    srcIMG: 'vap_1',
                    altIMG: 'Proyectos desarrollados íntegramente por mí',
                    title: 'Fotografía',
                    content: 'Proyectos fotográficos que reflejan nuestra realidad',
                    footer: 'Producto - Retrato - Streeth - Artística',
                    link: '/photography'

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