"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------------------------
var core_1 = require("@angular/core");
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
var TemplateWrapper = (function () {
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    //------------------------------------------------------------------------------------------------------
    TemplateWrapper.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    };
    //------------------------------------------------------------------------------------------------------
    TemplateWrapper.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    return TemplateWrapper;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TemplateWrapper.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TemplateWrapper.prototype, "index", void 0);
__decorate([
    core_1.Input('hTemplateWrapper'),
    __metadata("design:type", core_1.TemplateRef)
], TemplateWrapper.prototype, "templateRef", void 0);
TemplateWrapper = __decorate([
    core_1.Directive({
        selector: '[hTemplateWrapper]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], TemplateWrapper);
exports.TemplateWrapper = TemplateWrapper;
//----------------------------------------------------------------------------------------------------------
var HalitosisTemplate = (function () {
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
    function HalitosisTemplate(template) {
        this.template = template;
    }
    return HalitosisTemplate;
}());
__decorate([
    core_1.Input('hTemplate'),
    __metadata("design:type", String)
], HalitosisTemplate.prototype, "name", void 0);
HalitosisTemplate = __decorate([
    core_1.Directive({
        selector: '[hTemplate]',
        host: {}
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef])
], HalitosisTemplate
//----------------------------------------------------------------------------------------------------------
);
exports.HalitosisTemplate = HalitosisTemplate;
