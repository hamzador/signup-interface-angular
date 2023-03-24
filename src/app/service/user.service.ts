import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

const serverUrl = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseURl = serverUrl + '/users';

  constructor(private httpClient: HttpClient) { }
  createUser( user: User):Observable<User>{
    return this.httpClient.post(this.baseURl,user);
  }
  
}

