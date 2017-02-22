<template>
  <div id="login">
    <div class="panel panel-default">
      <div class="panel-heading">登录</div>
      <div class="panel-body">
        <form role="form" @keyup.enter="login">
          <div class="form-group">
            <label for="name">用户名：</label>
            <input type="text" class="form-control" id="name" @input="clearTips" v-model.trim="name" placeholder="请输入用户名">
          </div>
          <div class="form-group">
            <label for="pwd">密　码：</label>
            <input type="password" class="form-control" id="pwd" @input="clearTips" v-model.trim="pwd" placeholder="请输入密码">
          </div>
          <p class="text-danger">{{ tips }}</p>
          <button type="button" @click="login" class="btn btn-block btn-success">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import cookie from 'cookie_js';
  export default{
    data(){
      return {
        name: '',
        pwd: '',
        tips: ''
      }
    },
    methods: {
      login(){
        if(this.name.length === 0 || this.pwd.length === 0){
          this.tips = '用户名或密码不能为空';
        }
        this.$http.jsonp('http://localhost/blog/login.php', {
          params: {
            name: this.name,
            pwd: this.pwd
          }
        }).then(res => {
          res = res.body;
          if(res.status == 1){
            console.log('登录成功');
            this.$router.push('/index');
          }else{
            this.tips = res.msg;
          }
        });
      },
      clearTips(){
        this.tips = '';
      }
    },
    mounted(){
      this.$http.jsonp('http://localhost/blog/islogin.php',{credentials: true}).then(res=>{
        res = res.body;
        if(res.status === 1){
          this.$router.push('/index');
        }
      });
    }
  }
</script>

<style>
  #login{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../images/login-bg.jpg) no-repeat center center;
    background-size: cover;
  }
  #login .panel-default{
    width: 600px;
    border-radius: 0;
    background-color: rgba(255,255,255,.8);
  }
  #login .panel-default>.panel-heading{
    border-radius: 0;
    background-color: rgba(245,245,245,.8);
  }
  #login .panel-default>.panel-body{
    padding: 20px 50px 40px;
  }
</style>