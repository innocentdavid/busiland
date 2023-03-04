let btncontain = document.getElementById('oga');

let btns = btncontain.getElementsByClassName('form-links');

for(let i = 0; i< btns.length;i++){
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName('active');
        current[0].className= current[0].className.replace(" active");
        this.className +=" active";
    })

}
 
 
 
 
 function opentab(evnt,Tab){
    let i
    let sugar
    let formlinks

        sugar = document.getElementsByClassName('sugar');
        for (i=0;i<sugar.length;i++){
            sugar[i].style.display="none";

        }
        formlinks = document.getElementsByClassName("form-links");

        for(i=0; i<formlinks.length; i++){
            formlinks[i].className=formlinks[i].className.replace("active","");
        }
        document.getElementById(Tab).style.display="block";
        evnt.currentTarget.className += "active";
}
document.getElementById("defaultOpen").click();
