// cookie-popup.component.ts
import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
})
export class CookiePopupComponent {

  toggleStatus: boolean = false;

  acceptCookies() {
    // this.cookieService.set('cookies', 'true');
    localStorage.setItem('must-have-cookies', 'true');
    localStorage.setItem('marketing-cookies', 'true');
    localStorage.setItem('analytics-cookies', 'true');
    $('.cookie-modal').modal('hide');
  }
}
