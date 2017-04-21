import { Component, EventEmitter, OnInit, Input, Output, ElementRef, Renderer } from '@angular/core';
declare var $: any; // JQuery
declare var _: any; // lodash

require('./gridstack.component.html')

@Component({
    selector: 'gridStack',
    template: `<div>
    < button * ngIf="addFunction"(click)="addItem()" class='{{buttonClass}}' > Ajouter une carte< /button>
    < button * ngIf="saveFunction"(click)="savePanel()" class='btn-gridstack-save {{buttonClass}}' > Enregistrer le panneau< /button>
    < button * ngIf="deleteFunction"(click)="deletePanel()" class='btn-gridstack-del {{buttonClass}}' > Supprimer le panneau< /button>
    < span class="card-management" hidden>
    <button *ngIf="deleteCardFunc"(click)="deleteCard()"  class='btn-gridstack-del-card {{buttonClass}}' > Supprimer la carte< /button>
    < /span>
    < /div>
    < br />
    <div class="grid-stack" [attr.data - gs - width] = "w"[attr.data - gs - animate] = "animate" >
    <ng-content > </ng-content>
    < div gridStackItem
            spellcheck= "false"
    * ngFor="let item of items"
            [x] = "item.X"[y] = "item.Y"[h] = "item.Height"[w] = "item.Width"[customid] = "item.CardId"[content] = "item.Content"
        (dblclick) = "onItemClick()" >
        </div>
    </div>`
})

export class GridStackComponent{

    @Input() w: number;
    @Input() animate: boolean;
    @Input() buttonClass: string = "";
    @Input() allowEditing: boolean = false;
    @Input() options: any[];
    @Output() addFunction = new EventEmitter<boolean>();
    @Output() saveFunction = new EventEmitter<any>();
    @Output() deleteFunction = new EventEmitter<boolean>();
    @Output() deleteCardFunc = new EventEmitter<number>();
    @Input() items: any[];
    private isStart = true;
    private editing = false;

    constructor(private el: ElementRef,
        private renderer: Renderer) {
    }

    ngAfterViewInit() {
        let nativeElement = this.el.nativeElement; 

        $(nativeElement).find(".grid-stack").gridstack(this.options);

    }

    onItemClick()
    {
        var grid = $('.grid-stack').data('gridstack');
        var element = $(event.target);
        if (element.hasClass("grid-stack-item-content")) {
            if (!element.hasClass("selected-item")) {
                $(".grid-stack-item-content").removeClass("selected-item");
                element.addClass("selected-item");
                $(".card-management").show();
                if (this.allowEditing)
                {
                    this.editing = true;
                    element.attr("contenteditable", "true");
                    $('.grid-stack').data('gridstack').disable();
                }
            }
            else {
                element.removeClass("selected-item");
                $(".card-management").hide();
                $('.grid-stack').data('gridstack').enable();
                element.attr("contenteditable", "false");
                this.editing = false;
            }
        }
    }

    addItem() {
        if (this.addFunction) {
            this.addFunction.emit();
        }
    }

    deletePanel() {
        if (this.deleteFunction) {
            this.deleteFunction.emit();
        }
    }

    deleteCard() {
        var selected = $(this.el.nativeElement).find(".selected-item").parent();
        if (this.deleteCardFunc) {
            this.deleteCardFunc.emit(selected.attr("data-custom-id"));
            $('.grid-stack').data('gridstack').removeWidget(selected);
            $(".grid-stack-item-content").removeClass("selected-item");
            $(".card-management").hide();
        }
    }

    savePanel() {
        if (this.saveFunction) {
            //Get cards from view
            var jsonItems = _.map($('.grid-stack .grid-stack-item:visible'), function (el) {
                el = $(el);
                var node = el.data('_gridstack_node');
                return {
                    customid: el.attr('data-custom-id'),
                    x: node.x,
                    y: node.y,
                    width: node.width,
                    height: node.height,
                    content: el[0].firstChild.outerText
                };
            });
            this.saveFunction.emit(jsonItems);
        }
    }
}