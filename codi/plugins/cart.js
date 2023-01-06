export default function({store}, inject){
    store.commit("cart/LoadCart");
    inject("formatMoney", (money) =>{
        return new Intl.NumberFormat("en-Euro",{
            currency:'EUR', 
            style:"currency",
        }).format(money);
    })
}