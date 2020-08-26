<template>
  <div id="Card" class="p-0">
    <div class="card  mt-3" :class="[bgColor, textColor]">
        <div class="" v-if="isHeader">
            <div class="card-header">
                {{Title}}
            </div>
        </div>
        <div class="card-body">
            <p class="text-justify">
                {{Content}}
            </p>
        </div>
        <div class="" v-if="isFooter">
            <div class="card-footer">
                <div class="" v-if="isButton">
                    <router-link :to='enlace' class="btn btn-info btn-block">
                        {{Footer}}
                    </router-link>
                </div>
                <div class="" v-else>
                    {{Footer}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        isHeader: Boolean,
        isFooter: Boolean,
        isButton: Boolean,
        Title: String,
        Content: String,
        Footer: String,
        bgColor: String,
        textColor: String,
        link: String
    }
}
</script>

<style>



</style>