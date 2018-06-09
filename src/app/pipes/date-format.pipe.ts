import {Pipe, PipeTransform} from '@angular/core';
import {LocalizationService} from '../services/localization.service';
import DateTimeFormat = Intl.DateTimeFormat;

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  dateFormatter: DateTimeFormat;

  constructor(private localizationService: LocalizationService) {
    this.dateFormatter = new DateTimeFormat(localizationService.currentLanguage);
    localizationService.onChange()
  }

  transform(date: Date): string {
    return this.dateFormatter.format(date);
  }

  updateFormatter(code: string) {
    this.dateFormatter = new DateTimeFormat(this.localizationService.currentLanguage);
  }
}
