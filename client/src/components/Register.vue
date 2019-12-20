<template>
    <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Sign Up</h1>
          <p class="lead text-center">Create your DevConnector account</p>
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <!-- prevent:阻止默认事件  autocomplete="off":不会记录之前所写的内容-->
              <TextField
                type="text"
                placeholder="name"
                name="name"
                v-model="newUser.name"
                :error="errors.name"
              />
              <TextField
                type="email"
                placeholder="email"
                name="email"
                v-model="newUser.email"
                :error="errors.email"
                info='我们使用了gravatar全球公认头像，如果需要有头像显示，请使用gravator注册的邮箱'
              />
              <TextField
                type="password"
                placeholder="password"
                name="password"
                v-model="newUser.password"
                :error="errors.password"
              />
              <TextField
                type="password"
                placeholder="Confirm password"
                name="password"
                v-model="newUser.password2"
                :error="errors.password2"
              />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TextField from './common/TextFieldGroup';
export default {
  name: 'Register',
  data() {
  	return {
  		newUser:{
  			name:"",
  			email:"",
  			password:"",
  			password2:""
  		},
  		errors:{}
  	};
  },
  components: {
    TextField
  },
  methods:{
  	submit() {
  		//console.log(this.newUser.name);
      //console.log(this.$store.getters.isAuthenticated);
  		this.$axios
  		.post('/api/users/register',this.newUser)
  		.then(res => {
  			//console.log(res.data);

        //执行mutation操作
        //this.$store.commit("setUser",res.data);

        //执行actions操作   异步
        this.$store.dispatch("setUser",res.data);
        this.errors = {};

        //页面跳转
        this.$router.push('./Login');
  		})
  		.catch(err => {
        if (err.response.data) {
          this.errors = err.response.data;
           //console.log(this.errors);
        }
  			
  			
  		});
  	}
  }
  
}
</script>

<style scoped>

</style>
