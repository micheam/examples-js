<template>
  <v-app>
    <v-container fluid fill-height grid-list-md>
      <v-layout justify-center>
        <v-flex sm12>
          <v-card-title primary-title>
            <h1 class="headline mb-0">JSON Builder</h1>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md8>
                <v-card light color="white">
                  <v-card-title>Form</v-card-title>
                  <v-card-text>
                    <v-text-field label="First Name" v-model="input.firstname"></v-text-field>
                    <v-text-field label="Last Name" v-model="input.lastname"></v-text-field>
                    <v-text-field label="Age" v-model="input.age"></v-text-field>
                    <v-text-field label="Address" v-model="input.address"></v-text-field>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card dark color="secondary" height="100%">
                  <v-card-title>Preview</v-card-title>
                  <v-card-text>
                    <pre>{{ JSON.stringify(input, null, '  ') }}</pre>
                  </v-card-text>
                  <v-card-actions>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-text-field label="File Name" v-model="filename" class="mr-3"></v-text-field>
            <v-btn color="primary" @click="download">DOWNLOAD</v-btn>
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
        firstname: '',
        lastname: '',
        age: 0,
        address: ''
      },
      filename: 'data.json'
    };
  },
  methods: {
    download() {
      const blob = new Blob([JSON.stringify(this.input, null, '  ')], {
          type: 'application/json'
        }),
        url = URL.createObjectURL(blob),
        link = document.createElement('a');

      link.href = url;
      link.download = this.filename;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons';
@import 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css';

.preview {
  background: whitesmoke;
  color: darkslategrey;
  padding: 30px;
}
</style>

