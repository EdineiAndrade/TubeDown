const btn = document.querySelector("#btn-secon");

btn.addEventListener("click", function(e){
    
    e.preventDefault();

    const url1 = "http://54.145.59.200:3000/?url="
    const url3 = "http://localhost:3000/?url="

    const url2 = document.querySelector("#send");
    const url =  url1 + url2.value;

    
        window.location.replace(url);
   

    setTimeout(function(){
        console.log("Baixando");
        window.location.reload();
    },3000);

});


