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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var NewPowerFactor_module_scss_1 = require("./NewPowerFactor.module.scss");
var sp_loader_1 = require("@microsoft/sp-loader");
require("@pnp/sp/profiles");
var $ = require("jquery");
var react_select_1 = require("react-select");
require("@pnp/sp/webs");
var webs_1 = require("@pnp/sp/webs");
require("@pnp/sp/lists");
require("@pnp/sp/items");
var moment = require("moment");
var jspdf_autotable_1 = require("jspdf-autotable");
var jspdf_1 = require("jspdf");
require("@pnp/sp/folders");
require("@pnp/sp/files");
require("@pnp/sp/site-users/web");
$('html').css("visibility", "hidden");
//import { Dropdown } from 'semantic-ui-react';
setTimeout(function () {
    $('html').css("visibility", "visible");
    $('html').addClass('loading-in-progress');
}, 1200);
var TotalCount = 0;
var TotalModelCount = 0;
var InvoiceNumber = [];
var MultipleArray = [];
var bindModel = [];
var InvoiceModel = [];
var ModelTypeManual = [];
var ModelTypeManual2 = [];
var ManualBrand = [];
var savearr2 = [];
var uniquearr = [];
var uniquearr1 = [];
var uniquearr2 = [];
var uniquearr3 = [];
var uniquearr4 = [];
var uniqueMod = [];
var uniqueMod1 = [];
var uniqueModelType1 = [];
var savearr3 = [];
//let ModelTypeArray = [];
var displayMultipInvoice = [];
var arrayIndex = 0;
var ModelQuantityArr = [];
var ModelQuantityArrExist = [];
var ArrayInvoice = [];
var options = [
    { value: 'Midea', label: 'Midea' },
    { value: 'General', label: 'General' }
];
var NewPowerFactor = /** @class */ (function (_super) {
    __extends(NewPowerFactor, _super);
    // private Test;
    function NewPowerFactor(props, state) {
        var _this = _super.call(this, props) || this;
        _this.handleChange1 = function (selectedOptions) {
            var reactHandler = _this;
            var selectedValue = selectedOptions.label;
            reactHandler.setState({ SelectedMod: selectedValue });
            $.ajax({
                url: _this.props.siteurl + "/_api/web/lists/getbytitle('InvoiceSalesLinesMaster')/items?$select=Quantity&$filter=No eq '" + selectedValue + "'",
                type: "GET",
                headers: { 'Accept': 'application/json; odata=verbose;' },
                success: function (resultData) {
                    reactHandler.setState({
                        Quantity: resultData.d.results[0].Quantity
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
            reactHandler.GetDetails(selectedValue);
            // console.log(`Selected: ${selectedOptions.label}`);
        };
        _this.handleChange = function (selectedOptions) {
            $("#complete").removeAttr("style");
            //$('#DynamicRow tr').remove();
            //$('#DynamicRow').empty();
            var reactHandler = _this;
            reactHandler.displayModel = [];
            reactHandler.setState({ showmodel: reactHandler.displayModel });
            $('#Third-table tr').empty();
            if (reactHandler.state.IsRowPresent == false) {
                var x = document.getElementsByClassName("banner home-banner powerfactor-banner relative");
                x[0].className = 'banner open home-banner powerfactor-banner relative';
                var y = document.getElementsByClassName("refresh-row-no");
                y[0].className = 'refresh-row';
                $(".home-sec").show();
                $("#Invoice").show();
                $("#Left").show();
                $(".if-multi-invoice").hide();
                reactHandler.clearFieldManually();
                reactHandler.clearField();
                $(".if-single-invoice").show();
                $("#LocationClass").removeClass("relatve current completed");
                $("#SubjectClass").removeClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
                $("#NotesClass").removeClass("relatve current completed");
                $("#ReceiverClass").removeClass("relatve current completed");
                $("#LocationClass").addClass("relatve current");
                $("#SubjectClass").addClass("relatve");
                $("#ModelClass").addClass("relatve");
                $("#NotesClass").addClass("relatve");
                $("#ReceiverClass").addClass("relatve");
                $('#DynamicRow tr').each(function () {
                    var totalQuantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('');
                    var totalModel = $(this).find("td").eq(6).find("input[id*='Total']").val('');
                });
                reactHandler.setState({ ToLeft: true });
                reactHandler.setState({ SubLeft: false });
                reactHandler.setState({ ModLeft: false });
                reactHandler.setState({ NoteLeft: false });
                reactHandler.setState({ ReceiLeft: false });
                reactHandler.setState({ CreateManually: false });
                $("#SubjectManually").hide();
                $("#to").hide();
                $("#FooterMenu1").hide();
                $("#FooterMenu").hide();
                $("#SubjectButton").hide();
                $("#ModelButton").hide();
                $("#Notes").hide();
                $("#Receiver").hide();
                $("#Preview").hide();
                $("#Manually").hide();
                $("#FooterMenu").hide();
                $("#SubjectManually").hide();
                $("#ModelManually").hide();
                $("#PreviewManual").hide();
                var customerName;
                var ProjectName;
                var ConsultName;
                var SalespersonCode;
                var selectedValue = selectedOptions.value;
                reactHandler.setState({ SelectedInvo: selectedValue });
                $.ajax({
                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=OrderNo,ConsultCompName,SalespersonCode,ProjectName,SelltoCustomerName&$filter=No eq '" + selectedValue + "'",
                    type: "GET",
                    headers: { 'Accept': 'application/json; odata=verbose;' },
                    success: function (resultData) {
                        if (resultData.d.results[0].SelltoCustomerName != null) {
                            customerName = resultData.d.results[0].SelltoCustomerName;
                        }
                        else {
                            customerName = "";
                        }
                        if (resultData.d.results[0].ProjectName != null) {
                            ProjectName = resultData.d.results[0].ProjectName;
                        }
                        else {
                            ProjectName = "";
                        }
                        if (resultData.d.results[0].ConsultCompName != null) {
                            ConsultName = resultData.d.results[0].ConsultCompName;
                        }
                        else {
                            ConsultName = "";
                        }
                        if (resultData.d.results[0].SalespersonCode != null) {
                            SalespersonCode = resultData.d.results[0].SalespersonCode;
                        }
                        else {
                            SalespersonCode = "";
                        }
                        reactHandler.setState({
                            SelectedOrd: resultData.d.results[0].OrderNo,
                            SelectedProjName: ProjectName,
                            SelectedSellTo: customerName,
                            SelectedConsult: ConsultName,
                            SalesPersonCode: SalespersonCode
                        });
                        if (resultData.d.results.length > 0) {
                            reactHandler.setState({ IsRowPresent: true });
                        }
                        //reactHandler.GetAdd();
                        //console.log("total no of invoices" + resultData.d.results.No);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
                reactHandler.name(selectedValue);
            }
            else {
                $("#complete").removeAttr("style");
                //$('#DynamicRow tr').remove();
                //$('#DynamicRow').empty();
                reactHandler.displayModel = [];
                reactHandler.setState({ showmodel: reactHandler.displayModel });
                $('#Third-table tr').empty();
                $(".if-multi-invoice").hide();
                var x = document.getElementsByClassName("banner home-banner powerfactor-banner relative");
                x[0].className = 'banner open home-banner powerfactor-banner relative';
                var y = document.getElementsByClassName("refresh-row-no");
                y[0].className = 'refresh-row';
                $(".home-sec").show();
                $("#Invoice").show();
                // $("#complete").removeAttr("style");
                $("#Left").show();
                //$("#First-table").empty();
                $('#DynamicRow tr').each(function () {
                    var totalQuantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('');
                    var totalModel = $(this).find("td").eq(6).find("input[id*='Total']").val('');
                });
                reactHandler.clearFieldManually();
                reactHandler.clearField();
                reactHandler.setState({ ToLeft: true });
                reactHandler.setState({ SubLeft: false });
                reactHandler.setState({ ModLeft: false });
                reactHandler.setState({ NoteLeft: false });
                reactHandler.setState({ ReceiLeft: false });
                reactHandler.setState({ CreateManually: false });
                $("#LocationClass").removeClass("relatve current completed");
                $("#SubjectClass").removeClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
                $("#NotesClass").removeClass("relatve current completed");
                $("#ReceiverClass").removeClass("relatve current completed");
                $("#LocationClass").addClass("relatve current");
                $("#SubjectClass").addClass("relatve");
                $("#ModelClass").addClass("relatve");
                $("#NotesClass").addClass("relatve");
                $("#ReceiverClass").addClass("relatve");
                $("#SubjectManually").hide();
                $("#to").hide();
                $("#FooterMenu1").hide();
                $("#FooterMenu").hide();
                $("#SubjectButton").hide();
                $("#ModelButton").hide();
                $("#Notes").hide();
                $("#Receiver").hide();
                $("#Preview").hide();
                $("#Manually").hide();
                $("#FooterMenu").hide();
                $("#SubjectManually").hide();
                $("#ModelManually").hide();
                $("#PreviewManual").hide();
                $(".if-single-invoice").show();
                var ConsultName;
                var ProjectName;
                var customerName;
                var SalespersonCode;
                var selectedValue = selectedOptions.value;
                reactHandler.setState({ SelectedInvo: selectedValue });
                $.ajax({
                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=ConsultCompName,ProjectName,SalespersonCode,SelltoCustomerName&$filter=No eq '" + selectedValue + "'",
                    type: "GET",
                    headers: { 'Accept': 'application/json; odata=verbose;' },
                    success: function (resultData) {
                        if (resultData.d.results[0].SelltoCustomerName != null) {
                            customerName = resultData.d.results[0].SelltoCustomerName;
                        }
                        else {
                            customerName = "";
                        }
                        if (resultData.d.results[0].ProjectName != null) {
                            ProjectName = resultData.d.results[0].ProjectName;
                        }
                        else {
                            ProjectName = "";
                        }
                        if (resultData.d.results[0].ConsultCompName != null) {
                            ConsultName = resultData.d.results[0].ConsultCompName;
                        }
                        else {
                            ConsultName = "";
                        }
                        if (resultData.d.results[0].SalespersonCode != null) {
                            SalespersonCode = resultData.d.results[0].SalespersonCode;
                        }
                        else {
                            SalespersonCode = "";
                        }
                        reactHandler.setState({
                            SelectedProjName: ProjectName,
                            SelectedSellTo: customerName,
                            SelectedConsult: ConsultName,
                            SalesPersonCode: SalespersonCode
                        });
                        if (resultData.d.results.length > 0) {
                            reactHandler.setState({ IsRowPresent: true });
                        }
                        //reactHandler.GetAdd();
                        //console.log("total no of invoices" + resultData.d.results.No);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
                _this.name(selectedValue);
            }
        };
        _this.handleChangeTextarea1 = function (event) {
            _this.setState({ SelectedProjName: event.target.value });
            $('#SubError').hide();
        };
        _this.handleChangeTextarea2 = function (event) {
            _this.setState({ SelectedConsult: event.target.value });
            $('#SubError2').hide();
        };
        _this.handleChangeTextarea3 = function (event) {
            _this.setState({ SelectedSellTo: event.target.value });
            $('#SubError3').hide();
        };
        _this.handleChangeTextarea4 = function (event) {
            _this.setState({ SelectedProjName: event.target.value });
            $('#SubError4').hide();
        };
        _this.handleChangeTextarea5 = function (event) {
            _this.setState({ SelectedConsult: event.target.value });
            $('#SubError5').hide();
        };
        _this.handleChangeTextarea6 = function (event) {
            _this.setState({ SelectedSellTo: event.target.value });
        };
        _this.handleChangeTextarea7 = function (event) {
            _this.setState({ regards1: event.target.value });
        };
        _this.handleChangeTextarea8 = function (event) {
            _this.setState({ SubContent1: event.target.value });
        };
        _this.InvoiceQuantity = function (index, IndoorInput, OutdoorInput) {
            //alert(index);
            var Quantity;
            var Total;
            var IndoorPowerInput = IndoorInput;
            var OutdoorPowerInput = OutdoorInput;
            $("#DynamicRow tr." + index + "-tablerow").each(function () {
                Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
            });
            Total = parseFloat(IndoorPowerInput) + parseFloat(OutdoorPowerInput);
            var totalpower = (Quantity * Total);
            var TotalDeci = (totalpower).toFixed(2);
            $("#DynamicRow tr." + index + "-tablerow").each(function () {
                $(this).find("td").eq(2).find("input[id*='QuantityNo']").val("" + Quantity + "");
                $(this).find("td").eq(6).text("" + TotalDeci + "");
            });
            _this.setState({ dataQuantity: Quantity });
            _this.GetTotal();
        };
        /*public GetBrandTypes() {
          var reactHandler = this;
          alert("Brand");
          var url = `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items$select=LinkTitle`;
          $.ajax({
            url: url,
            method: "GET",
            headers: {
              "Accept": "application/json; odata=verbose"
            },
            success: function (resultData) {
              reactHandler.setState({
                BrandPF: resultData.d.result
              });
              for (var i = 0; i < resultData.d.results.length; i++) {
                BrandTypeManual.push({ value: '' + resultData.d.results[i].LinkTitle + '', label: '' + resultData.d.results[i].LinkTitle + '' });
              }
              console.log(BrandTypeManual);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
          });
        }*/
        _this.GetModelTypes = function (selectedOptions2) {
            var selectedValue = selectedOptions2.value;
            _this.setState({
                SelectedBrandTypes: selectedValue
            });
            //var selectedValue = $('#Brand').val();
            var reactHandler = _this;
            reactHandler.setState({ selectedOptions2: selectedValue });
            //ModelTypeManual=[];
            //reactHandler.Test = [];
            for (var i = ManualBrand.length; i > 0; i--) {
                ManualBrand.pop();
            }
            var url = _this.props.siteurl + "/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname&$filter=Title eq '" + selectedValue + "'";
            $.ajax({
                url: url,
                method: "GET",
                headers: {
                    "Accept": "application/json; odata=verbose"
                },
                success: function (resultData) {
                    reactHandler.setState({
                        ModelPF: resultData.d.results
                    });
                    for (var i = 0; i < resultData.d.results.length; i++) {
                        ManualBrand.push({ value: '' + resultData.d.results[i].Modelname + '', label: '' + resultData.d.results[i].Modelname + '' });
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
            // reactHandler. ModelTypeManual=[];
        };
        _this.handleChangePf = function (selectedOptions2) {
            var selectedValue = selectedOptions2.value;
            var str = selectedValue.replace("\n", "");
            // alert(str);
            var reactHandler = _this;
            var url = _this.props.siteurl + "/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=Modelname eq '" + str + "'";
            //var url = `https://taqeef.sharepoint.com/sites/OPR/ACModel/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=Modelname eq '${selectedValue}'`;
            $.ajax({
                url: url,
                headers: {
                    "Accept": "application/json; odata=verbose"
                },
                success: function (resultData) {
                    for (var i = 0; i < resultData.d.results.length; i++) {
                        var Brand = resultData.d.results[i].LinkTitle;
                        var Model = resultData.d.results[i].Modelname;
                        var RatedCapacity = resultData.d.results[i].Rated_x0020_Capacity_Btu_h_T3;
                        var IndoorPowerInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        var OutdoorPowerInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        var RatedPowerFactor = resultData.d.results[i].Rated_Power_Factor_T3_x0020_;
                        var IndoorOutput = resultData.d.results[i].IndoorUnit_V_Ph_Hz;
                        var OutdoorOutput = resultData.d.results[i].OutdoorUnit_V_Ph_HZ_;
                        //var total = parseFloat(resultData.d.results[i].IndoorPowerInput_kW_T3) + parseFloat(resultData.d.results[i].OutdoorPowerInput_kW_T3);
                        if (resultData.d.results[i].OutdoorPowerInput_kW_T3 != null) {
                            OutdoorPowerInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        }
                        else {
                            OutdoorPowerInput = 0;
                        }
                        if (resultData.d.results[i].IndoorPowerInput_kW_T3 != null) {
                            IndoorPowerInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        }
                        else {
                            IndoorPowerInput = 0;
                        }
                        if (resultData.d.results[i].OutdoorUnit_V_Ph_HZ_ != null) {
                            OutdoorOutput = resultData.d.results[i].OutdoorUnit_V_Ph_HZ_;
                        }
                        else {
                            OutdoorOutput = 0;
                        }
                        {
                            $("#ManuallTable tr." + reactHandler.state.arrayIndex + "-tablerow").each(function () {
                                $(this).find("td").eq(0).find("div[id*='Brand']").remove();
                                $(this).find("td").eq(1).find("div[id*='Model']").remove();
                                $(this).find("td").eq(0).text('' + Brand + '');
                                $(this).find("td").eq(1).text('' + Model + '');
                                $(this).find("td").eq(3).find("input[id*='RatedCapacity']").val('' + RatedCapacity + '');
                                $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val('' + IndoorPowerInput + '');
                                $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val('' + OutdoorPowerInput + '');
                                //$(this).find("td").eq(6).find("input[id*='Total']").val('' + total + '');
                                $(this).find("td").eq(7).find("input[id*='RatedPowerFactor']").val('' + RatedPowerFactor + '');
                                $(this).find("td").eq(8).find("input[id*='IndoorOutput']").val('' + IndoorOutput + '');
                                $(this).find("td").eq(9).find("input[id*='OutdoorOutput']").val('' + OutdoorOutput + '');
                            });
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        };
        _this.handleAddRow = function () {
            //alert($('#OutdoorPowerInput').val());
            var status = true;
            var arrayIndex = _this.state.arrayIndex;
            var trIndex = $("#ManuallTable").find("tr").last();
            if (status == true && trIndex.find("[id*='QuantityNo']").val() != '' && trIndex.find("[id*='Total']").val() != NaN && trIndex.find("td").eq(1).text() != "Model" && trIndex.find("td").eq(0).text() != "Select") {
                for (var i = ManualBrand.length; i > 0; i--) {
                    ManualBrand.pop();
                }
                arrayIndex += 1;
                //setTimeout(() => {
                _this.getTable2(arrayIndex);
                //}, 1000);
            }
            else {
                $("#AlertModel").show();
            }
        };
        _this.handleChange3 = function (selectedOptions) {
            var reactHandler = _this;
            displayMultipInvoice = [];
            // $('#DynamicRow tr').remove();
            //$('#DynamicRow').empty();
            reactHandler.displayModel = [];
            reactHandler.setState({ showmodel: reactHandler.displayModel });
            if (reactHandler.state.IsOrderPresent == false) {
                var x = document.getElementsByClassName("banner home-banner powerfactor-banner relative");
                x[0].className = 'banner open home-banner powerfactor-banner relative';
                var y = document.getElementsByClassName("refresh-row-no");
                y[0].className = 'refresh-row';
                $(".home-sec").show();
                reactHandler.setState({ ToLeft: true });
                reactHandler.setState({ SubLeft: false });
                reactHandler.setState({ ModLeft: false });
                reactHandler.setState({ NoteLeft: false });
                reactHandler.setState({ ReceiLeft: false });
                $('#Third-table tr').empty();
                $("#complete").removeAttr("style");
                savearr2 = [];
                savearr3 = [];
                $("#Add").show();
                $(".if-single-invoice").hide();
                $(".if-multi-invoice").hide();
                $("#Invoice").show();
                $("#Left").show();
                $("#SubjectManually").hide();
                $("#to").hide();
                $("#FooterMenu1").hide();
                $("#FooterMenu").hide();
                $("#SubjectButton").hide();
                $("#ModelButton").hide();
                $("#Notes").hide();
                $("#Receiver").hide();
                $("#Preview").hide();
                $("#Manually").hide();
                $("#FooterMenu").hide();
                $("#SubjectManually").hide();
                $("#ModelManually").hide();
                $("#PreviewManual").hide();
                $("#LocationClass").removeClass("relatve current completed");
                $("#SubjectClass").removeClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
                $("#NotesClass").removeClass("relatve current completed");
                $("#ReceiverClass").removeClass("relatve current completed");
                $("#LocationClass").addClass("relatve current");
                $("#SubjectClass").addClass("relatve");
                $("#ModelClass").addClass("relatve");
                $("#NotesClass").addClass("relatve");
                $("#ReceiverClass").addClass("relatve");
                reactHandler.clearFieldManually();
                reactHandler.clearField();
                var selectedValue = selectedOptions.value;
                //alert(selectedValue);
                reactHandler.setState({ SelectedOrd: selectedValue });
                // console.log(`Selected: ${selectedOptions.label}`);
                var ProjectName;
                var customerName;
                var ConsultName;
                var SalesPersonCode;
                reactHandler.setState({ CreateManually: false });
                $.ajax({
                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ConsultCompName,ProjectName,SalespersonCode,SelltoCustomerName&$filter=OrderNo eq '" + selectedValue + "'",
                    type: "GET",
                    async: false,
                    headers: { 'Accept': 'application/json; odata=verbose;' },
                    success: function (resultData) {
                        if (resultData.d.results[0].SelltoCustomerName != null) {
                            customerName = resultData.d.results[0].SelltoCustomerName;
                        }
                        else {
                            customerName = "";
                        }
                        // console.log(resultData.d.results[0].SalespersonCode +"Salesperson");
                        if (resultData.d.results[0].ProjectName != null) {
                            ProjectName = resultData.d.results[0].ProjectName;
                        }
                        else {
                            ProjectName = "";
                        }
                        if (resultData.d.results[0].ConsultCompName != null) {
                            ConsultName = resultData.d.results[0].ConsultCompName;
                        }
                        else {
                            ConsultName = "";
                        }
                        if (resultData.d.results[0].SalespersonCode != null) {
                            SalesPersonCode = resultData.d.results[0].SalespersonCode;
                        }
                        else {
                            SalespersonCode = "";
                        }
                        if (resultData.d.results.length == 1) {
                            // alert("single");
                            reactHandler.setState({ IsOrderPresent: true });
                            var Selected = resultData.d.results[0].No;
                            reactHandler.name(resultData.d.results[0].No);
                            reactHandler.setState({
                                SelectedInvo: Selected,
                                SelectedProjName: ProjectName,
                                SelectedSellTo: customerName,
                                SelectedConsult: ConsultName,
                                SalesPersonCode: SalesPersonCode
                            });
                            $(".if-single-invoice").show();
                            $(".if-multi-invoice").hide();
                            $("#multipleInvoiceCheckbox").hide();
                        }
                        else if (resultData.d.results.length > 1) {
                            reactHandler.setState({ MutlipleNew: resultData.d.results });
                            for (var i = 0; i < resultData.d.results.length; i++) {
                                var Selected = resultData.d.results[i].No;
                                reactHandler.setState({ SalesPersonCode: SalesPersonCode });
                                reactHandler.MultipleInvoice(Selected, ProjectName, customerName, ConsultName);
                            }
                            reactHandler.setState({
                                showinvoice: displayMultipInvoice
                            });
                        }
                        $("#multipleInvoiceCheckbox").show();
                        $(".if-multi-invoice").show();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            }
            else {
                reactHandler.displayModel = [];
                reactHandler.setState({ showmodel: reactHandler.displayModel });
                //$('#DynamicRow tr').remove();
                //  $('#DynamicRow').empty();
                displayMultipInvoice = [];
                // $("table #First-table").empty();
                var x = document.getElementsByClassName("banner home-banner powerfactor-banner relative");
                x[0].className = 'banner open home-banner powerfactor-banner relative';
                var y = document.getElementsByClassName("refresh-row-no");
                y[0].className = 'refresh-row';
                $(".home-sec").show();
                $("#complete").removeAttr("style");
                $("#complete").hide();
                reactHandler.clearFieldManually();
                reactHandler.clearField();
                $(".if-single-invoice").hide();
                $(".if-multi-invoice").hide();
                $("#Add").show();
                $('#Third-table tr').empty();
                $("#Invoice").show();
                $("#Left").show();
                $("#SubjectManually").hide();
                $("#to").hide();
                $("#FooterMenu1").hide();
                $("#FooterMenu").hide();
                $("#SubjectButton").hide();
                $("#ModelButton").hide();
                $("#Notes").hide();
                $("#Receiver").hide();
                $("#Preview").hide();
                $("#Manually").hide();
                $("#FooterMenu").hide();
                $("#SubjectManually").hide();
                $("#ModelManually").hide();
                $("#PreviewManual").hide();
                $("#LocationClass").removeClass("relatve current completed");
                $("#SubjectClass").removeClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
                $("#NotesClass").removeClass("relatve current completed");
                $("#ReceiverClass").removeClass("relatve current completed");
                $("#LocationClass").addClass("relatve current");
                $("#SubjectClass").addClass("relatve");
                $("#ModelClass").addClass("relatve");
                $("#NotesClass").addClass("relatve");
                $("#ReceiverClass").addClass("relatve");
                reactHandler.setState({ ToLeft: true });
                reactHandler.setState({ SubLeft: false });
                reactHandler.setState({ ModLeft: false });
                reactHandler.setState({ NoteLeft: false });
                reactHandler.setState({ ReceiLeft: false });
                var selectedValue = selectedOptions.value;
                //alert(selectedValue);
                reactHandler.setState({ SelectedOrd: selectedValue });
                // console.log(`Selected: ${selectedOptions.label}`);
                var customerName;
                var ProjectName;
                var ConsultName;
                var SalespersonCode;
                reactHandler.setState({ CreateManually: false });
                $.ajax({
                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ConsultCompName,SalespersonCode,ProjectName,SelltoCustomerName&$filter=OrderNo eq '" + selectedValue + "'",
                    type: "GET",
                    async: false,
                    headers: { 'Accept': 'application/json; odata=verbose;' },
                    success: function (resultData) {
                        if (resultData.d.results[0].SelltoCustomerName != null) {
                            customerName = resultData.d.results[0].SelltoCustomerName;
                        }
                        else {
                            customerName = "";
                        }
                        if (resultData.d.results[0].ProjectName != null) {
                            ProjectName = resultData.d.results[0].ProjectName;
                        }
                        else {
                            ProjectName = "";
                        }
                        if (resultData.d.results[0].ConsultCompName != null) {
                            ConsultName = resultData.d.results[0].ConsultCompName;
                        }
                        else {
                            ConsultName = "";
                        }
                        if (resultData.d.results[0].SalespersonCode != null) {
                            SalesPersonCode = resultData.d.results[0].SalespersonCode;
                        }
                        else {
                            SalespersonCode = "";
                        }
                        if (resultData.d.results.length == 1) {
                            reactHandler.setState({ IsOrderPresent: true });
                            var Selected = resultData.d.results[0].No;
                            reactHandler.name(Selected);
                            reactHandler.setState({
                                SelectedInvo: resultData.d.results[0].No,
                                SelectedProjName: ProjectName,
                                SelectedSellTo: customerName,
                                SelectedConsult: ConsultName,
                                SalesPersonCode: SalesPersonCode
                            });
                            $(".if-single-invoice").show();
                            $(".if-multi-invoice").hide();
                            $("#multipleInvoiceCheckbox").hide();
                        }
                        else if (resultData.d.results.length > 1) {
                            reactHandler.setState({ MutlipleNew: resultData.d.results });
                            for (var i = 0; i < resultData.d.results.length; i++) {
                                var Selected = resultData.d.results[i].No;
                                reactHandler.setState({ SalesPersonCode: SalesPersonCode });
                                reactHandler.MultipleInvoice(Selected, ProjectName, customerName, ConsultName);
                            }
                            reactHandler.setState({
                                showinvoice: displayMultipInvoice
                            });
                            $("#multipleInvoiceCheckbox").show();
                            $(".if-multi-invoice").show();
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            }
        };
        _this.handleChange2 = function (selectedOptions) {
            var selectedValue = selectedOptions.value;
            //alert(selectedValue);
            _this.setState({ SelectedProject: selectedValue });
            // console.log(`Selected: ${selectedOptions.label}`);
        };
        _this.handleChangeConsultantName = function (selectedOptions) {
            var selectedValue = selectedOptions.value;
            //alert(selectedValue);
            _this.setState({ SelectedConsultant: selectedValue });
            // console.log(`Selected: ${selectedOptions.label}`);
        };
        _this.handleChangeCustomer = function (selectedOptions) {
            var selectedValue = selectedOptions.value;
            //alert(selectedValue);
            _this.setState({ SelectedCustomer: selectedValue });
            // console.log(`Selected: ${selectedOptions.label}`);
        };
        _this.handleInputChange = function (event) {
            _this.GetPfAuoto(event);
        };
        _this.handleClick = function (Locations) {
            $("#complete").show();
            $("#DropButton").hide();
            $("#less").hide();
            $("#Add").show();
            $("#to").show();
            var x = document.getElementsByClassName("relatve current");
            x[0].className = 'relatve current completed';
            // alert(Locations);
            var reactHandler = _this;
            reactHandler.setState({ SelectedLoc: Locations });
            //location.href = `${this.props.siteurl}/SitePages/NewsReadMore.aspx?ItemID=${Locations}`;
            $.ajax({
                url: _this.props.siteurl + "/_api/web/lists/getbytitle('ToLocation')/items?$select=Address&$filter=Locations eq '" + Locations + "'",
                type: "GET",
                headers: { 'Accept': 'application/json; odata=verbose;' },
                success: function (resultData) {
                    if (reactHandler.state.ToLeft == true) {
                        $("#ToButton").html(resultData.d.results[0].Address);
                        $("#AddressPreview").html(resultData.d.results[0].Address);
                        $("#AddressPreviewManually").html(resultData.d.results[0].Address);
                        var test = $("#AddressPreviewManually").html(resultData.d.results[0].Address);
                        var test2 = test.text();
                        reactHandler.setState({ SelectedAddress: test2 });
                        $("#ToButton").addClass("completed");
                        $("#SubjectClass").addClass("relative current");
                        reactHandler.setState({ SubLeft: true });
                        reactHandler.setState({ ModLeft: false });
                        reactHandler.setState({ NoteLeft: false });
                        reactHandler.setState({ ReceiLeft: false });
                        /* let dummyElement = document.createElement("DIV");
                         dummyElement .innerHTML = resultData.d.results[0].Address;
                         var outputText = dummyElement.innerText;
                         reactHandler.setState({
                           address: outputText,
                         });*/
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        };
        _this.GetModelNoQTY = function () {
            // var filterString = `ItemNo eq`;
            return $.ajax({
                url: this.props.siteurl + "/_api/web/lists/getbytitle('InvoiceSalesLinesMaster')/items?$select=No,Quantity",
                type: "GET",
                headers: { 'Accept': 'application/json; odata=verbose;' }
            });
        };
        _this.AddListItems2 = function (MasterId) {
            //console.log(savearr2);
            for (var i = 0; i < savearr2.length; i++) {
                var Model1 = savearr2[i].Model;
                var Brand = savearr2[i].Brand;
                var Quantity = savearr2[i].QuantityNumber;
                var RatedCapacity = savearr2[i].RatedCapacity;
                var IndoorInput = savearr2[i].IndoorPowerInput;
                var OutdoorInput = savearr2[i].OutdoorPowerInput;
                var RatedPowerFactor = savearr2[i].RatedPowerfactor;
                var IndoorOutput = savearr2[i].IndoorOutputunit;
                var OutdoorOutput = savearr2[i].OutdoorOutputunit;
                var TotalPower = savearr2[i].Total;
                var newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                newweb.lists.getByTitle('ManuallyModel').items.add({
                    "Brand": Brand,
                    "Model": Model1,
                    "RatedCapacity": RatedCapacity.toString(),
                    "IndoorPowerInput": IndoorInput.toString(),
                    "OutdoorPowerInput": OutdoorInput.toString(),
                    "Quantity": Quantity.toString(),
                    "TotalPower": TotalPower,
                    "PowerFactor": RatedPowerFactor.toString(),
                    "Output": IndoorOutput,
                    "OutdoorOutput": OutdoorOutput,
                    "ManuallyIDId": MasterId
                }).then(function (i) {
                    //alert(Brand);
                });
            }
            //console.log(savearr);
        };
        _this.AddListItems = function (MasterId) {
            var Brand;
            var Model;
            var Category;
            var Quantity;
            var RatedCapacity;
            var IndoorPowerInput;
            var OutdoorPowerInput;
            var TotalPower;
            var PowerFactor;
            var Output;
            var OutdoorOutput;
            $('#ManuallTable tbody tr').each(function () {
                Brand = $(this).find("td").eq(0).text();
                Model = $(this).find("td").eq(1).text();
                Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
                RatedCapacity = $(this).find("td").eq(3).find("input[id*='RatedCapacity']").val();
                IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
                OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
                TotalPower = $(this).find("td").eq(6).find("input[id*='Total']").val();
                PowerFactor = $(this).find("td").eq(7).find("input[id*='RatedPowerFactor']").val();
                Output = $(this).find("td").eq(8).find("input[id*='IndoorOutput']").val();
                OutdoorOutput = $(this).find("td").eq(9).find("input[id*='OutdoorOutput']").val();
                var newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                newweb.lists.getByTitle('ManuallyModel').items.add({
                    "Brand": Brand,
                    "Model": Model,
                    "Quantity": Quantity,
                    "RatedCapacity": RatedCapacity,
                    "IndoorPowerInput": IndoorPowerInput,
                    "OutdoorPowerInput": OutdoorPowerInput,
                    "TotalPower": TotalPower,
                    "PowerFactor": PowerFactor,
                    "Output": Output,
                    "OutdoorOutput": OutdoorOutput,
                    "ManuallyIDId": MasterId
                }).then(function (i) {
                });
            });
        };
        _this.SuccessModel = function () {
            $("#AlertModel").hide();
            $("#AlertModel2").hide();
            $("#AlertSubject").hide();
        };
        _this.ShowDrop = function () {
            _this.clearFieldManually();
            var x = document.getElementById('DropButton');
            var y = document.getElementById('Add');
            var z = document.getElementById('less');
            if (x.style.display == 'none') {
                x.style.display = 'block';
                y.style.display = 'none';
                z.style.display = 'block';
            }
            else {
                x.style.display = 'none';
                y.style.display = 'block';
                z.style.display = 'none';
            }
        };
        _this.ShowSubject = function () {
            if (_this.state.ToLeft == true && _this.state.SubLeft == true) {
                $("#LocationClass").addClass("relatve current completed");
                if (_this.state.CreateManually == true) {
                    $("#SubjectManually").show();
                    $("#SubjectButton").hide();
                    _this.setState({ ModLeft: true });
                    _this.setState({ NoteLeft: false });
                    _this.setState({ ReceiLeft: false });
                    $("#SubjectClass").addClass("relatve current completed");
                }
                else {
                    $("#SubjectButton").show();
                    $("#SubjectManually").hide();
                    //$("#myTextarea").val(this.state.SelectedCustomer);
                    document.getElementById("myTextarea").value = "" + _this.state.SelectedProjName + "";
                    document.getElementById("myTextarea2").value = "" + _this.state.SelectedConsult + "";
                    document.getElementById("myTextarea3").value = "" + _this.state.SelectedSellTo + "";
                    $("#SubjectClass").addClass("relatve current completed");
                    _this.setState({ ModLeft: true });
                    _this.setState({ NoteLeft: false });
                    _this.setState({ ReceiLeft: false });
                }
            }
        };
        _this.ShowModel = function () {
            if (_this.state.ToLeft == true && _this.state.SubLeft == true && _this.state.ModLeft == true) {
                $("#ModelClass").addClass("relatve current");
                if (_this.state.CreateManually == true) {
                    if (_this.SubjectValidationManually()) {
                        var x = document.getElementById('ModelManually');
                        var y = document.getElementById('SubjectManually');
                        _this.setState({ NoteLeft: true });
                        _this.setState({ ReceiLeft: false });
                        if (x.style.display == 'none') {
                            x.style.display = 'block';
                            y.style.display = 'block';
                            $("#complete1").show();
                            $("#ModelClass").addClass("relatve current completed");
                        }
                    }
                }
                else {
                    if (_this.SaveSubjectValidation()) {
                        var x = document.getElementById('ModelButton');
                        var y = document.getElementById('SubjectButton');
                        _this.setState({ NoteLeft: true });
                        _this.setState({ ReceiLeft: false });
                        if (x.style.display == 'none') {
                            x.style.display = 'block';
                            y.style.display = 'block';
                            $("#complete1").show();
                            $("#ModelClass").addClass("relatve current completed");
                        }
                    }
                }
            }
        };
        _this.ShowNotes = function () {
            if (_this.state.ToLeft == true && _this.state.SubLeft == true && _this.state.ModLeft == true && _this.state.NoteLeft == true) {
                if (_this.state.CreateManually == true) {
                    if (_this.SaveManualModelValidation()) {
                        var x = document.getElementById('ModelManually');
                        var y = document.getElementById('SubjectManually');
                        var z = document.getElementById('Notes');
                        // this.SaveForPrint();
                        _this.SubjectValidationManually();
                        _this.setState({ ReceiLeft: true });
                        if (z.style.display == 'none') {
                            x.style.display = 'block';
                            y.style.display = 'block';
                            z.style.display = 'block';
                            $("#complete1").show();
                            $("#FooterMenu1").show();
                            $("#FooterMenu").hide();
                            $("#ModelClass").addClass("relatve current completed");
                            $("#NotesClass").addClass("relatve current completed");
                        }
                    }
                }
                else if (_this.SaveModelValidation()) {
                    $("#ModelClass").addClass("relatve current completed");
                    $("#NotesClass").addClass("relatve current");
                    var x = document.getElementById('ModelButton');
                    var y = document.getElementById('SubjectButton');
                    var z = document.getElementById('Notes');
                    _this.setState({ ReceiLeft: true });
                    if (z.style.display == 'none') {
                        $("#ModelClass").addClass("relatve current completed");
                        $("#NotesClass").addClass("relatve current completed");
                        x.style.display = 'block';
                        y.style.display = 'block';
                        z.style.display = 'block';
                        $("#complete2").show();
                        $("#FooterMenu1").hide();
                        $("#FooterMenu").show();
                    }
                }
            }
        };
        _this.ShowReceiver = function () {
            //alert(this.state.regards);
            _this.setState({ SubContent1: _this.state.SubContent });
            _this.setState({ regards1: _this.state.regards });
            // this.AddItems();
            if (_this.state.ToLeft == true && _this.state.SubLeft == true && _this.state.ModLeft == true && _this.state.NoteLeft == true && _this.state.ReceiLeft == true) {
                if (_this.state.CreateManually == true) {
                    if (_this.SubjectValidationManually()) {
                        if (_this.SaveManualModelValidation()) {
                            _this.SaveForPrint();
                            document.getElementById("regard").value = "" + _this.state.regards + "";
                            document.getElementById("SubjectContent").value = "" + _this.state.SubContent + "";
                            $("#NotesClass").addClass("relatve current completed");
                            $("#ReceiverClass").addClass("relatve current completed");
                            _this.clearField();
                            //var x = document.getElementById('ModelButton');
                            //var y = document.getElementById('SubjectButton');
                            var z = document.getElementById('Notes');
                            var f = document.getElementById('Receiver');
                            if (f.style.display == 'none') {
                                // x.style.display = 'block';
                                // y.style.display = 'block';
                                z.style.display = 'block';
                                f.style.display = 'block';
                                $("#complete2").show();
                            }
                        }
                    }
                }
                else {
                    if (_this.SaveSubjectValidation()) {
                        $("#NotesClass").addClass("relatve current completed");
                        $("#ReceiverClass").addClass("relatve current");
                        // this.setState({ SubContent1: this.state.SubContent });
                        // this.setState({ regards1: this.state.regards });
                        document.getElementById("regard").value = "" + _this.state.regards + "";
                        document.getElementById("SubjectContent").value = "" + _this.state.SubContent + "";
                        _this.clearField();
                        var x = document.getElementById('ModelButton');
                        var y = document.getElementById('SubjectButton');
                        var z = document.getElementById('Notes');
                        var f = document.getElementById('Receiver');
                        _this.AddItems();
                        if (f.style.display == 'none') {
                            x.style.display = 'block';
                            y.style.display = 'block';
                            z.style.display = 'block';
                            f.style.display = 'block';
                            $("#complete2").show();
                        }
                    }
                }
            }
        };
        _this.HideReceiver = function () {
            _this.clearField();
            _this.setState({ SubContent1: '' });
            _this.setState({ regards1: '' });
            $("#if-not-valid-email").hide();
            $("#regError").hide();
            $('#emptyToAddress').hide();
            var x = document.getElementById('Receiver');
            if (x.style.display == 'block') {
                x.style.display = 'none';
            }
        };
        _this.ShowPreview = function () {
            if (_this.SaveModelValidation()) {
                $('#Third-table').empty();
                savearr2 = [];
                InvoiceModel = [];
                _this.AddItems();
                $("#Preview").show();
            }
        };
        _this.ShowManualPreview = function () {
            if (_this.SaveManualModelValidation()) {
                _this.AddItemsManually();
                _this.SaveForPrint();
                // $("#Second-table").empty();
                $("#PreviewManual").show();
            }
        };
        _this.ShowManualSend = function () {
            // this.AddItemsManually();
            _this.ShowReceiver();
            //this.SaveForPrint();
        };
        _this.ShowSend = function () {
            $('#Third-table tr').empty();
            //savearr2=[];
            // this.AddItems();
            _this.ShowReceiver();
        };
        _this.CancelAlert = function () {
            $("#CancelEverything").show();
        };
        _this.StopProcess = function () {
            $("#CancelEverything").hide();
        };
        _this.CancelManual = function () {
            savearr2 = [];
            savearr3 = [];
            $('#Third-table tr').empty();
            var x = document.getElementsByClassName("banner open home-banner powerfactor-banner relative");
            x[0].className = 'banner home-banner powerfactor-banner relative';
            var y = document.getElementsByClassName("refresh-row");
            y[0].className = 'refresh-row-no';
            $(".home-sec").hide();
            $("#LocationClass").removeClass("relatve current completed");
            $("#SubjectClass").removeClass("relatve current completed");
            $("#ModelClass").removeClass("relatve current completed");
            $("#NotesClass").removeClass("relatve current completed");
            $("#ReceiverClass").removeClass("relatve current completed");
            $("#LocationClass").addClass("relatve current");
            $("#SubjectClass").addClass("relatve");
            $("#ModelClass").addClass("relatve");
            $("#NotesClass").addClass("relatve");
            $("#ReceiverClass").addClass("relatve");
            $("#Invoice").hide();
            $("#Left").hide();
            $("#SubjectManually").hide();
            $("#to").hide();
            $("#FooterMenu1").hide();
            $("#FooterMenu").hide();
            $("#SubjectButton").hide();
            $("#ModelButton").hide();
            $("#Notes").hide();
            $("#Receiver").hide();
            $("#Preview").hide();
            $("#Manually").hide();
            $("#FooterMenu").hide();
            $("#SubjectManually").hide();
            $("#ModelManually").hide();
            $("#PreviewManual").hide();
            $("#Sucess").hide();
            $("#CancelEverything").hide();
            _this.setState({ ToLeft: false });
            _this.setState({ SubLeft: false });
            _this.setState({ ModLeft: false });
            _this.setState({ NoteLeft: false });
            _this.setState({ ReceiLeft: false });
            _this.setState({ CreateManually: false });
            _this.clearFieldManually();
            _this.clearField();
            // $("table #First-table").empty();
            // $('#ManuallTable tbody tr').empty();
            // this.getTable2(0);
        };
        _this.HideManualPreview = function () {
            $("#PreviewManual").hide();
            savearr3 = [];
            $("#Second-table").empty();
        };
        _this.HidePreview = function () {
            savearr2 = [];
            InvoiceModel = [];
            $("#Preview").hide();
            $('#Third-table').empty();
        };
        _this.ShowManually = function () {
            $("#InvoError").hide();
            $(".if-single-invoice").hide();
            $(".if-multi-invoice").hide();
            $("#complete").removeAttr("style");
            //$('#DynamicRow tr').empty();
            //$('#DynamicRow').empty();
            _this.displayModel = [];
            _this.displayData = [];
            // this.getTable2(0);
            _this.setState({ showdata: _this.displayData });
            _this.setState({ showmodel: _this.displayModel });
            $('#Third-table tr').empty();
            // $('#ManuallTable tbody tr').empty();
            /* $('#ManuallTable tbody tr').each(function () {
                var totalRowCount = $("#ManuallTable tbody tr").length;
                var rowCount = $("#ManuallTable td").closest("tr").length;
                if (rowCount == 1) {
                  $(this).find("input[id*='Brand']").val('');
                  $(this).find("td").eq(1).text('');
                  $(this).find("input[id*='QuantityNo']").val('');
                  $(this).find("input[id*='RatedCapacity']").val('');
                  $(this).find("input[id*='IndoorPowerInput']").val('');
                  $(this).find("input[id*='OutdoorPowerInput']").val('');
                  $(this).find("input[id*='Total']").val('');
                  $(this).find("input[id*='RatedPowerFactor']").val('');
                  $(this).find("input[id*='IndoorOutput']").val('');
                  $(this).find("input[id*='OutdoorOutput']").val('');
                }
                else {
                  $(this).find("input[id*='Brand']").val('');
                  $(this).find("td").eq(1).text('');
                  $(this).find("input[id*='QuantityNo']").val('');
                  $(this).find("input[id*='RatedCapacity']").val('');
                  $(this).find("input[id*='IndoorPowerInput']").val('');
                  $(this).find("input[id*='OutdoorPowerInput']").val('');
                  $(this).find("input[id*='Total']").val('');
                  $(this).find("input[id*='RatedPowerFactor']").val('');
                  $(this).find("input[id*='IndoorOutput']").val('');
                  $(this).find("input[id*='OutdoorOutput']").val('');
                  var trIndex = $(this).closest("tr").index();
                  if (trIndex > 0) {
                    $(this).closest("tr").remove();
                    rowCount = rowCount - 1;
                  }
                }
              })*/
            _this.clearFieldManually();
            _this.clearField();
            savearr2 = [];
            savearr3 = [];
            $("#LocationClass").removeClass("relatve current completed");
            $("#SubjectClass").removeClass("relatve current completed");
            $("#ModelClass").removeClass("relatve current completed");
            $("#NotesClass").removeClass("relatve current completed");
            $("#ReceiverClass").removeClass("relatve current completed");
            $("#LocationClass").addClass("relatve current");
            $("#SubjectClass").addClass("relatve");
            $("#ModelClass").addClass("relatve");
            $("#NotesClass").addClass("relatve");
            $("#ReceiverClass").addClass("relatve");
            $('#Invorder').val('');
            _this.setState({ CreateManually: true });
            $("#Manually").show();
            $("#to").hide();
            $("#Notes").hide();
            $("#SubjectButton").hide();
            $("#ModelButton").hide();
            $("#SubjectManually").hide();
            $("#to").hide();
            $("#FooterMenu1").hide();
            $("#FooterMenu").hide();
            $("#SubjectButton").hide();
            $("#ModelButton").hide();
            $("#Notes").hide();
            $("#Receiver").hide();
            $("#Preview").hide();
            $("#FooterMenu").hide();
            $("#SubjectManually").hide();
            $("#ModelManually").hide();
            $("#PreviewManual").hide();
            _this.setState({ ToLeft: true });
            _this.setState({ SubLeft: false });
            _this.setState({ ModLeft: false });
            _this.setState({ NoteLeft: false });
            _this.setState({ ReceiLeft: false });
            _this.setState({ CreateManually: false });
        };
        _this.HideManually = function () {
            $("#Manually").hide();
            $('#Invord').val('');
            var x = document.getElementsByClassName("banner open home-banner powerfactor-banner relative");
            x[0].className = 'banner home-banner powerfactor-banner relative';
            var y = document.getElementsByClassName("refresh-row");
            y[0].className = 'refresh-row-no';
            $(".home-sec").hide();
            $("#LocationClass").removeClass("relatve current completed");
            $("#SubjectClass").removeClass("relatve current completed");
            $("#ModelClass").removeClass("relatve current completed");
            $("#NotesClass").removeClass("relatve current completed");
            $("#ReceiverClass").removeClass("relatve current completed");
            $("#LocationClass").addClass("relatve current");
            $("#SubjectClass").addClass("relatve");
            $("#ModelClass").addClass("relatve");
            $("#NotesClass").addClass("relatve");
            $("#ReceiverClass").addClass("relatve");
            $("#Left").show();
            $("#Invoice").hide();
            $("#SubjectManually").hide();
            $("#to").hide();
            $("#FooterMenu1").hide();
            $("#FooterMenu").hide();
            $("#SubjectButton").hide();
            $("#ModelButton").hide();
            $("#Notes").hide();
            $("#Receiver").hide();
            $("#Preview").hide();
            $("#FooterMenu").hide();
            $("#SubjectManually").hide();
            $("#ModelManually").hide();
            $("#PreviewManual").hide();
            _this.setState({ CreateManually: false });
            $('#Invord').val('');
            _this.clearFieldManually();
        };
        _this.clearField = function () {
            $('#ToSaveRecevier').val('');
            $('#Cc').val('');
        };
        _this.clearFieldManually = function () {
            $('#myTextarea').val('');
            $('#myTextarea2').val('');
            $('#myTextarea3').val('');
            $('#myTextarea4').val('');
            $('#myTextarea5').val('');
            $('#myTextarea6').val('');
        };
        _this.displayData = [];
        _this.displayModel = [];
        // this.Test=[];
        //this.PushOptions = this.PushOptions.bind(this);
        _this.MultipleInvoice = _this.MultipleInvoice.bind(_this);
        sp_loader_1.SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
        sp_loader_1.SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
        sp_loader_1.SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        _this.state = {
            OrderNo: [],
            No: [],
            UserPicture: "",
            UserName: "",
            Designation: "",
            Email: "",
            options: [],
            selectedOptions: '',
            selectedOptions2: '',
            SalesInvoiceHeaderData: [],
            Locations: [],
            SelectedInvo: '',
            SelectedOrd: '',
            SelectedMod: '',
            SelectedOrder: [],
            SelectedLoc: '',
            SelectedProject: '',
            SelectedConsultant: '',
            SelectedCustomer: '',
            items: [],
            items2: [],
            items3: [],
            rows: [],
            rowLimit: 10,
            SalesPersonCode: "",
            category: '',
            brand: '',
            address: '',
            Quantity: [],
            ModelNumber: [],
            ModelTypeArray: [],
            QuantityNumber: "",
            ToAddress: '',
            From: '',
            Subject: '',
            SubjectManually: '',
            Details: '',
            Model: '',
            currentDate: Date().toLocaleString(),
            sum: "",
            QuantityNo: [],
            CreateManually: false,
            SelectedProjName: '',
            SelectedSellTo: '',
            SelectedConsult: '',
            MasterID: '',
            ReceiversID: '',
            MasterNO: '',
            IsRowPresent: false,
            IsOrderPresent: false,
            count: 0,
            TotlaNoQuantity: 0,
            TotalModel: 0,
            regards1: '',
            SubContent1: '',
            regards: "Taqeef",
            SubContent: "Please find the attached powerfactor letter to this email for the proposed models. Should any further amendments be required,do let us know.",
            IsRelative: false,
            ToLeft: false,
            SubLeft: false,
            ModLeft: false,
            NoteLeft: false,
            ReceiLeft: false,
            SelectedAddress: '',
            ToStatus: false,
            showdata: [],
            showmodel: [],
            showinvoice: [],
            ModelPF: [],
            BrandPF: [],
            arrayIndex: 0,
            dataQuantity: '',
            BrandManualType: [],
            GetInvoiceNo: [],
            MutlipleNew: [],
            SelectedBrandTypes: ''
        };
        return _this;
    }
    NewPowerFactor.prototype.GetDetails = function (data) {
        //alert(data);
        var selected = data;
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('PFMaster')/items?$select=Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_&$filter=NavCode eq '" + selected + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    items2: resultData.d.results
                });
                // console.log("Selected Data" + resultData.d.results);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    NewPowerFactor.prototype.name = function (selectedValue) {
        this.setState({
            SelectedInvo: selectedValue
        });
        //var selected = selectedValue;
        // alert(selected);
        var reactHandler = this;
        TotalModelCount = 0;
        TotalCount = 0;
        reactHandler.setState({ TotlaNoQuantity: TotalCount });
        reactHandler.setState({ TotalModel: TotalModelCount });
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('MasterSNC')/items?$select=MODEL_NO,ORDER_QTY&$filter=SALES_INVOICE_NUMBER eq '" + selectedValue + "'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    QuantityNo: resultData.d.results,
                    ModelNumber: resultData.d.results
                });
                for (var i = 0; i < resultData.d.results.length; i++) {
                    var ModelQuantity = resultData.d.results[i].MODEL_NO;
                    var QuantityNumber = resultData.d.results[i].ORDER_QTY;
                    reactHandler.GetModelName(ModelQuantity, QuantityNumber, i);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    NewPowerFactor.prototype.name3 = function (selectedValue) {
        //console.log(selectedValue+"from name3");
        var reactHandler = this;
        //alert(selectedValue);
        /* alert($("#DynamicRow").find("tr").length + "outside");
         if ($("#DynamicRow").find("tr").length > 0) {
           $("#DynamicRow").find("tr").detach();
           alert($('#DynamicRow').find("tr").length + "inside");
         }*/
        //$('#DynamicRow').empty();
        //reactHandler.displayModel = [];
        /* reactHandler.setState({
           SelectedInvo: selectedValue
         });*/
        reactHandler.setState({ ToLeft: true });
        reactHandler.setState({ SubLeft: false });
        reactHandler.setState({ ModLeft: false });
        reactHandler.setState({ NoteLeft: false });
        reactHandler.setState({ ReceiLeft: false });
        reactHandler.setState({ CreateManually: false });
        $("#complete").removeAttr("style");
        $("#LocationClass").removeClass("relatve current completed");
        $("#SubjectClass").removeClass("relatve current completed");
        $("#ModelClass").removeClass("relatve current completed");
        $("#NotesClass").removeClass("relatve current completed");
        $("#ReceiverClass").removeClass("relatve current completed");
        $("#LocationClass").addClass("relatve current");
        $("#SubjectClass").addClass("relatve");
        $("#ModelClass").addClass("relatve");
        $("#NotesClass").addClass("relatve");
        $("#ReceiverClass").addClass("relatve");
        $("#SubjectManually").hide();
        $("#to").hide();
        $("#FooterMenu1").hide();
        $("#FooterMenu").hide();
        $("#SubjectButton").hide();
        $("#ModelButton").hide();
        $("#Notes").hide();
        $("#Receiver").hide();
        $("#Preview").hide();
        $("#Manually").hide();
        $("#FooterMenu").hide();
        $("#SubjectManually").hide();
        $("#ModelManually").hide();
        $("#PreviewManual").hide();
        // $(".if-single-invoice").show();
        // reactHandler.displayModel = [];
        // reactHandler.setState({ showmodel: reactHandler.displayModel });
        // var test = 0;
        // var test_modal = 0;
        //  reactHandler.setState({ TotlaNoQuantity: test });
        // reactHandler.setState({ TotalModel: test_modal });
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('MasterSNC')/items?$select=MODEL_NO,ORDER_QTY&$filter=SALES_INVOICE_NUMBER eq '" + selectedValue + "'",
            type: "GET",
            async: false,
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    QuantityNo: resultData.d.results,
                    ModelNumber: resultData.d.results
                });
                //console.log(selectedValue);
                for (var i = 0; i < resultData.d.results.length; i++) {
                    // let InvoiceStored=resultData.d.results[i].SALES_INVOICE_NUMBER;
                    var ModelQuantity = resultData.d.results[i].MODEL_NO;
                    //console.log(resultData.d.results.SALES_INVOICE_NUMBER);
                    var QuantityNumber = resultData.d.results[i].ORDER_QTY;
                    reactHandler.GetModelName3(ModelQuantity, QuantityNumber, i);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    NewPowerFactor.prototype.GetModelName3 = function (dataNo, dataQuantity1, count) {
        var reactHandler = this;
        {
            savearr2 = [];
            savearr3 = [];
            $.ajax({
                url: this.props.siteurl + "/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=NavCode eq '" + dataNo + "'",
                type: "GET",
                async: false,
                headers: { 'Accept': 'application/json; odata=verbose;' },
                success: function (resultData) {
                    reactHandler.setState({
                        items3: resultData.d.results
                    });
                    // console.log(reactHandler.state.items3);
                    for (var i = 0; i < resultData.d.results.length; i++) {
                        var Model = resultData.d.results[i].Modelname;
                        // console.log(Model);
                        //var Category = resultData.d.results[i].Category;
                        var Brand = resultData.d.results[i].LinkTitle;
                        var RatedCapacity = resultData.d.results[i].Rated_x0020_Capacity_Btu_h_T3;
                        var IndoorInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        var OutdoorInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        var RatedPowerFactor = resultData.d.results[i].Rated_Power_Factor_T3_x0020_;
                        var IndoorOutput = resultData.d.results[i].IndoorUnit_V_Ph_Hz;
                        var OutdoorOutput = resultData.d.results[i].OutdoorUnit_V_Ph_HZ_;
                        //console.log(dataNo, resultData.d.results[i].Modelname, dataQuantity1);
                        if (resultData.d.results[i].IndoorPowerInput_kW_T3 != null) {
                            IndoorInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        }
                        else {
                            IndoorInput = 0;
                        }
                        if (resultData.d.results[i].OutdoorPowerInput_kW_T3 != null) {
                            OutdoorInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        }
                        else {
                            OutdoorInput = 0;
                        }
                        var Total = parseFloat(IndoorInput) + parseFloat(OutdoorInput);
                        var totalpower = (dataQuantity1 * Total);
                        var TotalDeci = (totalpower).toFixed(2);
                        var Deci = parseFloat(TotalDeci);
                        //const Deci = TotalDeci;
                        // reactHandler.GetTotal();
                        var ModelQuantiyUnique = Model;
                        var tempid = ModelQuantiyUnique.replace(/([,.*/])+/g, '');
                        ModelQuantityArrExist.push(ModelQuantiyUnique);
                        console.log(ModelQuantityArrExist);
                        if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArr)) {
                            /*var test = $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val().toString();
                            var Quantity = parseInt(test)+ dataQuantity1;
                            $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val(""+Quantity+"");
                          TotalCount = TotalCount + dataQuantity1;
                          reactHandler.setState({ TotlaNoQuantity: TotalCount });*/
                        }
                        else {
                            if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArrExist)) {
                                ModelQuantityArr.push(ModelQuantiyUnique);
                                reactHandler.setState({ dataQuantity: dataQuantity1 });
                                TotalCount = TotalCount + dataQuantity1;
                                reactHandler.setState({ TotlaNoQuantity: TotalCount });
                                TotalModelCount = TotalModelCount + Deci;
                                var TotalModelCountFix = parseFloat(TotalModelCount.toFixed(2));
                                reactHandler.setState({ TotalModel: TotalModelCountFix });
                                reactHandler.displayModel.push(React.createElement("tr", { className: count + "-tablerow", id: tempid },
                                    React.createElement("td", null, Brand),
                                    React.createElement("td", null, Model),
                                    React.createElement("td", null,
                                        React.createElement("input", { type: "text", id: "QuantityNo", defaultValue: dataQuantity1, onChange: function () { return reactHandler.InvoiceQuantity(count, IndoorInput, OutdoorInput); } })),
                                    React.createElement("td", null, RatedCapacity),
                                    React.createElement("td", null, IndoorInput),
                                    React.createElement("td", null, OutdoorInput),
                                    React.createElement("td", null, TotalDeci),
                                    React.createElement("td", null, RatedPowerFactor),
                                    React.createElement("td", null, IndoorOutput),
                                    React.createElement("td", null, OutdoorOutput)));
                                reactHandler.setState({
                                    showmodel: reactHandler.displayModel
                                });
                                reactHandler.setState({
                                    ModelTypeArray: [
                                        { "Brand": resultData.d.results[i].LinkTitle },
                                        { "Model": resultData.d.results[i].Modelname },
                                        //{ "Category": resultData.d.results[i].Category },
                                        { "QuantityNumber": dataQuantity1 },
                                        { "RatedCapacity": resultData.d.results[i].Rated_x0020_Capacity_Btu_h_T3 },
                                        { "IndoorPowerInput": resultData.d.results[i].IndoorPowerInput_kW_T3 },
                                        { "OutdoorPowerInput": resultData.d.results[i].OutdoorPowerInput_kW_T3 },
                                        { "RatedPowerFactor": resultData.d.results[i].Rated_Power_Factor_T3_x0020_ },
                                        { "IndoorOutput": resultData.d.results[i].IndoorUnit_V_Ph_Hz },
                                        { "OutdoorOutput": resultData.d.results[i].OutdoorUnit_V_Ph_HZ_ }
                                    ]
                                });
                                //console.log(reactHandler.state.ModelTypeArray);
                            }
                            //alert(TotalCount);
                            //$('html').removeClass('loading-in-progress');
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        }
    };
    NewPowerFactor.prototype.findValueInModelQuantityArray = function (value, arr) {
        var result = false;
        for (var i = 0; i < arr.length; i++) {
            var name = arr[i];
            if (name == value) {
                result = true;
                break;
            }
        }
        return result;
    };
    NewPowerFactor.prototype.GetModelName = function (dataNo, dataQuantity1, count) {
        var reactHandler = this;
        {
            savearr2 = [];
            savearr3 = [];
            $.ajax({
                url: this.props.siteurl + "/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=NavCode eq '" + dataNo + "'",
                type: "GET",
                async: false,
                headers: { 'Accept': 'application/json; odata=verbose;' },
                success: function (resultData) {
                    reactHandler.setState({
                        items3: resultData.d.results
                    });
                    for (var i = 0; i < resultData.d.results.length; i++) {
                        var Model = resultData.d.results[i].Modelname;
                        //var Category = resultData.d.results[i].Category;
                        var Brand = resultData.d.results[i].LinkTitle;
                        var RatedCapacity = resultData.d.results[i].Rated_x0020_Capacity_Btu_h_T3;
                        var IndoorInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        var OutdoorInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        var RatedPowerFactor = resultData.d.results[i].Rated_Power_Factor_T3_x0020_;
                        var IndoorOutput = resultData.d.results[i].IndoorUnit_V_Ph_Hz;
                        var OutdoorOutput = resultData.d.results[i].OutdoorUnit_V_Ph_HZ_;
                        if (resultData.d.results[i].IndoorPowerInput_kW_T3 != null) {
                            IndoorInput = resultData.d.results[i].IndoorPowerInput_kW_T3;
                        }
                        else {
                            IndoorInput = 0;
                        }
                        if (resultData.d.results[i].OutdoorPowerInput_kW_T3 != null) {
                            OutdoorInput = resultData.d.results[i].OutdoorPowerInput_kW_T3;
                        }
                        else {
                            OutdoorInput = 0;
                        }
                        var Total = parseFloat(IndoorInput) + parseFloat(OutdoorInput);
                        var totalpower = (dataQuantity1 * Total);
                        var TotalDeci = (totalpower).toFixed(2);
                        var Deci = parseFloat(TotalDeci);
                        //reactHandler.setState({ dataQuantity: dataQuantity1 });
                        //TotalCount = TotalCount + dataQuantity1;
                        // reactHandler.GetTotal();
                        var ModelQuantiyUnique = Model;
                        ModelQuantityArrExist.push(ModelQuantiyUnique);
                        var tempid = ModelQuantiyUnique.replace(/([,.*/])+/g, '');
                        if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArr)) {
                            // tempid = ""+ASGA36FET-AUAOGA+"";
                            /* var test = $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val().toString();
                               var Quantity = parseInt(test)+ dataQuantity1;
                               $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val(""+Quantity+"");
                             TotalCount = TotalCount + dataQuantity1;
                             reactHandler.setState({ TotlaNoQuantity: TotalCount });*/
                            //console.log("Duplicate"+ModelQuantiyUnique+"-"+dataQuantity1);
                        }
                        else {
                            if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArrExist)) {
                                ModelQuantityArr.push(ModelQuantiyUnique);
                                //console.log("First Time"+ModelQuantiyUnique+"-"+dataQuantity1);
                                //reactHandler.setState({ dataQuantity: dataQuantity1 });
                                TotalModelCount = TotalModelCount + Deci;
                                var TotalModelCountFix = parseFloat(TotalModelCount.toFixed(2));
                                reactHandler.setState({ TotalModel: TotalModelCountFix });
                                reactHandler.displayModel.push(React.createElement("tr", { className: count + "-tablerow", id: tempid },
                                    React.createElement("td", null, Brand),
                                    React.createElement("td", null, Model),
                                    React.createElement("td", null,
                                        React.createElement("input", { type: "text", id: "QuantityNo", defaultValue: dataQuantity1, onChange: function () { return reactHandler.InvoiceQuantity(count, IndoorInput, OutdoorInput); } })),
                                    React.createElement("td", null, RatedCapacity),
                                    React.createElement("td", null, IndoorInput),
                                    React.createElement("td", null, OutdoorInput),
                                    React.createElement("td", null, TotalDeci),
                                    React.createElement("td", null, RatedPowerFactor),
                                    React.createElement("td", null, IndoorOutput),
                                    React.createElement("td", null, OutdoorOutput)));
                                reactHandler.setState({
                                    showmodel: reactHandler.displayModel
                                });
                                TotalCount = TotalCount + dataQuantity1;
                                reactHandler.setState({ TotlaNoQuantity: TotalCount });
                                reactHandler.setState({
                                    ModelTypeArray: [
                                        { "Brand": resultData.d.results[i].LinkTitle },
                                        { "Model": resultData.d.results[i].Modelname },
                                        //{ "Category": resultData.d.results[i].Category },
                                        { "QuantityNumber": dataQuantity1 },
                                        { "RatedCapacity": resultData.d.results[i].Rated_x0020_Capacity_Btu_h_T3 },
                                        { "IndoorPowerInput": resultData.d.results[i].IndoorPowerInput_kW_T3 },
                                        { "OutdoorPowerInput": resultData.d.results[i].OutdoorPowerInput_kW_T3 },
                                        { "RatedPowerFactor": resultData.d.results[i].Rated_Power_Factor_T3_x0020_ },
                                        { "IndoorOutput": resultData.d.results[i].IndoorUnit_V_Ph_Hz },
                                        { "OutdoorOutput": resultData.d.results[i].OutdoorUnit_V_Ph_HZ_ }
                                    ]
                                });
                                //console.log(reactHandler.state.ModelTypeArray);
                            }
                            //alert(TotalCount);
                            //$('html').removeClass('loading-in-progress');
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        }
    };
    NewPowerFactor.prototype.GetTotal = function () {
        var test = 0;
        var test_modal1 = 0;
        var test_modal;
        $('#DynamicRow tr').each(function () {
            var totalQuantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val().toString();
            // alert(totalQuantity);
            var totalModel = $(this).find("td").eq(6).text();
            //var combat = $(this).text();
            test += parseInt(totalQuantity);
            test_modal1 += parseFloat(totalModel);
            //console.log(test_modal+"FromList");
            test_modal = (test_modal1).toFixed(2);
        });
        this.setState({ TotlaNoQuantity: test });
        this.setState({ TotalModel: test_modal });
    };
    NewPowerFactor.prototype.getTable2 = function (arrayIndex) {
        var reactHandler = this;
        reactHandler.setState({ arrayIndex: arrayIndex });
        var selectedOptions2 = reactHandler.state.selectedOptions2;
        var value1 = selectedOptions2;
        reactHandler.displayData.push(React.createElement("tr", { className: arrayIndex + "-tablerow" },
            React.createElement("td", null,
                " ",
                React.createElement(react_select_1["default"], { id: "Brand", options: options, theme: function (theme) { return (__assign(__assign({}, theme), { borderRadius: 0, colors: __assign(__assign({}, theme.colors), { primary25: 'white', primary: 'white' }) })); }, isClearable: true, isSearchable: true, placeholder: "Brand", onChange: reactHandler.GetModelTypes })),
            React.createElement("td", null,
                React.createElement(react_select_1["default"], { id: "Model", options: ManualBrand, theme: function (theme) { return (__assign(__assign({}, theme), { borderRadius: 0, colors: __assign(__assign({}, theme.colors), { primary25: 'white', primary: 'white' }) })); }, isClearable: true, isSearchable: true, placeholder: "Model", onChange: reactHandler.handleChangePf })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "QuantityNo", onChange: function () { return reactHandler.GetQuantitytotal(arrayIndex); } })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "RatedCapacity" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "IndoorPowerInput" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "OutdoorPowerInput" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "Total" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "RatedPowerFactor" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "IndoorOutput" })),
            React.createElement("td", null,
                React.createElement("input", { type: "text", id: "OutdoorOutput" })),
            React.createElement("td", { className: "text-center" },
                React.createElement("ul", null,
                    React.createElement("li", { className: "Deletewrap" },
                        React.createElement("a", { href: "#", className: "DeleteImage", "data-custom-value": arrayIndex },
                            React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete.svg", className: "without-hover-td ibtneye list-actiobs", alt: "image" }),
                            React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete_hover.svg", className: "on-hover-td", alt: "image" })))))));
        reactHandler.setState({
            showdata: reactHandler.displayData
        });
        setTimeout(function () {
            $('.Deletewrap').on('click', function (event) {
                var trIndex = $(this).closest("tr").index();
                if (trIndex >= 0) {
                    $(this).closest("tr").remove();
                }
            });
        }, 2500);
    };
    NewPowerFactor.prototype.ValidateModelSelection = function (count) {
        var status = true;
        var model = "";
        $("#ManuallTable tr." + count + "-tablerow").each(function () {
            model = $(this).find("td").eq(1).text();
        });
        if (model == "Model") {
            // alert("failes");
            return false;
        }
        else {
            // alert("success");
            //status = false;
            /*alert("success");
            $('#AlertModel2').show();
            $(`#ManuallTable tr.${count}-tablerow`).each(function () {
              $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('');
            });*/
            return true;
        }
    };
    NewPowerFactor.prototype.GetQuantitytotal = function (count) {
        //if(this.ValidateModelSelection(count)){
        var quantityNo;
        var total;
        var IndoorPowerInput;
        var OutdoorPowerInput;
        $("#ManuallTable tr." + count + "-tablerow").each(function () {
            quantityNo = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
            IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
            OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
        });
        total = parseFloat(IndoorPowerInput) + parseFloat(OutdoorPowerInput);
        var Test = total * quantityNo;
        var TotalDeci = (Test).toFixed(2);
        $("#ManuallTable tr." + count + "-tablerow").each(function () {
            $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('' + quantityNo + '');
            $(this).find("td").eq(6).find("input[id*='Total']").val('' + TotalDeci + '');
        });
        // }
    };
    NewPowerFactor.prototype.getTable = function () {
        var newRow = $("<tr>");
        var cols = "";
        if (this.state.count == 0) {
            cols += "<td><input type=\"text\" id=\"Brand\"></td>";
            cols += "<td><input type=\"text\" id=\"Model\"></td>";
            cols += "<td><input type=\"text\" class=\"combact1\" id=\"Quantity\"></td>";
            cols += "<td><input type=\"text\" id=\"RatedCapacity\"></td>";
            cols += "<td><input type=\"text\" class=\"combact\" id=\"IndoorPowerInput\"></td>";
            cols += "<td><input type=\"text\" class=\"combact\" id=\"OutdoorPowerInput\"></td>";
            cols += "<td><input type=\"text\" class=\"combact2\"id=\"TotalPower\"></td>";
            cols += "<td><input type=\"text\" id=\"RatedPowerFactor\"></td>";
            cols += "<td><input type=\"text\" id=\"Indoor_V_Ph_HZ\"></td>";
            cols += "<td><input type=\"text\" id=\"Outdoor_V_Ph_HZ\"></td>";
            newRow.append(cols);
            $("table #First-table").append(newRow);
        }
        else {
            cols += "<td><input type=\"text\" id=\"Brand\"></td>";
            cols += "<td><input type=\"text\" id=\"Model\"></td>";
            cols += "<td><input type=\"text\" class=\"combact1\" id=\"Quantity\"></td>";
            cols += "<td><input type=\"text\" id=\"RatedCapacity\"></td>";
            cols += "<td><input type=\"text\" class=\"combact\" id=\"IndoorPowerInput\"></td>";
            cols += "<td><input type=\"text\" class=\"combact\" id=\"OutdoorPowerInput\"></td>";
            cols += "<td><input type=\"text\" class=\"combact2\" id=\"TotalPower\"></td>";
            cols += "<td><input type=\"text\" id=\"RatedPowerFactor\"></td>";
            cols += "<td><input type=\"text\" id=\"Indoor_V_Ph_HZ\"></td>";
            cols += "<td><input type=\"text\" id=\"Outdoor_V_Ph_HZ\"></td>";
            cols += "<td class=\"dele-icon\"><button type=\"button\" class=\"ibtnDel btn btn-md btn-danger btn-remove-ivon\" style=\"min-width: 0em; margin-left: 0\" > <i class=\"fa fa-trash\" style=\"color: red\"></i> </button> </td>";
            newRow.append(cols);
            $("table #First-table").append(newRow);
        }
        $('.ibtnDel').on('click', function (event) {
            var trIndex = $(this).closest("tr").index();
            if (trIndex > 0) {
                $(this).closest("tr").remove();
            }
            else {
            }
        });
        /* $("#First-table").on('change', "input", function () {
           $('tr').each(function () {
             var sum = 0;
             const total:any = sum;
             var qty = 0;
             const add: any = qty;
    
             $(this).find('.combact').each(function () {
               const combat: any = $(this).text();
                 if (!isNaN(combat) && combat.length !== 0) {
                   qty+=parseFloat(combat);
                 }
             });
             $(this).find('.combact1').each(function () {
               const combat: any = $(this).text();
                 if (!isNaN(combat) && combat.length !== 0) {
                    sum =add* parseFloat(combat);
                 }
             });
    
             $('.combact2', this).html(total);
         });
     });*/
        this.setState({ count: 1 });
    };
    NewPowerFactor.prototype.MultipleInvoice = function (Selected, ProjectName, customerName, ConsultName) {
        //displayMultipInvoice.push(<li className={Selected}><a href="#" onClick={() => this.name3(Selected)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/invoice.png" alt="image" /> <span> {Selected}</span></a></li>);
        this.setState({
            SelectedInvo: Selected,
            SelectedProjName: ProjectName,
            SelectedSellTo: customerName,
            SelectedConsult: ConsultName
        });
    };
    NewPowerFactor.prototype.componentDidMount = function () {
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
        var x = $(".invoice-type-area-selet-value").offset().top;
        var winheight = window.innerHeight;
        var winminfoot = winheight - 110;
        var heights = winminfoot - 300;
        $(".main-textareas").css("height", heights);
        $(".if-multi-invoice li").on("click", function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });
        this.GetCurrentUserName();
        this.GetLocation();
        this.GetModelNo();
        this.getTable2(0);
        //this.GetOrderNo();
        //this.GetPfAuoto();
        //this.GetAutoDetails();
        //this.GetBrandTypes();
        //this.GetManually();
        $("#to").hide();
        $("#Left").hide();
        $("#SubjectButton").hide();
        $("#ModelButton").hide();
        $("#Notes").hide();
        $("#Receiver").hide();
        $("#Invoice").hide();
        $("#Preview").hide();
        $("#Manually").hide();
        $("#FooterMenu").hide();
        $("#SubjectManually").hide();
        $("#ModelManually").hide();
        $("#FooterMenu1").hide();
        $("#PreviewManual").hide();
        $("#Sucess").hide();
        $("#CancelEverything").hide();
        $("#AlertModel").hide();
        $("#AlertModel2").hide();
        $('#AlertSubject').hide();
        $(".home-sec").hide();
        $("#multipleInvoiceCheckbox").hide();
        $('#AlertMultipleSelect').hide();
        this.GetProfile();
    };
    NewPowerFactor.prototype.GetProfile = function () {
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
    NewPowerFactor.prototype.GetPfAuoto = function (event) {
        var GivenInvoice = event;
        //console.log(FutureDate1);
        var reactHandler = this;
        var url = this.props.siteurl + "/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ProjectName,ConsultCompName,SalespersonCode,SelltoCustomerName,OrderNo&$top=5000&$filter=substringof('" + GivenInvoice + "',No)";
        return $.ajax({
            url: url,
            method: "GET",
            headers: {
                "Accept": "application/json; odata=verbose"
            },
            success: function (data) {
                reactHandler.setState({ GetInvoiceNo: data.d.results });
                for (var i = 0; i < data.d.results.length;) {
                    var ModelName = $.trim(data.d.results[i].No);
                    if ($.inArray(ModelName, uniqueModelType1) === -1) {
                        uniqueModelType1.push(ModelName);
                        uniquearr.push({ value: '' + data.d.results[i].OrderNo + '', label: '' + data.d.results[i].OrderNo + '' });
                        uniquearr1.push({ value: '' + data.d.results[i].No + '', label: '' + data.d.results[i].No + '' });
                        uniquearr2.push({ value: '' + data.d.results[i].ProjectName + '', label: '' + data.d.results[i].ProjectName + '' });
                        uniquearr3.push({ value: '' + data.d.results[i].ConsultCompName + '', label: '' + data.d.results[i].ConsultCompName + '' });
                        uniquearr4.push({ value: '' + data.d.results[i].SelltoCustomerName + '', label: '' + data.d.results[i].SelltoCustomerName + '' });
                        uniquearr.push({ value: '' + data.d.results[i].OrderNo + '', label: '' + data.d.results[i].OrderNo + '' });
                    }
                    i++;
                }
            },
            error: function (error) {
            }
        });
        //}
    };
    /* public handleInputChange2 = (event) => {
       this.GetPfAuoto2(event);
     }
  
     public GetPfAuoto2(event) {
      var FutureDate1 = event;
      //console.log(FutureDate1);
       var reactHandler = this;
       var url = `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=ProjectName,ConsultCompName,SelltoCustomerName,OrderNo&$top=5000&$filter=substringof('${FutureDate1}',OrderNo)`;
         return $.ajax({
           url: url,
           method: "GET",
           headers: {
             "Accept": "application/json; odata=verbose"
           },
           success: function (data) {
             reactHandler.setState({ GetInvoiceNo: data.d.results });
             for (var i = 0; i < data.d.results.length;) {
              var ModelName = $.trim(data.d.results[i].No);
              if ($.inArray(ModelName, uniqueModelType1) === -1) {
                uniqueModelType1.push(ModelName);
                uniquearr1.push({ value: '' + data.d.results[i].No + '', label: '' + data.d.results[i].No + '' });
                uniquearr2.push({ value: '' + data.d.results[i].ProjectName + '', label: '' + data.d.results[i].ProjectName + '' });
                uniquearr3.push({ value: '' + data.d.results[i].ConsultCompName + '', label: '' + data.d.results[i].ConsultCompName + '' });
                uniquearr4.push({ value: '' + data.d.results[i].SelltoCustomerName + '', label: '' + data.d.results[i].SelltoCustomerName + '' });
                uniquearr.push({ value: '' + data.d.results[i].OrderNo + '', label: '' + data.d.results[i].OrderNo + '' });
              }
               i++;
             }
           },
           error: function (error) {
  
           }
         });
       //}
  
     }*/
    /* public GetPfAuoto() {
       var reactHandler = this;
       var response = response || [];
       var url = `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$top=2200`;
       return $.ajax({
         url: url,
         method: "GET",
         headers: {
           "Accept": "application/json; odata=verbose"
         },
         success: function (data) {
           if (data.d.__next) {
             url = data.d.__next;
            response = response.concat(data.d.results);
             //console.log(response.concat(data.d.results));
             reactHandler.setState({ GetInvoiceNo: response });
             reactHandler.GetPfAuoto();
             reactHandler.GetAutoDetails(data.d.results);
           }
         },
         error: function (error) {
   
         }
       })
     }*/
    /* public GetAutoDetails() {
        console.log(this.state.GetInvoiceNo.length);
       for (var i = 0; i < this.state.GetInvoiceNo.length; i++) {
          this.setState({ ...this.state, OrderNo: resultData.d.results[i].OrderNo });
                this.setState({  OrderNo: resultData.d.results[i].OrderNo });
         var ModelName = $.trim(this.state.GetInvoiceNo[i].No);
         if ($.inArray(ModelName, uniqueModelType1) === -1) {
           uniqueModelType1.push(ModelName);
   
           uniquearr1.push({ value: '' + this.state.GetInvoiceNo[i].No + '', label: '' + this.state.GetInvoiceNo[i].No + '' });
           uniquearr2.push({ value: '' + this.state.GetInvoiceNo[i].ProjectName + '', label: '' + this.state.GetInvoiceNo[i].ProjectName + '' });
           uniquearr3.push({ value: '' + this.state.GetInvoiceNo[i].ConsultCompName + '', label: '' + this.state.GetInvoiceNo[i].ConsultCompName + '' });
           uniquearr4.push({ value: '' + this.state.GetInvoiceNo[i].SelltoCustomerName + '', label: '' + this.state.GetInvoiceNo[i].SelltoCustomerName + '' });
           uniquearr.push({ value: '' + this.state.GetInvoiceNo[i].OrderNo + '', label: '' + this.state.GetInvoiceNo[i].OrderNo + '' });
           console.log("OrderNo are: " + resultData.d.results[i].OrderNo);
         }
       }
      console.log("Un-Arr: "+uniquearr1);
     }*/
    NewPowerFactor.prototype.GetLocation = function () {
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('ToLocation')/items?$select=ID,Locations",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    items: resultData.d.results
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    /* public async GetOrderNo() {
       var self: NewPowerFactor = this;
       await self.GetpartNumberQTY().then((data) => {
         //console.log(data);
         this.GetPartNumberPriceAssgin(data);
       }).catch((response) => {
         console.log("Error getting results from jQuery AJAX - " + response);
       });
     }
  
     public GetpartNumberQTY = function () {
       // var filterString = `ItemNo eq`;
       return $.ajax({
         url: `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=OrderNo,No,ProjectName,ConsultCompName`,
         type: "GET",
         headers: { 'Accept': 'application/json; odata=verbose;' },
       });
     };
     GetPartNumberPriceAssgin(resultData) {
  
       for (var i = 0; i < resultData.d.results.length; i++) {
         //  this.setState({ ...this.state, OrderNo: resultData.d.results[i].OrderNo });
         //this.setState({  OrderNo: resultData.d.results[i].OrderNo });
         //  console.log(resultData.d.results[i].OrderNo);
         uniquearr.push({ value: '' + resultData.d.results[i].OrderNo + '', label: '' + resultData.d.results[i].OrderNo + '' })
         uniquearr1.push({ value: '' + resultData.d.results[i].No + '', label: '' + resultData.d.results[i].No + '' })
         uniquearr2.push({ value: '' + resultData.d.results[i].ProjectName + '', label: '' + resultData.d.results[i].ProjectName + '' })
       }
     }*/
    NewPowerFactor.prototype.GetModelNo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, self.GetModelNoQTY().then(function (data) {
                                //  console.log(data);
                                _this.GetModelNOAssgin(data);
                            })["catch"](function (response) {
                                // console.log("Error getting results from jQuery AJAX - " + response);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewPowerFactor.prototype.GetModelNOAssgin = function (resultData) {
        for (var i = 0; i < resultData.d.results.length; i++) {
            //this.setState({ ...this.state, OrderNo: resultData.d.results[i].OrderNo });
            //this.setState({  OrderNo: resultData.d.results[i].OrderNo });
            // console.log(resultData.d.results[i].No);
            //console.log(resultData.d.results[i].Quantity);
            uniqueMod.push({ value: '' + resultData.d.results[i].No + '', label: '' + resultData.d.results[i].No + '' });
            uniqueMod1.push({ value: '' + resultData.d.results[i].Quantity + '', label: '' + resultData.d.results[i].Quantity + '' });
        }
    };
    NewPowerFactor.prototype.GetCurrentUserName = function () {
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
    /* private SaveRececeiver():void {
         if(this.state.ExistingQuickLinksCount < 5){
         const body: string = JSON.stringify({
           'SelectedQuickLinksId': ID
         });
  
         this.props.spHttpClient.post(`${this.props.siteurl}/_api/web/lists/getbytitle('UsersQuickLinks')/items`,
           SPHttpClient.configurations.v1,
           {
             headers: {
               'Accept': 'application/json;odata=nometadata',
               'Content-type': 'application/json;odata=nometadata',
               'odata-version': ''
             },
             body: body
           })
           .then((response: SPHttpClientResponse): Promise<ILargeListItem> => {
             return response.json();
           })
           .then((item: IListItem): void => {
             swal({
               text: "Your Quick Links added successfully!",
               icon: "success"
             });
             location.reload();
           }, (error: any): void => {
             swal({
               text: "Something went wrong, try again later!",
               icon: "error"
             });
             location.reload();
           });
       }else {
         swal({
           text: `Only 5 Quick Links are allowed to pin. \n Existming Quicklinks Count : ${this.state.ExistingQuickLinksCount} \n Possible to add : ${this.state.ExistingQuickLinksCount - 5}`,
           icon: "error"
         });
       }
     }*/
    NewPowerFactor.prototype.AddItems = function () {
        var Brand;
        var Model;
        var Quantity;
        var RatedCapacity;
        var IndoorPowerInput;
        var OutdoorPowerInput;
        var TotalPower;
        var PowerFactor;
        var Output;
        var OutdoorOutput;
        $('#DynamicRow tr').each(function () {
            Brand = $(this).find("td").eq(0).text();
            Model = $(this).find("td").eq(1).text();
            Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
            RatedCapacity = $(this).find("td").eq(3).text();
            IndoorPowerInput = $(this).find("td").eq(4).text();
            OutdoorPowerInput = $(this).find("td").eq(5).text();
            TotalPower = $(this).find("td").eq(6).text();
            PowerFactor = $(this).find("td").eq(7).text();
            Output = $(this).find("td").eq(8).text();
            OutdoorOutput = $(this).find("td").eq(9).text();
            InvoiceModel.push({
                "Brand": Brand,
                "Model": Model,
                "Quantity": Quantity,
                "RatedCapacity": RatedCapacity,
                "IndoorPowerInput": IndoorPowerInput,
                "OutdoorPowerInput": OutdoorPowerInput,
                "TotalPower": TotalPower,
                "PowerFactor": Output,
                "Output": OutdoorOutput,
                "OutdoorOutput": OutdoorOutput
            });
            savearr2.push({
                Brand: Brand,
                Model: Model,
                QuantityNumber: Quantity,
                RatedCapacity: RatedCapacity,
                IndoorPowerInput: IndoorPowerInput,
                OutdoorPowerInput: OutdoorPowerInput,
                Total: TotalPower,
                RatedPowerfactor: PowerFactor,
                IndoorOutputunit: Output,
                OutdoorOutputunit: OutdoorOutput
            });
        });
        for (var i = 0; i < InvoiceModel.length; i++) {
            var newRow = $("<tr>");
            var cols = "";
            cols += "<td>" + InvoiceModel[i].Brand + "</td > ";
            cols += "<td>" + InvoiceModel[i].Model + "</td>";
            cols += "<td>" + InvoiceModel[i].Quantity + "</td>";
            cols += "<td>" + InvoiceModel[i].RatedCapacity + "</td>";
            cols += "<td>" + InvoiceModel[i].IndoorPowerInput + "</td>";
            cols += "<td>" + InvoiceModel[i].OutdoorPowerInput + "</td>";
            cols += "<td>" + InvoiceModel[i].TotalPower + "</td>";
            cols += "<td>" + InvoiceModel[i].PowerFactor + "</td>";
            cols += "<td>" + InvoiceModel[i].Output + "</td>";
            cols += "<td>" + InvoiceModel[i].OutdoorOutput + "</td>";
            newRow.append(cols);
            $("#Third-table").append(newRow);
        }
    };
    NewPowerFactor.prototype.AddItemsManually = function () {
        bindModel = [];
        var Brand;
        var Model;
        var Quantity;
        var RatedCapacity;
        var IndoorPowerInput;
        var OutdoorPowerInput;
        var TotalPower;
        var PowerFactor;
        var Output;
        var OutdoorOutput;
        $('#ManuallTable tbody tr').each(function () {
            Brand = $(this).find("td").eq(0).text();
            Model = $(this).find("td").eq(1).text();
            Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
            RatedCapacity = $(this).find("td").eq(3).find("input[id*='RatedCapacity']").val();
            IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
            OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
            TotalPower = $(this).find("td").eq(6).find("input[id*='Total']").val();
            PowerFactor = $(this).find("td").eq(7).find("input[id*='RatedPowerFactor']").val();
            Output = $(this).find("td").eq(8).find("input[id*='IndoorOutput']").val();
            OutdoorOutput = $(this).find("td").eq(9).find("input[id*='OutdoorOutput']").val();
            bindModel.push({
                "Brand": Brand,
                "Model": Model,
                "Quantity": Quantity,
                "RatedCapacity": RatedCapacity,
                "IndoorPowerInput": IndoorPowerInput,
                "OutdoorPowerInput": OutdoorPowerInput,
                "TotalPower": TotalPower,
                "PowerFactor": PowerFactor,
                "Output": Output,
                "OutdoorOutput": OutdoorOutput
            });
        });
        for (var i = 0; i < bindModel.length; i++) {
            var newRow = $("<tr>");
            var cols = "";
            cols += "<td>" + bindModel[i].Brand + "</td > ";
            cols += "<td>" + bindModel[i].Model + "</td>";
            cols += "<td>" + bindModel[i].Quantity + "</td>";
            cols += "<td>" + bindModel[i].RatedCapacity + "</td>";
            cols += "<td>" + bindModel[i].IndoorPowerInput + "</td>";
            cols += "<td>" + bindModel[i].OutdoorPowerInput + "</td>";
            cols += "<td>" + bindModel[i].TotalPower + "</td>";
            cols += "<td>" + bindModel[i].PowerFactor + "</td>";
            cols += "<td>" + bindModel[i].Output + "</td>";
            cols += "<td>" + bindModel[i].OutdoorOutput + "</td>";
            newRow.append(cols);
            $("table #Second-table").append(newRow);
        }
    };
    NewPowerFactor.prototype.SaveManuallyList = function (ReceiverId) {
        return __awaiter(this, void 0, void 0, function () {
            var newweb;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.state.CreateManually == true)) return [3 /*break*/, 2];
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.lists.getByTitle('CreateManually').items.add({
                                To: "" + this.state.SelectedLoc + "",
                                Invoice_x002f_OrderNo: "" + this.state.SelectedInvo + "",
                                ProjectName: "" + this.state.SelectedProjName + "",
                                ConsultantName: "" + this.state.SelectedConsult + "",
                                CustomerName: "" + this.state.SelectedSellTo + "",
                                SalesPersonCode: "" + this.state.SalesPersonCode + "",
                                Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",
                                TotalQuantity: "" + this.state.TotlaNoQuantity + "",
                                TotalModel: "" + this.state.TotalModel + "",
                                ViewFinalId: parseInt(ReceiverId)
                            }).then(function (i) {
                                // console.log(i);
                                var selected = _this.state.SelectedInvo;
                                var reactHandler = _this;
                                $.ajax({
                                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=ID&$top=1&$orderby=Created desc",
                                    type: "GET",
                                    headers: { 'Accept': 'application/json; odata=verbose;' },
                                    success: function (resultData) {
                                        reactHandler.setState({
                                            MasterID: resultData.d.results[0].ID
                                        });
                                        var MasterId = resultData.d.results[0].ID;
                                        reactHandler.AddListItems(MasterId);
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NewPowerFactor.prototype.SaveManuallyList2 = function (ReceiverId) {
        return __awaiter(this, void 0, void 0, function () {
            var newweb;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.lists.getByTitle('CreateManually').items.add({
                                To: "" + this.state.SelectedLoc + "",
                                Invoice_x002f_OrderNo: "" + this.state.SelectedInvo + "",
                                ProjectName: "" + this.state.SelectedProjName + "",
                                ConsultantName: "" + this.state.SelectedConsult + "",
                                CustomerName: "" + this.state.SelectedSellTo + "",
                                Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",
                                ViewFinalId: ReceiverId,
                                TotalQuantity: "" + this.state.TotlaNoQuantity + "",
                                TotalModel: "" + this.state.TotalModel + ""
                            }).then(function (i) {
                                // console.log(i);
                                var selected = _this.state.SelectedInvo;
                                var reactHandler = _this;
                                $.ajax({
                                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('CreateManually')/items?$select=ID&$top=1&$orderby=Created desc",
                                    type: "GET",
                                    headers: { 'Accept': 'application/json; odata=verbose;' },
                                    success: function (resultData) {
                                        reactHandler.setState({
                                            MasterID: resultData.d.results[0].ID
                                        });
                                        var MasterId = resultData.d.results[0].ID;
                                        reactHandler.AddListItems2(MasterId);
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewPowerFactor.prototype.SaveForPrint = function () {
        savearr3 = [];
        var reactHandler = this;
        var Brand;
        var Model;
        var Quantity;
        var RatedCapacity;
        var IndoorPowerInput;
        var OutdoorPowerInput;
        var TotalPower;
        var PowerFactor;
        var Output;
        var OutdoorOutput;
        $('#ManuallTable tbody tr').each(function () {
            Brand = $(this).find("td").eq(0).text();
            Model = $(this).find("td").eq(1).text();
            Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
            RatedCapacity = $(this).find("td").eq(3).find("input[id*='RatedCapacity']").val();
            IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
            OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
            TotalPower = $(this).find("td").eq(6).find("input[id*='Total']").val();
            PowerFactor = $(this).find("td").eq(7).find("input[id*='RatedPowerFactor']").val();
            Output = $(this).find("td").eq(8).find("input[id*='IndoorOutput']").val();
            OutdoorOutput = $(this).find("td").eq(9).find("input[id*='OutdoorOutput']").val();
            savearr3.push({
                Brand: Brand,
                Model: Model,
                QuantityNumber: Quantity,
                RatedCapacity: RatedCapacity,
                IndoorPowerInput: IndoorPowerInput,
                OutdoorPowerInput: OutdoorPowerInput,
                Total: TotalPower,
                RatedPowerfactor: PowerFactor,
                IndoorOutputunit: Output,
                OutdoorOutputunit: OutdoorOutput
            });
        });
        this.GetManuallTotal();
    };
    NewPowerFactor.prototype.GetManuallTotal = function () {
        if (savearr3.length != 0) {
            var test = 0;
            var test_modal1 = 0;
            var test_modal;
            for (var i = 0; i < savearr3.length; i++) {
                var totalQuantity = savearr3[i].QuantityNumber;
                var totalModel = savearr3[i].Total;
                //var combat = $(this).text();
                test += parseInt(totalQuantity);
                test_modal1 += parseFloat(totalModel);
                test_modal = (test_modal1).toFixed(2);
            }
            this.setState({ TotlaNoQuantity: test });
            this.setState({ TotalModel: test_modal });
        }
    };
    NewPowerFactor.prototype.SaveReceiverValidation = function () {
        // alert($('#ToSaveRecevier').val());
        var status = true;
        if (status == true && $('#ToSaveRecevier').val() != '') {
            $('#emptyToAddress').hide();
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var inputText = $("#ToSaveRecevier").val();
            // alert(inputText);
            if (inputText.match(mailformat)) {
                $("#if-not-valid-email").hide();
                $("#regError").hide();
            }
            else {
                $('#ToSaveRecevier').focus();
                $("#if-not-valid-email").show();
                status = false;
            }
        }
        else {
            $('#emptyToAddress').show();
            status = false;
        }
        // alert(status);
        return status;
    };
    NewPowerFactor.prototype.SuccessReceiver = function () {
        var x = document.getElementsByClassName("banner open home-banner powerfactor-banner relative");
        x[0].className = 'banner home-banner powerfactor-banner relative';
        var y = document.getElementsByClassName("refresh-row");
        y[0].className = 'refresh-row-no';
        $(".home-sec").hide();
        $("#LocationClass").removeClass("current completed");
        $("#SubjectClass").removeClass("current completed");
        $("#ModelClass").removeClass("current completed");
        $("#NotesClass").removeClass("current completed");
        $("#ReceiverClass").removeClass("current completed");
        $("#Invoice").hide();
        $("#Left").hide();
        $("#SubjectManually").hide();
        $("#to").hide();
        $("#FooterMenu1").hide();
        $("#FooterMenu").hide();
        $("#SubjectButton").hide();
        $("#ModelButton").hide();
        $("#Notes").hide();
        $("#Receiver").hide();
        $("#Preview").hide();
        $("#Manually").hide();
        $("#FooterMenu").hide();
        $("#SubjectManually").hide();
        $("#ModelManually").hide();
        $("#PreviewManual").hide();
        $("#Sucess").hide();
        this.setState({ ToLeft: true });
        this.setState({ SubLeft: false });
        this.setState({ ModLeft: false });
        this.setState({ NoteLeft: false });
        this.setState({ ReceiLeft: false });
        this.clearField();
        this.clearFieldManually();
        // $("table #First-table").empty();
    };
    NewPowerFactor.prototype.SaveReceiver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newweb, newweb;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.SaveReceiverValidation()) return [3 /*break*/, 4];
                        $("#ReceiverClass").addClass("relatve current completed");
                        if (!(this.state.CreateManually == true)) return [3 /*break*/, 2];
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.lists.getByTitle('ReceiverDetails').items.add({
                                ToAddress: $("#ToSaveRecevier").val().toString(),
                                InvoiceNo: "" + this.state.SelectedInvo + "",
                                Location: "" + this.state.SelectedLoc + "",
                                ProjectName: "" + this.state.SelectedProjName + "",
                                CustomerName: "" + this.state.SelectedSellTo + "",
                                Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",
                                Body: "" + this.state.SubContent1 + "",
                                Regards: "" + this.state.regards1 + "",
                                Cc: $("#Cc").val().toString()
                            }).then(function (i) {
                                var reactHandler = _this;
                                $.ajax({
                                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('ReceiverDetails')/items?$select=ID&$top=1&$orderby=Created desc",
                                    type: "GET",
                                    headers: { 'Accept': 'application/json; odata=verbose;' },
                                    success: function (resultData) {
                                        var ReceiverId = resultData.d.results[0].ID;
                                        reactHandler.SaveManuallyList(ReceiverId);
                                        reactHandler.ManualLibrary(ReceiverId);
                                        $("#Receiver").hide();
                                        $("#Sucess").show();
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                    }
                                });
                                // console.log(i);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        newweb = webs_1.Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
                        return [4 /*yield*/, newweb.lists.getByTitle('ReceiverDetails').items.add({
                                ToAddress: $("#ToSaveRecevier").val().toString(),
                                Cc: $("#Cc").val(),
                                Regards: "" + this.state.regards1 + "",
                                Body: "" + this.state.SubContent1 + "",
                                InvoiceNo: "" + this.state.SelectedInvo + "",
                                Location: "" + this.state.SelectedLoc + "",
                                ProjectName: "" + this.state.SelectedProjName + "",
                                CustomerName: "" + this.state.SelectedSellTo + "",
                                OrderNo: "" + this.state.SelectedOrd + "",
                                Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + ""
                            }).then(function (i) {
                                var reactHandler = _this;
                                $.ajax({
                                    url: _this.props.siteurl + "/_api/web/lists/getbytitle('ReceiverDetails')/items?$select=ID&$top=1&$orderby=Created desc",
                                    type: "GET",
                                    headers: { 'Accept': 'application/json; odata=verbose;' },
                                    success: function (resultData) {
                                        reactHandler.setState({
                                            ReceiversID: resultData.d.results[0].ID
                                        });
                                        var ReceiverId = resultData.d.results[0].ID;
                                        reactHandler.SaveManuallyList2(ReceiverId);
                                        reactHandler.SaveLibrary(ReceiverId);
                                        $("#Receiver").hide();
                                        $("#Sucess").show();
                                    },
                                    error: function (jqXHR, textStatus, errorThrown) {
                                    }
                                });
                                // console.log(i); $("#Receiver").hide();
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.setState({ ToAddress: "", From: "", Subject: "", Details: "" });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewPowerFactor.prototype.SaveSubjectValidation = function () {
        var status = true;
        if (status == true) {
            if ($('#myTextarea').val() != '') {
                $('#AlertSubject').hide();
                $("#ModelClass").removeClass("current");
            }
            else {
                $('#myTextarea').focus();
                status = false;
            }
            if ($('#myTextarea2').val() != '') {
                $('#AlertSubject').hide();
                $("#SubjectClass").addClass("relatve current completed");
                $("#ModelClass").removeClass("current");
            }
            else {
                $('#myTextarea2').focus();
                status = false;
            }
            if ($('#myTextarea3').val() != '') {
                $('#AlertSubject').hide();
                $("#SubjectClass").addClass("relatve current completed");
                $("#ModelClass").removeClass("current");
            }
            else {
                $('#myTextarea3').focus();
                status = false;
            }
            if (status == false) {
                $('#AlertSubject').show();
            }
            return status;
        }
    };
    NewPowerFactor.prototype.SaveModelValidation = function () {
        var status = true;
        var quantityNo;
        var total;
        var trIndex = $("#DynamicRow tr");
        if (status == true && trIndex.find("[id*='QuantityNo']").val() != '') {
            $("#ModelClass").addClass("relatve current completed");
            $("#NotesClass").addClass("relatve current");
            $("#AlertModel").hide();
        }
        else {
            $("#AlertModel").show();
            status = false;
        }
        return status;
    };
    NewPowerFactor.prototype.SaveManualModelValidation = function () {
        var status = true;
        var trIndex = $("#ManuallTable").find("tr").last();
        if (status == true && trIndex.find("[id*='QuantityNo']").val() != '' && trIndex.find("[id*='Total']").val() != NaN && trIndex.find("td").eq(1).text() != "Model") {
            $("#ModelClass").addClass("relatve current completed");
            $("#NotesClass").addClass("relatve current");
            $("#AlertModel").hide();
        }
        else {
            $("#AlertModel").show();
            status = false;
        }
        return status;
    };
    NewPowerFactor.prototype.SubjectValidationManually = function () {
        var status = true;
        if (status == true) {
            if ($('#myTextarea4').val() != '') {
                $('#AlertSubject').hide();
                $("#SubjectClass").addClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
            }
            else {
                $('#myTextarea4').focus();
                status = false;
            }
            if ($('#myTextarea5').val() != '') {
                $('#AlertSubject').hide();
                $("#SubjectClass").addClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
            }
            else {
                $('#myTextarea5').focus();
                status = false;
            }
            if ($('#myTextarea6').val() != '') {
                $("#SubjectClass").addClass("relatve current completed");
                $("#ModelClass").removeClass("relatve current completed");
            }
            else {
                $('#myTextarea6').focus();
                status = false;
            }
            if (status == false) {
                $('#AlertSubject').show();
            }
            return status;
        }
    };
    NewPowerFactor.prototype.close = function () {
        $('#multipleInvoiceCheckbox').hide();
        $(".multi-invo-numbers").prop("checked", false);
        this.CancelManual();
    };
    NewPowerFactor.prototype.SelectAll = function () {
        $(".selectall").on("change", function () {
            if ($(this).prop("checked")) {
                $(".selectall").prop("checked", true);
                $(".multi-invo-numbers").prop('checked', $(this).prop('checked'));
            }
            else {
                $(".selectall").prop("checked", false);
                $(".multi-invo-numbers").prop('checked', false);
            }
        });
        /*$(".selectall").on("click",function () {
             $(".multi-invo-numbers").prop('checked', $(this).prop('checked'));
           });*/
    };
    NewPowerFactor.prototype.MultipleSelect = function () {
        // $('html').addClass('loading-in-progress');
        if ($(".multi-invo-numbers").is(':checked')) {
            $('input:checkbox[name=multi-invo-numbers]').each(function () {
                if ($(this).is(':checked')) {
                    //alert("FirstChkchk: "+$(this).val());
                    InvoiceNumber.push({ No: '' + $(this).val() + '' });
                }
            });
        }
        else {
            $('#AlertMultipleSelect').show();
        }
        /*  $('input:checkbox[name=multi-invo-numbers]').each(function () {
           if ($(this).is(':checked')){
             //alert("FirstChkchk: "+$(this).val());
             InvoiceNumber.push({ No: '' + $(this).val() + '' });
               }
          });*/
        this.SelectedInvoice();
    };
    NewPowerFactor.prototype.SuccessSelect = function () {
        $('#AlertMultipleSelect').hide();
        $('#multipleInvoiceCheckbox').show();
    };
    NewPowerFactor.prototype.SelectedInvoice = function () {
        this.displayModel = [];
        this.setState({ showmodel: this.displayModel });
        for (var i = 0; i < InvoiceNumber.length; i++) {
            this.name3(InvoiceNumber[i].No);
            //console.log(InvoiceNumber[i].No);
        }
        $('#multipleInvoiceCheckbox').hide();
        //$(".multi-invo-numbers").prop('unchecked', $(this).prop('unchecked'));
        $(".multi-invo-numbers").prop("checked", false);
        $(".selectall").prop("checked", false);
    };
    NewPowerFactor.prototype.SaveInvoValidation = function () {
        var status = true;
        if (status == true && $('#Invord').val() != '') {
            $('#InvoError').hide();
        }
        else {
            status = false;
            $('#Invord').focus();
            $('#InvoError').show();
        }
        return status;
    };
    NewPowerFactor.prototype.SaveManually = function () {
        if (this.SaveInvoValidation()) {
            savearr2 = [];
            savearr3 = [];
            var x = document.getElementsByClassName("banner home-banner powerfactor-banner relative");
            x[0].className = 'banner open home-banner powerfactor-banner relative';
            var y = document.getElementsByClassName("refresh-row-no");
            y[0].className = 'refresh-row';
            $(".home-sec").show();
            $("#LocationClass").addClass("relatve current");
            $("#SubjectClass").addClass("relatve");
            $("#ModelClass").addClass("relatve");
            $("#NotesClass").addClass("relatve");
            $("#ReceiverClass").addClass("relatve");
            var Invorder = $('#Invord').val().toString();
            this.setState({ SelectedInvo: Invorder });
            // alert(Invorder);
            //$('#DynamicRow tr').empty();
            //$('#DynamicRow').empty();
            this.displayModel = [];
            this.displayData = [];
            this.setState({ showdata: this.displayData });
            this.setState({ showmodel: this.displayModel });
            $("#SubjectManually").hide();
            $("#to").hide();
            $("#FooterMenu1").hide();
            $("#FooterMenu").hide();
            $("#SubjectButton").hide();
            $("#ModelButton").hide();
            $("#Notes").hide();
            $("#Receiver").hide();
            $("#Preview").hide();
            $("#Manually").hide();
            $("#FooterMenu").hide();
            $("#SubjectManually").hide();
            $("#ModelManually").hide();
            $("#PreviewManual").hide();
            $("#Invoice").show();
            $(".if-single-invoice").show();
            $("#Left").show();
            this.setState({ CreateManually: true });
            $('#Invord').val('');
            this.clearFieldManually();
            this.clearField();
        }
    };
    NewPowerFactor.prototype.IndoorheadRows = function () {
        return [
            { LinkTitle: 'Brand', Modelname: 'Model', QuantityNumber: 'QuantityNumber', Rated_x0020_Capacity_Btu_h_T3: 'Rated Capacity', IndoorPowerInput_kW_T3: 'Indoor Power Input', OutdoorPowerInput_kW_T3: 'Outdoor Power Input', Rated_Power_Factor_T3_x0020_: 'Rated Powerfactor', IndoorUnit_V_Ph_Hz: 'Indoor Output unit', OutdoorUnit_V_Ph_HZ_: 'Outdoor Output unit' },
        ];
    };
    /* public printDiv() {
       function AlternativeheadRows() {
         return [
           { Brand: 'Brand', Model: 'Model', QuantityNumber: 'Quantity Number', RatedCapacity: 'Rated Capacity', IndoorPowerInput: 'Indoor Power Input', OutdoorPowerInput: 'Outdoor Power Input', Total: 'Total', RatedPowerfactor: 'Rated Power factor', IndoorOutputunit: 'Indoor Output unit', OutdoorOutputunit: 'Outdoor Output unit' },
         ]
       }
       var reactHandler = this;
       const doc = new jsPDF('p', 'mm', 'a4');
       //autoTable(doc, { html: '#PreviewTable' }),
         autoTable(doc, {
           head: AlternativeheadRows(),
           body: savearr2,
  
           styles: { cellWidth: 'wrap', fontSize: 8 },
           headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119] },
           columnStyles: {
             0: { cellWidth: 15, halign: "center" },
             1: { cellWidth: 29, halign: "center" },
             2: { cellWidth: 15, halign: "center" },
             3: { cellWidth: 15, halign: "center" },
             4: { cellWidth: 15, halign: "center" },
             5: { cellWidth: 15, halign: "center" },
             6: { cellWidth: 15, halign: "center" },
             7: { cellWidth: 20, halign: "center" },
             8: { cellWidth: 20, halign: "center" },
  
           },
           tableWidth: 170,
           didDrawPage: function (data) {
             // Header
             doc.setFontSize(20);
             doc.setTextColor(10);
             var img1 = new Image();
             img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
             doc.addImage(img1, 'png', 90, 170, 120, 130);
             var img = new Image();
             img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
             doc.addImage(img, 'png', data.settings.margin.left, 13, 30, 12);
             doc.setFontSize(8);
             doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"),180, 13);
             doc.setFontSize(8);
             doc.text('Ref–RCA/',160, 18);
             doc.setFontSize(8);
             doc.text(reactHandler.state.SelectedInvo, 174, 18);
             doc.setFontSize(8);
             doc.text('/001', 196, 18);
             doc.addFont('ArialMS', 'Arial', 'normal');
             doc.setFont('Arial');
             doc.setFontSize(8);
             doc.text('To:',15, 40);
             doc.setFontSize(8);
             doc.text(reactHandler.state.SelectedAddress,18,45);
             doc.setFontSize(8);
             doc.text('Subject: A/C Power Factor -',15,70);
             doc.setFontSize(8);
             doc.text("Project Name ", 18,75);
             doc.setFontSize(8);
             doc.text(reactHandler.state.SelectedProjName, 46, 75);
             doc.setFontSize(8);
             doc.text('Customer Name ', 18,79);
             doc.setFontSize(8);
             doc.text(reactHandler.state.SelectedSellTo, 46,79);
             doc.setFontSize(8);
             doc.text('Consultant Name ', 18,84);
             doc.setFontSize(8);
             doc.text(reactHandler.state.SelectedConsult, 46, 84);
             doc.setFontSize(8);
             doc.text(' This is digitally generated letter signature is not required', 67, 294);
             doc.setFontSize(8);
             doc.text('Abu Dhabi: 02 6727684, Dubai: 04 2820477, Ajman: 06 7497111, Al Ain: 03 7641292', 15, 280);
             doc.setFontSize(8);
             doc.text('Fujairah: 09 2239898, Ras Al Khaimah: 07 2334581, Zayed City: 02 8840902', 15, 284);
             doc.setFontSize(8);
             doc.text('Email: info@taqeef.com, www.taqeef.com', 15, 288);
             doc.setFontSize(8);
             doc.text('Note:', 15, 170);
             doc.setFontSize(8);
             doc.text(' Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 24, 170);
             doc.setFontSize(8);
             doc.text('If required any further information, please dial in:', 15, 175);
             doc.setFontSize(8);
             doc.setTextColor(0, 77, 119);
             doc.text('800Taqeef', 84, 175);
             var pageSize = doc.internal.pageSize;
             var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                  },
           theme: 'grid', //striped
           margin: { top: 100 }
         });
  
        doc.autoPrint({ variant: 'non-conform' });
        doc.output('dataurlnewwindow');
     }*/
    NewPowerFactor.prototype.UploadFiletoDocumentLibrary = function (file, webUrl, ReceiverId) {
        return __awaiter(this, void 0, void 0, function () {
            var test, fileurl, myfile, siteUrl, newweb;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = ReceiverId;
                        myfile = file;
                        siteUrl = "" + webUrl + "";
                        newweb = webs_1.Web(siteUrl);
                        if (!(myfile.size <= 10485760)) return [3 /*break*/, 2];
                        return [4 /*yield*/, newweb.getFolderByServerRelativeUrl("/sites/OPR/ACModel/PFDetails")
                                .files.add(myfile.name, myfile, false)
                                .then(function (data) {
                                //alert("Successfully");  alert(ReceiverId);
                                data.file.getItem().then(function (item) {
                                    fileurl = data.file.data.url;
                                    item.update({
                                        ToAddress: $("#ToSaveRecevier").val(),
                                        InvoiceNo: _this.state.SelectedInvo,
                                        Location: _this.state.SelectedLoc,
                                        ProjectName: _this.state.SelectedProjName,
                                        CustomerName: _this.state.SelectedSellTo,
                                        //  OrderNo: ""+ this.state.SelectedOrd +"",
                                        // Date: "" + (moment(this.state.currentDate).format("MMMM DD, YYYY")) + "",
                                        //Cc: $("#Cc").val(),
                                        ReceiverIdId: test
                                    }).then(function (myupdate) { });
                                });
                            })["catch"](function (error) {
                                // alert("check");
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, newweb.getFolderByServerRelativeUrl('/sites/OPR/ACModel/PFDetails') //"/sites/POC/CorporateIntranet/SignAuditTrailList/"
                            .files.addChunked(myfile.name, myfile)
                            .then(function (data) {
                            // alert("Successfully");  alert(ReceiverId);
                            data.file.getItem().then(function (item) {
                                fileurl = data.file.data.url;
                                item.update({
                                    ToAddress: $("#ToSaveRecevier").val(),
                                    InvoiceNo: "" + _this.state.SelectedInvo + "",
                                    Location: "" + _this.state.SelectedLoc + "",
                                    ProjectName: "" + _this.state.SelectedProjName + "",
                                    CustomerName: "" + _this.state.SelectedSellTo + "",
                                    //  OrderNo: ""+ this.state.SelectedOrd +"",
                                    // Date: "" + (moment(this.state.currentDate).format("MMMM DD, YYYY")) + "",
                                    //Cc: $("#Cc").val(),
                                    ReceiverIdId: test
                                }).then(function (myupdate) { });
                            });
                        })["catch"](console.log)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NewPowerFactor.prototype.SaveLibrary = function (ReceiverId) {
        //  alert(ReceiverId);
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotlaNoQuantity;
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
        var reactHandler = this;
        var doc = new jspdf_1["default"]('p', 'mm', 'a4');
        jspdf_autotable_1["default"](doc, {
            head: AlternativeheadRows(),
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 18, halign: "center" },
                6: { cellWidth: 19, halign: "center" },
                7: { cellWidth: 17, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            didDrawPage: function (data) {
                doc.setFontSize(20);
                var img1 = new Image();
                img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                doc.addImage(img1, 'png', 180, 230, 40, 60);
                var img = new Image();
                img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                doc.setFontSize(8);
                doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
                doc.setFontSize(8);
                doc.text('Pf–', 158, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SalesPersonCode, 162, 30);
                doc.setFontSize(8);
                doc.text('/', 178, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedInvo, 180, 30);
                doc.setFontSize(8);
                doc.text('/001', 202, 30);
                doc.addFont('ArialMS', 'Arial', 'normal');
                doc.setFont('Arial', 'normal');
                doc.setFontSize(8);
                doc.text('To:', 15, 40);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedAddress, 18, 45);
                doc.setFontSize(8);
                doc.text("Project Name ", 18, 75);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedProjName, 46, 75);
                doc.setFontSize(8);
                doc.text('Customer Name ', 18, 79);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedSellTo, 46, 79);
                doc.setFontSize(8);
                doc.text('Consultant Name ', 18, 83);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedConsult, 46, 83);
                doc.setFontSize(10);
                doc.setTextColor(0, 77, 119);
                doc.text("Subject: A/C Power Factor", 89, 67);
                var pageSize = doc.internal.pageSize;
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            },
            theme: 'grid',
            margin: { top: 100, left: 20, right: 20 }
        });
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        var finalY2 = doc.lastAutoTable.finalY;
        if (finalY2 >= pageHeight) {
            doc.addPage();
        }
        var finalY3 = doc.lastAutoTable.finalY;
        var TotalTableHight5 = finalY3;
        jspdf_autotable_1["default"](doc, {
            startY: TotalTableHight5,
            body: savearr2,
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 19, halign: "center" },
                6: { cellWidth: 16, halign: "center" },
                7: { cellWidth: 16, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            theme: 'grid',
            margin: { bottom: 40, left: 20, right: 20 }
        });
        var finalY5 = doc.lastAutoTable.finalY;
        var TotalTableHight = finalY5 + 1;
        jspdf_autotable_1["default"](doc, {
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
        var finalY1 = doc.lastAutoTable.finalY;
        var TotalTableHight1 = finalY1 + 10;
        doc.setFontSize(8);
        doc.text('Note:', 15, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
        var pageCount = doc.internal.pages.length;
        var img4 = new Image();
        img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
        doc.addImage(img4, 'png', 180, 230, 40, 60);
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Abu Dhabi:', 15, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Dubai:', 45, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ajman:', 71, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Al Ain:', 97, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Fujairah:', 15, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ras Al Khaimah:', 42, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Zayed City:', 81, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Email:', 15, 288);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 6727684', 30, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('04 2820477', 56, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('06 7497111', 82, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('03 7641292', 108, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('09 2239898', 27, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('07 2334581', 66, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 8840902', 98, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('info@taqeef.com, www.taqeef.com', 24, 288);
        }
        doc.setFontSize(8);
        doc.setTextColor(0, 77, 119);
        doc.text('800Taqeef', 76, TotalTableHight1 + 14);
        var myDocName = "Pf–" + this.state.SalesPersonCode + "-" + this.state.SelectedInvo + "-" + ReceiverId + ".pdf";
        var blobpdf = new Blob([doc.output('blob')], { type: 'application/pdf' });
        var FileName = myDocName;
        var FileInput = new File([blobpdf], FileName);
        var serverUrl = "" + this.props.siteurl;
        this.UploadFiletoDocumentLibrary(FileInput, serverUrl, ReceiverId);
    };
    NewPowerFactor.prototype.ManualLibrary = function (ReceiverId) {
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotlaNoQuantity;
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
        var reactHandler = this;
        var doc = new jspdf_1["default"]('p', 'mm', 'a4');
        jspdf_autotable_1["default"](doc, {
            head: AlternativeheadRows(),
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 18, halign: "center" },
                6: { cellWidth: 19, halign: "center" },
                7: { cellWidth: 17, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            didDrawPage: function (data) {
                doc.setFontSize(20);
                var img1 = new Image();
                img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                doc.addImage(img1, 'png', 180, 230, 40, 60);
                var img = new Image();
                img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                doc.setFontSize(8);
                doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
                doc.setFontSize(8);
                doc.text('Pf/', 162, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedInvo, 175, 30);
                doc.setFontSize(8);
                doc.text('/001', 197, 30);
                doc.addFont('ArialMS', 'Arial', 'normal');
                doc.setFont('Arial', 'normal');
                doc.setFontSize(8);
                doc.text('To:', 15, 40);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedAddress, 18, 45);
                doc.setFontSize(8);
                doc.text("Project Name ", 18, 75);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedProjName, 46, 75);
                doc.setFontSize(8);
                doc.text('Customer Name ', 18, 79);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedSellTo, 46, 79);
                doc.setFontSize(8);
                doc.text('Consultant Name ', 18, 83);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedConsult, 46, 83);
                doc.setFontSize(10);
                doc.setTextColor(0, 77, 119);
                doc.text("Subject: A/C Power Factor", 89, 67);
                var pageSize = doc.internal.pageSize;
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            },
            theme: 'grid',
            margin: { top: 100, left: 20, right: 20 }
        });
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        var finalY2 = doc.lastAutoTable.finalY;
        if (finalY2 >= pageHeight) {
            doc.addPage();
        }
        var finalY3 = doc.lastAutoTable.finalY;
        var TotalTableHight5 = finalY3;
        jspdf_autotable_1["default"](doc, {
            startY: TotalTableHight5,
            body: savearr3,
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 19, halign: "center" },
                6: { cellWidth: 16, halign: "center" },
                7: { cellWidth: 16, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            theme: 'grid',
            margin: { bottom: 40, left: 20, right: 20 }
        });
        var finalY5 = doc.lastAutoTable.finalY;
        var TotalTableHight = finalY5 + 1;
        jspdf_autotable_1["default"](doc, {
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
        var finalY1 = doc.lastAutoTable.finalY;
        var TotalTableHight1 = finalY1 + 10;
        doc.setFontSize(8);
        doc.text('Note:', 15, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
        var img1 = new Image();
        img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
        doc.addImage(img1, 'png', 180, 230, 40, 60);
        var pageCount = doc.internal.pages.length;
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Abu Dhabi:', 15, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Dubai:', 45, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ajman:', 71, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Al Ain:', 97, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Fujairah:', 15, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ras Al Khaimah:', 42, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Zayed City:', 81, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Email:', 15, 288);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 6727684', 30, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('04 2820477', 56, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('06 7497111', 82, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('03 7641292', 108, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('09 2239898', 27, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('07 2334581', 66, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 8840902', 98, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('info@taqeef.com, www.taqeef.com', 24, 288);
        }
        doc.setFontSize(8);
        doc.setTextColor(0, 77, 119);
        doc.text('800Taqeef', 76, TotalTableHight1 + 14);
        var myDocName = "Pf-" + this.state.SelectedInvo + "-" + ReceiverId + ".pdf";
        var blobpdf = new Blob([doc.output('blob')], { type: 'application/pdf' });
        var FileName = myDocName;
        var FileInput = new File([blobpdf], FileName);
        var serverUrl = "" + this.props.siteurl;
        this.UploadFiletoDocumentLibrary(FileInput, serverUrl, ReceiverId);
    };
    NewPowerFactor.prototype.SavePrint = function () {
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotlaNoQuantity;
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
                    Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW)T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
                },
            ];
        }
        var reactHandler = this;
        var doc = new jspdf_1["default"]('p', 'mm', 'a4');
        jspdf_autotable_1["default"](doc, {
            head: AlternativeheadRows(),
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 18, halign: "center" },
                6: { cellWidth: 19, halign: "center" },
                7: { cellWidth: 17, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            didDrawPage: function (data) {
                doc.setFontSize(20);
                var img1 = new Image();
                img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                doc.addImage(img1, 'png', 180, 230, 40, 60);
                var img = new Image();
                img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                doc.setFontSize(8);
                doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
                doc.setFontSize(8);
                doc.text('Pf–', 158, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SalesPersonCode, 162, 30);
                doc.setFontSize(8);
                doc.text('/', 178, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedInvo, 180, 30);
                doc.setFontSize(8);
                doc.text('/001', 202, 30);
                doc.addFont('ArialMS', 'Arial', 'normal');
                doc.setFont('Arial', 'normal');
                doc.setFontSize(8);
                doc.text('To:', 15, 40);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedAddress, 18, 45);
                doc.setFontSize(8);
                doc.text("Project Name ", 18, 75);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedProjName, 46, 75);
                doc.setFontSize(8);
                doc.text('Customer Name ', 18, 79);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedSellTo, 46, 79);
                doc.setFontSize(8);
                doc.text('Consultant Name ', 18, 83);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedConsult, 46, 83);
                doc.setFontSize(10);
                doc.setTextColor(0, 77, 119);
                doc.text("Subject: A/C Power Factor", 89, 67);
                var pageSize = doc.internal.pageSize;
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            },
            theme: 'grid',
            margin: { top: 100, left: 20, right: 20 }
        });
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        var finalY2 = doc.lastAutoTable.finalY;
        if (finalY2 >= pageHeight) {
            doc.addPage();
        }
        var finalY3 = doc.lastAutoTable.finalY;
        var TotalTableHight5 = finalY3;
        jspdf_autotable_1["default"](doc, {
            startY: TotalTableHight5,
            body: savearr2,
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 19, halign: "center" },
                6: { cellWidth: 16, halign: "center" },
                7: { cellWidth: 16, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            theme: 'grid',
            margin: { bottom: 40, left: 20, right: 20 }
        });
        var finalY5 = doc.lastAutoTable.finalY;
        var TotalTableHight = finalY5 + 1;
        jspdf_autotable_1["default"](doc, {
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
        var finalY1 = doc.lastAutoTable.finalY;
        var TotalTableHight1 = finalY1 + 10;
        doc.setFontSize(8);
        doc.text('Note:', 15, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
        var img4 = new Image();
        img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
        doc.addImage(img4, 'png', 180, 230, 40, 60);
        var pageCount = doc.internal.pages.length;
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Abu Dhabi:', 15, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Dubai:', 45, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ajman:', 71, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Al Ain:', 97, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Fujairah:', 15, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ras Al Khaimah:', 42, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Zayed City:', 81, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Email:', 15, 288);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 6727684', 30, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('04 2820477', 56, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('06 7497111', 82, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('03 7641292', 108, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('09 2239898', 27, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('07 2334581', 66, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 8840902', 98, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('info@taqeef.com, www.taqeef.com', 24, 288);
        }
        doc.setFontSize(8);
        doc.setTextColor(0, 77, 119);
        doc.text('800Taqeef', 76, TotalTableHight1 + 14);
        var myDocName = "Pf–" + this.state.SalesPersonCode + "/" + this.state.SelectedInvo + ".pdf";
        doc.save(myDocName);
    };
    NewPowerFactor.prototype.DownManual = function () {
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotlaNoQuantity;
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
        var totalmodel = "Total " + this.state.TotalModel;
        var totalquantity = "Total " + this.state.TotlaNoQuantity;
        var reactHandler = this;
        var doc = new jspdf_1["default"]('p', 'mm', 'a4');
        jspdf_autotable_1["default"](doc, {
            head: AlternativeheadRows(),
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 18, halign: "center" },
                6: { cellWidth: 19, halign: "center" },
                7: { cellWidth: 17, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            didDrawPage: function (data) {
                doc.setFontSize(20);
                var img1 = new Image();
                img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
                doc.addImage(img1, 'png', 180, 230, 40, 60);
                var img = new Image();
                img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png';
                doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
                doc.setFontSize(8);
                doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
                doc.setFontSize(8);
                doc.text('Pf/', 162, 30);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedInvo, 175, 30);
                doc.setFontSize(8);
                doc.text('/001', 197, 30);
                doc.addFont('ArialMS', 'Arial', 'normal');
                doc.setFont('Arial', 'normal');
                doc.setFontSize(8);
                doc.text('To:', 15, 40);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedAddress, 18, 45);
                doc.setFontSize(8);
                doc.text("Project Name ", 18, 75);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedProjName, 46, 75);
                doc.setFontSize(8);
                doc.text('Customer Name ', 18, 79);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedSellTo, 46, 79);
                doc.setFontSize(8);
                doc.text('Consultant Name ', 18, 83);
                doc.setFontSize(8);
                doc.text(reactHandler.state.SelectedConsult, 46, 83);
                doc.setFontSize(10);
                doc.setTextColor(0, 77, 119);
                doc.text("Subject: A/C Power Factor", 89, 67);
                var pageSize = doc.internal.pageSize;
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            },
            theme: 'grid',
            margin: { top: 100, left: 20, right: 20 }
        });
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        var finalY2 = doc.lastAutoTable.finalY;
        if (finalY2 >= pageHeight) {
            doc.addPage();
        }
        var finalY3 = doc.lastAutoTable.finalY;
        var TotalTableHight5 = finalY3;
        jspdf_autotable_1["default"](doc, {
            startY: TotalTableHight5,
            body: savearr3,
            styles: { cellWidth: 'wrap', fontSize: 8 },
            headStyles: { halign: 'center', valign: 'middle', fontSize: 8, textColor: [0, 77, 119], fillColor: "#e8e6e6", cellWidth: 17 },
            columnStyles: {
                0: { cellWidth: 15, halign: "center" },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 17, halign: "center" },
                3: { cellWidth: 17, halign: "center" },
                4: { cellWidth: 15, halign: "center" },
                5: { cellWidth: 19, halign: "center" },
                6: { cellWidth: 16, halign: "center" },
                7: { cellWidth: 16, halign: "center" },
                8: { cellWidth: 17, halign: "center" },
                9: { cellWidth: 17, halign: "center" }
            },
            tableWidth: 100,
            theme: 'grid',
            margin: { bottom: 40, left: 20, right: 20 }
        });
        var finalY5 = doc.lastAutoTable.finalY;
        var TotalTableHight = finalY5 + 1;
        jspdf_autotable_1["default"](doc, {
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
        var finalY1 = doc.lastAutoTable.finalY;
        var TotalTableHight1 = finalY1 + 10;
        doc.setFontSize(8);
        doc.text('Note:', 15, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
        doc.setFontSize(8);
        doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
        var img4 = new Image();
        img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png';
        doc.addImage(img4, 'png', 180, 230, 40, 60);
        var pageCount = doc.internal.pages.length;
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Abu Dhabi:', 15, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Dubai:', 45, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ajman:', 71, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Al Ain:', 97, 280);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Fujairah:', 15, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Ras Al Khaimah:', 42, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text(', Zayed City:', 81, 284);
            doc.setFontSize(8);
            doc.setTextColor(109, 109, 109);
            doc.text('Email:', 15, 288);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 6727684', 30, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('04 2820477', 56, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('06 7497111', 82, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('03 7641292', 108, 280);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('09 2239898', 27, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('07 2334581', 66, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('02 8840902', 98, 284);
            doc.setFontSize(8);
            doc.setTextColor(0, 77, 119);
            doc.text('info@taqeef.com, www.taqeef.com', 24, 288);
        }
        doc.setFontSize(8);
        doc.setTextColor(0, 77, 119);
        doc.text('800Taqeef', 76, TotalTableHight1 + 14);
        var myDocName = "Pf/" + this.state.SelectedInvo + ".pdf";
        doc.save(myDocName);
    };
    NewPowerFactor.prototype.render = function () {
        var _this = this;
        var reactHandler = this;
        var selectedOptions = reactHandler.state.selectedOptions;
        var value = selectedOptions;
        var MultiInvoice = this.state.MutlipleNew.map(function (item, key) {
            //console.log(item);
            return (React.createElement("div", { className: "check-box-li-wrap" },
                React.createElement("label", { className: "container" },
                    React.createElement("input", { type: "checkbox", id: key + "-model-no", name: "multi-invo-numbers", className: "multi-invo-numbers", value: item.No }),
                    item.No,
                    React.createElement("span", { className: "checkmark" }))));
        });
        var Location = this.state.items.map(function (item, key) {
            if (item.Locations != "") {
                return (React.createElement("li", null,
                    "  ",
                    React.createElement("a", { href: '#', onClick: function () { return reactHandler.handleClick(item.Locations); } }, item.Locations),
                    " "));
            }
        });
        var ModalButton = this.state.ModelTypeArray.map(function (item, key) {
            if (item.Brand != "") {
                return (React.createElement("span", null,
                    React.createElement("td", null, item.Brand),
                    React.createElement("td", null, item.Model),
                    React.createElement("td", null, item.RatedCapacity),
                    React.createElement("td", null, item.IndoorPowerInput),
                    React.createElement("td", null, item.OutdoorPowerInput),
                    React.createElement("td", null,
                        React.createElement("input", { value: item.QuantityNumber }),
                        "*",
                        React.createElement("input", { value: item.IndoorPowerInput }),
                        "+",
                        React.createElement("input", { value: item.OutdoorPowerInput })),
                    React.createElement("td", null, item.RatedPowerFactor),
                    React.createElement("td", null, item.IndoorOutput)));
            }
        });
        return (React.createElement("div", { className: NewPowerFactor_module_scss_1["default"].newPowerFactor },
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
                                                    React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true" }, " "),
                                                    "Logout "),
                                                " "))))),
                            React.createElement("div", { className: "login-details-man" },
                                React.createElement("div", { className: "login-details-man-inner" },
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
                                                    React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true" }, " "),
                                                    "Logout "),
                                                " ")))))),
                        React.createElement("nav", null,
                            React.createElement("ul", null))))),
            React.createElement("div", { className: "banner home-banner powerfactor-banner relative" },
                React.createElement("div", { className: "background" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "banner-contents" },
                            React.createElement("h1", { className: "text-center" }, " Power factor (PF) is the ratio of working power, measured in kilowatts (kW), to apparent power, measured in kilovolt amperes (kVA). This is the measure of the amount of power used to run Air Conditioners. You can generate the power factor letters in few clicks now!!"),
                            React.createElement("div", { className: "row pf-defaultcontrols" },
                                React.createElement("div", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group relative" },
                                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg", alt: "search" }),
                                        React.createElement(react_select_1["default"], { id: "Search", options: uniquearr1, onInputChange: this.handleInputChange, theme: function (theme) { return (__assign(__assign({}, theme), { borderRadius: 0, colors: __assign(__assign({}, theme.colors), { primary25: 'white', primary: 'white' }) })); }, isClearable: true, isSearchable: true, placeholder: "Search for Invoice No", value: value, onChange: this.handleChange }))),
                                React.createElement("div", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group relative" },
                                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg", alt: "search" }),
                                        React.createElement(react_select_1["default"], { id: "Search", options: uniquearr, onInputChange: this.handleInputChange, theme: function (theme) { return (__assign(__assign({}, theme), { borderRadius: 0, colors: __assign(__assign({}, theme.colors), { primary25: 'white', primary: 'white' }) })); }, isClearable: true, isSearchable: true, placeholder: "Search for Order No", value: value, onChange: this.handleChange3 }))),
                                React.createElement("div", { className: "refresh-row-no" },
                                    React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/refresh.svg", alt: "refresh", onClick: function () { return _this.HideManually(); } }))),
                            React.createElement("div", { className: "row pf-or" },
                                React.createElement("p", null, " or")),
                            React.createElement("div", { className: "row pf-createmanually" },
                                React.createElement("div", { className: "col-md-4" },
                                    React.createElement("div", { className: "form-group relative" },
                                        React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Create Manually", onClick: function () { return _this.ShowManually(); } }))),
                                React.createElement("div", { className: "col-md-8" },
                                    React.createElement("div", { className: "banner-view-pow-lett" },
                                        React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx" }, "View Power Factor Letter")))))))),
            React.createElement("div", { className: "invoice-secyion-details clearfix", id: "Invoice" },
                React.createElement("div", { className: "pull-left" },
                    React.createElement("a", { href: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx", "data-interception": 'off' }, "View Power Factor Letters ")),
                React.createElement("div", { className: "pull-right" },
                    React.createElement("div", { className: "if-multi-invoice", style: { display: "none" } },
                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png", alt: "image" }),
                        " ",
                        React.createElement("span", null,
                            " ",
                            this.state.SelectedOrd)),
                    React.createElement("div", { className: "if-single-invoice", style: { display: "none" } },
                        React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png", alt: "image" }),
                        " ",
                        React.createElement("span", null,
                            " ",
                            this.state.SelectedInvo)))),
            React.createElement("div", { id: "Left" },
                React.createElement("div", { className: "invoice-type-area-selet-value relative clearfix" },
                    React.createElement("div", { className: "invoice-type-area-left" },
                        React.createElement("ul", null,
                            React.createElement("li", { className: "relatve current", id: "LocationClass" },
                                React.createElement("a", { href: "#", onClick: function () { return _this.ShowDrop(); } },
                                    React.createElement("img", { className: "add-more-dats", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/addmore.png", alt: "image", id: "Add", onClick: function () { return _this.ShowDrop(); } }),
                                    React.createElement("img", { className: "add-less-dats", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/addless.png", alt: "image", id: "less", onClick: function () { return _this.ShowDrop(); } }),
                                    React.createElement("img", { className: "completed-img", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png", alt: "image", id: "complete", style: { display: "none" } }),
                                    "To Address",
                                    React.createElement("img", { className: "current-tab-img", alt: "image" }),
                                    " "),
                                React.createElement("div", { className: "add-more-expands", id: "DropButton" },
                                    React.createElement("ul", null,
                                        "   ",
                                        Location))),
                            React.createElement("li", { className: "relative", id: "SubjectClass" },
                                " ",
                                React.createElement("a", { href: "#", onClick: function () { return _this.ShowSubject(); } },
                                    "  ",
                                    React.createElement("img", { className: "completed-img", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png", alt: "image", id: "complete1" }),
                                    "     Subject   ",
                                    React.createElement("img", { className: "current-tab-img", alt: "image" }),
                                    " "),
                                " "),
                            React.createElement("li", { className: "relatve", id: "ModelClass" },
                                " ",
                                React.createElement("a", { href: "#", onClick: function () { return _this.ShowModel(); } },
                                    " ",
                                    React.createElement("img", { className: "completed-img", src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png", alt: "image", id: "complete2" }),
                                    "     Model   ",
                                    React.createElement("img", { className: "current-tab-img", alt: "image" }),
                                    "  "),
                                " "),
                            React.createElement("li", { className: "relatve", id: "NotesClass" },
                                " ",
                                React.createElement("a", { href: "#", onClick: function () { return _this.ShowNotes(); } }, "  Note "),
                                " "),
                            React.createElement("li", { className: "relatve", id: "ReceiverClass" },
                                " ",
                                React.createElement("a", { href: "#", onClick: function () { return _this.ShowReceiver(); } }, " Receiver Details "),
                                " "))),
                    React.createElement("div", { className: "invoice-type-area-right" },
                        React.createElement("div", { className: "main-textareas" },
                            React.createElement("div", { id: "to" },
                                React.createElement("p", null,
                                    "  ",
                                    React.createElement("b", null, " To: ")),
                                React.createElement("div", { id: "ToButton", className: "space-separator" })),
                            React.createElement("div", { id: "SubjectButton", className: "space-separator" },
                                React.createElement("p", { className: "preview-subject" },
                                    " ",
                                    React.createElement("b", null, " Subject: "),
                                    "  A/C Power Factor"),
                                React.createElement("div", { className: "SubjectPreview" },
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Project Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea", rows: 1, onChange: this.handleChangeTextarea1, placeholder: "" }, " "),
                                        React.createElement("span", { id: "SubError", style: { display: "none", color: "red" } }, "Enter Project Name")),
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Consultant Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea2", rows: 1, onChange: this.handleChangeTextarea2 }),
                                        React.createElement("span", { id: "SubError2", style: { display: "none", color: "red" } }, "Enter Consultant Name")),
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Customer Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea3", rows: 1, onChange: this.handleChangeTextarea3 }),
                                        React.createElement("span", { id: "SubError3", style: { display: "none", color: "red" } }, "Enter Customer Name")))),
                            React.createElement("div", { id: "SubjectManually", className: "space-separator" },
                                React.createElement("p", { className: "preview-subject" },
                                    " ",
                                    React.createElement("b", null, " Subject: "),
                                    "  A/C Power Factor"),
                                React.createElement("div", { className: "SubjectPreview" },
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Project Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea4", rows: 1, onChange: this.handleChangeTextarea4, placeholder: "" }, " ")),
                                    React.createElement("span", { id: "SubError4", style: { display: "none", color: "red" } }, "Enter Project Name"),
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Consultant Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea5", rows: 1, onChange: this.handleChangeTextarea5 })),
                                    React.createElement("span", { id: "SubError5", style: { display: "none", color: "red" } }, "Enter Consultant Name"),
                                    React.createElement("div", null,
                                        React.createElement("h5", null, "Customer Name"),
                                        " : ",
                                        React.createElement("textarea", { id: "myTextarea6", rows: 1, onChange: this.handleChangeTextarea6 })),
                                    React.createElement("span", { id: "SubError6", style: { display: "none", color: "red" } }, "Enter Customer Name"))),
                            React.createElement("div", { id: "ModelButton", className: "space-separator clearfix container-outdoor-pv" },
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
                                    React.createElement("tbody", { id: "DynamicRow" }, this.state.showmodel),
                                    React.createElement("tbody", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", { colSpan: 2 }),
                                            React.createElement("td", null,
                                                this.state.TotlaNoQuantity,
                                                React.createElement("p", null, "(Total)")),
                                            React.createElement("td", { colSpan: 3 }),
                                            React.createElement("td", null,
                                                this.state.TotalModel,
                                                React.createElement("p", null, "(Total)")),
                                            React.createElement("td", { colSpan: 3 }))))),
                            React.createElement("div", { id: "ModelManually", className: "space-separator clearfix container-outdoor-pv" },
                                React.createElement("table", { className: "table", id: "ManuallTable" },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { className: "model-td", rowSpan: 2 }, " Brand "),
                                            React.createElement("th", { className: "model-td", rowSpan: 2 }, " Model "),
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
                                    React.createElement("tbody", null, this.state.showdata)),
                                React.createElement("button", { id: "add-row", onClick: this.handleAddRow },
                                    React.createElement("i", { className: "fa fa-plus", "aria-hidden": "true" }),
                                    " Add")),
                            React.createElement("div", { id: "Notes", className: "space-separator" },
                                React.createElement("p", null,
                                    "  ",
                                    React.createElement("b", null, "Note:"),
                                    "   Condition (T3) Cooling: Indoor 29/19\u00B0C (DB/WB), Outdoor 46/24\u00B0C (DB/WB) "),
                                React.createElement("p", null,
                                    " If required any further information, please dial in ",
                                    React.createElement("a", { className: "Note-Preview" }, "800Taqeef"))))))),
            React.createElement("div", { id: "FooterMenu" },
                React.createElement("div", { className: "footer-controls" },
                    React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Send", onClick: function () { return _this.ShowSend(); } }),
                    React.createElement("input", { type: "submit", className: "btn btn-sec", value: "Preview", onClick: function () { return _this.ShowPreview(); } }),
                    React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.CancelAlert(); } }))),
            React.createElement("div", { id: "FooterMenu1" },
                React.createElement("div", { className: "footer-controls" },
                    React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Send", onClick: function () { return _this.ShowManualSend(); } }),
                    React.createElement("input", { type: "submit", className: "btn btn-sec", value: "Preview", onClick: function () { return _this.ShowManualPreview(); } }),
                    React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.CancelAlert(); } }))),
            React.createElement("div", { className: "lightbox open", id: "CancelEverything" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Cancel the Process"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "  Are you sure to cancel this process "),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.CancelManual(); }, value: "Yes" }),
                            React.createElement("input", { type: "submit", className: "btn btn-no-bg", onClick: function () { return _this.StopProcess(); }, value: "Cancel" }))))),
            React.createElement("div", { className: "lightbox open", id: "Sucess" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Success"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "  Successfully Created "),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessReceiver(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "AlertModel" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Model"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "Enter Brand, Quantity and Model"),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessModel(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "AlertModel2" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Model"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "Choose Model"),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessModel(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "AlertSubject" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Error in Subject"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, "Project Name/Consultant Name/Customer Name are Mandatory!"),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessModel(); }, value: "Ok" }))))),
            React.createElement("div", { className: "lightbox open", id: "Receiver" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Receiver Details"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-3" },
                                    React.createElement("label", null, "  From ")),
                                React.createElement("div", { className: "col-md-9", id: "From" },
                                    React.createElement("input", { className: "form-control", id: "From", value: "powerfactor@taqeef.com" })))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-3" },
                                    React.createElement("label", null, "  To ")),
                                React.createElement("div", { className: "col-md-9" },
                                    React.createElement("input", { type: "text", id: "ToSaveRecevier", className: "form-control" }),
                                    React.createElement("span", { id: "if-not-valid-email", style: { display: "none", color: "red" } }, "Not a Valid Email"),
                                    React.createElement("span", { id: "emptyToAddress", style: { display: "none", color: "red" } }, "To address should not be empty ")))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-3" },
                                    React.createElement("label", null, "  Cc ")),
                                React.createElement("div", { className: "col-md-9" },
                                    React.createElement("input", { type: "text", id: "Cc", className: "form-control" })))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-12" },
                                    React.createElement("p", null, "  "),
                                    React.createElement("p", null,
                                        "Hello ",
                                        this.state.SelectedSellTo,
                                        " ,"),
                                    React.createElement("p", null, "  "),
                                    React.createElement("textarea", { className: "body-textarea", id: "SubjectContent", rows: 3, onChange: this.handleChangeTextarea8 }, " "),
                                    React.createElement("span", { id: "SubError", style: { display: "none", color: "red" } }, "Enter Enter the body Content"),
                                    React.createElement("p", null, "  "),
                                    React.createElement("p", null, " Regards,"),
                                    React.createElement("textarea", { className: "receiver-textarea", id: "regard", rows: 1, onChange: this.handleChangeTextarea7 }, " "),
                                    React.createElement("span", { id: "regError", style: { display: "none", color: "red" } }, "Enter Regards")))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                                React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SaveReceiver(); }, value: "Send" }),
                                React.createElement("input", { type: "submit", className: "btn btn-no-bg", onClick: function () { return _this.HideReceiver(); }, value: "Cancel" })))))),
            React.createElement("div", { className: "more-invoice-wrap lightbox open", id: "multipleInvoiceCheckbox" },
                React.createElement("div", { className: "list-invoic-left" },
                    React.createElement("div", { className: "list-invoic-headre clearfix" },
                        React.createElement("div", { className: "pull-left" },
                            " ",
                            React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png", alt: "image" }),
                            " Invoices "),
                        React.createElement("div", { className: "pull-right" },
                            " ",
                            React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/close.svg", alt: "image", onClick: function () { return _this.close(); } }),
                            "  ")),
                    React.createElement("div", { className: "list-invoic-body", id: "MultipleInvoice" },
                        React.createElement("div", { className: "check-box-li-wrap" },
                            React.createElement("label", { className: "container" },
                                React.createElement("input", { type: "checkbox", className: "selectall", onChange: function () { return _this.SelectAll(); } }),
                                "Select All Invoices",
                                React.createElement("span", { className: "checkmark" }))),
                        MultiInvoice),
                    React.createElement("div", { className: "list-invoic-footer" },
                        React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Confirm", id: "ConfirmButton", onClick: function () { return _this.MultipleSelect(); } }),
                        React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.close(); } })))),
            React.createElement("div", { className: "lightbox open", id: "AlertMultipleSelect" },
                React.createElement("div", { className: "lightbox-inner-contents" },
                    React.createElement("div", { className: "lightbox-title" }, "Error in Multiple Select"),
                    React.createElement("div", { className: "lightbox-body" },
                        React.createElement("label", { className: "AlertText" }, " Please select atleast one invoice number!"),
                        React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                            React.createElement("input", { type: "submit", className: "btn btn-primary", onClick: function () { return _this.SuccessSelect(); }, value: "Ok" }))))),
            React.createElement("div", { id: "Manually" },
                React.createElement("div", { className: "lightbox open" },
                    React.createElement("div", { className: "lightbox-inner-contents" },
                        React.createElement("div", { className: "lightbox-title" }, "Create Manually"),
                        React.createElement("div", { className: "lightbox-body" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-md-3" },
                                        React.createElement("label", null, "  Invoice/OrderNo ")),
                                    React.createElement("div", { className: "col-md-9" },
                                        React.createElement("input", { type: "text", id: "Invord", className: "form-control" }),
                                        React.createElement("span", { id: "InvoError", style: { display: "none", color: "red" } }, "Enter InvoiceNo/orderNo to continue")))),
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                                    React.createElement("input", { type: "submit", className: "btn btn-primary", id: "SaveButton", onClick: function () { return _this.SaveManually(); }, value: "Save" }),
                                    React.createElement("input", { type: "submit", className: "btn btn-no-bg", onClick: function () { return _this.HideManually(); }, value: "Cancel" }))))))),
            React.createElement("div", { id: "Preview" },
                React.createElement("div", { className: "lightbox open lightbox-preview" },
                    React.createElement("div", { id: "print-preview" },
                        React.createElement("div", { className: "lightbox-inner-contents a4-lightbox-inner" },
                            React.createElement("div", { className: "lightbox-inner-contents-inner" },
                                React.createElement("div", { className: "lightbox-body a4" },
                                    React.createElement("div", { className: "preview-wrap-light" },
                                        React.createElement("div", { className: "priew-blocks clearfix" },
                                            React.createElement("div", { className: "logo refrenceno-logo" },
                                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.svg", alt: "logo" })),
                                            React.createElement("div", { className: "date-ref-no text-right" },
                                                React.createElement("p", null,
                                                    " ",
                                                    moment(this.state.currentDate).format("MMMM DD, YYYY"),
                                                    " "),
                                                React.createElement("p", null,
                                                    " Pf\u2013",
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
                                                "   A/C Power Factor "),
                                            React.createElement("div", { className: "SubjectPreview" },
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Project Name "),
                                                    ": ",
                                                    this.state.SelectedProjName),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Consultant Name "),
                                                    ": ",
                                                    this.state.SelectedConsult),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Customer Name "),
                                                    ": ",
                                                    this.state.SelectedSellTo))),
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
                                                    React.createElement("tbody", { id: "Third-table" }),
                                                    React.createElement("tbody", null,
                                                        React.createElement("tr", null,
                                                            React.createElement("td", { colSpan: 2 }),
                                                            React.createElement("td", null,
                                                                this.state.TotlaNoQuantity,
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
                                        React.createElement("p", { className: "digitallygenerator" }, "This letter is computer generated and does not require any signature or company's stamp in order to be considered valid."))))),
                        React.createElement("div", { className: "row top-save" },
                            React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                                React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Save", id: "cmd", onClick: function () { return _this.SavePrint(); } }),
                                React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.HidePreview(); } })))))),
            React.createElement("div", { id: "PreviewManual" },
                React.createElement("div", { className: "lightbox open lightbox-preview" },
                    React.createElement("div", { id: "print-preview" },
                        React.createElement("div", { className: "lightbox-inner-contents a4-lightbox-inner" },
                            React.createElement("div", { className: "lightbox-inner-contents-inner" },
                                React.createElement("div", { className: "lightbox-body a4" },
                                    React.createElement("div", { className: "preview-wrap-light" },
                                        React.createElement("div", { className: "priew-blocks clearfix" },
                                            React.createElement("div", { className: "logo refrenceno-logo" },
                                                React.createElement("img", { src: "https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.svg", alt: "logo" })),
                                            React.createElement("div", { className: "date-ref-no text-right" },
                                                React.createElement("p", null,
                                                    " ",
                                                    moment(this.state.currentDate).format("MMMM DD, YYYY"),
                                                    " "),
                                                React.createElement("p", null,
                                                    " Pf/",
                                                    this.state.SelectedInvo,
                                                    "/001 "))),
                                        React.createElement("div", null,
                                            React.createElement("p", null,
                                                " ",
                                                React.createElement("b", null, " To: "),
                                                " "),
                                            React.createElement("div", { className: "priew-blocks clearfix", id: "AddressPreviewManually" },
                                                React.createElement("p", null))),
                                        React.createElement("div", { className: "priew-blocks clearfix" },
                                            React.createElement("p", { className: "preview-subject" },
                                                " ",
                                                React.createElement("b", null, " Subject: "),
                                                "   A/C Power Factor  "),
                                            React.createElement("div", { className: "SubjectPreview" },
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Project Name "),
                                                    ": ",
                                                    this.state.SelectedProjName),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Consultant Name "),
                                                    ": ",
                                                    this.state.SelectedConsult),
                                                React.createElement("div", { className: "ProjectPreview" },
                                                    React.createElement("h5", null, "Customer Name "),
                                                    ": ",
                                                    this.state.SelectedSellTo))),
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
                                                    React.createElement("tbody", { id: "Second-table" }),
                                                    React.createElement("tbody", null,
                                                        React.createElement("tr", null,
                                                            React.createElement("td", { colSpan: 2 }),
                                                            React.createElement("td", null,
                                                                this.state.TotlaNoQuantity,
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
                                        React.createElement("p", { className: "digitallygenerator" }, "This letter is computer generated and does not require any signature or company's stamp in order to be considered valid."))))),
                        React.createElement("div", { className: "row top-save" },
                            React.createElement("div", { className: "col-md-12 text-center m-b-10" },
                                React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Save", onClick: function () { return _this.DownManual(); } }),
                                React.createElement("input", { type: "submit", className: "btn btn-no-bg", value: "Cancel", onClick: function () { return _this.HideManualPreview(); } }))))))));
    };
    return NewPowerFactor;
}(React.Component));
exports["default"] = NewPowerFactor;
