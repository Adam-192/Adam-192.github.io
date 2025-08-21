
////////////////////////////////////////////////////
let mana = 0
let click = 1
let autoclick = 0
let pro_bonus = 0

/*
    COSTS
*/
let click_upgrade_cost = 10
let autoclick_upgrade_cost = 25

/* 
  MANA
*/
function refresh_mana(){
    document.getElementById("mana").innerHTML = "MANA: "+mana.toString()
}

/*
    CLICK
*/
function clickFunction(){
    mana += Math.ceil(click+(click*pro_bonus/100));
    refresh_mana()
}


/* 
   STATUS
*/

function refresh_status(){
    document.getElementById("status").innerHTML =
    "click: " + click.toString() + " mana/click" +
    "<br>" + 
    "autoclick: " + autoclick.toString() + " mana/s"+
    "<br>" + "<br>" +
    "bonus: +"+pro_bonus.toString()+"%"
    ;
}


/* 
  UPGRADES
*/

function refresh_costs(){
    document.getElementById("button_upgrade_click").innerHTML = 
    "+CLICK"+"<br>"+click_upgrade_cost.toString()+"mana"

    document.getElementById("button_upgrade_autoclick").innerHTML = 
    "+AUTOCLICK"+"<br>"+autoclick_upgrade_cost.toString()+"mana"
}

function upgrade_click(){
    if (mana>=click_upgrade_cost){
        click += 1;
        mana -= click_upgrade_cost;
        click_upgrade_cost*=2
        refresh_all();
    }
}

function upgrade_autoclick(){
    if (mana>=autoclick_upgrade_cost){
        autoclick += 1;
        mana -= autoclick_upgrade_cost;
        autoclick_upgrade_cost*=2
        refresh_all();
    }
}


function upgrade_1pro(){
    if (mana>=100){
        mana -= 100;
        pro_bonus +=15;
        document.getElementById("button_1pro").disabled = true

        const slika = document.getElementById("slika_runa");
        if (slika.getAttribute("src") === "slike_rune/runa0.png") {
            slika.src = "slike_rune/runa1.png";
        }
        refresh_all();
    }
}

function upgrade_2pro(){
    if (mana>=450){
        mana -= 450;
        pro_bonus +=35;
        document.getElementById("button_2pro").disabled = true
        const slika = document.getElementById("slika_runa");
        if (slika.getAttribute("src") === "slike_rune/runa0.png" || slika.getAttribute("src") === "slike_rune/runa1.png") {
            slika.src = "slike_rune/runa2.png";
        }
        refresh_all();
    }
}

function upgrade_3pro(){
    if (mana>=1500){
        mana -= 1500;
        pro_bonus +=50;
        document.getElementById("button_3pro").disabled = true
        document.getElementById("slika_runa").src = "slike_rune/runa3.png"
        refresh_all();
    }
}


/*
   TIMER - za AUTOCLICk
*/

setInterval(()=>{
    mana+= Math.ceil(autoclick+(autoclick*pro_bonus/100));
    refresh_all();
}, 1000);

////////////////////////////////////////////////

const runa = document.querySelector(".runa img");

runa.addEventListener("click", () => {
    runa.classList.add("pulse");
    setTimeout(() => {
        runa.classList.remove("pulse");
    }, 200);
});

function zmaga(){
    if (mana>=4444){
        document.getElementById("zmaga").disabled=true;
        document.getElementById("zmaga_text").style.display = "flex";
        document.getElementById("igra").style.display = "none";
        document.getElementById("bb").style.display = "none";
    }
}

/////////////////////////////////////////

function refresh_all(){
    refresh_status()
    refresh_costs()
    refresh_mana()
}
refresh_all()
