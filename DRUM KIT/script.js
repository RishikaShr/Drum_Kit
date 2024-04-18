let drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
    drum.addEventListener("click", (e) => {
        makeSound(e.target.innerText);
        divEffect(e.target.innerText);
    })
})

document.addEventListener("keydown",(e)=>{
    makeSound(e.key.toLowerCase());
    divEffect(e.key.toLowerCase());
})

const makeSound = (char) => {
    if (char === "w") {
        let tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
    }
    else if (char === "a") {
        let tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
    }
    else if (char === "s") {
        let tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
    }
    else if (char === "d") {
        let tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
    }
    else if (char === "j") {
        let snare = new Audio('./sounds/snare.mp3');
        snare.play();
    }
    else if (char === "k") {
        let crash = new Audio('./sounds/crash.mp3');
        crash.play();
    }
    else if (char === "l") {
        let kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
    }
}

const divEffect=(char)=>{
    let ele=document.querySelector("."+char);
    ele.classList.add("effect");
    setTimeout(()=>{
        ele.classList.remove("effect");
    },250);
}