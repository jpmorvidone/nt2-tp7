<template>

  <section class="src-components-square">
    <div class="square" v-bind:style="{ background: color }" @click="clickSquare(color)" />
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-square',
    props: {
      color : String
    },
    mounted () {

    },
    data () {
      return {
        display : true
      }
    },
    methods: {
       clickSquare: function(color) {
        if(this.$store.state.pickedColor === color) {
          this.$store.state.message = "You Picked Right!"
          this.$store.state.colors = this.setAllColorsTo(color)
          this.$store.state.winnerColor = color
          this.$store.state.botonReset = "Play Again!"
        } else {
           this.$store.state.message = "Try Again!";
           this.color = "#232323"
         }
        },
      setAllColorsTo : function(color) {
         let arr = [];
        for (var i = 0; i < this.$store.state.quantity; i++) {
          arr.push(color);
        }
        return arr;
      }

    },

    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-square {

  }

  .square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;

}
</style>
