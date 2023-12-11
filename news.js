const news=document.querySelector(".news");
const cart=document.querySelector(".cart");
const one=document.querySelector(".dismiss");

news.addEventListener('click',()=>{
    cart.classList.add('active-cart')
});

one.addEventListener('click',()=>{
    if(confirm("are you sure delete this cart"))
    cart.classList.remove('active-cart')
})


