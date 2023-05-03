<template>
    <div class="gloval_login">
    <div class="login">

        <div class="avatar">
            <img v-show="!complete" src="../assets/avatar.png">
            <img v-show="complete" style="width: 180px; left: 14.9%;" src="../assets/avatar2.png">

        </div>

        <form action=""  @submit.prevent="LoginRequest">
          
            <div class="box_input user">
                <input class="input_user" type="text" v-on:mouseup="verificaitem()" v-model="user">
                <span class="span_input_user"  v-bind:class="{ativo_user : ativo_user}" data-placeholder="Usuário"></span>
            </div>

            <div class="box_input password">
                <input class="input_password" v-on-mouseleave="complet_form()" type="text" v-on:mouseup="verificaitem2()" v-model="password">
                <span class="span_input_password"  v-bind:class="{ativo_pass : ativo_pass}" data-placeholder="Senha"></span>
            </div>
        
        <input type="submit" v-bind:class="{complete : complete}" class="submit_login" value="Login">
        </form>
    </div>
</div>
</template>

<style scoped>
.submit_login.complete{
    width: 100%;
    background-color: #57b846;
    box-shadow: 0 10px 30px 0 rgba(87,184,70,.5);
    -moz-box-shadow: 0 10px 30px 0 rgba(87,184,70,.5);
    -webkit-box-shadow: 0 10px 30px 0 rgba(87,184,70,.5);
    -o-box-shadow: 0 10px 30px 0 rgba(87,184,70,.5);
    -ms-box-shadow: 0 10px 30px 0 rgba(87,184,70,.5);
    cursor: pointer ;
}
.submit_login{
    margin: 10% auto;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    align-items: center;
    padding: 0 20px;
    width: 50%;
    height: 50px;
    background-color: gray;
    border-radius: 25px;
    box-shadow: 0 10px 30px 0 gray;
    -moz-box-shadow: 0 10px 30px 0 rgray;
    -webkit-box-shadow: 0 10px 30px 0 gray;
    -o-box-shadow: 0 10px 30px 0 gray;
    -ms-box-shadow: 0 10px 30px 0 gray;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
    outline: none;
    border: none;
    cursor:none ;
}
span.span_input_user, span.span_input_password {
    position: relative;
    left: 0;
    bottom: 0;
    display: block;
    text-align: left;
    z-index: 9;
}
.span_input_user::before{
    font-size: 18px;
    color: #999;
    line-height: 1.2;
    content: attr(data-placeholder);
    position: absolute;
    top: -20px;
    left: 0;
    padding-left: 5px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
    pointer-events: none;

}
.span_input_user.ativo_user::before{
    top: -40px;
    font-size: 15px;
    left: -5px;
    color: #57b846;
}
input.input_user:focus+.span_input_user::before{
    top: -40px;
    font-size: 15px;
    left: -5px;
}

.span_input_password::before{
    font-size: 18px;
    color: #999;
    line-height: 1.2;
    content: attr(data-placeholder);
    position: absolute;
    top: -20px;
    left: 0;
    padding-left: 5px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
    pointer-events: none;

}
.span_input_password.ativo_pass::before{
    top: -40px;
    font-size: 15px;
    left: -5px;
    color: #57b846;
}
input.input_password:focus+.span_input_password::before{
    top: -40px;
    font-size: 15px;
    left: -5px;
}
.avatar{
    height: 200px;
    display: flex;
    justify-content: center;   
}
.avatar img{
    width: 150px;
    position: absolute;
    left: 20%;
    top: 0;
}
.box_input{
    border-bottom: 2px solid #d9d9d9;
}
.input_user, .input_password{ 
    border: none;
    transition: all 400ms ;
    width: 100%;
    margin-top: 10%;
}
.input_user:focus-visible, .input_password:focus-visible{ 
    border: none;
    outline: none;
}
.gloval_login {
    height: auto;
   
}
.login{
    width: 300px;
    margin: 0 auto;
    height: 300px;
    border-radius: 10px;
    display: block;
    transform: translateY(5em);
}
</style>
<script>
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
            ativo_user: false,
            ativo_pass: false,
            complete: false,
        }
    },
    methods:{
        complet_form(){
            if(this.user!="" && this.password!==""){
                this.complete = true; 
            }else {
                this.complete = false; 
            }
            
        },  
        verificaitem(){
            this.ativo_user = true;
        },
        verificaitem2(){
            this.ativo_pass = true;
        },
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