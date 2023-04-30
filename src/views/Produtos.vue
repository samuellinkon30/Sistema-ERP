<template>
    <div class="produtos">
        <h1>Painel</h1>
        <div class="itens">
         Lista de Produtos
        </div>
    </div>
</template>

<script>
export default({
    name: "Produtos",
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        let urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
    },
});
</script>