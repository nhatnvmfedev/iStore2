<template>
  <div class="registration">
    <div class="row justify-content-center">
      <div class="col-4">
        <form>
          <div class="form-group">
            <label for="Username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username" v-model="users.username"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="users.password"/>
          </div>
          <div class="col-6 mx-auto mt-4"><button @click="handleLogin" type="submit" class="btn btn-lg btn-info btn-block">Login</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      users: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin (e) {
      e.preventDefault()
      axios.post('https://614959d5035b3600175ba256.mockapi.io/users/', this.users)
        .then((response) => { console.log(response) }
        )
    }
  }
}
</script>

<style></style>
