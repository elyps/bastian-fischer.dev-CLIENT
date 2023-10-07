// cookie-popup.component.ts
import { Component } from '@angular/core';

declare var $: any;

/*   declare const $: {
    (selector: string): any;
    modal: {
      (action: string): any;
    };
  }; */

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
})
export class CookiePopupComponent {
  acceptCookies() {
    // const cookieData = {
    //   cookies: true,
    // };

    // localStorage.setItem('cookies', JSON.stringify(cookieData));
    localStorage.setItem('cookies', 'true');

    $('.modal').modal('hide');
  }
}
