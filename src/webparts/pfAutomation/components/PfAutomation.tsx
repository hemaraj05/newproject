import * as React from 'react';
import styles from './PfAutomation.module.scss';
import { IPfAutomationProps } from './IPfAutomationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ImageFit } from 'office-ui-fabric-react';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as $ from 'jquery';
import { Web } from "@pnp/sp/webs";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
$('html').css("visibility", "hidden");

setTimeout(function(){
  $('html').css("visibility","visible");
  $('html').addClass('loading-in-progress');
},1200);
export interface IStates {
  UserPicture: string;
  UserName: string;
  Designation: string;
}

export default class PfAutomation extends React.Component<IPfAutomationProps, IStates, {}> {
  public constructor(props: IPfAutomationProps, state: IStates) {
    super(props);
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/style1.css");
    SPComponentLoader.loadCss("https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/CSS/ResponsivePowerFactor.css");

    this.state = {
      UserPicture: "",
      UserName: "",
      Designation: ""

    }
  }
  handleClick = () => {
    location.href = `${this.props.siteurl}/SitePages/PF-Create.aspx`;
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
    }, 4000);
    setTimeout(function(){
      $('html').css("visibility","visible");//.show();
      $('html').removeClass('loading-in-progress');
    },4000);
    this.GetCurrentUserName();
    this.GetProfile();
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

        reacthandler.setState({
          UserName: Name,
          Designation: Designation
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
    });
  }


  public render(): React.ReactElement<IPfAutomationProps> {
    var reactHandler = this;
    return (
      <div className={styles.pfAutomation}>
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
                      <li> <a href="#" onClick={() => window.open("https://taqeef.sharepoint.com/sites/OPR/_layouts/15/people.aspx?MembershipGroupId=56","_blank")}> <i className="fa fa-cog" aria-hidden="true"></i>
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
            </div>
          </div>
        </header>
        <div className="banner home-banner relative">

        </div>
        <div className="products-sections sec">
          <div className="section-heade">
            <h2 className="text-center">  POWER FACTOR LETTERS​  </h2>
          </div>
          <div className="container">
            <div className="taquuf-opertional-portal taquuf-opertional-portal-two">
              <div className="row">

                <div className="col-md-6">
                  <div className="taquuf-opertional-inner">
                    <a href="#" data-interception='off' onClick={() => reactHandler.handleClick()}>   <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/t2.png" alt="image" />
                      <h3>  Create New
                        Power Factor </h3>   </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="taquuf-opertional-inner">
                    <a href="https://taqeef.sharepoint.com/sites/OPR/ACModel/SitePages/ViewPowerFactor.aspx" data-interception='off'>  <img src="https://taqeef.sharepoint.com/sites/OPR/ACModel/SiteAssets/img/img/t3.png" alt="image" />
                      <h3>  View Power
                        Factor Letters </h3> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}
