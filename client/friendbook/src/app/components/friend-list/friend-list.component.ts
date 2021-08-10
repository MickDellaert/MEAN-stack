import {Component, OnInit} from '@angular/core';
import {FriendService} from "../../services/friend.service";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  public friends: any = [];

   /* {
    _id: '1',
    firstname: 'testfirstname1',
    lastname: 'testlastname1',
    email: 'testemail1',
    phonenumber: '12345678',
    language: 'css'
  }, {
    _id: '2',
    firstname: 'testfirstname2',
    lastname: 'testlastname2',
    email: 'testemail2',
    phonenumber: '12345678',
    language: 'css'
  }, {
    _id: '3',
    firstname: 'testfirstname3',
    lastname: 'testlastname3',
    email: 'testemail3',
    phonenumber: '12345678',
    language: 'css'
  };*/

  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {

    this.friendService.getMeanFriends().subscribe(friends => {this.friends = friends})
  }
}
