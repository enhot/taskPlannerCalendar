import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface ILogIn {
  id?:string
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private firestore = inject(Firestore);

  public  logIn(): Observable<ILogIn[]> {
    const tasksRef = collection(this.firestore, 'userInfo');
    return collectionData(tasksRef, { idField: 'id' }) as Observable<ILogIn[]>;
  }

}
