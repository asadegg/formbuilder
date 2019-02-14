<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <label
                        class="checkbox-inline"
                        v-for="(item,index) in setting.options"
                        :key="index"
                        >
                        <input
                            type="checkbox"
                            :value="item"
                            name="inlineCheckboxes"
                        >
                        {{item}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "inlineCheckboxes",
    props: ["setting"]
};
</script>

<style scoped>
</style>