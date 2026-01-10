let webname = document.getElementById("name");
if(webname){
    webname.onclick = function(){
        window.location.href = "index.html";
    }
}

let home = document.getElementById("home");
if(home){
    home.onclick = function(){
        window.location.href = "index.html";
    }
}

let light1 = document.getElementById("light");
if(light1){
    light1.onclick = function(){
        document.body.style.backgroundColor = "white";
    }
}

let light2 = document.getElementById("dark");
if(light2){
    light2.onclick = function(){
        document.body.style.backgroundColor = "lightyellow";
    }
}