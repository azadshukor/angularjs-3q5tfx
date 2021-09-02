import { Component } from '@angular/core';
import * as moment from 'moment';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';
import { concatMap, tap } from 'rxjs/operators';
import * as Highcharts from 'highcharts';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _weatherservice: WeatherService) {}

  startDate = '2021-02-03';

  style = {
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
  };

  modules = [ClientSideRowModelModule];

  columnDefs = [
    { headerName: 'Date', field: 'date', sortable: true },
    { headerName: 'Temperature low', field: 'temperatureLow' },
    { headerName: 'Temperature high', field: 'temperatureHigh' },
    { headerName: 'Humidity low', field: 'humidityLow' },
    { headerName: 'Humidity high', field: 'humidityHigh' },
  ];

  public rowData: any = [];

  myFunc() {
    this.rowData = [];

    const startDate = moment(this.startDate)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');
    const date1 = moment(startDate).format('YYYY-MM-DD');
    const date2 = moment(startDate).add(4, 'days').format('YYYY-MM-DD');
    const date3 = moment(startDate).add(8, 'days').format('YYYY-MM-DD');
    const date4 = moment(startDate).add(12, 'days').format('YYYY-MM-DD');
    const date5 = moment(startDate).add(16, 'days').format('YYYY-MM-DD');
    const date6 = moment(startDate).add(20, 'days').format('YYYY-MM-DD');
    const date7 = moment(startDate).add(24, 'days').format('YYYY-MM-DD');
    const date8 = moment(startDate).add(28, 'days').format('YYYY-MM-DD');

    this._weatherservice
      .getWeather(date1)
      .pipe(
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date2)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date3)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date4)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date5)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date6)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date7)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        }),
        concatMap((res) => this._weatherservice.getWeather(date8)),
        tap((data: any) => {
          const { items } = data;
          const { forecasts } = items[0];

          const innerRows = forecasts.map((forecast: any) => {
            return {
              date: forecast.date,
              temperatureLow: forecast.temperature.low,
              temperatureHigh: forecast.temperature.high,
              humidityLow: forecast.relative_humidity.low,
              humidityHigh: forecast.relative_humidity.high,
            };
          });

          this.rowData = [...this.rowData, ...innerRows];
        })
      )
      .subscribe((data: any) => {
        this.rowData.splice(30);
        this.rowData = [...this.rowData];

        const timeStamp = this.rowData.map((data: any) => data.date);

        const temperatureLow = this.rowData.map(
          (data: any) => data.temperatureLow
        );
        const temperatureHigh = this.rowData.map(
          (data: any) => data.temperatureHigh
        );

        const humidityLow = this.rowData.map((data: any) => data.humidityLow);
        const humidityHigh = this.rowData.map((data: any) => data.humidityHigh);

        this.chartOptionsTemp = {
          xAxis: {
            categories: timeStamp,
          },
          series: [
            {
              data: temperatureLow,
              type: 'line',
              name: 'Temperature low',
            },
            {
              data: temperatureHigh,
              type: 'line',
              name: 'Temperature high',
            },
          ],
        };

        this.chartOptionsHumidity = {
          xAxis: {
            categories: timeStamp,
          },
          series: [
            {
              data: humidityLow,
              type: 'line',
              name: 'Humidity low',
            },
            {
              data: humidityHigh,
              type: 'line',
              name: 'Humidity high',
            },
          ],
        };
      });
  }

  chartsTemp = Highcharts;

  chartOptionsTemp: Highcharts.Options = {
    title: {
      text: 'Temperature',
    },
    xAxis: {
      categories: [''],
    },
    yAxis: {
      title: {
        text: 'Temperature in Celcius',
      },
    },
    series: [
      {
        data: [''],
        type: 'line',
      },
      {
        data: [''],
        type: 'line',
      },
    ],
  };

  chartsHumidity = Highcharts;

  chartOptionsHumidity: Highcharts.Options = {
    title: {
      text: 'Humidity',
    },
    xAxis: {
      categories: [''],
    },
    yAxis: {
      title: {
        text: 'Humidity in RH',
      },
    },
    series: [
      {
        data: [''],
        type: 'line',
      },
      {
        data: [''],
        type: 'line',
      },
    ],
  };
}
