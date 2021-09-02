import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _url: string =
    'https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=';

  constructor(private http: HttpClient) {}

  getWeather(date: string) {
    return this.http.get(this._url + date);
  }
}
