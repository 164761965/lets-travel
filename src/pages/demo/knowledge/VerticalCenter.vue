<template>
    <div id="vertical-center">
        <div class="wrapper">
            <p>方法一：table-cell</p>
            <p>优点：可以动态改变高度，当wrapper里没有足够空间时content不会被截断</p>
            <div class="bg-red method-1">
                <span>
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法二：display:flex</p>
            <div class="bg-red method-2">
                <span>
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法三：绝对定位和负边距</p>
            <p>优点：适用于所有浏览器，不需要嵌套标签</p>
            <p>缺点：没有足够空间时，content会消失（类似div在body内，当用户缩小浏览器窗口，滚动条不出现的情况）</p>
            <div class="bg-red method-3-parent">
                <span class="method-3 vc-border">
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法四：绝对定位和0</p>
            <p>优点：</p>
            <p>缺点：</p>
            <div class="bg-red method-4-parent">
                <span class="method-4 vc-border">
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法五：translate   (方法三的变形)</p>
            <p>优点：</p>
            <p>缺点：需要确定内部元素的高度，可以用百分比，适合移动端</p>
            <div class="bg-red method-5-parent">
                <span class="method-5 vc-border">
                    垂直居中
                </span>
            </div>
        </div>

        <div class="wrapper">
            <p>方法六：display:inline-block</p>
            <p>优点：巧妙使用after进行占位</p>
            <p>缺点：</p>
            <div class="bg-red method-6-parent">
                <span class="method-6 vc-border">
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法七：display:flex和margin:auto</p>
            <p>优点：</p>
            <p>缺点：ie不兼容</p>
            <div class="bg-red method-7-parent">
                <span class="method-7 vc-border">
                    垂直居中
                </span>
            </div>
        </div>
        <div class="wrapper">
            <p>方法八：line-height</p>
            <p>优点：</p>
            <p>缺点：只对文本有效</p>
            <div class="bg-red method-8-parent">
                    垂直居中
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    #vertical-center {
        width:100%;
    }
    .wrapper{
        padding:20px;
        border-bottom: 1px solid #000;
    }
    .bg-red{
        width:200px;
        height:100px;
        background-color:red;
    }
    /*通过table-cell居中*/
    .method-1{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    /*通过display:flex居中*/
    .method-2{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    /*通过绝对定位和负边距居中*/
    .method-3-parent{
        position: relative;
    }
    .method-3{
        position:absolute;
        height:50px;
        width:100px;
        top:50%;
        left:50%;
        margin-top:-25px;
        margin-left:-50px;
    }

    /*通过绝对定位和0居中*/
    .method-4-parent{
        position: relative;
    }
    .method-4{
        position:absolute;
        width:100px;
        height:50px;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
    }

    /*通过translate居中*/
    .method-5-parent{
        position: relative;
    }
    .method-5{
        position:absolute;
        height:50px;
        width:100px;
        top:50%;
        left:50%;
        transform:translate(-50px ,-25px)
    }
    /*通过display:inline-block居中*/
    .method-6-parent{
        text-align: center;
        font-size:0;
    }
    .method-6{
        vertical-align:middle;
        display:inline-block;
        font-size:16px;
    }
    /*使用after来占位*/
    .method-6-parent:after{
        content:'';
        width:0;
        height:100%;
        display:inline-block;
        vertical-align: middle;
    }


    /*通过display:flex和margin:auto居中*/
    .method-7-parent{
        display:flex;
        text-align: center;
    }
    .method-7{
        margin:auto
    }
    

    /*通过line-height居中*/
    .method-8-parent{
        height:100px;
        line-height:100px;
        text-align: center;
    }
    .vc-border{
        border:1px solid #000;
    }
</style>


