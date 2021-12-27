$(document).ready(function(){
    console.log("test");
})


// Hide navbar
$(document).ready(function(){
    $(".button").click(function(){
        $(".navbar").toggleClass("hidden");
        $(".menuItems").toggle();
        $("#arrow").toggleClass("down");
    })
})

//Scroll event

window.addEventListener("scroll", function(){
    //reikia zinoti scroll pozicija
    //console.log(this.scrollY);
    let scrollPos = this.scrollY;

    //elemento pozicija
    let text = document.querySelector(".container");
    let textPos = text.getBoundingClientRect().top;

    if(scrollPos>=100){
        text.style.opacity = 1;
    }


});

//Scroll to section

$(document).ready(function(){
    $("#toSection2").click(function(){
        $("html, body").animate({
            scrollTop: $("#section2").offset().top
        },1000);
    });
});

//Form control

$(document).ready(function(){
    const data = [];
    //Duomenu ivedimas
    $("#submit").click(function(e){
        e.preventDefault();
        let firstName = $("input[name=firstName]").val();
        let email = $("input[name=email]").val();
        if(!firstName || !email){
            return alert("Suveskite duomenis");
        }
        //console.log( firstName +", "+ email);
        let user = firstName+", "+email;
        //console.log(user);
        data.push(user); //iraso kintamaji i masyva
        $("input[name=firstName]").val("");
        $("input[name=email]").val("");
        //console.log(data);
        $("#list").empty();
        for(let i=0; i<data.length; i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
      
        //$("#list").append("<li>"+data[data.length-1]+"</li>");
    });
    // Duomenu slepimas/rodymas
    $("#clearList").click(function(){
        $("#list").empty();
    });
    $("#showArray").click(function(){
        //console.log(data.length);
        if(data.length==0){
            alert("Duomenų nėra");
        }
        $("#list").empty();
        for(let i=0; i<data.length; i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
    });

    //Duomenu istrynimas
    $("#clearArray").click(function(){
        alert("Duomenys bus ištrinti!");
        data.splice(0, data.length);
        $("#list").empty();
    });


    
});

//dropdown

$(document).ready(function(){
    $("#menuMain").hover(function(){
        $("#main").toggleClass("show");
    });
    $("#aboutMenu").hover(function(){
        $("#about").toggleClass("show");
    });
    $("#contactsMenu").hover(function(){
        $("#contacts").toggleClass("show");
    });
    $("#formMenu").hover(function(){
        $("#dataForm").toggleClass("show");
    });
    
});
