import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const getAllClassesService = async (uid) => {

    if(!uid) throw new Error("Doesn't exist a user with this uid");
    
    try {
                
        const collectionRef = collection(FirebaseDB, `${uid}/school/classes`);
        const docs = await getDocs(collectionRef);

        const classes = [];

        docs.forEach(doc => {
            classes.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return classes;

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        };
    }


};

export const createClassService = async (uid, data) => {

    try {

        const newDoc = doc(collection(FirebaseDB, `${uid}/school/classes`));
        await setDoc(newDoc, data);

        data.id = newDoc.id;
        
        return {
            ok: true,
            message: 'Class created successfully!',
            data
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: 'An error occurred while creating the class'
        };
    };

};


export const deleteClassService = async (uid, classID) => {

    try {

        const docRef = doc(FirebaseDB, `${uid}/school/classes/${classID}`);
        await deleteDoc(docRef);

        return {
            ok: true,
            message: 'Class deleted'
        }
        
    } catch (error) {

        console.log(error);
        return {
            ok:false,
            errorMessage: error.message
        };

    }

};

// export const searchClassesService = async(uid, search) => {

//     const docRef = collection(FirebaseDB, `${uid}/school/classes`);
//     const docsQuery = query(docRef, where("name", "array-contains", search.split('')));

//     const docsResult = await getDocs(docsQuery);

//     const classesResult = [];

//     docsResult.forEach(doc => {
//         classesResult.push({
//             id: doc.id,
//             ...doc.data()
//         });
//     });

//     console.log('Classes results:', classesResult);

// };