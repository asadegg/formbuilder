<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}:</label>
                <div class="col-sm-8">
                    <div class="checkbox">
                        <label
                            v-for="(item,index) in setting"
                            :key="index"
                        >
                            <input
                                type="checkbox"
                                :value="item"
                                name="checkBoxes"
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
    name: "checkBoxes",
    props: ["setting"]
};
</script>

<style scoped>
</style>
