<template>
  <v-app>
    <v-container 
      fluid
      fill-height 
      >
      <v-layout justify-center>
        <v-flex sm10 md6>
          <v-card>
            <v-img
              src="static/hello.png"
              aspect-ratio="3"
              ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Why Vuetify?</h3>
                <div>
                  {{ card_text }}
                  <a :href="detail_url">see more detail</a>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="open(repository_url)">GitHub</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      repository_url: 'https://github.com/vuetifyjs/vuetify',
      detail_url: 'https://vuetifyjs.com/en/getting-started/why-vuetify',
      card_text: `
        Choosing a framework can be a daunting task, 
        and I'm not even talking about component frameworks. 
        You've arrived at Vue and now it's time to start
        developing your next great idea. There are many
        options to choose from, and everyone says that they
        are great. So you have to decide, what are my metrics
        for success?
        `,
    }
  },
  methods:{
    open(url){
      window.open(url);
    }
  },
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons";
@import "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css";
.container {
  color: green;
}
</style>

