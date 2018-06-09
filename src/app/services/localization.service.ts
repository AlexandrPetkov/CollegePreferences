import {Injectable} from '@angular/core';
import {LanguageDescription} from '../interfaces/localization-interfaces';

@Injectable
export class LocalizationService {
  changeCallbacks = new Set();
  currentLanguage: string;
  private languages = new Map<string, LanguageDescription>([
    ['ru-RU', {
      title: 'Русский',
      code: 'ru-RU',
      isRtl: false
    }],
    ['en-US', {
      title: 'English (US)',
      code: 'en-US',
      isRtl: false
    }],
    ['en-GB', {
      title: 'English (GB)',
      code: 'en-GB',
      isRtl: false
    }]
  ]);

  getLanguageList(): Array<LanguageDescription> {
    return [...this.languages.values()];
  }

  getCurrentLocalization(): LanguageDescription {
    return this.languages.get(this.currentLanguage);
  }

  setCurrentLocalization(code: string) {
    if (this.languages.has(code)) {
      this.currentLanguage = code;
      for (let callback of this.changeCallbacks.values()) {
        callback(code);
      }
    }
  }

  onChange(callback: (code: string) => void) {
    this.changeCallbacks.add(callback);
  }
}
