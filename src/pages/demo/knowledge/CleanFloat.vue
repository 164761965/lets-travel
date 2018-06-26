<template>
    <div id="clean-float">
        <section>
            <h2 style="text-align:center">浮动</h2>
            <h5>一、关于浮动</h5>
            <p>如何脱离标准文档流，css中给了三种方法，使一个元素脱离标准文档流。</p>
            <ul>
                <li>浮动</li>
                <li>绝对定位</li>
                <li>固定定位</li>
            </ul>
            <h5>二、什么是浮动呢</h5>
            <p>定义这样说：浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。 其实也就是把快级元素变成能和别的快级并排成一行。</p>
            <h5>三、浮动的的元素有4点特性：</h5>
            <ol>
                <li>浮动元素会脱离标准文档流，已经不区分快和行了。</li>
                <li>浮动的元素会互相贴靠。</li>
                <li>浮动的元素有“字围”的效果。</li>
                <li>收缩。一个浮动的元素，如果没有设置width，那么将自动收缩为文字的宽度。</li>
            </ol>
            <h5>四、清除浮动的方法</h5>
            <!-- <div class="wrapper">
                <p>未清除浮动的情况</p>
                <div class="cf-border">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                </div>
                <p><b>我是其他元素</b></p>
                <div style="clean:both"></div>
            </div> -->
            <div class="wrapper">
                <p>方法1：clean:both; 清除掉两边的浮动。但是有一个致命的问题，margin失效了，上下之间没有了间距</p>
                <div class="cf-border">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                </div>
                <p class="cf-clear">我是其他元素</p>
            </div>

            <div class="wrapper">
                <p>方法2：隔墙法——外墙法。 就是在两个部分之间加一个div,设置高度，不仅不让后面的去追前面的，而且能给外边的div撑出一个高度</p>
                <div class="cf-border">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                </div>
                <div class="cf-clear h8"></div>
                <p>我是其他元素</p>
            </div>

            <div class="wrapper">
                <p>方法2：隔墙法——内墙法。 就是在两个部分之间加一个div,设置高度，不仅不让后面的去追前面的，而且能给外边的div撑出一个高度</p>
                <p><b>它为窗体撑出了一个高度</b></p>
                <div class="cf-border">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                    <div class="cf-clear h8"></div>
                </div>
                <p>我是其他元素</p>
            </div>

            <div class="wrapper">
                <p>方法3：overflow:hidden。 一个父元素不能被自己浮动的儿子撑出高度。但是，只要给父亲加上 overflow：hidden；那么父元素就能被儿子撑出高度了。  最最最重要的是，使用overflow：hidden；能使margin生效！你没有看错，就是酱。</p>
                <p><b>缺点：</b>不能和position配合使用，因为超出的尺寸的会被隐藏</p>
                <div class="cf-border method-3">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                </div>
                <p>我是其他元素</p>
            </div>

            <div class="wrapper">
                <p>方法4：给浮动元素的祖先元素加高度（父元素或祖元素）。只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的元素了。也就是说，浮动的元素只能被有高度的盒子关住</p>
                <p><b>缺点：</b>工作上我们绝对不会给所有的盒子加高度，太麻烦，而且这种不能适应页面的快速变化</p>
                <div class="method-4 cf-border">
                    <div v-for="item of list" class="cf-item">
                        {{item}}
                    </div>
                </div>
                <p>我是其他元素</p>
            </div>

        </section>

    </div>
    
</template>

<script>
export default {
    data(){
        return {
            list:['html','css','javaScript','typeScript','java','angular','vue']

        }
    },
    
}
</script>

<style scoped>
    #clean-float{
        margin:20px;
    }
    .wrapper{
        width:600px;
        margin:20px;
        padding:20px;
        border:2px solid #e4e4e4;
    }
    .cf-border{
        border:1px solid #000;
    }

    /*为父元素添加高度*/
    .cf-clear{
        clear:both;
    }
    .h8{
        height:8px;
        _font-size:0;
    }

    /*方法三：overflow:hidden*/
    .method-3{
        overflow: hidden; /*清除浮动，并给div设置高度*/
        _zoom:1;/*值为1保持原比例可以放大缩小、
                ie6留了一个后门，就是只要给css属性之前，加上下划线，这个属性就是ie6认识的专有属性
                ie6不支持用overflow:hidden;来清除浮动  使用_zoom:1解决ie下的浮动，margin重叠等一些问题*/
    }
    /*为父元素添加高度*/
    .method-4{
        height:150px;

    }






    .cf-item{
        float:left;
        width:100px;
        height:50px;
        background:red;
        border:1px solid #000;
        margin:10px;
        text-align:center;
        line-height: 50px;
    }

</style>


