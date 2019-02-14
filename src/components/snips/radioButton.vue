<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <div class="radio">
                        <label v-for="(item,index) in setting.options" :key="index">
                            <input
                                type="radio"
                                :value="item"
                                name="radioButton"
                                checked='true'
                            >
                            {{item}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "radioButton",
    props: ["setting"]
};
</script>

<style scoped>
</style>