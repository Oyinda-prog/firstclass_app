import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routing } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routing), provideClientHydration()]
};
