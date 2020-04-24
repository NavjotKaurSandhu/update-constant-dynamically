import { Component } from '@angular/core';
import { userConst } from './app-constant';

export class TestPageConstants {
   static SuccessMessage = (count) => { return `You have created ${count} users`};
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   constantUIBind: typeof TestPageConstants;
   count = 10;
   userData: any;

   constructor() {
       this.constantUIBind = TestPageConstants;
       this.userData = userConst.count(200);
   }
}
