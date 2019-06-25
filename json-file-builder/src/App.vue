<template>
    <v-app>
        <v-container
                fluid
                fill-height
        >
            <v-layout justify-center>
                <v-flex sm10>
                    <v-card>
                        <v-card-title primary-title>
                            <h1>
                                Json File Builder
                            </h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                    row
                                    v-model="input.name"
                                    label="Name"
                            ></v-text-field>
                            <v-text-field
                                    row
                                    v-model.number="input.age"
                                    label="Age"
                            ></v-text-field>
                            <v-text-field
                                    row
                                    v-model="input.address"
                                    label="Address"
                            ></v-text-field>
                            <pre class="preview"
                            >{{ JSON.stringify(input, null, '  ') }}</pre>
                            <v-text-field
                                    row
                                    v-model="filename"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="primary"
                                    @click="download"
                            >
                                DOWN LOAD
                            </v-btn>
                        </v-card-actions>
                    </v-card>
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
          name: '',
          age: 0,
          address: ''
        },
        filename: 'data.json'
      };
    },
    methods: {
      download() {
        const
          blob = new Blob(
            [JSON.stringify(this.input, null, '  ')],
            { type: 'application/json' }),
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
    @import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons";
    @import "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css";

    .preview {
        background: whitesmoke;
        color: darkslategrey;
        padding: 30px;
    }
</style>

