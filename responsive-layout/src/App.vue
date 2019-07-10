<template>
  <v-app>
    <v-container fluid fill-height grid-list-md>
      <v-layout justify-center>
        <v-flex sm12>
          <v-card-title primary-title>
            <h1 class="headline mb-0">Responsive layout with Vuetify</h1>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md8>
                <v-card light color="white">
                  <v-card-title>Form</v-card-title>
                  <v-card-text>
                    <v-text-field label="Field 1" v-model="input.value1"></v-text-field>
                    <v-text-field label="Field 2" v-model="input.value2"></v-text-field>
                    <v-text-field label="Field 3" v-model="input.value3"></v-text-field>
                    <v-text-field label="Field 4" v-model="input.value4"></v-text-field>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card dark color="secondary" height="100%">
                  <v-card-title>Preview</v-card-title>
                  <v-card-text>
                    <pre>{{ JSON.stringify(input, null, '  ') }}</pre>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="action">ACTION</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        input: {
          value1: '',
          value2: '',
          value3: '',
          value4: ''
        }
      };
    },
    methods: {
      action() {
        alert('Hi.');
      }
    }
  };
</script>

<style scoped>
  @import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons";
  @import "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css";
</style>

