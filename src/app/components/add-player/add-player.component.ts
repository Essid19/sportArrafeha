import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.css"],
})
export class AddPlayerComponent implements OnInit {
  player = {};
  addPlayerForm = FormGroup;
  addplayer = "Add Player";
  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {}
  addPlayer() {
    alert("login clicked");
    console.log("here object", this.player);
    this.playerService.addPlayer(this.player).subscribe();
    this.router.navigate(["admin"]);
  }
}
