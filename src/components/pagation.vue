<template>
  <div class="pagation">
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current - 1)" v-show="showPrevFn">上一页</a>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(1)" v-show="showFirst">1</a>
    <span class="btn" v-show="showFirstEllip">...</span>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current - 2)" v-show="showPrevPrev">{{ pageConf.current - 2 }}</a>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current - 1)" v-show="showPrev">{{ pageConf.current - 1 }}</a>
    <span class="btn">{{ pageConf.current }}</span>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current + 1)" v-show="showNext">{{ pageConf.current + 1 }}</a>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current + 2)" v-show="showNextNext">{{ pageConf.current + 2 }}</a>
    <span class="btn" v-show="showEllip">...</span>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.total)" v-show="showTotal">{{ pageConf.total }}</a>
    <a href="javascript:;" class="btn btn-link" @click="pagaClick(pageConf.current + 1)" v-show="showNextFn">下一页</a>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        pageConf : this.pagaConf
      }
    },
    props: ['pagaConf'],
    computed:{
      showEllip(){
        if(this.pageConf.total <= this.pageConf.showNumber){
          this.pageConf.ellipsisShow = false;
        }else if(this.pageConf.total - this.pageConf.current <= 2){
          this.pageConf.ellipsisShow = false;
        }else{
          this.pageConf.ellipsisShow = true;
        } 
        return this.pageConf.ellipsisShow;
      },
      showPrev(){
        return this.pageConf.current - 1 > 0;
      },
      showPrevPrev(){
        return this.pageConf.current - 2 > 0 ? true : false;
      },
      showNext(){
        return this.pageConf.current + 1 <= this.pageConf.total ? true : false;
      },
      showNextNext(){
        return this.pageConf.current + 2 <= this.pageConf.total ? true : false;
      },
      showFirst(){
        return this.pageConf.current - 2 > 1 ? true : false;
      },
      showFirstEllip(){
        return this.pageConf.current - 2 > 2 ? true : false;
      },
      showPrevFn(){
        return this.pageConf.current == 1 ? false : true;
      },
      showNextFn(){
        return this.pageConf.current == this.pageConf.total ? false : true;
      },
      showTotal(){
        return this.pageConf.current + 2 < this.pageConf.total;
      }
    },
    methods:{
      pagaClick(cur){
        this.pageConf.current = cur;
        this.$emit('pagaClick', cur);
      }
    },
    mounted(){
      console.log(this.pagaConf);
    }
  }
</script>
<style>
  .pagation{
    text-align: center;
  }
</style>