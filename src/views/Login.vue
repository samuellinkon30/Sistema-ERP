<template>
    <div class="login">
        <form action=""  @submit.prevent="LoginRequest">
        <input type="text" v-model="user">
        <input type="paswword" v-model="password">
        <input type="submit">
        </form>
        <button v-on:click="setPageRedirect">MUDAR</button>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default({
    name: "Login",
    data(){
        return{
            user:"",
            password:"",
            token:""
        }
    },
    methods:{
        setLocalStorage(tokenR){
            this.token =  tokenR;
            localStorage.setItem('token', this.token);
        },
        setPageRedirect(){
            router.push({ name: 'home' }) // -> /user/eduardo
        },
        LoginRequest(){
            const data = {
                nome: this.user,
                senha: this.password
            };
            axios.post('https://erp-mlovi.herokuapp.com/auth/usuarios/login',data).then((response) =>{
                   console.log(response.data.token);
                   this.setLocalStorage(response.data.token);
                   router.push({ name: 'home' }) // -> /user/eduardo
            }).catch((err)=>{});
    }
    },
    mounted(){
        if(localStorage.getItem('token')!=null){
         this.token = localStorage.getItem('token')
        }
    }
});
</script>