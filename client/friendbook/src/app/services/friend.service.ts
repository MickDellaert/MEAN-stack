import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "../friend";

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  baseUrl: string = "http://localhost:9055/friends";

  constructor(private http: HttpClient) {
  }

  getMeanFriends(){
  return this.http.get(this.baseUrl);
  }

  addFriend(friend: Friend){
    // got stuck here because return was on a seperate line making the post request below it unreachable
    return this.http.post(this.baseUrl, friend)
  }
}
