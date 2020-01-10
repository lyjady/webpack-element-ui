<template>
    <div>
        <el-button type="primary" round @click="addNumber">增加</el-button>
        <el-button type="danger" round @click="subNumber">减少</el-button>
        <el-input v-model="$store.state.count"/>
    </div>
</template>

<script>
    export default {
        name: "",
        methods: {
            addNumber() {
                this.$store.commit('increment', {a: 1, b: 19});
            },
            subNumber() {
                this.$store.commit('sub');
            }
        }
    }
</script>

<style scoped>

</style>
