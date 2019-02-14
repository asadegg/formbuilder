<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            :placeholder="setting.placeholder"
                        >
                        <span class="input-group-addon">{{setting.othertext}}</span>
                    </div>
                    <p class="help-block">{{setting.help}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "appendedText",
    props: ["setting"]
};
</script>

<style scoped>
</style>