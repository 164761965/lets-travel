<template>
  <div style="sort-methods">
    <div style="background-color:#e4e4e4">
      <p>排序前：3,44,38,5,47,15,36,26,27,2,46,4,19,50,48</p>
      <p>排序后：{{arr.toString()}}</p>
    </div>
    <div style="border:1px solid #000;padding:10px;margin:10px;">
      <button class="btn btn-danger" @click="clean">清空</button>
      <br>
      <br>
      <p>时间复杂度：O(n^2)</p>
      <button class="btn btn-danger" @click="bubbleSort">冒泡排序</button>
      <button class="btn btn-danger" @click="selectSort">选择排序</button>
      <button class="btn btn-danger" @click="insertSort">插入排序</button>
      <button class="btn btn-danger" @click="insertSortPro">二分插入排序</button>
      <br>
      <br>
      <p>时间复杂度：O(n logn)</p>
      <button class="btn btn-danger" @click="shellSort">希尔排序</button>
      <button class="btn btn-danger" @click="mergeSortMain">归并排序</button>
      <button class="btn btn-danger" @click="qucikSortMain">快速排序</button>
      <button class="btn btn-danger" @click="quickSortMain2">快速排序2</button>
      <button class="btn btn-danger" @click="heapSort">堆排序</button>
      <br>
      <br>
      <p>时间复杂度：O( n + k)</p>
      <button class="btn btn-danger" @click="countingSortMain">计数排序</button>
      <button class="btn btn-danger" @click="bucketSortMain">桶排序</button>
      <button class="btn btn-danger" @click="radixSortMain">基数排序</button>
    </div>
    
  </div>


</template>

