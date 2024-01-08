import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../domain/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private url_user = 'http://localhost:8081/api/v1/auth/'; 

  constructor(private _http: HttpClient) { }

  public RegisterUser(user: User): Observable<User>{

    return this._http.post<User>(this.url_user+'register',user);
  }
}
