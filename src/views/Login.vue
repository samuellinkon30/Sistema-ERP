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
        setPageRedirect(){
            router.push({ name: 'home' }) // -> /user/eduardo
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
            console.log(this.response.data);
            
            // api.post('/auth/usuarios/login',data).then((response)=>{
            // }).catch((err)=>{});

            // axios.post('https://erp-mlovi.herokuapp.com/auth/usuarios/login',data).then((response) =>{
            //        console.log(response);
            //        console.log(response.status);
            //        this.stauts = response.status;
            // }).catch((err)=>{});

        

            // console.log(this.status);

            // if( this.status == 201){
            //     this.setLocalStorage(response.data.token);
            //     router.push({ name: 'dashboard' }) // -> /user/eduardo
            // } else{
            //     alert("Acessos Invalidos");
            // }
    }
    },
    mounted(){
        if(localStorage.getItem('token')!=null){
         this.token = localStorage.getItem('token')
        }
    }
});
</script>