    var corpo = document.querySelector("body");
    var botao = document.createElement("button");
    botao.textContent = "Pain";
    corpo.appendChild(botao);
    botao.id = 'img';
    var tag = document.getElementById('img');

    botao.style.borderColor = ("red");
    botao.style.borderWidth = ('10px')
    botao.style.background = ("black");
    botao.style.color = ('red');
    botao.style.height = ('400px');
    botao.style.width = ('600px');
    botao.style.fontSize = ('150px');
    botao.style.position = ('absolute');
    botao.style.top = ('140px');
    botao.style.left = ('380px');


    botao.addEventListener("mouseover", function(){
        botao.textContent = "Konan";
        botao.style.borderColor = ("blue");
        botao.style.color = ("blue");
    })

    botao.addEventListener("mouseout", function(){
        botao.textContent = "Pain";
        botao.style.borderColor = ("red");
        botao.style.color = ("red");
    })

    botao.addEventListener("mouseup", function(){
        botao.textContent = "Konan";
        botao.style.borderColor = ("blue");
        botao.style.color = ("blue");
    })

    botao.addEventListener("mousedown", function(){
        botao.style.border = ("10px solid orange")
        botao.textContent = "Tobi";
        botao.style.color = ("orange");
    })

    botao.addEventListener("click", function(){
        botao.textContent = "Deidara";
        botao.style.color = ("yellow");
        botao.style.borderColor = ("yellow"); 
    })

    botao.addEventListener("dblclick", function(){
        botao.textContent = "Hidan";
        botao.style.borderColor = ("purple");
        botao.style.color = ("purple");
    })

    botao.addEventListener("contextmenu", function(){
        botao.textContent = "Itachi";
        botao.style.borderColor = ("grey");
        botao.style.color = ("grey");
    })

    botao.addEventListener("wheel", function(){
        botao.textContent = "Kisame";
        botao.style.borderColor = ("white");
        botao.style.color = ("white");
    })

    botao.addEventListener("keypress", function(){
        botao.textContent = "Sasori";
        botao.style.borderColor = ("#ff6961");
        botao.style.color = ("#ff6961");
    })

    botao.addEventListener("keyup", function(){
        botao.textContent = "Kakuzu";
        botao.style.borderColor = ("#964b00");
        botao.style.color = ("#964b00");
    })

    botao.addEventListener("select", function(){
        botao.textContent = "Sasori";
        botao.style.borderColor = ("#ff6961");
        botao.style.color = ("#ff6961");
    })
