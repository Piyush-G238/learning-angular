import { Component, OnInit } from '@angular/core';

import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  selectedUser: any

  ngOnInit(): void {
    const randomIndex = this.generateIndex()
      this.selectedUser = DUMMY_USERS[randomIndex]
  }

  // getter method
  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`
  }

  onSelectUser() {
    const randomIndex = this.generateIndex()
    this.selectedUser = DUMMY_USERS[randomIndex]
    console.log(this.selectedUser.name)
  }

  private generateIndex(): number {
    return Math.floor(Math.random() * DUMMY_USERS.length) + 1
  }
}
