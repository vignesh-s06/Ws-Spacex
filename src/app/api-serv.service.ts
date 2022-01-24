import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServService {
  constructor(private http: HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
  }
    fetchAll(year: string,LaunchS: boolean,LandS: boolean) {
      console.log(year,LaunchS,LandS);
      return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+LaunchS+"&land_success="+LandS+"&launch_year="+year);
 
    }
 
    fetchLanchSucess(succ: string | boolean) {
      console.log(succ,"Hi")
      return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+succ);
    }
    fetchLanchSucessAndLandSuccess(val: string | boolean){
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+val);
   
    }
  }


