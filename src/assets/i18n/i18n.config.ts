import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

export const i18nConfig = [
        provideTranslateService({
      lang: 'en', // Язык для использования
      fallbackLang: 'en', // Язык, который следует использовать, если перевод на текущий язык не найден.
      loader: provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json'
      })
    }),
]