import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../../common-service/common-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: any;
  user: any;
  userData!: boolean;
  token!: string;
  // Subscription
  sub = new Subscription();
  constructor(
    private http: HttpClient,
    private router: Router,
    private spin: NgxSpinnerService,
    private cs: CommonServiceService,
  ) {
    this.userData = true;
  }

  get isLoggedIn() {
    return sessionStorage.getItem("user") ? true : false;
  }
  get isMenu() {
    return sessionStorage.getItem("menu") ? true : false;
  }
  get MenuData() {
    return JSON.parse(sessionStorage.getItem("menu") as '[]')
  }
  isuserdata() {
    if (!this.isLoggedIn)
      this.logout();

  }
  isMenudata() {
    if (!this.isMenu)
      this.logout();
  }


logout(){
  this.router.navigate(['']);
  sessionStorage.clear();
 }

ngOnDestroy(){
  
}

  login(user : any) {
    sessionStorage.clear();
    localStorage.clear();
    return new Promise((resolve, reject) => {
      this.spin.show();
      this.sub.add(
        this.http.get<any>(`/overc-idmaster-service/login?userID=${user.userName}&password=${user.password}`).subscribe({next: (res) =>{
          sessionStorage.setItem("user", JSON.stringify(res));
          this.router.navigate(['/main/airport/preAlertManifest']);
          this.spin.hide();
        }, error: (err) => {
          this.spin.hide();
          this.cs.commonerrorNew(err);
        }})
      );
    });
  }

 
  refreshToken(apiName: any) {
    return this.http.post<any>('/auth-token', {
      clientId: "pixeltrice",
      clientSecretKey: "pixeltrice-secret-key",
      grantType: "password",
      oauthPassword: "overc",
      oauthUserName: "overc",
      apiName: apiName
    });
  }
  public saveToken(token: any, apiName: string): void {
    window.sessionStorage.removeItem(apiName);
    window.sessionStorage.setItem(apiName, token);
  }
  public saveTokenfrom(token: any, apiName: string): void {
    window.sessionStorage.removeItem(apiName);
    window.sessionStorage.setItem(apiName, token.access_token);
  }

  public getToken(apiName: string): string | null {
    return window.sessionStorage.getItem(apiName);
  }
  get userID() {
    if (sessionStorage.getItem("user"))
     return JSON.parse(sessionStorage.getItem("user") as '{}').userId;
  }
  get userName() {
    if (sessionStorage.getItem("user"))
     return JSON.parse(sessionStorage.getItem("user") as '{}').userName;
  }
  get companyId() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user") as '{}').companyId;
  }
  get companyName() {
    if (sessionStorage.getItem("user"))
      return JSON.parse(sessionStorage.getItem("user") as '{}').companyIdAndDescription;
  }
  get languageId() {
    if (sessionStorage.getItem("user"))
    return JSON.parse(sessionStorage.getItem("user") as '{}').languageId;
  }
  get partnerId() {
    if (sessionStorage.getItem("user"))
     return JSON.parse(sessionStorage.getItem("user") as '{}').partnerId;
  }
}
