import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Propaga la configuración principal
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), 
    provideHttpClient(), 
    ...appConfig.providers 
  ]
}).catch((err) => console.error(err));
