<template>
  <div class="cwrap">
    <div class="container">
      <ul class="article-list">
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="javascript:;" class="btn btn-info">编辑</a>
            <a href="javascript:;" class="btn btn-danger">删除</a>
            <router-link to="/editArticle">文章管理</router-link>
          </div>
        </li>
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="#" class="btn btn-info">编辑</a>
            <a href="#" class="btn btn-danger">删除</a>
          </div>
        </li>
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="#" class="btn btn-info">编辑</a>
            <a href="#" class="btn btn-danger">删除</a>
          </div>
        </li>
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="#" class="btn btn-info">编辑</a>
            <a href="#" class="btn btn-danger">删除</a>
          </div>
        </li>
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="#" class="btn btn-info">编辑</a>
            <a href="#" class="btn btn-danger">删除</a>
          </div>
        </li>
      </ul>
      <div class="pagation">
        <a href="javascript:;" class="btn btn-link">上一页</a>
        <span class="btn">1</span>
        <a href="javascript:;" class="btn btn-link">2</a>
        <a href="javascript:;" class="btn btn-link">3</a>
        <a href="javascript:;" class="btn btn-link">4</a>
        <span class="btn">...</span>
        <a href="javascript:;" class="btn btn-link">20</a>
        <a href="javascript:;" class="btn btn-link">下一页</a>
      </div>
    </div>
    <del-alert></del-alert>
  </div>
</template>

<script>
  import alert from './alert';
  export default{
    data(){
      return{

      }
    },
    components: {
      'del-alert': alert
    }
  }
</script>

<style scoped>
  .container{
    position: relative;
  }
  .cwrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  .article-list{
    list-style: none;
  }
  .article-list li{
    position: relative;
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px #999;
  }
  .article-list li h1{
    font-size: 24px
  }
  .article-list .opt{
    border-top: 1px solid #d2d2d2;
    padding: 10px 0 0;
  }
  .pagation{
    text-align: center;
  }
</style>