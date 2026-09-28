import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { assetUrl } from "./config/asset-url";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(assetUrl(`/assets/i18n/${lang}.json`));
    }
}
