<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-3 control-label">{{setting.label}}</label>
                <div class="col-sm-8">
                    <div class="form-group">
                        <div class="col-sm-4">
                            <select
                                class="form-control"
                                name="provincesjpoxlthk3n5y"
                            >
                                <option value="">请选择</option>
                                <option value="1"> 北京市 </option>
                                <option value="2"> 天津市 </option>
                                <option value="3"> 河北省 </option>
                                <option value="4"> 山西省 </option>
                                <option value="5"> 内蒙古自治区 </option>
                                <option value="6"> 辽宁省 </option>
                                <option value="7"> 吉林省 </option>
                                <option value="8"> 黑龙江省 </option>
                                <option value="9"> 上海市 </option>
                                <option value="10"> 江苏省 </option>
                                <option value="11"> 浙江省 </option>
                                <option value="12"> 安徽省 </option>
                                <option value="13"> 福建省 </option>
                                <option value="14"> 江西省 </option>
                                <option value="15"> 山东省 </option>
                                <option value="16"> 河南省 </option>
                                <option value="17"> 湖北省 </option>
                                <option value="18"> 湖南省 </option>
                                <option value="19"> 广东省 </option>
                                <option value="20"> 广西壮族自治区 </option>
                                <option value="21"> 海南省 </option>
                                <option value="22"> 重庆市 </option>
                                <option value="23"> 四川省 </option>
                                <option value="24"> 贵州省 </option>
                                <option value="25"> 云南省 </option>
                                <option value="26"> 西藏自治区 </option>
                                <option value="27"> 陕西省 </option>
                                <option value="28"> 甘肃省 </option>
                                <option value="29"> 青海省 </option>
                                <option value="30"> 宁夏回族自治区 </option>
                                <option value="31"> 新疆维吾尔自治区 </option>
                                <option value="32"> 香港特别行政区 </option>
                                <option value="33"> 澳门特别行政区 </option>
                                <option value="34"> 台湾 </option>
                                <option value="35"> 海外 </option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select
                                class="form-control"
                                name="citiesjpoxlthk3n5y"
                            >
                                <option value="">请选择</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select
                                class="form-control"
                                name="districtsjpoxlthk3n5y"
                            >
                                <option value="">请选择</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            name="jpoxlthk3n5y"
                            verify=""
                        >
                        <p class="help-block">{{setting.help}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "addressSelector",
    props: ["setting"]
};
</script>

<style scoped>
</style>