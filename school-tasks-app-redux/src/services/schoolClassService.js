import { doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const getSchoolClassServie = async (uid, id) => {

    if(!uid) throw new Error("Doesn't exist a user with this uid");

    try {

        const docRef = doc(FirebaseDB, `${uid}/school/classes/${id}`);
        
    } catch (error) {
        console.log(error);
    }

};