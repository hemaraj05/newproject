import * as React from 'react';
import styles from './AdminPortal.module.scss';
import { IAdminPortalProps } from './IAdminPortalProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import "@pnp/sp/profiles";
import * as $ from 'jquery';
import "@pnp/sp/webs";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { sp } from "@pnp/sp";
import "@pnp/sp/folders";
import "@pnp/sp/files";
$('html').css("visibility", "hidden");

setTimeout(function(){
  $('html').css("visibility","visible");
  $('html').addClass('loading-in-progress');
},1200);

export interface IAdminPortalState {
  UserPicture: string;
  UserName: string;
  Designation: string;
  Email: string;
  SelectedFileName: string;
}

export default class AdminPortal extends React.Component<IAdminPortalProps, IAdminPortalState, {}> {
  private textInput;
  public constructor(props: IAdminPortalProps, state: IAdminPortalState) {
    super(props);
    //const inputRef = React.useRef();
    //this.inputRef = React.createRef();
    this.textInput = React.createRef();
    this.OkBulkAlert = this.OkBulkAlert.bind(this);
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");
    SPComponentLoader.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
    this.state =
    {
      UserPicture: "",
      UserName: "",
      Designation: "",
      Email: "",
      SelectedFileName:"",
    }
  }
  public componentDidMount() {
    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    },1800);

    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    },2500);
    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 3000);
    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    }, 3500);
    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    },4000);
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

  public ShowUpload = () => {
    $('#Upload').show();
    $('#DivMasterDataSection').hide();

  }
  public ShowBulk = () => {
    $('#DivMasterDataSection').show();
    $('#Upload').hide();

  }

  public SuccessModel() {
    $('#AlertModel').hide();

  }
  public OkAlert() {
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


  }
  OkBulkAlert() {
    $('#SucessBulk').hide();
    $('#Upload').hide();
    this.textInput.current.value ="";
  }
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
  public async UploadFiletoDocumentLibrary() {
    //var files = this._input.files;

      if (this.ValidateFile(this.state.SelectedFileName)) {
        var files = (document.getElementById('ACMasterDataUpload') as HTMLInputElement).files;
        var file = files[0];
        let newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
        await newweb.getFolderByServerRelativeUrl("/sites/OPR/ACModel/PFMasterData")
          .files.add(file.name, file, true)
          .then((data) => {

            $('#SucessBulk').show();
            file.name.split('.').pop();

          })
          .catch((error) => {

          });
      }
  }
  private async SaveUpload() {
    if (this.ErrorValidation()) {
      const newweb = Web("https://taqeef.sharepoint.com/sites/OPR/ACModel");
      await newweb.lists.getByTitle('PFMaster').items.add({
        Title: $("#ddlBrand").val(),
        NavCode: $("#Model").val().toString(),
        Modelname: $("#ModelName").val(),
        Rated_x0020_Capacity_Btu_h_T3: $("#RatedCapacity").val(),
        IndoorPowerInput_kW_T3: $("#IndoorInput").val(),
        OutdoorPowerInput_kW_T3: $("#OutdoorInput").val(),
        Rated_Power_Factor_T3_x0020_: $("#RatedPowerFactor").val(),
        IndoorUnit_V_Ph_Hz: $("#IndoorUnit").val().toString(),
        OutdoorUnit_V_Ph_HZ_: $("#OutdoorUnit").val().toString(),


      }).then(i => {
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
      })
    }
  }

  public ValidateFile(FileName)
  {
    this.setState({ SelectedFileName: FileName });
    //var File = document.getElementById('ACMasterDataUpload');
    //var UploadData=$('#ACMasterDataUpload').val();
    let status = true;
    var filename=FileName;
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
    if (status==true && res == "xlsx")
    {
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

  }
  public ErrorValidation() {
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
  }

  public render(): React.ReactElement<IAdminPortalProps> {
    return (
      <div className={styles.adminPortal}>
        <div className="relative"></div>
        <header className="clearfix">
          <div className="container">
            <div className="header-inner">
              <div className="logo">
                <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/PFAutomation.aspx"> <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/logo.png" alt="logo" />  </a>
              </div>
              <div className="cart relative">

                <div className="user-profile-details">
                  <div className="user-profile-name">
                    Welcome   <p>  {this.state.UserName} </p>
                  </div>
                  <img src={this.state.UserPicture} alt="image" />
                </div>

                <div className="login-details-man">
                  <div className="login-details-man-inner">
                    <ul>
                        <li> <a href="#" onClick={() => window.open("https://taqeef.sharepoint.com/sites/OPR/_layouts/15/people.aspx?MembershipGroupId=56","_blank")}> <i className="fa fa-cog" aria-hidden="true"></i>
                        Settings </a> </li>
                      <li> <a href="https://login.microsoftonline.com/common/oauth2/logout">  <i className="fa fa-sign-out" aria-hidden="true"></i>
                        Logout </a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="banner admin-banner relative">

          <div className="container">   <h2> Welcome Admin  </h2> </div>
        </div>



        <div className="admin-section-wrap clearfix">
          <div className="admi-setion-left">
            <ul>
              <li className="active">
                <a href="#" className="clearfix">
                  <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/m1.png" alt="image" className="overimgs" />   <img className="hoverimgs" src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/m1_h.svg" alt="image" />    <span>Power Factor</span>
                </a>
                <ul>
                  <li className="liSparepartAdd"> <a href="#" onClick={() => this.ShowUpload()}> Add </a> </li>
                  <li className="liSparepartBulk"> <a href="#" onClick={() => this.ShowBulk()}>  Bulk Upload </a> </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="admin-section-right" id="Upload">
            <h2> Add Power Factor </h2>
            <div className="row DivNoteRequiredField ProdAdmin">
              <div className="col-md-12 text-right">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                Please fill all the fields.
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Brand </label>
                  <div className="txtStyle">
                    <select id="ddlBrand" className="form-control">
                      <option> General</option>
                      <option>Midea</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Model </label>
                  <div className="txtStyle">
                    <input id="Model" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Model Name </label>
                  <div className="txtStyle">
                    <input id="ModelName" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Rated Capacity (Btu/h)(T3) </label>
                  <div className="txtStyle">
                    <input id="RatedCapacity" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Indoor Power Input (KW)T3  </label>
                  <div className="txtStyle">
                    <input id="IndoorInput" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Outdoor Power Input (KW)T3 </label>
                  <div className="txtStyle">
                    <input id="OutdoorInput" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Rated Power Factor (T3)</label>
                  <div className="txtStyle">
                    <input id="RatedPowerFactor" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Indoor Unit (V/Ph/Hz) </label>
                  <div className="txtStyle">
                    <input id="IndoorUnit" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group relative">
                  <label> Outdoor Unit (V/Ph/Hz) </label>
                  <div className="txtStyle">
                    <input id="OutdoorUnit" className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <button className="btn btn-primary" onClick={() => this.SaveUpload()}><span>Submit</span></button>
              </div>
            </div>
          </div>
          <div className="admin-section-right" id="DivMasterDataSection">
            <h2> Bulk Upload </h2>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group relative">
                  <label>Master Data File </label>
                  <input type="file" ref={this.textInput} name="myFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" id="ACMasterDataUpload" onChange={(e)=>this.ValidateFile(e.target.files[0].name)} />
                </div>
              </div>
              <div className="col-md-7 text-right">
                <div className="form-group relative">
                  <a className="atagtemp" download="" href="https://taqeef.sharepoint.com/sites/OPR/ACModel/Shared%20Documents/TemplatePF.xlsx">
                    <i className="fa fa-download" aria-hidden="true"></i>Download Template</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <span className="Notedesign">
                  <h5>Note:</h5>
                  <p>Please download the template, add the rows in designated columns and upload. Please do not change the column headers. Maximum rows allowed is 200.</p></span>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div id="diverrormsgACMasterData" role="alert" className="alert alert-danger">Please select Excel file
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div id="diverrormsgACMasterDataEmpty" role="alert" className="alert alert-danger">Please select the master data file
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary" onClick={()=>this.UploadFiletoDocumentLibrary()}><span>Submit</span></button>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="AlertModel">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Error
            </div>
            <div className="lightbox-body">
              <label className="AlertText">All fields are mandatory</label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.SuccessModel()} value="Ok" />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="Sucess">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Sucess
            </div>
            <div className="lightbox-body">
              <label className="AlertText"> Sucessfully Created </label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={() => this.OkAlert()} value="Ok" />
              </div>
            </div>
          </div>
        </div>
        <div className="lightbox open" id="SucessBulk">
          <div className="lightbox-inner-contents">
            <div className="lightbox-title">
              Sucess
            </div>
            <div className="lightbox-body">
              <label className="AlertText"> Sucessfully Created </label>
              <div className="col-md-12 text-center m-b-10">
                <input type="submit" className="btn btn-primary" onClick={this.OkBulkAlert} value="Ok" />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
