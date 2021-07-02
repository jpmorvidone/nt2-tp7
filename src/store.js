import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        squareClicked : '',
        winnerColor : '',
        pickedColor : '',
        colors : [],
        message : '',
        quantity : 6,
        botonReset : 'New colors!'
    },
    actions: {

    },
    mutations: {

    }
})