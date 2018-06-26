<template>
    <div id="mian-shi">
        <h2 style="text-align:center">面试题</h2>
        <div class="wrapper">
            <h5>1.如何实现左右两个div宽为100px，中间div填充剩下的宽度，让这三个div水平排列。</h5>
            <div class="ms-container">
                <div class="left">
                    <p>左边内容</p>
                </div>
                <div class="middle">
                    <p>中间内容</p>
                </div>
                <div class="right">
                    <p>右边内容</p>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <h5>2.vue的computed、watch和method的区别。</h5>
            <div>
            </div>
        </div>
        <div class="wrapper">
            <h5>3.vue的nextTick。</h5>
            <div>
                <p><b>(1) nextTick的由来</b></p>
                <p>由于VUE的数据驱动视图更新，是异步的，即修改数据的当下，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。</p>
                <p><b>(2) nextTick的触发时机</b></p>
                <p>在同一事件循环中的数据变化后，DOM完成更新，立即执行nextTick(callback)内的回调。</p>
                <p><b>(3) nextTick的应用场景</b></p>
                <p>需要在视图更新之后，基于新的视图进行操作。</p>
            </div>
        </div>
        <div class="wrapper">
            <h5>4.vue如何封装组件，要会使用slot。</h5>
            <ul>
                <li>props 父级传给组件的数据 然后用 $emit('方法名'，数据) 返回父级数据</li>
                <li>solt是一个内容分发插槽，有一个name属性</li>
            </ul>
        </div>
        <div class="wrapper">
            <h5>5.在登陆框中如何防止短时间内被大量注册账号（可以理解为防止爬虫无脑注册）。</h5>
            <ul>
                <li>记录注册人cookie,ip防止恶意注册，，不适用，可以清除cookie，换ip</li>
                <li>手机验证码、邮箱验证码</li>
                <li>加入图形验证码</li>
            </ul>
        </div>
        <div class="wrapper">
            <h5>6.web缓存的几种方式，如何设置。</h5>
        </div>
        <div class="wrapper">
            <h5>7.常见跨域问题以及如何处理。</h5>
            <ul>
                <li>方法一：通过项目中的config文件夹下的index.js配置文件中配置代理</li>
                <li>方法二：后台处理，添加header Access-Control-Allow-Origin:* 允许所有来源访问
                Access-Control-Allow-Method:POST,GET 允许访问的方式 </li>
                <li>方法三：使用jquery中的jsonp请求
                    methods: { 
                        getData () { 
                            var self = this 
                            $.ajax({ 
                            url: 'http://f.apiplus.cn/bj11x5.json', 
                            type: 'GET', 
                            dataType: 'JSONP', 
                            success: function (res) { 
                                self.data = res.data.slice(0, 3) 
                                self.opencode = res.data[0].opencode.split(',') 
                            } 
                            }) 
                        } 
                    } 
                </li>
            </ul>
        </div>
        <div class="wrapper">
            <h5>8.cookies和localStorage，sessionStorage的区别。</h5>
            <ul>
                <li>cookie机制：如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。</li>
                <li>localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。</li>
                <li>sessionStorage的生命周期是在仅在当前会话下有效。sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。</li>
            </ul>
            <div><b>扩展：</b>WebStorage提供了一些方法，数据操作比cookie方便；

        　　　　setItem (key, value) ——  保存数据，以键值对的方式储存信息。

            　　getItem (key) ——  获取数据，将键值传入，即可获取到对应的value值。

                removeItem (key) ——  删除单个数据，根据键值移除对应的信息。

                clear () ——  删除所有的数据

                key (index) —— 获取某个索引的key</div>
        </div>
        <div class="wrapper">
            <h5>9.需要知道作用域链和原型链。</h5>
        </div>
        <div class="wrapper">
            <h5>10.知道Object的一些方法，比如create，assign之类的。</h5>
        </div>
        <div class="wrapper">
            <h5>11.正则表达式的贪婪匹配和非贪婪匹配。</h5>
        </div>
        <div class="wrapper">
            <h5>12.树的几种表示方式，比如孩子表示法，兄弟表示法。</h5>
        </div>
        <div class="wrapper">
            <h5>13.冒泡排序和快排。</h5>
        </div>
        <div class="wrapper">
            <h5>14.用闭包实现一个斐波那契数列，比如输入n，能得到第n个数的大小。</h5>
        </div>
        <div class="wrapper">
            <h5>15.求一个整数数组的倒数第3大的数，考虑性能。</h5>
            <div>
                <p>原数组：10,13,12,5,8,4,7,6,9</p>
                <p>倒数第三大的值：{{thirdMax}}</p>
                <button class="btn btn-danger" @click="findThirdMaxNum()">寻找</button>
            </div>
        </div>
        <div class="wrapper">
            <h5>16.数组去重。</h5>
            <ol>
                <li>双重循环去重</li>
                <li>排序去重</li>
                <li>对象去重</li>
                <li>下标去重</li>
                <li>ES6的set去重</li>
            </ol>
        </div>
        <div class="wrapper">
            <h5>17.vue的生命周期钩子，这个要说明白，不能只是说出那几个方法名字。</h5>
            <ul>
                <li>beforeCreate:组件实例刚被创建，组件属性计算之前，如data属性等 （dom元素和data并未初始化）</li>
                <li>created:组件实例创建完成，属性已绑定，但DOM还未生成，$el属性还不存在 (完成了data初始化，但dom元素没有初始化)</li>
                <li>beforeMount:模板编译/挂载之前 （完成了dom元素和data初始化，此时值还没有渲染到dom元素中）</li>
                <li>mounted:模板编译/挂载之后 （完成挂载）</li>
                <li>beforeUpdate:组建更新之前</li>
                <li>updated:组建更新之后</li>
                <li>beforeDestroy:组件销毁前调用</li>
                <li>destroyed:组件销毁后调用</li>
            </ul>
        </div>
        <div class="wrapper">
            <h5>18.为什么在vue组件中的style标签加上scoped会只影响本组件的元素。</h5>
            <div>
                实际上vue在背后做的工作是将当前组件的节点添加一个像data-v-1233这样唯一属性的标识，当然也会给当前style的所有样式添加[data-v-1233]这样的话，就可以使得当前样式只作用于当前组件的节点。但是我们需要注意的是如果我们添加了子组件，同样的，如果子组件也用scoped标识了，那么在父组件中是不能设置子组件中的节点的。若父组件有scoped，子组件没有设置，同样，也是不能在父组件中设置子组件的节点的样式的，因为父组件用了scoped,那么父组件中style设置的样式都是唯一的了，不会作用与其他的组件样式
            </div>
        </div>
        <div class="wrapper">
            <h5>19.几种垂直居中的方法。</h5>
            <ol>
                <li>通过table-cell</li>
                <li>通过display:flex</li>
                <li>通过position:absolute和负边距</li>
                <li>通过position:absolute和translate</li>
                <li>通过position:absolute和0，margin:auto</li>
                <li>通过display:inline-block和after伪元素</li>
                <li>通过display:flex和margin:auto</li>
            </ol>
        </div>
        <div class="wrapper">
            <h5>20.几种清楚浮动的方法。</h5>
            <ol>
                <li>1.clear-both</li>
                <li>隔墙法：内墙法和外墙法    添加新的标签</li>
                <li>overflow:hidden</li>
                <li>定义父元素的高度</li>
            </ol>
        </div>
        <div class="wrapper">
            <h5>21.什么是BFC。</h5>
            <p>浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。</p>
            <p>*创建BFC，则满足下列的任意一个或多个条件即可：</p>
            <ol>
                <li>float的值不是none。</li>
                <li>position的值不是static或者relative。</li>
                <li>display的值是inline-block、table-cell、flex、table-caption或者inline-flex</li>
                <li>overflow的值不是visible</li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                thirdMax:'',
            }
        },
        methods:{
            findThirdMaxNum(){
                let arr=[10,13,12,5,8,4,7,6,9],
                    maxF=arr[0],
                    maxS=arr[1],
                    maxT=arr[2]
                for(let i=0;i<arr.length;i++){
                    if(arr[i]>maxF){
                        maxT=maxS
                        maxS=maxF
                        maxF=arr[i]
                    }
                    if(maxT<arr[i]&&arr[i]<maxS){
                        maxT=arr[i]
                    }
                    if(maxS<arr[i]&&arr[i]<maxF){
                        maxT=maxS
                        maxS=arr[i]
                    }
                }
                this.thirdMax=maxT

            }
        }
    }
</script>

<style scoped>
    #mian-shi {}
    .wrapper {
        padding: 10px;
        margin: 15px;
        border: 2px solid #e4e4e4;
    }
    .ms-container {
        height: 50px;
        width: 400px;
        margin: 0 auto;
        position: relative;
        /* min-width: 300px; */
    }
    .left {
        position: absolute;
        width: 100px;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: beige;
    }
    .middle {
        width: auto;
        padding: 0 100px;
        height: 100%;
        background-color: red;
    }
    .right {
        position: absolute;
        width: 100px;
        height: 100%;
        top: 0px;
        right: 0px;
        background-color: coral;
    }
</style>


