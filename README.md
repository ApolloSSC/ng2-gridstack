ng2-gridstack
=============

A gridstack component for Angular2. Based on [gridstack.js](https://github.com/troolee/gridstack.js).

Usage
=====
## Requirements

* [gridstack.js](https://github.com/troolee/gridstack.js#usage)
* [@angular/core](https://www.npmjs.com/package/@angular/core)

## Install

[![NPM version](https://img.shields.io/npm/v/ng2-gridstack.svg)](https://www.npmjs.com/package/ng2-gridstack)

```bash
$ npm install ng2-gridstack
```
## Basic Usage

Using SystemJs :

```js
System.config({
    paths: {
        (...)
    },
    map: {
        'ng2-gridstack': 'npm:ng2-gridstack',
		(...)
    },
    packages: {
        app: {
        'ng2-gridstack': {
            main: './ng2-gridstack.js',
            defaultExtension: 'js'
        },
		(...)
    }
```

Import the component in your module

```ts
import { GridStackComponent, GridStackItemDirective } from 'ng2-gridstack'
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

#### First mode
```html
<gridStack w="12" animate="true" 
	buttonClass="btn btn-default" 
	allowEditing="true" 
	[options]="gridstackOptions"
	[items]="panel.Cards" 
	(addFunction)="addCard()" 
	(saveFunction)="save($event)" 
	(deleteFunction)="deletePanel()" 
	(deleteCardFunc)="deleteCard($event)"
    [addButtonText]="'Add card'"
    [saveButtonText]="'Save panel'"
    [deleteButtonText]="'Delete panel'"
    [deleteCardButtonText]="'Delete card'">
</gridStack>
```
#### Second mode
```html    
<gridStack w="12" animate="true">
	<div gridStackItem
		[x]="0" [y]="0" [h]="3" [w]="3" [customid]="10">
		<h1>Hello</h1>
	</div>
</gridStack>
```

### Inputs/Outputs
* *w* : number of items that can fit in a row.
* *animate* : grid animation on/off.
* *options* (optional) : an associative array of gridstack [options](https://github.com/troolee/gridstack.js/tree/master/doc#options).
* *allowEditing* : allow the edition of items on double click (false by default).
* *items* (optional) : an array of objects that have the following properties.
	* *x*
	* *y*
	* *width*
	* *height*
	* *customid*
	* *content* (optional)

* *addButtonText* (optional) : If present, will display a button that triggers addFunction.
* *saveButtonText* (optional) : If present, will display a button that triggers saveFunction.
* *deleteButtonText* (optional) : If present, will display a button that triggers deleteFunction.
* *deleteCardButtonText* (optional) : If present, will display a button that triggers deleteCardFunc.

* *addFunction* (optional) : this function should add a new item to the array passed in the *items* parameter.
* *saveFunction* (optional) : calls the specified function with the updated array of items as parameter, so that you can save it.
* *deleteFunction* (optional) : function to call when deleting the whole panel.
* *deleteCardFunc* (optional) : function to call when a card is deleted (its *customid* is passed as a parameter).

