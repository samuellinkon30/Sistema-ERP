<template>
    <div class="produtos">
        <h1>Painel</h1>
        <div class="itens">
         Lista de Produtos
            <table>
            <tr>
                <th>Id</th>
                <th>Cod</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Ação</th>
            </tr>
            <tr v-for="(produto,index) in produtos ">
                <td>{{ produto.id }}</td>
                <td>{{ produto.codigo }}</td>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.descricao }}</td>
                <td>R$ {{ produto.preco_compra }}</td>
                <td>Editar</td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
import api from '../utils/api';

export default({
    name: "Produtos",
    data(){
        return{
            produtos: null,
        }
    },
    methods:{
        async loadProducts(){
            try{
                const response = await api.get('/produtos');
                this.produtos = response.data;
                console.log(this.produtos);
            } catch(err){
                console.log(err)
            }
        }
    },
    created(){
        this.loadProducts();
    },
});

</script>

<style>

</style>