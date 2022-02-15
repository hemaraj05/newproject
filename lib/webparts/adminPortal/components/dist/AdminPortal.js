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
var AdminPortal_module_scss_1 = require("./AdminPortal.module.scss");
var sp_loader_1 = require("@microsoft/sp-loader");
require("@pnp/sp/profiles");
var $ = require("jquery");
require("@pnp/sp/webs");
var webs_1 = require("@pnp/sp/webs");
require("@pnp/sp/lists");
require("@pnp/sp/items");
require("@pnp/sp/webs");
require("@pnp/sp/site-users/web");
require("@pnp/sp/folders");
require("@pnp/sp/files");
$('html').css("visibility", "hidden");
setTimeout(function () {
    $('html').css("visibility", "visible");
    $('html').addClass('loading-in-progress');
}, 1200);
var AdminPortal = /** @class */ (function (_super) {
    __extends(AdminPortal, _super);
    function AdminPortal(props, state) {
        var _this = _super.call(this, props) || this;
        _this.ShowUpload = function () {
            $('#Upload').show();
            $('#DivMasterDataSection').hide();
        };
        _this.ShowBulk = function () {
            $('#DivMasterDataSection').show();
            $('#Upload').hide();
        };
        //const inputRef = React.useRef();
        //this.inputRef = React.createRef();
        _this.textInput = React.createRef();
        _this.OkBulkAlert = _this.OkBulkAlert.bind(_this);
        sp_loader_1.SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
        sp_loader_1.SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        _this.state =
            {
                UserPicture: "",
                UserName: "",
                Designation: "",
                Email: "",
                SelectedFileName: ""
            };
        return _this;
    }
    AdminPortal.prototype.componentDidMount = function () {
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
        this.GetCurrentUserName();
        $('#Upload').hide();
        $('#SucessBulk').hide();
        $('#AlertModel').hide();
        $('#Brand').val('');
        $('#Model').val('');
        $('#ModelName').val('');
        $('#RatedCapacity').val('');
        $('#IndoorInput').val('');
        $('#OutdoorInput').val('');
        $('#RatedPowerFactor').val('');
        $('#IndoorUnit').val('');
        $('#OutdoorUnit').val('');
        $('#Sucess').hide();
        $('#DivMasterDataSection').hide();
        $('#Upload').hide();
        $('#DivMasterDataSection').hide();
        $('#diverrormsgACMasterData').hide();
        $('#diverrormsgACMasterDataEmpty').hide();
    };
    AdminPortal.prototype.GetCurrentUserName = function () {
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
                var email = resultData.d.Email;
                reacthandler.setState({
                    UserName: Name,
                    Designation: Designation,
                    Email: email
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    AdminPortal.prototype.SuccessModel = function () {
        $('#AlertModel').hide();
    };
    AdminPortal.prototype.OkAlert = function () {
        $('#Sucess').hide();
        $('#Brand').val('');
        $('#Model').val('');
        $('#ModelName').val('');
        $('#RatedCapacity').val('');
        $('#IndoorInput').val('');
        $('#OutdoorInput').val('');
        $('#RatedPowerFactor').val('');
        $('#IndoorUnit').val('');
        $('#OutdoorUnit').val('');
        //$('#Upload').hide();
    };
    AdminPortal.prototype.OkBulkAlert = function () {
        $('#SucessBulk').hide();
        $('#Upload').hide();
        this.textInput.current.value = "";
    };
    /*public async CheckFile(FileName) {
  
      var files =FileName;
      var file = files[0];
      let status = true;
  
      if (status == true && file.files.length == 0) {
        $('#diverrormsgACMasterDataEmpty').hide();
        return status;
      }
    else {
      $('#diverrormsgACMasterDataEmpty').show();
      status = false;
      return status;
      }
    return status;
  
  }*/
    AdminPortal.prototype.UploadFiletoDocumentLibrary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, file, newweb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ValidateFile(this.state.SelectedFileName)) return [3 /*break*/, 2];
                        files = document.getElementById('ACMasterDataUpload').files;
                        file = files[0];
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.getFolderByServerRelativeUrl("/sites/OPR/ACModel/PFMasterData")
                                .files.add(file.name, file, false)
                                .then(function (data) {
                                $('#SucessBulk').show();
                                file.name.split('.').pop();
                            })["catch"](function (error) {
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AdminPortal.prototype.SaveUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newweb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ErrorValidation()) return [3 /*break*/, 2];
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.lists.getByTitle('PFMaster').items.add({
                                Title: $("#ddlBrand").val(),
                                NavCode: $("#Model").val().toString(),
                                Modelname: $("#ModelName").val(),
                                Rated_x0020_Capacity_Btu_h_T3: $("#RatedCapacity").val(),
                                IndoorPowerInput_kW_T3: $("#IndoorInput").val(),
                                OutdoorPowerInput_kW_T3: $("#OutdoorInput").val(),
                                Rated_Power_Factor_T3_x0020_: $("#RatedPowerFactor").val(),
                                IndoorUnit_V_Ph_Hz: $("#IndoorUnit").val().toString(),
                                OutdoorUnit_V_Ph_HZ_: $("#OutdoorUnit").val().toString()
                            }).then(function (i) {
                                $('#Sucess').show();
                                $('#Brand').val('');
                                $('#Model').val('');
                                $('#ModelName').val('');
                                $('#RatedCapacity').val('');
                                $('#IndoorInput').val('');
                                $('#OutdoorInput').val('');
                                $('#RatedPowerFactor').val('');
                                $('#IndoorUnit').val('');
                                $('#OutdoorUnit').val('');
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AdminPortal.prototype.ValidateFile = function (FileName) {
        this.setState({ SelectedFileName: FileName });
        //var File = document.getElementById('ACMasterDataUpload');
        //var UploadData=$('#ACMasterDataUpload').val();
        var status = true;
        var filename = FileName;
        //  var completeurl=item.FileRef;
        //console.log(completeurl);
        var Len = filename.length;
        var Dot = filename.lastIndexOf(".");
        //var type = Len - Dot;
        var res = filename.substring(Dot + 1, Len);
        if (status == true && Len == 0) {
            $('#diverrormsgACMasterDataEmpty').show();
            return status;
        }
        else {
            $('#diverrormsgACMasterDataEmpty').hide();
            if (status == true && res == "xlsx") {
                $('#diverrormsgACMasterData').hide();
                return status;
            }
            else {
                $('#diverrormsgACMasterData').show();
                status = false;
                return status;
            }
        }
        return status;
    };
    AdminPortal.prototype.ErrorValidation = function () {
        var status = true;
        if (status == true) {
            if ($('#Brand').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#errorbrand').focus();
                status = false;
            }
            if ($('#Model').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#Model').focus();
                status = false;
            }
            if ($('#ModelName').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#ModelName').focus();
                status = false;
            }
            if ($('#RatedCapacity').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#RatedCapacity').focus();
                status = false;
            }
            if ($('#IndoorInput').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#IndoorInput').focus();
                status = false;
            }
            if ($('#OutdoorInput').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#OutdoorInput').focus();
                status = false;
            }
            if ($('#RatedPowerFactor').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#RatedPowerFactor').focus();
                status = false;
            }
            if ($('#IndoorUnit').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#IndoorUnit').focus();
                status = false;
            }
            if ($('#OutdoorUnit').val() != '') {
                $('#AlertModel').hide();
            }
            else {
                $('#OutdoorUnit').focus();
                status = false;
            }
            if (status == false) {
                $('#AlertModel').show();
            }
        }
        return status;
    };
    AdminPortal.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: AdminPortal_module_scss_1["default"].adminPortal },
            React.createElement("div", { className: "relative" }),
            React.createElement("header", { className: "clearfix" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "header-inner" },
                        React.createElement("div", { className: "logo" },
                            React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PFAutomation.aspx" },
                                " ",
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png", alt: "logo" }),
                                "  ")),
                        React.createElement("div", { className: "cart relative" },
                            React.createElement("div", { className: "user-profile-details" },
                                React.createElement("div", { className: "user-profile-name" },
                                    "Welcome   ",
                                    React.createElement("p", null,
                                        "  ",
                                        this.state.UserName,
                                        " ")),
                                React.createElement("img", { src: this.state.UserPicture, alt: "image" })),
                            React.createElement("div", { className: "login-details-man" },
                                React.createElement("div", { className: "login-details-man-inner" },
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
                                            React.createElement("a", { href: "https://login.microsoftonline.com/common/oauth2/logout" },
                                                "  ",
                                                React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true" }),
                                                "Logout "),
                                            " ")))))))),
            React.createElement("div", { className: "banner admin-banner relative" },
                React.createElement("div", { className: "container" },
                    "   ",
                    React.createElement("h2", null, " Welcome Admin  "),
                    " ")),
            React.createElement("div", { className: "admin-section-wrap clearfix" },
                React.createElement("div", { className: "admi-setion-left" },
                    React.createElement("ul", null,
                        React.createElement("li", { className: "active" },
                            React.createElement("a", { href: "#", className: "clearfix" },
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/m1.png", alt: "image", className: "overimgs" }),
                                "   ",
                                React.createElement("img", { className: "hoverimgs", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/m1_h.svg", alt: "image" }),
                                "    ",
                                React.createElement("span", null, "Power Factor")),
                            React.createElement("ul", null,
                                React.createElement("li", { className: "liSparepartAdd" },
                                    " ",
                                    React.createElement("a", { href: "#", onClick: function () { return _this.ShowUpload(); } }, " Add "),
                                    " "),
                                React.createElement("li", { className: "liSparepartBulk" },
                                    " ",
                                    React.createElement("a", { href: "#", onClick: function () { return _this.ShowBulk(); } }, "  Bulk Upload "),
                                    " "))))),
                React.createElement("div", { className: "admin-section-right", id: "Upload" },
                    React.createElement("h2", null, " Add Power Factor "),
                    React.createElement("div", { className: "row DivNoteRequiredField ProdAdmin" },
                        React.createElement("div", { className: "col-md-12 text-right" },
                            React.createElement("i", { className: "fa fa-info-circle", "aria-hidden": "true" }),
                            "Please fill all the fields.")),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Brand "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("select", { id: "ddlBrand", className: "form-control" },
                                        React.createElement("option", null, " General"),
                                        React.createElement("option", null, "Midea"))))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Model "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "Model", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Model Name "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "ModelName", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Rated Capacity (Btu/h)(T3) "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "RatedCapacity", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Indoor Power Input (KW)T3  "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "IndoorInput", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Outdoor Power Input (KW)T3 "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "OutdoorInput", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Rated Power Factor (T3)"),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "RatedPowerFactor", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Indoor Unit (V/Ph/Hz) "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "IndoorUnit", className: "form-control", type: "text" })))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, " Outdoor Unit (V/Ph/Hz) "),
                                React.createElement("div", { className: "txtStyle" },
                                    React.createElement("input", { id: "OutdoorUnit", className: "form-control", type: "text" }))))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12 text-center" },
                            React.createElement("button", { className: "btn btn-primary", onClick: function () { return _this.SaveUpload(); } },
                                React.createElement("span", null, "Submit"))))),
                React.createElement("div", { className: "admin-section-right", id: "DivMasterDataSection" },
                    React.createElement("h2", null, " Bulk Upload "),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-5" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("label", null, "Master Data File "),
                                React.createElement("input", { type: "file", ref: this.textInput, name: "myFile", accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", id: "ACMasterDataUpload", onChange: function (e) { return _this.ValidateFile(e.target.files[0].name); } }))),
                        React.createElement("div", { className: "col-md-7 text-right" },
                            React.createElement("div", { className: "form-group relative" },
                                React.createElement("a", { className: "atagtemp", download: "", href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/Shared%20Documents/TemplatePF.xlsx" },
                                    React.createElement("i", { className: "fa fa-download", "aria-hidden": "true" }),
                                    "Download Template")))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("span", { className: "Notedesign" },
                                React.createElement("h5", null, "Note:"),
                                React.createElement("p", null, "Please download the template, add the rows in designated columns and upload. Please do not change the column headers. Maximum rows allowed is 200.")))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12" },
                                React.createElement("div", { id: "diverrormsgACMasterData", role: "alert", className: "alert alert-danger" }, "Please select Excel file"))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12" },
                                React.createElement("div", { id: "diverrormsgACMasterDataEmpty", role: "alert", className: "alert alert-danger" }, "Please select the master data file")))),
                    React.createElement("div", null,
                        React.createElement("button", { className: "btn btn-primary", onClick: function () { return _this.UploadFiletoDocumentLibrary(); } },
                            React.createElement("span", null, "Submit"))))),
            React.createElement("div", { className: "lightbox open", id: "AlertModel" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Error"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "All fields are mandatory"),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessModel(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "Sucess" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Sucess"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, " Sucessfully Created "),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.OkAlert(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "SucessBulk" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Sucess"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, " Sucessfully Created "),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: this.OkBulkAlert, value: "Ok" })))))));
    };
    return AdminPortal;
}(React.Component));
exports["default"] = AdminPortal;
