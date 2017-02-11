<template>
  <div class="cwrap">
    <div class="container">
      <h3>{{ title }}{{ $route.params.id }}</h3>
      <form>
        <div class="form-group">
          <label for="title">标题</label>
          <input type="text" class="form-control" id="title" placeholder="标题">
        </div>
        <div class="form-group">
          <label for="content">内容</label>
          <textarea name="" id="content" class="form-control" rows="10"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success">提交</button>
          <button type="button" class="btn btn-default">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        title: '新增文章'
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .cwrap{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
</style>