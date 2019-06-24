<template>
  <div class="container">
    <ul>
      <li 
        v-for="n in 3" 
        :key="n"
        >
        {{ n }}: Hello, {{ bundler }} !!
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bundler: "Parcel"
    };
  }
};
</script>

<style scoped>
.container {
  color: green;
}
</style>
