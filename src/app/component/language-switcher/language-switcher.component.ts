import {Component} from '@angular/core';
import {LanguageDescription} from '../../interfaces/localization-interfaces';
import {LocalizationService} from '../../services/localization.service';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  languageList: Array<LanguageDescription>;
  currentLanguage: string;

  constructor (private localizationService: LocalizationService) {
    this.languageList = localizationService.getLanguageList();
    this.currentLanguage = localizationService.currentLanguage;
  }

  onChange() {
   this.localizationService.setCurrentLocalization(this.currentLanguage);
  }
}
