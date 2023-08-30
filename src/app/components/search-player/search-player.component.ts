import { players } from "src/app/data/matches";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PlayerSearchService } from "src/app/services/player-search.service";

@Component({
  selector: "app-search-player",
  templateUrl: "./search-player.component.html",
  styleUrls: ["./search-player.component.css"],
})
export class SearchPlayerComponent implements OnInit {
  id: any;
  findedplayer;
  errorMsg;
  searchplayerform: FormGroup;
  constructor(private fb: FormBuilder, private sc: PlayerSearchService) {}

  ngOnInit() {
    this.searchplayerform = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
    });
  }
  search() {
    this.sc.getPlayers(this.searchplayerform.value).subscribe((e) => {
      console.log(e.player);
      this.findedplayer = e.player;
    });
    if (!this.findedplayer) {
      this.errorMsg = "notfound";
    }
  }
}
