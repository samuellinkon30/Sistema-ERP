import { createStore } from 'vuex';
import Vue from 'vue';
import Vuex from 'vuex';
import api from '../utils/api.js';


export default createStore({
  state: {
    token: null,
    response: null,
  },
  getters: {
    getResponse(state){
      return state.response;
    },
  },
  mutations: {
    SET_TOKEN(state,payload){
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    SET_RESPONSE(state,payload){
      state.response = payload;
    }
  },
  actions: {

  },
  modules: {
  }
})
