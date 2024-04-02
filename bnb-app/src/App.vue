<template>
    <v-app >
          <v-navigation-drawer color="blue-lighten-3" dark flat v-model="drawer" app>
            <v-list class="text-left">
              <v-list-item link to="/home">
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-scale</v-icon> BALANCE</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-chevron-up</v-icon> INCOMES</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/expenses">
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-chevron-down</v-icon> EXPENSES</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link  to="/check">
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-check</v-icon> CHECK</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
                <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-bell</v-icon> NOTIFICATION</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-account</v-icon> PROFILE</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-wrench</v-icon> SETTINGS</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title><v-icon>mdi-help</v-icon> HELP</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-app-bar  color="blue-lighten-3" dark flat app>
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn icon @click="toggleTheme">
              <v-icon>{{ isDarkTheme ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
            </v-btn>
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
        drawer: false,
        isDarkTheme: false
      };
    },
    mounted() {
      this.toggleTheme()
    },
    methods: {
      toggleTheme() {
        this.theme.global.name = this.theme.global.current.dark ? 'light' : 'dark'
        this.isDarkTheme = !this.isDarkTheme
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
