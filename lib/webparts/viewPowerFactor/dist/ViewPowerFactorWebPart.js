"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_property_pane_1 = require("@microsoft/sp-property-pane");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("ViewPowerFactorWebPartStrings");
var ViewPowerFactor_1 = require("./components/ViewPowerFactor");
var ViewPowerFactorWebPart = /** @class */ (function (_super) {
    __extends(ViewPowerFactorWebPart, _super);
    function ViewPowerFactorWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewPowerFactorWebPart.prototype.render = function () {
        var element = React.createElement(ViewPowerFactor_1["default"], {
            description: this.properties.description,
            siteurl: this.context.pageContext.web.absoluteUrl,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    ViewPowerFactorWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ViewPowerFactorWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    ViewPowerFactorWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_property_pane_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ViewPowerFactorWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports["default"] = ViewPowerFactorWebPart;
