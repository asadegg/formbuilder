<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <ul
                        class="star-rating"
                        id="rating1"
                    >
                        <input
                            type="hidden"
                            name="jpoxlthkh6vo"
                            :value="setting.rateValue"
                        >
                        <li>☆☆☆☆☆<a
                                href="#"
                                class="star-clear"
                                data-rate="0"
                            >×</a></li>
                        <li
                            class="current-rating"
                            style="width: 0em;"
                        >★★★★★</li>
                        <li><a
                                href="#"
                                style="width:5em;"
                                data-rate="5"
                            >★★★★★</a></li>
                        <li><a
                                href="#"
                                style="width:4em;"
                                data-rate="4"
                            >★★★★</a></li>
                        <li><a
                                href="#"
                                style="width:3em;"
                                data-rate="3"
                            >★★★</a></li>
                        <li><a
                                href="#"
                                style="width:2em;"
                                data-rate="2"
                            >★★</a></li>
                        <li><a
                                href="#"
                                style="width:1em;"
                                data-rate="1"
                            >★</a></li>
                    </ul>
                    <p class="help-block">{{setting.help}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "starRating",
    props: ["setting"]
};
</script>

<style scoped>
</style>v