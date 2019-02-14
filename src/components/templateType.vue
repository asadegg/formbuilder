<template>
    <div>
        <div
            id="toolPanel"
            class="tool-panel-left"
            style="width:200px; height:100%; overflow-y:auto;left:0;top:0;"
        >
            <select class="categories">
                <option value="all">all</option>
                <option value="常用">常用</option>
            </select>
            <ul class="sideNavigation">
                <li v-for="(item,index) in tempsList" :key="index" @click="checkTemplate(index)">
                    <a href="javascript:void(0);" :class="{current:item.active}"><b>{{item.name}}</b></a>
                </li>
            </ul>
        </div>
        <body-of-page :clickIndex="idx"></body-of-page>
    </div>
</template>

<script>
import bodyofpage from "./common/bodyofpage.vue";
export default {
    name: "templateType",
    data() {
        return {
            tempsList:[
                {
                    name:'邮件订阅',
                    active:true
                },
                {
                    name:'意见反馈',
                    active:false
                },
                {
                    name:'用户满意度调查',
                    active:false
                },
                {
                    name:'会员申请表格',
                    active:false
                },
                {
                    name:'会议报名表',
                    active:false
                },
                {
                    name:'预约登记表',
                    active:false
                },
                {
                    name:'员工通讯录',
                    active:false
                },
                {
                    name:'报销申请表',
                    active:false
                },
                {
                    name:'留言板',
                    active:false
                },
                {
                    name:'投诉平台',
                    active:false
                },
                {
                    name:'社团纳新',
                    active:false
                },
                {
                    name:'客户拜访记录',
                    active:false
                },
                {
                    name:'工作日报',
                    active:false
                },
                {
                    name:'绩效考核',
                    active:false
                },
            ],
            idx:0
        };
    },
    methods:{
        checkTemplate(index){
            this.tempsList[this.idx].active=false;
            this.tempsList[index].active=true;
            this.idx=index;
        }
    },
    components: {
        "body-of-page": bodyofpage,
    },
    mounted() {
        console.log(bodyofpage);
    }
};
</script>
<style scoped>
</style>
