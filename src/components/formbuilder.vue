<template>
    <div>
        <div
            id="toolbar_menu_outer"
            class="z-toolbar-anchor z-toolbar-fixed"
        >
            <div
                class="z-toolbar"
                id="toolbar_menu"
                style="position: fixed;top:0;width:100%;"
            >
                <div class="z-toolbar-ct">
                    <div class="z-toolbar-overflow">
                        <div
                            class="z-toolbar-nowrap"
                            id="toolbar_menu_body"
                        >
                            <a
                                href="javascript:void(0);"
                                id="designer_save"
                                class="z-btn z-btn-flat"
                            ><b><span class="icon-save"></span>保存<i></i></b></a>
                            <a
                                href="javascript:void(0);"
                                id="designer_save2template"
                                class="z-btn z-btn-flat"
                            ><b><span class="icon-save"></span>保存为模板<i></i></b></a>
                            <a
                                href="javascript:void(0);"
                                id="btn_setPageProps"
                                class="z-btn z-btn-flat"
                            ><b><span class="icon-dashboard"></span>表单设置<i></i></b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div
                class="tool-panel-left"
                :style="{left: `${leftVal}px`}"
            >
                <a
                    class="panel-open-btn-left"
                    href="javascript:void(0);"
                    @click="toggleList(1)"
                ><i :class="['glyphicon',{'glyphicon-menu-left':!leftVal},{'glyphicon-menu-right':leftVal}]"></i></a>
                <dl class="accordionPanel">
                    <dt class="accordionPanelTab"><b>部件库</b></dt>
                    <dd class="accordionPanelContent">
                        <div id="snippetPicker">
                            <select
                                id="selSnips"
                                class="categories"
                                v-model="checkType"
                            >
                                <option
                                    value="0"
                                    checked="true"
                                >all</option>
                                <option value="1">输入框</option>
                                <option value="2">列表选择</option>
                                <option value="3">单选、多选</option>
                                <option value="4">文件、按钮</option>
                            </select>
                            <div
                                id="divSnippetList"
                                style="height: 828px"
                            >
                                <div
                                    class="ui-draggable img-box"
                                    v-for="(item,index) in snipsLibrary[checkType].urlArr"
                                    :key="index"
                                    @mousedown="mouseStart(index,$event)"
                                    @dragend="handleDragEnd($event)"
                                    @dragstart="handleDragStart($event, item)"
                                    draggable="true"
                                >
                                    <img
                                        :src="item.url"
                                        
                                        style="pointer-events: none;"
                                    >
                                </div>
                                <!-- <div
                                    v-show="dragging"
                                    class="dynamic ui-draggable-dragging ui-sortable-helper"
                                    :style="[{'left': `${positionX}px`},{'top': `${positionY}px`}]"
                                ></div> -->
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
            <div
                class="tool-panel-right"
                :style="{right: `${rightVal}px`}"
            >

                <a
                    class="panel-open-btn-right"
                    href="javascript:void(0);"
                    @click="toggleList(0)"
                ><i :class="['glyphicon',{'glyphicon-menu-right':!rightVal},{'glyphicon-menu-left':rightVal}]"></i></a>

                <dl class="accordionPanel">
                    <dt class="accordionPanelTab"><b>属性</b></dt>
                    <dd class="accordionPanelContent">
                        <div
                            id="fieldEditors"
                            style="height: 868px;"
                        >
                            <!--input 1 -->
                            <div
                                class="form-group"
                                v-show="shows[0]"
                            >
                                <label class="control-label">标题: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.label"
                                >
                            </div>
                            <!--input 2 -->
                            <div
                                class="form-group"
                                v-show="shows[1]"
                            >
                                <label class="control-label">描述文字: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.placeholder"
                                >
                            </div>
                            <!--input 3 -->
                            <div
                                class="form-group"
                                v-show="shows[2]"
                            >
                                <label class="control-label">填写帮助: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.help"
                                >
                            </div>
                            <!--input 4 -->
                            <div
                                class="form-group"
                                v-show="shows[3]"
                            >
                                <label class="control-label">最大长度: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.maxlength"
                                >
                            </div>
                            <!--input 5 -->
                            <div
                                class="form-group"
                                v-show="shows[4]"
                            >
                                <label class="control-label">上传文件说明: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.help"
                                >
                            </div>
                            <!--input 6 -->
                            <div
                                class="form-group"
                                v-show="shows[5]"
                            >
                                <label class="control-label">按钮文字: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.button"
                                >
                            </div>
                            <!--textarea 1 -->
                            <div
                                class="form-group"
                                v-show="shows[6]"
                            >
                                <label class="control-label">列表项: </label>
                                <textarea
                                    class="form-control"
                                    style="min-height: 100px"
                                    v-model="editData.setting.options"
                                ></textarea>
                            </div>
                            <!--textarea 2 -->
                            <div
                                class="form-group"
                                v-show="shows[7]"
                            >
                                <label class="control-label">单选项: </label>
                                <textarea
                                    class="form-control"
                                    style="min-height: 100px"
                                    v-model="editData.setting.options"
                                ></textarea>
                            </div>
                            <!--textarea 3 -->
                            <div
                                class="form-group"
                                v-show="shows[8]"
                            >
                                <label class="control-label">多选项: </label>
                                <textarea
                                    class="form-control"
                                    style="min-height: 100px"
                                    v-model="editData.setting.options"
                                ></textarea>
                            </div>
                            <!--select 1 -->
                            <div
                                class="form-group"
                                v-show="shows[9]"
                            >
                                <label class="control-label">风格: </label>
                                <select
                                    class="form-control input-sm"
                                    v-model="editData.setting.buttonColor"
                                >
                                    <option value="btn-default">Default</option>
                                    <option value="btn-primary">Primary</option>
                                    <option value="btn-info">Info</option>
                                    <option value="btn-success">Success</option>
                                    <option value="btn-warning">Warning</option>
                                    <option value="btn-danger">Danger</option>
                                </select>
                            </div>
                            <!--input 7 -->
                            <div
                                class="form-group"
                                v-show="shows[10]"
                            >
                                <label class="control-label">附加文字: </label>
                                <input
                                    type="text"
                                    class="form-control input-sm"
                                    v-model="editData.setting.othertext"
                                >
                            </div>
                            <!--checkbox 1 -->
                            <div
                                class="form-group checkbox"
                                v-show="shows[11]"
                            >
                                <label><input
                                        type="checkbox"
                                        value="NotNull"
                                        class="input-inline"
                                    >
                                    这个是必填项
                                </label>
                            </div>

                        </div>
                    </dd>
                </dl>
            </div>
            <contentArea
                :leftVal="leftVal"
                :rightVal="rightVal"
                @showEdit="getChildValue"
                :editData2="editData.setting"
                :draggingEleAdd="draggingItem"
                :addEleState2="addEleState"
            ></contentArea>
        </div>

    </div>
