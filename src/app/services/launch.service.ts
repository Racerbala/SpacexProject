import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    return this.http.get(`${environment.api_url}/launches?limit=100`).pipe(
      map((res: any[]) => {
        let data = res.map((el) => {
          return {
            image: el.links.mission_patch,
            missionName: el.mission_name,
            missionId: el.mission_id,
            launchYear: el.launch_year,
            launchSuccess: el.launch_success,
          };
        });
        return data;
      })
    );
  }
}
