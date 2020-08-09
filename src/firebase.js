import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyA_Tk0p9oRNmCr60fisjRragRENhUbd6GA',
  authDomain: 'foxfam-league.firebaseapp.com',
  databaseURL: 'https://foxfam-league.firebaseio.com',
  projectId: 'foxfam-league',
  storageBucket: 'foxfam-league.appspot.com',
  messagingSenderId: '899446682189',
  appId: '1:899446682189:web:32b986fb51a9b2ca85e204',
  measurementId: 'G-PK28EZ2RS6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const login = () => auth.signInWithPopup(googleProvider);
export const logout = () => auth.signOut();

export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Could not create user document', error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error(`Could not get user document ${uid}`, error);
  }
};

export default firebase;