</template>

<script>
import contentArea from "./common/contentArea";
export default {
    name: "formbuilder",
    data() {
        return {
            checkType: 0,

            //控件列表
            snipsLibrary: [
                {
                    type: "all",
                    urlArr: [
                        {
                            id:0,
                            url:"../../static/snippets/fl1.png",
                        },
                        {
                            id:1,
                            url:"../../static/snippets/ft1.png",
                        },
                        {
                            id:2,
                            url:"../../static/snippets/ft1.png",
                        },
                        {
                            id:3,
                            url:"../../static/snippets/ft9.png",
                        },
                        {
                            id:4,
                            url:"../../static/snippets/ft3.png",
                        },
                        {
                            id:5,
                            url:"../../static/snippets/ft4.png",
                        },
                        {
                            id:6,
                            url:"../../static/snippets/ft7.png",
                        },
                        {
                            id:7,
                            url:"../../static/snippets/fs1.png",
                        },
                        {
                            id:8,
                            url:"../../static/snippets/fs3.png",
                        },
                        {
                            id:9,
                            url:"../../static/snippets/fs2.png",
                        },
                        {
                            id:10,
                            url:"../../static/snippets/fc1.png",
                        }
                    ]
                },
                {
                    type: "输入框",
                    urlArr: [
                        {
                            id:7,
                            url:"../../static/snippets/fs1.png",
                        },
                        {
                            id:8,
                            url:"../../static/snippets/fs3.png",
                        },
                        {
                            id:9,
                            url:"../../static/snippets/fs2.png",
                        },
                        {
                            id:10,
                            url:"../../static/snippets/fc1.png",
                        }
                    ]
                },
                {
                    type: "列表选择",
                    urlArr: [
                        {
                            id:7,
                            url:"../../static/snippets/fs1.png",
                        },
                        {
                            id:8,
                            url:"../../static/snippets/fs3.png",
                        },
                        {
                            id:9,
                            url:"../../static/snippets/fs2.png",
                        },
                        {
                            id:10,
                            url:"../../static/snippets/fc1.png",
                        }
                    ]
                },
                {
                    type: "单选、多选",
                    urlArr: [
                        {
                            id:7,
                            url:"../../static/snippets/fs1.png",
                        },
                        {
                            id:8,
                            url:"../../static/snippets/fs3.png",
                        },
                        {
                            id:9,
                            url:"../../static/snippets/fs2.png",
                        },
                        {
                            id:10,
                            url:"../../static/snippets/fc1.png",
                        }
                    ]
                },
                {
                    type: "文件、按钮",
                    urlArr: [
                        {
                            id:7,
                            url:"../../static/snippets/fs1.png",
                        },
                        {
                            id:8,
                            url:"../../static/snippets/fs3.png",
                        },
                        {
                            id:9,
                            url:"../../static/snippets/fs2.png",
                        },
                        {
                            id:10,
                            url:"../../static/snippets/fc1.png",
                        }
                    ]
                }
            ],
            leftVal: 0,
            rightVal: 0,

            //右侧显示输入框 
            editData: {
                setting: {
                    label: ":",
                    help: ":",
                    placeholder: ":",
                    maxlength: "0",
                    button: ":",
                    options: [],
                    buttonColor: ":",
                    othertext: ":"
                }
            },
            shows: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            //拖动设置
            dragging: 0,
            positionX: 0,
            positionY: 0,
            draggingItem:null,
            addEleState:0
        };
    },
    components: {
        contentArea
    },
    mounted() {},
    methods: {
        toggleList(isLeft) {
            if (isLeft) {
                this.leftVal = this.leftVal === 0 ? -240 : 0;
            } else {
                this.rightVal = this.rightVal === 0 ? -240 : 0;
            }
        },
        getChildValue(val) {
            this.editData = val;
            let that = this;
            this.shows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const d = {
                titleSnip: [0, 2],
                textInput: [0, 1, 2, 11],
                prependedText: [0, 1, 10, 11],
                appendedText: [0, 1, 10, 11],
                textareaSnip: [0, 1, 2, 3, 11],
                selectBasic: [0, 6],
                addressSelector: [0, 2, 11],
                selectMultiple: [0, 6],
                checkBoxes: [0, 8],
                radioButton: [0, 7],
                inlineCheckboxes: [0, 8],
                inlineRadios: [0, 7],
                starRating: [0, 2],
                fileUpload: [0, 4],
                buttonSnip: [0, 5, 9]
            };
            d[val.name].map(function(item, index) {
                that.shows[item] = 1;
            });
        },
        mouseStart(index, e) {
            // console.log('move',e);
            let that = this;
            let doinsert = 0;
            let scrolltop = e.path[2].scrollTop;
            let odiv = e.target;
            let disX = e.pageX - odiv.offsetLeft;
            let disY = e.pageY - odiv.offsetTop;
            document.onmousemove = e => {
                let left = e.pageX - disX;
                let top = e.pageY - disY - scrolltop;
                // console.log(left,top)
                that.positionX = left;
                that.positionY = top;

                odiv.style.left = left + "px";
                odiv.style.top = top + "px";
                if (doinsert === 0) {
                    that.dragging = 1;
                    doinsert++;
                    // let item = document.createElement("div");
                    // item.className = "block-placeholder";
                    // contentarea.removeChild(contentarea.childNodes[1]);
                    // contentarea.insertBefore(item, contentarea.childNodes[1]);
                }
            };
            document.onmouseup = e => {
                document.onmousemove = null;
                document.onmouseup = null;
                that.dragging = 0;
                if (doinsert > 0) {
                    doinsert = 0;
                    // contentarea.removeChild(contentarea.childNodes[1]);
                }
            };
        },
        handleDragStart(e, item) {
            console.log('draggingItem',item)
            if(item.id<3){
                this.draggingItem=item;
                this.addEleState=0;
            }
        },
        handleDragEnd(item){
            // console.log('endddd',)
            this.addEleState=1;
            console.log('endddd',this.addEleState);

        }
    },
    watch: {}
};
</script>

<style scoped>
.ui-draggable-dragging {
    position: absolute;
    z-index: 1999;
    display: block;
    pointer-events:none;
}
</style>