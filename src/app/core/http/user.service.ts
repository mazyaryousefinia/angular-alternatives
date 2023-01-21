import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseURL}/users`)
  }

  getSingleUser(user_id: number): Observable<User> {
    return this.http.get<User>(`${environment.baseURL}/users/${user_id}`)
  }
}
