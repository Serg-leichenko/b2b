<template name="login">
  <div>
    <header class="block-header">
      <div class="container">
        <div class="top-nav">
          <div class="top-nav__logo">
            <router-link to="/">
              <img src="@/assets/images/logo.svg" alt="OLASTA" />
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="login">
        <h1 class="login__title">Вход в систему B2B Olasta</h1>
        <form class="login__form" @submit.prevent="signIn" novalidate>
          <p class="login__form_fild">
            <input
              type="text"
              placeholder="Логин"
              v-model.trim="phone"
              @blur="$v.email.$touch()"
              :class="{ invalid: $v.email.$error }"
            />
            <small class="invalid" v-if="!$v.email.email">
              введено некоректну адресу електронної пошти або номер
              телефону</small
            >
          </p>
          <p class="login__form_fild">
            <input
              :type="[showPassword ? 'text' : 'password']"
              placeholder="Пароль"
              v-model.trim="password"
              @blur="$v.password.$touch()"
              :class="{ invalid: $v.password.$error }"
            />
            <span @click="showPassword = !showPassword">
              <i
                class="fa"
                :class="[
                  showPassword ? 'fa-eye eye-login' : 'fa-eye-slash eye-login',
                ]"
                aria-hidden="true"
              ></i>
            </span>
            <small class="invalid" v-if="!$v.password.minLength">
              пароль повинен бути не менше
              {{ $v.password.$params.minLength.min }} символів. Зараз він
              {{ password.length }}</small
            >
          </p>
          <div class="login__form_remember">
            <input type="checkbox" id="check-remember" />
            <label class="login__form_remember_check" for="check-remember"
              >запомнить пароль
            </label>
            <p class="login__form_remember_pass">Забыли пароль?</p>
          </div>
          <div class="login__form_btn">
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { email, minLength } from "vuelidate/lib/validators";
export default {
  name: "login",
  components: {},
  data() {
    return {
      phone: "qwe@qwe.qwe",
      password: "",
      showPassword: false,
    };
  },
  validations: {
    email: { email },
    password: { minLength: minLength(3) },
  },
  computed: {},
  methods: {
    signIn() {
      if (this.phone == "" || this.password == "") {
        alert("заполните все поля!");
      } else {
        this.$load(async () => {
          const data = (
            await this.$api.auth.signIn({
              phone: this.phone,
              password: this.password,
            })
          ).data;
          localStorage.setItem("user", JSON.stringify(data));
          this.$store.dispatch("user/setUser", data);
        });
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
