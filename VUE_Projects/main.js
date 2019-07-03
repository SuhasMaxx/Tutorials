var product = "shoe";

Vue.filter('blockletter', function(string){
    return string.toUpperCase();
})

var myApp = new Vue({
    el:"#app",
    data:{
        products: ["Manners","Maketh","Man","...", "KingsMan"],
        code: "KidNextDoor"
    },
    methods:{
        chekIt(){
            this.products.push("Its a secret service !");
        },
        remove(i){
            this.products.splice(i, 1);
        }
    }
})




//myApp.product.push("Its a secret se@rvice !");
