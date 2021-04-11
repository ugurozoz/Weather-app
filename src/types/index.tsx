export interface forecastValues {
  day: string;
  image: string;
  temperatureMax: string;
  temperatureMin: string;
}

export interface location {
  latt_long: string;
  location_type: string;
  title: string;
  woeid: number;
  loading: boolean;
}

export interface Weather {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

export interface WeatherState {
  temperature: number;
  situation: string;
  nextFiveDays: Weather[];
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  humidity: number;
  visibility: number;
  airPressure: number;
  loading: boolean;
  weatherDate: string;
}

export interface Settings {  
  weatherUnit: 'F' | 'C';
  distanceUnit: 'miles' | 'Kilometers';
  speedUnit: 'mph' | 'kmph';
}
