import { Component, OnInit } from '@angular/core';
import { teams } from 'src/app/data/matches';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamstab = teams;
  constructor() { }

  ngOnInit() {
  }

}
