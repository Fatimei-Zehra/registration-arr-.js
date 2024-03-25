let userName = document.getElementById("username");
let username = document.getElementById("name");
let surname = document.getElementById("surname");
let userPassword = document.getElementById("password");
let button = document.querySelector(".btn");
let buttonRegister = document.querySelector(".register-btn");


// Contact variables
let contactName = document.getElementById("contact-name");
let contactSurname = document.getElementById("contact-surname");
let contactEmail = document.getElementById("contact-email");
let contactPhone = document.getElementById("contact-phone");
let buttonContact = document.getElementById("add-contact");
let deleteBtn = document.getElementById("delete-btn")


let usersInfo = [];

if (buttonRegister) {
    buttonRegister.addEventListener("click", (e) => {
        e.preventDefault();
        check();
        let userObj = {
            usersName: userName.value,
            firstName: username.value,
            lastName: surname.value,
            password: userPassword.value
        }
        //  console.log(userInfo.firstName);
        let user = userObj.usersName;
        let name = userObj.firstName;
        let surName = userObj.lastName;
        let pass = userObj.password;


        localStorage.setItem("Username", JSON.stringify(user));
        localStorage.setItem("Firstname", JSON.stringify(name));
        localStorage.setItem("Lastname", JSON.stringify(surName));
        localStorage.setItem("Password", JSON.stringify(pass));

        
        // usersInfo.push(userObj.usersName, userObj.firstName, userObj.lastName, userObj.password);

        usersInfo.push(userObj)
        // console.log(usersInfo);

    })
}


checkInformation = true;

function check() {
    if (userName.value === "") {
        userName.style.border = "2px solid red"
        checkInformation = false;
    } else if (!(userName.value === "")) {
        userName.style.border = "2px solid green"
        checkInformation = true;
    }

    if (username.value === "") {
        username.style.border = "2px solid red"
        checkInformation = false;
    } else if (!(username.value === "")) {
        username.style.border = "2px solid green"
        checkInformation = true;
    }

    if (surname.value === "") {
        surname.style.border = "2px solid red"
        checkInformation = false;
    } else if (!(surname.value === "")) {
        surname.style.border = "2px solid green"
        checkInformation = true;
    }

    if (password.value === "") {
        password.style.border = "2px solid red"
        checkInformation = false;
    } else if (!(password.value === "")) {
        password.style.border = "2px solid green"
        checkInformation = true;
    }
    if (password.value.length <= 8) {
        password.style.border = "2px solid red"
        checkInformation = false;
    } else {
        password.style.border = "2px solid green"
        checkInformation = true;
    }

    loginPage();
}

function loginPage() {
    if (checkInformation == true) {
        window.open("http://127.0.0.1:5500/index.html")
    } else {
        alert("Please enter your information correctly")
    }
}

//LOGIN PAGE JS CODES...........................................................................................................................
if (button) {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        let loginName = userName.value;
        let loginPass = password.value;

        if (loginName == JSON.parse(localStorage.getItem("Username")) && loginPass == JSON.parse(localStorage.getItem("Password"))) {
            alert("You succesfully logged in!");
            checkInformation = true;
        } else {
            alert("Please check your email address or password");
            checkInformation = false;
        }

        login();
    })
}

function login() {
    if (checkInformation == true) {
        window.open("http://127.0.0.1:5500/contacts.html")
    } else {
        alert("Please enter your information correctly")
    }
}


//CONTACTS CODES JS.................................................................................................................

let contactStorage = [];
buttonContact.addEventListener("click", (e) => {
    e.preventDefault();

    let conName = contactName.value;
    let conSurname = contactSurname.value;
    let conEmail = contactEmail.value;
    let conPhone = contactPhone.value;


    let contactObj = {
        contactName: conName,
        contactSurname: conSurname,
        contactEmail: conEmail,
        contactPhone: conPhone
    }



    const tr = `<tr>
    <td>${contactObj.contactName}</td>
    <td>${contactObj.contactSurname}</td>
    <td>${contactObj.contactEmail}</td>
    <td>${contactObj.contactPhone}</td>
    <td><button>Delete</button></td>
    </tr>;`;
    document.querySelector("#table-tbody").innerHTML += tr;

    let contactInfo = [];
    // contactInfo.push(contactObj.contactName, contactObj.contactSurname, contactObj.contactEmail, contactObj.contactPhone);
    contactInfo(contactObj);
    localStorage.setItem("Contacts", JSON.stringify(contactInfo));
    // console.log(contactInfo)


})


// deleteBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let tbody=document.getElementById("table-tbody")
//        tbody.style.display = "none"
// })