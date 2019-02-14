<template>
    <div
        id="bodyOfPage"
        class="body-of-page"
        style="margin-left:200px"
    >
    <form action="post" id="form1">
        
        <div
            class="alert alert-warning  text-center"
            role="alert"
        ><router-link
                class="btn btn-info btn-sm"
                to="/formbuilder"
            >选择此模板</router-link></div>
        <div
            id="contentarea"
            class="contentarea"
            avalonctrl="contentArea"
        >
            <component
                :is="item.name"
                v-for="(item,index) in templist"
                :key="index"
                v-bind:setting="item.setting"
            ></component>
        </div>
    </form>

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
export default {
    name: "bodyofpage",
    data() {
        return {
            msg: "fuformbuildck",
            templist: [],

            //所有模板数据
            allData: [
                {
                    listCheck: 0,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "邮件订阅",
                                help:
                                    "订阅成功后，我们将定期向您发送最新的产品和服务信息。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "您的Email地址",
                                placeholder: "example@qq.com",
                                help: "建议用QQ邮箱或网易邮箱"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 1,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "意见反馈",
                                help: ""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "自我介绍",
                                placeholder: "说点什么吧",
                                help: "140字以内",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "您的Email地址",
                                placeholder: "example@qq.com",
                                help: "建议用QQ邮箱或网易邮箱"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 2,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "用户满意度调查",
                                help: "为了更好地为您提供产品或服务，请您认真填写以下表单。"
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "您购买的是哪款产品？",
                                options: ["产品1", "产品2", "产品3", "产品4"]
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "购买原因",
                                placeholder: "您购买此产品的原因是什么?？",
                                help: "最多140个字",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "对产品的满意度",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "对服务的满意度",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "产品改进意见",
                                placeholder: "产品改进意见",
                                help: "最多140个字",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "inlineRadios",
                            setting: {
                                label: "您会再次购买我们的产品吗？",
                                options: ["会", "可能会", "不会"]
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 3,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "会员申请表格",
                                help: "请如实填写，如有虚假取消参与资格。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: "二到四个汉字"
                            }
                        },
                        {
                            name: "addressSelector",
                            setting: {
                                label: "地址",
                                help: "二到四个汉字"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "Email",
                                placeholder: "example@qq.com",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "电话",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 4,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "会议报名表",
                                help:
                                    "2016年手机游戏大会，填写以下内容，抽取奖品。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "手机",
                                placeholder: "",
                                help: "形如13612345678"
                            }
                        },
                        {
                            name: "radioButton",
                            setting: {
                                label: "参会日期",
                                options: [
                                    "技术专场（5月10日）",
                                    "工具专场（5月11日）",
                                    "运营专场（5月12日）"
                                ]
                            }
                        },
                        {
                            name: "inlineRadios",
                            setting: {
                                label: "预计到会时间",
                                options: ["上午", "下午"]
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 5,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "预约登记表",
                                help: "填写您的预约信息，将享受优先服务。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "手机",
                                placeholder: "",
                                help: "形如13612345678"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "预计到店日期",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "inlineRadios",
                            setting: {
                                label: "预计到会时间",
                                options: ["上午10点前", "上午10点后", "下午3点前", "下午3点后",]
                            }
                        },
                    ]
                },
                {
                    listCheck: 6,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "员工通讯录",
                                help:
                                    "可以在内网站通讯录栏目进行查询。"
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "部门",
                                options: ["市场部", "人力资源部", "研发部", "测试部","综合管理部"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "手机",
                                placeholder: "",
                                help: "形如13612345678"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "Email",
                                placeholder: "example@qq.com",
                                help: ""
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "部门",
                                options: ["总经理", "副总经理", "营销总监", "产品经理","客户经理","工程师"]
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 7,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "报销申请表",
                                help:
                                    "填报后先将发票交财务统计发票金额，然后经理审核通过后，方给予报销。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "报销人姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "部门",
                                options: ["差旅费", "市场活动", "办公用品"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "报销金额",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "报销金额详细说明",
                                placeholder: "",
                                help: "最多140个字",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        },
                    ]
                },
                {
                    listCheck: 8,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "留言板",
                                help:
                                    "有事请留言，我们会尽快联系您。"
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "留言",
                                placeholder: "",
                                help: "最多140个字",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "Email",
                                placeholder: "example@qq.com",
                                help: ""
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 9,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "投诉平台",
                                help:
                                    "客户无小事，请详细说明您的不满。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "要投诉谁",
                                placeholder: "员工名、员工工号或部门名",
                                help: ""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "投诉事由",
                                placeholder: "",
                                help: "最多140个字",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "联系电话",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 10,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "学院新媒体中心纳新表",
                                help:
                                    "欢迎您加入我们的团队！ 请认真填写表单，我们会根据您填写的内容进行审核！"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "姓名",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "手机",
                                placeholder: "",
                                help: "形如13612345678"
                            }
                        },
                        {
                            name: "inlineCheckboxes",
                            setting: {
                                label: "性别",
                                options: ["男", "女", "其他"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "学号",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "inlineRadios",
                            setting: {
                                label: "政治面貌",
                                options: ["本科一年级", "本科二年级", "本科三年级","本科四年级","研究生"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "校内住址",
                                placeholder: "如：东篱居5栋",
                                help: ""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "主要学生工作经历",
                                placeholder: "",
                                help: "140字以内",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 11,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "客户拜访记录",
                                help:""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "客户名称",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "拜访日期",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "被拜访人",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "被拜访人职位",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "联系渠道",
                                options: ["见面", "邮件", "电话", "QQ","其他"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "联系方式",
                                placeholder: "填电话、邮件地址等",
                                help: ""
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "成单可能性",
                                options: ["80%", "60%", "40%", "20%","0%"]
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "备注",
                                placeholder: "",
                                help: "140字以内",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 12,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "工作日报",
                                help:"恭喜你又度过了充实的一天！"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "汇报人",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "汇报日期",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "工作内容",
                                placeholder: "",
                                help: "140字以内",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
                {
                    listCheck: 13,
                    snips: [
                        {
                            name: "titleSnip",
                            setting: {
                                label: "绩效考核",
                                help:"以下填写请实名填写，结果HR部门将严格保密。"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "被考核人",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "selectBasic",
                            setting: {
                                label: "所在部门",
                                options: ["市场部", "人力资源部", "研发部", "测试部","综合管理部"]
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "入职年限",
                                placeholder: "",
                                help: "加入本公司的年限，不足一年的算作0.5年"
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "个人业务能力",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "工作执行力和推动能力",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "团队合作性",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "沟通和协调能力",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "starRating",
                            setting: {
                                label: "工作主动性和责任心",
                                rateValue: "0",
                                help:""
                            }
                        },
                        {
                            name: "textareaSnip",
                            setting: {
                                label: "评价",
                                placeholder: "请写出对该同事在工作态度、方式、承担压力等任何方面的评价",
                                help: "140字以内",
                                maxlength: "140"
                            }
                        },
                        {
                            name: "textInput",
                            setting: {
                                label: "考核人（填表人）",
                                placeholder: "",
                                help: ""
                            }
                        },
                        {
                            name: "buttonSnip",
                            setting: {
                                label: "",
                                button: "提交",
                                buttonColor: "btn-primary"
                            }
                        }
                    ]
                },
            ]
        };
    },
    props:['clickIndex'],
    components: {
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
    computed: {
        checkTemplate(index = 0) {}
    },
    watch:{
        clickIndex(val){
            console.log(val)
            this.templist = this.allData[val].snips;
        }
    },
    mounted() {
        this.templist = this.allData[0].snips;
    },
    methods: {}
};
</script>

<style>
body{
    background-color: #f9f9f9;
}
</style>