<template>
    <div>
        <div class="form-horizontal clearfix">
            <h3>{{setting1.label}}</h3>
            <p class="help-block">{{setting1.help}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: "titleSnip",
    props: ["setting"],
    data(){
        return {
            setting1:{
                id:0,
                imgUrl:'../../static/snippets/fl1.png',
                label:'Title',
                help:'help'
            }
        }
    },
    watch:{
        setting(val){
            this.setting1 = val
        }
    }
};
</script>

<style scoped>
</style>