import { createUserWithEmailAndPassword, EmailAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { deleteUser, reauthenticateWithCredential, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";

export const deleteUserAccount = async (password) => {
  const user = auth.currentUser;
  const { email } = user;
  const credential = EmailAuthProvider.credential(email, password);  // TODO

  // Step 1: Reauthenticate user before deleting (in other words, make them login again)
  return await reauthenticateWithCredential(user, credential).then(() => {
    // Step 2: User re-authenticated - we can now delete the user
    // TODO: in the future, if we have user data in firestore, must first delete that data
    return deleteUser(user).then(() => {
      console.log("User deleted");
      return Promise.resolve();
    }).catch((error) => {
      console.log(error);
      return Promise.reject();
    });
  }).catch((error) => {
    console.log(error);
    return Promise.reject();
  });
}

export const signOutFunction = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export const forgotPasswordFunction = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


export const signUp = (firstName, lastName, email, password, rePassword) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Sign up success")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
}

export const logIn = (email, password) => {
  let user = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      return error;
    });

    return user;
  }

  export const authStateListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    });
  }

// inside SignUpScreen, import then call signUp()
