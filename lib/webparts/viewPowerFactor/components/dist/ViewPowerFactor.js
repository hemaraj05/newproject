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
var ViewPowerFactor_module_scss_1 = require("./ViewPowerFactor.module.scss");
var sp_loader_1 = require("@microsoft/sp-loader");
var $ = require("jquery");
var jspdf_autotable_1 = require("jspdf-autotable");
var jspdf_1 = require("jspdf");
var webs_1 = require("@pnp/sp/webs");
require("@pnp/sp/webs");
require("@pnp/sp/site-users/web");
require("@pnp/sp/lists");
require("@pnp/sp/items");
$('html').css("visibility", "hidden");
setTimeout(function () {
    $('html').css("visibility", "visible");
    $('html').addClass('loading-in-progress');
}, 1200);
var uniquearr = [];
var savearr = [];
var ViewPowerFactor = /** @class */ (function (_super) {
    __extends(ViewPowerFactor, _super);
    function ViewPowerFactor(props, state) {
        var _this = _super.call(this, props) || this;
        _this.displayData = [];
        _this.appendData = _this.appendData.bind(_this);
        sp_loader_1.SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
        sp_loader_1.SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        sp_loader_1.SPComponentLoader.loadScript("https://cdn.rawgit.com/mrk-j/paginga/v0.8.1/paginga.jquery.min.js");
        _this.state = {
            UserPicture: "",
            UserName: "",
            Designation: "",
            Email: "",
            items: [],
            items2: [],
            items3: [],
            selectedOptions: '',
            SelectedInvo: '',
            SelectedValue: '',
            SelectedTo: '',
            SelecInvOrd: '',
            SubjectSelect: '',
            SelectedAddress: '',
            SelectedDate: '',
            SelectedProjectName: '',
            SelectedConsultantName: '',
            SelectedCustomerName: '',
            SelectId: '',
            status: false,
            down: false,
            Sort: "desc",
            TotalNoQuantity: 0,
            TotalModel: 0,
            ListId: '',
            showdata: [],
            SalesPersonCode: ''
        };
        return _this;
    }
    ViewPowerFactor.prototype.componentDidMount = function () {
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
        }, 4500);
        setTimeout(function () {
            $('html').css("visibility", "visible"); //.show();
            $('html').removeClass('loading-in-progress');
        }, 5000);
        var reactHandler = this;
        reactHandler.GetCurrentUserName();
        reactHandler.GetDetails();
        $('#Preview').hide();
        reactHandler.GetProfile();
        $('#OkAlert').hide();
        /* ($(".paginate") as any).paginga({
     
         });*/
        $('#sort-items').on('change', function (e) {
            var conceptName = $('#sort-items').find(":selected").val();
            reactHandler.setState({ Sort: conceptName });
            $('#DisplayRow').empty();
            reactHandler.GetDetails();
        });
    };
    ViewPowerFactor.prototype.DeleteIcon = function () {
        var value;
        $(".DeleteImage").on('click', function (event) {
            value = $(this).data("custom-value");
        });
        this.GetDelete(value);
    };
    ViewPowerFactor.prototype.GetProfile = function () {
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
    ViewPowerFactor.prototype.GetCurrentUserName = function () {
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
    ViewPowerFactor.prototype.GetDetails = function () {
        var reactHandler = this;
        // reactHandler.displayData = [];
        var num = 1;
        $.ajax({
            url: "https://taqeef.sharepoint.com/sites/OPR/ACModel/_api/web/lists/getbytitle('ReceiverDetails')/items?$select=Id,OrderNo,InvoiceNo,Location,ToAddress,ProjectName,CustomerName,Date,Author/Title&$expand=Author&$orderby=Created " + reactHandler.state.Sort + "",
            type: "GET",
            async: false,
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    items: resultData.d.results
                });
                for (var i = 0; i < resultData.d.results.length; i++) {
                    var Invoice = resultData.d.results[i].InvoiceNo;
                    var Location = resultData.d.results[i].Location;
                    var Project = resultData.d.results[i].ProjectName;
                    var Customer = resultData.d.results[i].CustomerName;
                    var OrderNo = resultData.d.results[i].OrderNo;
                    var Date = resultData.d.results[i].Date;
                    var ItemId = resultData.d.results[i].ID;
                    var CreatedBy = resultData.d.results[i].Author.Title;
                    reactHandler.appendData(num, Invoice, Location, Project, Customer, OrderNo, Date, ItemId, CreatedBy);
                    num++;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.appendData = function (num, Invoice, Location, Project, Customer, OrderNo, Date, ItemId, CreatedBy) {
        var reactHandler = this;
        if (reactHandler.GetProfile()) {
            reactHandler.displayData.push(React.createElement("tr", null,
                React.createElement("td", null, num),
                React.createElement("td", null, Location),
                React.createElement("td", null, Invoice),
                React.createElement("td", null, OrderNo),
                React.createElement("td", null, Date),
                React.createElement("td", null, Project),
                React.createElement("td", null, Customer),
                React.createElement("td", null, CreatedBy),
                React.createElement("td", null,
                    React.createElement("ul", { className: "list-actiobs" },
                        React.createElement("ul", { className: "list-actiobs" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", className: "ViewImage", "data-custom-value": ItemId, onClick: function () { return reactHandler.GetValues(ItemId); } },
                                    React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/view.svg", className: "ibtneye list-actiobs", alt: "image" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", className: "DownloadImage", "data-custom-value": ItemId, onClick: function () { return reactHandler.GetValuesPrint(ItemId); } },
                                    React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/download.svg", className: "list-actiobs", alt: "image" }))),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", className: "DeleteImage", "data-custom-value": ItemId, onClick: function () { return reactHandler.SaveId(ItemId); } },
                                    React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete.svg", className: "ibtneye list-actiobs", alt: "image" }))))))));
            reactHandler.setState({
                showdata: reactHandler.displayData
            });
            // console.log(reactHandler.state.showdata);
        }
        else {
            reactHandler.displayData.push(React.createElement("tr", null,
                React.createElement("td", null, num),
                React.createElement("td", null, Location),
                React.createElement("td", null, Invoice),
                React.createElement("td", null, OrderNo),
                React.createElement("td", null, Date),
                React.createElement("td", null, Project),
                React.createElement("td", null, Customer),
                React.createElement("td", null, CreatedBy),
                React.createElement("td", null,
                    React.createElement("ul", { className: "list-actiobs" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", className: "ViewImage", "data-custom-value": ItemId, onClick: function () { return reactHandler.GetValues(ItemId); } },
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/view.svg", className: "ibtneye list-actiobs", alt: "image" }))),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", className: "DownloadImage", "data-custom-value": ItemId, onClick: function () { return reactHandler.GetValuesPrint(ItemId); } },
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/download.svg", className: "list-actiobs", alt: "image" })))))));
            reactHandler.setState({
                showdata: reactHandler.displayData
            });
            // console.log(reactHandler.state.showdata);
        }
        // uniquearr.push({ value: '' + resultData.d.results[i].OrderNo + '', label: '' + resultData.d.results[i].OrderNo + '' });
    };
    ViewPowerFactor.prototype.SaveId = function (Id) {
        this.setState({ ListId: Id });
        $('#OkAlert').show();
    };
    ViewPowerFactor.prototype.DeleteAlert = function () {
        this.GetDelete(this.state.ListId);
        $('#OkAlert').hide();
    };
    ViewPowerFactor.prototype.GetDelete = function (Id) {
        return __awaiter(this, void 0, void 0, function () {
            var reactHandler, newweb, selectedId, CreateManuallyId, ModelManualId;
            var _this = this;
            return __generator(this, function (_a) {
                reactHandler = this;
                newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                selectedId = Id;
                $.ajax({
                    url: this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=ID,Date&$filter=ViewFinal/Id eq '" + selectedId + "'",
                    type: "GET",
                    headers: { 'Accept': 'application/json; odata=verbose;' },
                    success: function (resultData) {
                        for (var i = 0; i < resultData.d.results.length; i++) {
                            CreateManuallyId = resultData.d.results[i].ID;
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                }).then(function (value) {
                    $.ajax({
                        url: _this.props.siteurl + "/_api/web/lists/getbytitle('ManuallyModel')/items?$select=ID,Model&$filter=ManuallyID/Id eq '" + CreateManuallyId + "'",
                        type: "GET",
                        headers: { 'Accept': 'application/json; odata=verbose;' },
                        success: function (resultData) {
                            for (var i = 0; i < resultData.d.results.length; i++) {
                                ModelManualId = resultData.d.results[i].ID;
                                var list2 = newweb.lists.getByTitle("ManuallyModel");
                                list2.items.getById(ModelManualId)["delete"]();
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                        }
                    }).then(function () {
                        $.ajax({
                            url: _this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=ID,Date&$filter=ViewFinal/Id eq '" + selectedId + "'",
                            type: "GET",
                            headers: { 'Accept': 'application/json; odata=verbose;' },
                            success: function (resultData) {
                                for (var i = 0; i < resultData.d.results.length; i++) {
                                    CreateManuallyId = resultData.d.results[i].ID;
                                    var list1 = newweb.lists.getByTitle("CreateManually");
                                    list1.items.getById(CreateManuallyId)["delete"]();
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        }).then(function (value) {
                            var list = newweb.lists.getByTitle("ReceiverDetails");
                            list.items.getById(Id)["delete"]().then(function () {
                                $('#DisplayRow').empty();
                                reactHandler.GetDetails();
                            });
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    ViewPowerFactor.prototype.StopProcess = function () {
        $('#OkAlert').hide();
    };
    ViewPowerFactor.prototype.GetValues = function (Id) {
        $('#Preview').show();
        var selectedId = Id;
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=Invoice_x002f_OrderNo,ProjectName,ConsultantName,CustomerName,TotalQuantity,TotalModel,To,ID,Date&$filter=ViewFinal/Id eq '" + selectedId + "'",
            type: "GET",
            //async:false,
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                // $("#SubjectPreview").html(resultData.d.results[0].Subject),
                //  console.log(resultData.d.results);
                reactHandler.setState({
                    SelectedInvo: resultData.d.results[0].Invoice_x002f_OrderNo,
                    SelectedTo: resultData.d.results[0].To,
                    SelectedDate: resultData.d.results[0].Date,
                    SelectedProjectName: resultData.d.results[0].ProjectName,
                    SelectedConsultantName: resultData.d.results[0].ConsultantName,
                    SelectedCustomerName: resultData.d.results[0].CustomerName,
                    SelectId: resultData.d.results[0].ID,
                    TotalModel: resultData.d.results[0].TotalModel,
                    TotalNoQuantity: resultData.d.results[0].TotalQuantity
                });
                //alert(reactHandler.state.SelectId);
                if (resultData.d.results[0].TotalModel == 'undefined') {
                    reactHandler.setState({ TotalModel: 0 });
                }
                setTimeout(function () {
                    reactHandler.GetModelDetails(reactHandler.state.SelectId);
                }, 1000);
                reactHandler.Location(reactHandler.state.SelectedTo);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.GetModelDetails = function (value) {
        var rest = value;
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('ManuallyModel')/items?$select=Brand,Model,Quantity,RatedCapacity,OutdoorPowerInput,IndoorPowerInput,TotalPower,PowerFactor,Output,OutdoorOutput&$filter=ManuallyID/Id eq '" + rest + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                // console.log(resultData.d.results);
                reactHandler.setState({ items3: resultData.d.results });
                for (var i = 0; i < resultData.d.results.length; i++) {
                    var Model = resultData.d.results[i].Model;
                    var Brand = resultData.d.results[i].Brand;
                    var RatedCapacity = resultData.d.results[i].RatedCapacity;
                    var dataQuantity = resultData.d.results[i].Quantity;
                    var IndoorInput = resultData.d.results[i].IndoorPowerInput;
                    var OutdoorInput = resultData.d.results[i].OutdoorPowerInput;
                    var RatedPowerFactor = resultData.d.results[i].PowerFactor;
                    var IndoorOutput = resultData.d.results[i].Output;
                    var OutdoorOutput = resultData.d.results[i].OutdoorOutput;
                    var Total = resultData.d.results[i].TotalPower;
                    savearr.push({
                        Brand: Brand,
                        Model: Model,
                        QuantityNumber: dataQuantity,
                        RatedCapacity: RatedCapacity,
                        IndoorPowerInput: IndoorInput,
                        OutdoorPowerInput: OutdoorInput,
                        Total: Total,
                        RatedPowerfactor: RatedPowerFactor,
                        IndoorOutputunit: IndoorOutput,
                        OutdoorOutputunit: OutdoorOutput
                    });
                    // console.log(savearr);
                    var newRow = $("<tr>");
                    var cols = "";
                    cols += "<td>" + Brand + "</td>";
                    cols += "<td>" + Model + "</td>";
                    cols += "<td id=\"combact1\">" + dataQuantity + "</td>";
                    cols += "<td>" + RatedCapacity + "</td>";
                    cols += "<td>" + IndoorInput + "</td>";
                    cols += "<td>" + OutdoorInput + "</td>";
                    cols += "<td id=\"combact2\">" + Total + "</td>";
                    cols += "<td>" + RatedPowerFactor + "</td>";
                    cols += "<td>" + IndoorOutput + "</td>";
                    cols += "<td>" + OutdoorOutput + "</td>";
                    newRow.append(cols);
                    $("table #DynamicRow").append(newRow);
                }
                // alert();
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.GetValuesPrint = function (value) {
        var selectedId = value;
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=Invoice_x002f_OrderNo,ProjectName,ConsultantName,CustomerName,SalesPersonCode,TotalQuantity,TotalModel,To,ID,Date&$filter=ViewFinal/Id eq '" + selectedId + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                // $("#SubjectPreview").html(resultData.d.results[0].Subject),
                //console.log(resultData.d.results);
                reactHandler.setState({
                    SelectedInvo: resultData.d.results[0].Invoice_x002f_OrderNo,
                    SelectedTo: resultData.d.results[0].To,
                    SelectedDate: resultData.d.results[0].Date,
                    SelectedProjectName: resultData.d.results[0].ProjectName,
                    SelectedConsultantName: resultData.d.results[0].ConsultantName,
                    SelectedCustomerName: resultData.d.results[0].CustomerName,
                    SelectId: resultData.d.results[0].ID,
                    TotalModel: resultData.d.results[0].TotalModel,
                    TotalNoQuantity: resultData.d.results[0].TotalQuantity,
                    SalesPersonCode: resultData.d.results[0].SalesPersonCode
                });
                setTimeout(function () {
                    reactHandler.GetModelPrint(reactHandler.state.SelectId);
                    reactHandler.Location(reactHandler.state.SelectedTo);
                }, 1000);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.GetModelPrint = function (value) {
        var rest = value;
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('ManuallyModel')/items?$select=Brand,Model,Quantity,RatedCapacity,OutdoorPowerInput,IndoorPowerInput,TotalPower,PowerFactor,Output,OutdoorOutput&$filter=ManuallyID/Id eq '" + rest + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                //console.log(resultData.d.results);
                reactHandler.setState({ items3: resultData.d.results });
                for (var i = 0; i < resultData.d.results.length; i++) {
                    var Model = resultData.d.results[i].Model;
                    var Brand = resultData.d.results[i].Brand;
                    var RatedCapacity = resultData.d.results[i].RatedCapacity;
                    var dataQuantity = resultData.d.results[i].Quantity;
                    var IndoorInput = resultData.d.results[i].IndoorPowerInput;
                    var OutdoorInput = resultData.d.results[i].OutdoorPowerInput;
                    var RatedPowerFactor = resultData.d.results[i].PowerFactor;
                    var IndoorOutput = resultData.d.results[i].Output;
                    var OutdoorOutput = resultData.d.results[i].OutdoorOutput;
                    var Total = resultData.d.results[i].TotalPower;
                    savearr.push({
                        Brand: Brand,
                        Model: Model,
                        QuantityNumber: dataQuantity,
                        RatedCapacity: RatedCapacity,
                        IndoorPowerInput: IndoorInput,
                        OutdoorPowerInput: OutdoorInput,
                        Total: Total,
                        RatedPowerfactor: RatedPowerFactor,
                        IndoorOutputunit: IndoorOutput,
                        OutdoorOutputunit: OutdoorOutput
                    });
                    // console.log(savearr);
                }
                reactHandler.SavePrint();
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.Location = function (value) {
        // alert(value);
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('ToLocation')/items?$select=Address&$filter=Locations eq '" + value + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                // console.log(resultData.d.results);
                var test = $("#AddressPreview").html(resultData.d.results[0].Address);
                var test2 = test.text();
                reactHandler.setState({ SelectedAddress: test2 });
                savearr = [];
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ViewPowerFactor.prototype.HidePreview = function () {
        $('#DynamicRow').empty();
        savearr = [];
        $('#Preview').hide();
    };
    ViewPowerFactor.prototype.SavePrint = function () {
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotalNoQuantity;
        function RowAdd() {
            return [
                {
                    totalquantity: totalquantity, totalmodel: totalmodel
                },
            ];
        }
        var totalmodel1 = "Total " + 0;
        var totalquantity1 = "Total " + 0;
        function RowAdd1() {
            return [
                {
                    totalquantity1: totalquantity1, totalmodel1: totalmodel1
                },
            ];
        }
        function AlternativeheadRows() {
            return [
                {
                    Brand: 'Brand',
                    Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW) T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
                },
            ];
        }
        if (savearr.length != 0) {
            var reactHandler = this;
            var doc_1 = new jspdf_1["default"]('p', 'mm', 'a4');
            jspdf_autotable_1["default"](doc_1, {
                head: AlternativeheadRows(),
                styles: { cellWidth: 'wrap', fontSize: 8 },
                headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
                columnStyles: {
                    0: { cellWidth: 15, halign: "center" },
                    1: { cellWidth: 22, halign: "center" },
                    2: { cellWidth: 17, halign: "center" },
                    3: { cellWidth: 17, halign: "center" },
                    4: { cellWidth: 19, halign: "center" },
                    5: { cellWidth: 19, halign: "center" },
                    6: { cellWidth: 18, halign: "center" },
                    7: { cellWidth: 17, halign: "center" },
                    8: { cellWidth: 15, halign: "center" },
                    9: { cellWidth: 16, halign: "center" }
                },
                tableWidth: 'auto',
                didDrawPage: function (data) {
                    doc_1.setFontSize(20);
                    var img1 = new Image();
                    img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                    doc_1.addImage(img1, 'png', 131, 200, 80, 125);
                    var img = new Image();
                    img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                    doc_1.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedDate, 185, 24);
                    doc_1.setFontSize(8);
                    doc_1.text('Pf–', 158, 30);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SalesPersonCode, 162, 30);
                    doc_1.setFontSize(8);
                    doc_1.text('/', 178, 30);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedInvo, 180, 30);
                    doc_1.setFontSize(8);
                    doc_1.text('/001', 202, 30);
                    doc_1.addFont('ArialMS', 'Arial', 'normal');
                    doc_1.setFont('Arial', 'normal');
                    doc_1.setFontSize(8);
                    doc_1.text('To:', 15, 40);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedAddress, 18, 45);
                    doc_1.setFontSize(8);
                    doc_1.text("Project Name ", 18, 75);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedProjectName, 46, 75);
                    doc_1.setFontSize(8);
                    doc_1.text('Customer Name ', 18, 79);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedCustomerName, 46, 79);
                    doc_1.setFontSize(8);
                    doc_1.text('Consultant Name ', 18, 83);
                    doc_1.setFontSize(8);
                    doc_1.text(reactHandler.state.SelectedConsultantName, 46, 83);
                    doc_1.setFontSize(10);
                    doc_1.setTextColor(0, 77, 119);
                    doc_1.text("Subject: A/C Power Factor", 89, 67);
                    var pageSize = doc_1.internal.pageSize;
                    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                },
                theme: 'grid',
                margin: { top: 100, left: 20, right: 20 }
            });
            var pageSize = doc_1.internal.pageSize;
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            var finalY2 = doc_1.lastAutoTable.finalY;
            if (finalY2 >= pageHeight) {
                doc_1.addPage();
            }
            var finalY3 = doc_1.lastAutoTable.finalY;
            var TotalTableHight5 = finalY3;
            jspdf_autotable_1["default"](doc_1, {
                startY: TotalTableHight5,
                body: savearr,
                styles: { cellWidth: 'wrap', fontSize: 8 },
                headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
                columnStyles: {
                    0: { cellWidth: 15, halign: "center" },
                    1: { cellWidth: 20, halign: "center" },
                    2: { cellWidth: 17, halign: "center" },
                    3: { cellWidth: 17, halign: "center" },
                    4: { cellWidth: 15, halign: "center" },
                    5: { cellWidth: 19, halign: "center" },
                    6: { cellWidth: 17, halign: "center" },
                    7: { cellWidth: 16, halign: "center" },
                    8: { cellWidth: 17, halign: "center" },
                    9: { cellWidth: 17, halign: "center" }
                },
                tableWidth: 'auto',
                theme: 'grid',
                margin: { bottom: 40, left: 20, right: 20 }
            });
            var finalY5 = doc_1.lastAutoTable.finalY;
            var TotalTableHight = finalY5 + 1;
            jspdf_autotable_1["default"](doc_1, {
                startY: TotalTableHight,
                body: RowAdd(),
                styles: { cellWidth: 'wrap', fontSize: 8 },
                headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
                columnStyles: {
                    0: { cellWidth: 88, halign: "center" },
                    1: { cellWidth: 46, halign: "center" }
                },
                tableWidth: 100,
                theme: 'striped',
                margin: { top: 100, left: 20, right: 20 }
            });
            var finalY1 = doc_1.lastAutoTable.finalY;
            var TotalTableHight1 = finalY1 + 10;
            doc_1.setFontSize(8);
            doc_1.text('Note:', 15, TotalTableHight1 + 10);
            doc_1.setFontSize(8);
            doc_1.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
            doc_1.setFontSize(8);
            doc_1.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
            var pageCount = doc_1.internal.pages.length;
            var img4 = new Image();
            img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
            doc_1.addImage(img4, 'png', 131, 200, 80, 125);
            for (var i = 1; i <= pageCount; i++) {
                doc_1.setPage(i);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text('Abu Dhabi:', 15, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text(', Dubai:', 45, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text(', Ajman:', 71, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text(', Al Ain:', 97, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text('Fujairah:', 15, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text(', Ras Al Khaimah:', 42, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text(', Zayed City:', 81, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(109, 109, 109);
                doc_1.text('Email:', 15, 288);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('02 6727684', 30, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('04 2820477', 56, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('06 7497111', 82, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('03 7641292', 108, 280);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('09 2239898', 27, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('07 2334581', 66, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('02 8840902', 98, 284);
                doc_1.setFontSize(8);
                doc_1.setTextColor(0, 77, 119);
                doc_1.text('info@taqeef.com, www.taqeef.com', 24, 288);
            }
            doc_1.setFontSize(8);
            doc_1.setTextColor(0, 77, 119);
            doc_1.text('800Taqeef', 76, TotalTableHight1 + 14);
            var myDocName = "Pf–" + this.state.SalesPersonCode + "/" + this.state.SelectedInvo + ".pdf";
            doc_1.save(myDocName);
        }
        else {
            var reactHandler = this;
            var doc_2 = new jspdf_1["default"]('p', 'mm', 'a4');
            jspdf_autotable_1["default"](doc_2, {
                head: AlternativeheadRows(),
                body: savearr,
                styles: { cellWidth: 'wrap', fontSize: 8 },
                headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
                columnStyles: {
                    0: { cellWidth: 15, halign: "center" },
                    1: { cellWidth: 29, halign: "center" },
                    2: { cellWidth: 15, halign: "center" },
                    3: { cellWidth: 15, halign: "center" },
                    4: { cellWidth: 15, halign: "center" },
                    5: { cellWidth: 15, halign: "center" },
                    6: { cellWidth: 15, halign: "center" },
                    7: { cellWidth: 15, halign: "center" },
                    8: { cellWidth: 15, halign: "center" },
                    9: { cellWidth: 15, halign: "center" }
                },
                tableWidth: 'auto',
                didDrawPage: function (data) {
                    doc_2.setFontSize(20);
                    var img1 = new Image();
                    img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                    doc_2.addImage(img1, 'png', 131, 200, 80, 125);
                    var img = new Image();
                    img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                    doc_2.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedDate, 185, 24);
                    doc_2.setFontSize(8);
                    doc_2.text('Pf–', 158, 30);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SalesPersonCode, 162, 30);
                    doc_2.setFontSize(8);
                    doc_2.text('/', 178, 30);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedInvo, 180, 30);
                    doc_2.setFontSize(8);
                    doc_2.text('/001', 202, 30);
                    doc_2.addFont('ArialMS', 'Arial', 'normal');
                    doc_2.setFont('Arial');
                    doc_2.setFontSize(8);
                    doc_2.text('To:', 15, 40);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedAddress, 18, 45);
                    doc_2.setFontSize(8);
                    doc_2.text("Project Name ", 18, 75);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedProjectName, 46, 75);
                    doc_2.setFontSize(8);
                    doc_2.text('Customer Name ', 18, 79);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedCustomerName, 46, 79);
                    doc_2.setFontSize(8);
                    doc_2.text('Consultant Name ', 18, 83);
                    doc_2.setFontSize(8);
                    doc_2.text(reactHandler.state.SelectedConsultantName, 46, 83);
                    doc_2.setFontSize(8);
                    doc_2.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
                    doc_2.setFontSize(8);
                    doc_2.text('Abu Dhabi:', 15, 280);
                    doc_2.setFontSize(8);
                    doc_2.text(', Dubai:', 45, 280);
                    doc_2.setFontSize(8);
                    doc_2.text(', Ajman:', 71, 280);
                    doc_2.setFontSize(8);
                    doc_2.text(', Al Ain:', 97, 280);
                    doc_2.setFontSize(8);
                    doc_2.text('Fujairah:', 15, 284);
                    doc_2.setFontSize(8);
                    doc_2.text(', Ras Al Khaimah:', 42, 284);
                    doc_2.setFontSize(8);
                    doc_2.text(', Zayed City:', 81, 284);
                    doc_2.setFontSize(8);
                    doc_2.text('Email:', 15, 288);
                    doc_2.setFontSize(10);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text("Subject: A/C Power Factor", 89, 67);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('02 6727684', 30, 280);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('04 2820477', 56, 280);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('06 7497111', 82, 280);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('03 7641292', 108, 280);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('09 2239898', 27, 284);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('07 2334581', 66, 284);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('02 8840902', 98, 284);
                    doc_2.setFontSize(8);
                    doc_2.setTextColor(0, 77, 119);
                    doc_2.text('info@taqeef.com, www.taqeef.com', 24, 288);
                    var pageSize = doc_2.internal.pageSize;
                    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                },
                theme: 'grid',
                margin: { top: 100 }
            });
            var finalY = doc_2.lastAutoTable.finalY;
            var TotalTableHight = finalY + 1;
            jspdf_autotable_1["default"](doc_2, {
                startY: TotalTableHight,
                body: RowAdd1(),
                styles: { cellWidth: 'wrap', fontSize: 8 },
                columnStyles: {
                    0: { cellWidth: 100, halign: "center" },
                    1: { cellWidth: 23, halign: "center" }
                },
                tableWidth: 100,
                theme: 'striped',
                margin: { top: 100 }
            });
            var finalY1 = doc_2.lastAutoTable.finalY;
            var TotalTableHight1 = finalY + 10;
            doc_2.setFontSize(8);
            doc_2.text('Note:', 15, TotalTableHight1 + 10);
            doc_2.setFontSize(8);
            doc_2.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
            doc_2.setFontSize(8);
            doc_2.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
            doc_2.setFontSize(8);
            doc_2.setTextColor(0, 77, 119);
            doc_2.text('800Taqeef', 76, TotalTableHight1 + 14);
            var myDocName = "Pf–" + this.state.SalesPersonCode + "/" + this.state.SelectedInvo + ".pdf";
            doc_2.save(myDocName);
        }
    };
    ViewPowerFactor.prototype.render = function () {
        var _this = this;
        var reactHandler = this;
        var selectedOptions = reactHandler.state.selectedOptions;
        $('#txt_searchall').on("keyup", function () {
            var search = $(this).val();
            $('table tbody tr').hide();
            var len = $('table tbody tr:not(.notfound) td:contains("' + search + '")').length;
            if (len > 0) {
                $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
                    $(this).closest('tr').show();
                });
            }
            else {
                $('.notfound').show();
            }
        });
        var value = selectedOptions;
        return (React.createElement("div", { className: ViewPowerFactor_module_scss_1["default"].viewPowerFactor },
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
                                                " ")))))),
                        React.createElement("nav", null,
                            React.createElement("ul", null))))),
            React.createElement("div", { className: "banner open home-banner powerfactor-banner view-power-factor relative powerfactorview" },
                React.createElement("div", { className: "background" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "banner-contents" },
                            React.createElement("h1", { className: "text-center" }, "Power factor (PF) is the ratio of working power, measured in kilowatts (kW), to apparent power, measured in kilovolt amperes (kVA). This is the measure of the amount of power used to run Air Conditioners. You can generate the power factor letters in few clicks now!!"),
                            React.createElement("div", { className: "search-models relative" },
                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Search by Invoice / Order No", id: "txt_searchall" }),
                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg", alt: "image" })))))),
            React.createElement("div", { className: "invoice-secyion-details clearfix" },
                React.createElement("div", { className: "pull-left" },
                    React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PF-Create.aspx", "data-interception": 'off' }, "Add Power Factor Letters "))),
            React.createElement("div", { className: "sec" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "search-newest clearfix" },
                        React.createElement("div", { className: "sort-by" },
                            "Sort By",
                            React.createElement("select", { id: "sort-items", className: "form-control" },
                                React.createElement("option", { value: "desc" }, "New"),
                                React.createElement("option", { value: "asc" }, "Old")))),
                    React.createElement("div", { className: "power-factor-lists container-outdoor-pv" },
                        React.createElement("table", { className: "table table-hover", id: "TableTest" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, " # "),
                                    React.createElement("th", null, "To"),
                                    React.createElement("th", null, "Invoice"),
                                    React.createElement("th", null, "OrderNo"),
                                    React.createElement("th", null, "Date"),
                                    React.createElement("th", null, "Project Name"),
                                    React.createElement("th", null, "Customer Name"),
                                    React.createElement("th", null, "Created By"),
                                    React.createElement("th", { className: "action" }, "Action"))),
                            React.createElement("tbody", { id: "DisplayRow" }, this.state.showdata))))),
            React.createElement("div", { id: "Preview" },
                React.createElement("div", { className: "lightbox open lightbox-preview" },
                    React.createElement("div", { id: "print-preview" },
                        React.createElement("div", { className: "lightbox-inner-contents a4-lightbox-inner" },
                            React.createElement("div", { className: "lightbox-inner-contents-inner" },
                                React.createElement("div", { className: "lightbox-body a4" },
                                    React.createElement("div", { className: "preview-wrap-light" },
                                        React.createElement("div", { className: "priew-blocks clearfix" },
                                            React.createElement("div", { className: "logo refrenceno-logo" },
                                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png", alt: "logo" })),
                                            React.createElement("div", { className: "date-ref-no text-right" },
                                                React.createElement("p", null,
                                                    " ",
                                                    this.state.SelectedDate,
                                                    " "),
                                                React.createElement("p", null,
                                                    " Pf-",
                                                    this.state.SalesPersonCode,
                                                    "/",
                                                    this.state.SelectedInvo,
                                                    "/001 "))),
                                        React.createElement("div", null,
                                            React.createElement("p", null,
                                                " ",
                                                React.createElement("b", null, " To: "),
                                                " "),
                                            React.createElement("div", { className: "priew-blocks clearfix", id: "AddressPreview" },
                                                React.createElement("p", null))),
                                        React.createElement("div", { className: "priew-blocks clearfix" },
                                            React.createElement("p", { className: "preview-subject" },
                                                " ",
                                                React.createElement("b", null, " Subject: "),
                                                "   A/C Power Factor  "),
                                            React.createElement("div", { className: "SubjectPreview" },
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Project Name :"),
                                                    this.state.SelectedProjectName),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Consultant Name :"),
                                                    this.state.SelectedConsultantName),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Customer Name :"),
                                                    this.state.SelectedCustomerName))),
                                        React.createElement("div", { className: "priew-blocks" },
                                            React.createElement("div", { className: "Scroll" },
                                                React.createElement("table", { className: "table" },
                                                    React.createElement("thead", null,
                                                        React.createElement("tr", null,
                                                            React.createElement("th", { rowSpan: 2 }, " Brand "),
                                                            React.createElement("th", { rowSpan: 2 }, " Model "),
                                                            React.createElement("th", { rowSpan: 2 }, " Quantity "),
                                                            React.createElement("th", { rowSpan: 2 },
                                                                " Rated Capacity",
                                                                React.createElement("p", null, "(Btu/h)(T3)")),
                                                            React.createElement("th", { colSpan: 2, className: "text-center" }, " Power Input(KW)T3"),
                                                            React.createElement("th", { rowSpan: 2 },
                                                                " Total Power",
                                                                React.createElement("p", null, "(KW)T3"),
                                                                " "),
                                                            React.createElement("th", { rowSpan: 2 }, " Rated Power Factor (T3) "),
                                                            React.createElement("th", { rowSpan: 2, className: "text-center" },
                                                                "Indoor Unit",
                                                                React.createElement("p", null, "V / Ph / Hz"),
                                                                "   "),
                                                            React.createElement("th", { rowSpan: 2, className: "text-center" },
                                                                " Outdoor Unit",
                                                                React.createElement("p", null, "V / Ph / Hz "),
                                                                " ")),
                                                        React.createElement("tr", null,
                                                            React.createElement("th", null,
                                                                "  ",
                                                                React.createElement("p", null, " Indoor Power Input (KW)T3"),
                                                                "  "),
                                                            React.createElement("th", null,
                                                                " ",
                                                                React.createElement("p", null, " Outdoor Power Input (KW)T3 "),
                                                                "  "))),
                                                    React.createElement("tbody", { id: "DynamicRow" }),
                                                    React.createElement("tbody", null,
                                                        React.createElement("tr", null,
                                                            React.createElement("td", { colSpan: 2 }),
                                                            React.createElement("td", null,
                                                                this.state.TotalNoQuantity,
                                                                React.createElement("p", null, "(Total)")),
                                                            React.createElement("td", { colSpan: 3 }),
                                                            React.createElement("td", null,
                                                                this.state.TotalModel,
                                                                React.createElement("p", null, "(Total)")),
                                                            React.createElement("td", { colSpan: 3 })))))),
                                        React.createElement("div", { className: "priew-blocks" },
                                            React.createElement("p", null,
                                                "  ",
                                                React.createElement("b", null, "Note:"),
                                                "   Condition (T3) Cooling: Indoor 29/19\u00B0C (DB/WB), Outdoor 46/24\u00B0C (DB/WB) "),
                                            React.createElement("p", null,
                                                " If required any further information, please dial in ",
                                                React.createElement("a", { className: "Note-Preview" }, "800Taqeef")))),
                                    React.createElement("div", { className: "preview-bg-image" },
                                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png", alt: "image" })),
                                    React.createElement("div", { className: "prieve-block-footer" },
                                        React.createElement("p", null, "Abu Dhabi: 02 6727684, Dubai: 04 2820477, Ajman: 06 7497111, Al Ain: 03 7641292, "),
                                        React.createElement("p", null, "Fujairah: 09 2239898, Ras Al Khaimah: 07 2334581, Zayed City: 02 8840902 "),
                                        React.createElement("p", null, "Email: info@taqeef.com, www.taqeef.com"),
                                        React.createElement("p", { className: "digitallygenerator" }, "This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.")))))),
                    React.createElement("div", { className: "row top-save " },
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.HidePreview(); } }))))),
            React.createElement("div", { className: "lightbox open", id: "OkAlert" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Cancel the Process"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "  Are you sure you want to delete this invoice "),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.DeleteAlert(); }, value: "Yes" }),
                            React.createElement("input", { type: "submit", className: "btn btn-no-bg", onClick: function () { return _this.StopProcess(); }, value: "Cancel" })))))));
    };
    return ViewPowerFactor;
}(React.Component));
exports["default"] = ViewPowerFactor;
