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

const db = getDatabase();

const enterID = document.getElementById("enterID");
const enterName = document.getElementById("enterName");
const enterDescription = document.getElementById("Desc");
const insertBtn = document.getElementById("insertBtn");
const update = document.getElementById("updateBtn");
const removebtn = document.getElementById("deleteBtn");

insertBtn.addEventListener("click", () => {
  event.preventDefault();

  set(ref(db, "products/" + enterID.value), {
    ID: enterID.value,
    Name: enterName.value,
    Description: enterDescription.value,
  })
    .then(() => {
      console.log("Data inserted successfully");
    })
    .catch((error) => {
      console.error("Error inserting data: ", error);
    });
});

update.addEventListener("click", () => {
  event.preventDefault();

  onValue(ref(db, "products/" + enterID.value), (snapshot) => {
    const data = snapshot.val();

    if (snapshot.exists()) {
      const data = snapshot.val();
      enterID.value = data.ID;
      enterName.value = data.Name;
      enterDescription.value = data.Description;
    } else {
      console.log("No data available");
    }
  });
});


removebtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const dbRef = ref(getDatabase());
    const productRef = child(dbRef, `products/${enterID.value}`);
    
    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          remove(productRef)
            .then(() => {
              console.log("Data deleted successfully");
            })
            .catch((error) => {
              console.error(error);
              alert("Error deleting data");
            });
        } else {
          console.log("No data available");
          alert("Data not found");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching data");
      });
  });