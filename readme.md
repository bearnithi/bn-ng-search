##DESCRIPTION
**BN NG Search** is an ANGULAR PIPE used to search recursively on a nested Array of objects dynamically.

##INSTALLATION
```sh
npm install bn-ng-search
```
##Import BnNgSearchModule
```javascript
import { BnNgSearchModule } from 'bn-ng-search';
//......
//.....
 @NgModule({
 
  imports: [
    BrowserModule,
    BnNgSearchModule, //import the BnNgSearchModule in the NgModule
    FormsModule    
  ],
 
})
  //...
```

##Add the BN NG Search Pipe in the template
```html
<input type="text" name="search" [(ngModel)]="key"/>
<bn-ng-tree [isSearch]="false" [items]="items | bnsearch: key: 'name': 'children'"></bn-ng-tree>
```
**bnsearch** is the pipe name, it accepts three parameters

1.key (string) = Search key (filter) which is a string used to search the array.
2.propertyName (string) = you can send the **object's property name** to be searched by the **key**. In the above example I used the property called 'name'. In your case, it may differ such as 'label','company' etc. based on your object
3.childrenPropertyName (string) = This is the name of the **children property in the object**. In the above example, the property name is 'children'. In your case it may differ such as 'child', 'branch' etc based on your object.

**Note**
For showing a nested tree in angular, use the the following npm
[BN NG TREE](https://www.npmjs.com/package/bn-ng-tree-lib)

##Sample Code

###app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BnNgSearchModule } from 'projects/bn-ng-search/src/public_api';
import { BnNgTreeModule } from 'bn-ng-tree-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BnNgTreeModule,
    BnNgSearchModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

###app.component.ts
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key: string;
  items: Array<any> = [{
    name: "John",
    age: "40",
    children: [{
      name: "Kate",
      age: "20",
      children: []
    }, {
      name: "Wilson",
      age: "17",
      children: []
    }]
  }, {
    name: "Roger",
    age: "42",
    children: [{
      name: "Paul",
      age: "12",
      children: []
    }, {
      name: "Duminy",
      age: "20",
      children: []
    }]
  }]
}
```

###app.component.html
```html
<input type="text" name="search" [(ngModel)]="key"/>
<bn-ng-tree [isSearch]="false" [items]="items | bnsearch: key: 'name': 'children'"></bn-ng-tree>
```

