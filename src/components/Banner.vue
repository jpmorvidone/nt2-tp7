<template>

  <section class="src-components-banner">
    <div id="header" :style="{'background-color': this.$store.state.winnerColor}"> 
      <h1>The Great <br>
        <span id="colorDisplay">{{  this.$store.state.pickedColor }}</span>
        <br>
        Guessing Game</h1>
    </div>
    <Navigator />
  </section>

</template>

<script lang="js">

import Navigator from './Navigator.vue'

  export default  {
    name: 'src-components-banner',
    components: {
       Navigator
    },
    props: [],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      setPickedColor : function(c) {
        this.$store.state.pickedColor = c;
        this.$store.state.winnerColor = 'steelblue'
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-banner {

  }

#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}

#colorDisplay {
	font-size: 200%;
}
</style>
