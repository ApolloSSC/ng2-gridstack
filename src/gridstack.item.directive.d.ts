import { ElementRef, Renderer } from '@angular/core';
export declare class GridStackItemDirective {
    private el;
    private renderer;
    x: number;
    y: number;
    w: number;
    h: number;
    customid: string;
    content: string;
    minWidth: number;
    canResize: boolean;
    private toMake;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnChanges(): void;
}
