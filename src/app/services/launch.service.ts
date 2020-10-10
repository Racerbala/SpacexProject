import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { map, filter } from 'rxjs/operators';
import { FilterValues } from '../side-nav/side-nav.component';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    const url: string = `${environment.api_url}/launches?limit=100`;
    return this.getData(url);
  }

  getDataByFilter(data: FilterValues) {
    const url: string = `${environment.api_url}/launches?limit=100${(data.year ? '&launch_year=' : '')}${(data.year ? data.year : '')}${(data.landStatus !== undefined ? '&land_success=' : '')}${(data.landStatus !== undefined ? data.landStatus : '')}${(data.launchStatus !== undefined ? '&launch_success=' : '')}${(data.launchStatus !== undefined ? data.launchStatus : '')}`
    return this.getData(url);
  }

  getData(url: string) {
    console.log(url);
    return this.http.get(url).pipe(
      map((res: any[]) => {
        let data = res.map((el) => {
          return {
            image: el.links.mission_patch,
            missionName: el.mission_name,
            missionId: el.mission_id.join(),
            launchYear: el.launch_year,
            launchSuccess: el.launch_success,
          };
        });
        return data;
      })
    );
  }


}
