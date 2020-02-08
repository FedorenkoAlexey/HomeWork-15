import { Component, OnInit } from "@angular/core";
import { User } from "../users";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.html",
  styleUrls: ["./users.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  // isActive: boolean = true;

  // onShowUsers(): void {
  //   this.isActive = !this.isActive;
  // }

  constructor(private userService: UserService) {}

  private getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUsers();
  }
}
