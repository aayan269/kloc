
function mainfunc(a,b){
    
    setTimeout(function(){
        
         var card = document.getElementById('visa_card');
    var ct = card.getBoundingClientRect().top;
    var cl = card.getBoundingClientRect().left;
    
    var aa = document.getElementById(a);
    var ab = document.getElementById(b);
    
    var top1 = aa.getBoundingClientRect().top;
    var bottom1 = parseInt(window.getComputedStyle(aa).getPropertyValue("height"));
    var right1 = parseInt(window.getComputedStyle(aa).getPropertyValue("width"));
    var left1 = aa.getBoundingClientRect().left;
    
    ab.style.opacity = "1";
    
    ab.style.top = top1 - ct + "px";
    ab.style.left = left1 - cl + "px";
    ab.style.width = right1 + "px";
    ab.style.height = bottom1 + "px";
        
        if (a == "sdate"){
            ab.style.left = left1 - cl - 10 + "px";
            ab.style.width = right1 + 15 + "px";
        }
        
    },500);
    
}

function write1(a,b){
    var arr = ["acc_num","card_name","card_date","card_date","scvv"]
    
    
    if (a == 4){
       var card = document.getElementById('visa_card');
       card.classList.add("active");
        var ll = document.getElementById("pointer");
        ll.style.opacity = 0;
    }else{
        var card = document.getElementById('visa_card');
         card.classList.remove("active");
         mainfunc(arr[a],"pointer");
        
        if (a == 0){
            account(b);
        }
        if (a == 1){
            naam(b);
        }
        if (a == 2){
            month(b);
        }
        if (a == 3){
            year(b);
        }
        if(a == 4){
            cvv(b)
        }
    }
}

function account(b){
    var st1 = document.querySelectorAll(".label");
    var stfull = document.querySelectorAll(".stars1");
    var sb = b.value;
    
    if (sb.length <= 16){
    
    for(var j = 0;j<st1.length;j++){
        st1[j].innerHTML = "#";
        stfull[j].classList.remove("active");
      }
        
     for(var i = 0;i<sb.length;i++){
        st1[i].innerHTML = sb[i];
        stfull[i].classList.add("active");
      }
        
    }else{
        b.value = sb.substring(0,16);
    }
}

function month(b){
    var mm = parseInt(b.value);
    var set_month = document.getElementById("set_month");
    var card_month = document.getElementById("card_month");
    if (mm > 0 && mm < 13){
        set_month.classList.add("active");
        if (mm < 10){
            mm = "0"+mm;
        }
        card_month.innerHTML = mm;
    }else{
        set_month.classList.remove("active");
        card_month.innerHTML = "01";
    }
}

function year(b){
    var mm = parseInt(b.value);
    var set_year = document.getElementById("set_year");
    var card_year = document.getElementById("card_year");
    
    if (mm > 2021 && mm < 3000){
        set_year.classList.add("active");
        card_year.innerHTML = mm;
    }else{
        set_year.classList.remove("active");
        card_year.innerHTML = "2021";
    }
    
}
function cvv(b){
    var mm = parseInt(b.value);
    console.log(b)
    var cv=document.getElementById("sccv")

    cv.innerHTML="<label>"+mm+"</label>";
}
function naam(b){
    var f_name = b.value;
    var card_name = document.getElementById("card_name");
    if (f_name.length > 0){
        card_name.innerHTML = "<label>"+f_name+"</label>";
    }else{
        card_name.innerHTML = "<label>FULL NAME</label>";
    }
}

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

var creds = document.getElementById("creds");
creds.addEventListener("submit", (e) => {
    e.preventDefault();
     location.reload();
    alert("Your details submitted")
})