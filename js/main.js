const btn = document.querySelector("#btn-secon");


btn.addEventListener("click", function(e){
    
    e.preventDefault();

    //const url1 = "http://54.145.59.200:3000/?url="
    const url1 = "https://app-tube-down.herokuapp.com/?url="
    const vry1  =  "https://www.youtube.com/"
    const vry2  = "https://youtu.be/"
    const url2 = document.querySelector("#send");
    const url =  url1 + url2.value;
    const urv1 = url2.value
    const urv2 = urv1.substr(0, 24)
    const urv3 = url2.value
    const urv4 = urv3.substr(0, 17)

    if(urv2 === vry1 | urv4 === vry2 ){
        window.open(url, "_blank");

    }else{
        alert(`Link inválido. Copiar do Youtube!! ' +  ${(urv4)`})
        
    }

    setTimeout(function() {
        window.location.reload()
        document.querySelector("#send").value = ""
        
    }, 2000);
   

});


