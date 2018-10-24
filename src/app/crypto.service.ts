import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  friends = [
    {name: 'Bill', age: 73, email: 'bill@abc.com', bestfriend: false},
    {name: 'Liam', age: 4, email: 'liam@abc.com', bestfriend: true},
    {name: 'Kyle', age: 47, email: 'kyle@abc.com', bestfriend: false},
    {name: 'Mike', age: 6, email: 'mike@abc.com', bestfriend: true}
  ];
  constructor() { }
  getMyFriends() {
    return this.friends;
  }
}
