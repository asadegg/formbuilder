<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <select
                        class="form-control"
                        name="jpoxlthkxu0p"
                    >
                        <option :value="item" v-for="(item,index) in setting.options" :key="index">{{item}}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "selectBasic",
    props: ["setting"]
};
</script>

<style scoped>
</style>
