<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <button :class="['btn',setting.buttonColor]">{{setting.button}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "buttonSnip",
    props: ["setting"]
};
</script>

<style scoped>
</style>