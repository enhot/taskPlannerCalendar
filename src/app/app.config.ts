import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideHttpClient} from "@angular/common/http";

import { i18nConfig } from '../assets/i18n/i18n.config';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './shared/enviroment/enviroments';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {  provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CommonEffects } from './shared/store/common/common-effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ...i18nConfig,
    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStore(),
    provideEffects(
      [CommonEffects]
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })

]

};
