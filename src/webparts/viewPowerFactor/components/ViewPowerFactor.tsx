import * as React from 'react';
import styles from './ViewPowerFactor.module.scss';
import { IViewPowerFactorProps } from './IViewPowerFactorProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as $ from 'jquery';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Web } from "@pnp/sp/webs";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/lists";
import "@pnp/sp/items";
$('html').css("visibility", "hidden");

setTimeout(function () {
  $('html').css("visibility", "visible");
  $('html').addClass('loading-in-progress');
}, 1200);

export interface IViewPowerFactorState {
  UserPicture: string;
  UserName: string;
  Designation: string;
  Email: string;
  items: any[];
  items2: any[];
  items3: any[];
  selectedOptions: string;
  SelectedInvo: string;
  SelectedValue: string;
  SelectedTo: string;
  SelecInvOrd: string;
  SubjectSelect: string;
  SelectedAddress: string;
  SelectedDate: string;
  SelectedProjectName: string;
  SelectedConsultantName: string;
  SelectedCustomerName: string;
  SelectId: string;
  status: boolean;
  down: boolean;
  Sort: any;
  TotalNoQuantity: number;
  TotalModel: number;
  ListId: string;
  showdata: any[];
  SalesPersonCode: string;

}
let uniquearr = [];
let savearr = [];
export default class ViewPowerFactor extends React.Component<IViewPowerFactorProps, IViewPowerFactorState, {}> {
  private displayData;
  public constructor(props: IViewPowerFactorProps, state: IViewPowerFactorState) {
    super(props);
    this.displayData = [];

    this.appendData = this.appendData.bind(this);
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
    SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
    SPComponentLoader.loadScript("https://cdn.rawgit.com/mrk-j/paginga/v0.8.1/paginga.jquery.min.js");

    this.state = {
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
    }


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
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 4500);
    setTimeout(function () {
      $('html').css("visibility", "visible");//.show();
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

  }
  public DeleteIcon() {
    var value;
    $(".DeleteImage").on('click', function (event) {

      value = $(this).data("custom-value");

    });
    this.GetDelete(value);
  }
  public async GetProfile() {
    const newweb = Web("https://taqeef.sharepoint.com/sites/OPR");///administration
    let groups = await newweb.currentUser.groups();
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].Title == "PFAdmin") {
        $('#profile').hide();
        $('#profileAdmin').show();
      }
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

  public GetDetails() {
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

  }

