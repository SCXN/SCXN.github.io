let flyPop=document.getElementById('flyPop');
let flyOut=document.getElementById('flyOut');
flyPop.onclick=function(){
    flyOut.classList.toggle('hide');
    if(flyPop.innerHTML==='Dinner'){
        flyPop.innerHTML='✖'
        function closer(){
            flyOut.classList.add('hide');
            flyPop.innerHTML='Dinner'
        }
        setTimeout(closer, 9876);
    }else if(flyPop.innerHTML==='✖'){
        flyPop.innerHTML='Dinner'
    }
}




