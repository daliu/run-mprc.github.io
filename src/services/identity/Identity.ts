import { FirebaseResources } from "../firebase/FirebaseResources";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class IdentityService {
  auth: Auth;

  constructor(firebase: FirebaseResources) {
    this.auth = firebase.auth;
  }

  get isMember(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth
        .authStateReady()
        .then(() => {
          const currentUser = this.auth.currentUser;
          if (!currentUser) {
            reject("current user is null");
            return;
          }
          currentUser
            .getIdTokenResult(true)
            .then((idTokenResult) => {
              const role = idTokenResult.claims.role as string;
              const isMember = role === "member" || role === "admin";
              resolve(isMember);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        })
        .catch((error) => {
          console.log("Error occur while trying to fetch user." + error);
        });
    });
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}

export default IdentityService;
