"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------------------------------------------------------------------------------------------
var core_1 = require("@angular/core");
var index_common_1 = require("./index-common");
var style_properties_1 = require("tns-core-modules/ui/styling/style-properties");
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
var PageView = (function (_super) {
    __extends(PageView, _super);
    //------------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------
    function PageView() {
        var _this = _super.call(this) || this;
        //------------------------------------------------------------------------------------------------------
        _this._isDirty = true;
        return _this;
    }
    //------------------------------------------------------------------------------------------------------
    PageView.prototype.createNativeView = function () {
        this.nativeView = new DKCarouselView(CGRectMake(0, 0, Platform.screen.mainScreen.widthDIPs, 0));
        return this.nativeView;
    };
    //------------------------------------------------------------------------------------------------------
    PageView.prototype.initNativeView = function () {
    };
    //------------------------------------------------------------------------------------------------------
    PageView.prototype.disposeNativeView = function () {
    };
    //------------------------------------------------------------------------------------------------------
    PageView.prototype.ngAfterViewInit = function () {
        this.refresh();
    };
    //------------------------------------------------------------------------------------------------------
    PageView.prototype.refresh = function () {
        if (!this.nativeView) {
            this._isDirty = true;
            return;
        }
        this._isDirty = false;
        this.nativeView.setItems(new NSMutableArray());
        /*if (types.isNullOrUndefined(this.items) || !types.isNumber(this.items.length)) {*/
        var nsArray = new NSMutableArray();
        this.eachChildView(function (view1) {
            if (view1 instanceof index_common_1.PageViewItem) {
                view1.width = style_properties_1.PercentLength.parse("100%");
                view1.height = style_properties_1.PercentLength.parse("100%");
                var dkCarouselViewItem1 = new DKCarouselViewItem();
                dkCarouselViewItem1.view = view1.ios;
                nsArray.addObject(dkCarouselViewItem1);
            }
            return true;
        });
        this.nativeView.setItems(nsArray);
        /*}
        else{
            this.removeChildren();
            let nsArray = new NSMutableArray();
            let length = this.items.length;
            for (let i = 0; i < length; i++) {
                let viewToAdd = !types.isNullOrUndefined(this.itemTemplate) ? builder.parse(this.itemTemplate, this) : null;
                if(!viewToAdd) continue;
                let dataItem = this._getDataItem(i);
                viewToAdd.bindingContext = dataItem;
                this.addChild(viewToAdd);
            }
            this.eachChildView( (view) => {
                if (view instanceof PageViewItem) {
                    view.width = PercentLength.parse("100%");
                    view.height = PercentLength.parse("100%");
                    let dkCarouselViewItem = new DKCarouselViewItem();
                    dkCarouselViewItem.view = view.ios;
                    nsArray.addObject(dkCarouselViewItem);
                }
                return true;
            });
            this.nativeView.setItems(nsArray);
        }*/
    };
    return PageView;
}(index_common_1.PageViewCommon));
PageView = __decorate([
    core_1.Component({
        selector: "PageView",
        template: "<Label text=\"no data\"></Label>"
    }),
    __metadata("design:paramtypes", [])
], PageView);
exports.PageView = PageView;
