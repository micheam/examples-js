<template>
  <div>
    <div v-bind:style="rectangleInfoPane"></div>
    <div ref="container" class="fullfilled"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rectangleInfoPane: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 100,
      },
      canvasPane: {
        position: 'absolute',
        left: 0,
        top: 100,
        right: 0,
        bottom: 0,
      }
    };
  },
  mounted() {
    const container = this.$refs.container;
    console.log(container.clientWidth);

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
  }
};
</script>

<style scope>
.fullfilled {
  position: absolute;
  left: 0;
  top: 100px;
  right: 0;
  bottom: 0;
}
</style>
