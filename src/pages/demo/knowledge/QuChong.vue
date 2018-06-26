<template>
    <div id="qu-chong">
        <h2>数组去重</h2>
        <div class="result">
            <p>原始数组：1,2,3,4,4,1,1,2,1,1,1</p>
            <p>去重数组：{{arr.toString()}}</p>
            <button class="btn btn-danger" @click="clean">清除</button>
        </div>
        
        <div class="qc-border">
            <p>方法一：双层循环</p>
            <p>思路：定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中。</p>
            <button class="btn btn-danger" @click="distinct1">方法一：双层循环</button>
        </div>
        <div class="qc-border">
            <p>方法二：先排序再去重</p>
            <p>思路：先将原数组排序，在与相邻的进行比较，如果不同则存入新数组。</p>
            <button class="btn btn-danger" @click="distinct2">方法二：排序去重</button>
        </div>
        <div class="qc-border">
            <p>方法三：利用对象的属性去重（推荐）</p>
            <p>思路：每次取出原数组的元素，然后再对象中访问这个属性，如果存在就说明重复</p>
            <button class="btn btn-danger" @click="distinct3">方法三：对象去重</button>
        </div>
        <div class="qc-border">
            <p>方法四：利用下标查询去重</p>
            <p>思路：在新数组中查询下标，如果存在就说明重复</p>
            <button class="btn btn-danger" @click="distinct4">方法四：下标查询去重</button>
        </div>
        <div class="qc-border">
            <p>方法五：利用ES6的set去重</p>
            <p>思路：set中元素不重复</p>
            <button class="btn btn-danger" @click="distinct5">方法五：ES6的set去重</button>
        </div>
        


    </div>
</template>

<script>
export default {
    data(){
        return{
            baseData:[1,2,3,4,4,1,1,2,1,1,1],
            arr:[]
        }
    },
    methods:{
        getData(){
            let arr=[]
            this.baseData.forEach((item)=>{
                arr.push(item)
            })
            return arr
        },
        clean(){
            this.arr=[]
        },

        //方法一：双层循环
        distinct1(){
            let arr=this.getData(),
                res=[arr[0]]
            for(let i=1;i<arr.length;i++){
                let isRepeat=false
                for(let j=0;j<res.length;j++){
                    if(arr[i] == res[j]){
                        isRepeat=true
                        break;
                    }
                }
                if(!isRepeat){
                    res.push(arr[i])
                }
            }
            this.arr=res
        },

        //方法二：排序去重
        distinct2(){
            let arr=this.getData().sort(),
                res=[arr[0]]
            for(let i=1;i<arr.length;i++){
                if(arr[i]!=res[res.length-1]){
                    res.push(arr[i])
                }
            }
            this.arr=res
        },

        //方法三：对象去重
        distinct3(){
            let arr=this.getData(),
                res=[],
                obj={}
            for(let i=0;i<arr.length;i++){
                if(!obj[arr[i]]){
                    //如果对象中这个属性不存在
                    res.push(arr[i])
                    obj[arr[i]]=1;
                }
            }
            this.arr=res
        },
        //方法四：下标查询去重
        distinct4(){
            let arr=this.getData(),
                res=[arr[0]]
            for(let i=1;i<arr.length;i++){
                if(res.indexOf(arr[i])==-1){
                    res.push(arr[i])
                }
            }
            this.arr=res
        },
        //方法五：利用ES6的set去重
        distinct5(){
            let arr=this.getData(),
                res=[...new Set(arr)]
            this.arr=res
        },


    },
    
}
</script>

<style scoped>
    #qu-chong{
        margin:20px;


    }

    #qu-chong h2{
        text-align:center;
    }

    .result{
        border:2px solid #e4e4e4;
        padding:20px;
        background-color:bisque;
    }

    .qc-border{
        border:1px solid #000;
        padding:20px;
        margin:10px 0;
    }
</style>


