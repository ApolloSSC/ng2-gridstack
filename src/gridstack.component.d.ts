import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class GridStackComponent {
    private el;
    private renderer;
    w: number;
    animate: boolean;
    addFunction: EventEmitter<boolean>;
    saveFunction: EventEmitter<any>;
    deleteFunction: EventEmitter<boolean>;
    deleteCardFunc: EventEmitter<number>;
    items: any[];
    private isStart;
    private editing;
    constructor(el: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
    onItemClick(): void;
}
