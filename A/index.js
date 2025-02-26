import { app } from "./firebase.js";

import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  remove,
  get,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const auth = getAuth();
const database = getDatabase(app);

const menuRegBtn = document.getElementById("menu-reg");
const menuLogBtn = document.getElementById("menu-log");
const menuSignOutBtn = document.getElementById("signout-button");
const infoSelection = document.getElementById("info");

const emailInput = document.getElementById("register-email");
const passwInput = document.getElementById("register-password");
const registerButton = document.getElementById("register-button");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const regContainer = document.getElementById("reg-container");
const logContainer = document.getElementById("log-container");

menuRegBtn.addEventListener("click", () => {
  regContainer.style.display = "block";
  logContainer.style.display = "none";
});

menuLogBtn.addEventListener("click", () => {
  regContainer.style.display = "none";
  logContainer.style.display = "block";
});

// check if user is admin or not
const autentificationFunc = (user) => {
  console.log("user: ", user);

  if (user) {
    const uid = user.uid;

    get(child(ref(database), `users/` + uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userDataFromDB = snapshot.val();
          const userRole = userDataFromDB.role;
          regContainer.style.display = "none";

          if (userDataFromDB.role === "admin") {
            console.log("admin");
            // panel.src = "admin.html"; fir the append child so you add things only admin sees
            // panel.style.display="block" //
            // infoSelection.appendChild(panel);
            menuRegBtn.style.display = "none";
            menuLogBtn.style.display = "none";
            menuSignOutBtn.style.display = "block";
          } else {
            console.log("user");
            // panel.src = "admin.html"; fir the append child so you add things only user sees
            // panel.style.display="block" //
            // infoSelection.appendChild(panel);
            menuRegBtn.style.display = "none";
            menuLogBtn.style.display = "none";
            menuSignOutBtn.style.display = "block";
          }
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.log("user signed out");
  }
};

// check if user loged in and what status is he
onAuthStateChanged(auth, (user) => {
  infoSelection.innerHTML = "";

  if (user) {
    const uid = user.uid;

    get(child(ref(database), `user/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userDataFromDB = snapshot.val();
          const userRole = userDataFromDB.role;

          // const panel = document.createElement("img"); same thing as before
          // panel.id="img";
          if (userRole === "admin") {
            console.log("admin");
            // panel.src = "admin.html";
          } else {
            console.log("user");
            // panel.src = "userpanel.html";
          }

          //Dom
          infoSelection.appendChild(panel);
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.log("user signed out");
  }
});

// onAuthStateChanged(auth, (user) => {
//   infoSelection.innerHTML = "";

//   if (user) {
//     const uid = user.uid;

//     get(child(ref(database), `user/${uid}`))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const userDataFromDB = snapshot.val();
//           const userRole = userDataFromDB.role;

//           // const panel = document.createElement("img"); same thing as before
//           // panel.id="img";
//           if (userDataFromDB.role === "admin") {
//             console.log("admin");
//             // panel.src = "admin.html";
//           } else {
//             console.log("user");
//             // panel.src = "userpanel.html";
//           }

//           //Dom
//           infoSelection.appendChild(panel);
//         } else {
//           console.log("no data");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } else {
//     console.log("user signed out");
//   }
// });
// register an new user
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailInput.value, passwInput.value);

  const email = emailInput.value.trim();
  const password = passwInput.value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // sighn up
      const user = userCredential.user;
      console.log("user created", user);

      const loginTime = new Date();

      set(ref(database, `users/${user.uid}`), {
        email: email,
        role: "user",
        loginTime: `${loginTime}`,
      })
        .then(() => {
          console.log("Data saved");
          onAuthStateChanged(auth, autentificationFunc);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      emailInput.value = "";
      passwInput.value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log("user logged in", user);

//     const loginTime = new Date();

//     update(ref(database, "/user/" + user.uid), {
//       timestamp: `${loginTime}`,
//     });
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // sighn in
      const user = userCredential.user;
      console.log("user logged in", user);
      loginEmail.value = "";
      loginPassword.value = "";
      // new login time
      const loginTime = new Date();
      console.log(loginTime);

      update(ref(database, "/user/" + user.uid), {
        timestamp: `${loginTime}`,
      });
      menuRegBtn.style.display = "none";
      menuLogBtn.style.display = "none";
      menuSignOutBtn.style.display = "block";
      logContainer.style.display = "none";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});


// sign out
menuSignOutBtn.addEventListener("click", (e) => {
  e.preventDefault();



  signOut(auth)
  .then(() => {
    const panel = document.getElementById("img");
    panel.remove();
    console.log("user signed out");
    menuRegBtn.style.display = "display";
    menuLogBtn.style.display = "display";
    menuSignOutBtn.style.display = "none";
    panel.style.display = "none";
  })
  .catch((error) => {
    // error
});
});




onAuthStateChanged(auth, autentificationFunc);
