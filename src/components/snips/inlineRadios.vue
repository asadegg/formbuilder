<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <label
                        class="radio-inline"
                        v-for="(item,index) in setting.options"
                        :key="index"
                    >
                        <input
                            type="radio"
                            :value="item"
                            name="inlineRadios"
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
    name: "inlineRadios",
    props: ["setting"]
};
</script>

<style scoped>
</style>