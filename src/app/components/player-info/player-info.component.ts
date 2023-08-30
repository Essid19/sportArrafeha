import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { players } from "src/app/data/matches";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-player-info",
  templateUrl: "./player-info.component.html",
  styleUrls: ["./player-info.component.css"],
})
export class PlayerInfoComponent implements OnInit {
  constructor(private x: ActivatedRoute, private service: PlayerService) {}
  id;
  obj;
  ngOnInit(): void {
    this.id = this.x.snapshot.paramMap.get("id");
    this.service.getPlayerById(this.id).subscribe((res): void => {
      this.obj = res.player;
    });
  }
}
