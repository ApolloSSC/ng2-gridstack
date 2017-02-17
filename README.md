ng2-gridstack
=============

A gridstack component for Angular2.
Based on [gridstack.js](https://github.com/troolee/gridstack.js).

Usage
=====
##Requirements

* [gridstack.js](https://github.com/troolee/gridstack.js#usage) and its requirements
* [@angular/core](https://www.npmjs.com/package/@angular/core)

##Install

[![NPM version](https://img.shields.io/npm/v/ng2-gridstack.svg)](https://www.npmjs.com/package/ng2-gridstack)

```bash
$ npm install ng2-gridstack
```
##Basic Usage

Import the component in your module

```ts
import { GridStackComponent, GridStackItemDirective } from 'ng2-gridstack/ng2-gridstack'
(...)

@NgModule({
    imports: [
        (...)
    ],
    declarations: [
        GridStackComponent,
        GridStackItemDirective,
		(...)
    ],
    providers: [
		(...)
    ]
})
export class YourModule { }
```

[ng2-gridstack](https://github.com/troolee/ng2-gridstack) can be used in two ways, either by letting the component add the items for you, or by building your own items.
#First mode
```html
    <gridStack w="12" animate="true" buttonClass="btn btn-default" allowEditing="true"
              [items]="panel.Cards" (addFunction)="addCard()" (saveFunction)="save($event)" (deleteFunction)="deletePanel()" (deleteCardFunc)="deleteCard($event)">
    </gridStack>
```
#Second mode
```html    
<gridStack w="12" animate="true">
        <div gridStackItem
             [x]="0" [y]="0" [h]="3" [w]="3" [customid]="10">
            <h1>Hello</h1>
        </div>
</gridStack>
```