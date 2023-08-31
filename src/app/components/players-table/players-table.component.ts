import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { players } from "src/app/data/matches";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  playersstab;
  constructor(private router: Router, private service: PlayerService) {}

  ngOnInit() {
    this.service.getAllPlayer().subscribe((e) => {
      this.playersstab = e.players;
    });
  }
  display(x) {
    this.router.navigate([`playerinfo/${x}`]);
  }
  edit(x) {
    localStorage.setItem("idplayer", JSON.stringify(x));
    this.router.navigate(["editplayer"]);
  }
  delete(x) {
    alert(`player n ${x} delete`);
    this.service.deletePlayer(x).subscribe((e) => {
      this.service.getAllPlayer().subscribe((e) => {
        this.playersstab = e.players;
      });
    });
  }
}
