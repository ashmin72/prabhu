import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  EventEmitter,
  Output
} from '@angular/core';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  AuthService
} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  authSubscription: Subscription;
  @Output() sidenavToggle = new EventEmitter < void > ();
  constructor(private authService: AuthService) {}

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
