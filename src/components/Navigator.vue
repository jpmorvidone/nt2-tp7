<template>

  <section class="src-components-navbar">
    <div id="navigator">
      <button @click="reset()">{{ this.$store.state.botonReset }}</button>
      <span id="message"> {{this.$store.state.message}}</span>

      <button @click="clickLevel(false)">easy</button>
      <button @click="clickLevel(true)">hard</button>
    </div>
    <Tablero  ref="childRef" />
  </section>

</template>

<script lang="js">

import Tablero from './Tablero.vue'

  export default  {
    name: 'src-components-navbar',
    components: {
       Tablero
    },
    props: [],
    mounted () {
      
    },
    data () {
      return {
        isHard : true
      }
    },
    methods: {
      reset : function() {
         this.$refs.childRef.setLevel(this.isHard);
         this.$store.state.botonReset = "New colors!"
      },
      clickLevel : function(level) {
        this.isHard = level
        this.$refs.childRef.setLevel(level);
        // this.message = ''
      },
    },
    computed: {
    
      }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }

  #navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }

  #message {
    color: #0f0808;
    display: inline-block;
    width: 20%;
  }

  #messageBox {
    
  }
  .selected {
    background-color: steelblue;
    color: white;
  }

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

</style>
