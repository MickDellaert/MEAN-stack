import { Component, OnInit } from '@angular/core';
import {Friend} from "../../friend";
import {FriendService} from "../../services/friend.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  allFriends: any;

  // this array gets used in the select options dropdown in app.component.html
  languages = [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "PHP"}]

  // instantiate a new friendModel object using the Friend class defined in friend.ts
  friendModel = new Friend("", "", "", "", "",  "");


  constructor(private friendService: FriendService) {
  }

  ngOnInit(): any {
    this.getFriends('http://localhost:9055/friends').then();
  }

  // need to look into subscribe TODO
  submitDetails() {
    this.friendService.addFriend(this.friendModel).subscribe(
      data => console.log("it worked"),
      error => console.log("it didn't work"));

    // I added an empty then at the end to make the error 'Promise returned from getFriends is ignored' go away
    this.getFriends('http://localhost:9055/friends').then();
  }


  async getFriends(url: string): Promise<any> {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let data = await response.json();
    this.allFriends = data;

    return this.allFriends;
  }
}
