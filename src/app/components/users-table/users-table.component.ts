import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.css"],
})
export class UsersTableComponent implements OnInit {
  usersTab;
  constructor(private x: UserService) {}

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.x.getAllUsers().subscribe((e) => {
      this.usersTab = e.users;
    });
  }
}
