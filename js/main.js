// let food =document.getElementById(`food`)

function food(e) {
    console.log(e);
}

// scroll
let NavbarList = document.querySelector(".NavbarList");
let scrollTop = document.querySelector(`.scrollTop`)

window.onscroll = function () {
    if (this.scrollY >= 1) {
        NavbarList.classList.add(`show`);
    } else {
        NavbarList.classList.remove(`show`);
    }
    if(this.scrollY >= 350){
        scrollTop.classList.add("show")
    }else{
        scrollTop.classList.remove("show")
    }
    scrollTop.onclick = function(){
        window.scrollTo({
            top : 0 ,
            behavior : "smooth"  
        })
    }
}; 



//scroll width
let scrollWidth = document.querySelector(`.scrollWidth`)
let heights = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log();
window.addEventListener(`scroll` , ()=>{
    let getWidth = document.documentElement.scrollTop ;
    scrollWidth.style.width = `${((getWidth / heights ) * 100)}%`
})



// icon list links

let listIcon = document.querySelector(`.icon-list-links`);
let iconlistto = document.querySelectorAll(`#iconlistto`);

listIcon.addEventListener(`click`, () => {
        iconlistto.forEach((listto) => {
        listto.classList.toggle(`show`);
    });
});

let prodacts;

const DataProdacts = function () {
    fetch(`js/prodects.json`)
    .then((Response) => Response.json())
    .then((Data) => {
        prodacts = Data;

        AddProdactsHtml();
    });
};
DataProdacts();

function AddProdactsHtml() {
    prodacts.forEach((prodact) => {
    // console.log(prodact);
    let newProdect;
    newProdect = `
            <div class="box col-lg-6 row h-100 mb-3 align-items-center wow fadeInUpBig">
                <div class="img col-3">
                    <img class="w-100" src="${prodact.imgUrl}" alt="" />
                </div>
                <div class="text col-9">
                    <div class="title row border-bottom pd-2">
                        <h4 class="col-10 fw-bold">${prodact.title}</h4>
                        <p class="col-2 text-end fw-bold">${prodact.price}</p>
                    </div>
                    <div class="card-brg pt-2">
                        <p>${prodact.brg}</p>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(`.menu-card`).innerHTML += newProdect;
});
}

// wow
new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
}).init();
