<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
        <el-button type="primary" round>圆角按钮</el-button>
        <el-input-number v-model="num" :min="0" :max="99"/>
        <el-select v-model="value">
            <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"/>
        </el-select>
        <el-switch v-model="switchValue" active-text="开启" inactive-text="关闭"/>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider class="slider" v-model="initValue"/>
            <el-button type="primary" round @click="startSlider">开始</el-button>
        </div>
        <el-progress type="circle" :percentage="progressValue"/>
        <el-button type="primary" round @click="startProgress">开始</el-button>
        <el-carousel :interval="4000" height="600px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 0,
                options: [
                    {value: 1, name: '黄金糕'},
                    {value: 2, name: '双皮奶'},
                    {value: 3, name: '蚵仔煎'},
                    {value: 4, name: '龙须面'},
                    {value: 5, name: '北京烤猪'},
                ],
                value: '',
                switchValue: true,
                initValue: 0,
                progressValue: 0
            }
        },
        methods: {
            startSlider() {
                setInterval(() => this.initValue = this.initValue + 1, 500);
            },

            startProgress() {
                setInterval(() => {
                    this.progressValue = this.progressValue + 1;
                }, 500)
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .slider {
        width: 400px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>