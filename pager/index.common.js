"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------------------------
var core_1 = require("@angular/core");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
var PageViewItem = (function (_super) {
    __extends(PageViewItem, _super);
    //------------------------------------------------------------------------------------------------------
    function PageViewItem() {
        return _super.call(this) || this;
    }
    return PageViewItem;
}(stack_layout_1.StackLayout
//----------------------------------------------------------------------------------------------------------
));
PageViewItem = __decorate([
    core_1.Component({
        selector: "PageViewItem",
        template: "<Label text=\"no data\"></Label>"
    }),
    __metadata("design:paramtypes", [])
], PageViewItem);
exports.PageViewItem = PageViewItem;
//----------------------------------------------------------------------------------------------------------
var PageViewCommon = (function (_super) {
    __extends(PageViewCommon, _super);
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
    function PageViewCommon() {
        var _this = _super.call(this) || this;
        //------------------------------------------------------------------------------------------------------
        _this._items = [];
        return _this;
    }
    Object.defineProperty(PageViewCommon.prototype, "items", {
        //------------------------------------------------------------------------------------------------------
        get: function () {
            return this._items;
        },
        //------------------------------------------------------------------------------------------------------
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    return PageViewCommon;
}(absolute_layout_1.AbsoluteLayout
//----------------------------------------------------------------------------------------------------------
));
__decorate([
    core_1.Input('items'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], PageViewCommon.prototype, "items", null);
PageViewCommon = __decorate([
    core_1.Component({
        selector: "PageViewCommon",
        template: "<Label text=\"no data\"></Label>"
    }),
    __metadata("design:paramtypes", [])
], PageViewCommon);
exports.PageViewCommon = PageViewCommon;
