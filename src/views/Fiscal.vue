<template>
    <div class="Cupom">
        <button v-on:click="requestPdf">GERAR</button>
        {{ response }}
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
        }
    },
    methods:{
        requestPdf() {
            axios.request({
            url: 'https://erp-mlovi.herokuapp.com/naofiscal/2',
            method: 'POST',
            responseType: 'blob',
        })
        .then(response => response.data)
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