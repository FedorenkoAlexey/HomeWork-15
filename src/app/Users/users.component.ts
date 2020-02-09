import { Component, OnInit, Output } from "@angular/core";
import { User } from "../users";
import { UserService } from "./user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.html",
  styleUrls: ["./users.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  curColor = "";
  isActive: boolean = true;

  constructor(private userService: UserService) {}

  private getUsers(): void {
    this.users = this.userService.getUsers();
  }

  onShowUsers(): void {
    this.isActive = !this.isActive;
    // console.log(this.isActive);
  }

  ngOnInit() {
    this.getUsers();
    this.curColor = "green";
  }
}
