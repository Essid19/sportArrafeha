import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Router } from "@angular/router";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.css"],
})
export class AddPlayerComponent implements OnInit {
  player = {};
  teamlist;
  teamId;
  addPlayerForm: FormGroup;
  addplayer = "Add Player";
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private tservice: TeamService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.addPlayerForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      position: ["", [Validators.required]],
    });
    this.tservice.getAllTeam().subscribe((res) => {
      this.teamlist = res.teams;
    });
  }
  addPlayer() {
    alert("login clicked");
    this.addPlayerForm.value.teamId = this.teamId;
    console.log("here object from FE", this.addPlayerForm.value);
    this.playerService.addPlayer(this.addPlayerForm.value).subscribe((data) => {
      console.log("here msg from BE", data.isAdded);
      this.router.navigate(["admin"]);
    });
  }
  getTeamId(event) {
    console.log("here team id", event.target.value);
    this.teamId = event.target.value;
  }
}
