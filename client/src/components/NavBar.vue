<template>
  <!--导航 -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">米修在线</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mobile-nav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/profiles"> 开发者 </router-link>
            </li>
          </ul>



          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-show="isLogin">
              <router-link class="nav-link" to="/feed">
                留言
              </router-link>
            </li>
            <li class="nav-item" v-show="isLogin">
              <router-link class="nav-link" to="/Dashboard">
                Dashboard
              </router-link>
            </li>
            <li class="nav-item" v-show="!isLogin">
              <router-link class="nav-link" to="/Register">
                注册
              </router-link>
            </li>
            <li class="nav-item"v-show="!isLogin">
              <router-link class="nav-link" to="/Login">
                登录
              </router-link>
            </li>
            <li class="nav-item" v-show="isLogin" v-if="user !== null">
              <a @click.prevent="logout" class="nav-link" to="/Login">
              <img class="rounded-circle headerImage" :src="user.avatar" :alt="user.name" title="需要注册全球公认头像, 才可以拥有头像" />
                退出
              </a>
            </li>

            <!-- <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  class="rounded-circle"
                  style="width: 25px;margin-right:5px"
                  src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                  alt=""
                  title="需要注册全球公认头像, 才可以拥有头像"
                />
                退出
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>


export default {
  name: 'NavBar',
  data() {
  	return {};
  },
  computed:{
    isLogin() {
      if (this.$store.getters.isAuthenticated) {
        return true;
      }
      else{
        return false;
      }
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods:{
    logout() {
      //删除ls
      localStorage.removeItem('jwtToken');
      //干掉请求头
      // this.$store.dispatch('setIsAuthenticated',false);
      // this.$store.dispatch('setUser',{});
      this.$store.dispatch('clearCurrentState');


      //跳转登录
      this.$router.push('/login');
    }
  }
  
}
</script>

<style scoped>
  .headerImage{
    width:25px;
    margin-right:5px;
  }
</style>
