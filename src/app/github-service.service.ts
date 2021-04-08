import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }
  
  // github profile 
 
  public getProfile(searchQuery:any):Observable<any>{

    //let dataURL = `https://api.github.com/users/${searchQuery}?access_token=${environment.apiKey}`;//
    let dataURL = `https://api.github.com/users/${searchQuery}`;
    return this.httpClient.get<any>(dataURL)
  
  }
  
  // get  repos
  public getRepos(searchQuery:any):Observable<any>{

   // let dataURL = `https://api.github.com/users/${searchQuery}/repos?access_token=${environment.apiKey}`;//
    let dataURL = `https://api.github.com/users/${searchQuery}/repos`;
    return this.httpClient.get<any> (dataURL)
     
  }
  
   
    
}



