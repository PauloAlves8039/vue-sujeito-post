<template>
  <div id="login">
    <div class="loginArea" v-if="login">
      <h1>Entrar</h1>
      <form>
        <input type="text" placeholder="email@email.com" v-model="email" />
        <input type="password" placeholder="Sua senha..." v-model="password" />
        <button type="submit">Acessar</button>
      </form>
      <a @click="toggleBtn">Criar uma conta</a>
    </div>

    <div class="loginArea" v-else>
      <h1>Cadastrar</h1>
      <form>
        <input type="text" placeholder="Nome" v-model="nome">
        <input type="text" placeholder="email@email.com" v-model="email" />
        <input type="password" placeholder="Sua senha..." v-model="password" />
        <button type="submit">Cadastrar</button>
      </form>
      <a @click="toggleBtn">Já possuo uma conta</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      nome: "",
      email: "",
      password: "",
      login: true,
    }
  },
  methods:{
    toggleBtn(){
      this.login = !this.login;
      this.nome = '';
      this.email = '';
      this.password = '';
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #fff;
}

.loginArea {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 65px;
  max-width: 600px;
  background: #4C5059;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
}

input {
  margin-bottom: 10px;
  height: 30px;
  width: 300px;
  font-size: 18px;
  padding: 10px;
  outline: none;
  border: 0;
  background: rgb(241, 241, 241);
}

button {
  height: 35px;
  border: 0;
  background-color: #7289DA;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

.loginArea a {
  margin-top: 20px;
  text-decoration: none;
  color: #FFF;
  cursor: pointer;
}
</style>
