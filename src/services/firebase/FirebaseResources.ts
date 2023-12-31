import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from "firebase/firestore";

export class FirebaseResources {
  private readonly app: FirebaseApp;
  private readonly _analytics: Analytics;
  private readonly _auth: Auth;
  private readonly _firestore: Firestore;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD0-xVlhYZvUk-A2zRO5pJ3_2vYDI8Phc0",
      authDomain: "runmprc-97922.firebaseapp.com",
      projectId: "runmprc-97922",
      storageBucket: "runmprc-97922.appspot.com",
      messagingSenderId: "421024796584",
      appId: "1:421024796584:web:608b41bd53f0dd44a1179d",
      measurementId: "G-BJX9HM4FQ8",
    };

    this.app = initializeApp(firebaseConfig);

    this._analytics = getAnalytics(this.app);
    this._auth = getAuth(this.app);
    this._firestore = getFirestore(this.app);

    if (process.env.NODE_ENV === "development") {
      connectAuthEmulator(this._auth, "http://localhost:9099");
      connectFirestoreEmulator(this._firestore, "127.0.0.1", 8080);
    }
  }

  get analytics(): Analytics {
    return this._analytics;
  }

  get auth(): Auth {
    return this._auth;
  }

  get firestore(): Firestore {
    return this._firestore;
  }
}
