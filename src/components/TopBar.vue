<template>
    <v-container >
        <v-app-bar
      color="blue"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Brazilhados</v-toolbar-title>
      <v-spacer></v-spacer>
      <div >
        <v-menu
              bottom
              left
              offset-y
              
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
                
                
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <router-link :to=item.route>
                  <v-list-item-title >{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    > 
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="blue darken-4--text text--accent-4"
        >
        <router-link class="link" to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Home</v-list-item-title>
          </v-list-item>     
        </router-link>        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    name: 'TopBar',
    data: () => ({
      drawer: false,
      group: null,
      items: [
        { title: 'Brazil', route: '/' },
        { title: 'USA', route: '/usa' },        
      ],
    })    
}
</script>

<style scoped>
  .link {
    text-decoration: none;
  }
</style>