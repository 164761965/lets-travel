<template>
    <div>

    </div>
</template>

<script>
export default {
    created(){
        let socket='61.158.56.6:8030/websocket'
let dataMonitorUrl=`http://${socket}/rtdata/echarts/demo.html`
console.log(dataMonitorUrl)
        
    }
}
</script>


<style scoped>

</style>

