export interface forecastValues {
  day: string;
  image: string;
  temperatureMax: string;
  temperatureMin: string;
}

export interface location {
  latt_long:string;
  location_type:string;
  title:string;
  woeid:number;
}


export interface Weather {
  consolidated_weather: [];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: {};
  sources: [];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export interface WeatherState {
  temperature: string;
  situation: string;
  nextFiveDays: [];
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  humidity: number;
  visibility: number;
  airPressure: number;
  loading: boolean;
}
