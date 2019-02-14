import Vue from 'vue'
import Router from 'vue-router'
import templateType from '@/components/templateType'
import formbuilder from '@/components/formbuilder'
import ttt from '@/components/common/test2'
import text from '@/components/common/text'

import titleSnip from "@/components/snips/titleSnip"
import textInput from "@/components/snips/textInput"
import prependedText from "@/components/snips/prependedText"
import appendedText from "@/components/snips/appendedText"
import textareaSnip from "@/components/snips/textareaSnip"
import selectBasic from "@/components/snips/selectBasic"
import addressSelector from "@/components/snips/addressSelector"
import selectMultiple from "@/components/snips/selectMultiple"
import checkBoxes from "@/components/snips/checkBoxes"
import radioButton from "@/components/snips/radioButton"
import inlineCheckboxes from "@/components/snips/inlineCheckboxes"
import inlineRadios from "@/components/snips/inlineRadios"
import starRating from "@/components/snips/starRating"
import fileUpload from "@/components/snips/fileUpload"
import buttonSnip from "@/components/snips/buttonSnip"
// 全局注册组件
Vue.component('titleSnip',titleSnip)
Vue.component('textInput',textInput)
Vue.component('prependedText',prependedText)
Vue.component('appendedText',appendedText)
Vue.component('textareaSnip',textareaSnip)
Vue.component('selectBasic',selectBasic)
Vue.component('addressSelector',addressSelector)
Vue.component('selectMultiple',selectMultiple)
Vue.component('checkBoxes',checkBoxes)
Vue.component('radioButton',radioButton)
Vue.component('inlineCheckboxes',inlineCheckboxes)
Vue.component('inlineRadios',inlineRadios)
Vue.component('starRating',starRating)
Vue.component('fileUpload',fileUpload)
Vue.component('buttonSnip',buttonSnip)

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'templateType',
        component: templateType
    },
    {
        path: '/formbuilder',
        name: 'formbuilder',
        component: formbuilder
    },
    {
        path: '/tt',
        name: 'createplan3',
        component: ttt
    },
    {
        path: '/aa',
        name: 'createplan2',
        component: text
    }
    ]
})
