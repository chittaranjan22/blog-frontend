import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent {

  post:any;
  constructor(private service:PostapiService,private router:Router)
  {
    

  }
  postSearch(title:any)
  {
    alert();
    this.service.getPostByTitle(title).subscribe(
      response => {
        console.log(response);
        this.post=response;
      }
    );
  }
}
