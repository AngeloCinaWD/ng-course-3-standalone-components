import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiUrl: string;
  courseCacheSize: number;
}

export const APP_CONFIG: AppConfig = {
  apiUrl: "http://localhost:9200",
  courseCacheSize: 50,
};

export const CONFIG_TOKEN = new InjectionToken<AppConfig>("CONFIG_TOKEN", {
  providedIn: "root",
  factory: () => APP_CONFIG,
});
