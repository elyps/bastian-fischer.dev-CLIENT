import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { EventBusService } from './shared/event-bus.service';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showActions = false;
  username?: string;

  eventBusSub?: Subscription;
  currentArticle: any;

  darkMode = false;

  constructor(
      private storageService: StorageService,
      private authService: AuthService,
      private eventBusService: EventBusService,
      private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Beim Initialisieren die Auswahl des Modus aus dem Local Storage abrufen
    this.darkMode = this.themeService.getDarkMode();

    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }


    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR') || this.roles.includes('ROLE_ADMIN');
      this.showActions = this.roles.includes('ROLE_MODERATOR') || this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.storageService.clean();
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        // window.location.reload();
        window.location.href = '/';
      },
      error: err => {
        console.log(err);
      }
    });
  }

/*  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }*/

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    // Den ausgewählten Modus in den Local Storage speichern
    this.themeService.setDarkMode(this.darkMode);
    // Hier können Sie Ihre Logik für das Aktivieren/Deaktivieren des Dark Modes implementieren
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

}
