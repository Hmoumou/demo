<template>
    <div>
        <!-- <p v-for="(item ,index) in 28" :key='index'>askjfhasfhsf</p> -->
       <label >
           <select>
               <option v-for="(item,index) in arr" :key='index'>
                   {{item}}
               </option>
           </select>
       </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "窗外的麻雀",
        "在电线杆上多嘴",
        "你说这一句",
        "很有夏天的感觉",
        "手中的铅笔",
        "在纸上来来回回",
        "我用这几行字",
        "来形容",
        "你是我的谁",
        "秋刀鱼的滋味",
        "猫跟你都想了解",
      ]
    }
  },
//   mounted(){
//     this.$nextTick(() => {
//       this.arr.pop()
//     })
//   }
}
</script>

<style scoped>

</style>