<template>
  <div id="dashboard">
    <h2>Minha Conta</h2>
    <span>Atualize seu perfil</span>
    <form>
      <label>Nome:</label>
      <input type="text" v-model="nome" id="name" />
      <button class="button" type="submit">Atualizar Perfil</button>
    </form>
    <button class="button logout" @click="logOut">Sair</button>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection";

export default {
  name: "Dashboard",
  data() {
    return {
      nome: "",
    };
  },
  methods: {
    async logOut() {
      const confirm = window.confirm("Você realmente deseja sair?");

      if (confirm) {
        await firebase
          .auth()
          .signOut()
          .then(async () => {
            await localStorage.removeItem("devpost");
            this.$router.push("/login");
          });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
#dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 15px 20px;
  widows: 600px;
  max-width: 600px;
  background: #4c5059;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #fff;
}

span {
  color: #fff;
  margin-bottom: 25px;
}

form {
  width: 500px;
  display: flex;
  flex-direction: column;
}

form label {
  font-size: 18px;
  color: #fff;
  padding-bottom: 5px;
}

form input {
  height: 30px;
  padding: 5px;
  font-size: 17px;
  border: 0;
  outline: none;
  margin-bottom: 5px;
  background: #fafafa;
}

button {
  cursor: pointer;
  margin-top: 10px;
  height: 35px;
  border: 0;
  background: #7289da;
  color: #fff;
  font-size: 17px;
}

button.logout {
  width: 500px;
  background: #e36d6d;
  color: #fff;
}
</style>