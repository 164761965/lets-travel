<template>
    <div class='full'>
        <router-link to="/knowledge/sort">
            <button class="btn btn-primary">排序算法</button>
        </router-link>
        <br>
        <br>
        <router-link to="/knowledge/vertical">
            <button class="btn btn-primary">垂直居中</button>
        </router-link>
        <br>
        <br>
        <router-link to="/knowledge/cleanFloat">
            <button class="btn btn-primary">清除浮动</button>
        </router-link>
        <br>
        <br>
        <router-link to="/knowledge/quChong">
            <button class="btn btn-primary">数组去重</button>
        </router-link>
        <br>
        <br>
        <router-link to="/knowledge/fibonacci">
            <button class="btn btn-primary">斐波那契数列</button>
        </router-link>
        <br>
        <br>
        <router-link to="/knowledge/mianShi">
            <button class="btn btn-primary">面试题</button>
        </router-link>
        <br>
        <br>
        <router-link to="/demo">
            <button class="btn btn-primary">测试页面</button>
        </router-link>
    </div>
</template>


<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style lang="scss">
    .full{
        margin:20px;
        text-align: center;
    }

</style>