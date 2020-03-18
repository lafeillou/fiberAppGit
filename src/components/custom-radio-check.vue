<template>
<div class="custom-radio-check-wrap">
    <CustomSwitch :value="mustable" @switch-select="switchSelect" v-if="showSwitch" :labelWords="['有', '无']"></CustomSwitch>
    <div v-if="mustable === 1">
    <label v-for="item in data" :key="item.value" @click="select(item)" :class="{checked: value === item.value}">
        <span>{{item.label}}</span>
    </label>
    </div>
</div>
</template>

<script>
import CustomSwitch from '@/components/custom-switch.vue'

export default {
    components: {
        CustomSwitch
    },
    props: {
        data: {
            type: Array,
            default: () => {return []}
        },
        value: {
            type: Number,
            default: -1
        },
        // 是否必须
        mustable: {
            type: Number,
            default: -1
        },
        showSwitch: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        select(item) {
            this.$emit('select',item)
        },
        switchSelect(value) {
            this.$emit('switch-select',value)
        }
    }
}
</script>

<style lang="scss">
.custom-radio-check-wrap{
    display:inline-block;
    label{
        padding: 0;
        border-radius: 18px;
        background: #e9e9e9;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 5px;
        display: block;
        min-height: 20px;
        font-weight: normal;
        max-width: 100%;
        span{
            display:block;
            padding: 9px 17px 9px;
            line-height:1em;
        }

        &.checked{
            background-color: #f64747;
            color: white;
            cursor: default;
        }
    }
}
</style>

