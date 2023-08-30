import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { players } from "src/app/data/matches";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-edit-player",
  templateUrl: "./edit-player.component.html",
  styleUrls: ["./edit-player.component.css"],
})
export class EditPlayerComponent implements OnInit {
  id: any;
  obj = {};
  editPlayerForm: FormGroup;
  constructor(private playerservice: PlayerService, private router: Router) {}

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("idplayer"));
    this.playerservice.getPlayerById(this.id).subscribe((e) => {
      this.obj = e.player;
    });
  }
  update() {
    console.log("here update  obj ", this.obj);
    this.playerservice.updatePlayer(this.obj).subscribe((e) => {
      this.router.navigate(["admin"]);
    });
  }
}
