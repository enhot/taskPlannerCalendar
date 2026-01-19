import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideHttpClient} from "@angular/common/http";

import { i18nConfig } from '../assets/i18n/i18n.config';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './shared/enviroment/enviroments';
import { getAuth, provideAuth } from '@angular/fire/auth';


export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ...i18nConfig,

    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  
  ]

};
