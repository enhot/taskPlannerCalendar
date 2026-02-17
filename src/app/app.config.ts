import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideHttpClient} from "@angular/common/http";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './shared/enviroment/enviroments';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {  provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideTranslateService } from '@ngx-translate/core';
import { CommonEffects } from './shared/store/common/common-effects';
import { commonFeature } from './shared/store/common/common-reducer';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { Elanguage } from '../assets/i18n/translations.enums';

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState(commonFeature),
		provideEffects(
			CommonEffects,
		),
    provideTranslateService({
      defaultLanguage:Elanguage.EN,
      useDefaultLang: true,
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    }),




]

};
