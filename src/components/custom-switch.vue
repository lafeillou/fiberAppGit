<template>
<div class="custom-switch-wrap">
    <label class="custom-switch" style="margin-bottom:20px;">
        <span :class="{selected:value === 1}" @click="switchSelect(1)" style="border-right:1px solid #F64747">{{labelWords[0]}}</span>
        <span :class="{selected:value === 0}" @click="switchSelect(0)">{{labelWords[1]}}</span>
    </label>
</div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: -1
        },
        labelWords: {
            type: Array,
            default: () => ['是', '否']
        }
    },
    data() {
        return {}
    },
    methods: {
        switchSelect(value) {
            this.$emit('switch-select',value)
        }
    }
}
</script>

<style lang="scss">
.custom-switch-wrap{
    display: inline-block;
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
        &.custom-switch{
            display:flex;
            border:1px solid #F64747;
            background-color:#fff;
            color:#F64747;
            overflow:hidden;
            span{
                flex:auto;
                line-height:1em;
                display:inline-block;
                padding:15px 20px;
                font-size:14px;
                &.selected{
                    background-color:#F64747;
                    color:#fff;
                }
            }
        }
    }
}

</style>