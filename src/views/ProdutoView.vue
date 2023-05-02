<template>
    <div class="produtos" v-for="(item, index) in produto">
        <p>Id: {{ produto[0].id }}</p>
        <p>Nome: {{ produto[0].nome }}</p>
        <p>Descrição: {{ produto[0].descricao }}</p>
        <p>Preço: R${{ produto[0].preco_compra }}</p>
    </div>
</template>

<script>
import api from '../utils/api';
import router from '../router';

export default({
    name: "ProdutoView",
    data(){
        return{
            nome:"Produto",
            id:null,
            produto: {},
            response_status: null,
        }
    },
    methods:{
        async loadProduct(id){
            try{
                const response = await api.get('/produtos/' + id);
                console.log(response);
                this.produto = Object.assign({}, response.data)
                this.response_status = response.status;
                console.log(this.produto[0].id);
            } catch(err){
                console.log(err)
            }
        },   
    },
    created() {
    let uri = window.location.href.split('?');
    this.id = uri[1];
    this.loadProduct(this.id);
  },
});

</script>

<style scoped>
.link_product {
    cursor: pointer;
}
.produtos {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}
.produtos p {
    border: 1px solid;
}
</style>