  public appendData(num, Invoice, Location, Project, Customer, OrderNo, Date, ItemId, CreatedBy) {
    var reactHandler = this;
    if (reactHandler.GetProfile()) {
      reactHandler.displayData.push(
        <tr>
          <td>{num}</td>
          <td>{Location}</td>
          <td>{Invoice}</td>
          <td>{OrderNo}</td>
          <td>{Date}</td>
          <td>{Project}</td>
          <td>{Customer}</td>
          <td>{CreatedBy}</td>
          <td>
            <ul className="list-actiobs">
              <ul className="list-actiobs">
                <li><a href="#" className="ViewImage" data-custom-value={ItemId} onClick={() => reactHandler.GetValues(ItemId)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/view.svg" className="ibtneye list-actiobs" alt="image" /></a></li>
                <li><a href="#" className="DownloadImage" data-custom-value={ItemId} onClick={() => reactHandler.GetValuesPrint(ItemId)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/download.svg" className="list-actiobs" alt="image" /></a></li>
                <li><a href="#" className="DeleteImage" data-custom-value={ItemId} onClick={() => reactHandler.SaveId(ItemId)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/delete.svg" className="ibtneye list-actiobs" alt="image" /></a></li>
              </ul>
            </ul>
          </td>
        </tr>
      );
      reactHandler.setState({
        showdata: reactHandler.displayData
      });
      // console.log(reactHandler.state.showdata);
    } else {

      reactHandler.displayData.push(
        <tr>
          <td>{num}</td>
          <td>{Location}</td>
          <td>{Invoice}</td>
          <td>{OrderNo}</td>
          <td>{Date}</td>
          <td>{Project}</td>
          <td>{Customer}</td>
          <td>{CreatedBy}</td>
          <td>
            <ul className="list-actiobs">
              <li><a href="#" className="ViewImage" data-custom-value={ItemId} onClick={() => reactHandler.GetValues(ItemId)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/view.svg" className="ibtneye list-actiobs" alt="image" /></a></li>
              <li><a href="#" className="DownloadImage" data-custom-value={ItemId} onClick={() => reactHandler.GetValuesPrint(ItemId)}><img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/download.svg" className="list-actiobs" alt="image" /></a></li>
            </ul>
          </td>
        </tr>
      );
      reactHandler.setState({
        showdata: reactHandler.displayData
      });
      // console.log(reactHandler.state.showdata);
    }





    // uniquearr.push({ value: '' + resultData.d.results[i].OrderNo + '', label: '' + resultData.d.results[i].OrderNo + '' });

  }

  public SaveId(Id) {
    this.setState({ ListId: Id });
    $('#OkAlert').show();

  }

  public DeleteAlert() {
    this.GetDelete(this.state.ListId);
    $('#OkAlert').hide();

  }
  public async GetDelete(Id) {
    var reactHandler = this;
    const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
    var selectedId = Id;
    //alert(selectedId);
    let CreateManuallyId: number;
    var ModelManualId;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=ID,Date&$filter=ViewFinal/Id eq '${selectedId}'`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        for (var i = 0; i < resultData.d.results.length; i++) {
          CreateManuallyId = resultData.d.results[i].ID;
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    }).then((value) => {
      $.ajax({
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('ManuallyModel')/items?$select=ID,Model&$filter=ManuallyID/Id eq '${CreateManuallyId}'`,
        type: "GET",
        headers: { 'Accept': 'application/json; odata=verbose;' },
        success: function (resultData) {
          for (var i = 0; i < resultData.d.results.length; i++) {
            ModelManualId = resultData.d.results[i].ID;

            let list2 = newweb.lists.getByTitle("ManuallyModel");
            list2.items.getById(ModelManualId).delete();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
      }).then(() => {
        $.ajax({
          url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=ID,Date&$filter=ViewFinal/Id eq '${selectedId}'`,
          type: "GET",
          headers: { 'Accept': 'application/json; odata=verbose;' },
          success: function (resultData) {
            for (var i = 0; i < resultData.d.results.length; i++) {
              CreateManuallyId = resultData.d.results[i].ID;

              let list1 = newweb.lists.getByTitle("CreateManually");
              list1.items.getById(CreateManuallyId).delete();
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
          }
        }).then((value) => {
          let list = newweb.lists.getByTitle("ReceiverDetails");
          list.items.getById(Id).delete().then(() => {
            $('#DisplayRow').empty();
            reactHandler.GetDetails();
          });

        });

      });

    });
  }

  public StopProcess() {
    $('#OkAlert').hide();
  }

  public GetValues(Id) {

    $('#Preview').show();
    var selectedId = Id;
    var reactHandler = this;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=Invoice_x002f_OrderNo,ProjectName,ConsultantName,CustomerName,TotalQuantity,TotalModel,To,ID,Date,SalesPersonCode&$filter=ViewFinal/Id eq '${selectedId}'`,
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
          TotalNoQuantity: resultData.d.results[0].TotalQuantity,
          SalesPersonCode: resultData.d.results[0].SalesPersonCode
        });
        //alert(reactHandler.state.SelectId);
        if (resultData.d.results[0].TotalModel == 'undefined') {
          reactHandler.setState({ TotalModel: 0 });
        }
        setTimeout(() => {
          reactHandler.GetModelDetails(reactHandler.state.SelectId);
        }, 1000);


        reactHandler.Location(reactHandler.state.SelectedTo);
      },


      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }

  public GetModelDetails(value) {

    var rest = value;
    var reactHandler = this;

    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('ManuallyModel')/items?$select=Brand,Model,Quantity,RatedCapacity,OutdoorPowerInput,IndoorPowerInput,TotalPower,PowerFactor,Output,OutdoorOutput&$filter=ManuallyID/Id eq '${rest}'`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        // console.log(resultData.d.results);
        reactHandler.setState({ items3: resultData.d.results });
        for (var i = 0; i < resultData.d.results.length; i++) {
          var Model = resultData.d.results[i].Model;
          var Brand = resultData.d.results[i].Brand;
          var RatedCapacity = resultData.d.results[i].RatedCapacity;
          var dataQuantity = resultData.d.results[i].Quantity
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
          cols += `<td>${Brand}</td>`;
          cols += `<td>${Model}</td>`;
          cols += `<td id="combact1">${dataQuantity}</td>`;
          cols += `<td>${RatedCapacity}</td>`;
          cols += `<td>${IndoorInput}</td>`;
          cols += `<td>${OutdoorInput}</td>`;
          cols += `<td id="combact2">${Total}</td>`
          cols += `<td>${RatedPowerFactor}</td>`;
          cols += `<td>${IndoorOutput}</td>`;
          cols += `<td>${OutdoorOutput}</td>`;


          newRow.append(cols);
          $("table #DynamicRow").append(newRow);

        }
        // alert();

      },


      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }

  public GetValuesPrint(value) {


    var selectedId = value;
    var reactHandler = this;
    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('CreateManually')/items?$select=Invoice_x002f_OrderNo,ProjectName,ConsultantName,CustomerName,SalesPersonCode,TotalQuantity,TotalModel,To,ID,Date&$filter=ViewFinal/Id eq '${selectedId}'`,
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
        setTimeout(() => {
          reactHandler.GetModelPrint(reactHandler.state.SelectId);
          reactHandler.Location(reactHandler.state.SelectedTo);
        }, 1000);

      },


      error: function (jqXHR, textStatus, errorThrown) {
      }
    });

  }
  public GetModelPrint(value) {

    var rest = value;
    var reactHandler = this;

    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('ManuallyModel')/items?$select=Brand,Model,Quantity,RatedCapacity,OutdoorPowerInput,IndoorPowerInput,TotalPower,PowerFactor,Output,OutdoorOutput&$filter=ManuallyID/Id eq '${rest}'`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        //console.log(resultData.d.results);
        reactHandler.setState({ items3: resultData.d.results });
        for (var i = 0; i < resultData.d.results.length; i++) {
          var Model = resultData.d.results[i].Model;
          var Brand = resultData.d.results[i].Brand;
          var RatedCapacity = resultData.d.results[i].RatedCapacity;
          var dataQuantity = resultData.d.results[i].Quantity
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
  }

  public Location(value) {
    // alert(value);
    var reactHandler = this;

    $.ajax({
      url: `${this.props.siteurl}/_api/web/lists/getbytitle('ToLocation')/items?$select=Address&$filter=Locations eq '${value}'`,
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

  }
  public HidePreview() {
    $('#DynamicRow').empty();
    savearr = [];
    $('#Preview').hide();

  }



  public SavePrint() {

    var totalmodel = "Total " + this.state.TotalModel;
    var totalquantity = "Total " + this.state.TotalNoQuantity;
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
    if (savearr.length != 0) {
      var reactHandler = this;
      const doc = new jsPDF('p', 'mm', 'a4');
      autoTable(doc, {
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
          9: { cellWidth: 16, halign: "center" },
        },
        tableWidth: 'auto',
        didDrawPage: function (data) {
          doc.setFontSize(20);
          var img1 = new Image();
          img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
          doc.addImage(img1, 'png', 131, 200, 80, 125);
          var img = new Image();
          img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
          doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedDate, 185, 24);
          /*doc.setFontSize(8);
          doc.text('Pf–', 158, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 162, 30);
          doc.setFontSize(8);
          doc.text('/', 178, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);*/
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
          doc.text(reactHandler.state.SelectedProjectName, 46, 75);
          doc.setFontSize(8);
          doc.text('Customer Name ', 18, 79);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedCustomerName, 46, 79);
          doc.setFontSize(8);
          doc.text('Consultant Name ', 18, 83);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedConsultantName, 46, 83);
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
          9: { cellWidth: 17, halign: "center" },
        },
        tableWidth: 'auto',
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
      doc.addImage(img4, 'png', 131, 200, 80, 125);
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




      var myDocName = "Pf–" + this.state.SalesPersonCode + "/" + this.state.SelectedInvo + ".pdf";
      doc.save(myDocName);
    }
    else {
      var reactHandler = this;
      const doc = new jsPDF('p', 'mm', 'a4');
      autoTable(doc, {
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
          9: { cellWidth: 15, halign: "center" },
        },
        tableWidth: 'auto',
        didDrawPage: function (data) {
          doc.setFontSize(20);
          var img1 = new Image();
          img1.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/MicrosoftTeams-image.png'
          doc.addImage(img1, 'png', 131, 200, 80, 125);
          var img = new Image();
          img.src = 'https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png'
          doc.addImage(img, 'png', data.settings.margin.left, 13, 50, 20);
          /*doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedDate, 185, 24);
          doc.setFontSize(8);
          doc.text('Pf–', 158, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SalesPersonCode, 162, 30);
          doc.setFontSize(8);
          doc.text('/', 178, 30);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedInvo, 180, 30);
          doc.setFontSize(8);
          doc.text('/001', 202, 30);*/
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
          doc.setFont('Arial');
          doc.setFontSize(8);
          doc.text('To:', 15, 40);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedAddress, 18, 45);

          doc.setFontSize(8);
          doc.text("Project Name ", 18, 75);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedProjectName, 46, 75);
          doc.setFontSize(8);
          doc.text('Customer Name ', 18, 79);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedCustomerName, 46, 79);
          doc.setFontSize(8);
          doc.text('Consultant Name ', 18, 83);
          doc.setFontSize(8);
          doc.text(reactHandler.state.SelectedConsultantName, 46, 83);
          doc.setFontSize(8);
          doc.text("This letter is computer generated and does not require any signature or company's stamp in order to be considered valid.", 25, 294);
          doc.setFontSize(8);
          doc.text('Abu Dhabi:', 15, 280);
          doc.setFontSize(8);
          doc.text(', Dubai:', 45, 280);
          doc.setFontSize(8)
          doc.text(', Ajman:', 71, 280);
          doc.setFontSize(8)
          doc.text(', Al Ain:', 97, 280);
          doc.setFontSize(8);
          doc.text('Fujairah:', 15, 284);
          doc.setFontSize(8);
          doc.text(', Ras Al Khaimah:', 42, 284);
          doc.setFontSize(8);
          doc.text(', Zayed City:', 81, 284);
          doc.setFontSize(8);
          doc.text('Email:', 15, 288);
          doc.setFontSize(10);
          doc.setTextColor(0, 77, 119);
          doc.text("Subject: A/C Power Factor", 89, 67);
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
          var pageSize = doc.internal.pageSize;
          var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        },
        theme: 'grid', //striped
        margin: { top: 100 },

      });
      let finalY = (doc as any).lastAutoTable.finalY;
      let TotalTableHight = finalY + 1;
      autoTable(doc, {
        startY: TotalTableHight,
        body: RowAdd1(),
        styles: { cellWidth: 'wrap', fontSize: 8 },
        columnStyles: {
          0: { cellWidth: 100, halign: "center" },
          1: { cellWidth: 23, halign: "center" }

        },
        tableWidth: 100,
        theme: 'striped',
        margin: { top: 100 },
      });
      let finalY1 = (doc as any).lastAutoTable.finalY;
      let TotalTableHight1 = finalY + 10;
      doc.setFontSize(8);
      doc.text('Note:', 15, TotalTableHight1 + 10);
      doc.setFontSize(8);
      doc.text('Condition (T3) Cooling: Indoor 29/19°C (DB/WB), Outdoor 46/24°C (DB/WB)', 23, TotalTableHight1 + 10);
      doc.setFontSize(8);
      doc.text('If required any further information, please dial in:', 15, TotalTableHight1 + 14);
      doc.setFontSize(8);
      doc.setTextColor(0, 77, 119);
      doc.text('800Taqeef', 76, TotalTableHight1 + 14);

      var myDocName = "Pf–" + this.state.SalesPersonCode + "/" + this.state.SelectedInvo + ".pdf";
      doc.save(myDocName);

    }


  }


  public render(): React.ReactElement<IViewPowerFactorProps> {
    var reactHandler = this;

    const { selectedOptions } = reactHandler.state;

    $('#txt_searchall').on("keyup", function () {
      var search = $(this).val();
      $('table tbody tr').hide();
      var len = $('table tbody tr:not(.notfound) td:contains("' + search + '")').length;

      if (len > 0) {
        $('table tbody tr:not(.notfound) td:contains("' + search + '")').each(function () {
          $(this).closest('tr').show();
        });
      } else {

        $('.notfound').show();
      }
    });
    const value = selectedOptions;
    return (

      <div className={styles.viewPowerFactor} >
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

                        <li> <a href="https://login.microsoftonline.com/common/oauth2/logout">  <i className="fa fa-sign-out" aria-hidden="true"></i>
                          Logout </a> </li>
                      </ul>
                    </div>
                    <div id="profileAdmin">
                      <ul>
                        <li> <a href="#" onClick={() => window.open("https://taqeef.sharepoint.com/sites/OPR/_layouts/15/people.aspx?MembershipGroupId=56", "_blank")}> <i className="fa fa-cog" aria-hidden="true"></i>
                          Settings </a> </li>
                        <li> <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/Admin.aspx"> <i className="fa fa-user" aria-hidden="true"></i>
                          Admin </a> </li>
                        <li> <a href="https://login.microsoftonline.com/common/oauth2/logout">  <i className="fa fa-sign-out" aria-hidden="true"></i>
                          Logout </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <ul>
                  {/* <li><a href="http://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PF-Create.aspx" data-interception='off' ><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                  <li> <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PF-Create.aspx" data-interception='off'><i className="fa fa-plus" aria-hidden="true"></i>
 Add Power Factor Letters </a> </li>*/}
                </ul>
              </nav>
            </div>
          </div>
        </header>



        <div className="banner open home-banner powerfactor-banner view-power-factor relative powerfactorview">
          <div className="background">
            <div className="container">
              <div className="banner-contents">
                <h1 className="text-center">Power factor (PF) is the ratio of working power, measured in kilowatts (kW), to apparent power, measured in kilovolt amperes (kVA). This is the measure of the amount of power used to run Air Conditioners. You can generate the power factor letters in few clicks now!!
                </h1>
                <div className="search-models relative">
                  <input type="text" className="form-control" placeholder="Search by Invoice / Order No" id="txt_searchall" />
                  <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/search.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoice-secyion-details clearfix">
          <div className="pull-left">
            <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PF-Create.aspx" data-interception='off'>Add Power Factor Letters </a>
          </div>
        </div>
        <div className="sec">
          <div className="container">
            <div className="search-newest clearfix">

              <div className="sort-by">
                Sort By
                <select id="sort-items" className="form-control">
                  <option value="desc">New</option>
                  <option value="asc">Old</option>
                </select>
              </div>
            </div>


            <div className="power-factor-lists container-outdoor-pv">
              <table className="table table-hover" id="TableTest">

                <thead>
                  <tr>
                    <th> # </th>
                    <th>To</th>
                    <th>Invoice</th>
                    <th>OrderNo</th>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>Customer Name</th>
                    <th>Created By</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody id="DisplayRow">
                  {this.state.showdata}
                </tbody>

              </table>
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
                          <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png" alt="logo" />
                        </div>
                        <div className="date-ref-no text-right">
                          <p> {this.state.SelectedDate} </p>
                          <p> Pf-{this.state.SalesPersonCode}/{this.state.SelectedInvo}/001 </p>
                        </div>
                      </div>

                      <div><p> <b> To: </b> </p>
                        <div className="priew-blocks clearfix" id="AddressPreview">

                          <p>{/*this.state.address*/}</p>
                        </div>

                      </div>

                      <div className="priew-blocks clearfix">
                        <p className="preview-subject"> <b> Subject: </b>   A/C Power Factor  </p>
                        <div className="SubjectPreview">
                          <div className="ProjectPreview">
                            <h5>Project Name :</h5>
                            {this.state.SelectedProjectName}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Consultant Name :</h5>
                            {this.state.SelectedConsultantName}
                          </div>
                          <div className="ProjectPreview">
                            <h5>Customer Name :</h5>
                            {this.state.SelectedCustomerName}
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
                            <tbody id="DynamicRow">

                            </tbody>
                            <tbody>
                              <tr>
                                <td colSpan={2}></td>
                                <td>
                                  {this.state.TotalNoQuantity}
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
            </div>
            <div className="row top-save ">
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-no-bg" value="Cancel" onClick={() => this.HidePreview()} />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="OkAlert">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Cancel the Process
            </div>
            <div className="lightbox-body">
              <label className="AlertText">  Are you sure you want to delete this invoice </label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.DeleteAlert()} value="Yes" />
                <input type="submit" className="btn btn-no-bg" onClick={() => this.StopProcess()} value="Cancel" />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
