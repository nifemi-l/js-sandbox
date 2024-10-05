const myImage = document.querySelector("img");

myImage.onclick = () => { 
    const mySrc = myImage.getAttribute("src"); 
    if (mySrc === "images/WIN_20240417_13_52_03_Pro.jpg") { 
        myImage.setAttribute("src","images/SELF - Yr 2 photo.jpg" ); 

    } else { 
        myImage.setAttribute("src", "images/WIN_20240417_13_52_03_Pro.jpg"); 
    }
}

let myButton = document.querySelector("button"); 
let myHeading = document.querySelector("h1");

function setUserName() { 
    const myName = prompt("Please enter your name.");
    if (!myName) { 
        alert("Invalid name.")
        setUserName();
    } else { 
        // API call that allows for storing data in the browser and getting it later
        localStorage.setItem("name", myName); 
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    } 
}

if (!localStorage.getItem("name")) { 
    setUserName();
} else { 
    const storedName = localStorage.getItem("name"); 
    myHeading.textContent = `Mozilla is cool, ${storedName}`; 
}

myButton.onclick = () => { 
    setUserName();
}