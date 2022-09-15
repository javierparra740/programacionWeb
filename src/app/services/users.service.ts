import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get('https://reqres.in/api/users');
  }

  getUser(id: any): Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }

  createUser(user: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users', user);
  }

  editUser(user: any): Observable<any>{
    return this.http.put('https://reqres.in/api/users/2', user);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete(`https://reqres.in/api/users/${id}`)
  }
}
