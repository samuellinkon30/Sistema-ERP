<template>
    <div class="Cupom">
        <button v-on:click="requestPdf">GERAR</button>
        {{ response }}
        <h1 v-show="invalido">PDF INVALIDO</h1>
    </div>
</template>

<script>
import router from '../router';
import api from '../utils/api'
import axios from 'axios';


export default({
    name: "Fiscal",
    data(){
        return{
            response:null,
            invalido:null,
        }
    },
    methods:{
        requestPdf() {
            axios.request({
            url: 'https://erp-mlovi.herokuapp.com/naofiscal/22',
            method: 'GET',
            responseType: 'blob',
        })
        .then(
        this.invalido = response => response.status   
        )
        .then(
            response => response.data    
        )
        .then(blob => {
            const data = URL.createObjectURL(blob)
            var link = document.createElement('a')
            link.href = data
            link.target = '_blank'
            link.click()
            window.URL.revokeObjectURL(blob)
        })
            .catch((error) => {
            console.log(error)
        })
}
        
    },
    // mounted(){
    //     if(localStorage.getItem('token')!=null){
    //      this.token = localStorage.getItem('token')
    //     }
    // }
});
</script>