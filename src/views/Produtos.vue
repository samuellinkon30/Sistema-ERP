<template>
    <div class="produtos">
        <h1>Painel</h1>
        <div class="loading" v-show="!isLoaded">
            <h1><img src="../assets/load.gif"></h1>
        </div>
        <div class="itens" v-show="isLoaded">
         Lista de Produtos
            <table>
            <tr>
                <th>Id</th>
                <th>Cod</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Gerar</th>
            </tr>
            <tr v-for="(produto,index) in produtos ">
                <td>{{ produto.id }}</td>
                <td>{{ produto.codigo }}</td>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.descricao }}</td>
                <td>R$ {{ produto.preco_compra }}</td>
                <td class="link_product" v-on:click="PageProduct( produto.id )">Editar</td>
                <td class="link_product" v-on:click="requestPdf( produto.id )">Gerar</td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
import api from '../utils/api';
import router from '../router';
import axios from 'axios';


export default({
    name: "Produtos",
    data(){
        return{
            produtos: null,
            isLoaded: false,
        }
    },
    methods:{
        async loadProducts(){
            try{
                const response = await api.get('/produtos');
                this.produtos = response.data;
                this.isLoaded = true;
            } catch(err){
                console.log(err)
            }
        },
        PageProduct(idProduct){
            console.log(idProduct);
            router.push(`/produto/?${idProduct}`);


        },
        requestPdf(id) {
            axios.request({
            url: 'https://erp-mlovi.herokuapp.com/naofiscal/'+id,
            method: 'GET',
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
    created(){
        this.loadProducts();
    },
});

</script>

<style>
.link_product {
    cursor: pointer;
}
</style>