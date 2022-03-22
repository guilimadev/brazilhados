<template>
  <div class="mx-10 mt-2" >
      <v-card elevation="9">
        <v-card-title class="justify-center">Welcome to Brazilhados</v-card-title>
        <v-card-text class="text-center">Noticias e opiniões sobre esporte de (quase) todo o mundo</v-card-text>
    
      </v-card>
      <v-card
        v-for="(news, index) in news.articles"
        :key="index"
        elevation="8"
        class="mt-10 " 
      >
      <v-card-title class="news">
        {{news.title}}
      </v-card-title>
      <v-card-subtitle
        v-if="news.author == ''"
      >
        {{news.source.name}}
      </v-card-subtitle>
      <v-card-subtitle
        v-if="news.author == null"
      >
        {{news.source.name}}
      </v-card-subtitle>
      <v-card-subtitle
        v-else
      >
        {{news.author}}
      </v-card-subtitle>

      <v-img
          :src=news.urlToImage
        >
        </v-img>

      <v-card-actions>
      <v-btn
        color="purple lighten-2"
        text
        :href="'' + news.url" target="_blank"
      >
        VER MATÉRIA
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show[index].show = !show[index].show"
      >
        <v-icon>{{ show[index].show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show[index].show">
        
        <v-divider></v-divider>

        <v-card-text>
          {{news.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
      </v-card>
  </div>
</template>

<script>


export default {
  name: 'MainView',
  data() {
    return {
      news: [],
      show: [
          {id:1, show: false},
          {id:2,show: false},
          {id:3,show: false},
          {id:4,show: false},
          {id:5,show: false},
          {id:6,show: false},
          {id:7,show: false},
          {id:8,show: false},
          {id:9,show: false},
          {id:10,show: false},
          {id:11,show: false},
          {id:12,show: false},
          {id:13,show: false},
          {id:14,show: false},
          {id:15,show: false},
          {id:16,show: false},
          {id:17,show: false},
          {id:18,show: false},
          {id:19,show: false},
          {id:20,show: false}
      ],
    }
  },
  methods: {
    
   
  },
  created() {
    fetch('https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=720a4627779e47b19c6ea9e8672798d8')
      .then(res => res.json())
      .then(res =>{
        this.news = res
        console.log(this.news)
      })
      
  }
}


</script>

<style scoped>
  .news{
    word-break: keep-all;
  }
</style>
