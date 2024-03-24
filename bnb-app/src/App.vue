<template>
    <v-app >
          <v-navigation-drawer color="primary" dark flat v-model="drawer" app>
            <v-list>
              <v-list-item link to="/home">
                <v-list-item-content>
                  <v-list-item-title>BALANCE</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>INCOMES</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/expenses">
                <v-list-item-content>
                  <v-list-item-title>EXPENSES</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link  to="/check">
                <v-list-item-content>
                  <v-list-item-title>CHECK</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>NOTIFICATION</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>PROFILE</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>SETTINGS</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>HELP</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-app-bar  color="primary" dark flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon @click="toggleTheme"></v-app-bar-nav-icon>
          </v-app-bar>
        <v-main>
          <router-view/>
        </v-main>
      </v-app>
</template>

<script>
import { useTheme }   from 'vuetify'
export default {
    data() {
      return {
        theme: useTheme(), 
        drawer: true,
      };
    },
    methods: {
      toggleTheme() {
        this.theme.global.name = this.theme.global.current.dark ? 'light' : 'dark'
      },
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
