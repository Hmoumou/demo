<template>
  <div class="main-container">
   <header class="header">我是头部</header>
   <div class="mainnnn" ref='mainnnn'>
     <ul>
       <li v-for='(item, index) in arr' :key='index'>{{item}}</li>
     </ul>
   </div>
   <div class="footer">
     <input type="text" v-model="text" @keyup.enter="handleup">
     <button @click="handleup">发送</button>
     <button @click="handleto">跳转</button>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "mainn",
  data() {
    return {
      text: [],
      BS: null,
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
        "猫跟你都想了解"
      ]
    };
  },
  methods: {
    handleup() {
      this.arr.push(this.text)
      this.text = ""
      this.$nextTick(()=>{   
          this.BS.refresh()
          let scrollTop = this.$refs.mainnnn.scrollHeight - this.$refs.mainnnn.offsetHeight
          this.BS.scrollTo(0,-scrollTop,300)
      })
    },
    initScroll() {
      this.$nextTick(() => {
        let aa = this.$refs.mainnnn;
        this.BS = new BScroll(aa,{ mouseWheel: true ,scrollbar:true})
        // aa.scrollTop = aa.scrollHeight
        
      })
    },
    handleto(){
        this.$router.push('/three')
    }
   
  },
   mounted(){
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
        document.getElementById('app').style.overflow = 'auto'
        this.initScroll()
    },
    beforeDestroy(){
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
        document.getElementById('app').style.overflow = 'auto'
    }
};
</script>
<style>
html {
  height: 100%;
  overflow: hidden;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped lang='scss'>
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  .header {
    height: 45px;
    line-height: 45px;
    background: pink;
    text-align: center;
    color: #fff;
  }
  .footer {
    display: flex;
    input {
      -webkit-appearance: none; //去除默认样式的
      outline: none;
      flex: 1;
      height: 40px;
      padding: 0 10px;
      line-height: 40px;
      border: 1px solid pink;
    }
    button {
      height: 42px;
      width:60px;
    }
  }
  .mainnnn {
    text-align: center;
    flex: 1;
    overflow: hidden;
    background: rgb(243, 240, 243);

    li {
      padding-right: 40px;
      box-sizing: border-box;
      width: 100%;
      line-height: 2.5;
      text-decoration: none;
      list-style: none;
    }
  }
}
</style>
