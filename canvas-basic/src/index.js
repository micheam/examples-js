import Vue from 'vue';

const vm = new Vue({
  el: "#app",
  data:{
    title: 'Vuejs and canvas',
    contanerStyle:{
      marginTop: '10px',
      border: '1px solid',
    },
    canvas: {},
    context: {},
    rect: {
      width: 400,
      height: 200,
      color: '#3f43ff',
    },
  },
  methods: {
    draw: function(){
      const rect = this.rect;
      this.context.fillStyle = rect.color;
      this.context.fillRect(50,50,rect.width,rect.height);
    },
    clear: function(){
      const w = this.canvas.width, h = this.canvas.height;
      this.context.clearRect(0,0,w,h);
    }
  },
  mounted: function(){
    const container = this.$refs.container;
    
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = window.innerWidth - 30;
    canvas.height = 400;
    container.appendChild(canvas);
    this.canvas = canvas;
    
    this.context = canvas.getContext('2d');
  }
});
