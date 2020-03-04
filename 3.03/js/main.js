var myselect = document.querySelectorAll(".mylist li");
var myText = document.querySelectorAll(".mylist2 li")
var mylist2 = document.querySelector(".mylist2")
myselect.forEach(function(elem,index) {
    elem.addEventListener("click", function () {
        var activeLi = document.querySelector(".mylist2 .activeli")
        var activet = document.querySelector(".active");
        activet.classList.remove("active");
        this.classList.add("active");
        if(!mylist2.children[index].classList.contains("activeli")){
           mylist2.children[index].classList.add("activeli");
            activeLi.classList.remove("activeli"); 
        }
    })
});
