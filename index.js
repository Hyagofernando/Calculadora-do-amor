
        function love(){
        var name1 = document.getElementById("NameOne").value;
        var name2 = document.getElementById("NameTwo").value;
        if(name1.length<=2){
            alert("Enter at least 3 character");
        }
        if(name2.length<=2){
            alert("Enter at least 3 character");
        }
        else{
            var random = Math.floor(Math.random()*100);
            document.getElementById("print").innerHTML = name1 + " e " + name2 + "=" +random + "%" + "de amor";
        }
        if(random<=10 || random<=50){
            document.getElementById("statement").innerHTML = "Bom relacionamento";
        }
        else if(random<=51 || random<=100){
            document.getElementById("statement").innerHTML = "Relacionamento adorável";
        }
    }
    