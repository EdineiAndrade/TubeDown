const btn = document.querySelector("#btn-secon");


btn.addEventListener("click", function(e){
    
    e.preventDefault();

    //const url1 = "http://54.145.59.200:3000/?url="
    const url1 = "https://app-tube-down.herokuapp.com/?url="
    const vry  =  "https://www.youtube.com/"
    const url2 = document.querySelector("#send");
    const url =  url1 + url2.value;
    const urv1 = url2.value
    const urv2 = urv1.substr(0, 24)

    if(urv2 === vry ){
        window.open(url, "_blank") || window.location.replace(url);

    }else{
        alert('Link inválido. Copiar do Youtube!!')
        
    }

    setTimeout(function() {
        window.location.reload()
        document.querySelector("#send").value = ""
        
    }, 2000);
   

});


