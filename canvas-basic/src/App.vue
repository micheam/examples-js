<template>
  <section>
    <h1>{{ title }}</h1>
    <input id="left" type="digit" size="20" v-model="rect.left">
    <label for="left">:left</label>
    <br>
    <input id="top" type="digit" size="20" v-model="rect.top">
    <label for="top">:top</label>
    <br>
    <input id="width" type="digit" size="20" v-model="rect.width">
    <label for="width">:width</label>
    <br>
    <input id="height" type="digit" size="20" v-model="rect.height">
    <label for="height">:height</label>
    <br>
    <input id="color" type="color" v-model="rect.color">
    <label for="height">:bg-color</label>

    <p>
      <button v-on:click="draw">draw</button>
      <button v-on:click="clear">clear</button>
    </p>
    <div ref="container" v-bind:style="contanerStyle"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Vuejs and canvas",
      contanerStyle: {
        marginTop: "10px",
        border: "1px solid"
      },
      canvas: {},
      context: {},
      rect: {
        left: 0,
        top: 0,
        width: 400,
        height: 200,
        color: "#3f43ff"
      }
    };
  },
  methods: {
    draw: function() {
      const rect = this.rect;
      this.context.fillStyle = rect.color;
      this.context.fillRect(rect.left, rect.top, rect.width, rect.height);
    },
    clear: function() {
      const w = this.canvas.width,
        h = this.canvas.height;
      this.context.clearRect(0, 0, w, h);
    }
  },
  mounted: function() {
    const container = this.$refs.container;

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = window.innerWidth - 30;
    canvas.height = 400;
    container.appendChild(canvas);
    this.canvas = canvas;

    this.context = canvas.getContext("2d");
  }
};
</script>