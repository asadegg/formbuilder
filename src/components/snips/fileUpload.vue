<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">File Upload:</label>
                <div class="col-sm-8">
                    <input
                        class="input-file"
                        type="file"
                    >
                    <p class="help-block">Supporting help text</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "fileUpload",
    props: ["setting"]
};
</script>

<style scoped>
</style>