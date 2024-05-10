const Menubar = document.getElementById("navbarsec4");
const SideNavBar = document.getElementById("sidenavbar");

function showSideBar (){
    SideNavBar.style.display="block"
}

function closebtn (){
    SideNavBar.style.display="none"
}

// profile
const profile = document.getElementById("profile")
const user = document.querySelector(".user")

profile.addEventListener("click" , () =>{
    user.style.display= "block"
})

profile.addEventListener("dblclick" , () =>{
    user.style.display= "none"
})

// Cart
const cart = document.getElementById("cart")
const cartContent= document.getElementById("cartcontent")

cart.addEventListener("mouseover" , () =>{
cartContent.style.display= "block"
})

cart.addEventListener("mouseout" , () =>{
    cartContent.style.display= "none"
    })


    // Category

    const dev = document.getElementById("dev")
    const devTitle = document.getElementById("devtitle")

    dev.addEventListener("click" , () =>{
        devTitle.style.display= "block"
    })

    dev.addEventListener("dblclick" , () =>{
        devTitle.style.display= "none"
    })

