const btn = document.querySelector("#btn-secon");


btn.addEventListener("click", function(e){
    
    e.preventDefault();

    //const url1 = "http://54.145.59.200:3000/?url="
    const url2 = "https://app-tube-down.herokuapp.com/?url="

    const urly = document.querySelector("#send");
    const url =  url2 + urly.value;
    
    window.open(url, "_blank") || window.location.replace(url);

    setTimeout(function() {
        window.location.reload()
        document.querySelector("#send").value = ""
        ur.setAttribute("href", url);
    }, 2000);
   


});


