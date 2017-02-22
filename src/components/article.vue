<template>
  <div class="cwrap">
    <div class="container">
      <div class="optbar">
        <a href="javascript:;" @click="newArticle" class="btn btn-default">新增文章</a>
      </div>
      <ul class="article-list">
        <li>
          <h1>文章标题</h1>
          <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
          <div class="opt">
            <a href="javascript:;" class="btn btn-info">编辑</a>
            <a href="javascript:;" class="btn btn-danger">删除</a>
            <router-link to="/editArticle/0">文章管理</router-link>
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
      <pagation @pagaClick="pagaChange" :pagaConf="pagaConfig"></pagation>
    </div>
    <del-alert></del-alert>
  </div>
</template>

<script>
  import alert from './alert';
  import pagation from './pagation';
  export default{
    data(){
      return{
        pagaConfig:{
          current: 1,
          total: 20,
          showNumber: 5,
          prevShow: false,
          nextShow: true,
          ellipsisShow: true
        }
      }
    },
    components: {
      'del-alert': alert,
      'pagation': pagation
    },
    methods:{
      pagaChange(cur){
        console.log('当前页码：'+ cur);
      },
      newArticle(){
        this.$http.jsonp('http://localhost/blog/new.php', {credentials: true}).then(res=>{
          res = res.body;
          if(res.status === 1){
            this.$router.push('/editArticle/new');
          }else{
            this.$router.push('/login');
          }
        });
      }
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
  .article-list{
    list-style: none;
    padding: 0;
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
  .optbar{
    margin: 20px 0;
  }
</style>