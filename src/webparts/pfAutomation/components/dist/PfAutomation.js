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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var PfAutomation_module_scss_1 = require("./PfAutomation.module.scss");
var sp_loader_1 = require("@microsoft/sp-loader");
var $ = require("jquery");
var webs_1 = require("@pnp/sp/webs");
require("@pnp/sp/webs");
require("@pnp/sp/site-users/web");
$('html').css("visibility", "hidden");
setTimeout(function () {
    $('html').css("visibility", "visible");
    $('html').addClass('loading-in-progress');
}, 1200);
var PfAutomation = /** @class */ (function (_super) {
    __extends(PfAutomation, _super);
    function PfAutomation(props, state) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            location.href = _this.props.siteurl + "/SitePages/PF-Create.aspx";
        };
        sp_loader_1.SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
        _this.state = {
            UserPicture: "",
            UserName: "",
            Designation: ""
        };
        return _this;
    }
    PfAutomation.prototype.componentDidMount = function () {
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 1800);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 2500);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 3000);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 3500);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 4000);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 4000);
        this.GetCurrentUserName();
        this.GetProfile();
    };
    PfAutomation.prototype.GetProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newweb, groups, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR");
                        return [4 /*yield*/, newweb.currentUser.groups()];
                    case 1:
                        groups = _a.sent();
                        for (i = 0; i < groups.length; i++) {
                            if (groups[i].Title == "PFAdmin") {
                                $('#profile').hide();
                                $('#profileAdmin').show();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PfAutomation.prototype.GetCurrentUserName = function () {
        var reacthandler = this;
        $.ajax({
            url: reacthandler.props.siteurl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                //if(resultData.d.PictureUrl != "" || resultData.d.PictureUrl != "undefined" || resultData.d.PictureUrl != null || resultData.d.PictureUrl != "null"){
                var email = resultData.d.Email;
                reacthandler.setState({
                    UserPicture: reacthandler.props.siteurl + "/_layouts/15/userphoto.aspx?size=l&username=" + email
                });
                var Name = resultData.d.DisplayName;
                var Designation = resultData.d.Title;
                reacthandler.setState({
                    UserName: Name,
                    Designation: Designation
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    PfAutomation.prototype.render = function () {
        var reactHandler = this;
        return (React.createElement("div", { className: PfAutomation_module_scss_1["default"].pfAutomation },
            React.createElement("div", { className: "relative" }),
            React.createElement("header", { className: "clearfix" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "header-inner" },
                        React.createElement("div", { className: "logo" },
                            React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Taqeef.aspx" },
                                " ",
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png", alt: "logo" }),
                                "  ")),
                        React.createElement("div", { className: "cart relative" },
                            React.createElement("div", { className: "user-profile-details" },
                                React.createElement("div", { className: "user-profile-name" },
                                    "Welcome   ",
                                    React.createElement("p", null,
                                        " ",
                                        this.state.UserName,
                                        " ")),
                                React.createElement("img", { src: this.state.UserPicture, alt: "image" })),
                            React.createElement("div", { className: "login-details-man" },
                                React.createElement("div", { className: "login-details-man-inner" },
                                    React.createElement("div", { id: "profile" },
                                        React.createElement("ul", null,
                                            React.createElement("li", null,
                                                " ",
                                                React.createElement("a", { href: "https://login.microsoftonline.com/common/oauth2/logout" },
                                                    "  ",
                                                    React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true" }),
                                                    "Logout "),
                                                " "))),
                                    React.createElement("div", { id: "profileAdmin" },
                                        React.createElement("ul", null,
                                            React.createElement("li", null,
                                                " ",
                                                React.createElement("a", { href: "#", onClick: function () { return window.open("https://taqeef.sharepoint.com/sites/OPR/_layouts/15/people.aspx?MembershipGroupId=56", "_blank"); } },
                                                    " ",
                                                    React.createElement("i", { className: "fa fa-cog", "aria-hidden": "true" }),
                                                    "Settings "),
                                                " "),
                                            React.createElement("li", null,
                                                " ",
                                                React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Admin.aspx" },
                                                    " ",
                                                    React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" }),
                                                    "Admin "),
                                                " "),
                                            React.createElement("li", null,
                                                " ",
                                                React.createElement("a", { href: "https://login.microsoftonline.com/common/oauth2/logout" },
                                                    "  ",
                                                    React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true" }),
                                                    "Logout "),
                                                " "))))))))),
            React.createElement("div", { className: "banner home-banner relative" }),
            React.createElement("div", { className: "products-sections sec" },
                React.createElement("div", { className: "section-heade" },
                    React.createElement("h2", { className: "text-center" }, "  POWER FACTOR LETTERS\u200B  ")),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "taquuf-opertional-portal taquuf-opertional-portal-two" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "taquuf-opertional-inner" },
                                    React.createElement("a", { href: "#", "data-interception": 'off', onClick: function () { return reactHandler.handleClick(); } },
                                        "   ",
                                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/t2.png", alt: "image" }),
                                        React.createElement("h3", null, "  Create New Power Factor "),
                                        "   "))),
                            React.createElement("div", { className: "col-md-6" },
                                React.createElement("div", { className: "taquuf-opertional-inner" },
                                    React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx", "data-interception": 'off' },
                                        "  ",
                                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/t3.png", alt: "image" }),
                                        React.createElement("h3", null, "  View Power Factor Letters "),
                                        " ")))))))));
    };
    return PfAutomation;
}(React.Component));
exports["default"] = PfAutomation;
