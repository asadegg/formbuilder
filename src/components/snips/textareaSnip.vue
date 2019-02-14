<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}:</label>
                <div class="col-sm-8">
                    <div class="textarea">
                        <textarea
                            rows="4"
                            class="form-control"
                            :maxlength="setting.maxlength"
                            :placeholder="setting.placeholder"
                        ></textarea>
                        <p class="help-block">{{setting.help}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "textareaSnip",
    props: ["setting"]
};
</script>

<style scoped>
</style>