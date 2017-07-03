//----------------------------------------------------------------------------------------------------------
import {AfterViewInit, Component} from "@angular/core";
import {PageViewCommon, PageViewItem} from "./index-common";
import * as types from "utils/types";
import {PercentLength} from "tns-core-modules/ui/styling/style-properties";
//----------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
declare let DKCarouselView: any;
declare let DKCarouselViewItem: any;
declare let CGRectMake: any;
declare let Platform: any;
declare let NSMutableArray: any;
//----------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
@Component({
    selector: "PageView",
    template: `<Label text="no data"></Label>`
})
export class PageView extends PageViewCommon implements AfterViewInit
//----------------------------------------------------------------------------------------------------------
{
    //------------------------------------------------------------------------------------------------------
    protected _isDirty = true;
    //------------------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------------------
    constructor()
    //------------------------------------------------------------------------------------------------------
    {
        super();
    }


    //------------------------------------------------------------------------------------------------------
    createNativeView()
    //------------------------------------------------------------------------------------------------------
    {
        this.nativeView = new DKCarouselView(CGRectMake(0, 0, Platform.screen.mainScreen.widthDIPs, 0));
        return this.nativeView;
    }


    //------------------------------------------------------------------------------------------------------
    initNativeView()
    //------------------------------------------------------------------------------------------------------
    {

    }


    //------------------------------------------------------------------------------------------------------
    disposeNativeView()
    //------------------------------------------------------------------------------------------------------
    {
    }


    //------------------------------------------------------------------------------------------------------
    ngAfterViewInit()
    //------------------------------------------------------------------------------------------------------
    {
        this.refresh();
    }


    //------------------------------------------------------------------------------------------------------
    refresh()
    //------------------------------------------------------------------------------------------------------
    {
        if (/*!this.isLoaded ||*/ !this.nativeView) {
            this._isDirty = true;
            return;
        }
        this._isDirty = false;
        this.nativeView.setItems(new NSMutableArray());
        /*if (types.isNullOrUndefined(this.items) || !types.isNumber(this.items.length)) {*/
            let nsArray = new NSMutableArray();
            this.eachChildView( (view1) => {
                if (view1 instanceof PageViewItem) {
                    view1.width = PercentLength.parse("100%");
                    view1.height = PercentLength.parse("100%");
                    let dkCarouselViewItem1 = new DKCarouselViewItem();
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
    }
}