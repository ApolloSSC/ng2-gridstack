"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var GridStackComponent = (function () {
    function GridStackComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonClass = "";
        this.allowEditing = false;
        this.addFunction = new core_1.EventEmitter();
        this.saveFunction = new core_1.EventEmitter();
        this.deleteFunction = new core_1.EventEmitter();
        this.deleteCardFunc = new core_1.EventEmitter();
        this.isStart = true;
        this.editing = false;
    }
    GridStackComponent.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        $(nativeElement).find(".grid-stack").gridstack(this.options);
    };
    GridStackComponent.prototype.onItemClick = function () {
        var grid = $('.grid-stack').data('gridstack');
        var element = $(event.target);
        if (element.hasClass("grid-stack-item-content")) {
            if (!element.hasClass("selected-item")) {
                $(".grid-stack-item-content").removeClass("selected-item");
                element.addClass("selected-item");
                $(".card-management").show();
                if (this.allowEditing) {
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
    };
    GridStackComponent.prototype.addItem = function () {
        if (this.addFunction) {
            this.addFunction.emit();
        }
    };
    GridStackComponent.prototype.deletePanel = function () {
        if (this.deleteFunction) {
            this.deleteFunction.emit();
        }
    };
    GridStackComponent.prototype.deleteCard = function () {
        var selected = $(this.el.nativeElement).find(".selected-item").parent();
        if (this.deleteCardFunc) {
            this.deleteCardFunc.emit(selected.attr("data-custom-id"));
            $('.grid-stack').data('gridstack').removeWidget(selected);
            $(".grid-stack-item-content").removeClass("selected-item");
            $(".card-management").hide();
        }
    };
    GridStackComponent.prototype.savePanel = function () {
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
    };
    return GridStackComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GridStackComponent.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackComponent.prototype, "animate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GridStackComponent.prototype, "buttonClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridStackComponent.prototype, "allowEditing", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GridStackComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridStackComponent.prototype, "addFunction", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridStackComponent.prototype, "saveFunction", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridStackComponent.prototype, "deleteFunction", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridStackComponent.prototype, "deleteCardFunc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GridStackComponent.prototype, "items", void 0);
GridStackComponent = __decorate([
    core_1.Component({
        selector: 'gridStack',
        templateUrl: 'gridstack.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], GridStackComponent);
exports.GridStackComponent = GridStackComponent;
//# sourceMappingURL=gridstack.component.js.map