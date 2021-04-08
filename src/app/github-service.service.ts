import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }
  
  // github profile 
 
  public getProfile(searchQuery:any):Observable<any>{

    let dataURL = 'https://api.github.com/users/${searchQuery}?access_token=${environment.API-KEY}';
    return this.httpClient.get<any>(dataURL)
  
  }
  
  // get  repos
  public getRepos(searchQuery:any):Observable<any>{

    let dataURL = 'https://api.github.com/users/${searchQuery}/repos?access_token=${environment.API-KEY}';
    return this.httpClient.get<any> (dataURL)
     
  }
  
   
    
}



