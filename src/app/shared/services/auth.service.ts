import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, DocumentData, setDoc } from '@firebase/firestore';

import { from, Observable } from 'rxjs';
import { IUserLogin, IUserRegistr } from '../interfaces/IUsersApi';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fireStore = inject(Firestore);

  public firebaseAuth = inject(Auth)
  public userColletcion = collection(this.fireStore,'usersInfo');

  public signUp(userInfo: IUserRegistr):Observable<void>{
    const authPromise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      userInfo.email,
      userInfo.password,
    ).then((userCredential) => {
      const uid = userCredential.user.uid;

      const userDocRef = doc(this.fireStore, `usersInfo/${uid}`);

      const profileData = {
        uid: uid,
        email: userInfo.email,
        name: userInfo.name,
        photoURL: userInfo.photoURL || "",
        createdAt: Date.now()
      }

      return setDoc(userDocRef, profileData)
    })

    return from(authPromise)
  }

    public getUserInfo(credentials:IUserLogin):Observable<UserCredential>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      credentials.email,
      credentials.password
    ) ;
    return  from(promise)
  }
}
