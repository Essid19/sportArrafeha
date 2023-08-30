import { Component, OnInit } from '@angular/core';
import { articles } from 'src/app/data/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  article = articles;
  constructor() { }

  ngOnInit() {
  }

}
