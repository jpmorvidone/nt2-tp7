<template>

  <section class="src-components-tablero">
  <div id="container" v-for="color in this.$store.state.colors" :key="color.id">
    <Square :color = color />
  </div>
  </section>

</template>

<script lang="js">

import Square from './Square.vue'

  export default  {
    name: 'src-components-tablero',
    components: {
       Square
    },
    props: {
    },
    mounted () {
      this.init()
    },
    data () {
      return {
        isHard : true
      }
    },
    methods: {
      restart : function() {
        this.$store.state.colors = this.createNewColors();
        this.$store.state.pickedColor = this.$store.state.colors[this.pickColor()];
        this.$store.state.botonReset = "New colors!"
        this.$store.state.winnerColor = 'steelblue'
        this.$store.state.message = ''
      },
      createNewColors : function() {
        let arr = [];
        for (var i = 0; i < this.$store.state.quantity ; i++) {
          arr.push(this.createRandomStringColor());
        }
        return arr;
      },
      createRandomStringColor : function() {
        let newColor = `rgb(${this.randomInt()},${this.randomInt()},${this.randomInt()})`;
        return newColor;
      },
      randomInt : function() {
        return Math.floor(Math.random() * 256);
      },
      pickColor : function() {
        return Math.floor(Math.random() * this.$store.state.quantity  );
      },
      init : function() {
        return this.restart()
      },
      setLevel : function setLevel(level) {
        this.isHard = level

        if (this.isHard) {
          this.$store.state.quantity = 6;
        } else {
          this.$store.state.quantity = 3;
        }

        this.restart()
      }
      },
    computed: {
    
    },
  }

</script>

<style scoped lang="css">
  .src-components-tablero {

  }

  #container {
    margin: 20px auto;
    max-width: 600px;
}
</style>
