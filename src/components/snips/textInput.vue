<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <input
                        type="text"
                        class="form-control"
                        :placeholder="setting.placeholder"
                    >
                    <p class="help-block">{{setting.help}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "textInput",
    props: ["setting"]
};
</script>

<style scoped>
</style>