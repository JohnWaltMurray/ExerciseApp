import { Component, OnInit } from '@angular/core';

declare var googleplus: any;
declare var facebook: any;
declare var window: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Pictures: string[] = []

  constructor() { }

  ngOnInit() {
  }

  fblogin(){
    facebook.login((credentials:any)=>{
        facebook.api("/me?fields=email,name,picture", (response: any)=> {
            console.log(response);
        })
        facebook.api("/me/photos", (response: any)=> {
            for(var img of response.data){
                facebook.api(`/${img.id}?fields=images`, (imgOb: any)=> {
                    this.Pictures.push( imgOb.images[0].source );
                    console.log(imgOb);
                })
            }
            console.log(response);
        })
    }, { scope: "email,user_photos" })
}

googlelogin(){
    googleplus.hint({
        supportedAuthMethods: [
        "https://accounts.google.com"
        ],
        supportedIdTokenProviders: [
            {
                uri: "https://accounts.google.com",
                clientId: "127811445743-8uo1b7vbretscar7t4kmuqiu8mhq04a5.apps.googleusercontent.com"
            }
        ]
    }).then((credentials: any) =>{
        //this._Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
        console.log(credentials);
    })
}
}
