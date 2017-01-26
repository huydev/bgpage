<template>
  <div class="alertbox" v-show="show">
    <div class="bd">
      <div class="txt">您确定删除？</div>
      <div class="opt">
        <a href="javascript:;" class="btn btn-danger">确定</a>
        <a href="javascript:;" class="btn btn-success">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        show: false
      }
    }
  }
</script>

<style>
  .alertbox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
  }
  .alertbox .bd{
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 30px 20px;
    width: 300px;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    border-radius: 2px;
  }
  .alertbox .opt{
    margin-top: 30px;
    text-align: right;
  }
</style>