<template>
    <div class="dahsboard">
        <h1>Dashboard</h1>
        <div class="itens">
                <RouterLink to="/produtos">Produtos</RouterLink> | 
                <RouterLink to="/clientes">Clientes</RouterLink>
            
        </div>
    </div>
</template>

<script>
export default({
    name: "Dahsboard",
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