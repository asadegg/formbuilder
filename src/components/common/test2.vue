<template>
    <div
        id="bodyOfPage"
        class="body-of-page"
        :style="{'margin-left': `${mglVal}px`,'margin-right': `${mgrVal}px`}"
        onselectstart="return false;"
    >
        <div>
            <SortableList
                id="contentarea"
                class="contentarea ui-droppable ui-sortable"
                v-model="snipsData"
                :useDragHandle="true"
            >
                <SortableItem
                    :class="['ui-draggable',{'ui-dragbox-outlined':item.editing},{'ui-sortable-helper':item.absoluteX}]"
                    v-for="(item,index) in snipsData"
                    :index="index"
                    :key="index"
                    :item="item"
                >
                    <component
                        :is="item.name"
                        :setting="item.setting" 
                    ></component> 
                    <div
                        class="row-mask"
                        @click="checkSnip(index)"
                    ></div>
                    <div :class="['row-tool',{'show-mask':item.editing}]">
                        <div
                            v-handle
                            class="row-handle"
                        ><i class="icon-move"></i></div>
                        <div
                            class="row-copy"
                            @click="addNode(index)"
                        ><i class="icon-plus"></i></div>
                        <div
                            class="row-remove"
                            @click="removeNode(index)"
                        ><i class="icon-remove"></i></div>
                    </div>
                </SortableItem>
            </SortableList>
            <div class="alert alert-warning alert-dismissible">
                <button
                    type="button"
                    class="close"
                ><span aria-hidden="true">×</span></button>
                从左侧拖拽组件创建表单或根据
                <router-link to="/"><strong>模板</strong></router-link>
                创建表单
            </div>
        </div>
    </div>
</template>

<script>
import titleSnip from "../snips/titleSnip.vue";
import textInput from "../snips/textInput.vue";
import prependedText from "../snips/prependedText.vue";
import appendedText from "../snips/appendedText.vue";
import textareaSnip from "../snips/textareaSnip.vue";
import selectBasic from "../snips/selectBasic.vue";
import addressSelector from "../snips/addressSelector.vue";
import selectMultiple from "../snips/selectMultiple.vue";
import checkBoxes from "../snips/checkBoxes.vue";
import radioButton from "../snips/radioButton.vue";
import inlineCheckboxes from "../snips/inlineCheckboxes.vue";
import inlineRadios from "../snips/inlineRadios.vue";
import starRating from "../snips/starRating.vue";
import fileUpload from "../snips/fileUpload.vue";
import buttonSnip from "../snips/buttonSnip.vue";
import { ContainerMixin, ElementMixin,HandleDirective  } from "vue-slicksort"

const SortableItem = {
    mixins: [ElementMixin],
    props: ["item"],
    template: `
    <div class="list-item">
      <slot/>
    </div>
  `
};
const SortableList = {
    mixins: [ContainerMixin],
    template: `
    <div id="contentarea" class="contentarea ui-droppable ui-sortable">
      <slot/>
    </div>
  `
};

