import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery:string | undefined; //used quickfix  from exisisting  error 
  public githubProfile:any;
  public githubRepos: any= [];

  constructor(private githubService:GithubServiceService) { }

  public searchUser(){
    // github profile 
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=> {
      this.githubProfile = data;
    })

    // github repos 

    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=> {
      this.githubRepos = data;
    })

  }




  ngOnInit(): void {
  }

}

