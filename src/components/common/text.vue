<template>
    <div>
        <vddl-list
            class="panel__body--list"
            :list="list"
            :horizontal="false"
        >
            <vddl-draggable
                class="panel__body--item"
                v-for="(item, index) in list"
                :key="item.id"
                :draggable="item"
                :index="index"
                :wrapper="list"
                effect-allowed="move"
            >
                {{item.label}}
            </vddl-draggable>
            <vddl-placeholder class="red">Custom placeholder</vddl-placeholder>
        </vddl-list>
    </div>
</template>

<script>
// import { ContainerMixin, ElementMixin, HandleDirective } from "vue-slicksort"

import Vue from "vue";
import Vddl from "vddl";

Vue.use(Vddl);
export default {
    name: "Toolbar",

    data() {
        return {
            xxx: "x",
            list: [
                {
                    id: 1,
                    label: "Item A1"
                },
                {
                    id: 2,
                    label: "Item A2"
                },
                {
                    id: 3,
                    label: "Item A3"
                }
            ]
        };
    },
    methods: {}
};
</script>
<style scoped>
.zxcxzc {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #f00;
}
.root {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
a {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    padding: 10px;
}
pre {
    border-radius: 20px;
    padding: 20px;
    background: #fefefe;
}
.list,
pre {
    width: 80%;
    max-width: 500px;
}
.list {
    max-height: 80vh;
    margin: 0 auto;
    padding: 0;
    overflow: auto;
    background-color: #f3f3f3;
    border: 1px solid #efefef;
    border-radius: 3;
}
.list-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #333;
    font-weight: 400;
}
.stylizedList {
    position: relative;
    z-index: 0;
    background-color: #f3f3f3;
    border: 1px solid #efefef;
    border-radius: 3px;
    outline: none;
}
.stylizedItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #333;
    font-weight: 400;
}
.handle {
    display: block;
    width: 18px;
    height: 18px;
    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M0 7.5v5h50v-5H0zm0 15v5h50v-5H0zm0 15v5h50v-5H0z" color="%23000"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.25;
    margin-right: 20px;
    cursor: row-resize;
}
.horizontalList {
    width: 600px;
    height: 300px;
    white-space: nowrap;
}
.horizontalItem,
.horizontalList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.horizontalItem {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 200px;
    border-right: 1px solid #efefef;
    border-bottom: 0;
}
.grid {
    display: block;
    width: 520px;
    height: 350px;
    white-space: nowrap;
    border: 0;
    background-color: transparent;
}
.gridItem {
    float: left;
    width: 130px;
    padding: 8px;
    background: transparent;
    border: 0;
}
.gridItem .wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid #efefef;
    font-size: 28px;
}
.gridItem .wrapper span {
    display: none;
}
.category {
    height: auto;
}
.category .categoryHeader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 14px;
    background: #f9f9f9;
    border-bottom: 1px solid #efefef;
}
.category .categoryList {
    height: auto;
}
.divider {
    padding: 10px 20px;
    background: #f9f9f9;
    border-bottom: 1px solid #efefef;
    text-transform: uppercase;
    font-size: 14px;
    color: #333;
}
.helper {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2),
        0 -5px 5px -5px rgba(0, 0, 0, 0.2);
}
.stylizedHelper {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(31, 136, 255, 0.8);
    color: #fff;
    cursor: row-resize;
    border: 1px solid #fff;
}
.stylizedHelper.horizontalItem {
    cursor: col-resize;
}
.stylizedHelper.gridItem {
    background-color: transparent;
    white-space: nowrap;
    box-shadow: none;
}
.stylizedHelper.gridItem .wrapper {
    background-color: hsla(0, 0%, 100%, 0.8);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
}
.shrinkedHelper {
    height: 20px !important;
}
body {
    font-family: Montserrat, Helvetica Neue, Helvetica, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(244, 245, 249, 0.7);
}
#root,
body,
html {
    height: 100%;
    margin: 0;
}
</style>