import * as React from 'react';
import styles from './NewPowerFactor.module.scss';
import { INewPowerFactorProps } from './INewPowerFactorProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import "@pnp/sp/profiles";
import * as $ from 'jquery';
import Select from 'react-select';
import "@pnp/sp/webs";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import * as moment from 'moment';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

import "@pnp/sp/folders";
import "@pnp/sp/files";
import { sp } from "@pnp/sp";
import "@pnp/sp/site-users/web";
$('html').css("visibility", "hidden");

//import { Dropdown } from 'semantic-ui-react';

setTimeout(function () {
  $('html').css("visibility", "visible");
  $('html').addClass('loading-in-progress');
}, 1200);

export interface INewPowerFactorState {
  OrderNo: any[];
  No: any[];
  options: Ioption[];
  selectedOptions: string;
  selectedOptions2: string;
  SelectedFloor:string;
  MasterID: string;
  ReceiversID: string;
  MasterNO: string;
  UserPicture: string;
  UserName: string;
  Designation: string;
  Email: string;
  SalesInvoiceHeaderData: any[];
  SalesPersonCode: string;
  Locations: any[];
  SelectedInvo: string;
  SelectedOrd: string;
  SelectedMod: string;
  SelectedOrder: any[];

  SelectedLoc: string;
  SelectedProject: string;
  SelectedConsultant: string;
  SelectedCustomer: string;
  items: any[];
  items2: any[];
  items3: any[];

  category: string;
  brand: string;
  address: string;
  Quantity: any[];
  ModelNumber: any[];
  rows: any[];
  rowLimit: number;
  ModelTypeArray: any[];
  QuantityNumber: string;
  ToAddress: string;
  From: string;
  Subject: string;
  SubjectManually: string;
  Details: string;
  Model: string;
  currentDate: string;
  sum: string;
  QuantityNo: any[];
  CreateManually: boolean;
  Floor: boolean;
  SelectedProjName: string;
  SelectedSellTo: string;
  SelectedConsult: string;
  IsRowPresent: boolean;
  IsOrderPresent: boolean;
  count: number;
  TotlaNoQuantity: number;
  TotalModel: number;
  regards: string;
  SubContent: string;
  regards1: string;
  SubContent1: string;
  IsRelative: boolean;
  ToLeft: boolean;
  SubLeft: boolean;
  ModLeft: boolean;
  NoteLeft: boolean;
  ReceiLeft: boolean;
  SelectedAddress: string;
  ToStatus: boolean;
  showdata: any[];
  showmodel: any[];
  showinvoice: any[];
  ModelPF: any[];
  BrandPF: any[];
  arrayIndex: number;
  dataQuantity: string;
  BrandManualType: any[];
  GetInvoiceNo: any[];
  MutlipleNew: any[];
  SelectedBrandTypes: string;
  FloorLocation: any[];
}
export interface Ioption {
  value: string;
  label: string;
}
let TotalCount: number = 0;
let TotalModelCount: number = 0;
let InvoiceNumber = [];
let MultipleArray = [];
let bindModel = [];
let InvoiceModel = [];
let ModelTypeManual = [];
let ModelTypeManual2 = [];
let ManualBrand = [];
let savearr2 = [];
let uniquearr = [];
const uniquearr1 = [];
let uniquearr2 = [];
let uniquearr3 = [];
let uniquearr4 = [];
let uniqueMod = [];
let uniqueMod1 = [];
let uniqueModelType1 = [];
let savearr3 = [];
//let ModelTypeArray = [];
let displayMultipInvoice = [];
let arrayIndex = 0;
let ModelQuantityArr = [];
let ModelQuantityArrExist = [];
let ArrayInvoice=[];
let FloorArr=[];

const options = [
  { value: 'Midea', label: 'Midea' },
  { value: 'General', label: 'General' }
];
export default class NewPowerFactor extends React.Component<INewPowerFactorProps, INewPowerFactorState, {}> {
  private displayData;
  private displayModel;
  // private Test;
  public constructor(props: INewPowerFactorProps, state: INewPowerFactorState) {
    super(props);
    this.displayData = [];
    this.displayModel = [];
    // this.Test=[];
    //this.PushOptions = this.PushOptions.bind(this);
    this.MultipleInvoice = this.MultipleInvoice.bind(this);
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
    SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");


    this.state = {
      OrderNo: [],
      No: [],
      UserPicture: "",
      UserName: "",
      Designation: "",
      Email: "",
      options: [],
      selectedOptions: '',
      selectedOptions2: '',
      SelectedFloor:'',
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
      SalesPersonCode:"",
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
      Floor:false,
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
      SelectedBrandTypes:'',
      FloorLocation:[]
    };
  }



