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
import api from '../utils/api'

export default({
    name: "Login",
    data(){
        return{
            user:"",
            password:"",
            token:"",
            status:null,
            response:null,
        }
    },
    methods:{
        setLocalStorage(tokenR){
            this.token =  tokenR;
            localStorage.setItem('token', this.token);
        },
        async LoginRequest(){
            const data = {
                nome: this.user,
                senha: this.password
            };
            try{
                let response = await api.post('/auth/usuarios/login',data);
                this.response = response;
            } catch(err){
                console.log(err)
            }
            console.log("Responde: ", this.response);
            if( this.response.status == 201){

                router.push({ name: 'dashboard' });
                this.setLocalStorage(this.response.data.token);
            }
        }
    },
    mounted(){
        if(localStorage.getItem('token')!=null){
         this.token = localStorage.getItem('token')
        }
    }
});
</script>