export default {
    name: "contentArea",
    directives: { handle: HandleDirective },
    data() {
        return {
            snipsData: [
                {
                    id: 0,
                    name: "titleSnip",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "什么什么活动报名表",
                        help: "请如实填写，如有弄虚作假取消参与资格。"
                    }
                },
                {
                    id: 1,
                    name: "textInput",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "姓名",
                        placeholder: "",
                        help: "建议用QQ邮箱二到四个汉字或网易邮箱"
                    }
                },
                {
                    id: 2,
                    name: "textInput",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "生日",
                        placeholder: "",
                        help: "不可虚报年龄"
                    }
                },
                {
                    id: 3,
                    name: "inlineCheckboxes",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "性别",
                        options: ["男", "女", "其他"]
                    }
                },
                {
                    id: 4,
                    name: "addressSelector",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "地址",
                        help: "二到四个汉字"
                    }
                },
                {
                    id: 5,
                    name: "starRating",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "个人业务能力",
                        rateValue: "0",
                        help: ""
                    }
                },
                {
                    id: 6,
                    name: "textareaSnip",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "评价",
                        placeholder:
                            "请写出对该同事在工作态度、方式、承担压力等任何方面的评价",
                        help: "140字以内",
                        maxlength: "140"
                    }
                },
                {
                    id: 7,
                    name: "buttonSnip",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "",
                        button: "提交",
                        buttonColor: "btn-primary"
                    }
                }
            ],
            addData: [
                {
                    id: 0,
                    name: "titleSnip",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "title",
                        help: "help"
                    }
                },
                {
                    id: 1,
                    name: "textInput",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "textInput",
                        placeholder: "",
                        help: "zzz"
                    }
                },
                {
                    id: 2,
                    name: "textInput",
                    editing: false,
                    absoluteX: false,
                    positionY: 0,
                    setting: {
                        label: "textInput2",
                        placeholder: "",
                        help: "zzzxxx"
                    }
                }
            ],
            checkIndex: 0,
            checkId: 0,
            mglVal: 255,
            mgrVal: 255,
            // outWidth:0,
            dragging: 0,
            draggingItem: null,
            addEle: null,
            addEleState: 0,
            insetItem: null
        };
    },
    components: {
      SortableItem,
        SortableList,
        titleSnip,
        textInput,
        prependedText,
        appendedText,
        textareaSnip,
        selectBasic,
        addressSelector,
        selectMultiple,
        checkBoxes,
        radioButton,
        inlineCheckboxes,
        inlineRadios,
        starRating,
        fileUpload,
        buttonSnip
    },
    methods: {
        checkSnip(index) {
            this.snipsData[this.checkIndex].editing = false;
            this.snipsData[this.checkIndex + 1].editing = false;
            // this.snipsData[this.checkIndex].editing=false;
            this.checkIndex = index;
            this.snipsData[index].editing = !this.snipsData[index].editing;

            //保留选中组件name
            this.checkId = this.snipsData[this.checkIndex].id;
            //通过事件向父组件传递值
            this.$emit("showEdit", this.snipsData[index]);
        },
        addNode(index) {
            this.snipsData.splice(
                index,
                0,
                JSON.parse(JSON.stringify(this.snipsData[index]))
            );
            this.snipsData[++index].editing = false;
        },
        removeNode(index) {
            this.snipsData.splice(index, 1);
            this.snipsData[this.checkIndex].editing = true;
        },
        mouseDown(index, e) {
            // console.log(index,'move',e);
            // let that= this;
            // let item=document.createElement("div");
            //     item.className='block-placeholder';
            // let scrolltop=e.path[11].scrollTop;
            // let odiv = e.target;
            // let disY = e.pageY - odiv.offsetTop;
            // let insertIndex=index;
            // let parentNode=e.path[4];
            // let allNode=parentNode.getElementsByClassName('ui-draggable');
            // // console.log(allNode[index])
            // let nextNodeHeight=index===allNode.length-1?1000:allNode[++insertIndex].clientHeight;
            // let prevNodeHeight=index===0?-100:allNode[--insertIndex].clientHeight;
            // let ocurrentY=0;
            // let keepNum=0;
            // document.onmousemove = (e)=>{
            //     e.stopPropagation();
            //     let positionY=e.pageY - disY-scrolltop;
            //     that.snipsData[index].positionY = positionY;
            //     if(keepNum===0){
            //         ocurrentY=e.pageY;
            //         keepNum++;
            //     }
            //     // console.log(e.pageY,insertIndex,allNode.length)
            //     if(parentNode.clientHeight>e.pageY&&e.pageY>=ocurrentY+nextNodeHeight){
            //         //当前下移一格
            //         insertIndex=insertIndex<allNode.length-1?++insertIndex:insertIndex;
            //         nextNodeHeight=allNode[insertIndex].clientHeight;
            //         ocurrentY+=nextNodeHeight;
            //         // console.log(contentarea)
            //         contentarea.insertBefore(item,contentarea.childNodes[insertIndex+1]);
            //     }else if(parentNode.offsetTop<e.pageY&&e.pageY<=ocurrentY-prevNodeHeight){
            //         //当前上移移一格
            //         insertIndex=insertIndex===0?0:--insertIndex;
            //         prevNodeHeight=allNode[insertIndex].clientHeight;
            //         ocurrentY-=prevNodeHeight;
            //         contentarea.insertBefore(item,contentarea.childNodes[insertIndex+1]);
            //     }
            // };
            // document.onmouseup = () => {
            //     console.log('insert',insertIndex);
            //     document.onmousemove = null;
            //     document.onmouseup = null;
            //     //取消拖拽
            //     that.dragging=0;
            //     that.snipsData[index].positionY = 0;
            //     //消除方块
            //     contentarea.removeChild(contentarea.getElementsByClassName('block-placeholder')[0]);
            //     // contentarea.removeChild(contentarea[index]);
            //     //移动控件
            //     that.snipsData.splice(insertIndex+1,0,that.snipsData[index]);
            //     if(insertIndex+1<index){
            //         that.snipsData.splice(index+1,1);
            //     }else{
            //         that.snipsData.splice(index,1);
            //     }
            // };
        },

        handleDragStart(e, item) {
            this.draggingItem = item;
            this.dragging = 1;
            item.absoluteX = true;
            item.positionY = e.clientY;
        },
        handleDragEnd(e, item) {
            console.log(item);
            this.draggingItem.absoluteX = 0;
            this.draggingItem.positionY = 0;

            item.absoluteX = false;
            // this.draggingItem = null;
            this.dragging = 0;
        },
        handleDragOver(e, item) {
            // console.log(e)
            // e.dataTransfer.dropEffect = "move"; // e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
            // console.log(e,item);
            if (this.draggingItem) {
                this.draggingItem.positionY = e.clientY + 100;
            }
        },
        handleDragEnter(e, item, index) {
            this.insetItem = item;
            // console.log('insetItem',this.insetItem.id)
            if (!this.dragging) {
                console.log(
                    "insetItem",
                    this.insetItem.id,
                    this.draggingEleAdd
                );
                // this.addEleState=1;
            } else {
                if (item === this.draggingItem) {
                    return;
                }
                const newItems = [...this.snipsData];
                const src = newItems.indexOf(this.draggingItem);
                const dst = newItems.indexOf(item);
                newItems.splice(dst, 0, ...newItems.splice(src, 1));
                this.snipsData = newItems;
            }

            // this.draggingEleAdd=null;
        },
        onDrop(e, item) {
            console.log(5, e);
        }
    },
    props: [
        "leftVal",
        "rightVal",
        "editData2",
        "draggingEleAdd",
        "addEleState2"
    ],
    watch: {
        leftVal(val) {
            this.mglVal = val === 0 ? 255 : 12;
        },
        rightVal(val) {
            this.mgrVal = val === 0 ? 255 : 12;
        },
        editData2: {
            handler(val) {
                if (val) {
                    this.snipsData[this.checkIndex].setting = val;
                }
            },
            deep: true
        },

        addEleState2(val) {
            if (val === 1) {
                // this.addEleState2=0;
                let itemid = this.draggingEleAdd.id;
                // this.draggingEleAdd=null;
                let snipData = null;
                this.addData.forEach((item, index) => {
                    if (itemid === item.id) {
                        snipData = JSON.parse(
                            JSON.stringify(this.addData[index])
                        );
                        snipData.editing = false;
                        snipData.absoluteX = false;
                        snipData.positionY = 0;
                    }
                });
                this.snipsData.splice(
                    this.snipsData.indexOf(this.insetItem),
                    0,
                    snipData
                );
                this.insetItem = null;
            }
        }
    }
};
</script>

<style>
body {
    background-color: rgb(238, 238, 238);
}
.contentarea .ui-sortable-helper {
    position: absolute;
    z-index: 1000;
}
</style>