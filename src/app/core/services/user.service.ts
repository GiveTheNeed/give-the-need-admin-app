import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { HttpService } from 'src/app/core/services/http.service';
import { URLConstants } from 'src/app/core/constants/url-constants';
import { User } from "src/app/core/models/user.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userForm: BehaviorSubject<any> = new BehaviorSubject<any>({});
  currentUserData = this.userForm.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  
  constructor(
    private httpService: HttpService
  ) { }

  authenticate(payload: User) {
    const url = environment.baseUrl + URLConstants.AUTHENTICATE_API;
    return this.httpService.post(url, payload);
  }
  
  createUser(payload: User) {
    const url = environment.baseUrl + URLConstants.REGISTER_USER_API;
    return this.httpService.post(url, payload);
  }

  getUsers() {
    const url = environment.baseUrl + URLConstants.GET_USERS_API;
    return this.httpService.get(url);
  }

  updateUser(data: any) {
    const url = environment.baseUrl + URLConstants.UPDATE_USER_API;
    return this.httpService.put(`${url}/${data._id}`, data);
  }

  deleteUser(data: any) {
    const url = environment.baseUrl + URLConstants.UPDATE_USER_API;
    return this.httpService.delete(`${url}/${data._id}`);
  }

  getUserById(userId: Number) {
    const url = environment.baseUrl + URLConstants.GET_USER_BY_ID_API;
    return this.httpService.get(`${url}/${userId}`);
  }

  emitUserFormData(data: any) {
    this.userForm.next(data);
  }

  getUserNotifications() {
    return this.httpService.get(URLConstants.GET_USER_NOTIFICATIONS_API);
  }
  
}