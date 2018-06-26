<template>
    <div class='full'>
        <section class='welcome-content'>  
            <div class='welcome-page'>
                <img src=""/>
                <div class='welcome-text'>
                    <p>如果能实现我一个愿望</p>
                    <p>我希望是</p>
                    <p>世界和平</p>
                </div>
            </div> 
            <div class='welcome-page' style="background-color:#e4e4e4">
                <div class='welcome-text'>
                <p>如果还能实现一个愿望的话</p>
                <p>我希望是</p>
                <p>没有战争</p>
                </div>

            </div>

        </section>
        
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
    .welcome-content{
        width:100%;
        height:100%;
        background-color:#475669;
    }
    .welcome-page{
        position: relative;
        width:100%;
        height:100%;
    }
    .welcome-text{
        position:absolute;
        text-align: center;
        width: 100%;
        color:aliceblue;
        top:30%;
        p{
            animation:fadeIn 2s;
        }
    }
    .animation {
        height: 50px;
        width: 30px;
        background-color: #475669;
        animation: fadeIn 5s;
        -moz-animation: fadeIn 5s;
        /* Firefox */
        -webkit-animation: fadeIn 5s;
        /* Safari 和 Chrome */
    }
</style>