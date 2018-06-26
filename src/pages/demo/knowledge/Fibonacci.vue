<template>
    <div id="fibonacci">
        <h2>实现斐波那契数列</h2>
        <div class="result">
            <p>输入n：<input v-model="number" placeholder="输入"></p>
            <p>斐波那契数列第n项的值为：{{result}}</p>
            <p>循环次数：{{count}}</p>
            <button class="btn btn-danger" @click="clear">清除</button>            
        </div>

        <div class="fb-border">
            <p>方法一：递归法。递归其实是对二叉树的深度遍历，这种方法写起来简单，但是效率并不是很高，</p>
            <button class="btn btn-danger" @click="method1Main">方法一：递归法</button>            
        </div>
        <div class="fb-border">
            <p>方法二：闭包递推法。闭包递推法就是利用闭包的原理，将一个数组（初始为【1,1】的Fibonacci数列），存在两个函数中间，并通过内部函数不断的调用的数组，使数组以全局变量的形式存储在内存中，这样不断扩展这个Fibonacci数列，最终求得所要的Fibonacci数</p>
            <button class="btn btn-danger" @click="method2Main">方法二：闭包递推法</button>            
        </div>
        <div class="fb-border">
            <p>方法三：递推法。要说递推法是效率最高的，它在一个for循环里不断地改变fiba(n-1)和fiba(n-2)的值，从而求得最终结果</p>
            <button class="btn btn-danger" @click="method3Main">方法三：递推法</button>            
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            result:'',
            number:'',
            count:0
        }
    },
    methods:{
        clear(){
            this.result=''
            this.number=''
            this.count=0

        },
        /**
         * 递归法
         */
        method1Main(){
            this.count=0
            if(parseInt(this.number)){
                this.result=this.method1(parseInt(this.number))
            }else{
                this.result=''
                alert("请输入数字")
            }
        },
        method1(n){
            this.count++
            if(n==1||n==2){
                return 1
            }else{
                return this.method1(n-1)+this.method1(n-2)
            }
        },

        /**
         * 方法二：闭包递推法
         */
        method2Main(){
            this.count=0
            if(parseInt(this.number)){
                this.result=this.method2(parseInt(this.number))
            }else{
                this.result=''
                alert("请输入数字")
            }
        },
        method2(num){
            let count=0
            var fibo=(function(){
                var arr=[0,1,1]
                return function(n){
                    count++
                    var res=arr[n]
                    if(res){
                        return res
                    }else{
                        arr[n]=fibo(n-1)+fibo(n-2)
                        return arr[n]
                    }
                }
            })()
            let result=fibo(num)
            this.count=count
            return result
        },
        /**
         * 方法三：递推法
         */
        method3Main(){
            this.count=0
            if(parseInt(this.number)){
                this.result=this.method3(parseInt(this.number))
            }else{
                this.result=''
                alert("请输入数字")
            }
        },
        method3(n){
            let x=1,
                y=1,
                z=0
            if(n==1||n==2){
                this.count=1
                return 1
            }else{
                for(let i=2;i<n;i++){
                    this.count++
                    z=x+y
                    x=y
                    y=z
                }
                return z
            }
        }
    },
}
</script>

<style scoped>
    #fibonacci{
        margin:20px;
    }
    #fibonacci h2{
        text-align: center;
    }
    .result{
        border:2px solid #e4e4e4;
        padding:10px;
        
    }
    .fb-border{
        border:1px solid #000;
        padding:10px;
        margin:10px 0;
    }

    .wrapper{
        

    }

</style>