<script>
export default {
  name: 'page-navbar',
  create(){

  },

  data() {
    return {
      baseData:[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48],
      arr:[],
    };
  },
  methods:{
    clean(){
      this.arr=[]
    },
    getData(){
      let data=[]
      this.baseData.forEach((item)=>{
        data.push(item)
      })
      return data
    },
    sort(){
      //冒泡排序
      this.sortedArr=this.bubbleSort(this.arr)
    },
    /**
     * 冒泡排序
     * 平均耗时  O(n^2)
     * 稳定排序   傻瓜式排序

     @description 两层for循环，思路数组最后一个依次与前面比较，从最后一个往前冒
     */
    bubbleSort(){
      let arr=this.getData()
      console.time("冒泡排序耗时")
      for(let i=0;i<arr.length;i++){
        let flag=false;
        for(let j=arr.length-1;j>i;j--){
          if(arr[j]<arr[j-1]){
            //交换    稳定的
            let temp=arr[j]
            arr[j]=arr[j-1]
            arr[j-1]=temp
            flag=true
          }
        }
        if(!flag){
          //已经排好了
          break
        }
      }
      this.arr=arr
      console.timeEnd("冒泡排序耗时")
    },
    /**
     * 选择排序
     * 时间复杂度上最稳定的排序算法之一    无论怎么排用时都是O(n^2)
     * 
     * @example  规模越小越好   唯一优势：不占用额外内存空间
     * @description 思路：for循环寻找最小值，然后和当前位置互换
     */
    selectSort(){
      let arr=this.getData()
      let minIndex,temp
      console.time("选择排序耗时")
      for(let i=0;i<arr.length-1;i++){
        minIndex=i
        for(let j=i+1;j<arr.length;j++){
          //寻找最小的值得索引  并保存
          if(arr[j]<arr[minIndex]){
            minIndex=j
          }
        }
        temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
      }
      this.arr=arr
      console.timeEnd("选择排序耗时")
    },
    
    /**
     * 插入排序
     * 
     */
    insertSort(){
      let arr=this.getData()
      let j,current
      console.time("插入排序耗时")
      for(let i=1;i<arr.length;i++){
        j=i-1
        current=arr[i]
        while(j>=0&&arr[j]>current){
          //前面有比自己大得  得换换
          arr[j+1]=arr[j]
          j--
        }
        arr[j+1]=current
      }
      this.arr=arr
      console.timeEnd("插入排序耗时")
    },
    /**
     * 二分插入排序
     * 插入排序升级版
     */
    insertSortPro(){
      let arr=this.getData()
      let left,right,middle,current
      console.time("二分插入排序耗时")
      for(let i=1;i<arr.length;i++){
        current=arr[i]
        left=0
        right=i-1
        while(left<=right){
          middle=parseInt((left+right)/2)
          if(current<arr[middle]){
            right=middle-1
          }else{
            left=middle+1
          }
        }
        //此时left值即为该值对应的排好序的索引位置
        for(let j=i-1;j>=left;j--){
          arr[j+1]=arr[j]
        }
        arr[left]=current
      }
      this.arr=arr
      console.timeEnd("二分插入排序耗时")
    },
    
    /**
     * 希尔排序
     */
    shellSort(){
      let arr=this.getData()
      let len=arr.length,
      temp,gap=1
      console.time("希尔排序耗时")
      while(gap<len/3){
        gap=gap*3+1
      }
      for(gap;gap>0;gap=Math.floor(gap/3)){
        for(let i=gap;i<arr.length;i++){
          temp=arr[i]
          for(var j=i-gap;j>=0&&arr[j]>temp;j-=gap){
            arr[j+gap]=arr[j]
          }
          arr[j+gap]=temp
        }
      }
      this.arr=arr
      console.timeEnd("希尔排序耗时")
    },

    /**
     * 归并排序
     * 
     * js对于递归没有优化  采用递归函数不仅没有速度上的优势，还有可能造成程序运行失败
     * 
     * @example 时间复杂度始终为  O(n log n)  代价是需要额外得内存空间
     */
    mergeSortMain(){
      console.time("归并排序耗时")
      this.arr=this.mergeSort(this.baseData)
      console.timeEnd("归并排序耗时")
    },
    
    mergeSort(arr){
      let len=arr.length
      if(len<2){
        return arr
      }
      let middle=Math.floor(len/2),
          left=arr.slice(0,middle),
          right=arr.slice(middle)
      return this.merge(this.mergeSort(left),this.mergeSort(right))
    },
    merge(left,right){
      let result=[]
      while(left.length>0&&right.length>0){
        if(left[0]<=right[0]){
          result.push(left.shift())
        }else{
          result.push(right.shift())
        }
      }
      while(left.length){
        result.push(left.shift())
      }
      while(right.length){
        result.push(right.shift())
      }
      return result
    },
    /**
     * 快速排序
     * 听名字就知道速度快，虽然最坏情况是O(n^2),但平均时间复杂度O(n log n)相对于其他排序有更小的隐含的常数因子， 因此相对于其他排序速度还是很快的
     * 
     * @example 分而治之的思想
     * 特点：速度快 效率高
     * 
     * @description  先确定中间一个值得位置，保证左边得小于中间值，右边得大于中间值
     */
    qucikSortMain(){
      let arr=this.getData(),
          left=0,
          right=arr.length-1
      console.time("快速排序耗时")
      this.arr=this.quickSort(arr,left,right)
      console.timeEnd("快速排序耗时")
    },
    quickSort(arr,left,right){
      if(left<right){
        let pivot=arr[right],   //中间值
            pivotIndex=left-1,  //中间值index
            temp
        for(let i=left;i<=right;i++){
          if(arr[i]<=pivot){
             pivotIndex++
             temp=arr[pivotIndex]
             arr[pivotIndex]=arr[i]
             arr[i]=temp
          }
        }
        this.quickSort(arr,left,pivotIndex-1)
        this.quickSort(arr,pivotIndex+1,right)
      }
      return arr
    },
    /**
     * 快速排序的另一种方式，从中间值开始比较
     * 不知道为什么，每次排序回对原始数据的个数造成影响，每排一次个数减小一个
     */
    quickSortMain2(){
      let arr=this.getData()
      console.time("快速排序2")
      this.arr=this.quickSort2(arr)
      console.timeEnd("快速排序2")
    },
    quickSort2(arr){
      if(arr.length<=1){
        return arr
      }
      let pivotIndex=Math.floor(arr.length/2),
          pivot=arr.splice(pivotIndex,1)[0],
          left=[],
          right=[]
      for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
          left.push(arr[i])
        }else{
          right.push(arr[i])
        }
      }
      return this.quickSort2(left).concat([ pivot ],this.quickSort2(right))
    },


    /**
     * 堆排序
     * @description  1.堆排序首先要建堆，分为大根堆，小根堆，大根堆的意思是根的值大于子结点的值
     *               2.构建完大根堆后，堆顶元素即为当前最大值，将最大值移到数组最后面，将剩下的元素在构建大根堆
     *               3.重复上面的步骤，知道只剩余一个元素，此时已经排好序
     */
    heapSort(){
      let arr=this.getData()
      console.time("堆排序耗时")
      var heapSize=arr.length,temp
      //建堆
      for(let i=Math.floor(heapSize/2)-1;i>=0;i--){  //为什么减一，因为计算机语言中的排序是从0开始的
        this.heapify(arr,i,heapSize)
      }
      //堆排序
      //此时已经构建了大根堆，堆顶元素为最大值，只需要将它提出，剩下的重新构建堆即可
      for(let j=heapSize-1;j>=1;j--){
        temp=arr[0]
        arr[0]=arr[j]
        arr[j]=temp
        this.heapify(arr,0,--heapSize)
      }
      console.timeEnd("堆排序耗时")
      this.arr=arr
    },


    /**
     * 构建大根堆
     */
    heapify(arr,maxIndex,len){
      let left=2*maxIndex+1,
          right=2*maxIndex+2,
          largest=maxIndex,
          temp
      if(left<len&&arr[left]>arr[largest]){
        largest=left
      }
      if(right<len&&arr[right]>arr[largest]){
        largest=right
      }
      if(largest!=maxIndex){
        temp=arr[largest]
        arr[largest]=arr[maxIndex]
        arr[maxIndex]=temp
        //不是最大值，继续找
        this.heapify(arr,largest,len)
      }
    },


    /////////堆排序END
    /**
     * 计数排序
     * @description  1.将需要排序的值作为另一个数组的角标，该角标下对应的值为该值出现的次数，通过一个循环将所有值进行存储，并获取最大最小值
     *               2.从最小值到最大值进行一次遍历，遍历新数组，当某角标下的值n>0时，说明该角标出现了n次，把n个值加入到新数组中，依次循环，直到遍历到最大值
     *               3.获得的新数组即为排好序的数组
     * 
     * 思路：找一个空数组把值作为下标找到其位置，再把出现的次数给存起来。       举例：把值k，记录到新数组角标k下。例如一个数组A中2出现了3次，10出现了1次，则新数组中C中 C[2]=3  C[10]=1 其余值全为empty    获取遍历好的数组时，只需要遍历2-10之间，将C数组中值>0的角标赋值给新数组就可以
     * @example  局限性：需要排序的值必须为整数，，，如果有小数请选择——>桶排序
     */
    countingSortMain(){
      let arr=this.getData()
      this.arr=this.countingSort(arr)

    },

    countingSort(array) {
    　　var len = array.length,
    　　B = [],
    　　C = [],
        min=array[0],
        max=array[0]
    　　console.time('计数排序耗时');
    　　for (var i = 0; i < len; i++) {
    　　　　min = min <= array[i] ? min : array[i];
    　　　　max = max >= array[i] ? max : array[i];
    　　　　C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    　　}
    　　for (var k = min; k <=max; k++) {
    　　　　var length = C[k]
    　　　　for(var m = 0 ;m <length ; m++){
    　　　　　　B.push(k);
    　　　　}
    　　}
    　　console.timeEnd('计数排序耗时');
    　　return B
    },

    /**
     * 桶排序
     * @description  桶排序是计数排序的升级版，他需要设定桶数，以步长为分隔，将最相近数据分隔在一起，在桶内进行插入排序，最后将桶从小到大拼接起来。
     * @example  注意  桶数不要太多  并且至少2个桶
     */
    bucketSortMain(){
      let arr=this.getData()
      this.arr=this.bucketSort(arr,5)
    },

    bucketSort(arr,num=5){
      if(arr.length<=1){
        return arr
      }
      let len=arr.length,
          buckets=[],    //桶数组
          min=arr[0],    //最小值
          max=arr[0],    //最大值
          n=0,           //结果循环索引
          result=[],     //排序后的结果
          space          //步长

      //控制桶的数量，避免桶太多
      let index=Math.floor(len/num)
      while(index<2){
        num--
        index=Math.floor(len/num)
      }
      console.time("桶排序耗时")
      for(let i=1;i<len;i++){
        if(min>arr[i]){
          min=arr[i]
        }else if(max<arr[i]){
          max=arr[i]
        }
      }
      space=(max-min+1)/num;  //步长
      for(let j=0;j<len;j++){
        let index = Math.floor((arr[j]-min)/space)
        if(buckets[index]){
          //非空桶，插入排序
          let k=buckets[index].length-1
          while(k>=0&&buckets[index][k]>arr[j]){
            buckets[index][k+1]=buckets[index][k]
            k--
          }
          buckets[index][k+1]=arr[j]
        }else{
          //空桶
          buckets[index]=[]
          buckets[index].push(arr[j])
        }
      }
      while(n<num){
        result=result.concat(buckets[n])
        n++
      }
      console.timeEnd("桶排序耗时")
      return result
    },




    /**
     * 基数排序
     * @description  已知最高为的位数，基数排序是先排最低位（个位），把最低位一致的放在一个桶里，然
     *               后依次取出，再进一位（十位），把十位相同的再放到一个桶里，然后再取出，这样经过
     *               两次重排序就能得到百位以内的排序序列了，百位，千位也是如此。
     *  基数排序适用于：
     *  (1)数据范围较小，建议在小于1000
     *  (2)每个数值都要大于等于0
     */
    radixSortMain(){
      let arr=this.getData()
      this.arr=this.radixSort(arr,2)
    },
    /**
     * @param arr  待排序数组
     * @param maxDigit 最大位数
     */
    radixSort(arr,maxDigit){
      if(arr.length<=1){
        return arr
      }
      let mod=10,
          dev=1,
          counter=[]
      console.time("基数排序耗时")
      for(let i=0;i<maxDigit;i++,dev*=10,mod*=10){
        for(let j=0;j<arr.length;j++){
          let bucket=parseInt((arr[j] % mod) / dev)
          if(counter[bucket]==null){
            counter[bucket]=[]
          }
          counter[bucket].push(arr[j])
        }
        let pos=0
        for(let j=0;j<counter.length;j++){
          let value = null
          if(counter[j]!=null){
            while((value=counter[j].shift())!=null){
              arr[pos++]=value
            }
          }
        }
      }

      console.timeEnd("基数排序耗时")
      return arr
    }
    /**
     * 基数排序 vs 计数排序 vs 桶排序

        这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

        1.基数排序：根据键值的每位数字来分配桶
        2.计数排序：每个桶只存储单一键值
        3.桶排序：每个桶存储一定范围的数值
     */


  }
};
</script>
