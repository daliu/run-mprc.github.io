import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import FirebaseResources from '../firebase/FirebaseResources';

class IdentityService {
  auth: Auth;

  constructor(firebase: FirebaseResources) {
    this.auth = firebase.getAuth;
  }

  get isMember(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth
        .authStateReady()
        .then(() => {
          const { currentUser } = this.auth;
          if (!currentUser) {
            reject(new Error('No authenticated user found'));
            return;
          }
          currentUser
            .getIdTokenResult(true)
            .then((idTokenResult) => {
              const role = idTokenResult.claims.role as string;
              const isMember = role === 'member' || role === 'admin';
              resolve(isMember);
            })
            .catch((error) => {
              reject(new Error(`Failed to get user token: ${error.message}`));
            });
        })
        .catch((error) => {
          reject(new Error(`Authentication state error: ${error.message}`));
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
