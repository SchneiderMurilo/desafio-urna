import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    AppRoutingModule,
  ]
};
