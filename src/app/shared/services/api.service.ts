import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { IUserLogin, IUserRegistr } from '../interfaces/IUsersApi';
import { AuthService } from './auth.service';
import { signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { doc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    private fireStore = inject(Firestore);
  public userColletcion = collection(this.fireStore,'usersInfo');

  public getCurrentUserProfile(uid: string):Observable<IUserRegistr>{
const userDocRef = doc(this.fireStore, `usersInfo/${uid}`);
    
    return  docData(userDocRef) as Observable<IUserRegistr>;
  }

}
