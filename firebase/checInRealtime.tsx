import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());

const userIdToCheck = "VwkBsyDpV8TD2uflpl5fHausaWF2";

get(child(dbRef, `users/${userIdToCheck}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("DB node for user VwkBsyDpV8TD2uflpl5fHausaWF2 exists!!");
  } 
}).catch((error) => {
  console.error(error);
});