<template>
  <div id="index">
    <div class="main">
      <aside>
        <div class="nav-title">后台管理系统</div>
        <ul class="nav nav-pills nav-stacked" role="tablist">
          <router-link to="/article" active-class="active" tag="li"><a href="#"><i class="glyphicon glyphicon-list-alt"></i>文章管理</a></router-link>
          <router-link to="/stat" active-class="active" tag="li"><a href="#"><i class="glyphicon glyphicon-list-alt"></i>数据统计</a></router-link>
          <router-link to="/link" active-class="active" tag="li"><a href="#"><i class="glyphicon glyphicon-list-alt"></i>友情链接</a></router-link>
        </ul>
      </aside>
      <div class="content">
        <header class="cheader">
          <a href="javascript:;"><img src="../images/head.png" class="head img-circle" alt="">虐猫狂人薛定谔</a>
          <a href="javascript:;"><i class="glyphicon glyphicon-off"></i>退出</a>
        </header>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from 'cookie_js';
export default{
  data(){
    return{

    }
  },
  beforeRouteEnter(to, from, next){
    if(cookie.cookie.get('login')){
      next();
    }else{
      next('/login');
    }
  }
}
</script>

<style>
  #index{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #index .main{
    display: flex;
    flex: 1;
  }
  #index aside{
    flex: 3;
    background: #1d1e22;
  }
  #index .content{
    height: 100%;
    flex: 9;
    background: #e7e7e7;
    display: flex;
    flex-direction: column;
  }
  #index .content .cheader{
    position: relative;
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 5px #999;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
  }
  #index .content .cheader a{
    color: #333;
    margin-right: 20px;
  }
  #index .content .cheader img{
    margin-right: 5px;
  }
  #index .content .cheader a:hover, #index .content .cheader a:focus{
    text-decoration: none;
  }
  #index .content .cheader i{
    margin-right: 5px;
  }
  #index .nav-title{
    margin: 10px 0;
    padding: 12px 20px;
    font-size: 14px;
    color: #babcc4;
  }
  #index .head{
    width: 40px;
  }

  .nav-pills>li>a{
    border-radius: 0;
    background: #1d1e22;
    color: #babcc4;
  }
  .nav-pills>li.active>a{
    background: #2f3241;
    color: #babcc4;
  }
  .nav>li>a:focus, .nav>li>a:hover{
    background: #2f3241;
  }
  .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    background: #2f3241;
    color: #babcc4;
  }
  .nav-pills i.glyphicon{
    margin-right: 8px;
  }
  #index .content>.container{
    width: 100%;
    flex: 1;
    overflow: hidden;
    padding: 0;
  }
</style>