  private handleChange1 = (selectedOptions) => {
    var reactHandler = this;
    var selectedValue = selectedOptions.label;

    reactHandler.setState({ SelectedMod: selectedValue });
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('InvoiceSalesLinesMaster')/items?$select=Quantity&$filter=No eq '${selectedValue}'`,
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
  }


  public GetDetails(data) {
    //alert(data);
    var selected = data;
    var reactHandler = this;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_&$filter=NavCode eq '${selected}'`,
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
  }
  private handleChange = (selectedOptions) => {
    $("#complete").removeAttr("style");
    //$('#DynamicRow tr').remove();
    //$('#DynamicRow').empty();
    var reactHandler = this;
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
      reactHandler.setState({ Floor: false });


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
      $("#FloorModelManually").hide();
      $("#PreviewManual").hide();

      var customerName;
      var ProjectName;
      var ConsultName;
      var SalespersonCode;
      var selectedValue = selectedOptions.value;
      reactHandler.setState({ SelectedInvo: selectedValue });
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=OrderNo,ConsultCompName,SalespersonCode,ProjectName,SelltoCustomerName&$filter=No eq '${selectedValue}'`,
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
            SalesPersonCode:SalespersonCode
          });
          if (resultData.d.results.length > 0) {
            reactHandler.setState({ IsRowPresent: true })
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
      reactHandler.setState({ Floor: false });
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
      $("#FloorModelManually").hide();
      $("#PreviewManual").hide();
      $(".if-single-invoice").show();
      var ConsultName;
      var ProjectName;
      var customerName;
      var SalespersonCode;
      var selectedValue = selectedOptions.value;
      reactHandler.setState({ SelectedInvo: selectedValue });
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=ConsultCompName,ProjectName,SalespersonCode,SelltoCustomerName&$filter=No eq '${selectedValue}'`,
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
            SalesPersonCode:SalespersonCode
          });
          if (resultData.d.results.length > 0) {
            reactHandler.setState({ IsRowPresent: true })
          }

          //reactHandler.GetAdd();
          //console.log("total no of invoices" + resultData.d.results.No);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
      });
      this.name(selectedValue);
    }
  }
  private handleChangeTextarea1 = (event) => {

    this.setState({ SelectedProjName: event.target.value });
    $('#SubError').hide();

  }
  private handleChangeTextarea2 = (event) => {

    this.setState({ SelectedConsult: event.target.value });
    $('#SubError2').hide();
  }
  private handleChangeTextarea3 = (event) => {

    this.setState({ SelectedSellTo: event.target.value });
    $('#SubError3').hide();
  }
  private handleChangeTextarea4 = (event) => {

    this.setState({ SelectedProjName: event.target.value });
    $('#SubError4').hide();
  }
  private handleChangeTextarea5 = (event) => {

    this.setState({ SelectedConsult: event.target.value });
    $('#SubError5').hide();
  }
  private handleChangeTextarea6 = (event) => {

    this.setState({ SelectedSellTo: event.target.value });

  }

  private handleChangeTextarea7 = (event) => {

    this.setState({ regards1: event.target.value });

  }
  private handleChangeTextarea8 = (event) => {

    this.setState({ SubContent1: event.target.value });

  }

  public name(selectedValue) {
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
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('MasterSNC')/items?$select=MODEL_NO,ORDER_QTY&$filter=SALES_INVOICE_NUMBER eq '${selectedValue}'`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        reactHandler.setState({
          QuantityNo: resultData.d.results,
          ModelNumber: resultData.d.results,
        });
        for (var i = 0; i < resultData.d.results.length; i++) {
          let ModelQuantity = resultData.d.results[i].MODEL_NO;
          let QuantityNumber:number = resultData.d.results[i].ORDER_QTY;
          reactHandler.GetModelName(ModelQuantity, QuantityNumber, i);

        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }
  public name3(selectedValue) {
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
    reactHandler.setState({ Floor: false });
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
    $("#FloorModelManually").hide();
    $("#PreviewManual").hide();
   // $(".if-single-invoice").show();
   // reactHandler.displayModel = [];
   // reactHandler.setState({ showmodel: reactHandler.displayModel });
  // var test = 0;
  // var test_modal = 0;
 //  reactHandler.setState({ TotlaNoQuantity: test });
  // reactHandler.setState({ TotalModel: test_modal });
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('MasterSNC')/items?$select=MODEL_NO,ORDER_QTY&$filter=SALES_INVOICE_NUMBER eq '${selectedValue}'`,
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
          let ModelQuantity = resultData.d.results[i].MODEL_NO;
          //console.log(resultData.d.results.SALES_INVOICE_NUMBER);
          let QuantityNumber = resultData.d.results[i].ORDER_QTY;
          reactHandler.GetModelName3(ModelQuantity, QuantityNumber, i);
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }

  public GetModelName3(dataNo, dataQuantity1, count) {
    var reactHandler = this;
    {

      savearr2 = [];
      savearr3 = [];
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=NavCode eq '${dataNo}'`,
        type: "GET",
        async: false,
        headers: { 'Accept': 'application/json; odata=verbose;' },
        success: function (resultData) {
          reactHandler.setState({
            items3: resultData.d.results,
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
            let Deci = parseFloat(TotalDeci);
            //const Deci = TotalDeci;

            // reactHandler.GetTotal();

            var ModelQuantiyUnique = Model ;
          var tempid = ModelQuantiyUnique.replace(/([,.*/])+/g, '');
            ModelQuantityArrExist.push(ModelQuantiyUnique);
            console.log(ModelQuantityArrExist);
            if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArr)) {
              /*var test = $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val().toString();
              var Quantity = parseInt(test)+ dataQuantity1;
              $("#" + tempid + "").find("td").eq(2).find("input[id*='QuantityNo']").val(""+Quantity+"");
            TotalCount = TotalCount + dataQuantity1;
            reactHandler.setState({ TotlaNoQuantity: TotalCount });*/
            } else {
              if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArrExist)) {
                ModelQuantityArr.push(ModelQuantiyUnique);

            reactHandler.setState({ dataQuantity: dataQuantity1 });
            TotalCount = TotalCount + dataQuantity1;
            reactHandler.setState({ TotlaNoQuantity: TotalCount });
            TotalModelCount = TotalModelCount + Deci;
            let TotalModelCountFix: number = parseFloat(TotalModelCount.toFixed(2));
            reactHandler.setState({ TotalModel: TotalModelCountFix });

                reactHandler.displayModel.push(
                  <tr className={`${count}-tablerow`} id={tempid}>
                    <td>{Brand}</td>
                    <td>{Model}</td>
                    <td><input type="text" id="QuantityNo" defaultValue={dataQuantity1} onChange={() => reactHandler.InvoiceQuantity(count, IndoorInput, OutdoorInput)} /></td>
                    <td>{RatedCapacity}</td>
                    <td>{IndoorInput}</td>
                    <td>{OutdoorInput}</td>
                    <td>{TotalDeci}</td>
                    <td>{RatedPowerFactor}</td>
                    <td>{IndoorOutput}</td>
                    <td>{OutdoorOutput}</td>
                  </tr>
                );
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
                    { "OutdoorOutput": resultData.d.results[i].OutdoorUnit_V_Ph_HZ_ }]
                }
                );
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
  }

  public findValueInModelQuantityArray(value,arr){
    var result = false;

    for(var i=0; i<arr.length; i++){
      var name = arr[i];
      if(name == value){
        result = true;
        break;
      }
    }
    return result;
  }

  public GetModelName(dataNo, dataQuantity1, count) {
    var reactHandler = this;
    {
      savearr2 = [];
      savearr3 = [];
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,Category,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=NavCode eq '${dataNo}'`,
        type: "GET",
        async: false,
        headers: { 'Accept': 'application/json; odata=verbose;' },
        success: function (resultData) {
          reactHandler.setState({
            items3: resultData.d.results,
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
            let Deci = parseFloat(TotalDeci);
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
            } else {
              if (reactHandler.findValueInModelQuantityArray(ModelQuantiyUnique, ModelQuantityArrExist)) {
                ModelQuantityArr.push(ModelQuantiyUnique);
               //console.log("First Time"+ModelQuantiyUnique+"-"+dataQuantity1);
            //reactHandler.setState({ dataQuantity: dataQuantity1 });
            TotalModelCount = TotalModelCount + Deci;
            let TotalModelCountFix: number = parseFloat(TotalModelCount.toFixed(2));
            reactHandler.setState({ TotalModel: TotalModelCountFix });

                reactHandler.displayModel.push(
                  <tr className={`${count}-tablerow`} id={tempid}>
                    <td>{Brand}</td>
                    <td>{Model}</td>
                    <td><input type="text" id="QuantityNo" defaultValue={dataQuantity1} onChange={() => reactHandler.InvoiceQuantity(count, IndoorInput, OutdoorInput)} /></td>
                    <td>{RatedCapacity}</td>
                    <td>{IndoorInput}</td>
                    <td>{OutdoorInput}</td>
                    <td>{TotalDeci}</td>
                    <td>{RatedPowerFactor}</td>
                    <td>{IndoorOutput}</td>
                    <td>{OutdoorOutput}</td>
                  </tr>
                );
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
                    { "OutdoorOutput": resultData.d.results[i].OutdoorUnit_V_Ph_HZ_ }]
                }
                );
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
  }
  public InvoiceQuantity = (index, IndoorInput, OutdoorInput) => {
    //alert(index);
    var Quantity;
    var Total;
    var IndoorPowerInput = IndoorInput;
    var OutdoorPowerInput = OutdoorInput;
    $(`#DynamicRow tr.${index}-tablerow`).each(function () {
      Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
    });
    Total = parseFloat(IndoorPowerInput) + parseFloat(OutdoorPowerInput);
    var totalpower = (Quantity * Total);
    var TotalDeci = (totalpower).toFixed(2);
    $(`#DynamicRow tr.${index}-tablerow`).each(function () {
      $(this).find("td").eq(2).find("input[id*='QuantityNo']").val("" + Quantity + "");
      $(this).find("td").eq(6).text("" + TotalDeci + "");
    });
    this.setState({ dataQuantity: Quantity });
    this.GetTotal();
  }

  public GetTotal() {
    var test = 0;
    var test_modal1 = 0;
    let test_modal;
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
    this.setState({ TotlaNoQuantity: test});
    this.setState({ TotalModel: test_modal});
  }
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
  public GetModelTypes = (selectedOptions2) => {
    var selectedValue = selectedOptions2.value;
    this.setState({
      SelectedBrandTypes:  selectedValue
       });
    //var selectedValue = $('#Brand').val();
    var reactHandler = this;
    reactHandler.setState({ selectedOptions2: selectedValue });
    //ModelTypeManual=[];
    //reactHandler.Test = [];
    for (var i = ManualBrand.length; i > 0; i--) {
      ManualBrand.pop();
    }
    var url = `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname&$filter=Title eq '${selectedValue}'`;
    $.ajax({
      url: url,
      method: "GET",
      headers: {
        "Accept": "application/json; odata=verbose"
      },
      success: function (resultData) {
        reactHandler.setState({
          ModelPF: resultData.d.results,
        });
        for (var i = 0; i < resultData.d.results.length; i++) {
          ManualBrand.push({ value: '' + resultData.d.results[i].Modelname + '', label: '' + resultData.d.results[i].Modelname + '' });
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
    // reactHandler. ModelTypeManual=[];
  }

  handleChangePf = (selectedOptions2) => {
    var selectedValue = selectedOptions2.value;
    var str = selectedValue.replace("\n", "");
   // alert(str);
    var reactHandler = this;
    var url = `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=Modelname eq '${str}'`;
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
            $(`#ManuallTable tr.${reactHandler.state.arrayIndex}-tablerow`).each(function () {
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
  }

  public getTable2(arrayIndex) {
    var reactHandler = this;
    reactHandler.setState({ arrayIndex: arrayIndex });
    const { selectedOptions2 } = reactHandler.state;
    const value1 = selectedOptions2;
    reactHandler.displayData.push(
      <tr className={`${arrayIndex}-tablerow`}>
        <td> <Select id="Brand" options={options}
         theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'white',
            primary: 'white',
          },
        })}
          isClearable={true}
          isSearchable={true}
          placeholder="Brand"
          onChange={reactHandler.GetModelTypes}
        />
        </td>
        <td><Select id="Model" options={ManualBrand}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'white',
              primary: 'white',
            },
          })}
          isClearable={true}
          isSearchable={true}
          placeholder="Model"
          onChange={reactHandler.handleChangePf}
          /></td>
        <td><input type="text" id="QuantityNo" onChange={() => reactHandler.GetQuantitytotal(arrayIndex)} /></td>
        <td><input type="text" id="RatedCapacity" /></td>
        <td><input type="text" id="IndoorPowerInput" /></td>
        <td><input type="text" id="OutdoorPowerInput" /></td>
        <td><input type="text" id="Total" /></td>
        <td><input type="text" id="RatedPowerFactor" /></td>
        <td><input type="text" id="IndoorOutput" /></td>
        <td><input type="text" id="OutdoorOutput" /></td>
        <td className="text-center">
          <ul>
            <li className="Deletewrap">
              <a href="#" className="DeleteImage" data-custom-value={arrayIndex}>
                <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete.svg" className="without-hover-td ibtneye list-actiobs" alt="image" />
                <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete_hover.svg" className="on-hover-td" alt="image" /></a></li>
          </ul>
        </td>
      </tr>
    );
    reactHandler.setState({
      showdata: reactHandler.displayData
    });

    setTimeout(() => {
      $('.Deletewrap').on('click', function (event) {
        var trIndex = $(this).closest("tr").index();
        if (trIndex >= 0) {
          $(this).closest("tr").remove();
        }
      });
    }, 2500);

  }

  public ValidateModelSelection(count) {
    var status = true;
    var model = "";
    $(`#ManuallTable tr.${count}-tablerow`).each(function () {
      model = $(this).find("td").eq(1).text();
    });
    if (model == "Model") {
     // alert("failes");
      return false;
    } else {
     // alert("success");
      //status = false;
      /*alert("success");
      $('#AlertModel2').show();
      $(`#ManuallTable tr.${count}-tablerow`).each(function () {
        $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('');
      });*/
      return true;
    }
  }
  public GetQuantitytotal(count) {
    //if(this.ValidateModelSelection(count)){
    var quantityNo;
    var total;
    var IndoorPowerInput;
    var OutdoorPowerInput;
    $(`#ManuallTable tr.${count}-tablerow`).each(function () {
      quantityNo = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
      IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
      OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
    });
    total = parseFloat(IndoorPowerInput) + parseFloat(OutdoorPowerInput);
    var Test = total * quantityNo;
    var TotalDeci = (Test).toFixed(2);
    $(`#ManuallTable tr.${count}-tablerow`).each(function () {
      $(this).find("td").eq(2).find("input[id*='QuantityNo']").val('' + quantityNo + '');
      $(this).find("td").eq(6).find("input[id*='Total']").val('' + TotalDeci + '');
    });
    // }
  }

  public getTable() {
    var newRow = $("<tr>");
    var cols = "";
    if (this.state.count == 0) {
      cols += `<td><input type="text" id="Brand"></td>`;
      cols += `<td><input type="text" id="Model"></td>`;
      cols += `<td><input type="text" class="combact1" id="Quantity"></td>`;
      cols += `<td><input type="text" id="RatedCapacity"></td>`;
      cols += `<td><input type="text" class="combact" id="IndoorPowerInput"></td>`;
      cols += `<td><input type="text" class="combact" id="OutdoorPowerInput"></td>`;
      cols += `<td><input type="text" class="combact2"id="TotalPower"></td>`;
      cols += `<td><input type="text" id="RatedPowerFactor"></td>`;
      cols += `<td><input type="text" id="Indoor_V_Ph_HZ"></td>`;
      cols += `<td><input type="text" id="Outdoor_V_Ph_HZ"></td>`;
      newRow.append(cols);
      $("table #First-table").append(newRow);

    }
    else {
      cols += `<td><input type="text" id="Brand"></td>`;
      cols += `<td><input type="text" id="Model"></td>`;
      cols += `<td><input type="text" class="combact1" id="Quantity"></td>`;
      cols += `<td><input type="text" id="RatedCapacity"></td>`;
      cols += `<td><input type="text" class="combact" id="IndoorPowerInput"></td>`;
      cols += `<td><input type="text" class="combact" id="OutdoorPowerInput"></td>`;
      cols += `<td><input type="text" class="combact2" id="TotalPower"></td>`;
      cols += `<td><input type="text" id="RatedPowerFactor"></td>`;
      cols += `<td><input type="text" id="Indoor_V_Ph_HZ"></td>`;
      cols += `<td><input type="text" id="Outdoor_V_Ph_HZ"></td>`;
      cols += `<td class="dele-icon"><button type="button" class="ibtnDel btn btn-md btn-danger btn-remove-ivon" style="min-width: 0em; margin-left: 0" > <i class="fa fa-trash" style="color: red"></i> </button> </td>`;
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


  }
  handleAddRow = () => {
    //alert($('#OutdoorPowerInput').val());
    var status = true;
    let arrayIndex = this.state.arrayIndex;
    var trIndex = $("#ManuallTable").find("tr").last();
    if (status == true && trIndex.find("[id*='QuantityNo']").val() != '' && trIndex.find("[id*='Total']").val() != NaN && trIndex.find("td").eq(1).text() != "Model" && trIndex.find("td").eq(0).text() != "Select") {
      for (var i = ManualBrand.length; i > 0; i--) {
        ManualBrand.pop();
      }
      arrayIndex += 1;
      //setTimeout(() => {
        this.getTable2(arrayIndex);
      //}, 1000);

    }
    else {
      $("#AlertModel").show();
    }


  }

  FloorhandleAddRow= () => {
    //alert($('#OutdoorPowerInput').val());
    var status = true;
    let arrayIndex = this.state.arrayIndex;
    var trIndex = $("#ManuallTable").find("tr").last();
    if (status == true && trIndex.find("[id*='QuantityNo']").val() != '' && trIndex.find("[id*='Total']").val() != NaN && trIndex.find("td").eq(1).text() != "Model" && trIndex.find("td").eq(0).text() != "Select") {
      for (var i = ManualBrand.length; i > 0; i--) {
        ManualBrand.pop();
      }
      arrayIndex += 1;
      //setTimeout(() => {
        this.getTableFloor(arrayIndex);
      //}, 1000);

    }
    else {
      $("#AlertModel").show();
    }


  }

  public GetFloorLocation() {
    var reactHandler = this;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('FloorLocations')/items?$select=Locations`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        reactHandler.setState({
          FloorLocation: resultData.d.results
        });
        for (var i = 0; i < resultData.d.results.length; i++) {

          FloorArr.push({ value: '' + resultData.d.results[i].Locations + '', label: '' + resultData.d.results[i].Locations + '' });
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });

  }

  handleChangeFloorPf = (selectedOptions2,SelectedFloor) => {
    var floor=SelectedFloor.value;
    alert(floor);
    var selectedValue = selectedOptions2.value;
    var str = selectedValue.replace("\n", "");
   // alert(str);
    var reactHandler = this;
    var url = `${this.props.siteurl}/_api/web/lists/getbytitle('PFMaster')/items?$select=Modelname,LinkTitle,Rated_x0020_Capacity_Btu_h_T3,IndoorPowerInput_kW_T3,OutdoorPowerInput_kW_T3,Rated_Power_Factor_T3_x0020_,IndoorUnit_V_Ph_Hz,OutdoorUnit_V_Ph_HZ_&$filter=Modelname eq '${str}'`;
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
            $(`#ManuallTable tr.${reactHandler.state.arrayIndex}-tablerow`).each(function () {
              $(this).find("td").eq(0).find("div[id*='Floor']").remove();
              $(this).find("td").eq(1).find("div[id*='Brand']").remove();
              $(this).find("td").eq(2).find("div[id*='Model']").remove();
              $(this).find("td").eq(0).text('' + floor + '');
              $(this).find("td").eq(1).text('' + Brand + '');
              $(this).find("td").eq(2).text('' + Model + '');
              $(this).find("td").eq(4).find("input[id*='RatedCapacity']").val('' + RatedCapacity + '');
              $(this).find("td").eq(5).find("input[id*='IndoorPowerInput']").val('' + IndoorPowerInput + '');
              $(this).find("td").eq(6).find("input[id*='OutdoorPowerInput']").val('' + OutdoorPowerInput + '');
              //$(this).find("td").eq(6).find("input[id*='Total']").val('' + total + '');
              $(this).find("td").eq(8).find("input[id*='RatedPowerFactor']").val('' + RatedPowerFactor + '');
              $(this).find("td").eq(9).find("input[id*='IndoorOutput']").val('' + IndoorOutput + '');
              $(this).find("td").eq(10).find("input[id*='OutdoorOutput']").val('' + OutdoorOutput + '');
            });
          }
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }

  GetFloor(SelectedFloor){
    var selectedValue = SelectedFloor.value;
   var reactHandler=this;
   reactHandler.setState({
      SelectedFloor:  selectedValue
       });
      // this.setState({ selectedOptions2: selectedValue });
       alert(selectedValue+"state");
  }

  public getTableFloor(arrayIndex) {
    var reactHandler = this;
    reactHandler.setState({ arrayIndex: arrayIndex });
    const { selectedOptions2 } = reactHandler.state;
    const {SelectedFloor}= reactHandler.state;
    const value1 = selectedOptions2;
    reactHandler.displayData.push(
      <tr className={`${arrayIndex}-tablerow`}>
         <td> <Select id="Floor" options={FloorArr}
         theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'white',
            primary: 'white',
          },
        })}
          isClearable={true}
          isSearchable={true}
          placeholder="Floor"
          onChange={reactHandler.GetFloor}
        />
        </td>
        <td> <Select id="Brand" options={options}
         theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'white',
            primary: 'white',
          },
        })}
          isClearable={true}
          isSearchable={true}
          placeholder="Brand"
          onChange={reactHandler.GetModelTypes}
        />
        </td>
        <td><Select id="Model" options={ManualBrand}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'white',
              primary: 'white',
            },
          })}
          isClearable={true}
          isSearchable={true}
          placeholder="Model"
          onChange={reactHandler.handleChangeFloorPf}
          /></td>
        <td><input type="text" id="QuantityNo" onChange={() => reactHandler.GetQuantitytotal(arrayIndex)} /></td>
        <td><input type="text" id="RatedCapacity" /></td>
        <td><input type="text" id="IndoorPowerInput" /></td>
        <td><input type="text" id="OutdoorPowerInput" /></td>
        <td><input type="text" id="Total" /></td>
        <td><input type="text" id="RatedPowerFactor" /></td>
        <td><input type="text" id="IndoorOutput" /></td>
        <td><input type="text" id="OutdoorOutput" /></td>
        <td className="text-center">
          <ul>
            <li className="Deletewrap">
              <a href="#" className="DeleteImage" data-custom-value={arrayIndex}>
                <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete.svg" className="without-hover-td ibtneye list-actiobs" alt="image" />
                <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete_hover.svg" className="on-hover-td" alt="image" /></a></li>
          </ul>
        </td>
      </tr>
    );
    reactHandler.setState({
      showdata: reactHandler.displayData
    });

    setTimeout(() => {
      $('.Deletewrap').on('click', function (event) {
        var trIndex = $(this).closest("tr").index();
        if (trIndex >= 0) {
          $(this).closest("tr").remove();
        }
      });
    }, 2500);

  }


  private handleChange3 = (selectedOptions) => {
    var reactHandler = this;
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
      $("#FloorModelManually").hide();
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
      reactHandler.setState({ Floor: false });
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ConsultCompName,ProjectName,SalespersonCode,SelltoCustomerName&$filter=OrderNo eq '${selectedValue}'`,
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
              SalesPersonCode :SalesPersonCode
            });
            $(".if-single-invoice").show();
            $(".if-multi-invoice").hide();
            $("#multipleInvoiceCheckbox").hide();
          }
          else if (resultData.d.results.length > 1) {
            reactHandler.setState({ MutlipleNew: resultData.d.results});
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
      $("#complete").hide()
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
      $("#FloorModelManually").hide();
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
      reactHandler.setState({ Floor: false });
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ConsultCompName,SalespersonCode,ProjectName,SelltoCustomerName&$filter=OrderNo eq '${selectedValue}'`,
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
              SalesPersonCode:SalesPersonCode

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

  }

  public MultipleInvoice(Selected, ProjectName, customerName, ConsultName) {
    //displayMultipInvoice.push(<li className={Selected}><a href="#" onClick={() => this.name3(Selected)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/invoice.png" alt="image" /> <span> {Selected}</span></a></li>);
    this.setState({
      SelectedInvo: Selected,
      SelectedProjName: ProjectName,
      SelectedSellTo: customerName,
      SelectedConsult: ConsultName
    });
  }
  private handleChange2 = (selectedOptions) => {
    var selectedValue = selectedOptions.value;
    //alert(selectedValue);
    this.setState({ SelectedProject: selectedValue });

    // console.log(`Selected: ${selectedOptions.label}`);
  }
  private handleChangeConsultantName = (selectedOptions) => {
    var selectedValue = selectedOptions.value;
    //alert(selectedValue);
    this.setState({ SelectedConsultant: selectedValue });

    // console.log(`Selected: ${selectedOptions.label}`);
  }
  private handleChangeCustomer = (selectedOptions) => {
    var selectedValue = selectedOptions.value;
    //alert(selectedValue);
    this.setState({ SelectedCustomer: selectedValue });

    // console.log(`Selected: ${selectedOptions.label}`);
  }
  public componentDidMount() {
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 1800);

    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 2500);
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 3000);
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 3500);
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
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
    this.getTableFloor(0);
    this.GetFloorLocation();
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
    $("#ManuallyFloor").hide();
    $("#FooterMenu").hide();
    $("#SubjectManually").hide();
    $("#ModelManually").hide();
    $("#FloorModelManually").hide();
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
  }

  public async GetProfile()
  {
    const newweb = Web("https://taqeef.sharepoint.com/sites/OPR");///administration
    let groups = await newweb.currentUser.groups();
    for (var i = 0; i < groups.length; i++)
    {
      if (groups[i].Title == "PFAdmin")
      {
        $('#profile').hide();
        $('#profileAdmin').show();
      }
    }
  }

  public handleInputChange = (event) => {
    this.GetPfAuoto(event);
  }
  public GetPfAuoto(event) {
    var GivenInvoice = event;
    //console.log(FutureDate1);
     var reactHandler = this;
     var url = `${this.props.siteurl}/_api/web/lists/getbytitle('SalesInvoiceHeaderMaster')/items?$select=No,ProjectName,ConsultCompName,SalespersonCode,SelltoCustomerName,OrderNo&$top=5000&$filter=substringof('${GivenInvoice}',No)`;
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

   }

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


  public GetLocation() {
    var reactHandler = this;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('ToLocation')/items?$select=ID,Locations`,
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
  }

  handleClick = (Locations) => {
    $("#complete").show()
    $("#DropButton").hide();
    $("#less").hide();
    $("#Add").show();
    $("#to").show();
    var x = document.getElementsByClassName("relatve current");
    x[0].className = 'relatve current completed';

    // alert(Locations);
    var reactHandler = this;
    reactHandler.setState({ SelectedLoc: Locations });
    //location.href = `${this.props.siteurl}/SitePages/NewsReadMore.aspx?ItemID=${Locations}`;

    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('ToLocation')/items?$select=Address&$filter=Locations eq '${Locations}'`,
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
  }




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

  public async GetModelNo() {
    var self: NewPowerFactor = this;
    await self.GetModelNoQTY().then((data) => {
      //  console.log(data);
      this.GetModelNOAssgin(data);
    }).catch((response) => {
      // console.log("Error getting results from jQuery AJAX - " + response);
    });
  }

  public GetModelNoQTY = function () {
    // var filterString = `ItemNo eq`;
    return $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('InvoiceSalesLinesMaster')/items?$select=No,Quantity`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
    });
  };
  GetModelNOAssgin(resultData) {

    for (var i = 0; i < resultData.d.results.length; i++) {
      //this.setState({ ...this.state, OrderNo: resultData.d.results[i].OrderNo });
      //this.setState({  OrderNo: resultData.d.results[i].OrderNo });
      // console.log(resultData.d.results[i].No);
      //console.log(resultData.d.results[i].Quantity);

      uniqueMod.push({ value: '' + resultData.d.results[i].No + '', label: '' + resultData.d.results[i].No + '' })
      uniqueMod1.push({ value: '' + resultData.d.results[i].Quantity + '', label: '' + resultData.d.results[i].Quantity + '' })

    }
  }

  private GetCurrentUserName() {
    var reacthandler = this;
    $.ajax({
      url: `${reacthandler.props.siteurl}/_api/SP.UserProfiles.PeopleManager/GetMyProperties`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        //if(resultData.d.PictureUrl != "" || resultData.d.PictureUrl != "undefined" || resultData.d.PictureUrl != null || resultData.d.PictureUrl != "null"){
        var email = resultData.d.Email;
        reacthandler.setState({
          UserPicture: `${reacthandler.props.siteurl}/_layouts/15/userphoto.aspx?size=l&username=${email}`
        });

        var Name = resultData.d.DisplayName;
        var Designation = resultData.d.Title;
        var email = resultData.d.Email;

        reacthandler.setState({
          UserName: Name,
          Designation: Designation,
          Email: email,
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }

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
  private AddItems() {
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
      cols += `<td>${InvoiceModel[i].Brand}</td > `;
      cols += `<td>${InvoiceModel[i].Model}</td>`;
      cols += `<td>${InvoiceModel[i].Quantity}</td>`;
      cols += `<td>${InvoiceModel[i].RatedCapacity}</td>`;
      cols += `<td>${InvoiceModel[i].IndoorPowerInput}</td>`;
      cols += `<td>${InvoiceModel[i].OutdoorPowerInput}</td>`;
      cols += `<td>${InvoiceModel[i].TotalPower}</td>`;
      cols += `<td>${InvoiceModel[i].PowerFactor}</td>`;
      cols += `<td>${InvoiceModel[i].Output}</td>`;
      cols += `<td>${InvoiceModel[i].OutdoorOutput}</td>`;
      newRow.append(cols);
      $("#Third-table").append(newRow);

    }

  }
  private AddItemsManually() {
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
      cols += `<td>${bindModel[i].Brand}</td > `;
      cols += `<td>${bindModel[i].Model}</td>`;
      cols += `<td>${bindModel[i].Quantity}</td>`;
      cols += `<td>${bindModel[i].RatedCapacity}</td>`;
      cols += `<td>${bindModel[i].IndoorPowerInput}</td>`;
      cols += `<td>${bindModel[i].OutdoorPowerInput}</td>`;
      cols += `<td>${bindModel[i].TotalPower}</td>`;
      cols += `<td>${bindModel[i].PowerFactor}</td>`;
      cols += `<td>${bindModel[i].Output}</td>`;
      cols += `<td>${bindModel[i].OutdoorOutput}</td>`;
      newRow.append(cols);
      $("table #Second-table").append(newRow);
    }
  }



  private async SaveManuallyList(ReceiverId) {
    //alert("Receiver Id"+ReceiverId);
    //alert(this.state.CreateManually);

      const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
      await newweb.lists.getByTitle('CreateManually').items.add({
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
      }).then(i => {
        // console.log(i);
        var selected = this.state.SelectedInvo;
        var reactHandler = this;
        $.ajax({
          url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=ID&$top=1&$orderby=Created desc`,
          type: "GET",
          headers: { 'Accept': 'application/json; odata=verbose;' },
          success: function (resultData) {
            reactHandler.setState({
              MasterID: resultData.d.results[0].ID,

            });

            var MasterId = resultData.d.results[0].ID;

            reactHandler.AddListItems(MasterId);
          },
          error: function (jqXHR, textStatus, errorThrown) {
          }
        });
      });


  }
  private async SaveManuallyList2(ReceiverId) {
    if (this.state.CreateManually == true) {
    const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
    await newweb.lists.getByTitle('CreateManually').items.add({
      To: "" + this.state.SelectedLoc + "",
      Invoice_x002f_OrderNo: "" + this.state.SelectedInvo + "",
      ProjectName: "" + this.state.SelectedProjName + "",
      ConsultantName: "" + this.state.SelectedConsult + "",
      CustomerName: "" + this.state.SelectedSellTo + "",
      SalesPersonCode: ""+"TQF"+"",
      Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",
      ViewFinalId: ReceiverId,
      TotalQuantity: "" + this.state.TotlaNoQuantity + "",
      TotalModel: "" + this.state.TotalModel + "",
    }).then(i => {
      // console.log(i);
      var selected = this.state.SelectedInvo;
      var reactHandler = this;
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=ID&$top=1&$orderby=Created desc`,
        type: "GET",
        headers: { 'Accept': 'application/json; odata=verbose;' },
        success: function (resultData) {
          reactHandler.setState({
            MasterID: resultData.d.results[0].ID,
          });

          var MasterId = resultData.d.results[0].ID;

          reactHandler.AddListItems2(MasterId);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
      });



    });
  }
  }

  private AddListItems2 = (MasterId) => {
    //console.log(savearr2);

//for (var i = 0; i < savearr2.length; i++) {  ---> changed to below mentioned line
    for (var i = 0; i < bindModel.length; i++) {
      var Model1 = bindModel[i].Model;
      var Brand = bindModel[i].Brand;
      var Quantity = bindModel[i].Quantity;//QuantityNumber;
      var RatedCapacity = bindModel[i].RatedCapacity;
      var IndoorInput = bindModel[i].IndoorPowerInput;
      var OutdoorInput = bindModel[i].OutdoorPowerInput;
      var RatedPowerFactor = bindModel[i].PowerFactor;//RatedPowerfactor;
      var IndoorOutput = bindModel[i].Output;//IndoorOutputunit;
      var OutdoorOutput = bindModel[i].OutdoorOutput;//OutdoorOutputunit;
      var TotalPower = bindModel[i].TotalPower;//Total;

      const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
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
        "ManuallyIDId": MasterId,
      }).then(i => {
        //alert(Brand);

      });
    }

    //console.log(savearr);

  }

  private AddListItems = (MasterId) => {

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
    $('#DynamicRow tr').each(function () { //ManuallTable tbody
      debugger;
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
      /*Brand = $(this).find("td").eq(0).text();
      Model = $(this).find("td").eq(1).text();
      Quantity = $(this).find("td").eq(2).find("input[id*='QuantityNo']").val();
      RatedCapacity = $(this).find("td").eq(3).find("input[id*='RatedCapacity']").val();
      IndoorPowerInput = $(this).find("td").eq(4).find("input[id*='IndoorPowerInput']").val();
      OutdoorPowerInput = $(this).find("td").eq(5).find("input[id*='OutdoorPowerInput']").val();
      TotalPower = $(this).find("td").eq(6).find("input[id*='Total']").val();
      PowerFactor = $(this).find("td").eq(7).find("input[id*='RatedPowerFactor']").val();
      Output = $(this).find("td").eq(8).find("input[id*='IndoorOutput']").val();
      OutdoorOutput = $(this).find("td").eq(9).find("input[id*='OutdoorOutput']").val();*/


      const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
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
        "ManuallyIDId": MasterId,

      }).then(i => {

      });

    });
  }

  SaveForPrint() {
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
  }
  GetManuallTotal() {
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
  }
  public SaveReceiverValidation() {
    // alert($('#ToSaveRecevier').val());
    var status = true;
    if (status == true && $('#ToSaveRecevier').val() != '') {
      $('#emptyToAddress').hide();
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var inputText = $("#ToSaveRecevier").val();
      // alert(inputText);
      if ((inputText as any).match(mailformat)) {
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
  }
  public SuccessReceiver() {
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
    $("#ManuallyFloor").hide();
    $("#FooterMenu").hide();
    $("#SubjectManually").hide();
    $("#ModelManually").hide();
    $("#FloorModelManually").hide();
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
  }
  SuccessModel = () => {
    $("#AlertModel").hide();
    $("#AlertModel2").hide();

    $("#AlertSubject").hide();

  }
  private async SaveReceiver() {
    if (this.SaveReceiverValidation()) {
      $("#ReceiverClass").addClass("relatve current completed");
      if (this.state.CreateManually == true) {

        const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
        await newweb.lists.getByTitle('ReceiverDetails').items.add({
          ToAddress: $("#ToSaveRecevier").val().toString(),
          InvoiceNo: "" + this.state.SelectedInvo + "",
          Location: "" + this.state.SelectedLoc + "",
          ProjectName: "" + this.state.SelectedProjName + "",
          CustomerName: "" + this.state.SelectedSellTo + "",
          Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",
          Body: "" + this.state.SubContent1 + "",
          Regards: "" + this.state.regards1 + "",
          Cc: $("#Cc").val().toString(),


        }).then(i => {
          var reactHandler = this;
          $.ajax({
            url: `${this.props.siteurl}/_api/web/lists/getbytitle('ReceiverDetails')/items?$select=ID&$top=1&$orderby=Created desc`,
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
              var ReceiverId = resultData.d.results[0].ID;

              reactHandler.SaveManuallyList2(ReceiverId);
              reactHandler.ManualLibrary(ReceiverId);
              $("#Receiver").hide();
              $("#Sucess").show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
          });
          // console.log(i);

        });

      }
      else {

        const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
        await newweb.lists.getByTitle('ReceiverDetails').items.add({
          ToAddress: $("#ToSaveRecevier").val().toString(),
          Cc: $("#Cc").val(),
          Regards: "" + this.state.regards1 + "",
          Body: "" + this.state.SubContent1 + "",


          InvoiceNo: "" + this.state.SelectedInvo + "",
          Location: "" + this.state.SelectedLoc + "",
          ProjectName: "" + this.state.SelectedProjName + "",
          CustomerName: "" + this.state.SelectedSellTo + "",
          OrderNo: "" + this.state.SelectedOrd + "",
          Date: "" + moment(this.state.currentDate).format("MMMM DD, YYYY") + "",


        }).then(i => {
          var reactHandler = this;
          $.ajax({
            url: `${this.props.siteurl}/_api/web/lists/getbytitle('ReceiverDetails')/items?$select=ID&$top=1&$orderby=Created desc`,
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
              reactHandler.setState({
                ReceiversID: resultData.d.results[0].ID,

              });

              var ReceiverId = resultData.d.results[0].ID;
              reactHandler.SaveManuallyList(ReceiverId);
              reactHandler.SaveLibrary(ReceiverId);

              $("#Receiver").hide();
              $("#Sucess").show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
          });
          // console.log(i); $("#Receiver").hide();


        });
      }

    }

    this.setState({ ToAddress: "", From: "", Subject: "", Details: "" });

  }

  ShowDrop = () => {
    this.clearFieldManually();
    var x = document.getElementById('DropButton');
    var y = document.getElementById('Add');
    var z = document.getElementById('less');
    if (x.style.display == 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
      z.style.display = 'block';

    } else {
      x.style.display = 'none';
      y.style.display = 'block';
      z.style.display = 'none';
    }
  }
  ShowSubject = () => {
    if (this.state.ToLeft == true && this.state.SubLeft == true) {
      $("#LocationClass").addClass("relatve current completed");
      if (this.state.CreateManually == true) {
        $("#SubjectManually").show();
        $("#SubjectButton").hide();
        this.setState({ ModLeft: true });
        this.setState({ NoteLeft: false });
        this.setState({ ReceiLeft: false });
        $("#SubjectClass").addClass("relatve current completed");
      }
      else if(this.state.Floor == true) {
        $("#SubjectManually").show();
        $("#SubjectButton").hide();
        this.setState({ ModLeft: true });
        this.setState({ NoteLeft: false });
        this.setState({ ReceiLeft: false });
        $("#SubjectClass").addClass("relatve current completed");
      }
      else {
        $("#SubjectButton").show();
        $("#SubjectManually").hide();
        //$("#myTextarea").val(this.state.SelectedCustomer);
        (document.getElementById("myTextarea") as any).value = "" + this.state.SelectedProjName + "";
        (document.getElementById("myTextarea2") as any).value = "" + this.state.SelectedConsult + "";
        (document.getElementById("myTextarea3") as any).value = "" + this.state.SelectedSellTo + "";
        $("#SubjectClass").addClass("relatve current completed");
        this.setState({ ModLeft: true });
        this.setState({ NoteLeft: false });
        this.setState({ ReceiLeft: false });
      }
    }
  }
  public SaveSubjectValidation() {
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
  }
  public SaveModelValidation() {
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
  }
  public SaveManualModelValidation() {
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
  }
  SubjectValidationManually() {
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
  }
  ShowModel = () => {
    if (this.state.ToLeft == true && this.state.SubLeft == true && this.state.ModLeft == true) {

      $("#ModelClass").addClass("relatve current");
      if (this.state.CreateManually == true) {
        if (this.SubjectValidationManually()) {
          var x = document.getElementById('ModelManually');
          var y = document.getElementById('SubjectManually');
          this.setState({ NoteLeft: true });
          this.setState({ ReceiLeft: false });
          if (x.style.display == 'none') {
            x.style.display = 'block';
            y.style.display = 'block';
            $("#complete1").show();
            $("#ModelClass").addClass("relatve current completed");
          }
        }
      }
      else if (this.state.Floor == true) {
        if (this.SubjectValidationManually()) {

          var x = document.getElementById('FloorModelManually');
          var y = document.getElementById('SubjectManually');
          this.setState({ NoteLeft: true });
          this.setState({ ReceiLeft: false });
          if (x.style.display == 'none') {
            x.style.display = 'block';
            y.style.display = 'block';
            $("#complete1").show();
            $("#ModelClass").addClass("relatve current completed");
          }
        }
      }
      else {
        if (this.SaveSubjectValidation()) {
          var x = document.getElementById('ModelButton');
          var y = document.getElementById('SubjectButton');
          this.setState({ NoteLeft: true });
          this.setState({ ReceiLeft: false });

          if (x.style.display == 'none') {
            x.style.display = 'block';
            y.style.display = 'block';
            $("#complete1").show();
            $("#ModelClass").addClass("relatve current completed");
          }
        }
      }
    }
  }
  ShowNotes = () => {
    if (this.state.ToLeft == true && this.state.SubLeft == true && this.state.ModLeft == true && this.state.NoteLeft == true) {

      if (this.state.CreateManually == true) {
        if (this.SaveManualModelValidation()) {

          var x = document.getElementById('ModelManually');
          var y = document.getElementById('SubjectManually');
          var z = document.getElementById('Notes');
          // this.SaveForPrint();
          this.SubjectValidationManually();

          this.setState({ ReceiLeft: true });
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
      else if (this.state.Floor == true) {
        if (this.SaveManualModelValidation()) {

          var x = document.getElementById('FloorModelManually');
          var y = document.getElementById('SubjectManually');
          var z = document.getElementById('Notes');
          // this.SaveForPrint();
          this.SubjectValidationManually();

          this.setState({ ReceiLeft: true });
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

      else if (this.SaveModelValidation()) {
        $("#ModelClass").addClass("relatve current completed");
        $("#NotesClass").addClass("relatve current");
        var x = document.getElementById('ModelButton');
        var y = document.getElementById('SubjectButton');
        var z = document.getElementById('Notes');

        this.setState({ ReceiLeft: true });
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
  }
  ShowReceiver = () => {
    //alert(this.state.regards);
    this.setState({ SubContent1: this.state.SubContent });
    this.setState({ regards1: this.state.regards });
    // this.AddItems();
    if (this.state.ToLeft == true && this.state.SubLeft == true && this.state.ModLeft == true && this.state.NoteLeft == true && this.state.ReceiLeft == true) {
      if (this.state.CreateManually == true) {
        if (this.SubjectValidationManually()) {

          if (this.SaveManualModelValidation()) {
            this.SaveForPrint();

            (document.getElementById("regard") as any).value = "" + this.state.regards + "";
            (document.getElementById("SubjectContent") as any).value = "" + this.state.SubContent + "";
            $("#NotesClass").addClass("relatve current completed");
            $("#ReceiverClass").addClass("relatve current completed");
            this.clearField();
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
      else  if (this.state.Floor == true) {
        if (this.SubjectValidationManually()) {

          if (this.SaveManualModelValidation()) {
            this.SaveForPrint();

            (document.getElementById("regard") as any).value = "" + this.state.regards + "";
            (document.getElementById("SubjectContent") as any).value = "" + this.state.SubContent + "";
            $("#NotesClass").addClass("relatve current completed");
            $("#ReceiverClass").addClass("relatve current completed");
            this.clearField();
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
        if (this.SaveSubjectValidation()) {
          $("#NotesClass").addClass("relatve current completed");
          $("#ReceiverClass").addClass("relatve current");
          // this.setState({ SubContent1: this.state.SubContent });
          // this.setState({ regards1: this.state.regards });
          (document.getElementById("regard") as any).value = "" + this.state.regards + "";
          (document.getElementById("SubjectContent") as any).value = "" + this.state.SubContent + "";
          this.clearField();
          var x = document.getElementById('ModelButton');
          var y = document.getElementById('SubjectButton');
          var z = document.getElementById('Notes');
          var f = document.getElementById('Receiver');
          this.AddItems();
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
  }
  HideReceiver = () => {
    this.clearField();
    this.setState({ SubContent1: '' });
    this.setState({ regards1: '' });
    $("#if-not-valid-email").hide();
    $("#regError").hide();
    $('#emptyToAddress').hide();
    var x = document.getElementById('Receiver');
    if (x.style.display == 'block') {
      x.style.display = 'none';
    }
  }
  ShowPreview = () => {
    if (this.SaveModelValidation()) {
      $('#Third-table').empty();
      savearr2 = [];
      InvoiceModel = [];
      this.AddItems();
      $("#Preview").show();
    }
  }
  ShowManualPreview = () => {
    if (this.SaveManualModelValidation()) {
      this.AddItemsManually();
      this.SaveForPrint();
      // $("#Second-table").empty();
      $("#PreviewManual").show();
    }
  }
  ShowManualSend = () => {
     this.AddItemsManually();
    this.ShowReceiver();
    //this.SaveForPrint();
  }
  ShowSend = () => {
    $('#Third-table tr').empty();
    //savearr2=[];
    // this.AddItems();
    this.ShowReceiver();


  }
  CancelAlert = () => {
    $("#CancelEverything").show();

  }
  StopProcess = () => {
    $("#CancelEverything").hide();
  }

  CancelManual = () => {
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
    $("#ManuallyFloor").hide();
    $("#FooterMenu").hide();
    $("#SubjectManually").hide();
    $("#ModelManually").hide();
    $("#FloorModelManually").hide();
    $("#PreviewManual").hide();
    $("#Sucess").hide();
    $("#CancelEverything").hide();
    this.setState({ ToLeft: false });
    this.setState({ SubLeft: false });
    this.setState({ ModLeft: false });
    this.setState({ NoteLeft: false });
    this.setState({ ReceiLeft: false });
    this.setState({ CreateManually: false });
    this.setState({ Floor: false });
    this.clearFieldManually();
    this.clearField();
    // $("table #First-table").empty();
    // $('#ManuallTable tbody tr').empty();
    // this.getTable2(0);
  }


  HideManualPreview = () => {
    $("#PreviewManual").hide();
    savearr3 = [];
    $("#Second-table").empty();
  }
  HidePreview = () => {
    savearr2 = [];
    InvoiceModel = [];
    $("#Preview").hide();
    $('#Third-table').empty();
  }
  close()
  {
    $('#multipleInvoiceCheckbox').hide();
    $(".multi-invo-numbers").prop("checked", false);
    this.CancelManual();
  }

  SelectAll()
  {
    $(".selectall").on("change",function(){
      if($(this).prop("checked"))
      {
        $(".selectall").prop("checked",true);
          $(".multi-invo-numbers").prop('checked', $(this).prop('checked'));
      }
     else
      {
        $(".selectall").prop("checked",false);
          $(".multi-invo-numbers").prop('checked', false);
      }
    });

/*$(".selectall").on("click",function () {
     $(".multi-invo-numbers").prop('checked', $(this).prop('checked'));
   });*/
  }

  MultipleSelect()
  {
   // $('html').addClass('loading-in-progress');
      if($(".multi-invo-numbers").is(':checked')){
        $('input:checkbox[name=multi-invo-numbers]').each(function () {
          if ($(this).is(':checked')){
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
  }
  SuccessSelect()
  {
    $('#AlertMultipleSelect').hide();
    $('#multipleInvoiceCheckbox').show();
  }
  SelectedInvoice()
  {
    this.displayModel = [];
    this.setState({ showmodel: this.displayModel });
    for (var i = 0; i < InvoiceNumber.length;i++)
    {
      this.name3(InvoiceNumber[i].No);
      //console.log(InvoiceNumber[i].No);
    }
    $('#multipleInvoiceCheckbox').hide();
    //$(".multi-invo-numbers").prop('unchecked', $(this).prop('unchecked'));
    $(".multi-invo-numbers").prop("checked", false);
    $(".selectall").prop("checked",false);
  }

  ShowManually = () => {
    $("#InvoError").hide();
    $(".if-single-invoice").hide();
    $(".if-multi-invoice").hide();
    $("#complete").removeAttr("style");
    //$('#DynamicRow tr').empty();
    //$('#DynamicRow').empty();
    this.displayModel = [];
    this.displayData = [];
    // this.getTable2(0);
    this.setState({ showdata: this.displayData });
    this.setState({ showmodel: this.displayModel });

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

    this.clearFieldManually();
    this.clearField();
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
    this.setState({ CreateManually: true });

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
    $("#FloorModelManually").hide();
    $("#PreviewManual").hide();
    this.setState({ ToLeft: true });
    this.setState({ SubLeft: false });
    this.setState({ ModLeft: false });
    this.setState({ NoteLeft: false });
    this.setState({ ReceiLeft: false });
    this.setState({ CreateManually: false });
    this.setState({ Floor: false });

  }
  HideManually = () => {
    $("#Manually").hide();
    $("#ManuallyFloor").hide();
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
    $("#FloorModelManually").hide();
    $("#PreviewManual").hide();
    this.setState({ CreateManually: false });
    this.setState({ Floor: false });
    $('#Invord').val('');
    this.clearFieldManually();
  }
  public SaveInvoValidation() {
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
  }
  public SaveManually() {
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
      $("#ManuallyFloor").hide();
      $("#FooterMenu").hide();
      $("#SubjectManually").hide();
      $("#ModelManually").hide();
      $("#FloorModelManually").hide();
      $("#PreviewManual").hide();
      $("#Invoice").show();
      $(".if-single-invoice").show();
      $("#Left").show();
      this.setState({ CreateManually: true });
      $('#Invord').val('');
      this.clearFieldManually();
      this.clearField();

    }
  }
  ShowFloor=()=>{
    $("#InvoError").hide();
    $(".if-single-invoice").hide();
    $(".if-multi-invoice").hide();
    $("#complete").removeAttr("style");
    //$('#DynamicRow tr').empty();
    //$('#DynamicRow').empty();
    this.displayModel = [];
    this.displayData = [];
    // this.getTable2(0);
    this.setState({ showdata: this.displayData });
    this.setState({ showmodel: this.displayModel });

    $('#Third-table tr').empty();

    this.clearField();
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

    $('#FloorInvord').val('');
    this.setState({ Floor: true });
    //this.setState({ CreateManually: true });

    $("#ManuallyFloor").show();
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
    $("#FloorModelManually").hide();
    $("#PreviewManual").hide();
    this.setState({ ToLeft: true });
    this.setState({ SubLeft: false });
    this.setState({ ModLeft: false });
    this.setState({ NoteLeft: false });
    this.setState({ ReceiLeft: false });
    this.setState({ CreateManually: false });
    //this.setState({ Floor: false });
  }
  public SaveInvoFloorValidation() {
    var status = true;
    if (status == true && $('#FloorInvord').val() != '') {
      $('#InvoError').hide();
    }
    else {
      status = false;
      $('#FloorInvord').focus();
      $('#InvoError').show();

    }
    return status;
  }

  SaveFloor=()=>{
    if (this.SaveInvoFloorValidation()) {
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
      var Invorder = $('#FloorInvord').val().toString();
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

      $("#FooterMenu").hide();
      $("#SubjectManually").hide();
      $("#ModelManually").hide();
      $("#FloorModelManually").hide();
      $("#PreviewManual").hide();
      $("#Invoice").show();
      $(".if-single-invoice").show();
      $("#Left").show();
      this.setState({ CreateManually: false });
      this.setState({ Floor: true });
      $('#FloorInvord').val('');
      this.clearFieldManually();
      this.clearField();
      $("#ManuallyFloor").hide();
    }
  }

  clearField = () => {
    $('#ToSaveRecevier').val('');
    $('#Cc').val('');

  }
  clearFieldManually = () => {
    $('#myTextarea').val('');
    $('#myTextarea2').val('');
    $('#myTextarea3').val('');
    $('#myTextarea4').val('');
    $('#myTextarea5').val('');
    $('#myTextarea6').val('');
  }

  private IndoorheadRows() {
    return [
      { LinkTitle: 'Brand', Modelname: 'Model', QuantityNumber: 'QuantityNumber', Rated_x0020_Capacity_Btu_h_T3: 'Rated Capacity', IndoorPowerInput_kW_T3: 'Indoor Power Input', OutdoorPowerInput_kW_T3: 'Outdoor Power Input', Rated_Power_Factor_T3_x0020_: 'Rated Powerfactor', IndoorUnit_V_Ph_Hz: 'Indoor Output unit', OutdoorUnit_V_Ph_HZ_: 'Outdoor Output unit' },
    ]
  }

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
  public async UploadFiletoDocumentLibrary(file: File, webUrl: string, ReceiverId) {
    // alert(ReceiverId);
    var test = ReceiverId;
    let fileurl;
    let myfile = file;
    //let newweb =  Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
    let siteUrl = "" + webUrl + "";
    let newweb = Web(siteUrl);

    if (myfile.size <= 10485760) {
      await newweb.getFolderByServerRelativeUrl("/sites/OPR/ACModel/PFDetails")
        .files.add(myfile.name, myfile, false)
        .then((data) => {
          //alert("Successfully");  alert(ReceiverId);
          data.file.getItem().then(item => {
            fileurl = data.file.data.url;
            item.update({
              ToAddress: $("#ToSaveRecevier").val(),
              InvoiceNo: this.state.SelectedInvo,
              Location: this.state.SelectedLoc,
              ProjectName: this.state.SelectedProjName,
              CustomerName: this.state.SelectedSellTo,
              //  OrderNo: ""+ this.state.SelectedOrd +"",
              // Date: "" + (moment(this.state.currentDate).format("MMMM DD, YYYY")) + "",
              //Cc: $("#Cc").val(),
              ReceiverIdId: test,
            }).then((myupdate) => { });
          });
        })
        .catch((error) => {

          // alert("check");

        });



    }
    else {
      await newweb.getFolderByServerRelativeUrl('/sites/OPR/ACModel/PFDetails') //"/sites/POC/CorporateIntranet/SignAuditTrailList/"
        .files.addChunked(myfile.name, myfile)
        .then((data) => {
          // alert("Successfully");  alert(ReceiverId);
          data.file.getItem().then(item => {
            fileurl = data.file.data.url;
            item.update({
              ToAddress: $("#ToSaveRecevier").val(),
              InvoiceNo: "" + this.state.SelectedInvo + "",
              Location: "" + this.state.SelectedLoc + "",
              ProjectName: "" + this.state.SelectedProjName + "",
              CustomerName: "" + this.state.SelectedSellTo + "",
              //  OrderNo: ""+ this.state.SelectedOrd +"",
              // Date: "" + (moment(this.state.currentDate).format("MMMM DD, YYYY")) + "",
              //Cc: $("#Cc").val(),
              ReceiverIdId: test,
            }).then((myupdate) => { });
          });
        }).catch(console.log);
    }
  }
  public SaveLibrary(ReceiverId) {
    //  alert(ReceiverId);
    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotlaNoQuantity;

    function RowAdd() {
      return [
        {
          totalquantity, totalmodel
        },
      ]
    }
    var totalmodel1 = "Total " + 0;
    var totalquantity1 = "Total " + 0;
    function RowAdd1() {
      return [
        {
          totalquantity1, totalmodel1
        },
      ]
    }
    function AlternativeheadRows() {
      return [

        {
          Brand: 'Brand',
          Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW) T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
        },
      ]
    }
    var reactHandler = this;
    const doc = new jsPDF('p', 'mm', 'a4');
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      didDrawPage: function (data) {
        doc.setFontSize(20);
        var img1 = new Image();
        img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
        doc.addImage(img1, 'png', 180, 230, 40, 60);
        var img = new Image();
        img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
        doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
        doc.setFontSize(8);
        doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
        if(reactHandler.state.SalesPersonCode.length == 3){
          doc.setFontSize(8);
          doc.text('Pf–', 168, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 172, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 4){
          doc.setFontSize(8);
          doc.text('Pf–', 167, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 171, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 5){
          doc.setFontSize(8);
          doc.text('Pf–', 165, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 169, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 6){
          doc.setFontSize(8);
          doc.text('Pf–', 163, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 168, 30);
          doc.setFontSize(8);
          doc.text('/', 182, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 185, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 7){
          doc.setFontSize(8);
          doc.text('Pf–', 161, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 165, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }

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


      theme: 'grid', //striped
      margin: { top: 100, left: 20, right: 20 },

    });
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let finalY2 = (doc as any).lastAutoTable.finalY;
    if (finalY2 >= pageHeight) {
      doc.addPage();

    }


    let finalY3 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight5 = finalY3;
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      theme: 'grid', //striped

      margin: { bottom: 40, left: 20, right: 20 },
    });

    let finalY5 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight = finalY5 + 1;
    autoTable(doc, {
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
      margin: { top: 100, left: 20, right: 20 },
    });
    let finalY1 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight1 = finalY1 + 10;
    doc.setFontSize(8);
    doc.text('Note:', 15, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
    const pageCount = doc.internal.pages.length;
    var img4 = new Image();
    img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
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
      doc.setFontSize(8)
      doc.setTextColor(109, 109, 109);
      doc.text(', Ajman:', 71, 280);
      doc.setFontSize(8)
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
      var myDocName = "Pf–"+this.state.SalesPersonCode+"-" + this.state.SelectedInvo + "-" + ReceiverId + ".pdf";
      var blobpdf = new Blob([doc.output('blob')], { type: 'application/pdf' });
      var FileName = myDocName;
      var FileInput = new File([blobpdf], FileName);
      var serverUrl = `${this.props.siteurl}`;
      this.UploadFiletoDocumentLibrary(FileInput, serverUrl, ReceiverId);


  }
  public ManualLibrary(ReceiverId) {
    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotlaNoQuantity;
    function RowAdd() {
      return [
        {
          totalquantity, totalmodel
        },
      ]
    }
    var totalmodel1 = "Total " + 0;
    var totalquantity1 = "Total " + 0;
    function RowAdd1() {
      return [
        {
          totalquantity1, totalmodel1
        },
      ]
    }

    function AlternativeheadRows() {
      return [
        {
          Brand: 'Brand',
          Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW) T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
        },
      ]
    }
    var reactHandler = this;
    const doc = new jsPDF('p', 'mm', 'a4');
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      didDrawPage: function (data) {
        doc.setFontSize(20);
        var img1 = new Image();
        img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
        doc.addImage(img1, 'png', 180, 230, 40, 60);
        var img = new Image();
        img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
        doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
        doc.setFontSize(8);
        doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);
        /*doc.setFontSize(8);
        doc.text('Pf/', 162, 30);
        doc.setFontSize(8);
        doc.text(reactHandler.state.SelectedInvo, 175, 30);
        doc.setFontSize(8);
        doc.text('/001', 197, 30);*/
        doc.setFontSize(8);
        //doc.text('Pf/', 162, 30);
        doc.text('Pf/', 175, 30);
        doc.setFontSize(8);
        doc.text(reactHandler.state.SelectedInvo, 180, 30);
        doc.setFontSize(8);
        //doc.text('/001', 197, 30);
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


      theme: 'grid', //striped
      margin: { top: 100, left: 20, right: 20 },

    });
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let finalY2 = (doc as any).lastAutoTable.finalY;
    if (finalY2 >= pageHeight) {
      doc.addPage();

    }


    let finalY3 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight5 = finalY3;
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      theme: 'grid', //striped

      margin: { bottom: 40, left: 20, right: 20 },
    });

    let finalY5 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight = finalY5 + 1;
    autoTable(doc, {
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
      margin: { top: 100, left: 20, right: 20 },
    });
    let finalY1 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight1 = finalY1 + 10;
    doc.setFontSize(8);
    doc.text('Note:', 15, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
    var img1 = new Image();
      img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
      doc.addImage(img1, 'png', 180, 230, 40, 60);
    const pageCount = doc.internal.pages.length;

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
      doc.setFontSize(8)
      doc.setTextColor(109, 109, 109);
      doc.text(', Ajman:', 71, 280);
      doc.setFontSize(8)
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
    var serverUrl = `${this.props.siteurl}`;
    this.UploadFiletoDocumentLibrary(FileInput, serverUrl, ReceiverId);
  }

  public SavePrint() {
    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotlaNoQuantity;
    function RowAdd() {
      return [
        {
          totalquantity, totalmodel
        },
      ]
    }
    var totalmodel1 = "Total " + 0;
    var totalquantity1 = "Total " + 0;
    function RowAdd1() {
      return [
        {
          totalquantity1, totalmodel1
        },
      ]
    }
    function AlternativeheadRows() {
      return [

        {
          Brand: 'Brand',
          Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW)T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
        },
      ]
    }
    var reactHandler = this;
    const doc = new jsPDF('p', 'mm', 'a4');
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      didDrawPage: function (data) {
        doc.setFontSize(20);
        var img1 = new Image();
        img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
        doc.addImage(img1, 'png', 180, 230, 40, 60);
        var img = new Image();
        img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
        doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
        doc.setFontSize(8);
        doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);

        if(reactHandler.state.SalesPersonCode.length == 3){
          doc.setFontSize(8);
          doc.text('Pf–', 168, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 172, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 4){
          doc.setFontSize(8);
          doc.text('Pf–', 167, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 171, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 5){
          doc.setFontSize(8);
          doc.text('Pf–', 165, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 169, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 6){
          doc.setFontSize(8);
          doc.text('Pf–', 163, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 168, 30);
          doc.setFontSize(8);
          doc.text('/', 182, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 185, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        else if(reactHandler.state.SalesPersonCode.length == 7){
          doc.setFontSize(8);
          doc.text('Pf–', 161, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 165, 30);
          doc.setFontSize(8);
          doc.text('/', 179, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);
        }
        //doc.setFontSize(8);
        //doc.text(reactHandler.state.SelectedInvo, 180, 30);

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


      theme: 'grid', //striped
      margin: { top: 100, left: 20, right: 20 },

    });
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let finalY2 = (doc as any).lastAutoTable.finalY;
    if (finalY2 >= pageHeight) {
      doc.addPage();

    }


    let finalY3 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight5 = finalY3;
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      theme: 'grid', //striped

      margin: { bottom: 40, left: 20, right: 20 },
    });

    let finalY5 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight = finalY5 + 1;
    autoTable(doc, {
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
      margin: { top: 100, left: 20, right: 20 },
    });
    let finalY1 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight1 = finalY1 + 10;
    doc.setFontSize(8);
    doc.text('Note:', 15, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
    var img4 = new Image();
      img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
      doc.addImage(img4, 'png', 180, 230, 40, 60);
    const pageCount = doc.internal.pages.length;
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
      doc.setFontSize(8)
      doc.setTextColor(109, 109, 109);
      doc.text(', Ajman:', 71, 280);
      doc.setFontSize(8)
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
    var myDocName = "Pf–"+this.state.SalesPersonCode+"/" + this.state.SelectedInvo + ".pdf";
    doc.save(myDocName);

  }

  DownManual() {
    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotlaNoQuantity;
    function RowAdd() {
      return [
        {
          totalquantity, totalmodel
        },
      ]
    }
    var totalmodel1 = "Total " + 0;
    var totalquantity1 = "Total " + 0;
    function RowAdd1() {
      return [
        {
          totalquantity1, totalmodel1
        },
      ]
    }

    function AlternativeheadRows() {
      return [
        {
          Brand: 'Brand',
          Model: 'Model', QuantityNumber: 'Quantity', RatedCapacity: 'Rated Capacity (Btu/h) (T3)', IndoorPowerInput: 'Indoor Power Input (KW) T3', OutdoorPowerInput: 'Outdoor Power Input (KW) T3', Total: 'Total Power (KW) T3', RatedPowerfactor: 'Rated Power Factor (T3)', IndoorOutputunit: 'Indoor Unit (V/Ph/Hz)', OutdoorOutputunit: 'Outdoor Unit (V/Ph/Hz)'
        },
      ]
    }
    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotlaNoQuantity;
    var reactHandler = this;
    const doc = new jsPDF('p', 'mm', 'a4');
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      didDrawPage: function (data) {
        doc.setFontSize(20);
        var img1 = new Image();
        img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
        doc.addImage(img1, 'png', 180, 230, 40, 60);
        var img = new Image();
        img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
        doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
        doc.setFontSize(8);
        doc.text(moment(reactHandler.state.currentDate).format("MMMM DD, YYYY"), 185, 24);

        doc.setFontSize(8);
        //doc.text('Pf/', 162, 30);
        doc.text('Pf/', 175, 30);
        doc.setFontSize(8);
        doc.text(reactHandler.state.SelectedInvo, 180, 30);
        doc.setFontSize(8);
        //doc.text('/001', 197, 30);
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


      theme: 'grid', //striped
      margin: { top: 100, left: 20, right: 20 },

    });
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    let finalY2 = (doc as any).lastAutoTable.finalY;
    if (finalY2 >= pageHeight) {
      doc.addPage();

    }


    let finalY3 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight5 = finalY3;
    autoTable(doc, {
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
        9: { cellWidth: 17, halign: "center" },
      },
      tableWidth: 100,
      theme: 'grid', //striped

      margin: { bottom: 40, left: 20, right: 20 },
    });

    let finalY5 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight = finalY5 + 1;
    autoTable(doc, {
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
      margin: { top: 100, left: 20, right: 20 },
    });
    let finalY1 = (doc as any).lastAutoTable.finalY;
    let TotalTableHight1 = finalY1 + 10;
    doc.setFontSize(8);
    doc.text('Note:', 15, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
    doc.setFontSize(8);
    doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
    var img4 = new Image();
    img4.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
    doc.addImage(img4, 'png', 180, 230, 40, 60);
    const pageCount = doc.internal.pages.length;

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
      doc.setFontSize(8)
      doc.setTextColor(109, 109, 109);
      doc.text(', Ajman:', 71, 280);
      doc.setFontSize(8)
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
  }

  public render(): React.ReactElement<INewPowerFactorProps> {

    var reactHandler = this;
    const { selectedOptions } = reactHandler.state;

    const value = selectedOptions;
    const MultiInvoice: JSX.Element[] = this.state.MutlipleNew.map(function (item, key) {
      //console.log(item);
      return (
        <div className="check-box-li-wrap">
        <label className="container">
          <input type="checkbox" id={key+"-model-no"} name="multi-invo-numbers" className="multi-invo-numbers" value={item.No}/>{item.No}
          <span className="checkmark"></span>
          </label>
          </div>
      );

     });

    const Location: JSX.Element[] = this.state.items.map(function (item, key) {

      if (item.Locations != "") {

        return (

          <li>  <a href='#' onClick={() => reactHandler.handleClick(item.Locations)}>{item.Locations}</a> </li>

        );
      }
    });

    const ModalButton: JSX.Element[] = this.state.ModelTypeArray.map(function (item, key) {
      if (item.Brand != "") {

        return (

          <span>
            <td>{item.Brand}</td>
            <td>{item.Model}</td>
            <td>{item.RatedCapacity}</td>
            <td>{item.IndoorPowerInput}</td>
            <td>{item.OutdoorPowerInput}</td>
            <td><input value={item.QuantityNumber} />*<input value={item.IndoorPowerInput} />+<input value={item.OutdoorPowerInput} /></td>
            <td>{item.RatedPowerFactor}</td>
            <td>{item.IndoorOutput}</td>
          </span>

        );
      }
    });


    return (

      <div className={styles.newPowerFactor} >

        <div className="relative"></div>
        <header className="clearfix">
          <div className="container">
            <div className="header-inner">
              <div className="logo">
                <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Taqeef.aspx"> <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png" alt="logo" />  </a>
              </div>
              <div className="cart relative">
                <div className="user-profile-details">
                  <div className="user-profile-name">
                    Welcome   <p> {this.state.UserName} </p>
                  </div>
                  <img src={this.state.UserPicture} alt="image" />
                </div>

                <div className="login-details-man">
                  <div className="login-details-man-inner">
                    <div id="profile">
                      <ul>
                        <li> <a href="https://login.microsoftonline.com/common/oauth2/logout">  <i className="fa fa-sign-out" aria-hidden="true"> </i>
                          Logout </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="login-details-man">
                  <div className="login-details-man-inner">
                    <div id="profileAdmin">
                      <ul>
                        <li> <a href="#" onClick={() => window.open("https://taqeef.sharepoint.com/sites/OPR/_layouts/15/people.aspx?MembershipGroupId=56", "_blank")}> <i className="fa fa-cog" aria-hidden="true"></i>
                          Settings </a> </li>
                        <li> <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Admin.aspx"> <i className="fa fa-user" aria-hidden="true"></i>
                          Admin </a> </li>
                        <li> <a href="https://login.microsoftonline.com/common/oauth2/logout">  <i className="fa fa-sign-out" aria-hidden="true"> </i>
                          Logout </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <ul>
                  {/*<li className="home-sec" style={{ display: "none" }}><a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Taqeef.aspx" data-interception='off' ><i className="fa fa-home" aria-hidden="true" ></i>Home</a></li>
                  <li> <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx" data-interception='off' ><i className="fa fa-eye" aria-hidden="true"></i>View Power Factor Letters </a> </li>*/}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className="banner home-banner powerfactor-banner relative">
          <div className="background">
            <div className="container">
              <div className="banner-contents">
                <h1 className="text-center"> Power factor (PF) is the ratio of working power, measured in kilowatts (kW), to apparent power, measured in kilovolt amperes (kVA). This is the measure of the amount of power used to run Air Conditioners. You can generate the power factor letters in few clicks now!!
                </h1>
                <div className="row pf-defaultcontrols">
                  <div className="col-md-6">
                    <div className="form-group relative">

                      <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg" alt="search" />
                      <Select  id="Search" options={uniquearr1}
                     onInputChange={this.handleInputChange}
                        theme={theme => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            primary25: 'white',
                            primary: 'white',
                          },
                        })}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Search for Invoice No"
                        value={value}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group relative">
                      <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg" alt="search" />
                      <Select id="Search" options={uniquearr}
                     onInputChange={this.handleInputChange}
                        theme={theme => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            primary25: 'white',
                            primary: 'white',
                          },
                        })}
                        isClearable={true}
                        isSearchable={true}
                        placeholder="Search for Order No"
                        value={value}
                        onChange={this.handleChange3}
                      />

                    </div>
                  </div>
                        <div className="refresh-row-no">
                        <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/refresh.svg" alt="refresh" onClick={() => this.HideManually()} />
                        </div>
                </div>
                <div className="row pf-or">
                  <p> or</p>
                </div>
                <div className="row pf-createmanually">
                  <div className="col-md-4">
                    <div className="form-group relative">
                      <input type="submit" className="btn btn-primary" value="Create Manually" onClick={() => this.ShowManually()} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group relative">
                      <input type="submit" className="btn btn-primary" value="Floor-By-Floor" onClick={() => this.ShowFloor()} />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="banner-view-pow-lett">
                      <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx">View Power Factor Letter</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="invoice-secyion-details clearfix" id="Invoice">
          <div className="pull-left">
            <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx" data-interception='off' >View Power Factor Letters </a>
          </div>
          <div className="pull-right">
            <div className="if-multi-invoice" style={{ display: "none" }}>
            <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png" alt="image" /> <span> {this.state.SelectedOrd}</span>
            </div>
            <div className="if-single-invoice" style={{ display: "none" }}>
              <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png" alt="image" /> <span> {this.state.SelectedInvo}</span>
            </div>
          </div>
        </div>
        <div id="Left">
          <div className="invoice-type-area-selet-value relative clearfix">
            <div className="invoice-type-area-left">
              <ul>
                <li className="relatve current" id="LocationClass">
                  <a href="#" onClick={() => this.ShowDrop()}><img className="add-more-dats" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/addmore.png" alt="image" id="Add" onClick={() => this.ShowDrop()} />
                    <img className="add-less-dats" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/addless.png" alt="image" id="less" onClick={() => this.ShowDrop()} />

                    <img className="completed-img" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png" alt="image" id="complete" style={{ display: "none" }} />To Address
                    <img className="current-tab-img" alt="image" /> </a>

                  <div className="add-more-expands" id="DropButton">
                    <ul>   {Location}</ul>
                  </div>


                </li>

                <li className="relative" id="SubjectClass"> <a href="#" onClick={() => this.ShowSubject()} >  <img className="completed-img" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png" alt="image" id="complete1" />     Subject   <img className="current-tab-img" alt="image" /> </a> </li>
                <li className="relatve" id="ModelClass"> <a href="#" onClick={() => this.ShowModel()}> <img className="completed-img" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/completed.png" alt="image" id="complete2" />     Model   <img className="current-tab-img" alt="image" />  </a> </li>
                <li className="relatve" id="NotesClass"> <a href="#" onClick={() => this.ShowNotes()}>  Note </a> </li>
                <li className="relatve" id="ReceiverClass"> <a href="#" onClick={() => this.ShowReceiver()} > Receiver Details </a> </li>
              </ul>
            </div>
            <div className="invoice-type-area-right">
              <div className="main-textareas">
                <div id="to"><p>  <b> To: </b></p>
                  <div id="ToButton" className="space-separator">
                    {/*this.state.SelectedAddress*/}
                  </div>
                </div>
                <div id="SubjectButton" className="space-separator">
                  <p className="preview-subject"> <b> Subject: </b>  A/C Power Factor</p>
                  <div className="SubjectPreview">

                    <div>
                      <h5>Project Name</h5> : <textarea id="myTextarea" rows={1} onChange={this.handleChangeTextarea1} placeholder=""> </textarea>
                      <span id="SubError" style={{ display: "none", color: "red" }}>Enter Project Name</span>
                    </div>

                    <div>
                      <h5>Consultant Name</h5> : <textarea id="myTextarea2" rows={1} onChange={this.handleChangeTextarea2}></textarea>
                      <span id="SubError2" style={{ display: "none", color: "red" }}>Enter Consultant Name</span>
                    </div>

                    <div>
                      <h5>Customer Name</h5> : <textarea id="myTextarea3" rows={1} onChange={this.handleChangeTextarea3}></textarea>
                      <span id="SubError3" style={{ display: "none", color: "red" }}>Enter Customer Name</span>
                    </div>

                  </div>
                </div>
                <div id="SubjectManually" className="space-separator">
                  <p className="preview-subject"> <b> Subject: </b>  A/C Power Factor</p>
                  <div className="SubjectPreview">

                    <div>
                      <h5>Project Name</h5> : <textarea id="myTextarea4" rows={1} onChange={this.handleChangeTextarea4} placeholder=""> </textarea>

                    </div>
                    <span id="SubError4" style={{ display: "none", color: "red" }}>Enter Project Name</span>
                    <div>
                      <h5>Consultant Name</h5> : <textarea id="myTextarea5" rows={1} onChange={this.handleChangeTextarea5}></textarea>

                    </div>
                    <span id="SubError5" style={{ display: "none", color: "red" }}>Enter Consultant Name</span>
                    <div>
                      <h5>Customer Name</h5> : <textarea id="myTextarea6" rows={1} onChange={this.handleChangeTextarea6}></textarea>

                    </div>
                    <span id="SubError6" style={{ display: "none", color: "red" }}>Enter Customer Name</span>

                  </div>
                </div>

                <div id="ModelButton" className="space-separator clearfix container-outdoor-pv">
                  <table className="table">
                    <thead>
                      <tr>
                        <th rowSpan={2}> Brand </th>
                        <th rowSpan={2}> Model </th>
                        <th rowSpan={2}> Quantity </th>
                        <th rowSpan={2}> Rated Capacity<p>(Btu/h)(T3)</p></th>
                        <th colSpan={2} className="text-center"> Power Input(KW)T3</th>
                        <th rowSpan={2}> Total Power<p>(KW)T3</p> </th>
                        <th rowSpan={2}> Rated Power Factor (T3) </th>
                        <th rowSpan={2} className="text-center">Indoor Unit<p>V / Ph / Hz</p>   </th>
                        <th rowSpan={2} className="text-center"> Outdoor Unit<p>V / Ph / Hz </p> </th>
                      </tr>
                      <tr>
                        <th>  <p> Indoor Power Input (KW)T3</p>  </th>
                        <th> <p> Outdoor Power Input (KW)T3 </p>  </th>
                      </tr>
                    </thead>
                    <tbody id="DynamicRow">
                      {this.state.showmodel}
                    </tbody>

                    <tbody>
                      <tr>
                        <td colSpan={2}></td>
                        <td>
                          {/*<p id="single-get-total">this.state.TotlaNoQuantity</p>
                          <p id="bundle-get-total"></p>*/}
                          {this.state.TotlaNoQuantity}
                          <p>(Total)</p>
                        </td>
                        <td colSpan={3}></td>
                        <td>
                          {this.state.TotalModel}
                          <p>(Total)</p>
                        </td>
                        <td colSpan={3}></td>
                      </tr>
                    </tbody>

                  </table>

                </div>


                <div id="ModelManually" className="space-separator clearfix container-outdoor-pv">
                  <table className="table" id="ManuallTable">
                    <thead>
                      <tr>
                        <th className="model-td" rowSpan={2}> Brand </th>
                        <th className="model-td" rowSpan={2}> Model </th>
                        <th rowSpan={2}> Quantity </th>
                        <th rowSpan={2}> Rated Capacity<p>(Btu/h)(T3)</p></th>
                        <th colSpan={2} className="text-center"> Power Input(KW)T3</th>
                        <th rowSpan={2}> Total Power<p>(KW)T3</p> </th>
                        <th rowSpan={2}> Rated Power Factor (T3) </th>
                        <th rowSpan={2} className="text-center">Indoor Unit<p>V / Ph / Hz</p>   </th>
                        <th rowSpan={2} className="text-center"> Outdoor Unit<p>V / Ph / Hz </p> </th>
                      </tr>
                      <tr>
                        <th>  <p> Indoor Power Input (KW)T3</p>  </th>
                        <th> <p> Outdoor Power Input (KW)T3 </p>  </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.showdata}
                    </tbody>
                  </table>
                  <button id="add-row" onClick={this.handleAddRow}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
                </div>

                <div id="FloorModelManually" className="space-separator clearfix container-outdoor-pv">
                  <table className="table" id="FloorManuallTable">
                    <thead>
                      <tr>
                      <th className="model-td" rowSpan={2}> Floor </th>
                        <th className="model-td" rowSpan={2}> Brand </th>
                        <th className="model-td" rowSpan={2}> Model </th>
                        <th rowSpan={2}> Quantity </th>
                        <th rowSpan={2}> Rated Capacity<p>(Btu/h)(T3)</p></th>
                        <th colSpan={2} className="text-center"> Power Input(KW)T3</th>
                        <th rowSpan={2}> Total Power<p>(KW)T3</p> </th>
                        <th rowSpan={2}> Rated Power Factor (T3) </th>
                        <th rowSpan={2} className="text-center">Indoor Unit<p>V / Ph / Hz</p>   </th>
                        <th rowSpan={2} className="text-center"> Outdoor Unit<p>V / Ph / Hz </p> </th>
                      </tr>
                      <tr>
                        <th>  <p> Indoor Power Input (KW)T3</p>  </th>
                        <th> <p> Outdoor Power Input (KW)T3 </p>  </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.showdata}
                    </tbody>
                  </table>
                  <button id="add-row" onClick={this.FloorhandleAddRow}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
                </div>


                <div id="Notes" className="space-separator">
                  <p>  <b>Note:</b>   Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB) </p>
                  <p> If required any further information, please dial in <a className="Note-Preview">800Taqeef</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="FooterMenu">
          <div className="footer-controls">
            <input type="submit" className="btn btn-primary" value="Send" onClick={() => this.ShowSend()} />
            <input type="submit" className="btn btn-sec" value="Preview" onClick={() => this.ShowPreview()} />
            <input type="submit" className="btn btn-no-bg" value="Cancel" onClick={() => this.CancelAlert()} />
          </div>
        </div>
        <div id="FooterMenu1">
          <div className="footer-controls">
            <input type="submit" className="btn btn-primary" value="Send" onClick={() => this.ShowManualSend()} />
            <input type="submit" className="btn btn-sec" value="Preview" onClick={() => this.ShowManualPreview()} />
            <input type="submit" className="btn btn-no-bg" value="Cancel" onClick={() => this.CancelAlert()} />
          </div>
        </div>




        <div className="lightbox open" id="CancelEverything">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Cancel the Process
            </div>
            <div className="lightbox-body">
              <label className="AlertText">  Are you sure to cancel this process </label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.CancelManual()} value="Yes" />
                <input type="submit" className="btn btn-no-bg" onClick={() => this.StopProcess()} value="Cancel" />
              </div>
            </div>
          </div>
        </div>


        <div className="lightbox open" id="Sucess">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Success
            </div>
            <div className="lightbox-body">
              <label className="AlertText">  Successfully Created </label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessReceiver()} value="Ok" />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="AlertModel">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Model
            </div>
            <div className="lightbox-body">
              <label className="AlertText">Enter Brand, Quantity and Model</label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessModel()} value="Ok" />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="AlertModel2">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Model
            </div>
            <div className="lightbox-body">
              <label className="AlertText">Choose Model</label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessModel()} value="Ok" />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="AlertSubject">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Error in Subject
            </div>
            <div className="lightbox-body">
              <label className="AlertText">Project Name/Consultant Name/Customer Name are Mandatory!</label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessModel()} value="Ok" />
              </div>
            </div>
          </div>
        </div>



        <div className="lightbox open" id="Receiver">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Receiver Details
            </div>
            <div className="lightbox-body">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3">
                    <label>  From </label>
                  </div>
                  <div className="col-md-9" id="From">
                    <input className="form-control" id="From" value="powerfactor@taqeef.com" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3">
                    <label>  To </label>
                  </div>
                  <div className="col-md-9">
                    <input type="text" id="ToSaveRecevier" className="form-control" />
                    <span id="if-not-valid-email" style={{ display: "none", color: "red" }}>Not a Valid Email</span>
                    <span id="emptyToAddress" style={{ display: "none", color: "red" }}>To address should not be empty </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3">
                    <label>  Cc </label>
                  </div>
                  <div className="col-md-9">
                    <input type="text" id="Cc" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <p>  </p>
                    <p>Hello {this.state.SelectedSellTo} ,</p>
                    <p>  </p>
                    <textarea className="body-textarea" id="SubjectContent" rows={3} onChange={this.handleChangeTextarea8}> </textarea>
                    <span id="SubError" style={{ display: "none", color: "red" }}>Enter Enter the body Content</span>
                    <p>  </p>
                    <p> Regards,</p>
                    <textarea className="receiver-textarea" id="regard" rows={1} onChange={this.handleChangeTextarea7}> </textarea>
                    <span id="regError" style={{ display: "none", color: "red" }}>Enter Regards</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center m-b-10">
                  <input type="submit" className="btn btn-primary" onClick={() => this.SaveReceiver()} value="Send" />
                  <input type="submit" className="btn btn-no-bg" onClick={() => this.HideReceiver()} value="Cancel" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="more-invoice-wrap lightbox open" id="multipleInvoiceCheckbox">
                <div className="list-invoic-left">
                  <div className="list-invoic-headre clearfix">
                    <div className="pull-left"> <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/InvoiceBlue.png" alt="image" /> Invoices </div>
                    <div className="pull-right"> <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/close.svg" alt="image"onClick={() => this.close()}/>  </div>
                  </div>
                  <div className="list-invoic-body" id="MultipleInvoice">
                    <div className="check-box-li-wrap">
                      <label className="container">
                  <input type="checkbox" className="selectall" onChange={ ()=>this.SelectAll()}/>Select All Invoices
                        <span className="checkmark"></span>
                      </label>
              </div>
              {MultiInvoice}
                  </div>
                  <div className="list-invoic-footer">
                    <input type="submit" className="btn btn-primary" value="Confirm" id="ConfirmButton" onClick={()=>this.MultipleSelect()} />
                    <input type="submit" className="btn btn-no-bg" value="Cancel"  onClick={() => this.close()} />
                  </div>
                </div>
        </div>
        <div className="lightbox open" id="AlertMultipleSelect">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Error in Multiple Select
            </div>
            <div className="lightbox-body">
              <label className="AlertText"> Please select atleast one invoice number!</label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessSelect()} value="Ok" />
              </div>
            </div>
          </div>
        </div>

        <div id="Manually">
          <div className="lightbox open">
            <div className="lightbox-inner-contents">
              <div className="lightbox-title">
                Create Manually
              </div>
              <div className="lightbox-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-3">
                      <label>  Invoice/OrderNo </label>
                    </div>
                    <div className="col-md-9">
                      <input type="text" id="Invord" className="form-control" />
                      <span id="InvoError" style={{ display: "none", color: "red" }}>Enter InvoiceNo/orderNo to continue</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center m-b-10">
                    <input type="submit" className="btn btn-primary" id="SaveButton" onClick={() => this.SaveManually()} value="Save" />
                    <input type="submit" className="btn btn-no-bg" onClick={() => this.HideManually()} value="Cancel" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ManuallyFloor">
          <div className="lightbox open">
            <div className="lightbox-inner-contents">
              <div className="lightbox-title">
                Create Floor-By-Floor
              </div>
              <div className="lightbox-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-3">
                      <label>  Invoice/OrderNo </label>
                    </div>
                    <div className="col-md-9">
                      <input type="text" id="FloorInvord" className="form-control" />
                      <span id="InvoError" style={{ display: "none", color: "red" }}>Enter InvoiceNo/orderNo to continue</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center m-b-10">
                    <input type="submit" className="btn btn-primary" id="SaveButton" onClick={() => this.SaveFloor()} value="Save" />
                    <input type="submit" className="btn btn-no-bg" onClick={() => this.HideManually()} value="Cancel" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Preview">
          <div className="lightbox open lightbox-preview" >
            <div id="print-preview">
              <div className="lightbox-inner-contents a4-lightbox-inner">
                <div className="lightbox-inner-contents-inner">
                  <div className="lightbox-body a4">
                    <div className="preview-wrap-light">
                      <div className="priew-blocks clearfix">
                        <div className="logo refrenceno-logo">
                          <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.svg" alt="logo" />
                        </div>
                        <div className="date-ref-no text-right">
                          <p> {moment(this.state.currentDate).format("MMMM DD, YYYY")} </p>
                          <p> Pf–{this.state.SalesPersonCode}/{this.state.SelectedInvo}/001 </p>
                        </div>
                      </div>
                      <div><p> <b> To: </b> </p>
                        <div className="priew-blocks clearfix" id="AddressPreview">
                          <p>{/*this.state.SelectedAddress*/}</p>
                        </div>
                      </div>

                      <div className="priew-blocks clearfix">
                        <p className="preview-subject"> <b> Subject: </b>   A/C Power Factor </p>
                        <div className="SubjectPreview">
                          <div className="ProjectPreview">
                            <h5>Project Name </h5>
                            : {this.state.SelectedProjName}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Consultant Name </h5>
                            : {this.state.SelectedConsult}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Customer Name </h5>
                            : {this.state.SelectedSellTo}
                          </div>
                        </div>
                      </div>
                      <div className="priew-blocks">
                        <div className="Scroll">
                          <table className="table">
                            <thead>
                              <tr>
                                <th rowSpan={2}> Brand </th>
                                <th rowSpan={2}> Model </th>
                                <th rowSpan={2}> Quantity </th>
                                <th rowSpan={2}> Rated Capacity<p>(Btu/h)(T3)</p></th>
                                <th colSpan={2} className="text-center"> Power Input(KW)T3</th>
                                <th rowSpan={2}> Total Power<p>(KW)T3</p> </th>
                                <th rowSpan={2}> Rated Power Factor (T3) </th>

                                <th rowSpan={2} className="text-center">Indoor Unit<p>V / Ph / Hz</p>   </th>
                                <th rowSpan={2} className="text-center"> Outdoor Unit<p>V / Ph / Hz </p> </th>
                              </tr>
                              <tr>
                                <th>  <p> Indoor Power Input (KW)T3</p>  </th>
                                <th> <p> Outdoor Power Input (KW)T3 </p>  </th>
                              </tr>
                            </thead>
                            <tbody id="Third-table">

                            </tbody>
                            <tbody >
                              <tr>
                                <td colSpan={2}></td>
                                <td>
                                  {this.state.TotlaNoQuantity}
                                  <p>(Total)</p>
                                </td>
                                <td colSpan={3}></td>
                                <td>
                                  {this.state.TotalModel}
                                  <p>(Total)</p>
                                </td>
                                <td colSpan={3}></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="priew-blocks">

                        <p>  <b>Note:</b>   Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB) </p>
                        <p> If required any further information, please dial in <a className="Note-Preview">800Taqeef</a></p>

                      </div>
                    </div>
                    <div className="preview-bg-image">
                      <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png" alt="image" />
                    </div>
                    <div className="prieve-block-footer">

                      <p>Abu Dhabi: 02 6727684, Dubai: 04 2820477, Ajman: 06 7497111, Al Ain: 03 7641292, </p>
                      <p>Fujairah: 09 2239898, Ras Al Khaimah: 07 2334581, Zayed City: 02 8840902 </p>
                      <p>Email: info@taqeef.com, www.taqeef.com</p>
                      <p className="digitallygenerator">This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.</p>
                    </div>

                  </div>
                </div>
              </div>


              <div className="row top-save">
                <div className="col-md-12 text-center m-b-10">
                  <input type="submit" className="btn btn-primary" value="Save" id="cmd" onClick={() => this.SavePrint()} />
                  <input type="submit" className="btn btn-no-bg" value="Cancel" onClick={() => this.HidePreview()} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="PreviewManual">
          <div className="lightbox open lightbox-preview" >
            <div id="print-preview">
              <div className="lightbox-inner-contents a4-lightbox-inner">
                <div className="lightbox-inner-contents-inner">
                  <div className="lightbox-body a4">
                    <div className="preview-wrap-light">
                      <div className="priew-blocks clearfix">
                        <div className="logo refrenceno-logo">
                          <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.svg" alt="logo" />
                        </div>
                        <div className="date-ref-no text-right">
                          <p> {moment(this.state.currentDate).format("MMMM DD, YYYY")} </p>
                          <p> Pf/{this.state.SelectedInvo}/001 </p>

                        </div>
                      </div>

                      <div><p> <b> To: </b> </p>
                        <div className="priew-blocks clearfix" id="AddressPreviewManually">

                          <p>{/*this.state.SelectedAddress*/}</p>
                        </div>

                      </div>

                      <div className="priew-blocks clearfix">
                        <p className="preview-subject"> <b> Subject: </b>   A/C Power Factor  </p>
                        <div className="SubjectPreview">
                          <div className="ProjectPreview">
                            <h5>Project Name </h5>
                            : {this.state.SelectedProjName}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Consultant Name </h5>
                            : {this.state.SelectedConsult}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Customer Name </h5>
                            : {this.state.SelectedSellTo}
                          </div>
                        </div>
                      </div>
                      <div className="priew-blocks">
                        <div className="Scroll">
                          <table className="table">
                            <thead>
                              <tr>
                                <th rowSpan={2}> Brand </th>
                                <th rowSpan={2}> Model </th>
                                <th rowSpan={2}> Quantity </th>
                                <th rowSpan={2}> Rated Capacity<p>(Btu/h)(T3)</p></th>
                                <th colSpan={2} className="text-center"> Power Input(KW)T3</th>
                                <th rowSpan={2}> Total Power<p>(KW)T3</p> </th>
                                <th rowSpan={2}> Rated Power Factor (T3) </th>
                                <th rowSpan={2} className="text-center">Indoor Unit<p>V / Ph / Hz</p>   </th>
                                <th rowSpan={2} className="text-center"> Outdoor Unit<p>V / Ph / Hz </p> </th>
                              </tr>
                              <tr>
                                <th>  <p> Indoor Power Input (KW)T3</p>  </th>
                                <th> <p> Outdoor Power Input (KW)T3 </p>  </th>
                              </tr>
                            </thead>
                            <tbody id="Second-table">

                            </tbody>
                            <tbody>
                              <tr>
                                <td colSpan={2}></td>
                                <td>
                                  {this.state.TotlaNoQuantity}
                                  <p>(Total)</p>
                                </td>
                                <td colSpan={3}></td>
                                <td>
                                  {this.state.TotalModel}
                                  <p>(Total)</p>
                                </td>
                                <td colSpan={3}></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="priew-blocks">

                        <p>  <b>Note:</b>   Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB) </p>
                        <p> If required any further information, please dial in <a className="Note-Preview">800Taqeef</a></p>

                      </div>


                    </div>
                    <div className="preview-bg-image">
                      <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png" alt="image" />
                    </div>

                    <div className="prieve-block-footer">

                      <p>Abu Dhabi: 02 6727684, Dubai: 04 2820477, Ajman: 06 7497111, Al Ain: 03 7641292, </p>
                      <p>Fujairah: 09 2239898, Ras Al Khaimah: 07 2334581, Zayed City: 02 8840902 </p>
                      <p>Email: info@taqeef.com, www.taqeef.com</p>
                      <p className="digitallygenerator">This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row top-save">
                <div className="col-md-12 text-center m-b-10">
                  <input type="submit" className="btn btn-primary" value="Save" onClick={() => this.DownManual()} />
                  <input type="submit" className="btn btn-no-bg" value="Cancel" onClick={() => this.HideManualPreview()} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
