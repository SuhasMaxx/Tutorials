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
            this.products.push(this.code);
            //this.code = "";
        },
        remove(i){
            this.products.splice(i, 1);
        }
    }
});
