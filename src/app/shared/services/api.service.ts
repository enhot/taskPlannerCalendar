import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { IUsersApi } from '../interfaces/IUsersApi';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private fireStore = inject(Firestore);
  public userColletcion = collection(this.fireStore,'usersInfo');

  public getUserInfo():Observable<IUsersApi[]>{
    return collectionData(this.userColletcion, {
      idField:'id'
    }) as Observable<IUsersApi[]>
  }

  public setNewUser(user:IUsersApi):Observable<any>{
    const addNewUser = {user, isCompleted:false};
    const promise = addDoc(this.userColletcion,addNewUser).then(
      (response) => response.id
    )
    return from(promise)
  }
}
