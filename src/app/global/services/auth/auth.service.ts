import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //Saves token in local storage
  save(data){
    localStorage.setItem('token' ,data.token);
  }

  //Obtain the token
  get(){
    localStorage.get('token'); //Not sure if its get or getItem
  }

  //Does not obtain the toke, just validates if you are logged in or not 
  isLogged(token){
    return !!localStorage.getItem('token'); //If it exist returns true if not false
  }
}
