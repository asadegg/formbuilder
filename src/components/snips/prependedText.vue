<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">Prepended text:</label>
                <div class="col-sm-8">
                    <div class="input-group">
                        <span class="input-group-addon">^_^</span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="placeholder"
                        >
                    </div>
                    <p class="help-block">Supporting help text</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "prependedText",
    props: ["setting"]
};
</script>

<style scoped>
</style>