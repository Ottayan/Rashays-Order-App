/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  AsyncStorage,
  Animated,
  Easing,
  AppState,
  Linking,
  Platform
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/Ionicons';

import Spinner from 'react-native-loading-spinner-overlay';

// import { FlatGrid } from 'react-native-super-grid';
import Moment from 'moment';

// import Toast, { DURATION } from 'react-native-easy-toast';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

import Shimmer from 'react-native-shimmer';

// import LinearGradient from 'react-native-linear-gradient';

import { Container, Header, Content, Form, Item, Input, Card, Label, Picker, Icon, Toast, Root } from 'native-base';

// import CountDown from 'react-native-countdown-component';
import SelectableFlatlist, { STATE } from 'react-native-selectable-flatlist';
import CheckBox from 'react-native-check-box';

import DatePicker from 'react-native-datepicker'

import DeviceInfo from 'react-native-device-info';
import { NetworkInfo } from "react-native-network-info";

import FastImage from 'react-native-fast-image';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import QRCodeScanner from 'react-native-qrcode-scanner';

import { fcmService } from './firebase/FCMService';

import { WebView } from 'react-native-webview';

let Person_MemberCard = "";
let Person_confirmmobile = "";
let Person_FirstName = "";
let Person_LastName = "";
let Person_Mobile = "";
let Person_Email = "";
let Person_cardno = "";
let Person_referenceno = "";

let DineIn_FirstName = "";
let DineIn_LastName = "";
let DineIn_Mobile = "";
let DineIn_Email = "";

let AdditionalMessage = "";
let CouponCode = "";
let time = "";

let cardName = "";
let cardNumber = "";
let cardCvn = "";
let cardexpirymonth = "";
let cardexpiryyear = "";
let totalDuration = '';
// let showtimer = false;

let DeliveryApptno = "";
let DeliveryStreet = "";
let DeliverystNo = "";
let DeliverySuburb = "";
let DeliveryState = "";
let DeliveryPostcode = "";
let DeliveryTime = "";

let BookingpeopleId = 0;
let BookingHourFrom = '0';
let BookingHourTo = '';
let BookingStoreId = "0";

let QR_booking_peopleId = 0;

let hideandshowDeliveryonColor = false;

let Selected_Modifiers_Array = [];

let OfferArrayList = [];

let b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
let b64padchar = "=";

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace("/++[++^A-Za-z0-9+/=]/g", ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } };

const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// let url = "http://order.vidhaninfotech.com/api/";
// let url = "http://oldorder.vidhaninfotech.com/api/";
// let url = "https://order.rashays.com/api/";
// let url = "https://rashaysorderonline-uat.azurewebsites.net//api/";
let url = "https://rashaysorderonline-uat.azurewebsites.net/api/";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      OpenWebView: false,

      SlideInLeft: new Animated.Value(0),
      SlideInTop: new Animated.Value(0),

      drawer: false,

      OutletArray: [],
      OutletArraysearch: [],
      MenuListArray: [],
      ProductListArray: [],
      ModifiersGroupListArray: [],
      ProductModifierByGroupListArray: [],
      DefaultModifiersListArray: [],
      OrderListArray: [],
      TraddingHoursListArray: [],
      PreOrderHoursListArray: [],
      GroupWithModifiersListtArray: [],
      GetMemberOrderHistoryArrayList: [],
      GetMemberCardArrayList: [],

      MemberpointsandorderhistoryArrayList: [],
      pageno: 0,
      apiloding: false,

      PaymentSuccessobj: {},

      CardDetails: "",

      memberdetailsobj: {},
      getmemberdetail: false,
      getdata: false,

      OrderTotalAmount: 0,

      spinnerOutlet: false,
      spinnerModifiers: false,
      spinnerOrderList: false,
      persondetails: false,
      TreddingHour: false,
      fillorderdetails: false,
      creaditcardview: false,
      openoutlet: false,

      preorderpopup: false,
      oprnpreordertimepopup: false,
      oprnpreordertime: false,
      oprnpreordertimeArrayList: [],
      preordertime: '',

      loadMenus: false,
      loadProducts: false,

      networkconnection: false,

      payloader: false,
      paymentSuccessfull: false,
      Iscultleryrequired: false,

      deliverytimepopup: false,
      deliveryAsap: true,
      selectdeliveryasap: true,
      pickupButtonClick: false,

      Success_notification: false,
      Suggestion_notification: false,

      success_message: '',
      suggestion_message: 'FIRSTNAME REQUIRED.',

      splshShow: true,

      gstAmount: 0,
      promoAmount: 0,
      promoCode: "",
      TakeAwayDiscount: 0,
      OfferName: "",
      OfferAmount: 0,

      outletId: 0,
      productId: 0,

      outletAddress: "",
      outletName: "",
      ProductName: "",
      menuImage: "",
      menuName: "",
      headerOutletName: "Find A RASHAYS Near You",

      screenchange: "",

      slectmdofiersGroup: "",
      selectOrderTime: "later",

      ProductPrice: 0,
      ProductQtychangePrice: 0,

      MenuRefresh: 1,
      UniqueKey: 1,
      uniqueValue: 1,
      accordinrefreshkey: 1,

      Modifiergroup_MaxQty: 0,
      qty: 1,

      salesSummaryId: 0,

      PreOrderTimeValue: "",

      OrderTimeValue: "",
      OrderTrenddingTimeValue: "",

      productimage: '',
      productdesc: "",

      totalDuration: 0,

      deliveryapptno: '',
      deliverystno: '',
      deliveryStreet: '',
      deliverypincode: '',
      deliveryarea: '',
      deliverystate: '',
      getnearstore: true,

      text: '',
      DeliveryTrendingTimeArrayList: [],
      DeliveryTimevalue: "",

      DeliveryApptno: "",
      DeliveryStreet: "",
      DeliverySuburb: "",
      DeliveryState: "",
      DeliveryPostcode: "",
      DeliveryTime: "",

      IsDeliveryOrPickup: "",
      DeliveryFees: 0,

      searchboxclick: false,

      showdeliveryButton: false,
      showpickupButton: false,
      showPreorder: false,

      PreOrderdate: "",

      IsPreorder: "false",
      IsPreorderDeliveryOrPickup: "",

      ShowStartAgainButton: false,

      showapiloader: false,

      TwoButtonShowinDeliverypopup: false,
      time: "",
      showtimer: false,

      Closestorename: '',

      MemberEmail: '',
      MemberPassword: "",

      welcomebackview: false,
      welcomebackname: "",
      Memberscreen: false,
      LoginScreen: false,
      PastOrderScreen: false,
      MemberCardScreen: false,
      MyOfferScreen: false,
      OfferArrayList: [],
      offerrefresh: 1,

      selectOrderLable: "current",
      LoginMember: "",

      openqrcode: false,
      scanqr: "false",

      timefortrendingour: "",

      Dine_In_CustomerInformation_Popup: false,

      BookTable: false,
      Bookingpopup: false,

      BookingStorelist: [],
      BookingDate: "",
      BookingTime: [],
      tableId: '',
      BookingPeopel: [
        { lable: '1 people', value: 1 },
        { lable: '2 people', value: 2 },
        { lable: '3 people', value: 3 },
        { lable: '4 people', value: 4 },
        { lable: '5 people', value: 5 },
        { lable: '6 people', value: 6 },
        { lable: '7 people', value: 7 },
        { lable: '8 people', value: 8 },
        { lable: '9 people', value: 9 },
        { lable: '10 people', value: 10 }
      ],

      Bookingfname: '',
      Bookinglname: '',
      Bookingemail: '',
      Bookingphone: '',
      Bookingnote: '',

      ParkingToPickup: "false",

      OfferApplyPopup: false,

      Offername: "",

      OfferFirstName: "",
      OfferLastName: "",
      OfferEmail: "",
      OfferMobileNo: "",
      OfferOtp: "",

      ApiresponseOtp: "",

      showOfferOtpbox: false,

      editaddress: true,

      Dashboard: false,
      Profile: false,
      JoinNowscreen: false,
      OnlineOrder: false,

      ShowOffers: false,

      Profile_firstName: "",
      Profile_LastName: "",
      Profile_Email: "",
      Profile_Contact: "",
      Profile_Address: "",
      Profile_Postcode: "",
      Profile_BirthDate: Moment().format('DD.MM.YYYY'),
      Profile_Password: "",
      Profile_Gender: "",
      Profile_Restaurant: "",

      Edit_Profile: false,

      dodo: '1',

      MobilenoOnshow_Message: false,

      RemainingPoins_memberPoints: 0,
      NeededPoints_memberPoints: 0,
      VoucherPoints_memberPoints: 0,
      TotalPoints_memberPoints: 0,

      textInputHolder: 0,
      captchaHolder: 0,
      randomNumberOne: 0,

      Show_Captcha: false,

      Offer_Details: {},
      Offer_Appiled: false,

      Offer_ID: 0,

      OtpTimer: 59,

      Offer_Order_Type: "",

      PreOrderStoreListAray: [],

      cartrefresh: 1,

      pre_order_ordertype_selection: false,

      Encrypt_Order_Id: "",

      OrderTrack: false,

    };
  }

  componentDidMount() {

    this.setState({ OnlineOrder: false });
    AsyncStorage.setItem('SalesSummaryId', "");
    AsyncStorage.setItem('OfferId', "");
    this.setState({ ShowStartAgainButton: false });

    this.refresh = setInterval(() => {

      this.setState(({ offerrefresh }) => ({
        offerrefresh: offerrefresh + 1
      }))

    }, 1000)

    // this.fcmNotification = fcmService
    fcmService.register(this.onRegister, this.onNotification, this.onOpenNotification)

    this.setState({ splshShow: true });

    setTimeout(() => {
      this.setState({ splshShow: false });
    }, 5000);

    this.setState({ Dashboard: true });

    BackHandler.addEventListener('hardwareBackPress', this.backAction);

    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        // Alert.alert("You are online!");
        this.setState({ networkconnection: false });
      } else {
        // Alert.alert("You are offline!");
        // this.setState({ spinnerOutlet: false });
        this.setState({ spinnerOrderList: false });
        this.setState({ persondetails: false });
        this.setState({ TreddingHour: false });
        this.setState({ fillorderdetails: false });

        this.setState({ networkconnection: true });
        this.setState({ showapiloader: false });

      }
    });

    AsyncStorage.getItem("SalesSummaryId").then((SalesSummaryId) => {
      if (SalesSummaryId !== null) {
        this.setState({ pickupButtonClick: true })
        this.setState({ ShowStartAgainButton: true });
      }
      else {
        this.setState({ ShowStartAgainButton: false });

      }
    }).done();

    AsyncStorage.getItem("LOGIN").then((value) => {
      if (value != null) {
        this.setState({ LoginMember: value });
      }
      else {
        this.setState({ LoginMember: "" });
      }
    }).done();

    AsyncStorage.getItem("MemberDetails").then((MemberDetails) => {
      if (MemberDetails != null) {
        let responseJson = JSON.parse(MemberDetails);
        Person_FirstName = responseJson.FirstName;
        Person_LastName = responseJson.LastName;
        Person_Email = responseJson.Email;
        Person_Mobile = responseJson.MobileNumber;
        Person_cardno = "";

        if (responseJson.MemberCardId == 0) {
          this.setState({ getdata: false });
          this.setState({ getmemberdetail: false });
        }
        else {
          this.setState({ getdata: false });
          this.setState({ getmemberdetail: false });
        }

      } else {
        Person_FirstName = "";
        Person_LastName = "";
        Person_Email = "";
        Person_Mobile = "";
        Person_cardno = "";
      }

    }).done();

    AsyncStorage.getItem("IsPreorder").then((value) => {
      if (value != null) {
        this.setState({ IsPreorder: value })
      }
    }).done();

    // AsyncStorage.getItem("Offer_Order_Type").then((value) => {
    //   if (value != null) {
    //     this.setState({ Offer_Order_Type: value });
    //   }
    //   else {
    //     this.setState({ Offer_Order_Type: "" });
    //   }
    // }).done();

    // this.setState({ showapiloader: true });

    fetch(url + 'Mobile/AppStatusCheckPicUpDeliveryPreOrder?', {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ showdeliveryButton: responseJson.record.IsDelivery });
          this.setState({ showpickupButton: responseJson.record.IsPickUp });
          this.setState({ showPreorder: responseJson.record.IsPreOrder });

          this.setState({ showapiloader: false });
        }
        else {
          this.setState({ showapiloader: false });
        }
      })
      .catch((error) => {
        this.setState({ showapiloader: false });
        console.error(error);
      });

    this.GetOffer();

    // AsyncStorage.getItem("OutletId").then((OutletId) => {
    //   AsyncStorage.getItem("OutletName").then((OutletName) => {
    //     AsyncStorage.getItem("OutletAddress").then((OutletAddress) => {

    //       if (OutletId !== null && OutletName !== null) {
    //         this.setState({ loadMenus: true });
    //         this.Get_Menu_from_api(OutletId);
    //         this.setState({ outletId: parseInt(OutletId) })
    //         this.setState({ outletName: OutletName });
    //         this.setState({ headerOutletName: OutletName });
    //         this.setState({ outletAddress: OutletAddress })
    //         this.setState({ openoutlet: false });

    //         if (this.state.IsPreorder == "false") {
    //           fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + OutletId + '&OrderDate=' + Moment().format("YYYY-MM-DD hh:mm A"), {
    //             headers: {
    //               "Accept": "application/json",
    //               "ApiToken": "imnyUfpf"
    //             },
    //           })
    //             .then((response) => response.json())
    //             .then((responseJson) => {
    //               // console.log(responseJson);
    //               if (responseJson.success == "1") {
    //                 if (responseJson.data.length == 0) {
    //                   this.setState({ Closestorename: OutletName });
    //                   this.setState({ showtimer: true });
    //                   this.setState({ openoutlet: false });
    //                   this.StartAgainbutton_api_call();
    //                 }
    //               }
    //               else {
    //                 this.setState({ Closestorename: OutletName });
    //                 this.setState({ showtimer: true });
    //                 this.setState({ openoutlet: false });
    //                 this.StartAgainbutton_api_call();
    //               }
    //             })
    //             .catch((error) => {
    //               console.error(error);
    //             });
    //         }
    //         // this.Get_PreOrderHours_from_api(Moment().format("YYYY-MM-DD hh:mm A"));
    //       }
    //       else {
    //         // this.setState({ openoutlet: true });
    this.setState({ loadMenus: true });
    //       }

    //     }).done();
    //   }).done();
    // }).done();

    this.Get_OredrList_from_api();

    AsyncStorage.getItem("show_captcha").then((value) => {
      if (value == "true") {
        this.setState({ Show_Captcha: true })
      }
      else {
        this.setState({ Show_Captcha: false })
      }
    }).done();

    AsyncStorage.getItem("MemberName").then((value) => {
      if (value != null) {
        this.setState({ welcomebackname: value })
      }
    }).done();

    AsyncStorage.getItem("scanqr").then((value) => {
      if (value != null) {
        this.setState({ scanqr: value })
      }
    }).done();

    AsyncStorage.getItem("ParkingToPickup").then((value) => {
      this.setState({ ParkingToPickup: value });
    }).done();

    AsyncStorage.getItem("PreOrderdate").then((value) => {
      if (value != null) {
        this.setState({ PreOrderdate: value })
      }
    }).done();

    AsyncStorage.getItem("DeliveryApptNo").then((apptno) => {
      if (apptno !== null) {
        DeliveryApptno = apptno;
      }
    }).done();

    AsyncStorage.getItem("DeliveryStreet").then((DeliveryStret) => {
      if (DeliveryStret !== null) {
        DeliveryStreet = DeliveryStret;
        // hideandshowDeliveryonColor = true;
      }
    }).done();

    AsyncStorage.getItem("DeliverystNo").then((DeliverstNo) => {
      if (DeliverstNo !== null) {
        DeliverystNo = DeliverstNo;
      }
    }).done();

    AsyncStorage.getItem("DeliverySuburb").then((DeliverySub) => {
      if (DeliverySub !== null) {
        DeliverySuburb = DeliverySub;
      }
    }).done();

    AsyncStorage.getItem("DeliveryState").then((DeliverState) => {
      if (DeliverState !== null) {
        DeliveryState = DeliverState;
      }
    }).done();

    AsyncStorage.getItem("DeliveryPostcode").then((DeliveryPost) => {
      if (DeliveryPost !== null) {
        DeliveryPostcode = DeliveryPost;
      }
    }).done();

    AsyncStorage.getItem("DeliveryTime").then((DeliverTime) => {
      // if (DeliverTime !== null) {
      DeliveryTime = DeliverTime;
      // }
    }).done();

  }

  onRegister(token) {
    // console.log("Token = ", token);
  }

  onNotification(notify) {
    // console.log("onNotification = ", notify);

    const channelObj = {
      channelId: "Samplechanel1",
      channelName: "Rashays",
      channelDes: "OrderApp"
    }

    if (Platform.OS === 'android') {
      const channel = fcmService.buildChannel(channelObj);
    }

    const ts = Moment().format('x');

    const buildNotify = {
      channelId: "Samplechanel1",
      dataId: ts,
      title: notify._title,
      content: notify._body,
      sound: 'default',
      data: notify._data,
      colorBgIcon: '#1e262d',
      largeIcon: 'ic_launcher_round',
      smallIcon: 'ic_launcher_round',
      vibrate: true
    }

    if (notify._data.title !== "Delete") {

      const notification = fcmService.buildNotification(buildNotify)
      fcmService.displayNotification(notification)

    }

    // this.GetOffer();

    fetch(url + 'Mobile/AppGetOfferList', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        OfferArrayList = [];
        OfferArrayList = responseData.data;


        //  this.refresh();


      })
      .catch((error) => {
        console.error(error);
        // this.setState({ showapiloader: false });
      });

  }

  onOpenNotification(notify) {
    // console.log("onOpenNotification = ", notify);
    // this.GetOffer();
  }

  GetTrendingHourfromStore() {
    AsyncStorage.getItem("OutletId").then((OutletId) => {
      // console.log(url + 'Mobile/AppGetTraddingHours?OutletId=' + OutletId + '&OrderDate=' + date)

      fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + OutletId + '&OrderDate=' + Moment().format("YYYY-MM-DD hh:mm A"), {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {
            if (responseJson.data.length == 0) {
              this.setState({ Closestorename: item.OutletName });
              this.setState({ showtimer: true });
              this.setState({ openoutlet: false });
              this.StartAgainbutton_api_call();
            }
          }
          else {
            this.setState({ Closestorename: item.OutletName });
            this.setState({ showtimer: true });
            this.setState({ openoutlet: false });
            this.StartAgainbutton_api_call();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }).done();
  }

  componentWillUnmount() {

    BackHandler.removeEventListener("hardwareBackPress", this.backAction);

    clearInterval(this.clockCall);
  }

  Get_PreOrderHours_from_api(date) {
    AsyncStorage.getItem("OutletId").then((OutletId) => {
      //  console.log(url + 'Mobile/AppGetTomorrowTraddingHours?OutletId=' + OutletId + '&PreOrderDate=' + date)

      fetch(url + 'Mobile/AppGetTomorrowTraddingHours?OutletId=' + OutletId + '&PreOrderDate=' + date, {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //  console.log(responseJson)
          if (responseJson.success == "1") {
            // console.log("hour ==", responseJson.data.length)
            if (responseJson.data.length == 0) {
              this.setState({ PreOrderHoursListArray: responseJson.data });
              this.setState({ TraddingHoursListArray: responseJson.data });

              // this.Get_PreOrderHours_from_api(Moment().add(1, 'day').format("YYYY-MM-DD hh:mm A"));
              // this.setState({ preorderpopup: true });
            }
            else {
              this.setState({ TraddingHoursListArray: responseJson.data });
              // this.setState({ PreOrderTimeValue: responseJson.data[0].HourValue });
            }
          }
          else {
            // this.Get_PreOrderHours_from_api(Moment().add(1, 'day').format("YYYY-MM-DD hh:mm A"));
            // this.setState({ preorderpopup: true });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }).done();
  }

  Get_Group_wise_modifier_from_api(productid) {

    AsyncStorage.getItem("OutletId").then((OutletId) => {
      //  console.log(url + 'Mobile/AppGetModifierGroupNProduct?OutletId=' + OutletId + '&ProductId=' + productid)
      fetch(url + 'Mobile/AppGetModifierGroupNProduct?OutletId=' + OutletId + '&ProductId=' + productid, {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson.data)
          if (responseJson.success == "1") {
            this.setState({ GroupWithModifiersListtArray: responseJson.data })
            // this.setState({ accordinrefreshkey: parseInt(this.state.accordinrefreshkey) + 1 })
          }
          this.setState({ showapiloader: false });
        })
        .catch((error) => {
          console.error(error);
        });
    }).done();

  }

  Checknet_connection() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        // Alert.alert("You are online!");
        this.setState({ networkconnection: false });
      } else {
        // Alert.alert("You are offline!");
        this.setState({ networkconnection: true });
      }
    });
  }

  Get_modifiers_group_from_api = (ProductId) => {
    fetch(url + 'Mobile/AppGetModifierGroups?OutletId=' + this.state.outletId + '&ProductId=' + ProductId, {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ ModifiersGroupListArray: responseJson.data });
          if (responseJson.data.length >= 1) {
            this.setState({ slectmdofiersGroup: responseJson.data[0].ModifierGroupId });
            this.Get_productModifiers_by_group_from_api(ProductId, responseJson.data[0].ModifierGroupId);
            this.setState({ Modifiergroup_MaxQty: responseJson.data[0].MaxQty });
          }
          else {
            let da = [];
            this.setState({ slectmdofiersGroup: "" });
            this.setState({ ProductModifierByGroupListArray: da });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  Get_defaultModifiers_from_api = (ProductId) => {
    fetch(url + 'Mobile/AppGetMinimumModifiers?ProductId=' + ProductId, {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ DefaultModifiersListArray: responseJson.data });
        }
        else {
          this.setState({ DefaultModifiersListArray: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  Get_productModifiers_by_group_from_api = (ProductId, modifiergroupid) => {
    fetch(url + 'Mobile/AppGetProductModifierByGroupId?myApiToken=imnyUfpf&outletId=' + this.state.outletId + '&productId=' + ProductId + '&modifierGroupId=' + modifiergroupid)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ ProductModifierByGroupListArray: responseJson.data });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  backAction = () => {

    if (this.state.showapiloader == true) {
    }
    else if (this.state.openqrcode == true) {
      this.setState({ openqrcode: false });
      this.setState({ Bookingpopup: true });
    }
    else if (this.state.drawer == true) {
      Animated.parallel([
        Animated.timing(this.state.SlideInLeft, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        })
      ]).start();
      setTimeout(() => {
        this.setState({ drawer: false });
      }, 200);
    }
    else if (this.state.OnlineOrder == true) {
      if (this.state.OrderTrack == true) {
        this.setState({ OrderTrack: false });
      }
      else if (this.state.paymentSuccessfull == true) {
        this.setState({ paymentSuccessfull: true });
      }
      else if (this.state.OrderListArray.length == 0) {
        this.setState({ showtimer: false });
        this.setState({ OnlineOrder: false });
        this.StartAgainbutton_api_call();
      }
      else {
        Alert.alert("RASHAYS", "Your cart will be reset, OK?", [
          {
            text: "No",
            onPress: () => null,
            style: "cancel"
          },
          {
            text: "YES", onPress: () => {
              this.setState({ showtimer: false });
              this.setState({ OnlineOrder: false });
              this.StartAgainbutton_api_call();
            }
          }
        ]);
      }
      // this.setState({ OnlineOrder: false });
    }
    else if (this.state.Memberscreen == true) {
      this.setState({ Profile: false });
      this.setState({ Dashboard: true });
      this.setState({ LoginScreen: false });
      this.setState({ Memberscreen: false });
      this.setState({ BookTable: false });
    }
    else if (this.state.Profile == true) {
      this.setState({ Profile: false });
      this.setState({ Dashboard: true });
      this.setState({ LoginScreen: false });
      this.setState({ Memberscreen: false });
      this.setState({ BookTable: false });
    }
    else if (this.state.BookTable == true) {
      if (this.state.LoginMember == "") {
        this.setState({ BookTable: false });
      }
      else {
        this.setState({ BookTable: false });
        this.setState({ Dashboard: true });
        this.setState({ Profile: false });
        this.setState({ LoginScreen: false });
        this.setState({ Memberscreen: false });
      }

    }
    else if (this.state.JoinNowscreen == true) {
      this.setState({ JoinNowscreen: false });
    }
    else if (this.state.MyOfferScreen == true) {
      this.setState({ MyOfferScreen: false });
    }
    else if (this.state.LoginScreen == true) {
      this.setState({ LoginScreen: false });
    }
    else if (this.state.Dashboard == true) {
      Alert.alert("RASHAYS", "Are you sure you want to Exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
    }

    return true;
  };

  Get_pickup_Store() {
    this.setState({ showapiloader: true });
    this.setState({ OutletArray: [] });
    this.setState({ OutletArraysearch: [] });
    fetch(url + 'Mobile/AppGetAllStoreListNew?', {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ OutletArray: responseJson.data });
          this.setState({ OutletArraysearch: responseJson.data });
          this.setState({ showapiloader: false });
        }
        else {
          this.setState({ showapiloader: false });
        }
      })
      .catch((error) => {
        this.setState({ showapiloader: false });
        console.error(error);
      });
  }

  Get_PreOrder_Store(date) {
    this.setState({ PreOrderStoreListAray: [] });
    this.setState({ showapiloader: true });
    fetch(url + 'Mobile/GetPreOrderStoreList?PreOrderDate=' + Moment(date, "DD-MM-YYYY").format("MM-DD-YYYY"), {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.success == "1") {
          this.setState({ PreOrderStoreListAray: responseJson.data });

          this.setState({ OutletArray: responseJson.data });
          this.setState({ OutletArraysearch: responseJson.data });

          this.setState({ showapiloader: false });
        }
        else {
          this.setState({ showapiloader: false });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ showapiloader: false });
      });

  }

  Get_Menu_from_api = (id) => {
    this.setState({ screenchange: "menu" });
    // AsyncStorage.getItem("OutletName").then((OutletName) => {
    //   this.setState({ headerOutletName: OutletName });
    // }).done();
    fetch(url + 'Mobile/AppGetMenuListNew?OutletId=' + id, {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState(({ uniqueValue }) => ({
          uniqueValue: uniqueValue + 1
        }))
        if (responseJson.success == "1") {
          this.setState({ MenuListArray: responseJson.data });
          this.setState({ loadMenus: false });
        }
        else {
          this.setState({ loadMenus: false });
        }
      })
      .catch((error) => {
        this.setState({ loadMenus: false });
        console.error(error);
      });
  }

  Get_Product_from_api = (Id) => {
    this.setState({ loadProducts: true });
    this.setState({ screenchange: "product" });

    AsyncStorage.getItem("DeliveryTime").then((DeliveryTime) => {
      fetch(url + 'Mobile/AppMyProductListNew?OutletId=' + this.state.outletId + '&MenuGroupId=' + Id +
        '&IsDeliveryOrPickup=' + (DeliveryTime == null ? "PickUp" : "Delivery") + '&IsPreOrder=' + (this.state.IsPreorder == "true" ? "Yes" : "No"), {
        // fetch(url + 'Mobile/AppGetProductList?OutletId=' + this.state.outletId + '&MenuGroupId=' + Id, {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          if (responseJson.success == "1") {
            this.setState({ ProductListArray: responseJson.data });
            this.setState({ loadProducts: false });
          }
          else {
            this.setState({ loadProducts: false });
          }
        })
        .catch((error) => {
          this.setState({ loadProducts: false });
          // console.log(error);
        });
    }).done();
  }

  onValueChange = (itemValue) => {
    this.setState({ outletId: itemValue });

    AsyncStorage.setItem('OutletId', itemValue.toString());

    let address = "";
    let name = "";

    this.state.OutletArray.map((item, index) => {
      if (item.OutletId == itemValue) {
        address = item.Address1 + ", " + item.Suburb + ", " + item.State + ", " + (item.Country == "" ? "AUSTRALIA" : item.Country) + "."
        name = item.OutletName;
      }
    })

    this.setState({ outletAddress: address });
    this.setState({ outletName: name });

    AsyncStorage.setItem('OutletName', name.toString());
    AsyncStorage.setItem('OutletAddress', address.toString());

  }

  Confirm_Outlet = () => {
    this.setState({ spinnerOutlet: false });
    this.Get_Menu_from_api(this.state.outletId);
  }

  shomodifiers = (ProductId, productName) => {
    // this.setState({ accordinrefreshkey: parseInt(this.state.accordinrefreshkey) + 1 })
    // this.setState({ productId: ProductId });
    this.setState({ showapiloader: true });
    this.setState({ qty: 1 });
    this.setState({ ProductName: productName });
    let da = [];
    this.setState({ GroupWithModifiersListtArray: da })
    Selected_Modifiers_Array = da;
    this.setState({ slectmdofiersGroup: "" });
    this.setState({ ProductModifierByGroupListArray: da });
    this.setState({ ModifiersGroupListArray: da });
    this.setState({ DefaultModifiersListArray: da });
    this.setState({ spinnerModifiers: true });
    // this.Get_defaultModifiers_from_api(ProductId);
    // this.Get_modifiers_group_from_api(ProductId);
    this.Get_Group_wise_modifier_from_api(ProductId);

    // AsyncStorage.getItem("SalesSummaryId", (err, SalesSummaryId) => {
    //   if (SalesSummaryId != null) {
    //     // console.log(SalesSummaryId);
    //     this.setState({ salesSummaryId: SalesSummaryId })
    //   }
    //   // else {
    //   //   this.Get_SalseSummaryId_from_api();
    //   // }

    // });

  }

  AddModifiers(item) {
    if (this.state.DefaultModifiersListArray.length == 0) {
      this.state.DefaultModifiersListArray.push(item);
    }
    else {
      let IsItemExists = true;

      for (let i = 0; i < this.state.DefaultModifiersListArray.length; i++) {
        if (this.state.DefaultModifiersListArray[i].ModifierGroupId == item.ModifierGroupId) {
          this.state.DefaultModifiersListArray[i].ModifierName = item.ModifierName;
          this.state.DefaultModifiersListArray[i].ModifierId = item.ModifierId;
          // this.state.DefaultModifiersListArray[i].Quantity = item.Quantity;
          this.state.DefaultModifiersListArray[i].Price = item.Price;
          // this.state.DefaultModifiersListArray[i].UnitPrice = item.UnitPrice;
          IsItemExists = false;
          break;
        }
      }
      if (IsItemExists == true) {
        this.state.DefaultModifiersListArray.push(item);
      }


    }
    // this.state.DefaultModifiersListArray.push(item);
    this.setState({ UniqueKey: parseInt(this.state.UniqueKey) + 1 })
  }

  Get_SalseSummaryId_from_api() {
    // fetch(url + 'Mobile/AppSaveSalesSummaryData?OutletId=' + this.state.outletId + '&SalesSummaryId=0')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.success == "1") {
    //       AsyncStorage.setItem("SalesSummaryId", responseJson.record_id.toString());
    // this.setState({ ShowStartAgainButton : true});
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  Add_product_to_orderList = () => {

    let modifierArray = [];

    if (this.state.DefaultModifiersListArray !== modifierArray) {

      this.state.DefaultModifiersListArray.map((item, index) => {

        modifierArray.push({
          ModifierId: item.ModifierId, ModifierGroupId: item.ModifierGroupId,
          ModifierName: item.ModifierName, Quantity: 1, UnitPrice: item.Price, Price: item.Price,
          OutletId: this.state.outletId, Universal: item.Universal,
        })
      })
    }

    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      AsyncStorage.getItem("DeliveryTime").then((DeliveryTime) => {

        let productObject = {
          ProductId: this.state.productId, OutletId: this.state.outletId, DeliveryFees: DeliveryTime == null ? 0 : 10,
          IsDeliveryOrPickup: DeliveryTime == null ? "PickUp" : "Delivery",
          SalesSummaryId: value == null ? 0 : value, Quantity: this.state.qty, UnitPrice: this.state.ProductPrice,
          Price: this.state.ProductPrice, OutletId: this.state.outletId, SalesModifierItems: modifierArray
        }
        //  console.log(productObject);

        fetch(url + 'Mobile/AppSaveOrderItem', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify(productObject)
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.success == "1") {
              this.setState({ spinnerModifiers: false });
              this.setState({ ShowStartAgainButton: true });
              AsyncStorage.setItem("SalesSummaryId", responseJson.record_id.toString());
              this.setState({ qty: 1 })
              this.Get_OredrList_from_api()
              this.refs.toas.show('Item Added Successfully.', 3000);
              // alert("Item Added Successfully");
            }
            //  console.log(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });

      }).done();
    }).done();

  }

  Add_New_product_to_orderList = () => {

    this.setState({ showapiloader: true });

    let modifierArray = [];

    if (Selected_Modifiers_Array !== modifierArray) {

      Selected_Modifiers_Array.map((item, index) => {
        // console.log(item);

        modifierArray.push({
          ModifierId: item.ModifierId, ModifierGroupId: item.ModifierGroupId,
          ModifierName: item.ModifierName, Quantity: 1, UnitPrice: item.Price, Price: item.Price,
          OutletId: this.state.outletId, Universal: item.Universal,
        })
      })
    }

    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      AsyncStorage.getItem("DeliveryTime").then((DeliveryTime) => {
        let productObject = {
          ProductId: this.state.productId, DeliveryFees: DeliveryTime == null ? 0 : 10,
          IsDeliveryOrPickup: DeliveryTime == null ? this.state.scanqr == "true" ? this.state.ParkingToPickup == "true" ? "PickUp" : "DineIn" : "PickUp" : "Delivery",
          SalesSummaryId: value == null ? 0 : value, Quantity: this.state.qty, UnitPrice: this.state.ProductPrice,
          Price: this.state.ProductPrice, OutletId: this.state.outletId, SalesModifierItems: modifierArray
        }
        // console.log(productObject);

        fetch(url + 'Mobile/AppSaveOrderItem', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify(productObject)
        })
          .then((response) => response.json())
          .then((responseJson) => {
            // console.log(responseJson);
            if (responseJson.success == "1") {
              this.setState({ spinnerModifiers: false });
              // alert(responseJson.record_id);
              this.setState({ ShowStartAgainButton: true });
              AsyncStorage.setItem("SalesSummaryId", responseJson.record_id.toString());
              this.setState({ qty: 1 });
              this.Get_OredrList_from_api();

              this.setState({ Success_notification: true });
              this.setState({ success_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);

              // this.refs.toas.show('Item Added Successfully.', 3000);
              Selected_Modifiers_Array = [];
              // alert("Item Added Successfully");
            } else {
              this.setState({ Suggestion_notification: true });
              this.setState({ suggestion_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Suggestion_notification: false });
              }, 2000);
            }
            this.setState({ showapiloader: false });
            //  console.log(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });

      }).done();
    }).done();

  }

  Get_OredrList_from_api() {
    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      if (value != null) {
        fetch(url + 'Mobile/AppGetItemById?Id=' + value, {
          headers: {
            "Accept": "application/json",
            "ApiToken": "imnyUfpf"
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            // console.log(value," cart items = ",responseJson)
            this.setState({ OrderListArray: [] });

            this.setState(({ cartrefresh }) => ({
              cartrefresh: cartrefresh + 1
            }))

            if (responseJson.success == "1") {

              if (responseJson.OrderSummary.length == 0) {
                this.setState({ spinnerOrderList: false })
              }

              this.setState({ OrderTotalAmount: responseJson.TotalAmount });
              this.setState({ OrderListArray: responseJson.OrderSummary });
              this.setState({ gstAmount: responseJson.GstAmount });
              if (responseJson.PromoCode == null) {
              } else {
                this.setState({ promoCode: responseJson.PromoCode });
              }
              this.setState({ promoAmount: responseJson.PromoAmount });

              if (responseJson.OfferName == null) {
              } else {
                this.setState({ OfferName: responseJson.OfferName });
              }
              this.setState({ OfferAmount: responseJson.OfferAmount });

              this.setState({ TakeAwayDiscount: responseJson.TakeAwayDiscount });

              this.setState({ IsDeliveryOrPickup: responseJson.IsDeliveryOrPickup });
              this.setState({ DeliveryFees: responseJson.DeliveryFees });

              // if (responseJson.IsDeliveryOrPickup == "Delivery") {
              //   this.setState({ OrderTotalAmount: parseFloat(responseJson.TotalAmount) + responseJson.DeliveryFees });
              // }

              //  this.minus_total_into_coupon_code();
              // console.log(responseJson)

              //  this.setState(({ cartrefresh }) => ({
              //     cartrefresh: cartrefresh + 1
              //   }))
            }
            else {
              let d = [];
              this.setState({ OrderTotalAmount: 0 });
              this.setState({ gstAmount: 0 });
              this.setState({ promoCode: "" });
              this.setState({ promoAmount: 0 });
              this.setState({ TakeAwayDiscount: 0 });
              this.setState({ OrderListArray: d });

              this.setState({ OfferName: "" });
              this.setState({ OfferAmount: 0 });

              this.setState({ IsDeliveryOrPickup: "" });
              this.setState({ DeliveryFees: 0 });
              // this.minus_total_into_coupon_code();
            }
            this.setState({ showapiloader: false });

            
          })
          .catch((error) => {
            console.error(error);
          });
      }
      else {
        let ar = [];
        this.setState({ OrderTotalAmount: 0 });
        this.setState({ OrderListArray: ar });
        this.setState({ gstAmount: 0 });
        this.setState({ promoCode: "" });
        this.setState({ promoAmount: 0 });
      }
    }).done();

  }

  Add_order_product_qty = (ite) => {

    if (ite.Quantity < 25) {

      this.setState({ showapiloader: true });

      let modifierArray = [];

      if (ite.SalesModifierItems !== modifierArray) {

        ite.SalesModifierItems.map((item, index) => {
          modifierArray.push({ SalesModifierItemId: item.SalesModifierItemId, Quantity: parseInt(item.Quantity) + 1, Price: item.Price, })
        })

      }

      AsyncStorage.getItem("SalesSummaryId").then((value) => {

        fetch(url + 'Mobile/AppAddUpdateQuantity', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify({
            SalesSummaryId: value,
            ProductId: ite.ProductId,
            OutletId: this.state.outletId,
            SalesProductItemId: ite.SalesProductItemId,
            Quantity: parseInt(ite.Quantity) + 1,
            Price: ite.Price,
            SalesModifierItems: modifierArray
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.success == "1") {
              this.Get_OredrList_from_api()

              this.setState({ Success_notification: true });
              this.setState({ success_message: 'PRODUCT UPDATED !' });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);

            }
            this.setState({ showapiloader: false });
          })
          .catch((error) => {
            console.error(error);
          });

      }).done();
    }
    else {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MAX 25 ITEM QUANTITY' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }

  }

  less_order_product_qty(ite) {

    if (ite.Quantity == 1) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'NOT ALLOWED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    } else {

      this.setState({ showapiloader: true });

      let modifierArray = [];

      if (ite.SalesModifierItems !== modifierArray) {

        ite.SalesModifierItems.map((item, index) => {

          modifierArray.push({ SalesModifierItemId: item.SalesModifierItemId, Quantity: parseInt(item.Quantity) - 1, Price: item.Price, })

        })

      }

      AsyncStorage.getItem("SalesSummaryId").then((value) => {

        fetch(url + 'Mobile/AppAddUpdateQuantity', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify({
            SalesSummaryId: value,
            ProductId: ite.ProductId,
            OutletId: this.state.outletId,
            SalesProductItemId: ite.SalesProductItemId,
            Quantity: parseInt(ite.Quantity) - 1,
            Price: ite.Price,
            SalesModifierItems: modifierArray
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //   console.log(responseJson);
            if (responseJson.success == "1") {
              this.Get_OredrList_from_api()

              this.setState({ Success_notification: true });
              this.setState({ success_message: 'PRODUCT UPDATED !' });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);

            }
            this.setState({ showapiloader: false });
          })
          .catch((error) => {
            console.error(error);
          });

      }).done();

    }

  }

  Delete_order_product = (ite) => {

    this.setState({ showapiloader: true });

    let modifierArray = [];

    if (ite.SalesModifierItems !== modifierArray) {

      ite.SalesModifierItems.map((item, index) => {

        modifierArray.push({ SalesModifierItemId: item.SalesModifierItemId, Quantity: item.Quantity, Price: item.Price, })

      })

    }

    AsyncStorage.getItem("SalesSummaryId").then((value) => {

      fetch(url + 'Mobile/AppRemoveProductItem', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
        body: JSON.stringify({
          SalesSummaryId: value,
          SalesProductItemId: ite.SalesProductItemId,
          Quantity: ite.Quantity,
          Price: ite.Price,
          SalesModifierItems: modifierArray
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {
            this.Get_OredrList_from_api()

            this.setState({ Success_notification: true });
            this.setState({ success_message: 'ITEM DELETED !' });
            setTimeout(() => {
              this.setState({ Success_notification: false });
            }, 2000);

          }
          else {
            this.setState({ showapiloader: false });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });

    }).done();
  }

  Save_Person_Details() {

    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const num = /^\d+$/;
    const name = /^[a-zA-Z]+$/;

    if (Person_FirstName == "") {
      // this.refs.toast.show('First name is required.', 3000);

      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'FIRSTNAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);

    }
    else if (!name.test(Person_FirstName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in First Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (Person_LastName == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'LASTNAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(Person_LastName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in Last Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (Person_Mobile == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (Person_Mobile.length <= 9) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: '10 DIGIT MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(Person_Mobile)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (Person_Email == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!expression.test(Person_Email)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {

      // Toast.show({
      //   text: "SMS tracking enabled. Driver tracking coming soon!",
      //   // buttonText: "Okay",
      //   duration: 3000,
      //   type: "success"
      // })

      let persondetails = {
        "MemberCardId": 0,
        "FirstName": Person_FirstName, "LastName": Person_LastName,
        "Email": Person_Email, "MobileNumber": Person_Mobile
      };

      AsyncStorage.setItem('MemberDetails', JSON.stringify(persondetails));

      this.generateCaptcha();

      this.setState({ persondetails: false });
      this.setState({ creaditcardview: true });

      this.setState({ Success_notification: true });
      this.setState({ success_message: 'INFO UPDATED !' });
      setTimeout(() => {
        this.setState({ Success_notification: false });
      }, 2000);
    }

  }

  Get_TraddingHours_from_api() {

    AsyncStorage.getItem("DeliveryTime").then((DeliverTime) => {
      if (DeliverTime !== null) {

        fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + this.state.outletId + '&OrderDate=' + Moment().add(40, 'minutes').format("YYYY-MM-DD hh:mm A"), {
          headers: {
            "Accept": "application/json",
            "ApiToken": "imnyUfpf"
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.success == "1") {
              this.setState({ TraddingHoursListArray: responseJson.data });
              // if (this.state.OrderTimeValue == "") {
              //   this.setState({ OrderTimeValue: responseJson.data[0].HourValue });
              // }
            }
          })
          .catch((error) => {
            console.error(error);
          });

      }
      else {
        fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + this.state.outletId + '&OrderDate=' + Moment().format("YYYY-MM-DD hh:mm A"), {
          headers: {
            "Accept": "application/json",
            "ApiToken": "imnyUfpf"
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.success == "1") {
              this.setState({ TraddingHoursListArray: responseJson.data });
              // if (this.state.OrderTimeValue == "") {
              //   this.setState({ OrderTimeValue: responseJson.data[0].HourValue });
              // }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }).done()

  }

  onValueChange_OredrTime = (itemValue) => {
    this.setState({ OrderTimeValue: itemValue });
  }

  onValueChange_BookingStoreId = (itemValue) => {
    BookingStoreId = itemValue;
    if (itemValue !== "0") {
      // console.log(BookingStoreId);
      this.Get_Time_For_Bookingform();
    }
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }))
  }

  onValueChange_Bookingpeople = (itemValue) => {
    BookingpeopleId = itemValue;
    if (itemValue != 0) {
      // console.log(BookingpeopleId);
      this.Get_Time_For_Bookingform();
    }
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }))
  }

  QR_Bookingpeople = (itemValue) => {
    QR_booking_peopleId = itemValue;
    AsyncStorage.getItem("Slotnumber").then((Slotnumber) => {
      if (Slotnumber != null) {
        if (QR_booking_peopleId > 2) {
          Alert.alert(
            "Alert !",
            "It takes longer then .. hours do you want to go for pickup ?", [
            {
              text: "No",
              onPress: () => {
                AsyncStorage.setItem("ParkingToPickup", "false");
                this.setState({ ParkingToPickup: "false" });
              },
              style: "cancel"
            },
            {
              text: "Yes", onPress: () => {
                AsyncStorage.setItem("ParkingToPickup", "true");
                this.setState({ ParkingToPickup: "true" });
              }
            }
          ]);
        }
      }
    }).done();
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }))
  }

  onValueChange_BookingTime = (itemValue) => {
    BookingHourFrom = itemValue;
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }))
    var ti = itemValue;
    if (BookingpeopleId == 1) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(30, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    else if (BookingpeopleId == 2) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(30, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    else if (BookingpeopleId >= 2 && BookingpeopleId < 5) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(45, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    else if (BookingpeopleId >= 4 && BookingpeopleId < 11) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(60, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    else if (BookingpeopleId >= 10 && BookingpeopleId < 18) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(90, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    else if (BookingpeopleId > 17) {
      var someMoment = Moment(ti, ["HH:mm"]);
      someMoment.add(120, 'minutes')
      BookingHourTo = someMoment.format("HH:mm");
    }
    // console.log(BookingHourFrom + " = " + BookingHourTo);
    this.GetTableListWithoutBooked();
  }

  onValueChange_PreOredrTime = (itemValue) => {
    this.setState({ PreOrderTimeValue: itemValue });
  }

  add_qty_for_product() {
    if (this.state.qty < 25) {
      this.setState({ ProductQtychangePrice: parseFloat(this.state.ProductPrice) * (parseInt(this.state.qty) + 1) });
      this.setState({ qty: parseInt(this.state.qty) + 1 });
    }
  }

  minus_qty_for_product() {

    if (this.state.qty == 1) {

    } else {
      this.setState({ ProductQtychangePrice: parseFloat(this.state.ProductPrice) * (parseInt(this.state.qty) - 1) });
      this.setState({ qty: parseInt(this.state.qty) - 1 });
    }

  }

  Check_PromoCouponCode() {

    if (CouponCode == "") {

      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'PROMO CODE REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);

    } else {
      AsyncStorage.getItem("SalesSummaryId").then((value) => {

        if (value != null) {

          fetch(url + 'Mobile/AppValidatePromoCode', {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "ApiToken": "imnyUfpf"
            },
            body: JSON.stringify({
              SalesSummaryId: value,
              PromoCode: CouponCode
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
              // console.log(responseJson)
              if (responseJson.success == "1") {
                this.Get_OredrList_from_api();
                CouponCode = "";
                // this.refs.toa.show('Successfully apply coupon code.', 3000);

                this.setState({ Success_notification: true });
                this.setState({ success_message: 'PROMO CODE APPLIED' });
                setTimeout(() => {
                  this.setState({ Success_notification: false });
                }, 2000);

              }
              else {
                this.setState({ Suggestion_notification: true });
                this.setState({ suggestion_message: 'PROMO CODE INVALID' });
                setTimeout(() => {
                  this.setState({ Suggestion_notification: false });
                }, 2000);
              }
            })
            .catch((error) => {
              console.error(error);
            });

        }

      }).done();
    }
  }

  Delete_PromoCouponCode() {
    AsyncStorage.getItem("SalesSummaryId").then((value) => {

      fetch(url + 'Mobile/AppRemovePromoCode', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
        body: JSON.stringify({
          SalesSummaryId: value,
          PromoCode: this.state.promoCode
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {
            this.setState({ promoCode: "" });
            this.Get_OredrList_from_api();

            this.setState({ Success_notification: true });
            this.setState({ success_message: 'PROMO CODE REMOVED !' });
            setTimeout(() => {
              this.setState({ Success_notification: false });
            }, 2000);

            // this.refs.toa.show('Coupon code delete Successfully.', 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }).done();
  }

  Alert_coupon_code() {

    Alert.alert(
      "Warning !",
      "Do you want to remove this promo code ?", [
      {
        text: "CANCEL",
        onPress: () => null,
        style: "cancel"
      },
      { text: "CONFIRM", onPress: () => this.Delete_PromoCouponCode() }
    ]);
  }

  _onChange = form => {

    // console.log(form)

    this.setState({ CardDetails: form });

    // cardName = form.values.name;
    // cardNumber = form.values.number;
    // cardCvn = form.values.cvc;
    // cardexpirymonth = form.values.expiry.substring(0, 2);
    // cardexpiryyear = form.values.expiry.substring(3, 5);

  }

  GetDeliveryasapInterwal() {
    this.myIntervalDelivery = setInterval(() => {

      this.setState({ time: Moment().add(40, 'minutes').format("hh:mm A") })

    }, 1000)
  }

  GetTimeInterval() {

    this.myInterval = setInterval(() => {

      this.setState({ time: Moment().add(20, 'minutes').format("hh:mm A") })

    }, 1000)

  }

  next() {
    const name = /^[a-zA-Z ]+$/;
    let d = {};

    var temp = this.state.randomNumberOne;

    if (this.state.time !== "") {
      clearInterval(this.myInterval);
      clearInterval(this.myIntervalDelivery);
    }

    if (this.state.CardDetails == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CARD NUMBER REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.values.number == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CARD NUMBER REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.status.number !== "valid") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CARD NUMBER INVALID' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.values.expiry == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EXPIRY DATE REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.status.expiry !== "valid") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EXPIRY DATE INVALID' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.values.cvc == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CVV REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.CardDetails.values.name == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CARDHOLDER NAME REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(this.state.CardDetails.values.name)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'CARDHOLDER NAME TEXT REQUIRED' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Show_Captcha == true) {
      if (this.state.textInputHolder != temp) {
        this.setState({ Suggestion_notification: true });
        this.setState({ suggestion_message: 'Captcha Verification Required.' });
        setTimeout(() => {
          this.setState({ Suggestion_notification: false });
        }, 2000);
      }
      else {
        cardName = this.state.CardDetails.values.name;
        cardNumber = this.state.CardDetails.values.number;
        cardCvn = this.state.CardDetails.values.cvc;
        cardexpirymonth = this.state.CardDetails.values.expiry.substring(0, 2);
        cardexpiryyear = this.state.CardDetails.values.expiry.substring(3, 5);

        this.setState({ CardDetails: d });
        this.setState({ creaditcardview: false });
        this.setState({ fillorderdetails: true });

        AsyncStorage.getItem("DeliveryTime").then((DeliverTime) => {
          if (DeliverTime !== null) {
            this.GetDeliveryasapInterwal();
          }
          else {
            this.GetTimeInterval();
          }
        }).done()
      }
    }
    else {
      cardName = this.state.CardDetails.values.name;
      cardNumber = this.state.CardDetails.values.number;
      cardCvn = this.state.CardDetails.values.cvc;
      cardexpirymonth = this.state.CardDetails.values.expiry.substring(0, 2);
      cardexpiryyear = this.state.CardDetails.values.expiry.substring(3, 5);

      this.setState({ CardDetails: d });
      this.setState({ creaditcardview: false });
      this.setState({ fillorderdetails: true });

      AsyncStorage.getItem("DeliveryTime").then((DeliverTime) => {
        if (DeliverTime !== null) {
          this.GetDeliveryasapInterwal();
        }
        else {
          this.GetTimeInterval();
        }
      }).done()
    }

  }

  pay = () => {

    // this.setState({creaditcardview: false})
    this.setState({ fillorderdetails: true });
    this.setState({ payloader: true });

    let card = cardNumber.split(' ').join('');

    var amount = this.state.OrderTotalAmount * 100;

    AsyncStorage.getItem("SalesSummaryId").then((salesid) => {

      AsyncStorage.getItem("DeliveryStreet").then((DeliveryStreet) => {
        AsyncStorage.getItem("DeliverystNo").then((DeliverystNo) => {
          AsyncStorage.getItem("DeliverySuburb").then((DeliverySuburb) => {
            AsyncStorage.getItem("DeliveryState").then((DeliveryState) => {
              AsyncStorage.getItem("DeliveryPostcode").then((DeliveryPostcode) => {
                AsyncStorage.getItem("DeliveryApptNo").then((apptno) => {

                  DeviceInfo.getDeviceName().then(deviceName => {
                    NetworkInfo.getIPAddress().then(ipAddress => {
                      let pay = {
                        "StoreId": this.state.outletId,
                        "StoreName": this.state.headerOutletName,
                        "StoreAddress": this.state.outletAddress,
                        "Amount": Math.round(amount),
                        "MobileNumber": Person_Mobile,
                        "Email": Person_Email,
                        "MemberId": 0,
                        "SalesSummaryId": salesid,
                        "FirstName": Person_FirstName,
                        "LastName": Person_LastName,
                        "IsPreOrder": this.state.IsPreorder,
                        "IsCutleryRequired": this.state.Iscultleryrequired == false ? "no" : "yes",
                        "Suburb": DeliverySuburb != null ? DeliverySuburb : "",
                        "State": DeliveryState != null ? DeliveryState : "",
                        "PostCode": DeliveryPostcode != null ? DeliveryPostcode : "",
                        "ApptNo": apptno != null ? apptno : "",
                        "Country": "AU",
                        "StreetNo": DeliverystNo !== null ? DeliverystNo : "",
                        "StreetAddress": DeliveryStreet != null ? DeliveryStreet : "",
                        "Name": "",
                        "MemberCardId": Person_cardno,
                        "NameOnCard": Base64.encode(cardName.toString()),
                        "CardNumber": Base64.encode(card.toString()),
                        "ExpiryMonth": Base64.encode(cardexpirymonth.toString()),
                        "ExpiryYear": Base64.encode(cardexpiryyear.toString()),
                        "CVN": Base64.encode(cardCvn.toString()),
                        "IsPaymentSuccess": false,
                        // "AdditionalMessage": AdditionalMessage,
                        "AdditionalMessage": this.state.text,
                        "IpAddress": ipAddress,
                        "DeviceName": deviceName,
                        "PickUpTime": (this.state.IsPreorder == "true" ? Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("YYYY-MM-DD") : Moment().format("YYYY-MM-DD")) + " " + (this.state.OrderTrenddingTimeValue == "" ? this.state.time : this.state.OrderTrenddingTimeValue)
                      }

                      // console.log("parameter for payment = ", pay);

                      fetch(url + 'Mobile/AppDoPayments', {
                        method: "POST",
                        headers: {
                          "Accept": "application/json",
                          "Content-Type": "application/json",
                          "ApiToken": "imnyUfpf"
                        },
                        body: JSON.stringify(pay)
                      })
                        .then((response) => response.json())
                        .then((responseJson) => {
                          // console.log(responseJson)
                          if (responseJson.success == true) {
                            let hi = "";
                            this.setState({ ShowStartAgainButton: false });

                            this.setState({ Show_Captcha: false });
                            AsyncStorage.setItem("show_captcha", "false");

                            if (hideandshowDeliveryonColor == true) {

                              var secret = ((new Date().getDate() + 1) * (new Date().getMonth() + 1) - 7) * 6 + new Date().getFullYear() - (3 * (new Date().getDate() - 1));
                              // console.log("secret = ", secret)
                              fetch('https://mealkits-api-uat.azurewebsites.net/api/Orders/Encrypt', {
                                method: "POST",
                                headers: {
                                  "Accept": "application/json",
                                  "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                  "secret": secret.toString(),
                                  "orderID": parseInt(salesid)
                                })
                              })
                                .then((response) => response.json())
                                .then((responseJson) => {

                                  // console.log("Encrypt = ", responseJson)
                                  if (responseJson.status == true) {
                                    this.setState({ Encrypt_Order_Id: responseJson.data });
                                  }
                                })
                                .catch((error) => {
                                  console.error(error);
                                });
                            }

                            // if (DeliveryPostcode != null) {

                            //   let deliveryaddress = {
                            //     "ApptNo": apptno,
                            //     "StreetNo": DeliverystNo, "StreetAddress": DeliveryStreet,
                            //     "Suburb": DeliverySuburb, "State": DeliveryState, "PostCode": DeliveryPostcode
                            //   };

                            //   AsyncStorage.setItem('MemberDeliveryAddress', JSON.stringify(deliveryaddress));

                            // }

                            AsyncStorage.setItem("SalesSummaryId", hi);

                            AsyncStorage.setItem("DeliveryApptNo", hi);
                            AsyncStorage.setItem("DeliverystNo", hi);
                            AsyncStorage.setItem("DeliveryStreet", hi);
                            AsyncStorage.setItem("DeliverySuburb", hi);
                            AsyncStorage.setItem("DeliveryState", hi);
                            AsyncStorage.setItem("DeliveryPostcode", hi);
                            AsyncStorage.setItem("DeliveryTime", hi);

                            AsyncStorage.setItem('Offer_Order_Type', "");

                            this.setState({ Offer_Order_Type: "" });

                            AsyncStorage.setItem('OfferId', "");

                            this.setState({ Offer_Appiled: false });

                            DeliveryTime = "";

                            this.setState({ PaymentSuccessobj: responseJson.data[0] })

                            this.setState({ OrderTrenddingTimeValue: "" });
                            this.setState({ fillorderdetails: false });
                            this.setState({ payloader: false });
                            this.setState({ screenchange: "product" });
                            this.setState({ paymentSuccessfull: true });

                            this.setState({ Iscultleryrequired: false });

                            this.setState({ getnearstore: true });
                            this.setState({ deliveryAsap: true });

                            this.setState({ MobilenoOnshow_Message: false });
                            // this.setState({ getdata: false });

                            this.setState({ DeliveryStreet: "" });
                            this.setState({ DeliverySuburb: "" });
                            this.setState({ DeliveryState: "" });
                            this.setState({ DeliveryPostcode: "" });
                            this.setState({ DeliveryTime: "" });

                            // this.setState({ deliveryStreet: '' });
                            // this.setState({ deliverypincode: '' });
                            // this.setState({ deliveryarea: '' });
                            // this.setState({ deliverystate: '' });

                            // this.setState({ DeliveryTimevalue: "" });

                            this.setState({ CardDetails: "" });


                            Person_MemberCard = "";
                            Person_confirmmobile = "";
                            // Person_FirstName = "";
                            // Person_LastName = "";
                            // Person_Mobile = "";
                            // Person_Email = "";
                            // Person_cardno = "";
                            Person_referenceno = "";

                            AsyncStorage.getItem("MemberDetails").then((MemberDetails) => {
                              if (MemberDetails != null) {
                                let responseJson = JSON.parse(MemberDetails);
                                Person_FirstName = responseJson.FirstName;
                                Person_LastName = responseJson.LastName;
                                Person_Email = responseJson.Email;
                                Person_Mobile = responseJson.MobileNumber;
                                Person_cardno = "";

                                if (responseJson.MemberCardId == 0) {
                                  this.setState({ getdata: false });
                                  this.setState({ getmemberdetail: false });
                                }
                                else {
                                  this.setState({ getdata: true });
                                  this.setState({ getmemberdetail: false });
                                }

                              } else {
                                Person_FirstName = "";
                                Person_LastName = "";
                                Person_Email = "";
                                Person_Mobile = "";
                                Person_cardno = "";

                                this.setState({ getdata: false });
                                this.setState({ getmemberdetail: false });

                              }

                            }).done();

                            this.Get_OredrList_from_api();

                            AdditionalMessage = "";
                            this.setState({ text: "" });
                            CouponCode = "";

                            this.setState({ time: "" });


                            cardName = "";
                            cardNumber = "";
                            cardCvn = "";
                            cardexpirymonth = "";
                            cardexpiryyear = "";

                          }
                          else {

                            this.setState({ Show_Captcha: true });
                            AsyncStorage.setItem("show_captcha", "true");

                            this.setState({ payloader: false });
                            this.setState({ CardDetails: "" });
                            // console.log(responseJson.ErrorMessage)
                            // if (responseJson.ErrorMessage == "\"Invalid EWAY_CARDNUMBER\"") {
                            //   this.refs.error.show('Your Payment Card number is wrong, please try again.', 3000);
                            // }
                            this.setState({ Suggestion_notification: true });
                            this.setState({ suggestion_message: "Please check your card details or try a different payment method" });
                            setTimeout(() => {
                              this.setState({ Suggestion_notification: false });
                            }, 3000);
                          }

                          // clearInterval(this.myInterval);
                          // clearInterval(this.myIntervalDelivery);

                        })
                        .catch((error) => {
                          console.error(error);
                          this.setState({ payloader: false });
                        });

                    });
                  });

                }).done();
              }).done();
            }).done();
          }).done();
        }).done();
      }).done();
    }).done();

  }

  Delete_selected_modifiers(index) {
    this.state.DefaultModifiersListArray.splice(index, 1);
    this.setState({ UniqueKey: parseInt(this.state.UniqueKey) + 1 })
  }

  Get_Memberdetails(string) {
    const num = /^\d+$/;

    if (string == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MEMBERCARD NUMBER REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(string)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MEMBERCARD NUMBER ALLOW ONLY NUMBER' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {
      fetch(url + 'Mobile/AppSearchMember?MemberCardId=' + string, {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {
            this.setState({ memberdetailsobj: responseJson.data[0] });
            Person_cardno = responseJson.data[0].MemberCardId;
            this.setState({ getmemberdetail: true });
            this.setState({ getdata: true });
            Person_MemberCard = "";
            this.setState({ UniqueKey: parseInt(this.state.UniqueKey) + 1 })
          }
          else {
            this.setState({ Suggestion_notification: true });
            this.setState({ suggestion_message: 'Member card expired !' });
            setTimeout(() => {
              this.setState({ Suggestion_notification: false });
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  set_memberdetails(string) {
    const num = /^\d+$/;

    if (string == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE REQUIRED' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(string)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE ALLOW ONLY NUMBER' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else

      if (string.substring(0, 1).toString() == "0") {

        if (string.substr(string.length - (parseInt(string.length) - 1)).toString() == this.state.memberdetailsobj.MobileNumber.substr(this.state.memberdetailsobj.MobileNumber.length - (parseInt(this.state.memberdetailsobj.MobileNumber.length) - 1)).toString()) {
          // Person_confirmmobile = "";

          Person_FirstName = this.state.memberdetailsobj.FirstName;
          Person_LastName = this.state.memberdetailsobj.LastName;
          Person_Email = this.state.memberdetailsobj.Email;
          Person_Mobile = this.state.memberdetailsobj.MobileNumber;
          Person_cardno = this.state.memberdetailsobj.MemberCardId;
          Person_referenceno = this.state.memberdetailsobj.ReferenceNumber;

          this.setState({ getmemberdetail: false });

          if (this.state.memberdetailsobj.MobileNumber.length <= 9) {
            this.setState({ MobilenoOnshow_Message: false });
          }
          else {
            if (this.state.memberdetailsobj.MobileNumber.substring(0, 2) == "04") {
              this.setState({ MobilenoOnshow_Message: true });
            }
            else {
              this.setState({ MobilenoOnshow_Message: false });
            }
          }
        }
        else {
          this.setState({ Suggestion_notification: true });
          this.setState({ suggestion_message: 'MOBILE INVALID' });
          setTimeout(() => {
            this.setState({ Suggestion_notification: false });
          }, 2000);
        }

      }
      else if (string.substring(0, 2).toString() == "61") {

        if (string.substr(string.length - (parseInt(string.length) - 2)).toString() == this.state.memberdetailsobj.MobileNumber.substr(this.state.memberdetailsobj.MobileNumber.length - (parseInt(this.state.memberdetailsobj.MobileNumber.length) - 1)).toString()) {
          // Person_confirmmobile = "";

          Person_FirstName = this.state.memberdetailsobj.FirstName;
          Person_LastName = this.state.memberdetailsobj.LastName;
          Person_Email = this.state.memberdetailsobj.Email;
          Person_Mobile = this.state.memberdetailsobj.MobileNumber;
          Person_cardno = this.state.memberdetailsobj.MemberCardId;
          Person_referenceno = this.state.memberdetailsobj.ReferenceNumber;

          this.setState({ getmemberdetail: false });

          if (this.state.memberdetailsobj.MobileNumber.length <= 9) {
            this.setState({ MobilenoOnshow_Message: false });
          }
          else {
            if (this.state.memberdetailsobj.MobileNumber.substring(0, 2) == "04") {
              this.setState({ MobilenoOnshow_Message: true });
            }
            else {
              this.setState({ MobilenoOnshow_Message: false });
            }
          }
        }
        else {
          this.setState({ Suggestion_notification: true });
          this.setState({ suggestion_message: 'MOBILE INVALID' });
          setTimeout(() => {
            this.setState({ Suggestion_notification: false });
          }, 2000);
        }
      }
      else {

        if (string == this.state.memberdetailsobj.MobileNumber.substr(this.state.memberdetailsobj.MobileNumber.length - (parseInt(this.state.memberdetailsobj.MobileNumber.length) - 1)).toString()) {
          // Person_confirmmobile = "";

          Person_FirstName = this.state.memberdetailsobj.FirstName;
          Person_LastName = this.state.memberdetailsobj.LastName;
          Person_Email = this.state.memberdetailsobj.Email;
          Person_Mobile = this.state.memberdetailsobj.MobileNumber;
          Person_cardno = this.state.memberdetailsobj.MemberCardId;
          Person_referenceno = this.state.memberdetailsobj.ReferenceNumber;

          this.setState({ getmemberdetail: false });

          if (this.state.memberdetailsobj.MobileNumber.length <= 9) {
            this.setState({ MobilenoOnshow_Message: false });
          }
          else {
            if (this.state.memberdetailsobj.MobileNumber.substring(0, 2) == "04") {
              this.setState({ MobilenoOnshow_Message: true });
            }
            else {
              this.setState({ MobilenoOnshow_Message: false });
            }
          }
        }
        else {
          this.setState({ Suggestion_notification: true });
          this.setState({ suggestion_message: 'MOBILE INVALID' });
          setTimeout(() => {
            this.setState({ Suggestion_notification: false });
          }, 2000);
        }
      }

  }

  SearchFilterFunction(text) {
    if (text == "") {
      this.setState({
        OutletArraysearch: this.state.OutletArray,
      });
    }
    else {
      const newData = this.state.OutletArray.filter(function (item) {
        let data = item.Suburb + "," + item.State + "-" + item.Postcode
        const itemData = data ? data.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        OutletArraysearch: newData,
      });
    }
  }

  check_first_store(item) {
    fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + item.OutletId + '&OrderDate=' + Moment().format("YYYY-MM-DD hh:mm A"), {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.success == "1") {
          if (responseJson.data.length != 0) {
            this.setState({ showtimer: false });

            AsyncStorage.setItem('OutletId', item.OutletId.toString());

            this.setState({ outletId: item.OutletId });

            this.setState({ headerOutletName: item.OutletName });
            this.setState({ outletName: item.OutletName });

            let address = item.Address1 + ", " + item.Suburb + ", " + item.State + ", " + (item.Country == "" ? "AUSTRALIA" : item.Country) + ".";

            AsyncStorage.setItem('OutletName', item.OutletName);
            AsyncStorage.setItem('OutletAddress', address.toString());
            this.Get_Menu_from_api(this.state.outletId);

            // this.search.clear();
            // this.SearchFilterFunction("");
          }
          else {
            this.setState({ Closestorename: item.OutletName });
            this.setState({ showtimer: true });
            // this.setState({ openoutlet: false });
            this.StartAgainbutton_api_call();
          }
        }
        else {
          this.setState({ Closestorename: item.OutletName });
          this.setState({ showtimer: true });
          // this.setState({ openoutlet: false });
          this.StartAgainbutton_api_call();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  changeOutlet_alert = (item) => {
    // Alert.alert(
    //   "Warning !", 
    //   "You want to change store " + item.OutletName + " ?", [
    //   {
    //     text: "CANCEL",
    //     onPress: () => null,
    //     style: "cancel"
    //   },
    //   {
    //     text: "CONFIRM", onPress: () => {

    if (this.state.IsPreorder == "false") {

      fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + item.OutletId + '&OrderDate=' + Moment().format("YYYY-MM-DD hh:mm A"), {
        headers: {
          "Accept": "application/json",
          "ApiToken": "imnyUfpf"
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          if (responseJson.success == "1") {
            if (responseJson.data.length != 0) {
              this.setState({ showtimer: false });

              this.setState({ openoutlet: false });
              this.setState({ Success_notification: true });
              this.setState({ success_message: 'STORE UPDATED !' });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);

              AsyncStorage.setItem('OutletId', item.OutletId.toString());

              this.setState({ outletId: item.OutletId });
              // this.Get_PreOrderHours_from_api(Moment().format("YYYY-MM-DD hh:mm A"));
              this.setState({ headerOutletName: item.OutletName });
              this.setState({ outletName: item.OutletName });

              let address = item.Address1 + ", " + item.Suburb + ", " + item.State + ", " + (item.Country == "" ? "AUSTRALIA" : item.Country) + ".";

              AsyncStorage.setItem('OutletName', item.OutletName);
              AsyncStorage.setItem('OutletAddress', address.toString());
              this.Get_Menu_from_api(this.state.outletId);

              // this.search.clear();
              // this.SearchFilterFunction("");
            }
            else {
              this.setState({ Closestorename: item.OutletName });
              this.setState({ showtimer: true });
              this.setState({ openoutlet: false });
              this.StartAgainbutton_api_call();
            }
          }
          else {
            this.setState({ Closestorename: item.OutletName });
            this.setState({ showtimer: true });
            this.setState({ openoutlet: false });
            this.StartAgainbutton_api_call();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else {
      this.setState({ openoutlet: false });
      this.setState({ Success_notification: true });
      this.setState({ success_message: 'STORE UPDATED !' });
      setTimeout(() => {
        this.setState({ Success_notification: false });
      }, 2000);

      AsyncStorage.setItem('OutletId', item.OutletId.toString());

      this.setState({ outletId: item.OutletId });
      // this.Get_PreOrderHours_from_api(Moment().format("YYYY-MM-DD hh:mm A"));
      this.setState({ headerOutletName: item.OutletName });
      this.setState({ outletName: item.OutletName });

      let address = item.Address1 + ", " + item.Suburb + ", " + item.State + ", " + (item.Country == "" ? "AUSTRALIA" : item.Country) + ".";

      AsyncStorage.setItem('OutletName', item.OutletName);
      AsyncStorage.setItem('OutletAddress', address.toString());
      this.Get_Menu_from_api(this.state.outletId);

      // this.search.clear();
      // this.SearchFilterFunction("");
    }

    this.setState(({ MenuRefresh }) => ({
      MenuRefresh: MenuRefresh + 1
    }))

    // }
    //   }
    // ]);
  }

  Check_nearreststore() {
    const num = /^\d+$/;
    const name = /^[a-zA-Z]+$/;
    const space = /^(\w+\s?)*\s*$/;

    // if (this.state.deliveryapptno.replace(/\s+$/, "") == "") {
    //   this.setState({ Suggestion_notification: true });
    //   this.setState({ suggestion_message: 'Appt No Required !' });
    //   setTimeout(() => {
    //     this.setState({ Suggestion_notification: false });
    //   }, 2000);
    // }
    // else if (this.state.deliveryapptno == null) {
    //   this.setState({ Suggestion_notification: true });
    //   this.setState({ suggestion_message: 'Appt No Required !' });
    //   setTimeout(() => {
    //     this.setState({ Suggestion_notification: false });
    //   }, 2000);
    // }
    // else
    if (this.state.deliverystno == null) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'STREET NUMBER REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.deliverystno.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'STREET NO REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }

    else if (this.state.deliveryStreet.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'STREET ADDRESS REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.deliveryarea.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'SUBURB REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.deliverystate.replace(/\s+$/, "") == "") {
      // this.refs.deliverypopup.show('State is required.', 3000);
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'STATE REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.deliverypincode == null) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'STREET NUMBER REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.deliverypincode == "") {
      // this.refs.deliverypopup.show('Postcode is required.', 3000);
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'POSTCODE REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(this.state.deliverypincode)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'POSTCODE REQUIRED !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {
      fetch(url + 'Mobile/AppGetNearStore', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
        body: JSON.stringify({
          "Area": this.state.deliveryarea,
          "Street": this.state.deliveryStreet,
          "PinCode": this.state.deliverypincode,
          "State": this.state.deliverystate
        })
      })
        .then((response) => response.json())
        .then((responseJsons) => {
          // console.log(responseJson);
          if (responseJsons.success == "1") {
            let outletid = responseJsons.record.OutletId;

            if (this.state.deliveryapptno == null) {
              let deliveryaddress = {
                "ApptNo": "",
                "StreetNo": this.state.deliverystno, "StreetAddress": this.state.deliveryStreet,
                "Suburb": this.state.deliveryarea, "State": this.state.deliverystate, "PostCode": this.state.deliverypincode
              };

              AsyncStorage.setItem('MemberDeliveryAddress', JSON.stringify(deliveryaddress));
            }
            else {
              let deliveryaddress = {
                "ApptNo": this.state.deliveryapptno,
                "StreetNo": this.state.deliverystno, "StreetAddress": this.state.deliveryStreet,
                "Suburb": this.state.deliveryarea, "State": this.state.deliverystate, "PostCode": this.state.deliverypincode
              };

              AsyncStorage.setItem('MemberDeliveryAddress', JSON.stringify(deliveryaddress));
            }

            // this.Get_Menu_from_api(outletid);

            if (this.state.IsPreorder == "true") {

              fetch(url + 'Mobile/AppGetTomorrowTraddingHours?OutletId=' + outletid + '&PreOrderDate=' + Moment(this.state.PreOrderdate + " " + Moment().format('hh:mm A'), "DD-MM-YYYY hh:mm A").format("YYYY-MM-DD hh:mm A"), {
                headers: {
                  "Accept": "application/json",
                  "ApiToken": "imnyUfpf"
                }
              })
                .then((response) => response.json())
                .then((responseJson) => {
                  //  console.log(responseJson)
                  if (responseJson.success == "1") {
                    // console.log("hour ==", responseJson.data.length)
                    if (responseJson.data.length == 0) {
                      this.setState({ getnearstore: false });
                      this.setState({ PreOrderHoursListArray: responseJson.data });
                      this.setState({ TraddingHoursListArray: responseJson.data });
                    }
                    else {
                      this.setState({ getnearstore: true });
                      this.setState({ TraddingHoursListArray: responseJson.data });
                    }
                  }
                  else {

                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }
            else {

              fetch(url + 'Mobile/AppGetTraddingHours?OutletId=' + outletid + '&OrderDate=' + Moment().add(40, 'minutes').format("YYYY-MM-DD hh:mm A"), {
                headers: {
                  "Accept": "application/json",
                  "ApiToken": "imnyUfpf"
                },
              })
                .then((response) => response.json())
                .then((responseJson) => {
                  //  console.log(responseJson);
                  if (responseJson.success == "1") {
                    this.setState({ DeliveryTrendingTimeArrayList: responseJson.data });

                    if (responseJson.data.length == 0) {
                      this.setState({ getnearstore: false });
                    }
                    else {

                      AsyncStorage.setItem('OutletId', responseJsons.record.OutletId.toString());
                      this.setState({ outletId: responseJsons.record.OutletId });
                      this.setState({ headerOutletName: responseJsons.record.OutletName });
                      this.setState({ outletName: responseJsons.record.OutletName });

                      let address = responseJsons.record.Address1 + ", " + responseJsons.record.Suburb + ", " + responseJsons.record.State + ", " + (responseJsons.record.Country == "" ? "AUSTRALIA" : responseJsons.record.Country) + ".";

                      AsyncStorage.setItem('OutletName', responseJsons.record.OutletName);
                      AsyncStorage.setItem('OutletAddress', address.toString());

                      this.GetDeliveryasapInterwal();
                      this.setState({ deliveryAsap: true }),
                        this.setState({ selectdeliveryasap: false })

                      this.setState({ editaddress: false })
                      this.setState({ TwoButtonShowinDeliverypopup: true });
                      this.setState({ getnearstore: true });

                      if (this.state.selectdeliveryasap == false) {

                        AsyncStorage.setItem("DeliveryApptNo", (this.state.deliveryapptno == null ? "" : this.state.deliveryapptno));
                        AsyncStorage.setItem("DeliveryStreet", this.state.deliveryStreet);
                        AsyncStorage.setItem("DeliverySuburb", this.state.deliveryarea);
                        AsyncStorage.setItem("DeliveryState", this.state.deliverystate);
                        AsyncStorage.setItem("DeliveryPostcode", this.state.deliverypincode);
                        // AsyncStorage.setItem("DeliveryTime", Moment().add(40, 'minutes').format("hh:mm A"));
                        AsyncStorage.setItem("DeliverystNo", this.state.deliverystno);

                        DeliveryApptno = this.state.deliveryapptno;
                        DeliveryStreet = this.state.deliveryStreet;
                        DeliverystNo = this.state.deliverystno;
                        DeliverySuburb = this.state.deliveryarea;
                        DeliveryState = this.state.deliverystate;
                        DeliveryPostcode = this.state.deliverypincode;
                        DeliveryTime = Moment().add(40, 'minutes').format("hh:mm A");

                      }
                      else {

                        AsyncStorage.setItem("DeliveryApptNo", (this.state.deliveryapptno == null ? "" : this.state.deliveryapptno));
                        AsyncStorage.setItem("DeliveryStreet", this.state.deliveryStreet);
                        AsyncStorage.setItem("DeliverySuburb", this.state.deliveryarea);
                        AsyncStorage.setItem("DeliveryState", this.state.deliverystate);
                        AsyncStorage.setItem("DeliveryPostcode", this.state.deliverypincode);
                        // AsyncStorage.setItem("DeliveryTime", this.state.DeliveryTimevalue);
                        AsyncStorage.setItem("DeliverystNo", this.state.deliverystno);

                        DeliveryApptno = this.state.deliveryapptno;
                        DeliveryStreet = this.state.deliveryStreet;
                        DeliverystNo = this.state.deliverystno;
                        DeliverySuburb = this.state.deliveryarea;
                        DeliveryState = this.state.deliverystate;
                        DeliveryPostcode = this.state.deliverypincode;
                        DeliveryTime = this.state.DeliveryTimevalue;

                      }

                    }

                  }
                  else {
                    this.setState({ getnearstore: false });
                  }
                })
                .catch((error) => {
                  console.error(error);
                });

            }

            this.setState({ getnearstore: true });

          }
          else {
            this.setState({ getnearstore: false });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  onValueChange_DeliveryTime = (itemValue) => {
    this.setState({ DeliveryTimevalue: itemValue });
  }

  deliveryNext_button_clickOn() {

    if (this.state.selectdeliveryasap == false) {

      AsyncStorage.getItem("OutletId").then((OutletId) => {
        this.Get_Menu_from_api(OutletId);
      }).done();

      this.setState({ pickupButtonClick: true });
      this.setState({ deliverytimepopup: false });

      this.setState({ deliveryStreet: "" });
      this.setState({ deliveryarea: "" });
      this.setState({ deliverystate: "" });
      this.setState({ deliverypincode: "" });
      this.setState({ deliverystno: "" });
      this.setState({ deliveryapptno: "" });

      AsyncStorage.setItem("DeliveryTime", Moment().add(40, 'minutes').format("hh:mm A"));

      hideandshowDeliveryonColor = true;

      this.setState({ TwoButtonShowinDeliverypopup: false });

      this.setState({ selectdeliveryasap: true });

    }

    else
      if (this.state.DeliveryTimevalue == "") {
        this.setState({ Suggestion_notification: true });
        this.setState({ suggestion_message: 'CHOOSE DELIVERY TIME.' });
        setTimeout(() => {
          this.setState({ Suggestion_notification: false });
        }, 2000);
      }
      else if (this.state.DeliveryTimevalue == "Select Time") {
        this.setState({ Suggestion_notification: true });
        this.setState({ suggestion_message: 'CHOOSE DELIVERY TIME.' });
        setTimeout(() => {
          this.setState({ Suggestion_notification: false });
        }, 2000);
      } else {
        this.setState({ pickupButtonClick: true });
        this.setState({ deliverytimepopup: false });

        AsyncStorage.getItem("OutletId").then((OutletId) => {
          this.Get_Menu_from_api(OutletId);
        }).done();

        // this.setState({ openoutlet: true });

        this.setState({ deliveryStreet: "" });
        this.setState({ deliveryarea: "" });
        this.setState({ deliverystate: "" });
        this.setState({ deliverypincode: "" });
        this.setState({ deliverystno: "" });
        this.setState({ deliveryapptno: "" });

        AsyncStorage.setItem("DeliveryTime", this.state.DeliveryTimevalue);

        this.setState({ OrderTrenddingTimeValue: this.state.OrderTimeValue });
        this.setState({ OrderTrenddingTimeValue: this.state.DeliveryTimevalue });

        hideandshowDeliveryonColor = true;

        this.setState({ TwoButtonShowinDeliverypopup: false });

        this.setState({ selectdeliveryasap: true });

        this.setState(({ uniqueValue }) => ({
          uniqueValue: uniqueValue + 1
        }))
      }

    this.setState(({ MenuRefresh }) => ({
      MenuRefresh: MenuRefresh + 1
    }))

  }

  SelectPickup_to_Delivery() {
    Alert.alert(
      "Warning !",
      "Changes to delivery address will remove items from checkout ?", [
      {
        text: "CONTINUE",
        onPress: () => {

          AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
            if (MemberDeliveryAddress != null) {
              let responseJson = JSON.parse(MemberDeliveryAddress);

              this.setState({ deliverystno: responseJson.StreetNo });
              this.setState({ deliveryStreet: responseJson.StreetAddress });
              this.setState({ deliveryarea: responseJson.Suburb });
              this.setState({ deliverystate: responseJson.State });
              this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
              this.setState({ deliveryapptno: responseJson.ApptNo });

            } else {
              this.setState({ deliverystno: "" });
              this.setState({ deliveryStreet: "" });
              this.setState({ deliveryarea: "" });
              this.setState({ deliverystate: "" });
              this.setState({ deliverypincode: "" });
              this.setState({ deliveryapptno: "" });
            }

          }).done();

          AsyncStorage.getItem("SalesSummaryId").then((salesid) => {

            fetch(url + 'Mobile/AppCanceDeleveryOrder', {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "ApiToken": "imnyUfpf"
              },
              body: JSON.stringify({
                "SalesSummaryId": salesid,
                "IsDeliveryOrPickup": "Delivery"
              })
            })
              .then((response) => response.json())
              .then((responseJson) => {
                //  console.log(responseJson);
                if (responseJson.success == "1") {
                  this.Get_OredrList_from_api();
                  this.setState({ spinnerOrderList: false });
                  this.setState({ pickupButtonClick: true });
                  this.setState({ openoutlet: false });
                  this.setState({ UniqueKey: parseInt(this.state.UniqueKey) + 1 });
                  this.setState({ deliverytimepopup: true, deliveryAsap: true, });
                  this.setState({ TwoButtonShowinDeliverypopup: false });

                  this.setState({ editaddress: true });

                  AsyncStorage.setItem("DeliveryApptNo", "");
                  AsyncStorage.setItem("DeliveryStreet", "");
                  AsyncStorage.setItem("DeliverystNo", "");
                  AsyncStorage.setItem("DeliverySuburb", "");
                  AsyncStorage.setItem("DeliveryState", "");
                  AsyncStorage.setItem("DeliveryPostcode", "");
                  AsyncStorage.setItem("DeliveryTime", "");
                  DeliveryApptno = "";
                  DeliveryStreet = "";
                  DeliverystNo = "";
                  DeliverySuburb = "";
                  DeliveryState = "";
                  DeliveryPostcode = "";
                  DeliveryTime = "";
                  hideandshowDeliveryonColor = false;

                }
              })
              .catch((error) => {
                // console.error(error);
              });
          }).done();

        }
      },
      {
        text: "CANCEL",
        onPress: () => null,
        style: "cancel"
      }
    ]);
  }

  SelectDelivery_to_Pickup() {
    Alert.alert(
      "Warning !",
      "Do you want to cancel the delivery and pickup from " + this.state.outletName + " instead ?", [
      {
        text: "NO",
        onPress: () => {
          AsyncStorage.getItem("SalesSummaryId").then((salesid) => {

            fetch(url + 'Mobile/AppCanceDeleveryOrder', {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "ApiToken": "imnyUfpf"
              },
              body: JSON.stringify({
                "SalesSummaryId": salesid,
                "IsDeliveryOrPickup": "PickUp"
              })
            })
              .then((response) => response.json())
              .then((responseJson) => {
                //  console.log(responseJson);
                if (responseJson.success == "1") {
                  clearInterval(this.myIntervalDelivery);
                  this.Get_OredrList_from_api();
                  this.setState({ spinnerOrderList: false });
                  this.setState({ pickupButtonClick: true }),
                    this.setState({ deliverytimepopup: false }),
                    // this.setState({ openoutlet: true }),
                    this.setState(({ uniqueValue }) => ({
                      uniqueValue: uniqueValue + 1
                    })),

                    AsyncStorage.setItem("DeliveryApptNo", ""),
                    AsyncStorage.setItem("DeliveryStreet", ""),
                    AsyncStorage.setItem("DeliverystNo", ""),
                    AsyncStorage.setItem("DeliverySuburb", ""),
                    AsyncStorage.setItem("DeliveryState", ""),
                    AsyncStorage.setItem("DeliveryPostcode", ""),
                    AsyncStorage.setItem("DeliveryTime", ""),
                    DeliveryApptno = "",
                    DeliveryStreet = "",
                    DeliverystNo = "",
                    DeliverySuburb = "",
                    DeliveryState = "",
                    DeliveryPostcode = "",
                    DeliveryTime = "",
                    hideandshowDeliveryonColor = false;
                }
              })
              .catch((error) => {
                // console.error(error);
              });
          }).done();
        }
      },
      {
        text: "YES",
        onPress: () => {
          AsyncStorage.getItem("SalesSummaryId").then((salesid) => {

            fetch(url + 'Mobile/AppChangeOrderToPickup', {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "ApiToken": "imnyUfpf"
              },
              body: JSON.stringify({
                "SalesSummaryId": salesid,
                "IsDeliveryOrPickup": "PickUp"
              })
            })
              .then((response) => response.json())
              .then((responseJson) => {
                //  console.log(responseJson);
                if (responseJson.success == "1") {
                  clearInterval(this.myIntervalDelivery);
                  this.Get_OredrList_from_api();
                  this.setState({ spinnerOrderList: false });
                  this.setState({ pickupButtonClick: true }),
                    this.setState({ deliverytimepopup: false }),
                    //  this.setState({ openoutlet: true }),
                    this.setState(({ uniqueValue }) => ({
                      uniqueValue: uniqueValue + 1
                    })),

                    AsyncStorage.setItem("DeliveryApptNo", ""),
                    AsyncStorage.setItem("DeliveryStreet", ""),
                    AsyncStorage.setItem("DeliverystNo", ""),
                    AsyncStorage.setItem("DeliverySuburb", ""),
                    AsyncStorage.setItem("DeliveryState", ""),
                    AsyncStorage.setItem("DeliveryPostcode", ""),
                    AsyncStorage.setItem("DeliveryTime", ""),
                    DeliveryApptno = "",
                    DeliveryStreet = "",
                    DeliverystNo = "",
                    DeliverySuburb = "",
                    DeliveryState = "",
                    DeliveryPostcode = "",
                    DeliveryTime = "",
                    hideandshowDeliveryonColor = false;
                }
              })
              .catch((error) => {
                // console.error(error);
              });
          }).done();
        }
      }
    ]);
  }

  StartAgainbutton_api_call() {
    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      if (value != null) {
        fetch(url + 'Mobile/AppRemoveAndStartAgain?', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify({
            "SalesSummaryId": value,
            "IsDeliveryOrPickup": ""
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //  console.log(responseJson);
            if (responseJson.success == "1") {

              this.ClickOnStartAgain();
              this.Get_OredrList_from_api();
              this.setState({ ShowStartAgainButton: false });
              AsyncStorage.setItem('SalesSummaryId', "");
            }

          })
          .catch((error) => {
            console.error(error);
          });
      }
      else {
        this.ClickOnStartAgain();
        this.Get_OredrList_from_api();
        this.setState({ ShowStartAgainButton: false });
      }
    }).done();
  }

  ClickOnStartAgain() {

    let hi = "";
    AsyncStorage.setItem("SalesSummaryId", hi);

    AsyncStorage.setItem('Offer_Order_Type', "");

    AsyncStorage.setItem('OfferId', "");

    this.setState({ Offer_Appiled: false });

    this.setState({ Offer_Order_Type: "" });

    this.setState({ ShowStartAgainButton: false });

    this.setState({ ParkingToPickup: 'false' });
    AsyncStorage.setItem("ParkingToPickup", hi);
    AsyncStorage.setItem('Slotnumber', hi);

    this.setState({ selectdeliveryasap: true });

    AsyncStorage.setItem("DeliveryApptNo", hi);
    AsyncStorage.setItem("DeliverystNo", hi);
    AsyncStorage.setItem("DeliveryStreet", hi);
    AsyncStorage.setItem("DeliverySuburb", hi);
    AsyncStorage.setItem("DeliveryState", hi);
    AsyncStorage.setItem("DeliveryPostcode", hi);
    AsyncStorage.setItem("DeliveryTime", hi);

    AsyncStorage.setItem("OutletId", hi);
    AsyncStorage.setItem("OutletName", hi);
    AsyncStorage.setItem("OutletAddress", hi);
    AsyncStorage.setItem("IsPreorder", hi);
    AsyncStorage.setItem("PreOrderdate", hi);

    Person_MemberCard = "";
    Person_confirmmobile = "";
    // Person_FirstName = "";
    // Person_LastName = "";
    // Person_Mobile = "";
    // Person_Email = "";
    // Person_cardno = "";
    Person_referenceno = "";

    AsyncStorage.getItem("MemberDetails").then((MemberDetails) => {
      if (MemberDetails != null) {
        let responseJson = JSON.parse(MemberDetails);
        Person_FirstName = responseJson.FirstName;
        Person_LastName = responseJson.LastName;
        Person_Email = responseJson.Email;
        Person_Mobile = responseJson.MobileNumber;
        Person_cardno = "";

        if (responseJson.MemberCardId == 0) {
          this.setState({ getdata: false });
          this.setState({ getmemberdetail: false });
        }
        else {
          this.setState({ getdata: true });
          this.setState({ getmemberdetail: false });
        }

      } else {
        Person_FirstName = "";
        Person_LastName = "";
        Person_Email = "";
        Person_Mobile = "";
        Person_cardno = "";

        this.setState({ getdata: false });
        this.setState({ getmemberdetail: false });

      }

    }).done();

    AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
      if (MemberDeliveryAddress != null) {
        let responseJson = JSON.parse(MemberDeliveryAddress);

        this.setState({ deliverystno: responseJson.StreetNo });
        this.setState({ deliveryStreet: responseJson.StreetAddress });
        this.setState({ deliveryarea: responseJson.Suburb });
        this.setState({ deliverystate: responseJson.State });
        this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
        this.setState({ deliveryapptno: responseJson.ApptNo });

      } else {
        this.setState({ deliverystno: "" });
        this.setState({ deliveryStreet: "" });
        this.setState({ deliveryarea: "" });
        this.setState({ deliverystate: "" });
        this.setState({ deliverypincode: "" });
        this.setState({ deliveryapptno: "" });
      }

    }).done();

    AdditionalMessage = "";
    CouponCode = "";

    this.setState({ time: "" });
    clearInterval(this.myInterval);
    clearInterval(this.myIntervalDelivery);

    cardName = "";
    cardNumber = "";
    cardCvn = "";
    cardexpirymonth = "";
    cardexpiryyear = "";
    totalDuration = '';
    // showtimer = false;

    DeliveryApptno = "";
    DeliveryStreet = "";
    DeliverystNo = "";
    DeliverySuburb = "";
    DeliveryState = "";
    DeliveryPostcode = "";
    DeliveryTime = "";

    hideandshowDeliveryonColor = false;

    this.setState({ OfferName: "" });
    this.setState({ OfferAmount: 0 });

    Selected_Modifiers_Array = [];

    let d = [];
    this.setState({

      MobilenoOnshow_Message: false,

      PaymentSuccessobj: {},

      CardDetails: "",

      memberdetailsobj: {},

      DeliveryTrendingTimeArrayList: d,

      MenuListArray: d,
      ProductListArray: d,
      ModifiersGroupListArray: d,
      ProductModifierByGroupListArray: d,
      DefaultModifiersListArray: d,
      OrderListArray: d,
      TraddingHoursListArray: d,
      PreOrderHoursListArray: d,
      GroupWithModifiersListtArray: d,

      // getmemberdetail: false,
      // getdata: false,

      OrderTotalAmount: 0,

      spinnerOutlet: false,
      spinnerModifiers: false,
      spinnerOrderList: false,
      persondetails: false,
      TreddingHour: false,
      fillorderdetails: false,
      creaditcardview: false,
      openoutlet: false,

      preorderpopup: false,
      oprnpreordertimepopup: false,
      oprnpreordertime: false,
      preordertime: '',

      loadMenus: true,
      loadProducts: false,

      networkconnection: false,

      payloader: false,
      paymentSuccessfull: false,
      Iscultleryrequired: false,

      deliverytimepopup: false,
      deliveryAsap: true,
      pickupButtonClick: false,

      Success_notification: false,
      Suggestion_notification: false,

      success_message: '',
      suggestion_message: 'FIRSTNAME REQUIRED.',

      gstAmount: 0,
      promoAmount: 0,
      promoCode: "",
      TakeAwayDiscount: 0,

      outletId: 0,
      productId: 0,

      outletAddress: "",
      outletName: "",
      ProductName: "",
      menuImage: "",
      menuName: "",
      headerOutletName: "Find A RASHAYS Near You",

      screenchange: "",

      slectmdofiersGroup: "",
      selectOrderTime: "later",

      ProductPrice: 0,
      ProductQtychangePrice: 0,

      UniqueKey: 1,
      uniqueValue: 1,
      accordinrefreshkey: 1,

      Modifiergroup_MaxQty: 0,
      qty: 1,

      salesSummaryId: 0,

      PreOrderTimeValue: "",

      OrderTimeValue: "",
      OrderTrenddingTimeValue: "",

      productimage: '',
      productdesc: "",

      totalDuration: 0,

      // deliverystno: '',
      // deliveryStreet: '',
      // deliverypincode: '',
      // deliveryarea: '',
      // deliverystate: '',
      getnearstore: true,

      text: '',
      DeliveryTimevalue: "",

      DeliveryStreet: "",
      DeliverySuburb: "",
      DeliveryState: "",
      DeliveryPostcode: "",
      DeliveryTime: "",

      IsDeliveryOrPickup: "",
      DeliveryFees: 0,

      searchboxclick: false,

      showdeliveryButton: false,
      showpickupButton: false,
      showPreorder: false,

      PreOrderdate: "",

      IsPreorder: "false",
      IsPreorderDeliveryOrPickup: "",

      showapiloader: false,

      TwoButtonShowinDeliverypopup: false,
    });

    // this.setState({ showapiloader: true });

    fetch(url + 'Mobile/AppStatusCheckPicUpDeliveryPreOrder?', {
      headers: {
        "Accept": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == "1") {
          this.setState({ showdeliveryButton: responseJson.record.IsDelivery });
          this.setState({ showpickupButton: responseJson.record.IsPickUp });
          this.setState({ showPreorder: responseJson.record.IsPreOrder });

          this.setState({ showapiloader: false });
        }
        else {
          this.setState({ showapiloader: false });
        }
      })
      .catch((error) => {
        this.setState({ showapiloader: false });
        console.error(error);
      });

  }

  _start = () => {
    this.setState({ drawer: true });
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };

  _close = () => {
    // return 
    Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
    setTimeout(() => {
      this.setState({ drawer: false });
    }, 600);

  }

  Member_Login_Api_call() {

    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (this.state.MemberEmail == '') {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!expression.test(this.state.MemberEmail)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.MemberPassword == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'PASSWORD REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {

      this.setState({ showapiloader: true });

      DeviceInfo.getDeviceName().then(deviceName => {
        NetworkInfo.getIPAddress().then(ipAddress => {
          fetch(url + 'Mobile/AppMemberLogin', {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
              // "ApiToken": "imnyUfpf"
            },
            body: JSON.stringify({
              Email: this.state.MemberEmail,
              Password: this.state.MemberPassword,
              IpAddress: ipAddress,
              DeviceId: deviceName
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
              // console.log(responseJson)
              if (responseJson.success == "1") {
                this.setState({ LoginScreen: false });

                this.setState({ welcomebackname: responseJson.FirstName })

                AsyncStorage.setItem('LOGIN', "1");

                AsyncStorage.setItem('MemberName', responseJson.FirstName);

                AsyncStorage.setItem('MemberId', responseJson.MemberId.toString());

                // this.setState({ Memberscreen: true });

                this.setState({ showapiloader: false });
                this.setState({ LoginScreen: false });
                this.setState({ BookTable: false });
                this.setState({ Dashboard: true });

                this.setState({ MemberpointsandorderhistoryArrayList: this.state.MemberpointsandorderhistoryArrayList.length = 0 });
                this.setState({ pageno: 0 });

                this.GetMemberCard_from_api();
                this.GetMemberPointswithhistory(0);

                AsyncStorage.setItem('MemberDetails', JSON.stringify(responseJson));

                if (responseJson.MemberAddress != null) {
                  AsyncStorage.setItem('MemberDeliveryAddress', JSON.stringify(responseJson.MemberAddress));
                }

                // let deliveryaddress = {
                //   "StreetNo": responseJson.StreetNo, "StreetAddress": responseJson.StreetAddress,
                //   "Suburb": responseJson.Suburb, "State": responseJson.State, "PostCode": responseJson.PostCode.toString()
                // };

                // AsyncStorage.setItem('MemberDeliveryAddress', JSON.stringify(deliveryaddress));

                this.setState({ deliverystno: responseJson.StreetNo });
                this.setState({ deliveryStreet: responseJson.StreetAddress });
                this.setState({ deliveryarea: responseJson.Suburb });
                this.setState({ deliverystate: responseJson.State });
                this.setState({ deliverypincode: responseJson.PostCode });
                this.setState({ deliveryapptno: responseJson.ApptNo });

                Person_FirstName = responseJson.FirstName;
                Person_LastName = responseJson.LastName;
                Person_Email = responseJson.Email;
                Person_Mobile = responseJson.MobileNumber;
                Person_cardno = responseJson.MemberCardId;

                this.setState({ getdata: true });
                this.setState({ getmemberdetail: false });

                this.setState({ LoginMember: "1" });
                this.setState({ Success_notification: true });
                this.setState({ success_message: responseJson.message });
                setTimeout(() => {
                  this.setState({ Success_notification: false });
                }, 2000);
              }
              else {

                this.setState({ showapiloader: false });

                this.Password.clear();
                AsyncStorage.setItem('LOGIN', "");

                // Person_FirstName = "";
                // Person_LastName = "";
                // Person_Email = "";
                // Person_Mobile = "";
                // Person_cardno = "";

                // AsyncStorage.setItem('MemberDetails', "");
                // AsyncStorage.setItem('MemberDeliveryAddress', "");
                AsyncStorage.setItem('MemberId', "");
                this.setState({ MemberPassword: "" });
                this.setState({ Suggestion_notification: true });
                this.setState({ suggestion_message: responseJson.message });
                setTimeout(() => {
                  this.setState({ Suggestion_notification: false });
                }, 2000);
              }
            })
            .catch((error) => {
              console.error(error);
              this.setState({ showapiloader: false });
            });

        });
      });

    }

  }

  open_drawer() {
    AsyncStorage.getItem("LOGIN").then((value) => {
      if (value != null) {
        this.setState({ LoginMember: value });
      }
      else {
        this.setState({ LoginMember: "" });
      }
    }).done();
    this._start();
  }

  GetOffer() {
    this.setState({ showapiloader: true });
    // this.setState({ MyOfferScreen: true });
    fetch(url + 'Mobile/AppGetOfferList', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiToken": "imnyUfpf"
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData);
        OfferArrayList = responseData.data
        // this.setState({ OfferArrayList: responseData.data });
        this.setState({ showapiloader: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ showapiloader: false });
      });
  }

  Apply_Offers() {
    this.setState({ showapiloader: true });
    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      // AsyncStorage.getItem("OfferId").then((OfferId) => {
      // console.log(this.state.Offer_ID, '&SalesSummaryId=' + (value == null ? 0 : value));
      fetch(url + 'Mobile/AppOfferApply?OfferId=' + this.state.Offer_ID + '&SalesSummaryId=' + (value == null ? 0 : value), {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          if (responseJson.success == "1") {
            this.setState({ showapiloader: false });
            // this.setState({ Success_notification: true });
            // this.setState({ success_message: responseJson.message });
            // setTimeout(() => {
            //   this.setState({ Success_notification: false });
            // }, 2000);
            // this.setState({ OnlineOrder: true })
            // this.setState({ MyOfferScreen: false });
            AsyncStorage.setItem("SalesSummaryId", responseJson.SalesSummaryId.toString());
            AsyncStorage.setItem('OfferId', this.state.Offer_ID.toString());

            AsyncStorage.setItem('Offer_Order_Type', this.state.Offer_Details.OfferType);

            this.setState({ Offer_Order_Type: this.state.Offer_Details.OfferType });

            this.setState({ Offer_Appiled: true });
          }
          else {
            this.setState({ showapiloader: false });
            this.setState({ Suggestion_notification: true });
            this.setState({ suggestion_message: responseJson.message });
            setTimeout(() => {
              this.setState({ Suggestion_notification: false });
            }, 4000);
          }
          this.Get_OredrList_from_api();
        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });
      // }).done();
    }).done();
  }

  Delete_offers() {
    AsyncStorage.getItem("SalesSummaryId").then((value) => {
      AsyncStorage.getItem("OfferId").then((OfferId) => {
        fetch(url + 'Mobile/AppRemoveOfferCode?OfferId=' + OfferId + '&SalesSummaryId=' + value, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "ApiToken": "imnyUfpf"
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.success == "1") {
              AsyncStorage.setItem('OfferId', "");
              this.setState({ showapiloader: false });
              this.setState({ Success_notification: true });
              this.setState({ success_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);
            }
            else {
              this.setState({ showapiloader: false });
              this.setState({ Suggestion_notification: true });
              this.setState({ suggestion_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Suggestion_notification: false });
              }, 2000);
            }
            this.Get_OredrList_from_api();
          })
          .catch((error) => {
            console.error(error);
            this.setState({ showapiloader: false });
          });
      }).done();
    }).done();
  }

  User_verify_For_Offers() {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const num = /^\d+$/;
    const name = /^[a-zA-Z]+$/;

    if (this.state.OfferFirstName.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'First Name Required !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(this.state.OfferFirstName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in First Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    if (this.state.OfferLastName.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Last Name Required !' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(this.state.OfferLastName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in Last Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.OfferMobileNo.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NO REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.OfferMobileNo.length <= 9) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: '10 DIGIT MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(this.state.OfferMobileNo)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NO REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.OfferEmail.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!expression.test(this.state.OfferEmail)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {
      this.setState({ showapiloader: true });
      fetch(url + 'Mobile/AppAccessOffer?FirstName=' + this.state.OfferFirstName + '&LastName=' + this.state.OfferLastName + '&MobileNumber=' + this.state.OfferMobileNo + '&Email=' + this.state.OfferEmail, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          if (responseJson.success == "1") {
            this.setState({ showapiloader: false });
            this.setState({ showOfferOtpbox: true });
            this.setState({ ApiresponseOtp: responseJson.otp });

            this.setState({ OtpTimer: 59 });

            this.startTimer();

            this.setState({ Success_notification: true });
            this.setState({ success_message: responseJson.message });
            setTimeout(() => {
              this.setState({ Success_notification: false });
            }, 5000);
          }
          else {
            this.setState({ showapiloader: false });
            this.setState({ Suggestion_notification: true });
            this.setState({ suggestion_message: responseJson.message });
            setTimeout(() => {
              this.setState({ Suggestion_notification: false });
            }, 4000);
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });
    }

  }

  Match_Otp_for_AccessOffers() {
    const num = /^\d+$/;
    if (this.state.OfferOtp.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'OTP REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.OfferOtp.length <= 3) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: '4 DIGIT OTP REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(this.state.OfferOtp)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'OTP REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {

      if (this.state.ApiresponseOtp.toString() == this.state.OfferOtp) {
        AsyncStorage.setItem('VerifyUser', this.state.OfferEmail);
        this.setState({ OfferApplyPopup: false });
        this.Confirm_Offer_Email();
        this.Apply_Offers(this.state.Offername);

        let persondetails = {
          "MemberCardId": 0,
          "FirstName": this.state.OfferFirstName, "LastName": this.state.OfferLastName,
          "Email": this.state.OfferEmail, "MobileNumber": this.state.OfferMobileNo
        };

        AsyncStorage.setItem('MemberDetails', JSON.stringify(persondetails));

        Person_FirstName = this.state.OfferFirstName;
        Person_LastName = this.state.OfferLastName;
        Person_Email = this.state.OfferEmail;
        Person_Mobile = this.state.OfferMobileNo;
        Person_cardno = "";

        this.setState({ getdata: false });
        this.setState({ getmemberdetail: false });

      }
      else {
        this.setState({ Suggestion_notification: true });
        this.setState({ suggestion_message: 'INVALID OTP' });
        setTimeout(() => {
          this.setState({ Suggestion_notification: false });
        }, 2000);
      }

    }
  }

  Confirm_Offer_Email() {
    fetch(url + 'Mobile/AppVerifiyOfferAccess?FirstName=' + this.state.OfferFirstName + '&LastName=' + this.state.OfferLastName + '&MobileNumber=' + this.state.OfferMobileNo + '&Email=' + this.state.OfferEmail + '&OTP=' + this.state.OfferOtp, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiToken": "imnyUfpf"
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.success == "1") {

        }
        else {

        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ showapiloader: false });
      });
  }

  GetMemberPointswithhistory(num) {
    this.setState({ apiloding: true });
    AsyncStorage.getItem("MemberId").then((MemberId) => {
      fetch(url + 'Mobile/AppMemberHistory?MemberId=' + MemberId + '&PageNo=' + num, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {
            // let ds = responseJson.data;
            if (this.state.MemberpointsandorderhistoryArrayList.length > 0) {
              let array = this.state.MemberpointsandorderhistoryArrayList;
              let interest = array.concat(responseJson.data);
              this.setState({ MemberpointsandorderhistoryArrayList: interest });
            }
            else {
              this.setState({ MemberpointsandorderhistoryArrayList: responseJson.data });
            }
            this.setState({ pageno: responseJson.Page });
            this.setState({ apiloding: false });
          }
          else {
            this.setState({ apiloding: false });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ apiloding: false });
        });

    }).done();
  }

  GetMemberpointsforredeem() {
    this.setState({ apiloding: true });
    AsyncStorage.getItem("MemberId").then((MemberId) => {
      fetch(url + 'Mobile/AppGetMemberPoints?MemberId=' + MemberId, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == "1") {

            this.setState({ RemainingPoins_memberPoints: responseJson.data.RemainingPoins });
            this.setState({ NeededPoints_memberPoints: responseJson.data.NeededPoints });
            this.setState({ VoucherPoints_memberPoints: responseJson.data.VoucherPoints });
            this.setState({ TotalPoints_memberPoints: responseJson.data.TotalPoints });

          }
          else {
            this.setState({ RemainingPoins_memberPoints: 0 });
            this.setState({ NeededPoints_memberPoints: 0 });
            this.setState({ VoucherPoints_memberPoints: 0 });
            this.setState({ TotalPoints_memberPoints: 0 });

            this.setState({ apiloding: false });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ apiloding: false });
        });

    }).done();
  }

  GetMemberOrder_from_api() {
    AsyncStorage.getItem("MemberId").then((MemberId) => {
      fetch(url + 'Mobile/AppGetMemberOrder?MemberId=' + MemberId, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({ GetMemberOrderHistoryArrayList: responseJson.orders });

        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });

    }).done();
  }

  GetMemberCard_from_api() {
    AsyncStorage.getItem("MemberId").then((memberId) => {
      fetch(url + 'Mobile/AppMemberCards', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
        body: JSON.stringify({
          MemberId: memberId
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({ GetMemberCardArrayList: responseJson.data });

        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });

    }).done();
  }

  onSuccess = e => {
    // console.log(e.data);
    // alert(e.data);

    let fetch = e.data.substring(0, 5);

    if (fetch.toString() == "Data=") {
      let d = e.data.substring(5)
      let data = JSON.parse(d);

      this.setState({ scanqr: "true" });
      AsyncStorage.setItem('scanqr', "true");

      AsyncStorage.setItem('Slotnumber', "");

      AsyncStorage.setItem('tableno', data.TableNumber.toString());

      AsyncStorage.setItem('RHTId', data.RHTId);

      this.Get_Menu_from_api(data.OutLetId);
      this.setState({ openoutlet: false });
      AsyncStorage.setItem('OutletId', data.OutLetId.toString());
      this.setState({ outletId: data.OutLetId });

      this.setState({ headerOutletName: data.storeName });

      AsyncStorage.setItem('OutletName', data.storeName.toString());
      AsyncStorage.setItem('OutletAddress', data.StoreAddress.toString());

      AsyncStorage.getItem("MemberDetails").then((MemberDetails) => {
        if (MemberDetails != null) {
          let responseJson = JSON.parse(MemberDetails);
          DineIn_FirstName = responseJson.FirstName;
          DineIn_LastName = responseJson.LastName;
          DineIn_Email = responseJson.Email;
          DineIn_Mobile = responseJson.MobileNumber;
        } else {
          DineIn_FirstName = "";
          DineIn_LastName = "";
          DineIn_Email = "";
          DineIn_Mobile = "";
        }
      }).done();

      this.setState({ openqrcode: false });
      QR_booking_peopleId = 0;
      this.setState({ Dine_In_CustomerInformation_Popup: true });

    }
    else if (e.data.substring(0, 8) == "Parking=") {
      let d = e.data.substring(8)
      let data = JSON.parse(d);

      this.setState({ scanqr: "true" });
      AsyncStorage.setItem('scanqr', "true");

      AsyncStorage.setItem('tableno', "0");

      AsyncStorage.setItem('Slotnumber', data.SlotNumber);

      AsyncStorage.setItem('RHTId', data.RHTId);

      this.Get_Menu_from_api(data.OutLetId);
      this.setState({ openoutlet: false });
      AsyncStorage.setItem('OutletId', data.OutLetId.toString());
      this.setState({ outletId: data.OutLetId });

      this.setState({ headerOutletName: data.storeName });

      AsyncStorage.setItem('OutletName', data.storeName.toString());
      AsyncStorage.setItem('OutletAddress', data.StoreAddress.toString());

      AsyncStorage.getItem("MemberDetails").then((MemberDetails) => {
        if (MemberDetails != null) {
          let responseJson = JSON.parse(MemberDetails);
          DineIn_FirstName = responseJson.FirstName;
          DineIn_LastName = responseJson.LastName;
          DineIn_Email = responseJson.Email;
          DineIn_Mobile = responseJson.MobileNumber;
        } else {
          DineIn_FirstName = "";
          DineIn_LastName = "";
          DineIn_Email = "";
          DineIn_Mobile = "";
        }
      }).done();

      this.setState({ openqrcode: false });
      QR_booking_peopleId = 0;
      this.setState({ Dine_In_CustomerInformation_Popup: true });

    }

  };

  Save_DineIn_customer_Details() {

    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const num = /^\d+$/;
    const name = /^[a-zA-Z]+$/;

    if (DineIn_FirstName == "") {
      // this.refs.toast.show('First name is required.', 3000);

      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'FIRSTNAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);

    }
    else if (!name.test(DineIn_FirstName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in First Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (DineIn_LastName == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'LASTNAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(DineIn_LastName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in Last Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (DineIn_Mobile == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (DineIn_Mobile.length <= 9) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: '10 DIGIT MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(DineIn_Mobile)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (DineIn_Email == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!expression.test(DineIn_Email)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (QR_booking_peopleId == 0) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'PEOPLE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {
      this.setState({ showapiloader: true });

      let data = { "FirstName": DineIn_FirstName, "LastName": DineIn_LastName, "Email": DineIn_Email, "MobileNo": DineIn_Mobile }
      AsyncStorage.setItem('DineInCustomerInformation', JSON.stringify(data));

      AsyncStorage.getItem("OutletId").then((OutletId) => {
        AsyncStorage.getItem("OutletName").then((OutletName) => {
          AsyncStorage.getItem("RHTId").then((RHTId) => {
            AsyncStorage.getItem("tableno").then((tableno) => {
              AsyncStorage.getItem("Slotnumber").then((Slotnumber) => {

                var fromHour = Moment().format('HH:mm');

                var toHour = '';

                if (this.state.ParkingToPickup != "true") {

                  if (QR_booking_peopleId == 1) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(30, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                  else if (QR_booking_peopleId == 2) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(30, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                  else if (QR_booking_peopleId >= 2 && QR_booking_peopleId < 5) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(45, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                  else if (QR_booking_peopleId >= 4 && QR_booking_peopleId < 11) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(60, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                  else if (QR_booking_peopleId >= 10 && QR_booking_peopleId < 18) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(90, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                  else if (QR_booking_peopleId > 17) {
                    var someMoment = Moment(fromHour, ["HH:mm"]);
                    someMoment.add(120, 'minutes')
                    toHour = someMoment.format("HH:mm");
                  }
                }
                else {
                  var someMoment = Moment(fromHour, ["HH:mm"]);
                  someMoment.add(20, 'minutes')
                  toHour = someMoment.format("HH:mm");
                }

                fetch(url + 'MobileDineIn/NewBooking', {
                  method: "POST",
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "ApiToken": "imnyUfpf"
                  },
                  body: JSON.stringify({
                    Add1: "",
                    Add2: "",
                    CustomerId: "0",
                    CustomerName: DineIn_FirstName + " " + DineIn_LastName,
                    email: DineIn_Email,
                    Event: "API Call",
                    FirstName: DineIn_FirstName,
                    FromHour: fromHour,
                    Gender: "M",
                    HFrhtId: RHTId,
                    Highchair: "0",
                    IsFunction: "false",
                    LastName: DineIn_LastName,
                    Mobile: DineIn_Mobile,
                    NoOfPpl: QR_booking_peopleId,
                    OptionalComment: "",
                    QuickNotes: "",
                    RestaurantId: OutletId,
                    RestaurantName: OutletName,
                    Salution: "Mr.",
                    Status: "Created",
                    TableStr: RHTId,
                    ToHour: toHour,
                    bookDate: Moment().format('MM/DD/YYYY').toString(),
                    bookingCode: "0",
                    bookingId: "0",
                    bookingType: "Online",
                    duration: "0",
                    refNumber: "test",
                    sendEmail: "true",
                    sendLateBooking: "false",
                    sendSMS: "true"
                    // DeviceName: instructions,
                    // IpAddress: MyIp,
                    // DeviceId: this.state.value,
                  })
                })
                  .then((response) => response.json())
                  .then((responseJson) => {
                    if (responseJson.success == "1") {

                      if (this.state.ParkingToPickup != "true") {

                        fetch(url + 'MobileDineIn/AppSaveOrderItemByQrCode', {
                          method: "POST",
                          headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "ApiToken": "imnyUfpf"
                          },
                          body: JSON.stringify({
                            SalesSummaryId: 0,
                            FirstName: DineIn_FirstName,
                            LastName: DineIn_LastName,
                            email: DineIn_Email,
                            MobileNumber: DineIn_Mobile,
                            OutletId: OutletId,
                            TableNumber: tableno,
                            HouseNumber: tableno != "0" ? "Table " + tableno : Slotnumber,
                            IsParkingOrTable: tableno == "0" ? "Parking" : "Table"
                          })
                        })
                          .then((response) => response.json())
                          .then((responseJson) => {

                            if (responseJson.success == "1") {

                              this.setState({ showapiloader: false });

                              AsyncStorage.setItem("SalesSummaryId", responseJson.record_id.toString());
                              this.setState({ Dine_In_CustomerInformation_Popup: false });
                            }
                            else {
                              this.setState({ showapiloader: false });

                              this.setState({ Suggestion_notification: true });
                              this.setState({ suggestion_message: 'PLEASE TRY AGAIN' });
                              setTimeout(() => {
                                this.setState({ Suggestion_notification: false });
                              }, 2000);
                            }

                          })
                          .catch((error) => {
                            console.error(error);
                            this.setState({ showapiloader: false });
                          });

                      }
                      else {
                        this.setState({ showapiloader: false });

                        this.setState({ Dine_In_CustomerInformation_Popup: false });
                      }

                    } else {
                      this.setState({ showapiloader: false });

                      this.setState({ Suggestion_notification: true });
                      this.setState({ suggestion_message: responseJson.error });
                      setTimeout(() => {
                        this.setState({ Suggestion_notification: false });
                      }, 2000);
                    }
                  })
                  .catch((error) => {
                    this.setState({ showapiloader: false });
                    console.error(error);
                  });
              }).done();
            }).done();
          }).done();
        }).done();
      }).done();

    }

  }

  asaptime() {
    let time = "";
    AsyncStorage.getItem("DeliveryTime").then((DeliverTime) => {
      if (DeliverTime !== null) {
        this.setState({ timefortrendingour: 40 });
      }
      else {
        this.setState({ timefortrendingour: 20 });
      }
    }).done()
    // console.log(time);

  }

  ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="rgb(247,143,33)"
        size="large"
        style={{ height: screenHeight, width: screenWidth, justifyContent: 'center', }}
      />
    );
  }

  Get_Store_For_Bookingform() {
    fetch(url + 'MobileDineIn/getOutletByArea', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiToken": "imnyUfpf"
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log( "store = " ,responseJson)
        if (responseJson.success == "1") {
          this.setState({ BookingStorelist: responseJson.OutletList })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  Get_Time_For_Bookingform() {

    if (BookingStoreId == "0") {
    }
    else if (this.state.BookingDate == "") {
    }
    else if (BookingpeopleId == 0) {
    }
    else {
      fetch(url + 'MobileDineIn/SearchTimeByOutlet?OutletId=' + BookingStoreId + '&BookingDate=' + this.state.BookingDate + '&NoOfPax=' + BookingpeopleId, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson)

          this.setState({ BookingTime: [] });
          BookingHourFrom = '0';
          if (responseJson.success == "1") {
            this.setState({ BookingTime: responseJson.OutletHourList })
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  GetTableListWithoutBooked() {

    fetch(url + 'MobileDineIn/GetTableListWithoutBooked', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "ApiToken": "imnyUfpf"
      },
      body: JSON.stringify({
        RestId: BookingStoreId,
        BookDate: Moment(this.state.BookingDate, "DD/MM/YYYY").format('MM/DD/YYYY'),
        HourFrom: BookingHourFrom,
        HourTo: BookingHourTo,
        NoOfPpl: BookingpeopleId
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        if (responseJson.success == "true") {
          var lab = "";
          var listmanage = [];
          responseJson.TableListWithoutBooked.map(function (item) {
            listmanage = item.rhtId;
            lab += listmanage + ",";
          });
          listmanage = lab.slice(0, -1);
          if (responseJson.success == "true") {
            this.setState({ tableId: listmanage });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }

  updatevalue(text, field) {
    var str = text;
    str = str.replace(/ +/g, "");
    if (field == 'fname') {
      this.setState({ Bookingfname: str, })
    }
    else if (field == 'lname') {
      this.setState({
        Bookinglname: str,
      })
    }
    else if (field == 'email') {
      this.setState({
        Bookingemail: text,
      })
    }
    else if (field == 'phone') {
      this.setState({
        Bookingphone: text,
      })
    }
    else if (field == 'message') {
      this.setState({
        Bookingnote: text,
      })
    }
  }

  BookTable = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex = /^[a-zA-Z]+$/;
    let rege = /^\d+$/;

    if (BookingStoreId == "0") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'RESTAURANT REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.BookingDate == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'DATE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (BookingpeopleId == 0) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'PEOPLE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (BookingHourFrom == '0') {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'TIME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Bookingfname === "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'FIRST NAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (regex.test(this.state.Bookingfname) === false) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in First Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Bookinglname === "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'LAST NAME REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (regex.test(this.state.Bookinglname) === false) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in Last Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Bookingphone === "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NUMBER REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Bookingphone.length !== 10) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NUMBER MUST BE 10 DIGIT' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (rege.test(this.state.Bookingphone) === false) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'SPECIAL CHARACTERS ARE NOT ALLOW IN MOBILE NO.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Bookingemail === "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (reg.test(this.state.Bookingemail) === false) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {

      this.setState({ showapiloader: true });

      var BookingStoreName = "";

      this.state.BookingStorelist.map(function (item) {
        if (item.OutletId == BookingStoreId) {
          BookingStoreName = item.OutletName;
        }
      });

      fetch(url + 'MobileDineIn/NewBooking', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        },
        body: JSON.stringify({
          Add1: "",
          Add2: "",
          CustomerId: "0",
          CustomerName: this.state.Bookingfname,
          email: this.state.Bookingemail,
          Event: "API Call",
          FirstName: this.state.Bookingfname,
          FromHour: BookingHourFrom,
          Gender: "M",
          HFrhtId: this.state.tableId,
          Highchair: "0",
          IsFunction: "false",
          LastName: this.state.Bookinglname,
          Mobile: this.state.Bookingphone,
          NoOfPpl: BookingpeopleId,
          OptionalComment: this.state.Bookingnote,
          QuickNotes: this.state.Bookingnote,
          RestaurantId: BookingStoreId,
          RestaurantName: BookingStoreName,
          Salution: "Mr.",
          Status: "Created",
          TableStr: this.state.tableId,
          ToHour: BookingHourTo,
          bookDate: Moment(this.state.BookingDate, "DD/MM/YYYY").format('MM/DD/YYYY'),
          bookingCode: "0",
          bookingId: "0",
          bookingType: "Online",
          duration: "0",
          refNumber: "test",
          sendEmail: "true",
          sendLateBooking: "false",
          sendSMS: "true"
          // DeviceName: instructions,
          // IpAddress: MyIp,
          // DeviceId: this.state.value,
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson)
          if (responseJson.success == "1") {
            BookingStoreId = "0";
            this.setState({ BookingDate: "" });
            this.setState({ Bookingfname: "" });
            this.setState({ Bookinglname: "" });
            this.setState({ Bookingemail: "" });
            this.setState({ Bookingphone: "" });
            this.setState({ Bookingnote: "" });
            this.setState({ tableId: '' });
            BookingpeopleId = 0;
            BookingHourFrom = '0';
            BookingHourTo = "";

            this.setState({ showapiloader: false });

            this.setState({ Success_notification: true });
            this.setState({ success_message: responseJson.error });
            setTimeout(() => {
              this.setState({ Success_notification: false });
            }, 2000);

          }
          else {
            this.setState({ showapiloader: false });

            this.setState({ Suggestion_notification: true });
            this.setState({ suggestion_message: responseJson.error });
            setTimeout(() => {
              this.setState({ Suggestion_notification: false });
            }, 2000);
          }
        })
        .catch((error) => {
          this.setState({ showapiloader: false });
          console.error(error);
        });
    }
  }

  Get_Profile_api() {
    this.setState({ showapiloader: true });
    AsyncStorage.getItem("MemberId").then((MemberId) => {

      fetch(url + 'Mobile/AppGetMemberProfileDetails?MemberId=' + MemberId, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "ApiToken": "imnyUfpf"
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson)
          if (responseJson.success == "1") {

            this.setState({ Profile_firstName: responseJson.data.FirstName });
            this.setState({ Profile_LastName: responseJson.data.LastName });
            this.setState({ Profile_Email: responseJson.data.Email });
            this.setState({ Profile_Contact: responseJson.data.MobileNumber });

            if (responseJson.data.Address1 != null) {
              this.setState({ Profile_Address: responseJson.data.Address1 });
            }

            if (responseJson.data.PostCode != 0) {
              this.setState({ Profile_Postcode: responseJson.data.PostCode });
            }

            this.setState({ Profile_BirthDate: Moment(responseJson.data.DateOfBirth).format('DD.MM.YYYY') });
            this.setState({ Profile_Password: responseJson.data.Password });
            this.setState({ Profile_Gender: responseJson.data.Gender });

            if (responseJson.data.StoreName != null) {
              this.setState({ Profile_Restaurant: responseJson.data.StoreName });
            }

            this.setState({ showapiloader: false });

          }
          else {
            this.setState({ Profile_firstName: "" });
            this.setState({ Profile_LastName: "" });
            this.setState({ Profile_Email: "" });
            this.setState({ Profile_Contact: "" });
            this.setState({ Profile_Address: "" });
            this.setState({ Profile_Postcode: "" });
            this.setState({ Profile_BirthDate: "" });
            this.setState({ Profile_Password: "" });
            this.setState({ Profile_Gender: "" });
            this.setState({ Profile_Restaurant: "" });

            this.setState({ showapiloader: false });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ showapiloader: false });
        });
    }).done();
  }

  Update_Profile() {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const num = /^\d+$/;
    const name = /^[a-zA-Z]+$/;

    if (this.state.Profile_firstName.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'First Name Required' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!name.test(this.state.Profile_firstName)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Invalid characters in First Name' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Profile_Contact.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NO REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Profile_Contact.length <= 9) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: '10 DIGIT MOBILE REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!num.test(this.state.Profile_Contact)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'MOBILE NO REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Profile_Email.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'EMAIL REQUIRED.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (!expression.test(this.state.Profile_Email)) {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'INVALID EMAIL.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else if (this.state.Profile_Password.replace(/\s+$/, "") == "") {
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Password Required' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }
    else {
      this.setState({ showapiloader: true });
      AsyncStorage.getItem("MemberId").then((MemberId) => {

        fetch(url + 'Mobile/AppUpdateMemberProfile', {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            // "ApiToken": "imnyUfpf"
          },
          body: JSON.stringify({
            FirstName: this.state.Profile_firstName,
            LastName: this.state.Profile_LastName,
            Email: this.state.Profile_Email,
            MemberId: MemberId,
            MobileNumber: this.state.Profile_Contact,
            Gender: this.state.Profile_Gender,
            Address1: this.state.Profile_Address,
            DateOfBirth: Moment(this.state.Profile_BirthDate, "DD.MM.YYYY").format('YYYY-MM-DD'),
            PostCode: this.state.Profile_Postcode == "" ? 0 : this.state.Profile_Postcode,
            Password: this.state.Profile_Password,
            StoreName: this.state.Profile_Restaurant,
            ApiToken: "imnyUfpf"
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            // console.log(responseJson)
            if (responseJson.success == "1") {

              this.setState({ showapiloader: false });

              this.setState({ Edit_Profile: false });

              this.setState({ Success_notification: true });
              this.setState({ success_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Success_notification: false });
              }, 2000);
            }
            else {
              this.setState({ showapiloader: false });
              this.setState({ Suggestion_notification: true });
              this.setState({ suggestion_message: responseJson.message });
              setTimeout(() => {
                this.setState({ Suggestion_notification: false });
              }, 2000);
            }
          })
          .catch((error) => {
            console.error(error);
            this.setState({ showapiloader: false });
          });
      }).done();
    }
  }

  generateCaptcha = () => {
    var numberOne = Math.floor(Math.random() * 10000) + 1;
    var captchaCode = numberOne;
    this.setState({ randomNumberOne: numberOne });
    this.setState({ captchaHolder: captchaCode });
  }

  validateCaptchaCode = () => {
    var temp = this.state.randomNumberOne;
    if (this.state.textInputHolder == temp) {
      //Captcha match
      // Alert.alert("Captcha Matched");
    }
    else {
      //Captcha not match
      this.setState({ Suggestion_notification: true });
      this.setState({ suggestion_message: 'Captcha Verification Required.' });
      setTimeout(() => {
        this.setState({ Suggestion_notification: false });
      }, 2000);
    }

  }

  startTimer = () => {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  decrementClock = () => {
    if (this.state.OtpTimer === 0) {
      clearInterval(this.clockCall)
    }
    else {
      this.setState((prevstate) => ({ OtpTimer: prevstate.OtpTimer - 1 }));
    }
  };

  render() {

    var screenhei = Dimensions.get('window').height;
    if (DeviceInfo.getModel() == "iPhone X" || DeviceInfo.getModel() == "iPhone XS" || DeviceInfo.getModel() == "iPhone XS Max" || DeviceInfo.getModel() == "iPhone XR" || DeviceInfo.getModel() == "iPhone 11" || DeviceInfo.getModel() == "iPhone 11 Pro" || DeviceInfo.getModel() == "iPhone 11 Pro Max") {
      screenhei = parseFloat(Dimensions.get('window').height) - 30;
    }

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = screenhei;

    console.disableYellowBox = true;

    if (this.state.splshShow == true) {
      return (
        <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)' }}>
          <StatusBar hidden={true} />
          {/* <Image
            source={require('./assets/rasahys_logo.png')}
            style={{ width: 290, height: 60, }}
            resizeMode="stretch"
          /> */}
          <ImageBackground source={require('./assets/splash.png')}
            style={{ width: screenWidth, height: parseFloat(Dimensions.get('window').height), justifyContent: 'center', alignItems: 'center', }}>
            <Image
              source={require('./assets/rasahys_logo.png')}
              style={{ height: parseFloat(screenWidth) / 9, width: parseFloat(screenWidth) / 1.72 }}
              resizeMode="stretch"
            />
          </ImageBackground>
        </View>
      );
    }
    else if (this.state.openqrcode == true) {
      return (
        <QRCodeScanner
          // cameraProps={{ captureAudio: false }}
          onRead={this.onSuccess}
        />
      )
    }
    else
      return (
        <Root>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar hidden={true} />

            <View style={{ height: DeviceInfo.getModel() == "iPhone X" ? 30 : DeviceInfo.getModel() == "iPhone XS" ? 30 : DeviceInfo.getModel() == "iPhone XS Max" ? 30 : DeviceInfo.getModel() == "iPhone XR" ? 30 : DeviceInfo.getModel() == "iPhone 11" ? 30 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 30 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 30 : 0, width: screenWidth, backgroundColor: 'rgb(40, 40, 41)' }} ></View>

            <View style={{ width: screenWidth, height: 56, paddingBottom: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)', justifyContent: 'center' }}>
              {
                this.state.drawer == true ?
                  <TouchableOpacity activeOpacity={1} onPress={() => { this._close() }}
                    style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                    <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                  </TouchableOpacity>
                  :
                  this.state.JoinNowscreen == true ?
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ JoinNowscreen: false }); }}
                      style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                      <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                    </TouchableOpacity>
                    :
                    this.state.OnlineOrder == true ?
                      this.state.OrderTrack == true ?
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ OrderTrack: false }); }}
                          style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                          <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                        </TouchableOpacity>
                        :
                        this.state.paymentSuccessfull == true ?
                          null :
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              if (this.state.OrderListArray.length == 0) {
                                this.setState({ showtimer: false });
                                this.setState({ OnlineOrder: false });
                                this.StartAgainbutton_api_call();
                              }
                              else {
                                Alert.alert("RASHAYS", "Your cart will be reset, OK?", [
                                  {
                                    text: "No",
                                    onPress: () => null,
                                    style: "cancel"
                                  },
                                  {
                                    text: "YES", onPress: () => {
                                      this.setState({ showtimer: false });
                                      this.setState({ OnlineOrder: false });
                                      this.StartAgainbutton_api_call();
                                    }
                                  }
                                ]);
                              }
                            }}
                            style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                            <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                          </TouchableOpacity>
                      :
                      this.state.Bookingpopup == true ?
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ Bookingpopup: false }), this.setState({ pickupButtonClick: false }) }}
                          style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                          <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                        </TouchableOpacity>
                        :
                        this.state.MyOfferScreen == true ?
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              if (this.state.OfferApplyPopup == true) {
                                this.setState({ OfferApplyPopup: false }), this.setState({ showOfferOtpbox: false })
                              }
                              this.setState({ MyOfferScreen: false })
                            }}
                            style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                            <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                          </TouchableOpacity>
                          :
                          this.state.LoginScreen == true ?
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ LoginScreen: false }); }} style={{ position: 'absolute', left: 10, zIndex: 9999, padding: 2 }}>
                              <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                            </TouchableOpacity>
                            // <TouchableOpacity activeOpacity={1} onPress={() => this.open_drawer()}
                            //   style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                            //   <Image style={{ height: 30, width: 30, resizeMode: 'stretch', }} source={require('./assets/menuu.png')} />
                            // </TouchableOpacity>
                            :
                            this.state.BookTable == true ?
                              this.state.LoginMember == "" ?
                                <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ BookTable: false }); }}
                                  style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                                  <Image style={{ height: 28, width: 28 }} source={require('./assets/back_login.png')} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity activeOpacity={1} onPress={() => this.open_drawer()}
                                  style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                                  <Image style={{ height: 30, width: 30, resizeMode: 'stretch', }} source={require('./assets/menuu.png')} />
                                </TouchableOpacity>
                              :
                              <TouchableOpacity activeOpacity={1} onPress={() => this.open_drawer()}
                                style={{ position: 'absolute', left: 12, zIndex: 9999 }} >
                                <Image style={{ height: 30, width: 30, resizeMode: 'stretch', }} source={require('./assets/menuu.png')} />
                              </TouchableOpacity>
              }
              <Image style={{ height: 36, width: 200, resizeMode: 'stretch', alignSelf: 'center' }} source={require('./assets/rasahys_logo.png')} />

            </View>

            {
              this.state.Memberscreen == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 116, backgroundColor: 'white' }}>
                    {/* <View style={{ zIndex: 9999, height: 60, width: screenWidth, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)' }}>

                  <TouchableOpacity activeOpacity={1} onPress={() => { this.open_drawer() }} style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 5, zIndex: 9999, }}>
                    <Image style={{ height: 30, width: 30, }} source={require('./assets/menuu.png')} />
                  </TouchableOpacity>

                  <Image style={{ height: 26, width: 150, resizeMode: 'stretch', alignSelf: 'center' }} source={require('./assets/rasahys_logo.png')} />

                </View> */}

                    {/* <View style={{ height: 50, width: screenWidth, marginBottom: 10, marginTop: 2, backgroundColor: 'white' }}> */}
                    {this.state.welcomebackview == true ?
                      <Animated.View
                        style={{
                          transform: [
                            {
                              translateY: this.state.SlideInTop.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-700, 0]
                              })
                            }
                          ],
                          height: 50,
                          width: parseFloat(screenWidth) - 20,
                          marginBottom: 8, marginTop: 8,
                          alignSelf: 'center',
                          backgroundColor: "rgb(40, 40, 41)",
                          justifyContent: "center",
                          alignItems: 'center'
                        }}
                      >
                        <Text style={{ fontSize: 18, letterSpacing: 1, color: 'rgb(247, 143, 33)' }}>Welcome back, {this.state.welcomebackname.toUpperCase()} </Text>
                      </Animated.View>

                      : null}

                    {/* </View> */}

                    <ScrollView>
                      <View>
                        <FlatList
                          showsHorizontalScrollIndicator={false}
                          horizontal
                          data={this.state.GetMemberCardArrayList}
                          renderItem={({ item }) =>
                            <Card style={{ zIndex: 9999, padding: 1.2, borderRadius: 2, backgroundColor: 'rgb(247,143,33)', elevation: 5, marginLeft: 10, marginRight: 10, marginTop: 15, }}>

                              <View style={{ borderRadius: 2, backgroundColor: 'rgb(40, 40, 41)', paddingTop: 17, paddingBottom: 17, }}>

                                <Image style={{ height: 60, marginLeft: 20, width: ((parseFloat(screenWidth) - 20) / 10) * 5, resizeMode: 'stretch' }} source={require('./assets/logo_card.png')} />

                                <Text style={{ letterSpacing: 0.6, fontWeight: '700', paddingLeft: 20, color: '#fff', marginTop: 15, fontSize: 22 }}>{item.MemberName}</Text>

                                <View style={{ flexDirection: 'row', backgroundColor: '', height: 50, marginTop: 10, width: parseFloat(screenWidth) - 20 }}>

                                  <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 20) / 10) * 6 }}>
                                    <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                                      <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Points</Text>
                                      <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.Points}</Text>
                                    </View>
                                  </View>

                                  <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 20) / 10) * 4 }}>
                                    <View style={{}}>
                                      <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Expiry</Text>
                                      <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{Moment(item.ExpiryDate).format("DD/MM/YYYY")}</Text>
                                    </View>
                                  </View>

                                </View>

                                <View style={{ flexDirection: 'row', backgroundColor: '', height: 50, marginTop: 10, width: parseFloat(screenWidth) - 20 }}>

                                  <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 20) / 10) * 6 }}>
                                    <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                                      <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Member Card No.</Text>
                                      <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.MemberCardId}</Text>
                                    </View>
                                  </View>

                                  <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 20) / 10) * 4 }}>
                                    <View style={{}}>
                                      <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Status</Text>
                                      <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.Active == true ? "Active" : "InActive"}</Text>
                                    </View>
                                  </View>

                                </View>

                              </View>

                            </Card>
                          }
                          keyExtractor={(item, index) => index}
                        />
                        <Text style={{ letterSpacing: 0.5, textAlign: 'center', color: 'rgb(40, 40, 41)', fontSize: 18, marginTop: 15 }}>YOUR POINTS</Text>

                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 8, }}>

                          <View style={{ backgroundColor: 'rgb(247,143,33)', height: 35, width: parseFloat(screenWidth) - 20, padding: 1.2, flexDirection: 'row' }}>

                            <View style={{ width: ((parseFloat(screenWidth) - 23.6) / 3) * 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)', }} >
                              <Text style={{ letterSpacing: 0.5, fontWeight: '700', textAlign: 'center', color: '#fff', fontSize: 17 }}>{this.state.RemainingPoins_memberPoints}</Text>
                            </View>
                            <View style={{ width: 1.2, }} />
                            <View style={{ width: ((parseFloat(screenWidth) - 23.6) / 3) * 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
                              <Text style={{ letterSpacing: 0.5, fontWeight: '700', textAlign: 'center', color: 'rgb(247,143,33)', fontSize: 17 }}>{this.state.NeededPoints_memberPoints}</Text>
                            </View>

                          </View>

                        </View>

                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10, }}>

                          <View style={{ backgroundColor: 'rgb(247,143,33)', padding: 1.2, }}>

                            <View style={{ justifyContent: 'center', padding: 15, alignItems: 'center', backgroundColor: 'white', }} >
                              <Text style={{ letterSpacing: 0.5, textAlign: 'center', color: 'rgb(40, 40, 41)', fontSize: 22 }}>{this.state.TotalPoints_memberPoints} points = ${this.state.VoucherPoints_memberPoints} voucher</Text>
                            </View>
                            <View style={{ justifyContent: 'center', padding: 10, alignItems: 'center', backgroundColor: 'rgb(247,143,33)' }} >
                              <Text style={{ letterSpacing: 0.5, textAlign: 'center', color: 'white', fontSize: 18 }}>UNLOCK TO REDEEM</Text>
                            </View>

                          </View>

                          <View style={{ position: 'absolute', top: 1.2, justifyContent: 'center', alignItems: 'center', bottom: 1.2, right: 1.2, left: 1.2, zIndex: 9999, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                            <Image style={{ height: 40, width: 40, marginBottom: 14 }} source={require('./assets/padlock.png')} />
                          </View>

                        </View>

                        {/* <Text style={{ letterSpacing: 0.5, alignSelf: 'center', borderBottomWidth: 1.2, borderBottomColor: 'rgb(247,143,33)', color: 'rgb(247,143,33)', fontSize: 14, marginTop: 10 }}>POINTS HISTORY</Text> */}

                        {/* <Text style={{ letterSpacing: 0.5, textAlign: 'center', color: 'rgb(40, 40, 41)', fontSize: 18, marginTop: 15, marginBottom: 10 }}>ORDER HISTORY</Text> */}

                        {/* <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[{ name: "SCHINITTY BURGER", price: 14 }, { name: "BROWNIE WITH NUTELA", price: 14 }, { name: "SCHINITTY BURGER", price: 14 }]}
                        renderItem={({ item }) =>
                          <View>
                            <Card style={{ width: 175, height: 210, borderRadius: 10, marginLeft: 10, }}>

                              <Image style={{ backgroundColor: '#F1F1F1', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: 175, height: 150, }} />

                              <View style={{ height: 60, width: 175, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                                <Text style={{ fontSize: 15, color: 'rgb(40, 40, 41)', paddingLeft: 10, width: 125 }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: 'rgb(247,143,33)', textAlign: 'right', paddingRight: 10, alignSelf: 'flex-end', width: 50 }}>${item.price}</Text>
                              </View>

                            </Card>
                          </View>
                        }
                        keyExtractor={(item, index) => index}
                      /> */}

                        <Text style={{ letterSpacing: 0.5, textAlign: 'center', color: 'rgb(40, 40, 41)', fontSize: 18, marginTop: 15, }}>POINTS HISTORY</Text>

                        <FlatList
                          showsVerticalScrollIndicator={false}
                          data={this.state.MemberpointsandorderhistoryArrayList}
                          renderItem={({ item }) =>

                            <View style={{ height: 50, overflow: 'hidden', backgroundColor: 'rgb(247,143,33)', marginLeft: 10, marginRight: 10, marginTop: 10, padding: 1.2, flexDirection: 'row' }}>
                              <View style={{ width: 100, overflow: 'hidden', height: 47.6, justifyContent: 'center', alignItems: 'center', }}>
                                <Text numberOfLines={1} style={{ fontSize: 16, color: 'white', }}>{item.PointsEarned} points</Text>
                              </View>

                              <View style={{ width: parseFloat(screenWidth) - 273.6, overflow: 'hidden', height: 47.6, backgroundColor: 'white', justifyContent: 'center', }}>
                                <Text numberOfLines={1} style={{ fontSize: 16, paddingLeft: 10, fontWeight: '700', color: 'rgb(40, 40, 41)', }}>{item.OutletName}</Text>
                              </View>

                              <View style={{ width: 80, height: 47.6, overflow: 'hidden', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, color: 'rgb(40, 40, 41)', }}>{Moment(item.OrderDate).format("DD.MM.YY")}</Text>
                              </View>

                              <View style={{ width: 70, marginLeft: 1.2, overflow: 'hidden', height: 47.6, backgroundColor: 'white', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 16, textAlign: 'right', paddingRight: 10, color: 'rgb(40, 40, 41)', }}>${item.SalesAmount}</Text>
                              </View>
                            </View>

                          }
                          keyExtractor={(item, index) => index}
                        />
                        {this.state.apiloding == true ?
                          <ActivityIndicator size="large" style={{ alignSelf: 'center' }} color="rgb(247,143,33)" />
                          :
                          <Text onPress={() => { this.GetMemberPointswithhistory(parseInt(this.state.pageno) + 1) }} style={{ letterSpacing: 0.5, alignSelf: 'center', borderBottomWidth: 1.2, borderBottomColor: 'rgb(247,143,33)', color: 'rgb(247,143,33)', fontSize: 14, marginTop: 10, marginBottom: 15, }}>LOAD MORE</Text>
                        }
                      </View>
                    </ScrollView>
                  </View>
                </View>
                :
                null
            }

            {
              this.state.Dashboard == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 116, backgroundColor: 'white' }}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View>

                        <Text style={{ letterSpacing: 0.8, fontSize: 20, marginTop: 15, alignSelf: 'center', color: 'rgb(40, 40, 41)' }}>Welcome{this.state.LoginMember == "" ? ", Guest" : " back, " + this.state.welcomebackname}</Text>

                        <Text style={{ letterSpacing: 0.8, fontSize: 12, marginTop: 5, alignSelf: 'center', color: 'rgb(247,143,33)' }}>WHATS HAPPENING AT RASHAYS</Text>

                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                          <FlatList
                            horizontal
                            // extraData={refreshOffer}
                            // extraData={this.state}
                            //  key={this.state.offerrefresh}
                            // refreshing={refre}
                            showsHorizontalScrollIndicator={false}
                            data={OfferArrayList}
                            renderItem={({ item, index }) =>

                              <Card key={this.state.offerrefresh} style={{ borderWidth: Moment(item.OfferDateTime).format("YYYY-MM-DD") == Moment().format("YYYY-MM-DD") ? 5 : 1, borderColor: Moment(item.OfferDateTime).format("YYYY-MM-DD") == Moment().format("YYYY-MM-DD") ? 'rgb(247,143,33)' : "#95A5A6", marginLeft: 12, marginRight: index == (parseInt(OfferArrayList.length) - 1) ? 12 : 0, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                                <TouchableOpacity activeOpacity={1}
                                  onPress={() => {
                                    AsyncStorage.getItem("OfferId").then((OfferId) => {
                                      if (OfferId != null) {
                                        if (OfferId == item.OfferId) {
                                          this.setState({ Offer_Appiled: true });
                                        }
                                        else {
                                          this.setState({ Offer_Appiled: false });
                                        }
                                      }
                                      else {
                                        this.setState({ Offer_Appiled: false });
                                      }
                                    }).done();
                                    this.setState({ Offer_Details: item }), this.setState({ MyOfferScreen: true })
                                  }}>
                                  <FastImage
                                    style={{
                                      height: parseFloat(screenWidth) / 2.5,
                                      width: parseFloat(screenWidth) / 2.5,
                                      backgroundColor: 'rgb(40, 40, 41, 0.2)',
                                      borderTopLeftRadius: 15,
                                      borderTopRightRadius: 15,
                                    }}
                                    source={{
                                      uri: item.OfferThumbnailImage == null ? "" : item.OfferThumbnailImage ,
                                      priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                  />

                                  <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, }}>

                                    <Text numberOfLines={2} style={{ letterSpacing: 0.8, width: parseFloat(screenWidth) / 2.5, textAlign: 'center', fontSize: 14, marginTop: 5, marginBottom: 10, paddingLeft: 2, color: 'rgb(247,143,33))' }}>{item.OfferName}</Text>

                                  </View>
                                </TouchableOpacity>
                              </Card>

                            }
                            keyExtractor={(item, index) => index}
                          />
                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgb(247,143,33)', marginTop: 6, marginBottom: 6, marginLeft: 12, marginRight: 12, }} />

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                          <Card style={{ marginLeft: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL("https://www.rashays.com/restaurant-menu/").catch((err) => console.error('An error occurred', err)); }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/menu_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                          {this.state.LoginMember == "" ?
                            <Card style={{ marginLeft: 12, marginRight: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                              <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ JoinNowscreen: true }); }}>
                                <FastImage
                                  style={{
                                    height: parseFloat(screenWidth) / 2.2,
                                    width: parseFloat(screenWidth) / 2.2,
                                    backgroundColor: 'gray',
                                    borderRadius: 15,
                                    resizeMode: 'stretch'
                                  }}
                                  source={require('./assets/join_now_dashboard.webp')}
                                />
                              </TouchableOpacity>
                            </Card>
                            :
                            <Card style={{ marginLeft: 12, marginRight: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                              <TouchableOpacity activeOpacity={1} onPress={() => { }}>
                                <FastImage
                                  style={{
                                    height: parseFloat(screenWidth) / 2.2,
                                    width: parseFloat(screenWidth) / 2.2,
                                    backgroundColor: 'gray',
                                    borderRadius: 15,
                                    resizeMode: 'stretch'
                                  }}
                                  source={require('./assets/myoffers_dashboard.webp')}
                                />
                                <View style={{ height: parseFloat(screenWidth) / 2.2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)', width: parseFloat(screenWidth) / 2.2, borderRadius: 15, position: 'absolute', zIndex: 9999 }}>
                                  <Text style={{ fontSize: 18, color: '#fff', }}>COMING SOON</Text>
                                </View>
                              </TouchableOpacity>
                            </Card>
                          }

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: 'center', alignItems: 'center' }}>
                          <Card style={{ marginLeft: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => {
                                Linking.openURL("https://mealkits.rashays.com/").catch((err) => console.error('An error occurred', err));
                              }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/meal_kits_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                          <Card style={{ marginLeft: 12, marginRight: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => {
                                if (this.state.Offer_Order_Type == "PickUp") {
                                  this.Get_pickup_Store();
                                  // this.check_first_store(this.state.OutletArray[0]);
                                  this.setState({ ShowStartAgainButton: true });

                                  this.setState({ IsPreorder: "false" });
                                  this.setState({ pickupButtonClick: true });
                                  this.setState({ deliverytimepopup: false });
                                  this.setState({ openoutlet: true });
                                  AsyncStorage.setItem('scanqr', "false");
                                  AsyncStorage.setItem("IsPreorder", "false");
                                  this.setState({ scanqr: "false" });
                                  AsyncStorage.setItem('DineInCustomerInformation', "");

                                  AsyncStorage.setItem("DeliveryStreet", "");
                                  AsyncStorage.setItem("DeliverySuburb", "");
                                  AsyncStorage.setItem("DeliveryState", "");
                                  AsyncStorage.setItem("DeliveryPostcode", "");
                                  AsyncStorage.setItem("DeliveryTime", "");
                                  AsyncStorage.setItem("DeliverystNo", "");
                                  hideandshowDeliveryonColor = false;
                                  this.setState({ OrderTrenddingTimeValue: "" });

                                }
                                else if (this.state.Offer_Order_Type == "Delivery") {
                                  this.setState({ ShowStartAgainButton: true });

                                  this.setState({ showtimer: false });
                                  this.setState({ IsPreorder: "false" }),
                                    this.setState({ pickupButtonClick: true }),
                                    this.setState({
                                      deliverytimepopup: true,
                                      deliveryAsap: true,
                                      TwoButtonShowinDeliverypopup: false,
                                      // editaddress: true
                                    })
                                  this.setState({ OrderTrenddingTimeValue: "" });
                                  AsyncStorage.setItem("IsPreorder", "false");
                                  this.setState({ scanqr: "false" });
                                  AsyncStorage.setItem('scanqr', "false");
                                  AsyncStorage.setItem('DineInCustomerInformation', "");

                                  AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
                                    if (MemberDeliveryAddress != null) {
                                      let responseJson = JSON.parse(MemberDeliveryAddress);

                                      this.setState({ deliverystno: responseJson.StreetNo });
                                      this.setState({ deliveryStreet: responseJson.StreetAddress });
                                      this.setState({ deliveryarea: responseJson.Suburb });
                                      this.setState({ deliverystate: responseJson.State });
                                      this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
                                      this.setState({ deliveryapptno: responseJson.ApptNo });

                                    } else {
                                      this.setState({ deliverystno: "" });
                                      this.setState({ deliveryStreet: "" });
                                      this.setState({ deliveryarea: "" });
                                      this.setState({ deliverystate: "" });
                                      this.setState({ deliverypincode: "" });
                                      this.setState({ deliveryapptno: "" });
                                    }

                                  }).done();

                                }
                                else {
                                  // this.check_first_store(this.state.OutletArray[0]);
                                }
                                this.setState({ OnlineOrder: true })
                              }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/orderonline_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: 'center', alignItems: 'center' }}>
                          <Card style={{ marginLeft: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => {

                                BookingStoreId = "0";
                                this.setState({ BookingDate: "" });
                                this.setState({ Bookingfname: "" });
                                this.setState({ Bookinglname: "" });
                                this.setState({ Bookingemail: "" });
                                this.setState({ Bookingphone: "" });
                                this.setState({ Bookingnote: "" });
                                this.setState({ tableId: '' });
                                BookingpeopleId = 0;
                                BookingHourFrom = '0';
                                BookingHourTo = "";

                                this.Get_Store_For_Bookingform();
                                this.setState({ BookTable: true });
                                if (this.state.LoginMember != "") {
                                  this.setState({ Dashboard: false });
                                  this.setState({ Profile: false });
                                  this.setState({ LoginScreen: false });
                                  this.setState({ Memberscreen: false });
                                }
                              }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/booking_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                          <Card style={{ marginLeft: 12, marginRight: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL("https://www.rashays.com/gift-cards/").catch((err) => console.error('An error occurred', err)); }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/giftcard_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 6, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>

                          <Card style={{ marginLeft: 12, marginRight: 12, shadowColor: "#000", overflow: 'hidden', borderRadius: 15, elevation: 2, backgroundColor: 'white' }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { Linking.openURL("https://www.rashays.com/locations/").catch((err) => console.error('An error occurred', err)); }}>
                              <FastImage
                                style={{
                                  height: parseFloat(screenWidth) / 2.2,
                                  width: parseFloat(screenWidth) / 2.2,
                                  backgroundColor: 'gray',
                                  borderRadius: 15,
                                  resizeMode: 'stretch'
                                }}
                                source={require('./assets/find_dashboard.webp')}
                              />
                            </TouchableOpacity>
                          </Card>

                          <View style={{ marginLeft: 12, width: parseFloat(screenWidth) / 2.2, elevation: 2, backgroundColor: 'white' }}>

                          </View>

                        </View>

                      </View>
                    </ScrollView>

                    {/* {this.state.ShowOffers == true ?
                    <TouchableOpacity activeOpacity={0} onPress={() => { this.setState({ ShowOffers: false }) }} style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                      <View style={{ zIndex: 9999, overflow: 'hidden', height: (parseFloat(screenWidth) / 1.5) + 40, width: screenWidth, backgroundColor: 'rgba(255, 255, 255, 1)' }}>

                        <Card style={{ marginTop: 10, overflow: 'hidden', marginBottom: 5, marginLeft: 12, marginRight: 12, shadowColor: "#000", borderRadius: 0, elevation: 2 }}>
                          <TouchableOpacity activeOpacity={1} style={{ height: parseFloat(screenWidth) / 2.2, width: '100%', borderRadius: 0 }} // onPress={() => this.postContent(item)}
                          >
                            <FastImage
                              style={{
                                height: parseFloat(screenWidth) / 2.2,
                                width: '100%',
                                backgroundColor: 'rgb(0, 0, 0, 0.2)'
                              }}
                              source={{
                                // uri: item.OfferImage,
                                // uri: this.Get_Offer_Details("image"),
                                priority: FastImage.priority.high,
                              }}
                              resizeMode={FastImage.resizeMode.stretch}
                            />
                          </TouchableOpacity>

                          <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F5' }}>

                            <Text style={{ color: '#000', width: parseFloat(screenWidth) - 104, fontSize: 16, fontWeight: '600', padding: 15 }}>{this.Get_Offer_Details("name")}</Text>

                            <TouchableOpacity activeOpacity={1}
                              style={{ width: 80, justifyContent: 'center', alignItems: 'center', height: 50 }}>
                              <Text style={{ color: 'rgb(247, 143, 33)', fontSize: 18, letterSpacing: 1 }}>APPLY</Text>
                            </TouchableOpacity>

                            <View style={[styles.triangleCorner, { position: 'absolute', zIndex: 9999, right: 0 }]} />

                            <View style={{ position: 'absolute', right: 4, top: 4.5, width: 4, zIndex: 9999, height: 4, backgroundColor: "#FFFFFF", borderRadius: 2 }} />

                          </View>

                          <View style={{ backgroundColor: '#FFFFFF', paddingTop: 13, paddingBottom: 13, paddingLeft: 15, paddingRight: 15, }}>

                            <Text style={{ fontSize: 14, color: '#6C6C6C' }}>{this.Get_Offer_Details("desc")}</Text>

                          </View>

                        </Card>

                      </View>
                    </TouchableOpacity>
                    :
                    null
                  } */}

                  </View>
                </View>
                :
                null
            }

            {
              this.state.MyOfferScreen == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 56, backgroundColor: 'white' }}>

                    <Text style={{ fontSize: 24, alignSelf: 'center', textAlign: 'center', color: "#000", marginTop: parseFloat(screenWidth) / 20, fontWeight: "600", width: (parseFloat(screenWidth) / 10) * 8 }}>{this.state.Offer_Details.OfferName}</Text>

                    <FastImage
                      style={{
                        alignSelf: 'center',
                        marginTop: parseFloat(screenWidth) / 20,
                        height: (parseFloat(screenHeight) / 20) * 11.5,
                        width: (parseFloat(screenWidth) / 10) * 8.5,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                      }}
                      source={{
                        uri: this.state.Offer_Details.OfferImage == null ? "" : this.state.Offer_Details.OfferImage,
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />

                    {this.state.Offer_Appiled == false ?

                      <TouchableOpacity activeOpacity={1}
                        onPress={() => {
                          if (this.state.LoginMember != "") {
                            // AsyncStorage.setItem('OfferId', this.state.Offer_Details.OfferId.toString());
                            this.setState({ Offer_ID: this.state.Offer_Details.OfferId });
                            // this.setState({ Offer_Order_Type: this.state.Offer_Details.OfferType });
                            this.Apply_Offers();
                          }
                          else {
                            AsyncStorage.getItem("VerifyUser").then((value) => {
                              if (value == null) {
                                this.setState({ OfferApplyPopup: true });
                                this.setState({ Offername: this.state.Offer_Details.OfferCode });
                                // AsyncStorage.setItem('OfferId', this.state.Offer_Details.OfferId.toString());
                                this.setState({ Offer_ID: this.state.Offer_Details.OfferId });
                              }
                              else {
                                // AsyncStorage.setItem('OfferId', this.state.Offer_Details.OfferId.toString());
                                this.setState({ Offer_ID: this.state.Offer_Details.OfferId });
                                // this.setState({ Offer_Order_Type: this.state.Offer_Details.OfferType });
                                this.Apply_Offers();
                              }
                            }).done();
                          }

                        }}
                        style={{ alignSelf: 'center', marginTop: parseFloat(screenWidth) / 18, width: (parseFloat(screenWidth) / 10) * 8.5, height: 50, backgroundColor: '#F68E20', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 25, color: "#000000" }} >APPLY NOW</Text>
                      </TouchableOpacity>
                      :
                      <View style={{ alignSelf: 'center', marginTop: parseFloat(screenWidth) / 18, width: (parseFloat(screenWidth) / 10) * 8.5, }} >

                        <Text style={{ fontSize: 14, color: '#707070', textAlign: 'center' }}>Your offer has been applied to the cart.</Text>

                        <View style={{ marginTop: 12, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#F68E20' }}>
                          <Text onPress={() => {
                            if (this.state.Offer_Order_Type == "PickUp") {
                              this.Get_pickup_Store();
                              // this.check_first_store(this.state.OutletArray[0]);
                              this.setState({ ShowStartAgainButton: true });

                              this.setState({ IsPreorder: "false" });
                              this.setState({ pickupButtonClick: true });
                              this.setState({ deliverytimepopup: false });
                              this.setState({ openoutlet: true });
                              AsyncStorage.setItem('scanqr', "false");
                              AsyncStorage.setItem("IsPreorder", "false");
                              this.setState({ scanqr: "false" });
                              AsyncStorage.setItem('DineInCustomerInformation', "");

                              AsyncStorage.setItem("DeliveryStreet", "");
                              AsyncStorage.setItem("DeliverySuburb", "");
                              AsyncStorage.setItem("DeliveryState", "");
                              AsyncStorage.setItem("DeliveryPostcode", "");
                              AsyncStorage.setItem("DeliveryTime", "");
                              AsyncStorage.setItem("DeliverystNo", "");
                              hideandshowDeliveryonColor = false;
                              this.setState({ OrderTrenddingTimeValue: "" });

                            }
                            else if (this.state.Offer_Order_Type == "Delivery") {
                              this.setState({ ShowStartAgainButton: true });

                              this.setState({ showtimer: false });
                              this.setState({ IsPreorder: "false" }),
                                this.setState({ pickupButtonClick: true }),
                                this.setState({
                                  deliverytimepopup: true,
                                  deliveryAsap: true,
                                  TwoButtonShowinDeliverypopup: false,
                                  // editaddress: true
                                })
                              this.setState({ OrderTrenddingTimeValue: "" });
                              AsyncStorage.setItem("IsPreorder", "false");
                              this.setState({ scanqr: "false" });
                              AsyncStorage.setItem('scanqr', "false");
                              AsyncStorage.setItem('DineInCustomerInformation', "");

                              AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
                                if (MemberDeliveryAddress != null) {
                                  let responseJson = JSON.parse(MemberDeliveryAddress);

                                  this.setState({ deliverystno: responseJson.StreetNo });
                                  this.setState({ deliveryStreet: responseJson.StreetAddress });
                                  this.setState({ deliveryarea: responseJson.Suburb });
                                  this.setState({ deliverystate: responseJson.State });
                                  this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
                                  this.setState({ deliveryapptno: responseJson.ApptNo });

                                } else {
                                  this.setState({ deliverystno: "" });
                                  this.setState({ deliveryStreet: "" });
                                  this.setState({ deliveryarea: "" });
                                  this.setState({ deliverystate: "" });
                                  this.setState({ deliverypincode: "" });
                                  this.setState({ deliveryapptno: "" });
                                }

                              }).done();

                            }
                            this.setState({ OnlineOrder: true }), this.setState({ MyOfferScreen: false });
                          }} style={{ fontSize: 20, color: '#F68E20', }} >CONTINUE TO ORDER</Text>
                        </View>

                      </View>
                    }

                    {/* <FlatList
                      data={this.state.OfferArrayList}
                      renderItem={({ item }) =>
                        <Card style={{ marginTop: 10, marginBottom: 5, marginLeft: 12, marginRight: 12, shadowColor: "#000", borderRadius: 0, elevation: 2 }}>
                          <TouchableOpacity activeOpacity={1} style={{ height: (parseFloat(screenWidth) / 10) * 6, width: '100%', borderRadius: 0 }} // onPress={() => this.postContent(item)}
                          >
                            <FastImage
                              style={{
                                height: (parseFloat(screenWidth) / 10) * 6,
                                width: '100%',
                                backgroundColor: 'rgb(0, 0, 0, 0.2)'
                              }}
                              source={{
                                uri: item.OfferImage,
                                priority: FastImage.priority.high,
                              }}
                              resizeMode={FastImage.resizeMode.stretch}
                            />
                          </TouchableOpacity>

                          <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F5' }}>

                            <Text style={{ color: '#000', width: parseFloat(screenWidth) - 104, fontSize: 17, fontWeight: '600', padding: 15 }}>{item.OfferName}</Text>

                            <TouchableOpacity activeOpacity={1}
                              onPress={() => {
                                if (this.state.LoginMember != "") {
                                  AsyncStorage.setItem('OfferId', item.OfferId.toString());
                                  this.Apply_Offers();
                                }
                                else {
                                  AsyncStorage.getItem("VerifyUser").then((value) => {
                                    if (value == null) {
                                      this.setState({ OfferApplyPopup: true });
                                      this.setState({ Offername: item.OfferCode });
                                      AsyncStorage.setItem('OfferId', item.OfferId.toString());
                                    }
                                    else {
                                      AsyncStorage.setItem('OfferId', item.OfferId.toString());
                                      this.Apply_Offers();
                                    }
                                  }).done();
                                }

                              }} //onPress={() => { this.Apply_Offers(item.OfferCode) }} 
                              style={{ width: 80, justifyContent: 'center', alignItems: 'center', height: 50 }}>
                              <Text style={{ color: 'rgb(247, 143, 33)', fontSize: 19, letterSpacing: 1 }}>APPLY</Text>
                            </TouchableOpacity>

                            <View style={[styles.triangleCorner, { position: 'absolute', zIndex: 9999, right: 0 }]} />

                            <View style={{ position: 'absolute', right: 4, top: 4.5, width: 4, zIndex: 9999, height: 4, backgroundColor: "#FFFFFF", borderRadius: 2 }} />

                          </View>

                          <View style={{ backgroundColor: '#FFFFFF', padding: 15 }}>

                            <Text style={{ fontSize: 16, color: '#6C6C6C' }}>{item.Description}</Text>

                          </View>

                        </Card>
                      }
                      keyExtractor={(item, index) => index}
                    /> */}

                    {
                      this.state.OfferApplyPopup == true ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                          <View style={{ justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>
                            <View key={this.state.UniqueKey} style={{ width: parseFloat(screenWidth) - 22, backgroundColor: 'white', borderRadius: 1 }}>
                              <View style={{ height: 50, width: parseFloat(screenWidth) - 22, backgroundColor: '#E9943F', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, }}>

                                <Text style={{ fontSize: 19, color: '#fff' }}>CUSTOMER INFORMATION</Text>

                                <TouchableOpacity activeOpacity={1} onPress={() => { clearInterval(this.clockCall), this.setState({ OfferApplyPopup: false }), this.setState({ showOfferOtpbox: false }) }}
                                  style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 5, width: 35, height: 40, }}>
                                  <Text style={{ marginLeft: 10, fontSize: 32, color: '#fff', transform: [{ rotate: '45deg' }] }}>+</Text>
                                </TouchableOpacity>

                              </View>

                              <View style={{ height: 2, backgroundColor: '#e9ecef', marginTop: 1 }} />

                              <View style={{ marginTop: 15, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                {/* <Image style={{ height: 25, width: 25, width: parseFloat(screenWidth) - 117, marginLeft: 15 }} source={require('./assets/person_dark.png')} /> */}

                                <TextInput
                                  style={{ fontSize: 16, color: '#000', height: 45, fontWeight: 'normal', marginLeft: 12 }}
                                  placeholder="First Name*"
                                  editable={!this.state.showOfferOtpbox}
                                  underlineColorAndroid='transparent'
                                  keyboardType="email-address"
                                  returnKeyType="next"
                                  placeholderTextColor="#000"
                                  defaultValue={this.state.OfferFirstName}
                                  onChangeText={(text) => { this.setState({ OfferFirstName: text }); }}
                                  onSubmitEditing={(event) => {
                                    this.refs.OfferLastName.focus();
                                  }}
                                />

                              </View>

                              <View style={{ marginTop: 15, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                {/* <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_dark.png')} /> */}

                                <TextInput
                                  ref='OfferLastName'
                                  style={{ fontSize: 16, color: '#000', height: 45, fontWeight: 'normal', marginLeft: 12 }}
                                  placeholder="Last Name*"
                                  editable={!this.state.showOfferOtpbox}
                                  underlineColorAndroid='transparent'
                                  keyboardType="email-address"
                                  returnKeyType="next"
                                  placeholderTextColor="#000"
                                  defaultValue={this.state.OfferLastName}
                                  onChangeText={(text) => { this.setState({ OfferLastName: text }); }}
                                  onSubmitEditing={(event) => {
                                    this.refs.OfferMobileNo.focus();
                                  }}
                                />

                              </View>

                              <View style={{ borderWidth: 1, borderColor: '#707070', marginTop: 15, borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                {/* <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/phone.png')} /> */}

                                <TextInput
                                  ref='OfferMobileNo'
                                  style={{ fontSize: 16, color: '#000', height: 45, fontWeight: 'normal', marginLeft: 12 }}
                                  placeholder="Mobile Number"
                                  editable={!this.state.showOfferOtpbox}
                                  underlineColorAndroid='transparent'
                                  placeholderTextColor="#000"
                                  keyboardType="numbers-and-punctuation"
                                  maxLength={10}
                                  returnKeyType="next"
                                  defaultValue={this.state.OfferMobileNo}
                                  onChangeText={(text) => { this.setState({ OfferMobileNo: text }); }}
                                  onSubmitEditing={(event) => {
                                    this.refs.OfferEmail.focus();
                                  }}
                                />

                              </View>

                              <View style={{ borderWidth: 1, borderColor: '#707070', marginTop: 15, borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                {/* <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/mail.png')} /> */}

                                <TextInput
                                  ref='OfferEmail'
                                  style={{ fontSize: 16, color: '#000', height: 45, fontWeight: 'normal', marginLeft: 12 }}
                                  placeholder="Email*"
                                  editable={!this.state.showOfferOtpbox}
                                  underlineColorAndroid='transparent'
                                  keyboardType="email-address"
                                  placeholderTextColor="#000"
                                  defaultValue={this.state.OfferEmail}
                                  onChangeText={(text) => { this.setState({ OfferEmail: text }); }}
                                />

                              </View>

                              {this.state.showOfferOtpbox == true ?
                                <View style={{ borderWidth: 1, borderColor: '#707070', marginTop: 15, borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                  {/* <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/padlock.png')} /> */}

                                  <TextInput
                                    style={{ fontSize: 16, color: '#000', height: 45, fontWeight: 'normal', marginLeft: 12 }}
                                    textAlignVertical='center'
                                    placeholder="Enter OTP*"
                                    maxLength={4}
                                    underlineColorAndroid='transparent'
                                    keyboardType="numbers-and-punctuation"
                                    placeholderTextColor="#000"
                                    defaultValue={this.state.OfferOtp}
                                    onChangeText={(text) => { this.setState({ OfferOtp: text }); }}
                                  />

                                </View>
                                :
                                null
                              }

                              {this.state.showOfferOtpbox == true ?
                                this.state.OtpTimer === 0 ?
                                  <TouchableOpacity activeOpacity={1} onPress={() => { this.User_verify_For_Offers() }} style={{ alignSelf: 'center', marginTop: 15, borderBottomWidth: 1, borderBottomColor: 'rgb(230, 118, 60)' }} >

                                    <Text style={{ fontSize: 16, color: 'rgb(230, 118, 60)' }} >Resend OTP SMS</Text>

                                  </TouchableOpacity>
                                  :
                                  <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 15, }} >

                                    <Text style={{ fontSize: 16, color: '#000' }} >Resend OTP SMS in </Text>
                                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '700' }} >{this.state.OtpTimer}s</Text>

                                  </View>
                                :
                                null
                              }

                              <TouchableOpacity activeOpacity={1} onPress={() => { this.state.showOfferOtpbox == true ? this.Match_Otp_for_AccessOffers() : this.User_verify_For_Offers() }}
                                style={{ height: 50, marginBottom: 15, marginTop: 15, backgroundColor: '#F68E20', borderRadius: 1, marginRight: 18, marginLeft: 18, alignItems: 'center', justifyContent: 'center', }}>

                                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', }}>SAVE INFO</Text>

                              </TouchableOpacity>

                            </View>
                            {/* <Toast ref="toast" /> */}
                          </View>
                        </View>
                        :
                        null
                    }

                  </View>
                </View>
                :
                null
            }

            {
              this.state.JoinNowscreen == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 116, backgroundColor: 'white' }}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View>

                        <Text style={{ letterSpacing: 0.8, fontSize: 21, marginTop: 20, alignSelf: 'center', color: 'rgb(40, 40, 41)' }}>JOIN RASHAYS REWARDS</Text>
                        <Text style={{ letterSpacing: 0.8, fontSize: 20, marginTop: 1, alignSelf: 'center', color: 'rgb(40, 40, 41)' }}>FOR AMAZING BENEFITS</Text>

                        <View style={{ flexDirection: 'row', marginTop: 30, width: screenWidth, justifyContent: 'center', alignItems: 'center', }}>

                          <View style={{ width: (parseFloat(screenWidth) / 3.5), justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                              style={{
                                height: parseFloat(screenWidth) / 5,
                                width: parseFloat(screenWidth) / 5,
                                resizeMode: 'stretch'
                              }}
                              source={require('./assets/percentage.png')}
                            />

                            <Text style={{ fontSize: 14, alignSelf: 'center', color: 'rgb(40, 40, 41)', textAlign: 'center' }}>10% off each time you visit</Text>

                          </View>

                          <View style={{ width: (parseFloat(screenWidth) / 4), justifyContent: 'center', alignItems: 'center', marginLeft: (parseFloat(screenWidth) / 4) * 0.25, marginRight: (parseFloat(screenWidth) / 4) * 0.25 }}>
                            <Image
                              style={{
                                height: parseFloat(screenWidth) / 5,
                                width: parseFloat(screenWidth) / 5,
                                resizeMode: 'stretch'
                              }}
                              source={require('./assets/kids.png')}
                            />

                            <Text style={{ fontSize: 14, alignSelf: 'center', color: 'rgb(40, 40, 41)', textAlign: 'center' }}>Kids eat FREE every Sunday</Text>

                          </View>

                          <View style={{ width: (parseFloat(screenWidth) / 3.5), justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                              style={{
                                height: parseFloat(screenWidth) / 5,
                                width: parseFloat(screenWidth) / 5,
                                resizeMode: 'stretch'
                              }}
                              source={require('./assets/pizza.png')}
                            />

                            <Text style={{ fontSize: 14, alignSelf: 'center', color: 'rgb(40, 40, 41)', textAlign: 'center' }}>$12 Pizza & Pasta every Mon-Tue</Text>

                          </View>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 30, width: screenWidth, justifyContent: 'center', alignItems: 'center', }}>

                          <View style={{ width: (parseFloat(screenWidth) / 4), justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                              style={{
                                height: parseFloat(screenWidth) / 5,
                                width: parseFloat(screenWidth) / 5,
                                resizeMode: 'stretch'
                              }}
                              source={require('./assets/voucher.png')}
                            />

                            <Text style={{ fontSize: 14, alignSelf: 'center', color: 'rgb(40, 40, 41)', textAlign: 'center' }}>$10 voucher on your birthday</Text>

                          </View>

                          <View style={{ width: (parseFloat(screenWidth) / 4), marginLeft: (parseFloat(screenWidth) / 4) * 0.5, justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                              style={{
                                height: parseFloat(screenWidth) / 5,
                                width: parseFloat(screenWidth) / 5,
                                resizeMode: 'stretch'
                              }}
                              source={require('./assets/loyalty_points.png')}
                            />

                            <Text style={{ fontSize: 14, alignSelf: 'center', color: 'rgb(40, 40, 41)', textAlign: 'center' }}>Earn Loyalty points</Text>

                          </View>

                        </View>

                        <Text style={{ letterSpacing: 0.8, fontSize: 18, paddingLeft: 5, paddingRight: 5, textAlign: 'center', marginTop: 20, alignSelf: 'center', color: 'rgb(40, 40, 41)' }}>Become A RASHAYS Rewards Member Today For Only $10</Text>

                        <Card style={{ marginRight: 30, marginLeft: 30, borderRadius: 5, marginTop: 20, height: 50, backgroundColor: 'rgb(247,143,33)' }}>
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              Linking.openURL("https://members.rashays.com/rewards-order/").catch((err) => console.error('An error occurred', err));
                            }}
                            style={{ borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: 50, }}>
                            <Text style={{ color: '#fff', fontSize: 21, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>JOIN NOW</Text>
                          </TouchableOpacity>
                        </Card>

                      </View>
                    </ScrollView>
                  </View>
                </View>
                :
                null
            }

            {
              this.state.BookTable == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <ImageBackground source={require('./assets/flower_bg.jpg')} style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 116, backgroundColor: '#ECF0F1' }}>

                    <ScrollView>
                      <View>

                        <View style={{ marginTop: 25, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}>
                          <View style={{ flexDirection: 'row', borderRadius: 3, alignItems: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 10, }} source={require('./assets/person_pin.png')} />

                            {/* <Text numberOfLines={1} style={{ fontSize: 16, letterSpacing: 0.7, color: '#95A5A6', paddingLeft: 5, marginRight: 65 }}>Belconnen</Text> */}

                            <Picker
                              // enabled={false}
                              key={this.state.uniqueValue}
                              style={{ width: parseFloat(screenWidth) - 75, fontSize: 16, color: 'rgb(40, 40, 41)', }}
                              mode="dropdown"
                              textStyle={{ color: 'rgb(40, 40, 41)', }}
                              selectedValue={BookingStoreId}
                              onValueChange={(itemValue) => { this.onValueChange_BookingStoreId(itemValue); }}>
                              <Picker.Item label={"Select Restaurant"} value={"0"} />
                              {this.state.BookingStorelist.map((item, index) => {
                                return (<Picker.Item label={item.OutletName} value={item.OutletId} />)
                              })}
                            </Picker>

                            {/* <View style={[styles.triangletabledown, { position: 'absolute', zIndex: 9999, right: 15 }]} /> */}

                          </View>

                        </View>

                        <View style={{ marginTop: 8, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}>
                          <View style={{ flexDirection: 'row', borderRadius: 3, alignItems: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 10, }} source={require('./assets/calendar.png')} />

                            {/* <Text numberOfLines={1} style={{ fontSize: 16, letterSpacing: 0.7, color: '#95A5A6', paddingLeft: 5, marginRight: 23 }}>13, December 2013</Text> */}

                            <DatePicker
                              disabled={this.state.BookingDate == "" ? BookingStoreId !== "0" ? false : true : false}
                              style={{ width: parseFloat(screenWidth) - 85, }}
                              date={this.state.BookingDate}
                              mode="date"
                              placeholder="Select date"
                              format="DD/MM/YYYY"
                              minDate={Moment().format('DD/MM/YYYY')}
                              maxDate={Moment().add(1, 'month').format('DD/MM/YYYY')}
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateText: {
                                  color: 'rgb(40, 40, 41)',
                                  fontSize: 16
                                },
                                dateTouchBody: {
                                  flexDirection: 'row',
                                  height: 45,
                                },
                                placeholderText: {
                                  color: this.state.BookingDate == "" ? BookingStoreId !== "0" ? 'rgb(40, 40, 41)' : '#95A5A6' : 'rgb(40, 40, 41)',
                                  fontSize: 16
                                },
                                dateInput: {
                                  marginLeft: 10,
                                  height: 48,
                                  borderWidth: 0,
                                  borderColor: '#aaa',
                                },
                                disabled: {
                                  backgroundColor: "rgba(255, 255, 255, 0)"
                                }
                                // ... You can check the source to find the other keys.
                              }}
                              onDateChange={(date) => {
                                if (this.state.BookingDate !== date) {
                                  // console.log("Hi");
                                  this.setState({ BookingDate: date })
                                  this.Get_Time_For_Bookingform();
                                }

                              }}
                            />

                            <View style={[styles.triangletabledown, { position: 'absolute', zIndex: 9999, right: 15 }]} />

                          </View>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 8, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}>
                          <View style={{ flexDirection: 'row', width: (parseFloat(screenWidth) - 55) / 2, borderRadius: 3, alignItems: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 10 }} source={require('./assets/person_dark.png')} />

                            {/* <Text style={{ fontSize: 16, letterSpacing: 0.7, color: '#95A5A6', paddingLeft: 5, marginRight: 23 }}>2 people</Text> */}

                            <Picker
                              enabled={BookingpeopleId == 0 ? this.state.BookingDate == "" ? false : true : true}
                              key={this.state.uniqueValue}
                              style={{ width: ((parseFloat(screenWidth) - 55) / 2) - 30, fontSize: 16, color: BookingpeopleId == 0 ? this.state.BookingDate == "" ? '#95A5A6' : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)', }}
                              textStyle={{ color: BookingpeopleId == 0 ? this.state.BookingDate == "" ? '#95A5A6' : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)', }}
                              mode="dropdown"
                              selectedValue={BookingpeopleId}
                              onValueChange={(itemValue) => { this.onValueChange_Bookingpeople(itemValue); }}>
                              <Picker.Item label={"Select People"} value={0} />
                              {this.state.BookingPeopel.map((item, index) => {
                                return (<Picker.Item label={item.lable} value={item.value} />)
                              })}
                            </Picker>

                            {/* <View style={[styles.triangletabledown, { position: 'absolute', zIndex: 9999, right: 15 }]} /> */}

                          </View>
                          <View style={{ flexDirection: 'row', width: (parseFloat(screenWidth) - 55) / 2, borderRadius: 3, alignItems: 'center', marginLeft: 15, backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 10 }} source={require('./assets/clock_booktable.png')} />

                            {/* <Text style={{ fontSize: 16, letterSpacing: 0.7, color: '#95A5A6', paddingLeft: 5, marginRight: 23 }}>19:00</Text> */}

                            <Picker
                              enabled={BookingHourFrom == '0' ? BookingpeopleId == 0 ? false : true : true}
                              key={this.state.uniqueValue}
                              style={{ width: ((parseFloat(screenWidth) - 55) / 2) - 30, fontSize: 16, color: BookingHourFrom == '0' ? BookingpeopleId == 0 ? '#95A5A6' : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)', }}
                              textStyle={{ color: BookingHourFrom == '0' ? BookingpeopleId == 0 ? '#95A5A6' : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)', }}
                              mode="dropdown"
                              selectedValue={BookingHourFrom}
                              onValueChange={(itemValue) => { this.onValueChange_BookingTime(itemValue); }}>
                              <Picker.Item label={"Select Time"} value={"0"} />
                              {this.state.BookingTime.map((item, index) => {
                                return (<Picker.Item label={item.Time} value={item.Time} />)
                              })}
                            </Picker>

                            {/* <View style={[styles.triangletabledown, { position: 'absolute', zIndex: 9999, right: 15 }]} /> */}

                          </View>
                        </View>

                        <View style={{ marginTop: 15, marginBottom: 15, height: 0.6, marginLeft: 20, marginRight: 20, backgroundColor: '#95A5A6' }} />

                        <View style={{ marginTop: 5, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}>
                          <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 5 }} source={require('./assets/person_dark.png')} />

                            <TextInput
                              editable={this.state.Bookingfname == '' ? BookingHourFrom == '0' ? false : true : true}
                              style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 100, fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="First name"
                              underlineColorAndroid='transparent'
                              keyboardType="email-address"
                              returnKeyType="next"
                              placeholderTextColor={this.state.Bookingfname == '' ? BookingHourFrom == '0' ? "#95A5A6" : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)'} //"#95A5A6"
                              defaultValue={this.state.Bookingfname}
                              onChangeText={(text) => this.updatevalue(text, 'fname')}
                            // onSubmitEditing={(event) => {
                            //   this.refs.LastName.focus();
                            // }}
                            />

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 13, width: parseFloat(screenWidth) - 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 25, width: 25, marginLeft: 5 }} source={require('./assets/person_dark.png')} />

                            <TextInput
                              editable={this.state.Bookinglname == '' ? this.state.Bookingfname == '' ? false : true : true}
                              style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 100, fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="Last name"
                              underlineColorAndroid='transparent'
                              keyboardType="email-address"
                              returnKeyType="next"
                              placeholderTextColor={this.state.Bookinglname == '' ? this.state.Bookingfname == '' ? "#95A5A6" : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)'} // "#95A5A6"
                              defaultValue={this.state.Bookinglname}
                              onChangeText={(text) => this.updatevalue(text, 'lname')}
                            // onSubmitEditing={(event) => {
                            //   this.refs.LastName.focus();
                            // }}
                            />

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 13, width: parseFloat(screenWidth) - 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 24, width: 24, marginLeft: 5 }} source={require('./assets/phone.png')} />

                            <TextInput
                              editable={this.state.Bookingphone == '' ? this.state.Bookinglname == '' ? false : true : true}
                              style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 99, fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="Mobile number"
                              underlineColorAndroid='transparent'
                              keyboardType="numbers-and-punctuation"
                              maxLength={10}
                              returnKeyType="next"
                              placeholderTextColor={this.state.Bookingphone == '' ? this.state.Bookinglname == '' ? "#95A5A6" : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)'}
                              defaultValue={this.state.Bookingphone}
                              onChangeText={(text) => this.updatevalue(text, 'phone')}
                            // onSubmitEditing={(event) => {
                            //   this.refs.LastName.focus();
                            // }}
                            />

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 13, width: parseFloat(screenWidth) - 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 24, width: 24, marginLeft: 5 }} source={require('./assets/mail.png')} />

                            <TextInput
                              editable={this.state.Bookingemail == '' ? this.state.Bookingphone == '' ? false : true : true}
                              style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 99, fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="Email Address"
                              underlineColorAndroid='transparent'
                              keyboardType="email-address"
                              returnKeyType="next"
                              placeholderTextColor={this.state.Bookingemail == '' ? this.state.Bookingphone == '' ? "#95A5A6" : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)'}
                              defaultValue={this.state.Bookingemail}
                              onChangeText={(text) => this.updatevalue(text, 'email')}
                            // onSubmitEditing={(event) => {
                            //   this.refs.LastName.focus();
                            // }}
                            />

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 13, width: parseFloat(screenWidth) - 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 48, borderWidth: 1, borderColor: '#95A5A6' }}>

                            <Image style={{ height: 24, width: 25, marginLeft: 5 }} source={require('./assets/notes.png')} />

                            <TextInput
                              editable={this.state.Bookingnote == '' ? this.state.Bookingemail == '' ? false : true : true}
                              style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 100, fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="Note - not required"
                              underlineColorAndroid='transparent'
                              keyboardType="email-address"
                              returnKeyType="next"
                              placeholderTextColor={this.state.Bookingnote == '' ? this.state.Bookingemail == '' ? "#95A5A6" : 'rgb(40, 40, 41)' : 'rgb(40, 40, 41)'}
                              defaultValue={this.state.Bookingnote}
                              onChangeText={(text) => this.updatevalue(text, 'message')}
                            // onSubmitEditing={(event) => {
                            //   this.refs.LastName.focus();
                            // }}
                            />

                          </View>

                          <Card style={{ marginLeft: 35, marginRight: 35, marginTop: 30, borderRadius: 3, elevation: 2, backgroundColor: 'rgb(247,143,33)', }}>
                            <TouchableOpacity activeOpacity={1} disabled={this.state.Bookingemail == '' ? true : false} onPress={() => { this.BookTable() }} style={{ justifyContent: 'center', height: 52, alignItems: 'center', }}>
                              <Text style={{ color: '#fff', fontSize: 18, letterSpacing: 1, textAlign: 'center' }}>Reserve a table</Text>
                            </TouchableOpacity>
                          </Card>

                        </View>

                      </View>
                    </ScrollView>
                  </ImageBackground>
                </View>
                :
                null
            }

            {
              this.state.Profile == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ zIndex: 9999, width: screenWidth, height: parseFloat(screenHeight) - 116, backgroundColor: 'white' }}>

                    {/* <View style={{ width: screenWidth, height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255, 250, 253)', shadowColor: "#FFFAFA", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 6, }}>
                    <Image style={{ height: 20, width: 20, }} source={require('./assets/place_marker.png')} />
                    <Text style={{ letterSpacing: 0.5, fontSize: 14, marginLeft: 5, marginRight: 5, color: 'rgb(40, 40, 41)' }}>PUNCHBOWL</Text>
                    <Image style={{ height: 15, width: 15, }} source={require('./assets/expand_arrow.png')} />
                  </View> */}

                    <ScrollView>
                      <View>
                        <View style={{ height: 45, backgroundColor: 'rgb(247,143,33)', width: screenWidth, justifyContent: 'center', alignItems: 'center', }}>
                          <Text style={{ letterSpacing: 0.8, fontSize: 20, color: '#fff' }}>PROFILE</Text>
                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 30, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>FIRST NAME</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="First Name"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_firstName}
                            onChangeText={(text) => { this.setState({ Profile_firstName: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>LAST NAME</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Last Name"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_LastName}
                            onChangeText={(text) => { this.setState({ Profile_LastName: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>EMAIL</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Email"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Email}
                            onChangeText={(text) => { this.setState({ Profile_Email: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>CONTACT</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Contact"
                            editable={this.state.Edit_Profile}
                            keyboardType="numbers-and-punctuation"
                            maxLength={10}
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Contact}
                            onChangeText={(text) => { this.setState({ Profile_Contact: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>ADDRESS</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Address"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Address}
                            onChangeText={(text) => { this.setState({ Profile_Address: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>POSTCODE</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="PostCode"
                            editable={this.state.Edit_Profile}
                            keyboardType="numbers-and-punctuation"
                            maxLength={4}
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Postcode}
                            onChangeText={(text) => { this.setState({ Profile_Postcode: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>DATE OF BIRTH</Text>

                          <DatePicker
                            style={{ width: parseFloat(screenWidth) - 55, marginTop: -2, }}
                            date={this.state.Profile_BirthDate}
                            mode="date"
                            placeholder="Select date"
                            format="DD.MM.YYYY"
                            disabled={!this.state.Edit_Profile}
                            // minDate={Moment().add(1, 'day').format('DD.MM.YY')}
                            maxDate={Moment().format('DD.MM.YYYY')}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                              },
                              placeholderText: {
                                color: 'rgb(40, 40, 41)',
                                fontSize: 16
                              },
                              dateText: {
                                color: 'rgb(40, 40, 41)',
                                fontSize: 16
                              },
                              disabled: {
                                backgroundColor: '#fff'
                              },
                              dateInput: {
                                // marginLeft: 20,
                                color: 'rgb(40, 40, 41)',
                                fontSize: 16
                                // alignItems: 'center',
                              }

                            }}
                            onDateChange={(date) => {

                              this.setState({ Profile_BirthDate: date })

                            }}
                          />

                          {/* <Text style={{ fontSize: 16, letterSpacing: 0.8, height: 45, textAlignVertical: 'center', color: 'rgb(40, 40, 41)', marginTop: -2, backgroundColor: '', fontWeight: 'normal', }}>11.03.91</Text> */}

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>CHANGE PASSWORD</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Password"
                            editable={this.state.Edit_Profile}
                            secureTextEntry={!this.state.Edit_Profile}
                            keyboardType="default"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Password}
                            onChangeText={(text) => { this.setState({ Profile_Password: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>GENDER</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="Gender"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Gender}
                            onChangeText={(text) => { this.setState({ Profile_Gender: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <View style={{ borderBottomWidth: 0.6, borderBottomColor: 'rgba(40, 40, 41, 0.5)', marginTop: 18, backgroundColor: '', borderRadius: 1, marginRight: 30, marginLeft: 30, }}>

                          <Text style={{ letterSpacing: 0.8, fontSize: 13, color: 'rgb(247,143,33)' }}>MY RASHAYS RESTAURANT</Text>

                          <TextInput
                            style={{ fontSize: 16, letterSpacing: 0.8, height: 45, color: 'rgb(40, 40, 41)', marginTop: -2, marginLeft: 0, backgroundColor: '', fontWeight: 'normal', }}
                            placeholder="My Restaurant"
                            editable={this.state.Edit_Profile}
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            defaultValue={this.state.Profile_Restaurant}
                            onChangeText={(text) => { this.setState({ Profile_Restaurant: text }) }}
                          // onSubmitEditing={(event) => {
                          //   this.Password.focus();
                          // }}
                          />

                        </View>

                        <Card style={{ marginRight: 30, marginLeft: 30, borderRadius: 25, marginTop: 35, marginBottom: 35, height: 50, backgroundColor: 'rgb(40, 40, 41)' }}>
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              if (this.state.Edit_Profile == true) {
                                this.Update_Profile();
                              } else {
                                this.setState({ Edit_Profile: true });
                              }
                            }}
                            style={{ borderRadius: 25, justifyContent: 'center', alignItems: 'center', height: 50, }}>
                            <Text style={{ color: '#fff', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>{this.state.Edit_Profile == false ? "EDIT PROFILE" : "SAVE PROFILE"}</Text>
                          </TouchableOpacity>
                        </Card>

                      </View>
                    </ScrollView>
                  </View>
                </View>
                :
                null
            }

            {
              this.state.OnlineOrder == true ?
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', overflow: 'hidden', position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, }}>
                  <StatusBar hidden={true} />

                  {

                    this.state.spinnerModifiers == true ?

                      <View style={{ position: 'absolute', zIndex: 9999, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', }}>

                        <View style={{ flex: 1, backgroundColor: 'white', }}>

                          <ScrollView>

                            <View style={{ width: screenWidth, backgroundColor: 'white', }}>

                              <Image resizeMode="stretch" style={{ marginTop: 0, width: screenWidth, height: parseFloat(screenWidth) / 1.5 }} source={{ uri: this.state.productimage }} />

                              <View style={{ borderTopWidth: 0.5, borderTopColor: '#2B2521' }}>
                                <Text style={{ fontSize: 20, color: '#2f2f2d', fontWeight: '700', marginTop: 20, marginLeft: 15, marginRight: 20 }}>{this.state.ProductName}</Text>
                                {this.state.productdesc == "" ? null :
                                  <Text style={{ fontSize: 15, color: '#5f5f5f', marginTop: 20, marginLeft: 15, marginRight: 20 }}>{this.state.productdesc}</Text>
                                }
                              </View>

                              <View style={{ marginTop: 20, backgroundColor: '#F3F0E8', height: 45 }}>
                                <Text style={{ color: '#2F2F2D', fontSize: 17, fontWeight: '600', paddingLeft: 15, paddingTop: 10 }}>Products</Text>
                              </View>

                              <FlatList
                                style={{ marginRight: 10, marginLeft: 10 }}
                                horizontal={true}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={this.state.ProductListArray}
                                renderItem={({ item, index }) =>
                                  <TouchableOpacity activeOpacity={1} style={{ marginTop: 20, marginLeft: 5, marginRight: 5 }} onPress={() => { this.setState({ productdesc: item.Description }), this.setState({ productimage: item.ProductImage }), this.shomodifiers(item.ProductId, item.ProductName), this.setState({ productId: item.ProductId }), this.setState({ ProductPrice: item.Price }), this.setState({ ProductQtychangePrice: item.Price }) }} >
                                    <View>
                                      {
                                        item.ProductImage !== null ?
                                          <Image style={{ width: 90, height: 90, borderRadius: 45, borderWidth: this.state.ProductName == item.ProductName ? 2 : 0, borderColor: this.state.ProductName == item.ProductName ? 'rgb(230, 118, 60)' : 'transparent' }} source={{ uri: item.ProductImage }} />
                                          :
                                          <View style={{ width: 90, height: 90, borderRadius: 45, borderWidth: this.state.ProductName == item.ProductName ? 2 : 2, borderColor: this.state.ProductName == item.ProductName ? 'rgb(230, 118, 60)' : '#F3F0E8' }} />
                                      }
                                      {this.state.ProductName == item.ProductName ?
                                        null
                                        :
                                        <View style={{ backgroundColor: 'rgba(255,255,255, 0.5)', position: 'absolute', zIndex: 9999, width: 90, height: 90, borderRadius: 45, }}></View>}

                                    </View>
                                    <Text style={{ fontSize: 15, color: '#2F2F2D', width: 90, textAlign: 'center' }}>{item.ProductName}</Text>

                                  </TouchableOpacity>
                                }
                                keyExtractor={item => item.id}
                              />

                              <FlatList
                                style={{}}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={this.state.GroupWithModifiersListtArray}
                                renderItem={({ item, index }) =>
                                  // {this.state.GroupWithModifiersListtArray.map((item, index) => {
                                  // return (
                                  <Accordian
                                    // key={this.state.accordinrefreshkey}
                                    title={item.ModifierGroupName}
                                    data={item.Modifiers}
                                    default={item.DefaultList}
                                    modifiergroupid={item.ModifierGroupId}
                                    MaxQty={item.MaxQty}
                                  // MaxQty={2}
                                  />
                                  //   )
                                  // })}
                                }
                                keyExtractor={item => item}
                              />

                              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

                                <TouchableOpacity activeOpacity={1} onPress={() => { this.minus_qty_for_product(); }} style={{ backgroundColor: this.state.qty == 1 ? 'transparent' : 'rgb(230, 118, 60)', height: 50, width: 50, borderWidth: this.state.qty == 1 ? 1 : 0, borderColor: '#F3F0E8', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                  <View style={{ height: 3, width: 14, backgroundColor: this.state.qty == 1 ? '#999894' : '#fff' }}></View>
                                </TouchableOpacity>

                                <Text style={{ width: 50, textAlign: 'center', color: '#2F2F2D', fontSize: 20, fontWeight: '600', marginRight: 20, marginLeft: 20 }}>{this.state.qty}</Text>

                                <TouchableOpacity activeOpacity={1} onPress={() => { this.add_qty_for_product(); }} style={{ backgroundColor: this.state.qty == 25 ? 'transparent' : 'rgb(230, 118, 60)', borderWidth: this.state.qty == 25 ? 1 : 0, borderColor: '#F3F0E8', height: 50, width: 50, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>

                                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 3, width: 14, backgroundColor: this.state.qty == 25 ? '#999894' : '#fff' }}></View>
                                    <View style={{ height: 3, width: 14, transform: [{ rotate: '90deg' }], backgroundColor: this.state.qty == 25 ? '#999894' : '#fff', position: 'absolute', }}></View>
                                  </View>

                                </TouchableOpacity>

                              </View>

                            </View>

                          </ScrollView>

                          <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ spinnerModifiers: false }), Selected_Modifiers_Array = [] }} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgb(230, 118, 60)', position: 'absolute', right: 8, top: 10, zIndex: 9999 }}>
                            <View style={{}}>
                              <View style={{ height: 12, width: 3, borderRadius: 1, transform: [{ rotate: '-45deg' }], backgroundColor: '#fff' }}></View>
                              <View style={{ height: 12, width: 3, borderRadius: 1, marginTop: -5, transform: [{ rotate: '45deg' }], backgroundColor: '#fff' }}></View>
                            </View>
                            <View style={{ marginLeft: 4 }}>
                              <View style={{ height: 12, width: 3, borderRadius: 1, transform: [{ rotate: '45deg' }], backgroundColor: '#fff' }}></View>
                              <View style={{ height: 12, width: 3, borderRadius: 1, marginTop: -5, transform: [{ rotate: '-45deg' }], backgroundColor: '#fff' }}></View>
                            </View>
                          </TouchableOpacity>

                          <View style={{ backgroundColor: '#FFF', shadowColor: "#000000", shadowOffset: { width: 0, height: -3, }, shadowOpacity: 0.58, shadowRadius: 16, elevation: 10 }}>

                            <TouchableOpacity
                              onPress={() => {
                                let items = [];
                                if (Selected_Modifiers_Array !== []) {

                                  items = Selected_Modifiers_Array.filter(item => item.ModifierName.slice(-1) == "?");

                                  if (items.length != 0) {
                                    Alert.alert(
                                      "Alert !",
                                      "Please " + items[0].ModifierName, [
                                      {
                                        text: "Ok",
                                        onPress: () => null
                                      },
                                    ])
                                  }
                                  else {
                                    this.Add_New_product_to_orderList()
                                  }

                                }
                                else {
                                  this.Add_New_product_to_orderList()
                                }

                              }} activeOpacity={1} style={{ margin: 20, justifyContent: 'center', borderRadius: 1, backgroundColor: 'rgb(230, 118, 60)', padding: 20 }}>

                              <Text style={{ color: '#fff', fontSize: 15 }}>ADD ITEM</Text>
                              <Text style={{ position: 'absolute', right: 18, fontSize: 15, color: '#FFFFFF', }}>${this.state.ProductQtychangePrice == 0 ? 0.00 : this.state.ProductQtychangePrice.toFixed(2)}</Text>

                            </TouchableOpacity>

                          </View>

                        </View>

                      </View>
                      :
                      null
                  }

                  {this.state.showtimer == true ?
                    < View style={{ height: 60, backgroundColor: 'rgb(247,143,33)', justifyContent: 'center', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                      <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>{this.state.Closestorename} RASHAYS is currently closed.</Text>
                      <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>Please choose another Restaurant.</Text>
                    </View>
                    :
                    null
                  }

                  {
                    this.state.OrderListArray.length == 0 ?
                      null
                      :
                      this.state.spinnerModifiers == true ?
                        null
                        :
                        <TouchableOpacity disabled={this.state.OrderListArray.length == 0 ? true : false} activeOpacity={1} onPress={() => { this.setState({ spinnerOrderList: true }) }} style={{ height: 50, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, position: 'absolute', justifyContent: 'center', bottom: 8, right: 8, left: 8, zIndex: 9999 }}>

                          <View style={{ position: 'absolute', top: 6, left: 10, zIndex: 9999, height: 22, width: 22, backgroundColor: '#000', borderRadius: 11, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 12 }}>{this.state.OrderListArray.length}</Text>
                          </View>

                          <View style={{ flexDirection: 'row', }}>
                            <Image style={{ height: 28, width: 30, marginLeft: 18 }} resizeMode="stretch" source={require('./assets/basket.png')} />
                            <Text style={{ fontSize: 20, marginLeft: 7, color: '#FFFFFF', fontWeight: '800', zIndex: 9999 }}>${this.state.OrderTotalAmount.toFixed(2)}</Text>
                          </View>

                          <Text style={{ position: 'absolute', right: 20, fontSize: 20, color: '#FFFFFF', fontWeight: '800', zIndex: 9999 }}>PAY NOW</Text>

                        </TouchableOpacity>
                  }

                  <Spinner visible={this.state.spinnerOutlet} >

                    <StatusBar hidden={true} />

                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', alignItems: 'center' }}>

                      <View style={{ minHeight: 130, maxHeight: 300, width: '94%', backgroundColor: 'white', borderRadius: 1 }}>

                        <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, backgroundColor: 'rgb(230, 118, 60)' }}>
                          <Text style={{ fontSize: 17, color: 'white' }}>SELECT STORE NEAR YOU</Text>
                        </View>

                        <View style={{ margin: 10, backgroundColor: "rgb(239, 239, 244)", borderRadius: 1, paddingLeft: 15, paddingRight: 5 }}>
                          <Picker
                            style={{ fontSize: 17, color: '#000' }}
                            mode="dropdown"
                            selectedValue={this.state.outletId}
                            onValueChange={(itemValue) => { this.onValueChange(itemValue); }}>
                            <Picker.Item label={"Select"} value={0} />
                            {this.state.OutletArray.map((item, index) => {
                              return (<Picker.Item label={item.OutletName} value={item.OutletId} />) //if you have a bunch of keys value pair
                            })}
                          </Picker>

                        </View>
                        {
                          this.state.outletAddress != "" ?
                            <View>
                              <View style={{ margin: 10, backgroundColor: "rgb(239, 239, 244)", borderRadius: 1, padding: 15 }}>
                                <Text style={{ fontSize: 17, color: '#000' }}>{this.state.outletAddress}</Text>
                              </View>

                              <TouchableOpacity onPress={() => { this.Confirm_Outlet() }} activeOpacity={0.9} style={{ margin: 10, padding: 10, backgroundColor: "rgb(230, 118, 60)", borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>CONFIRM</Text>
                              </TouchableOpacity>

                            </View>
                            :
                            null
                        }

                      </View>

                    </View>

                  </Spinner>

                  <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)' }}>
                    {
                      this.state.pickupButtonClick == false ?
                        null
                        :
                        <TouchableOpacity // height:125 
                          disabled={this.state.scanqr == "true" ? true : false}
                          onPress={() => {
                            AsyncStorage.getItem("DeliveryTime").then((DeliveryTime) => {
                              if (DeliveryTime != null) {
                                this.setState({ openoutlet: false })
                              } else {
                                this.SearchFilterFunction("");
                                this.setState({ openoutlet: !this.state.openoutlet })
                              }
                            }).done();
                          }} activeOpacity={1}
                          style={{ height: 40, alignItems: 'center', flexDirection: 'row', width: parseFloat(screenWidth) - 30, backgroundColor: 'white', borderRadius: 1, marginTop: 0 }}>
                          <Image style={{ height: 25, width: 25, marginLeft: 3, }} source={require('./assets/place_marker.png')} />

                          <Text numberOfLines={1} style={{ width: parseFloat(screenWidth) - 98, textAlign: 'center', fontSize: 14, color: '#000', marginLeft: 3, marginRight: 3 }}>{this.state.headerOutletName}</Text>

                          <Image style={{ height: 19, width: 19, marginRight: 3, }} source={require('./assets/expand_arrow.png')} />
                        </TouchableOpacity>
                    }

                    {/* {this.state.ShowStartAgainButton == true ?
                      <TouchableOpacity activeOpacity={1}
                        onPress={() => {
                          this.setState({ showtimer: false });
                          this.StartAgainbutton_api_call();
                        }}
                        style={{ height: 40, marginTop: 15, width: parseFloat(screenWidth) - 30, borderRadius: 1, backgroundColor: 'rgb(230, 118, 60)', justifyContent: 'center', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{ textAlign: 'center', fontSize: 14, color: '#fff', }}>START AGAIN</Text>
                      </TouchableOpacity>

                      : null} */}

                  </View>

                  {
                    this.state.openoutlet == true ?
                      <View style={{ position: 'absolute', zIndex: 9999, left: 0, right: 0, top: 50, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.1)', alignItems: 'center' }}>
                        <View style={{ maxHeight: parseFloat(screenHeight) - 250, borderBottomRightRadius: 1, borderBottomLeftRadius: 1, width: parseFloat(screenWidth) - 30, backgroundColor: '#fff' }}>

                          <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#EFEFF4', alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 20, marginLeft: 9, }} source={require('./assets/search.png')} />

                            <TextInput
                              ref={input => { this.search = input }}
                              style={{ color: '#666666', fontSize: 15, width: parseFloat(screenWidth) - 75, fontStyle: 'italic', fontWeight: 'normal', marginLeft: 8 }}
                              placeholder="Search by Suburb or Postcode"
                              underlineColorAndroid='transparent'
                              keyboardType="email-address"
                              placeholderTextColor="#666666"
                              onChangeText={text => this.SearchFilterFunction(text)}
                            />

                          </View>

                          <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.OutletArraysearch}
                            renderItem={({ item, index }) =>
                              <TouchableOpacity onPress={() => { this.changeOutlet_alert(item) }} activeOpacity={1} style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
                                  <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>{item.OutletName}</Text>
                                  {/* <Text style={{ fontSize: 13, color: '#000', marginTop: 1, fontWeight: '600' }}> ({item.OutletTypeName})</Text> */}
                                </View>

                                {/* <Text style={{ marginTop: 3, textAlign: 'center', marginBottom: 5, marginRight: 30, marginLeft: 30 }}>
                                  {item.Address1},{item.Suburb},{item.State} - {item.Postcode},{item.Country}
                                </Text> */}

                                <View style={{ height: 1, width: parseFloat(screenWidth) - 30, backgroundColor: '#f1f1f1', }} />

                                <View style={{ position: 'absolute', right: 15 }}>

                                  <View style={{ height: 12, width: 3, borderRadius: 1, transform: [{ rotate: '-45deg' }], backgroundColor: 'rgb(230, 118, 60)' }}></View>
                                  <View style={{ height: 12, width: 3, borderRadius: 1, marginTop: -5, transform: [{ rotate: '45deg' }], backgroundColor: 'rgb(230, 118, 60)' }}></View>

                                </View>

                              </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                          />
                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.screenchange == "product" ?
                      <View style={{ flex: 1, backgroundColor: '#fff' }}>

                        <View style={{ height: 70, justifyContent: 'center', marginTop: 2, borderBottomWidth: 4, borderBottomColor: '#fff' }}>

                          <ImageBackground source={{ uri: this.state.menuImage }} // source={require('./assets/category.jpg')} 
                            style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ screenchange: "menu" }) }} style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', height: 80, width: '100%', justifyContent: 'center' }} />

                              <TouchableOpacity onPress={() => { this.setState({ screenchange: "menu" }) }} activeOpacity={1} style={{ justifyContent: 'center', zIndex: 9999, alignItems: 'center', position: 'absolute', left: 0, backgroundColor: 'rgb(230, 118, 60)', width: 38, height: 38, borderTopRightRadius: 1, borderBottomRightRadius: 1 }}>
                                <Image style={{ height: 24, width: 20, marginLeft: 2, transform: [{ rotate: '-180deg' }], }} resizeMode="stretch" source={require('./assets/next.png')} />
                              </TouchableOpacity>

                              <Text style={{ fontSize: 20, zIndex: 9999, color: 'white' }}>{this.state.menuName.toUpperCase()}</Text>
                            </TouchableOpacity>
                          </ImageBackground>

                        </View>

                        {this.state.loadProducts == false ?

                          <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.ProductListArray}
                            renderItem={({ item, index }) =>
                              <TouchableOpacity activeOpacity={1} style={{ borderTopColor: '#2B2521', borderTopWidth: index == 0 ? item.ProductImage == null ? 0.6 : 0 : 0, borderBottomWidth: item.ProductImage == null ? 0.6 : 0, borderBottomColor: '#2B2521', marginTop: index == 0 ? 12 : 0 }}
                                onPress={() => { this.setState({ productdesc: item.Description }), this.setState({ productimage: item.ProductImage }), this.shomodifiers(item.ProductId, item.ProductName), this.setState({ productId: item.ProductId }), this.setState({ ProductPrice: item.Price }), this.setState({ ProductQtychangePrice: item.Price }) }} >

                                {/* <Image resizeMode="stretch" style={{ width: screenWidth, height: parseFloat(screenWidth) / 1.2 }} source={{ uri: "https://order.rashays.com" + item.ProductImage }} /> */}

                                <FastImage
                                  style={{ width: screenWidth, height: parseFloat(screenWidth) / 1.2 }}
                                  source={{
                                    uri: item.ProductImage,
                                    priority: FastImage.priority.high,
                                  }}
                                  resizeMode={FastImage.resizeMode.stretch}
                                />

                                <View style={{ borderBottomWidth: 5, borderTopWidth: item.ProductImage == null ? 0.6 : 0, borderTopColor: '#2B2521', marginBottom: 10, borderBottomColor: 'rgb(230, 118, 60)' }}>

                                  <Text style={{ fontSize: 17, color: '#e6763c', marginLeft: 12, marginTop: 8 }}>{item.ProductName}</Text>
                                  {item.Description == "" || item.Description == null ? null :
                                    <Text style={{ fontSize: 15, color: '#000', marginLeft: 12, marginRight: 12, marginTop: 6 }}>{item.Description}</Text>
                                  }

                                  <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 10, }}>
                                    {
                                      item.IsVegetarian == true ?
                                        <Image style={{ height: parseFloat(screenWidth) / 10, width: parseFloat(screenWidth) / 10, resizeMode: 'stretch', }} source={require('./assets/vegetarian.png')} />
                                        : null
                                    }
                                    {
                                      item.IsContainsChilli == true ?
                                        <Image style={{ height: parseFloat(screenWidth) / 10, width: parseFloat(screenWidth) / 10, resizeMode: 'stretch', marginLeft: 6 }} source={require('./assets/contains_chilli.png')} />
                                        : null
                                    }
                                    {
                                      item.IsGlutenFriendly == true ?
                                        <Image style={{ height: parseFloat(screenWidth) / 10, width: parseFloat(screenWidth) / 10, resizeMode: 'stretch', marginLeft: 6 }} source={require('./assets/gluten_friendly.png')} />
                                        : null
                                    }
                                  </View>

                                  <View style={{ marginTop: 6, marginBottom: 12, height: 20, justifyContent: 'center' }}>

                                    {
                                      item.IsDiscountable == false ?
                                        <Image style={{ height: 39, width: 130, resizeMode: 'stretch', marginLeft: 0 }} source={require('./assets/nodiscountapplies.png')} />
                                        : null
                                    }

                                    <Text style={{ fontSize: 20, color: 'rgb(230, 118, 60)', position: 'absolute', right: 28, zIndex: 9999 }}>${item.Price}</Text>
                                    <View style={{ position: 'absolute', right: 15, zIndex: 9999 }}>
                                      <View style={{ height: 9, width: 3, borderRadius: 1, transform: [{ rotate: '-45deg' }], backgroundColor: 'rgb(230, 118, 60)' }}></View>
                                      <View style={{ height: 9, width: 3, borderRadius: 1, marginTop: -5, transform: [{ rotate: '45deg' }], backgroundColor: 'rgb(230, 118, 60)' }}></View>
                                    </View>
                                  </View>

                                </View>

                                {/* <View style={{ height: 0.5, backgroundColor: '#2B2521', }} /> */}
                              </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                          />
                          :
                          <View style={{}}>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                            <Shimmer opacity={0.3}>
                              <TouchableOpacity activeOpacity={1} style={{ marginTop: 6, backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>

                                <Image style={{ marginTop: 2, width: screenWidth, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: parseFloat(screenWidth) / 1.6 }} />

                                <Text style={{ fontSize: 17, color: '#e6763c', width: 200, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>               </Text>
                                <Text style={{ fontSize: 15, color: '#000', width: 300, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6 }}>                   </Text>
                                <Text style={{ fontSize: 18, color: '#e6763c', width: 100, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginLeft: 12, marginTop: 6, marginBottom: 6 }}>                </Text>
                                <View style={{ height: 0.5, backgroundColor: '#2B2521', }} />
                              </TouchableOpacity>
                            </Shimmer>

                          </View>
                        }

                      </View>
                      :
                      this.state.loadMenus == false ?
                        <FlatList
                          // key={this.state.MenuRefresh}
                          showsVerticalScrollIndicator={false}
                          data={this.state.MenuListArray}
                          renderItem={({ item, index }) =>
                            <View // key={this.state.MenuRefresh} 
                              style={{ marginBottom: parseInt(index) + 1 == parseInt(this.state.MenuListArray.length) ? 62 : 0, }}>
                              {item.MenuGroupId == 57 ?
                                null :
                                <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} source={{ uri: item.MenuImagePath }} >

                                  <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', height: 80, width: '100%', justifyContent: 'center' }} />
                                  <TouchableOpacity onPress={() => { this.setState({ menuImage: item.MenuImagePath }), this.setState({ menuName: item.Name }), this.Get_Product_from_api(item.MenuGroupId) }} activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center', zIndex: 9999, height: 80, width: '100%', }}>

                                    <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800' }} >{item.Name.toUpperCase()}</Text>

                                    <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10 }} source={require('./assets/next.png')} />

                                  </TouchableOpacity>

                                </ImageBackground>
                              }
                            </View>
                          }
                          keyExtractor={item => item.id}
                        />
                        :
                        <View style={{ backgroundColor: "rgb(40, 40, 41)", flex: 1 }}>
                          {/* <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer>

                          <Shimmer opacity={0.3}>
                            <ImageBackground style={{ height: 80, width: '100%', marginTop: 2 }} >

                              <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 80, width: '100%', justifyContent: 'center' }} />
                              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', zIndex: 9999, height: 80, width: '100%', alignItems: 'center', }}>

                                <Text style={{ fontSize: 22, width: parseFloat(screenWidth) - 60, color: '#FFFFFF', marginLeft: 16, fontWeight: '800', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} >             </Text>

                                <Image style={{ height: 28, width: 28, marginLeft: 10, marginRight: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

                              </TouchableOpacity>

                            </ImageBackground>
                          </Shimmer> */}
                        </View>

                  }

                  {
                    this.state.spinnerOrderList == true ?
                      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View key={this.state.uniqueValue} style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>

                          <View key={this.state.uniqueValue} style={{ width: parseFloat(screenWidth) - 22, justifyContent: 'center', alignItems: 'center', maxHeight: parseFloat(screenHeight) - 20, marginTop: 0, backgroundColor: 'white', borderRadius: 1 }}>

                            <View style={{ height: 50, width: parseFloat(screenWidth) - 22, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, backgroundColor: 'rgb(230, 118, 60)' }}>
                              <Text style={{ fontSize: 22, color: 'white' }}>YOUR ORDER</Text>

                              <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ spinnerOrderList: false }); }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, width: 35, height: 32, borderTopLeftRadius: 1, borderBottomLeftRadius: 1, backgroundColor: 'white' }}>
                                <Text style={{ marginLeft: 10, fontSize: 32, color: 'rgb(230, 118, 60)', transform: [{ rotate: '45deg' }] }}>+</Text>
                              </TouchableOpacity>

                            </View>

                            <FlatList
                              key={this.state.cartrefresh}
                              showsVerticalScrollIndicator={false}
                              data={this.state.OrderListArray}
                              renderItem={({ item, index }) =>

                                <View key={this.state.cartrefresh} >
                                  <View style={{ flexDirection: 'row', marginTop: 1 }}>

                                    <View style={{ width: 80, flexDirection: 'row', justifyContent: 'center', backgroundColor: '' }}>

                                      {
                                        item.IsOfferProduct == true ?
                                          null
                                          :
                                          <Text onPress={() => { this.Add_order_product_qty(item) }} style={{ fontSize: 25, fontWeight: 'bold', color: '#e6763c' }}>+</Text>
                                      }

                                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{item.Quantity}</Text>
                                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                      </View>

                                      {
                                        item.IsOfferProduct == true ?
                                          null
                                          :
                                          <TouchableOpacity activeOpacity={1} onPress={() => { this.less_order_product_qty(item) }} style={{ justifyContent: 'center', alignItems: 'center' }} >
                                            <View style={{ height: 5, width: 10, backgroundColor: '#e6763c', marginTop: 3 }} ></View>
                                          </TouchableOpacity>
                                      }
                                      {/* <Text onPress={() => { this.less_order_product_qty(item) }} style={{ fontSize: 25, fontWeight: 'bold', color: '#' }}>-</Text> */}
                                    </View>

                                    <View style={{ width: parseFloat(screenWidth) - 212, backgroundColor: '', justifyContent: 'center' }}>
                                      <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>{item.ProductName.toUpperCase()}</Text>
                                    </View>

                                    <View style={{ width: 80, justifyContent: 'center', backgroundColor: '' }}>
                                      <Text style={{ fontSize: 15, textAlign: 'right', color: '#000', marginRight: 5, }}>${item.UnitPrice.toFixed(2)}</Text>
                                    </View>

                                    {
                                      item.IsOfferProduct == true ?
                                        null
                                        :
                                        <TouchableOpacity onPress={() => { this.Delete_order_product(item) }} activeOpacity={1} style={{ width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}>
                                          <Image style={{ height: 20, width: 20, }} resizeMode="stretch" source={require('./assets/delete.png')} />
                                        </TouchableOpacity>
                                    }
                                  </View>

                                  {item.SalesModifierItems.map((ite, index) => {
                                    return (
                                      <View style={{ flexDirection: 'row', marginTop: 3 }}>

                                        <View style={{ width: 81, justifyContent: 'center', backgroundColor: '' }}>
                                        </View>

                                        <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 213, backgroundColor: '', }}>
                                          <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{ite.Quantity}</Text>
                                          <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                          <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 6 }}>{ite.ModifierName.toUpperCase()}</Text>
                                        </View>

                                        <View style={{ width: 80, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: '' }}>
                                          <Text style={{ fontSize: 15, color: '#000', marginRight: 5, }}>${ite.UnitPrice.toFixed(2)}</Text>
                                        </View>

                                      </View>
                                    )
                                  })}

                                </View>
                              }
                              keyExtractor={item => item.ProductId}
                            />
                            {this.state.promoCode === "" ?
                              <View style={{ height: 1, width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 5, marginBottom: 6 }} />
                              :
                              null
                            }
                            {this.state.promoCode === "" ?
                              <View style={{ flexDirection: 'row', height: 40, width: parseFloat(screenWidth) - 22, marginTop: 0 }}>

                                <View style={{ flexDirection: 'row', backgroundColor: '#EFEFF4', width: (parseFloat(screenWidth) - 22) / 1.7, borderRadius: 1, marginLeft: 10, alignItems: 'center' }}>

                                  <Image style={{ height: 20, width: 20, transform: [{ rotate: '-45deg' }], marginLeft: 12 }} source={require('./assets/ticket.png')} />

                                  <TextInput
                                    style={{ fontSize: 15, color: '#495057', height: 40, width: ((parseFloat(screenWidth) - 22) / 1.7) - 60, fontWeight: 'normal', marginLeft: 8 }}
                                    placeholder="Enter Coupon Code"
                                    underlineColorAndroid='transparent'
                                    keyboardType="email-address"
                                    editable={this.state.OrderListArray.length == 0 ? false : true}
                                    placeholderTextColor="#495057"
                                    defaultValue={CouponCode}
                                    onChangeText={(text) => CouponCode = text}
                                  />

                                </View>

                                <TouchableOpacity activeOpacity={1} disabled={this.state.OrderListArray.length == 0 ? true : false}
                                  onPress={() => this.Check_PromoCouponCode()} style={{ flexDirection: 'row', backgroundColor: '#EFEFF4', width: (parseFloat(screenWidth) - 22) / 3, borderRadius: 1, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ color: '#000', fontSize: 18 }}>APPLY</Text>
                                </TouchableOpacity>

                              </View>
                              :
                              null
                            }

                            <View style={{ height: 1, width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 6, marginBottom: 5 }} />

                            <View style={{ flexDirection: 'row', marginTop: 6, }}>

                              <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 15, color: '#000', paddingLeft: 10 }}>GST (INCLUDED)</Text>
                              <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 15, color: '#000', textAlign: 'right', paddingRight: 10 }}>${this.state.gstAmount.toFixed(2)}</Text>

                            </View>

                            {
                              this.state.promoCode !== "" ?

                                <View style={{ flexDirection: 'row', marginTop: 10, }}>

                                  <View style={{ backgroundColor: '', width: ((parseFloat(screenWidth) - 22) / 4) * 3, flexDirection: 'row', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 15, maxWidth: (((parseFloat(screenWidth) - 22) / 4) * 3) - 50, color: '#28a745', paddingLeft: 10 }}>{this.state.promoCode}</Text>

                                    <TouchableOpacity onPress={() => { this.Alert_coupon_code() }} activeOpacity={1} style={{ width: 30, height: 30, marginLeft: 10, justifyContent: 'center', alignItems: "center" }}>
                                      <Image style={{ height: 20, width: 20, }} resizeMode="stretch" source={require('./assets/delete.png')} />
                                    </TouchableOpacity>

                                    {/* <TouchableOpacity onPress={() => { }} activeOpacity={1} style={{ width: 30, height: 30, marginLeft: 5, justifyContent: 'center', alignItems: "center" }}>
                                      <Image style={{ height: 22, width: 22, }} resizeMode="stretch" source={require('./assets/info.png')} />
                                    </TouchableOpacity> */}

                                  </View>

                                  <Text style={{ width: (parseFloat(screenWidth) - 22) / 4, marginTop: 4, fontSize: 15, color: '#28a745', textAlign: 'right', paddingRight: 10 }}>${this.state.promoAmount.toFixed(2)}</Text>

                                </View>

                                :
                                null
                            }

                            {
                              this.state.OfferName !== "" ?
                                <View style={{ flexDirection: 'row', marginTop: 10, }}>

                                  <View style={{ backgroundColor: '', width: ((parseFloat(screenWidth) - 22) / 4) * 3, flexDirection: 'row', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 15, maxWidth: (((parseFloat(screenWidth) - 22) / 4) * 3) - 50, color: '#28a745', paddingLeft: 10 }}>{this.state.OfferName}</Text>

                                    <TouchableOpacity onPress={() => { this.Delete_offers() }} activeOpacity={1} style={{ width: 30, height: 30, marginLeft: 10, justifyContent: 'center', alignItems: "center" }}>
                                      <Image style={{ height: 20, width: 20, }} resizeMode="stretch" source={require('./assets/delete.png')} />
                                    </TouchableOpacity>

                                    {/* <TouchableOpacity onPress={() => { }} activeOpacity={1} style={{ width: 30, height: 30, marginLeft: 5, justifyContent: 'center', alignItems: "center" }}>
                              <Image style={{ height: 22, width: 22, }} resizeMode="stretch" source={require('./assets/info.png')} />
                            </TouchableOpacity> */}

                                  </View>

                                  <Text style={{ width: (parseFloat(screenWidth) - 22) / 4, marginTop: 4, fontSize: 15, color: '#28a745', textAlign: 'right', paddingRight: 10 }}>${this.state.OfferAmount.toFixed(2)}</Text>

                                </View>
                                :
                                null
                            }

                            {
                              this.state.IsDeliveryOrPickup == "Delivery" ?

                                <View style={{ flexDirection: 'row', marginTop: 6, }}>

                                  <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 15, color: '#000', paddingLeft: 10 }}>DELIVERY FEE</Text>
                                  <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 15, color: '#000', textAlign: 'right', paddingRight: 10 }}>${this.state.DeliveryFees.toFixed(2)}</Text>

                                </View>
                                :
                                this.state.TakeAwayDiscount !== 0 ?
                                  <View style={{ flexDirection: 'row', marginTop: 10, }}>

                                    <Text style={{ width: ((parseFloat(screenWidth) - 22) / 4) * 3, fontSize: 15, color: '#28a745', paddingLeft: 10 }}>10% TAKE AWAY DISCOUNT</Text>

                                    <Text style={{ width: (parseFloat(screenWidth) - 22) / 4, fontSize: 15, color: '#28a745', textAlign: 'right', paddingRight: 10 }}>${this.state.TakeAwayDiscount.toFixed(2)}</Text>

                                  </View>
                                  :
                                  null
                            }

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                              <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', paddingLeft: 10 }}>TOTAL</Text>
                              <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', textAlign: 'right', paddingRight: 10 }}>${this.state.OrderTotalAmount.toFixed(2)}</Text>

                            </View>

                            <TouchableOpacity disabled={this.state.OrderListArray.length == 0 ? true : false} activeOpacity={1}
                              onPress={() => {
                                AsyncStorage.getItem("scanqr").then((value) => {
                                  if (value == "true") {
                                    AsyncStorage.getItem("DineInCustomerInformation").then((DineInCustomerInformation) => {
                                      if (DineInCustomerInformation != null) {
                                        let responseJson = JSON.parse(DineInCustomerInformation);
                                        Person_FirstName = responseJson.FirstName;
                                        Person_LastName = responseJson.LastName;
                                        Person_Email = responseJson.Email;
                                        Person_Mobile = responseJson.MobileNo;
                                        this.setState(({ uniqueValue }) => ({
                                          uniqueValue: uniqueValue + 1
                                        }))
                                      } else {
                                        Person_FirstName = "";
                                        Person_LastName = "";
                                        Person_Email = "";
                                        Person_Mobile = "";
                                        Person_cardno = "";
                                      }
                                    }).done();
                                  }
                                }).done();

                                this.setState({ spinnerOrderList: false });
                                this.setState({ persondetails: true });
                              }}
                              style={{ marginTop: 12, marginBottom: 5, width: parseFloat(screenWidth) - 42, height: 45, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', }}>CHECKOUT</Text>

                            </TouchableOpacity>

                            <View style={{ height: 0.6, width: parseFloat(screenWidth) - 22, backgroundColor: "#EFEFF4", marginTop: 5, marginBottom: 5 }} />

                            {
                              hideandshowDeliveryonColor == true ?

                                <View key={this.state.uniqueValue} style={{ marginTop: 3, width: parseFloat(screenWidth) - 22, marginLeft: 13 }}>
                                  <Text style={{ color: '#000', fontSize: 13 }}>WE WILL DELIVER TO:</Text>
                                  <View style={{ flexDirection: 'row' }}>
                                    {
                                      DeliveryApptno != null && DeliveryApptno != "" ?
                                        <Text style={{ color: '#000', fontSize: 13 }}>{DeliveryApptno}, </Text>
                                        : null
                                    }
                                    {
                                      DeliverystNo !== null ?
                                        <Text style={{ color: '#000', fontSize: 13 }}>{DeliverystNo} </Text>
                                        : null
                                    }
                                    <Text style={{ color: '#000', fontSize: 13 }}>{DeliveryStreet},</Text>
                                  </View>
                                  <Text style={{ color: '#000', fontSize: 13 }}>{DeliverySuburb}-{DeliveryPostcode}</Text>
                                  {/* <Text style={{ color: '#000', fontSize: 13, marginTop: 1 }}>DELIVERY TIME IS:</Text>
                          <Text style={{ color: '#000', fontSize: 13 }}>{DeliveryTime}</Text> */}
                                </View>
                                :
                                null
                            }

                            {
                              this.state.scanqr == "true" ?
                                null
                                :
                                <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 22, justifyContent: 'center', height: 45, marginTop: 8, marginBottom: 8, backgroundColor: '#fff' }}>

                                  <TouchableOpacity activeOpacity={1} // disabled={this.state.IsPreorder == "true" ? true : false}
                                    // onPress={() => { this.setState({ pickupButtonClick: true }), this.setState({ openoutlet: false }), this.setState({ UniqueKey: parseInt(this.state.UniqueKey) + 1 }), this.setState({ deliverytimepopup: true, deliveryAsap: true, }) }}
                                    onPress={() => {
                                      if (this.state.IsPreorder == "true") {
                                        Alert.alert(
                                          "Sorry !",
                                          "Delivery is not available with pre-orders !", [
                                          {
                                            text: "Ok",
                                            onPress: () => null
                                          },
                                        ])
                                      }
                                      else {
                                        this.setState({ OrderTrenddingTimeValue: "" });
                                        this.SelectPickup_to_Delivery();
                                      }
                                    }}
                                    style={{ paddingRight: 5, justifyContent: 'center', alignItems: 'center', width: (parseFloat(screenWidth) - 22) / 2, backgroundColor: hideandshowDeliveryonColor !== false ? '#f08e1f' : '#EFEFF4', }}>
                                    <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>DELIVERY</Text>
                                    <Text style={{ color: '#000', fontSize: 10, }}>(CHANGE DELIVERY ADDRESS)</Text>
                                  </TouchableOpacity>

                                  <View style={{ height: 30, width: 30, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 9999, borderRadius: 17.5, backgroundColor: '#000' }}>
                                    <Text style={{ color: '#fff', fontSize: 12, }}>OR</Text>
                                  </View>

                                  <TouchableOpacity activeOpacity={1} disabled={this.state.IsPreorder == "false" ? hideandshowDeliveryonColor == true ? false : true : "true"}
                                    // onPress={() => {
                                    //   this.setState({ pickupButtonClick: true }),
                                    //     this.setState({ deliverytimepopup: false }),
                                    //     this.setState({ openoutlet: true }),
                                    //     this.setState(({ uniqueValue }) => ({
                                    //       uniqueValue: uniqueValue + 1
                                    //     })),
                                    //     AsyncStorage.setItem("DeliveryStreet", ""),
                                    //     AsyncStorage.setItem("DeliverystNo", ""),
                                    //     AsyncStorage.setItem("DeliverySuburb", ""),
                                    //     AsyncStorage.setItem("DeliveryState", ""),
                                    //     AsyncStorage.setItem("DeliveryPostcode", ""),
                                    //     AsyncStorage.setItem("DeliveryTime", ""),
                                    //     DeliveryStreet = "",
                                    //     DeliverystNo = "",
                                    //     DeliverySuburb = "",
                                    //     DeliveryState = "",
                                    //     DeliveryPostcode = "",
                                    //     DeliveryTime = "",
                                    //     hideandshowDeliveryonColor = false;
                                    // }}
                                    onPress={() => { this.setState({ OrderTrenddingTimeValue: "" }), this.SelectDelivery_to_Pickup() }}
                                    style={{ paddingLeft: 10, justifyContent: 'center', paddingLeft: 30, alignItems: 'center', width: (parseFloat(screenWidth) - 22) / 2, backgroundColor: hideandshowDeliveryonColor == false ? '#f08e1f' : '#EFEFF4', }}>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700', }}>PICK UP</Text>
                                    <Text style={{ color: '#000', fontSize: 10, textAlign: 'center', }}>DISCOUNTS APPLY</Text>
                                  </TouchableOpacity>

                                </View>
                            }

                          </View>

                          {/* <Toast ref="toa" /> */}

                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.persondetails == true ?
                      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ maxHeight: parseFloat(screenHeight) - 120, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>
                          <ScrollView scrollEnabled contentContainerStyle={{}}>
                            <View key={this.state.UniqueKey} style={{ width: parseFloat(screenWidth) - 22, backgroundColor: 'white', borderRadius: 1 }}>
                              <View style={{ height: 50, width: parseFloat(screenWidth) - 22, backgroundColor: 'rgb(230, 118, 60)', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, }}>

                                <Text style={{ fontSize: 19, color: '#fff' }}>CUSTOMER INFORMATION</Text>

                                <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ persondetails: false }) }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 5, width: 35, height: 35, }}>
                                  <Text style={{ marginLeft: 10, fontSize: 32, color: '#fff', transform: [{ rotate: '45deg' }] }}>+</Text>
                                </TouchableOpacity>

                              </View>

                              <View style={{ height: 2, backgroundColor: '#e9ecef', marginTop: 1 }} />

                              {
                                this.state.getdata == true ?
                                  null :
                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/debit_card.png')} />

                                    <TextInput key={this.state.UniqueKey}
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 168, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="Search MemberCard Or Reference"
                                      underlineColorAndroid='transparent'
                                      keyboardType="numbers-and-punctuation"
                                      placeholderTextColor="#000"
                                      defaultValue={Person_MemberCard}
                                      onChangeText={(text) => Person_MemberCard = text}
                                    />

                                    <TouchableOpacity onPress={() => { this.Get_Memberdetails(Person_MemberCard) }} activeOpacity={1} style={{ height: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(230, 118, 60)', width: 60, borderTopRightRadius: 1, borderBottomRightRadius: 1 }}>
                                      <Image
                                        source={require('./assets/search_icon.png')}
                                        style={{ width: 23, height: 23 }}
                                        resizeMode="stretch"
                                      />
                                    </TouchableOpacity>

                                  </View>
                              }

                              {
                                this.state.getdata == true ?

                                  this.state.getmemberdetail !== true ?
                                    null
                                    :
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                      <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/phone.png')} />

                                      <TextInput
                                        style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 168, fontWeight: 'normal', marginLeft: 8 }}
                                        placeholder="Confirm your mobile number"
                                        underlineColorAndroid='transparent'
                                        keyboardType="numbers-and-punctuation"
                                        maxLength={10}
                                        placeholderTextColor="#000"
                                        defaultValue={Person_confirmmobile}
                                        onChangeText={(text) => {
                                          Person_confirmmobile = text
                                        }}
                                      />

                                      <TouchableOpacity onPress={() => { this.set_memberdetails(Person_confirmmobile) }} activeOpacity={1} style={{ height: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(230, 118, 60)', width: 60, borderTopRightRadius: 1, borderBottomRightRadius: 1 }}>
                                        <Image
                                          source={require('./assets/double_right.png')}
                                          style={{ width: 23, height: 23 }}
                                          resizeMode="stretch"
                                        />
                                      </TouchableOpacity>

                                    </View>
                                  :
                                  null}

                              {
                                this.state.getdata == true ?
                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/debit_card.png')} />

                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }} >
                                      {Person_cardno}
                                    </Text>

                                  </View>
                                  :
                                  null}

                              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_dark.png')} />

                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontStyle: 'italic', fontWeight: 'normal', marginLeft: 8 }} >
                                      **********
                    </Text>
                                    :
                                    <TextInput
                                      key={this.state.uniqueValue}
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="First Name"
                                      underlineColorAndroid='transparent'
                                      keyboardType="email-address"
                                      returnKeyType="next"
                                      placeholderTextColor="#000"
                                      defaultValue={Person_FirstName}
                                      onChangeText={(text) => Person_FirstName = text}
                                      onSubmitEditing={(event) => {
                                        this.refs.LastName.focus();
                                      }}
                                    />
                                }

                              </View>

                              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_dark.png')} />
                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontStyle: 'italic', fontWeight: 'normal', marginLeft: 8 }} >
                                      **********
                    </Text>
                                    :
                                    <TextInput
                                      key={this.state.uniqueValue}
                                      ref='LastName'
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="Last Name"
                                      underlineColorAndroid='transparent'
                                      keyboardType="email-address"
                                      returnKeyType="next"
                                      placeholderTextColor="#000"
                                      defaultValue={Person_LastName}
                                      onChangeText={(text) => Person_LastName = text}
                                      onSubmitEditing={(event) => {
                                        this.refs.Mobile.focus();
                                      }}
                                    />
                                }

                              </View>

                              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/phone.png')} />

                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontStyle: 'italic', fontWeight: 'normal', marginLeft: 8 }} >
                                      **********
                    </Text>
                                    :
                                    <TextInput
                                      key={this.state.uniqueValue}
                                      ref='Mobile'
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="Mobile Number"
                                      underlineColorAndroid='transparent'
                                      placeholderTextColor="#000"
                                      keyboardType="numbers-and-punctuation"
                                      maxLength={10}
                                      returnKeyType="next"
                                      defaultValue={Person_Mobile}
                                      onSubmitEditing={(event) => {
                                        this.refs.email.focus();
                                      }}
                                      onChangeText={(text) => {
                                        Person_Mobile = text

                                        if (text.length <= 9) {
                                          this.setState({ MobilenoOnshow_Message: false });
                                        }
                                        else {
                                          if (text.substring(0, 2) == "04") {
                                            this.setState({ MobilenoOnshow_Message: true });
                                          }
                                          else {
                                            this.setState({ MobilenoOnshow_Message: false });
                                          }
                                        }
                                      }}
                                    />
                                }

                              </View>

                              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/mail.png')} />

                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 118, fontStyle: 'italic', fontWeight: 'normal', marginLeft: 8 }} >
                                      **********
                    </Text>
                                    :
                                    <TextInput
                                      key={this.state.uniqueValue}
                                      ref='email'
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 118, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="Email"
                                      underlineColorAndroid='transparent'
                                      keyboardType="email-address"
                                      placeholderTextColor="#000"
                                      defaultValue={Person_Email}
                                      onChangeText={(text) => Person_Email = text}
                                    />

                                }

                              </View>

                              {
                                this.state.MobilenoOnshow_Message == true ?
                                  <Text style={{ fontSize: 16, marginRight: 20, marginLeft: 20, marginTop: 15, color: '#000' }}>SMS tracking enabled! Driver tracking coming soon.</Text>
                                  :
                                  null
                              }

                              {hideandshowDeliveryonColor == true ?
                                <View style={{ width: parseFloat(screenWidth) - 22, backgroundColor: 'white', borderRadius: 1 }}>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/person_pin.png')} />

                                    <TextInput
                                      style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 118, fontWeight: 'normal', marginLeft: 8 }}
                                      placeholder="St No*"
                                      underlineColorAndroid='transparent'
                                      keyboardType="numbers-and-punctuation"
                                      placeholderTextColor="#000"
                                      defaultValue={DeliverystNo}
                                      onChangeText={(text) => {
                                        DeliverystNo = text,
                                          AsyncStorage.setItem("DeliverystNo", DeliverystNo.toString());
                                      }
                                      }
                                    />


                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_pin.png')} />

                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }} >
                                      {DeliveryStreet}
                                    </Text>

                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} />

                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }} >
                                      {DeliverySuburb}
                                    </Text>

                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} />

                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }} >
                                      {DeliveryState}
                                    </Text>

                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                                    <Image style={{ height: 25, width: 25, marginLeft: 15 }} />

                                    <Text style={{ fontSize: 16, width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }} >
                                      {DeliveryPostcode}
                                    </Text>

                                  </View>

                                </View>
                                :
                                null}

                              <View style={{ marginTop: 15, marginBottom: 10, flexDirection: 'row', alignItems: 'center', marginRight: 18, marginLeft: 18, }}>

                                {/* <View style={{ height: 25, width: 25, marginRight: 5, borderRadius: 1, backgroundColor: 'rgb(230, 118, 60)' }}>

                  </View> */}

                                <CheckBox
                                  style={{ height: 30, width: 30, marginRight: 4, marginLeft: 2 }}
                                  onClick={() => {
                                    this.setState({
                                      Iscultleryrequired: !this.state.Iscultleryrequired
                                    })
                                  }}
                                  checkedCheckBoxColor="rgb(230, 118, 60)"
                                  uncheckedCheckBoxColor="rgb(230, 118, 60)"
                                  isChecked={this.state.Iscultleryrequired}
                                />

                                <Text style={{ color: '#000', fontSize: 16, height: 30, }}>Please tick for plastic cultlery</Text>

                              </View>

                              {
                                this.state.getmemberdetail == false ?
                                  <TouchableOpacity activeOpacity={1} onPress={() => this.Save_Person_Details()} style={{ height: 50, marginBottom: 15, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, marginRight: 18, marginLeft: 18, alignItems: 'center', justifyContent: 'center', }}>

                                    <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', }}>SAVE INFO</Text>

                                  </TouchableOpacity>
                                  :
                                  null}

                            </View>
                          </ScrollView>
                          {/* <Toast ref="toast" /> */}
                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.TreddingHour == true ?
                      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>
                          <View style={{ width: parseFloat(screenWidth) - 22, height: 410, backgroundColor: 'white', borderRadius: 1 }}>

                            <View style={{ height: 50, width: parseFloat(screenWidth) - 22, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, }}>
                              <Text numberOfLines={1} style={{ fontSize: 17, color: '#000' }}>WHEN WOULD YOU LIKE TO ORDER ?</Text>

                              {/* <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ TreddingHour: false }) }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 5, width: 35, height: 35, backgroundColor: 'white' }}>
                    <Text style={{ marginLeft: 10, fontSize: 32, color: 'rgb(230, 118, 60)', transform: [{ rotate: '45deg' }] }}>+</Text>
                  </TouchableOpacity> */}

                            </View>

                            <View style={{ height: 2, backgroundColor: '#e9ecef', marginTop: 1 }} />

                            <View style={{ height: 60, borderRadius: 1, padding: 14, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(230, 118, 60)' }}>

                              <TouchableOpacity activeOpacity={1}
                                onPress={() => {
                                  if (this.state.IsPreorder == "true") {
                                    Alert.alert(
                                      "Sorry !",
                                      "ASAP is not available with pre-orders !", [
                                      {
                                        text: "Ok",
                                        onPress: () => null
                                      },
                                    ])
                                  }
                                  else {
                                    this.setState({ selectOrderTime: 'asap' })
                                  }
                                }}
                                style={{ height: 40, borderRadius: 1, backgroundColor: this.state.selectOrderTime == "asap" ? '#fff' : "rgb(230, 118, 60)", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16.5, color: this.state.selectOrderTime == "asap" ? 'rgb(230, 118, 60)' : '#fff', textAlign: 'center', marginRight: 30, marginLeft: 30 }}>ASAP</Text>
                              </TouchableOpacity>

                              <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ selectOrderTime: 'later' }) }} style={{ height: 40, borderRadius: 1, backgroundColor: this.state.selectOrderTime == "later" ? '#fff' : "rgb(230, 118, 60)", justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                                <Text style={{ fontSize: 16.5, color: this.state.selectOrderTime == "later" ? 'rgb(230, 118, 60)' : '#fff', textAlign: 'center', marginRight: 25, marginLeft: 25 }}>LATER</Text>
                              </TouchableOpacity>

                            </View>

                            <View style={{ backgroundColor: '#efefef', width: 300, borderRadius: 1, height: 170, alignSelf: 'center', marginTop: 20, justifyContent: 'center' }}>

                              {
                                this.state.selectOrderTime == "asap" ?
                                  <View style={{ alignSelf: 'center' }} >
                                    <Text style={{ fontSize: 17, color: 'rgb(230, 118, 60)', alignSelf: 'center' }}>READY IN {this.state.timefortrendingour} MINUTES</Text>
                                  </View>
                                  :
                                  <View style={{ alignSelf: 'center' }} >
                                    <Text style={{ fontSize: 17, color: 'rgb(230, 118, 60)', }}>Ready at around:</Text>
                                    <View style={{ height: 50, width: 180, marginTop: 15, borderRadius: 1, backgroundColor: '#fff' }}>
                                      <Picker
                                        style={{ fontSize: 17, color: '#000', marginLeft: 10 }}
                                        mode="dropdown"
                                        placeholder="Select Time"
                                        selectedValue={this.state.OrderTimeValue}
                                        onValueChange={(itemValue) => { this.onValueChange_OredrTime(itemValue); }}>
                                        {this.state.TraddingHoursListArray.map((item, index) => {
                                          return (<Picker.Item label={item.HourValue} value={item.HourValue} />)
                                        })}
                                      </Picker>
                                    </View>
                                  </View>
                              }

                            </View>

                            <TouchableOpacity activeOpacity={1} onPress={() => {

                              if (this.state.selectOrderTime == "asap") {
                                this.setState({ OrderTrenddingTimeValue: "" });

                                this.setState({ OrderTimeValue: "" }),
                                  this.setState({ TreddingHour: false }),
                                  this.setState({ fillorderdetails: true })

                              }
                              else {
                                if (this.state.OrderTimeValue == "") {
                                  this.setState({ Suggestion_notification: true });
                                  this.setState({ suggestion_message: 'TIME REQUIRED' });
                                  setTimeout(() => {
                                    this.setState({ Suggestion_notification: false });
                                  }, 2000);
                                }
                                else {
                                  this.setState({ OrderTrenddingTimeValue: this.state.OrderTimeValue })

                                  this.setState({ OrderTimeValue: "" }),
                                    this.setState({ TreddingHour: false }),
                                    this.setState({ fillorderdetails: true })

                                }
                              }

                            }}

                              style={{ alignSelf: 'center', width: 300, height: 50, marginTop: 20, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, marginRight: 18, marginLeft: 18, alignItems: 'center', justifyContent: 'center', }}>

                              <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', }}>SAVE TIME</Text>

                            </TouchableOpacity>

                          </View>
                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.fillorderdetails == true ?
                      <TouchableOpacity activeOpacity={1} onPress={() => { }} style={{ position: 'absolute', zIndex: 9999, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', }}>
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>
                          <View style={{ width: parseFloat(screenWidth) - 22, height: 365, backgroundColor: 'white', borderRadius: 1 }}>
                            <View style={{ height: 50, width: parseFloat(screenWidth) - 22, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, }}>
                              <Text style={{ fontSize: 20, color: '#000' }}>Your Order Date</Text>

                              <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ fillorderdetails: false }) }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 5, width: 35, height: 35, backgroundColor: 'white' }}>
                                <Text style={{ marginLeft: 10, fontSize: 32, color: 'rgb(230, 118, 60)', transform: [{ rotate: '45deg' }] }}>+</Text>
                              </TouchableOpacity>

                            </View>

                            <View style={{ backgroundColor: '#e9ecef', padding: 10, width: 180, alignSelf: 'center', borderRadius: 1, marginTop: 5 }}>
                              <Text style={{ color: '#495057', textAlign: 'center', fontSize: 19, }}>{this.state.IsPreorder == "true" ? this.state.PreOrderdate : Moment().format("DD-MM-YYYY")}</Text>
                            </View>

                            <View style={{ height: 2, backgroundColor: '#e9ecef', marginTop: 16 }} />

                            <View style={{ flexDirection: 'row', marginTop: 16 }}>

                              <View style={{ width: (parseFloat(screenWidth) - 22) / 2, height: 160 }}>
                                <Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 5 }} resizeMode="stretch" source={require('./assets/clock.png')} />
                                <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 6 }}>{this.state.scanqr == "true" ? "Dine-In TIME" : this.state.IsPreorder == "true" ? "PICKUP TIME" : hideandshowDeliveryonColor == false ? "PICKUP TIME" : "DELIVERY TIME"}</Text>
                                <Text style={{ fontSize: 17, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 2 }}>{this.state.OrderTrenddingTimeValue == "" ? this.state.time : this.state.OrderTrenddingTimeValue}</Text>
                                <Text style={{ fontSize: 15, color: '#000', alignSelf: 'center', textAlign: 'center', marginTop: 2 }}>{this.state.IsPreorder == "true" ? Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("dddd, DD-MM-YYYY") : Moment().format("dddd, DD-MM-YYYY")}</Text>

                                {this.state.scanqr == "true" ? null :
                                  <TouchableOpacity activeOpacity={1}
                                    onPress={() => {
                                      let d = [];
                                      this.setState({ TraddingHoursListArray: d });
                                      AsyncStorage.getItem("IsPreorder").then((value) => {
                                        if (value == "true") {
                                          this.Get_PreOrderHours_from_api(Moment(this.state.PreOrderdate + " " + Moment().format('hh:mm A'), "DD-MM-YYYY hh:mm A").format("YYYY-MM-DD hh:mm A"))
                                        } else {
                                          this.Get_TraddingHours_from_api();
                                        }
                                      }).done();
                                      // this.state.IsPreorder == "true" ?
                                      //   this.Get_PreOrderHours_from_api(Moment(this.state.PreOrderdate + " " + Moment().format('hh:mm A'), "DD-MM-YYYY hh:mm A").format("YYYY-MM-DD hh:mm A"))
                                      //   :
                                      this.asaptime();
                                      // this.Get_TraddingHours_from_api(),
                                      this.setState({ fillorderdetails: false });
                                      this.setState({ TreddingHour: true });
                                    }}
                                    style={{ flexDirection: 'row', backgroundColor: '#EFEFF4', marginTop: 10, width: 100, alignSelf: 'center', height: 32, borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, color: '#000' }}>Edit</Text>
                                    <Image style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 7 }} resizeMode="stretch" source={require('./assets/pencil.png')} />
                                  </TouchableOpacity>
                                }

                              </View>

                              <View style={{ width: 1, backgroundColor: '#e9ecef', height: 150 }} />

                              <View style={{ width: (parseFloat(screenWidth) - 22) / 2, height: 160 }}>
                                <Image style={{ height: 30, width: 30, alignSelf: 'center', marginTop: 5 }} resizeMode="stretch" source={require('./assets/person.png')} />
                                <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 1 }}>CUSTOMER DETAILS</Text>

                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 17, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 2 }} >
                                      **********
                    </Text>
                                    :
                                    Person_FirstName != "" ?
                                      <Text style={{ fontSize: 17, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 2 }}>{Person_FirstName}</Text>
                                      :
                                      null
                                }
                                {
                                  this.state.getmemberdetail == true ?
                                    <Text style={{ fontSize: 17, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 2 }} >
                                      **********
                    </Text>
                                    :
                                    Person_Mobile != "" ?
                                      <Text style={{ fontSize: 17, color: '#000', textAlign: 'center', alignSelf: 'center', marginTop: 2 }}>{Person_Mobile}</Text>
                                      :
                                      null}

                                <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ fillorderdetails: false }), this.setState({ persondetails: true }) }} style={{ flexDirection: 'row', backgroundColor: '#EFEFF4', marginTop: 10, width: 100, alignSelf: 'center', height: 32, borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ fontSize: 15, color: '#000' }}>Edit</Text>
                                  <Image style={{ height: 16, width: 16, alignSelf: 'center', marginLeft: 7 }} resizeMode="stretch" source={require('./assets/pencil.png')} />
                                </TouchableOpacity>

                              </View>

                            </View>

                            <View style={{ marginTop: 10, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>
                              <TextInput
                                style={{ fontSize: 17, textAlignVertical: 'top', height: 45, color: "#665c5c", fontWeight: 'normal', marginLeft: 25, marginRight: 10 }}
                                placeholder="You may leave additional message."
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                placeholderTextColor="#665c5c"
                                // numberOfLines={4}
                                returnKeyType="done"
                                multiline={false}
                                // maxLength={67}
                                maxLength={67}
                                // value={this.state.text}
                                defaultValue={AdditionalMessage}
                                onChangeText={(text) => {
                                  let t = "";

                                  t = text;

                                  this.setState({ text: t });
                                }
                                }
                              />
                            </View>
                          </View>

                          {Person_FirstName != "" && Person_Mobile != "" ?
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.pay() }} style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 22, height: 45, marginTop: 15, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{ fontSize: 18, color: '#fff' }}>Pay Now</Text>
                              <Text style={{ fontSize: 20, color: '#fff', fontWeight: '700' }}>({this.state.OrderTotalAmount.toFixed(2)})</Text>
                            </TouchableOpacity>
                            :
                            null
                          }
                          {/* <Toast ref="error" /> */}
                        </View>
                      </TouchableOpacity>
                      :
                      null
                  }

                  {
                    this.state.creaditcardview == true ?
                      <TouchableOpacity activeOpacity={1} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 1, width: parseFloat(screenWidth) - 10, }}>
                          <View style={{ backgroundColor: 'rgb(230, 118, 60)', height: 45, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>PAYMENT INFORMATION</Text>
                          </View>
                          <View style={{ borderWidth: 2, borderRadius: 6, borderColor: 'rgb(230, 118, 60)', margin: 10 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#EFEFF4' }}>
                              {/* <Image
                      source={require('./assets/stp_card_unknown.png')}
                      style={{ width: 30, height: 25 }}
                    /> */}
                              <Text style={{ color: 'black', width: parseFloat(screenWidth) - 190, marginLeft: 20, fontSize: 15, }}>Pay with card</Text>

                              <View style={{ alignSelf: 'flex-end', flexDirection: 'row', }}>
                                <Image
                                  source={require('./assets/stp_card_visa.png')}
                                  style={{ width: 35, height: 30 }}
                                />

                                <Image
                                  source={require('./assets/stp_card_mastercard.png')}
                                  style={{ width: 35, height: 30, marginLeft: 10 }}
                                />

                                <Image
                                  source={require('./assets/stp_card_amex.png')}
                                  style={{ width: 35, height: 30, marginLeft: 10 }}
                                />
                              </View>

                            </View>

                            <CreditCardInput
                              requiresName
                              requiresCVC
                              labels={{
                                name: "Card Holder Name",
                                number: "Card Number",
                                expiry: "Expiry Date",
                                cvc: "CVV",
                              }}
                              placeholders={{
                                name: "Full Name",
                                number: "1234 5678 1234 5678",
                                expiry: "MM/YY",
                                cvc: "CVV",
                              }}
                              invalidColor={"red"}
                              onChange={this._onChange} />

                            {this.state.Show_Captcha == true ?

                              <View>
                                <Text style={{ fontSize: 14, marginLeft: 15, marginRight: 15, color: '#000' }}>Sorry, there was an error with card payment, Please verfiy by filling out captcha below</Text>

                                <View style={{ flexDirection: 'row', marginTop: 10, height: 45, marginLeft: 0 }}>

                                  <ImageBackground style={{ marginLeft: 15, width: parseFloat(screenWidth) - 150, justifyContent: 'center', alignItems: 'center', height: 45 }} resizeMode="center" source={require('./assets/captchaImg.png')} >
                                    {/* <Image
                                    style={{ width: 180, height: 45, resizeMode: 'contain' }}
                                    source={{ uri: 'https://dummyimage.com/150x40/000091ea/fafafa.png&text=' + this.state.randomNumberOne }}
                                  /> */}
                                    <Text style={{ opacity: 0.5, height: 45, width: parseFloat(screenWidth) - 150, textAlign: 'center', letterSpacing: 10, fontSize: 35, color: '#404040' }}>{this.state.randomNumberOne}</Text>
                                  </ImageBackground>

                                  <TouchableOpacity activeOpacity={1} onPress={this.generateCaptcha} style={{ marginLeft: 20, height: 45, width: 45, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                      source={require('./assets/refresh.png')}
                                      style={{ width: 28, height: 28, }}
                                    />
                                  </TouchableOpacity>

                                </View>

                                <View style={{ height: 45, marginLeft: 15, marginTop: 10, marginBottom: 15, marginRight: 15, borderWidth: 1, borderColor: 'black' }}>
                                  <TextInput
                                    placeholder="Enter Captcha Code"
                                    onChangeText={data => this.setState({ textInputHolder: data })}
                                    style={{ height: 45, marginLeft: 8, color: '#000' }}
                                    // placeholderTextColor="#ccc"
                                    underlineColorAndroid='transparent'
                                  />
                                </View>

                              </View>

                              : null}
                          </View>

                          <View style={{ flexDirection: 'row', justifyContent: 'center', height: 40, marginTop: 10, marginBottom: 15, width: parseFloat(screenWidth) - 10, }}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.setState({ creaditcardview: false }), this.setState({ persondetails: true }) }}
                              style={{ borderWidth: 1, borderColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 1, width: (parseFloat(screenWidth) - 32) / 2.5 }}>
                              <Text style={{ fontSize: 18, color: 'black' }}>CANCEL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.next() }} // onPress={() => { this.pay() }} 
                              style={{ backgroundColor: 'rgb(230, 118, 60)', justifyContent: 'center', alignItems: 'center', borderRadius: 1, marginLeft: (parseFloat(screenWidth) - 32) / 12, width: (parseFloat(screenWidth) - 32) / 2.5 }}>
                              <Text style={{ fontSize: 18, color: 'white' }}>SAVE</Text>
                            </TouchableOpacity>
                          </View>

                        </View>

                        {/* <Toast ref="cardview" /> */}
                      </TouchableOpacity>
                      :
                      null
                  }

                  {
                    this.state.Dine_In_CustomerInformation_Popup == true ?
                      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', alignItems: 'center' }}>
                          <View key={this.state.UniqueKey} style={{ width: parseFloat(screenWidth) - 22, backgroundColor: 'white', borderRadius: 1 }}>
                            <View style={{ height: 50, width: parseFloat(screenWidth) - 22, backgroundColor: 'rgb(230, 118, 60)', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 1, borderTopRightRadius: 1, }}>

                              <Text style={{ fontSize: 19, color: '#fff' }}>CUSTOMER INFORMATION</Text>

                              {/* <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ Dine_In_CustomerInformation_Popup: false }) }}
                        style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 5, width: 35, height: 35, }}>
                        <Text style={{ marginLeft: 10, fontSize: 32, color: '#fff', transform: [{ rotate: '45deg' }] }}>+</Text>
                      </TouchableOpacity> */}

                            </View>

                            <View style={{ height: 2, backgroundColor: '#e9ecef', marginTop: 1 }} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_dark.png')} />

                              <TextInput
                                style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                placeholder="First Name"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                placeholderTextColor="#000"
                                defaultValue={DineIn_FirstName}
                                onChangeText={(text) => DineIn_FirstName = text}
                                onSubmitEditing={(event) => {
                                  this.refs.DineLastName.focus();
                                }}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 25, width: 25, marginLeft: 15 }} source={require('./assets/person_dark.png')} />

                              <TextInput
                                ref='DineLastName'
                                style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                placeholder="Last Name"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                placeholderTextColor="#000"
                                defaultValue={DineIn_LastName}
                                onChangeText={(text) => DineIn_LastName = text}
                                onSubmitEditing={(event) => {
                                  this.refs.DineMobile.focus();
                                }}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/phone.png')} />

                              <TextInput
                                ref='DineMobile'
                                style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 117, fontWeight: 'normal', marginLeft: 8 }}
                                placeholder="Mobile Number"
                                underlineColorAndroid='transparent'
                                placeholderTextColor="#000"
                                keyboardType="numbers-and-punctuation"
                                maxLength={10}
                                returnKeyType="next"
                                defaultValue={DineIn_Mobile}
                                onSubmitEditing={(event) => {
                                  this.refs.Dineemail.focus();
                                }}
                                onChangeText={(text) => { DineIn_Mobile = text }}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/mail.png')} />

                              <TextInput
                                ref='Dineemail'
                                style={{ fontSize: 16, color: '#000', width: parseFloat(screenWidth) - 118, fontWeight: 'normal', marginLeft: 8 }}
                                placeholder="Email"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                placeholderTextColor="#000"
                                defaultValue={DineIn_Email}
                                onChangeText={(text) => DineIn_Email = text}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 24, width: 24, marginLeft: 17 }} source={require('./assets/calendar.png')} />

                              <TextInput
                                editable={false}
                                style={{ fontSize: 16, color: '#818181', width: parseFloat(screenWidth) - 118, fontWeight: 'normal', marginLeft: 8 }}
                                placeholder={Moment().format('DD-MM-YYYY')}
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                placeholderTextColor="#818181"
                              // defaultValue={Moment().format('DD-MM-YYYY')}
                              // onChangeText={(text) => DineIn_Email = text}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: '#EFEFF4', borderRadius: 1, height: 45, marginRight: 18, marginLeft: 18, }}>

                              <Image style={{ height: 25, width: 25, marginLeft: 17 }} source={require('./assets/person_dark.png')} />

                              <Picker
                                key={this.state.uniqueValue}
                                style={{ width: parseFloat(screenWidth) - 117, fontSize: 16, color: '#000', }}
                                mode="dropdown"
                                selectedValue={QR_booking_peopleId}
                                onValueChange={(itemValue) => { this.QR_Bookingpeople(itemValue); }}>
                                <Picker.Item label={"Select People"} value={0} />
                                {this.state.BookingPeopel.map((item, index) => {
                                  return (<Picker.Item label={item.lable} value={item.value} />)
                                })}
                              </Picker>

                            </View>

                            <TouchableOpacity activeOpacity={1} onPress={() => this.Save_DineIn_customer_Details()}
                              style={{ height: 50, marginBottom: 15, marginTop: 15, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, marginRight: 18, marginLeft: 18, alignItems: 'center', justifyContent: 'center', }}>

                              <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '800', }}>SAVE INFO</Text>

                            </TouchableOpacity>

                          </View>
                          {/* <Toast ref="toast" /> */}
                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.paymentSuccessfull == true ?
                      <TouchableOpacity activeOpacity={1} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ width: parseFloat(screenWidth), backgroundColor: '#fff', height: parseFloat(screenHeight) - 56, borderRadius: 1, }}>

                          {/* <View style={{ width: screenWidth, height: 62, backgroundColor: 'rgb(40, 40, 41)', alignItems: 'center', justifyContent: 'center' }}>

                      <Image style={{ height: 42, width: 240, resizeMode: 'stretch', alignSelf: 'center' }} source={require('./assets/rasahys_logo.png')} />

                    </View> */}

                          <View style={{ width: screenWidth, marginTop: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontSize: 18, fontWeight: '600', color: 'green', alignSelf: 'center' }}>YOUR PAYMENT IS SUCCESSFUL</Text>

                          </View>

                          <Text style={{ color: '#000', fontSize: 20, paddingTop: 10, paddingLeft: 10, paddingBottom: 6, fontWeight: '700' }}>{this.state.PaymentSuccessobj.StoreName}</Text>

                          <View style={{ height: 0.8, backgroundColor: 'black', marginLeft: 10, marginRight: 10 }} />

                          {/* <Text style={{ color: '#000', fontSize: 20, padding: 10, fontWeight: '700' }}>Customer Summary</Text>
 width: parseFloat(screenWidth) - 173
                <View style={{ height: 0.8, backgroundColor: '#ccc', marginLeft: 10, marginRight: 10 }} /> */}

                          <View style={{ flexDirection: 'row', marginTop: 4, marginLeft: 10, marginRight: 10, }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', width: 95, }}>NAME </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', }}>: </Text>

                            <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', }}>{this.state.PaymentSuccessobj.FirstName}</Text>

                          </View>

                          {/* <View style={{ flexDirection: 'row', marginTop: 4, marginLeft: 10, marginRight: 10, }}>

                  <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', width: 95, }}>BILL NO </Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', }}>: </Text>

                  <Text style={{ fontSize: 14, color: '#000', }}>CBV-000007</Text>

                </View> */}

                          <View style={{ flexDirection: 'row', marginTop: 4, marginLeft: 10, marginRight: 10, }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', width: 95, }}>REFERENCE </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', }}>: </Text>

                            <Text style={{ fontSize: 14, color: '#000', }}>{this.state.PaymentSuccessobj.ReferenceNumber}</Text>

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 4, marginLeft: 10, marginRight: 10, }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', width: 95, }}>MOBILE NO </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000', }}>: </Text>

                            <Text style={{ fontSize: 14, color: '#000', }}>{this.state.PaymentSuccessobj.MobileNumber}</Text>

                          </View>

                          <View style={{ flexDirection: 'row', marginTop: 4, marginLeft: 10, marginRight: 10, }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, width: 95, color: '#000' }}>{hideandshowDeliveryonColor == true ? "DELIVERY" : "PICKUP"} DATE </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000' }}>: </Text>

                            <Text style={{ fontSize: 14, color: '#000', }}>{this.state.PaymentSuccessobj.PickUpTime != null ? this.state.PaymentSuccessobj.PickUpTime : null}</Text>

                          </View>

                          <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 20, marginTop: 4, marginLeft: 10, marginRight: 10 }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, width: 95, color: '#000' }}>ADDRESS </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000' }}>: </Text>

                            <Text style={{ fontSize: 14, width: parseFloat(screenWidth) - 128, color: '#000', marginRight: 10, marginLeft: 5 }}>{this.state.PaymentSuccessobj.StoreAddress}</Text>

                          </View>

                          <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 20, marginTop: 4, marginLeft: 10, marginRight: 10 }}>

                            <Text style={{ fontWeight: '700', fontSize: 14, width: 95, color: '#000' }}>NOTE </Text>
                            <Text style={{ fontWeight: '700', fontSize: 14, color: '#000' }}>: </Text>

                            <Text style={{ fontSize: 14, width: parseFloat(screenWidth) - 128, color: '#000', marginRight: 10, marginLeft: 5 }}>{this.state.PaymentSuccessobj.AdditionalMessage}</Text>

                          </View>

                          <View style={{ height: 0.8, backgroundColor: '#ccc', marginLeft: 10, marginTop: 5, marginRight: 10 }} />

                          <Text style={{ color: '#000', fontSize: 16, marginLeft: 10, marginRight: 10, fontWeight: '700' }}>Order Summary</Text>

                          <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.PaymentSuccessobj.SalesProductItemList}
                            renderItem={({ item, index }) =>

                              <View>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>

                                  <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center', backgroundColor: '' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                                      <Text style={{ fontSize: 14, color: '#000', marginLeft: 0 }}>{item.Quantity}</Text>
                                      <Text style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>x</Text>
                                    </View>
                                  </View>

                                  <View style={{ width: parseFloat(screenWidth) - 150, backgroundColor: '', justifyContent: 'center' }}>
                                    <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>{item.ProductName.toUpperCase()}</Text>
                                  </View>

                                  <View style={{ width: 80, justifyContent: 'center', backgroundColor: '' }}>
                                    <Text style={{ fontSize: 14, textAlign: 'right', color: '#000', marginRight: 5, }}>${item.UnitPrice.toFixed(2)}</Text>
                                  </View>

                                </View>

                                {item.SalesModifierItems.map((ite, index) => {
                                  return (
                                    <View style={{ flexDirection: 'row', marginTop: 2 }}>

                                      <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center', backgroundColor: '' }}>
                                      </View>

                                      <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 150, backgroundColor: '', }}>
                                        <Text style={{ fontSize: 14, color: '#000', marginLeft: 0 }}>{ite.Quantity}</Text>
                                        <Text style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>x</Text>
                                        <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 6 }}>{ite.ModifierName.toUpperCase()}</Text>
                                      </View>

                                      <View style={{ width: 80, justifyContent: 'center', backgroundColor: '' }}>
                                        <Text style={{ fontSize: 14, textAlign: 'right', color: '#000', marginRight: 5, }}>${ite.UnitPrice.toFixed(2)}</Text>
                                      </View>

                                    </View>
                                  )
                                })}

                              </View>
                            }
                            keyExtractor={item => item.ProductId}
                          />

                          <View style={{ height: 0.8, backgroundColor: '#ccc', marginLeft: 10, marginTop: 3, marginRight: 10 }} />

                          <View style={{ flexDirection: 'row', marginTop: 4, }}>

                            <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', paddingLeft: 10 }}>GST (included)</Text>
                            <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.Gst.toFixed(2)}</Text>

                          </View>

                          {
                            this.state.PaymentSuccessobj.PrmoCodeName != null ?
                              <View style={{ flexDirection: 'row', marginTop: 3, }}>

                                <Text style={{ width: parseFloat(screenWidth) - 100, fontSize: 16, color: '#28a745', fontWeight: '700', paddingLeft: 10 }}>{this.state.PaymentSuccessobj.PrmoCodeName}</Text>
                                <Text style={{ width: 100, fontSize: 16, color: '#28a745', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.PrmoCodeAmount != null ? this.state.PaymentSuccessobj.PrmoCodeAmount.toFixed(2) : 0.00}</Text>

                              </View>
                              :
                              null
                          }

                          {
                            this.state.PaymentSuccessobj.OfferName != null ?
                              <View style={{ flexDirection: 'row', marginTop: 3, }}>

                                <Text style={{ width: parseFloat(screenWidth) - 90, fontSize: 16, color: '#28a745', fontWeight: '700', paddingLeft: 10 }}>{this.state.PaymentSuccessobj.OfferName}</Text>
                                <Text style={{ width: 90, fontSize: 16, color: '#28a745', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.OfferAmount != null ? this.state.PaymentSuccessobj.OfferAmount.toFixed(2) : 0.00}</Text>

                              </View>
                              :
                              null
                          }

                          {this.state.PaymentSuccessobj.IsDeliveryOrPickup == "Delivery" ?
                            <View style={{ flexDirection: 'row', marginTop: 3, }}>

                              <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', paddingLeft: 10 }}>Delivery Fee</Text>
                              <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.DeliveryFee != null ? this.state.PaymentSuccessobj.DeliveryFee.toFixed(2) : 0.00}</Text>

                            </View>
                            :
                            null
                          }

                          {
                            this.state.PaymentSuccessobj.TADiscount != null ?
                              <View style={{ flexDirection: 'row', marginTop: 3, }}>

                                <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', paddingLeft: 10 }}>Discount</Text>
                                <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.TADiscount.toFixed(2)}</Text>

                              </View>
                              :
                              null
                          }

                          <View style={{ flexDirection: 'row', marginTop: 3, }}>

                            <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', paddingLeft: 10 }}>Total</Text>
                            <Text style={{ width: parseFloat(screenWidth) / 2, fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'right', paddingRight: 10 }}>${this.state.PaymentSuccessobj.PaidAmount.toFixed(2)}</Text>

                          </View>

                          <View style={{ height: 0.8, backgroundColor: '#ccc', marginLeft: 10, marginTop: 3, marginRight: 10 }} />

                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this.setState({ screenchange: "menu" });
                              this.setState({ paymentSuccessfull: false });

                              this.setState({ showapiloader: true });
                              this.setState({ loadMenus: true });

                              fetch(url + 'Mobile/AppStatusCheckPicUpDeliveryPreOrder?', {
                                headers: {
                                  "Accept": "application/json",
                                  "ApiToken": "imnyUfpf"
                                },
                              })
                                .then((response) => response.json())
                                .then((responseJson) => {
                                  if (responseJson.success == "1") {
                                    this.setState({ showdeliveryButton: responseJson.record.IsDelivery });
                                    this.setState({ showpickupButton: responseJson.record.IsPickUp });
                                    this.setState({ showPreorder: responseJson.record.IsPreOrder });

                                    this.setState({ showapiloader: false });

                                  } else {
                                    this.setState({ showapiloader: false });
                                  }
                                })
                                .catch((error) => {
                                  this.setState({ showapiloader: false });
                                  console.error(error);
                                });

                              this.setState({ pickupButtonClick: false });
                              this.setState({ PreOrderdate: "" });
                              this.setState({ IsPreorder: "false" });
                              this.setState({ IsPreorderDeliveryOrPickup: "" });
                            }} style={{ marginLeft: 10, marginTop: 10, marginRight: 10, marginBottom: 10, width: parseFloat(screenWidth) - 20, height: 40, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '600', }}>DONE</Text>

                          </TouchableOpacity>


                          {
                            hideandshowDeliveryonColor == true ?
                              <TouchableOpacity activeOpacity={1}
                                onPress={() => {

                                  // this.setState({ screenchange: "menu" });
                                  // this.setState({ paymentSuccessfull: false });

                                  // this.setState({ loadMenus: true });

                                  // fetch(url + 'Mobile/AppStatusCheckPicUpDeliveryPreOrder?', {
                                  //   headers: {
                                  //     "Accept": "application/json",
                                  //     "ApiToken": "imnyUfpf"
                                  //   },
                                  // })
                                  //   .then((response) => response.json())
                                  //   .then((responseJson) => {
                                  //     if (responseJson.success == "1") {
                                  //       this.setState({ showdeliveryButton: responseJson.record.IsDelivery });
                                  //       this.setState({ showpickupButton: responseJson.record.IsPickUp });
                                  //       this.setState({ showPreorder: responseJson.record.IsPreOrder });

                                  //       this.setState({ showapiloader: false });

                                  //     } else {
                                  //       this.setState({ showapiloader: false });
                                  //     }
                                  //   })
                                  //   .catch((error) => {
                                  //     this.setState({ showapiloader: false });
                                  //     console.error(error);
                                  //   });

                                  // this.setState({ pickupButtonClick: false });
                                  // this.setState({ PreOrderdate: "" });
                                  // this.setState({ IsPreorder: "false" });
                                  // this.setState({ IsPreorderDeliveryOrPickup: "" });

                                  this.setState({ OrderTrack: true });

                                }} style={{ marginLeft: 10, marginTop: 0, marginRight: 10, marginBottom: 10, width: parseFloat(screenWidth) - 20, height: 40, backgroundColor: 'rgb(230, 118, 60)', borderRadius: 1, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '600', }}>TRACK YOUR ORDER</Text>

                              </TouchableOpacity>
                              :
                              null
                          }

                        </View>
                      </TouchableOpacity>
                      :
                      null
                  }

                  {
                    this.state.OrderTrack == true ?
                      <TouchableOpacity activeOpacity={1} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 1)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <WebView
                          source={{ uri: 'https://www.rashays.com/trackorder/?o=' + this.state.Encrypt_Order_Id }}
                          style={{ width: parseFloat(screenWidth), backgroundColor: '#fff', height: parseFloat(screenHeight) - 56, }}
                        />
                      </TouchableOpacity>
                      :
                      null
                  }

                  {
                    this.state.preorderpopup == true ?
                      <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <ImageBackground style={{ marginTop: 100, width: parseFloat(screenWidth) - 30, }} >
                          <View style={{ marginTop: 0, width: parseFloat(screenWidth) - 30, backgroundColor: '#fff', borderRadius: 15, }}>

                            <View style={{ height: 50, borderBottomWidth: 1, borderBottomColor: 'rgb(247,143,33)', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: 'rgb(247,143,33)' }}>
                              <Text style={{ fontSize: 18, color: '#fff', letterSpacing: 0.8 }}>PRE-ORDER ONLINE</Text>


                              <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ loadMenus: true }), this.setState({ oprnpreordertimepopup: false }), this.setState({ oprnpreordertime: false }), this.setState({ preorderpopup: false }), this.setState({ pickupButtonClick: false }) }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10, width: 35, height: 35, }}>
                                <Image source={require('./assets/closeicon.png')} style={{ width: 25, height: 25, }} />
                              </TouchableOpacity>

                            </View>

                            <View style={{ width: parseFloat(screenWidth) - 55, marginTop: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgb(247,143,33)' }}>
                              <DatePicker
                                style={{ width: parseFloat(screenWidth) - 55, }}
                                date={this.state.PreOrderdate}
                                mode="date"
                                placeholder="Select date"
                                format="DD-MM-YYYY"
                                minDate={Moment().add(1, 'day').format('DD-MM-YYYY')}
                                maxDate={Moment().add(7, 'day').format('DD-MM-YYYY')}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                  dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                  },
                                  dateInput: {
                                    marginLeft: 20,
                                    // alignItems: 'center',
                                  }

                                }}
                                onDateChange={(date) => {

                                  this.setState({ PreOrderdate: date });
                                  this.setState({ preordertime: '' });
                                  this.setState({ OrderTrenddingTimeValue: '' });
                                  this.setState({ oprnpreordertimeArrayList: [] });
                                  AsyncStorage.setItem("PreOrderdate", date.toString());
                                  this.Get_PreOrder_Store(date);
                                  // this.Get_PreOrderHours_from_api(Moment(date+" "+ Moment().format('hh:mm A'), "DD-MM-YYYY hh:mm A").format("YYYY-MM-DD hh:mm A"));
                                }}
                              />

                              <Image source={require('./assets/calendericon.png')} style={{ width: 20, height: 20, position: 'absolute', alignSelf: 'center', right: 15, top: 12 }} />

                            </View>

                            <View style={{ marginTop: 20, }}>
                              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

                                <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ pre_order_ordertype_selection: !this.state.pre_order_ordertype_selection }) }}
                                  style={{ flexDirection: 'row', alignItems: 'center', height: 45, width: parseFloat(screenWidth) - 55, borderRadius: 1, borderWidth: 1, borderColor: 'rgb(247,143,33)' }}>

                                  <Text style={{ marginLeft: 20, width: parseFloat(screenWidth) - 109, color: 'rgb(247,143,33)', fontSize: 15 }}>{this.state.IsPreorderDeliveryOrPickup == '' ? "Select Pick Up" : this.state.IsPreorderDeliveryOrPickup}</Text>

                                  <View style={[styles.triangle, { borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 8, borderRightWidth: 8, borderBottomWidth: 9, transform: [{ rotate: '180deg' }] }]} />

                                </TouchableOpacity>

                              </View>

                            </View>

                            <TouchableOpacity onPress={() => { this.setState({ oprnpreordertimepopup: !this.state.oprnpreordertimepopup }) }} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: parseFloat(screenWidth) - 55, borderRadius: 1, marginTop: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgb(247,143,33)' }}>

                              <Text style={{ marginLeft: 20, width: parseFloat(screenWidth) - 109, color: 'rgb(247,143,33)', fontSize: 15 }}>{this.state.preordertime == '' ? "Select Store" : this.state.preordertime}</Text>

                              <View style={[styles.triangle, { borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 8, borderRightWidth: 8, borderBottomWidth: 9, transform: [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.setState({ oprnpreordertime: !this.state.oprnpreordertime }) }} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: parseFloat(screenWidth) - 55, borderRadius: 1, marginTop: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgb(247,143,33)' }}>

                              <Text style={{ marginLeft: 20, width: parseFloat(screenWidth) - 109, color: 'rgb(247,143,33)', fontSize: 15 }}>{this.state.OrderTrenddingTimeValue == '' ? "Select Time" : this.state.OrderTrenddingTimeValue}</Text>

                              <View style={[styles.triangle, { borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 8, borderRightWidth: 8, borderBottomWidth: 9, transform: [{ rotate: '180deg' }] }]} />

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1}
                              style={{ width: parseFloat(screenWidth) / 2, alignSelf: 'center', backgroundColor: 'rgb(247,143,33)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 15, height: 45, borderRadius: 25, borderWidth: 1, borderColor: 'rgb(247,143,33)' }}
                              onPress={() => {
                                if (this.state.PreOrderdate == "") {
                                  this.setState({ Suggestion_notification: true });
                                  this.setState({ suggestion_message: 'DATE REQUIRED' });
                                  setTimeout(() => {
                                    this.setState({ Suggestion_notification: false });
                                  }, 2000);
                                }
                                else if (this.state.IsPreorderDeliveryOrPickup == "") {
                                  this.setState({ Suggestion_notification: true });
                                  this.setState({ suggestion_message: 'SELECT PICK UP' });
                                  setTimeout(() => {
                                    this.setState({ Suggestion_notification: false });
                                  }, 2000);
                                }
                                else if (this.state.preordertime == "") {
                                  this.setState({ Suggestion_notification: true });
                                  this.setState({ suggestion_message: 'STORE REQUIRED' });
                                  setTimeout(() => {
                                    this.setState({ Suggestion_notification: false });
                                  }, 2000);
                                }
                                else if (this.state.OrderTrenddingTimeValue == "") {
                                  this.setState({ Suggestion_notification: true });
                                  this.setState({ suggestion_message: 'TIME REQUIRED' });
                                  setTimeout(() => {
                                    this.setState({ Suggestion_notification: false });
                                  }, 2000);
                                }
                                else {

                                  AsyncStorage.getItem("SalesSummaryId").then((value) => {

                                    fetch(url + 'Mobile/AppUpdateDeliveryDateTime?OutletId=' + this.state.outletId + '&SalesSummaryId=' + value + '&DeliveryDate=' + Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("YYYY-MM-DD") + '&DeliveryTime=' + this.state.OrderTrenddingTimeValue, {
                                      headers: {
                                        "Accept": "application/json",
                                        "ApiToken": "imnyUfpf"
                                      }
                                    })
                                      .then((response) => response.json())
                                      .then((responseJson) => {
                                        //  console.log("UpdateDeliveryDateTime == ", responseJson)
                                        if (responseJson.success == "1") {

                                        }
                                        else {
                                          this.setState({ Suggestion_notification: true });
                                          this.setState({ suggestion_message: responseJson.message });
                                          setTimeout(() => {
                                            this.setState({ Suggestion_notification: false });
                                          }, 2000);
                                        }
                                      })
                                      .catch((error) => {
                                        console.error(error);
                                      });

                                  }).done();

                                  if (this.state.IsPreorderDeliveryOrPickup == "Pick Up") {
                                    this.setState({ preorderpopup: false });
                                    this.setState({ deliverytimepopup: false });
                                    // this.setState({ openoutlet: true });
                                    AsyncStorage.setItem("DeliveryStreet", "");
                                    AsyncStorage.setItem("DeliverySuburb", "");
                                    AsyncStorage.setItem("DeliveryState", "");
                                    AsyncStorage.setItem("DeliveryPostcode", "");
                                    AsyncStorage.setItem("DeliveryTime", "");
                                    AsyncStorage.setItem("DeliverystNo", "");
                                  }
                                  else if (this.state.IsPreorderDeliveryOrPickup == "Delivery") {
                                    this.setState({ preorderpopup: false });
                                    this.setState({ IsPreorder: "true" });
                                    this.setState({ pickupButtonClick: true });
                                    this.setState({ deliverytimepopup: true });
                                    this.setState({ deliveryAsap: true });
                                  }



                                }

                              }}
                            >
                              <Text style={{ fontSize: 18, color: '#fff', }}>CONTINUE</Text>

                            </TouchableOpacity>

                            {
                              this.state.pre_order_ordertype_selection == true ?
                                <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', position: 'absolute', top: 182, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                                  <View style={{ width: parseFloat(screenWidth) - 55, }}>

                                    <View style={[styles.triangle, { marginLeft: 20, borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 18, borderRightWidth: 18, borderBottomWidth: 18, }]} />

                                    <View style={{ marginTop: -2, width: parseFloat(screenWidth) - 55, backgroundColor: 'rgb(247,143,33)', borderRadius: 1, }}>
                                      <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ pre_order_ordertype_selection: false }), this.setState({ IsPreorderDeliveryOrPickup: "Pick Up" }) }}
                                        style={{ backgroundColor: 'rgb(247,143,33)', height: 45, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 20, fontWeight: '700' }}>Pick Up</Text>
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                                :
                                null
                            }

                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                      :
                      null
                  }

                  {
                    this.state.oprnpreordertime == true ?
                      this.state.oprnpreordertimeArrayList.length !== 0 ?
                        <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', position: 'absolute', top: 420, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                          <View style={{ width: parseFloat(screenWidth) - 55, marginBottom: 30 }}>

                            <View style={[styles.triangle, { marginLeft: 20, borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 18, borderRightWidth: 18, borderBottomWidth: 18, }]} />

                            <View style={{ marginTop: -2, marginBottom: 40, width: parseFloat(screenWidth) - 55, backgroundColor: 'rgb(247,143,33)', borderRadius: 1, }}>

                              <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.oprnpreordertimeArrayList}
                                renderItem={({ item, index }) =>
                                  <View style={{}}>

                                    <TouchableOpacity
                                      onPress={() => {
                                        this.setState({ OrderTrenddingTimeValue: item.HourValue }),
                                          this.setState({ oprnpreordertime: false })

                                        this.setState({ openoutlet: false });


                                      }}
                                      activeOpacity={1} style={{ height: 45, justifyContent: 'center' }}>

                                      <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 20, fontWeight: '800' }} >{item.HourValue}</Text>

                                    </TouchableOpacity>
                                    {
                                      index == parseInt(this.state.OutletArray.length) - 1 ?
                                        null :
                                        <View style={{ height: 0.5, backgroundColor: '#cccccc' }} />
                                    }

                                  </View>
                                }
                                keyExtractor={item => item.id}
                              />

                            </View>
                          </View>
                        </TouchableOpacity>
                        :
                        null
                      :
                      null
                  }

                  {
                    this.state.oprnpreordertimepopup == true ?
                      this.state.PreOrderStoreListAray.length !== 0 ?
                        <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', position: 'absolute', top: 350, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                          <View style={{ width: parseFloat(screenWidth) - 55, marginBottom: 30 }}>

                            <View style={[styles.triangle, { marginLeft: 20, borderBottomColor: 'rgb(247,143,33)', borderLeftWidth: 18, borderRightWidth: 18, borderBottomWidth: 18, }]} />

                            <View style={{ marginTop: -2, marginBottom: 40, width: parseFloat(screenWidth) - 55, backgroundColor: 'rgb(247,143,33)', borderRadius: 1, }}>

                              <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.PreOrderStoreListAray}
                                renderItem={({ item, index }) =>
                                  <View style={{}}>

                                    <TouchableOpacity
                                      onPress={() => {
                                        this.setState({ preordertime: item.OutletName });
                                        this.setState({ oprnpreordertimepopup: false });
                                        this.setState({ OrderTrenddingTimeValue: '' });

                                        this.setState({ openoutlet: false });
                                        AsyncStorage.setItem('OutletId', item.OutletId.toString());

                                        this.setState({ outletId: item.OutletId });
                                        this.setState({ headerOutletName: item.OutletName });
                                        this.setState({ outletName: item.OutletName });

                                        let address = item.Address1 + ", " + item.Suburb + ", " + item.State + ", " + (item.Country == "" ? "AUSTRALIA" : item.Country) + ".";

                                        AsyncStorage.setItem('OutletName', item.OutletName);
                                        AsyncStorage.setItem('OutletAddress', address.toString());

                                        this.Get_Menu_from_api(item.OutletId);

                                        AsyncStorage.getItem("SalesSummaryId").then((value) => {
                                          if (value != null) {
                                            fetch(url + 'Mobile/AppSaveSalesSummaryData?OutletId=' + item.OutletId + '&SalesSummaryId=' + value + '&IsPreOrder=true&PreOrderDate=' + Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("YYYY-MM-DD") + '&IsDeliveryOrPickup=PickUp', {
                                              headers: {
                                                "Accept": "application/json",
                                                "ApiToken": "imnyUfpf"
                                              }
                                            })
                                              .then((response) => response.json())
                                              .then((responseJson) => {
                                                // console.log(" store with salesId ", responseJson);
                                                if (responseJson.success == "1") {
                                                  this.setState({ oprnpreordertimeArrayList: responseJson.data })
                                                  AsyncStorage.setItem('SalesSummaryId', responseJson.record_id.toString());
                                                  this.setState({ ShowStartAgainButton: false });
                                                }
                                                else {
                                                  let d = [];
                                                  this.setState({ oprnpreordertimeArrayList: d });

                                                  this.setState({ Suggestion_notification: true });
                                                  this.setState({ suggestion_message: responseJson.message });
                                                  setTimeout(() => {
                                                    this.setState({ Suggestion_notification: false });
                                                  }, 2000);
                                                }
                                              })
                                              .catch((error) => {
                                                console.error(error);
                                              });
                                          }
                                          else {
                                            // console.log(url + 'Mobile/AppSaveSalesSummaryData?OutletId=' + item.OutletId + '&SalesSummaryId=0&IsPreOrder=true&PreOrderDate=' + Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("YYYY-MM-DD") + '&IsDeliveryOrPickup=PickUp');
                                            fetch(url + 'Mobile/AppSaveSalesSummaryData?OutletId=' + item.OutletId + '&SalesSummaryId=0&IsPreOrder=true&PreOrderDate=' + Moment(this.state.PreOrderdate, "DD-MM-YYYY").format("YYYY-MM-DD") + '&IsDeliveryOrPickup=PickUp', {
                                              headers: {
                                                "Accept": "application/json",
                                                "ApiToken": "imnyUfpf"
                                              }
                                            })
                                              .then((response) => response.json())
                                              .then((responseJson) => {
                                                // console.log(" store ", responseJson);
                                                if (responseJson.success == "1") {
                                                  this.setState({ oprnpreordertimeArrayList: responseJson.data })
                                                  AsyncStorage.setItem('SalesSummaryId', responseJson.record_id.toString());
                                                  this.setState({ ShowStartAgainButton: false });
                                                }
                                                else {
                                                  let d = [];
                                                  this.setState({ oprnpreordertimeArrayList: d });

                                                  this.setState({ Suggestion_notification: true });
                                                  this.setState({ suggestion_message: responseJson.message });
                                                  setTimeout(() => {
                                                    this.setState({ Suggestion_notification: false });
                                                  }, 2000);
                                                }
                                              })
                                              .catch((error) => {
                                                console.error(error);
                                              });
                                          }
                                        }).done();


                                        // this.Get_Menu_from_api(this.state.outletId);

                                      }}
                                      activeOpacity={1} style={{ height: 45, justifyContent: 'center' }}>

                                      <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 20, fontWeight: '800' }} >{item.OutletName}</Text>

                                    </TouchableOpacity>
                                    {
                                      index == parseInt(this.state.OutletArray.length) - 1 ?
                                        null :
                                        <View style={{ height: 0.5, backgroundColor: '#cccccc' }} />
                                    }

                                  </View>
                                }
                                keyExtractor={item => item.id}
                              />

                            </View>
                          </View>
                        </TouchableOpacity>
                        :
                        null
                      :
                      null
                  }

                  {
                    this.state.deliverytimepopup == true ?
                      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                        <View style={{ width: parseFloat(screenWidth) - 30, alignSelf: 'center', backgroundColor: 'white', borderRadius: 3 }}>
                          <View style={{ height: 45, backgroundColor: '#E9943F', width: parseFloat(screenWidth) - 30, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 3, borderTopRightRadius: 3, }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>DELIVERY ADDRESS</Text>

                            <TouchableOpacity activeOpacity={1}
                              onPress={() => {
                                this.setState({ getnearstore: true });
                                if (this.state.IsPreorder == "true") {
                                  this.setState({ deliverytimepopup: false });
                                  this.setState({ openoutlet: false });
                                  this.setState({ pickupButtonClick: true });
                                  this.setState({ preorderpopup: true });
                                  this.setState({ IsPreorder: "true" });
                                }
                                else {
                                  this.setState({ deliverytimepopup: false });
                                  this.setState({ pickupButtonClick: false });
                                  this.setState({ openoutlet: false });
                                }
                                if (this.state.time !== "") {
                                  clearInterval(this.myInterval);
                                  clearInterval(this.myIntervalDelivery);
                                }

                                this.setState({ selectdeliveryasap: true });

                                if (this.state.screenchange == "product") {
                                  this.setState({ screenchange: "menu" });
                                }

                                this.setState({ loadMenus: true });

                              }}
                              style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 8, width: 35, height: 35, }}>
                              {/* <Text style={{ marginLeft: 10, fontSize: 32, color: '#fff', transform: [{ rotate: '45deg' }] }}>+</Text> */}
                              <Image source={require('./assets/closeicon.png')} style={{ width: 25, height: 25, }} />
                            </TouchableOpacity>

                          </View>

                          {this.state.TwoButtonShowinDeliverypopup == true ?

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>

                              <TouchableOpacity activeOpacity={1}
                                onPress={() => {
                                  this.GetDeliveryasapInterwal();
                                  this.setState({ deliveryAsap: true }),
                                    this.setState({ selectdeliveryasap: false })
                                }}
                                style={{ backgroundColor: this.state.deliveryAsap == true ? '#f08e1f' : '#ccc', borderRadius: 1, height: 40, width: 90, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>ASAP</Text>
                              </TouchableOpacity>

                              <TouchableOpacity activeOpacity={1}
                                onPress={() => {
                                  clearInterval(this.myIntervalDelivery);
                                  this.setState({ deliveryAsap: false }),
                                    this.setState({ selectdeliveryasap: true })
                                }}
                                style={{ backgroundColor: this.state.deliveryAsap == false ? '#f08e1f' : '#ccc', marginLeft: 20, borderRadius: 1, height: 40, width: 145, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>CHOOSE TIME</Text>
                              </TouchableOpacity>

                            </View>
                            :
                            null
                          }

                          {this.state.deliveryAsap == false ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, alignItems: 'center', marginRight: 18, marginLeft: 18, }}>

                              <Text style={{ color: '#000', fontSize: 15 }}>DELIVERY TIME:</Text>

                              <View style={{ borderWidth: 1, width: parseFloat(screenWidth) - 240, borderColor: '#707070', borderRadius: 1, height: 40, marginLeft: 12, }}>

                                <Picker
                                  style={{ fontSize: 14, color: '#000', marginLeft: 5, height: 40 }}
                                  mode="dropdown"
                                  placeholder="Select Time"
                                  textStyle={{ fontSize: 14, }}
                                  selectedValue={this.state.DeliveryTimevalue}
                                  onValueChange={(itemValue) => { this.onValueChange_DeliveryTime(itemValue); }}>
                                  <Picker.Item label={"Select Time"} value={"Select Time"} />
                                  {this.state.IsPreorder == "true" ? this.state.TraddingHoursListArray.map((item, index) => {
                                    return (<Picker.Item label={item.HourValue} value={item.HourValue} />)
                                  })
                                    : this.state.DeliveryTrendingTimeArrayList.map((item, index) => {
                                      return (<Picker.Item label={item.HourValue} value={item.HourValue} />)
                                    })}
                                </Picker>

                              </View>

                            </View>
                            :
                            null
                          }

                          <View>

                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ searchboxclick: true }) }}
                              style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 40, marginRight: 14, marginLeft: 14, }}>

                              <Image style={{ height: 24, width: 24, marginLeft: 8 }} source={require('./assets/place_marker.png')} />

                              {/* <TextInput
                                style={{ fontSize: 14, color: '#000', width: parseFloat(screenWidth) - 105, fontWeight: 'normal', paddingLeft: 6 }}
                                placeholder="Search Address"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                editable={false}
                                placeholderTextColor="#000"
                              // defaultValue={this.state.deliverystno}
                              // onChangeText={(text) => { this.setState({ deliverystno: text }) }}
                              /> */}

                              <Text style={{ color: '#000', fontSize: 14, paddingLeft: 6, alignSelf: 'center' }} >Search Address</Text>

                            </TouchableOpacity>

                            <View style={{ marginTop: 12, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 40, marginRight: 14, marginLeft: 14, }}>

                              {/* <Image style={{ height: 24, width: 24, marginLeft: 8 }} source={require('./assets/appt_pin.png')} /> */}

                              <TextInput
                                style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                placeholder="Appt. No"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                editable={this.state.deliveryAsap}
                                placeholderTextColor="#000"
                                defaultValue={this.state.deliveryapptno}
                                onChangeText={(text) => { this.setState({ deliveryapptno: text }) }}
                                onSubmitEditing={(event) => {
                                  // this.refs.LastName.focus();
                                }}
                              />

                            </View>

                            <View style={{ marginTop: 12, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 40, marginRight: 14, marginLeft: 14, }}>

                              {/* <Image style={{ height: 24, width: 24, marginLeft: 8 }} source={require('./assets/place_marker.png')} /> */}

                              <TextInput
                                style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                placeholder="Street No*"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                editable={this.state.deliveryAsap}
                                placeholderTextColor="#000"
                                defaultValue={this.state.deliverystno}
                                onChangeText={(text) => { this.setState({ deliverystno: text }) }}
                                onSubmitEditing={(event) => {
                                  // this.refs.LastName.focus();
                                }}
                              />

                            </View>

                            <View style={{ marginTop: 12, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 40, marginRight: 14, marginLeft: 14, }}>

                              {/* <Image style={{ height: 24, width: 24, marginLeft: 8 }} source={require('./assets/place_marker.png')} /> */}

                              <TextInput
                                style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                placeholder="Street Address*"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                editable={this.state.deliveryAsap}
                                placeholderTextColor="#000"
                                defaultValue={this.state.deliveryStreet}
                                onChangeText={(text) => { this.setState({ deliveryStreet: text }) }}
                                onSubmitEditing={(event) => {
                                  // this.refs.LastName.focus();
                                }}
                              />

                            </View>

                            <View style={{ marginTop: 12, borderWidth: 1, borderColor: '#707070', borderRadius: 1, height: 40, marginRight: 14, marginLeft: 14, }}>

                              {/* <Image style={{ height: 20, width: 20, marginLeft: 10 }} source={require('./assets/city.png')} /> */}

                              <TextInput
                                style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                placeholder="Suburb*"
                                underlineColorAndroid='transparent'
                                keyboardType="email-address"
                                returnKeyType="next"
                                editable={this.state.deliveryAsap}
                                placeholderTextColor="#000"
                                defaultValue={this.state.deliveryarea}
                                onChangeText={(text) => { this.setState({ deliveryarea: text }) }}
                                onSubmitEditing={(event) => {
                                  // this.refs.LastName.focus();
                                }}
                              />

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12, marginRight: 18, marginLeft: 18, }}>

                              <View style={{ borderWidth: 1, borderColor: '#707070', width: (parseFloat(screenWidth) - 55) / 2.2, borderRadius: 1, height: 40, }}>

                                {/* <Image style={{ height: 24, width: 24, marginLeft: 8 , width: (parseFloat(screenWidth) - 55) / 3.1}}  source={require('./assets/place_marker.png')} /> */}

                                <TextInput
                                  style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                  placeholder="State"
                                  underlineColorAndroid='transparent'
                                  keyboardType="email-address"
                                  returnKeyType="next"
                                  editable={this.state.deliveryAsap}
                                  placeholderTextColor="#000"
                                  defaultValue={this.state.deliverystate}
                                  onChangeText={(text) => { this.setState({ deliverystate: text }) }}
                                  onSubmitEditing={(event) => {
                                    // this.refs.LastName.focus();
                                  }}
                                />

                              </View>

                              <View style={{ borderWidth: 1, borderColor: '#707070', marginLeft: 28, width: (parseFloat(screenWidth) - 55) / 2.2, borderRadius: 1, height: 40, }}>

                                {/* <Image style={{ height: 24, width: 24, marginLeft: 8 }} source={require('./assets/place_marker.png')} /> */}

                                <TextInput
                                  style={{ fontSize: 14, color: '#000', height: 40, fontWeight: 'normal', paddingLeft: 12 }}
                                  placeholder="Postcode*"
                                  underlineColorAndroid='transparent'
                                  keyboardType="numbers-and-punctuation"
                                  maxLength={4}
                                  editable={this.state.deliveryAsap}
                                  placeholderTextColor="#000"
                                  defaultValue={this.state.deliverypincode}
                                  onChangeText={(text) => { this.setState({ deliverypincode: text }) }}
                                />

                              </View>

                            </View>

                            {this.state.searchboxclick == true ?
                              <View keyboardShouldPersistTaps="handled" style={{ marginTop: 15, maxHeight: 200, paddingRight: 14, paddingLeft: 14, position: 'absolute', right: 0, left: 0 }}>
                                <GooglePlacesAutocomplete
                                  placeholder='Search Address'
                                  placeholderTextColor="#000"
                                  minLength={2} // minimum length of text to search
                                  autoFocus={false}
                                  editable={this.state.deliveryAsap}
                                  returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                                  keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                                  listViewDisplayed={this.state.deliveryAsap == true ? 'auto' : false}    // true/false/undefined
                                  fetchDetails={true}
                                  renderDescription={row => row.description} // custom description render
                                  components='country:AU'
                                  onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                    // console.log( details.address_components);

                                    for (var i = 0; i < details.address_components.length; i++) {
                                      var addressType = details.address_components[i].types[0];
                                      // if (componentForm[addressType]) {
                                      var val = details.address_components[i].long_name;

                                      if ("subpremise" == addressType) {
                                        this.setState({ deliveryapptno: val })
                                      }
                                      else if ("street_number" == addressType) {
                                        // scope.memberInfo.StreetNo = val;
                                        this.setState({ deliverystno: val })
                                      }
                                      else if ("route" == addressType) {
                                        // scope.memberInfo.Street = val;
                                        // console.log(val);
                                        this.setState({ deliveryStreet: val })
                                      }
                                      else if ("locality" == addressType) {
                                        this.setState({ deliveryarea: val })

                                      } else if ("administrative_area_level_1" == addressType) {
                                        // scope.memberInfo.State = val;
                                        this.setState({ deliverystate: val })
                                        // console.log( val);
                                      }
                                      else if ("postal_code" == addressType) {
                                        this.setState({ deliverypincode: val })
                                        // scope.memberInfo.PinCode = val;
                                      } else {
                                        // console.log( val );
                                        // $("." + addressType).val(val);
                                      }
                                      // }
                                    }

                                    this.setState({ searchboxclick: false })

                                  }}
                                  query={{
                                    // available options: https://developers.google.com/places/web-service/autocomplete
                                    // key: 'AIzaSyDk9a1fZu334tDdKiKVjUuwMsyxqfggvZw',
                                    key: 'AIzaSyAEkYGYJAOBE9NCykehz-RIYgZSOEghkIo',
                                    language: 'en-au', // language of the results
                                    types: 'address', // default: 'geocode'
                                    components: 'country:AU'
                                  }}
                                  styles={{
                                    textInputContainer: {
                                      width: '100%',
                                      height: 40,
                                      // width: parseFloat(screenWidth) - 105,
                                    },
                                    description: {
                                      fontWeight: 'bold'
                                    },
                                    predefinedPlacesDescription: {
                                      color: '#1faadb'
                                    }
                                  }}
                                  nearbyPlacesAPI='GooglePlacesSearch'
                                  GooglePlacesSearchQuery={{
                                    rankby: 'distance',
                                    type: 'street'
                                  }}
                                  // GooglePlacesDetailsQuery={{ fields: 'formatted_address' }}
                                  debounce={300}
                                  currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                                  renderLeftButton={() => <Image style={{ height: 24, width: 24, marginLeft: 8, marginTop: 7.8 }} source={require('./assets/place_marker.png')} />}
                                />
                              </View>
                              : null
                            }
                          </View>

                          <View style={{ marginBottom: 10, marginTop: 10, }}>

                            {/* <View style={{ width: (parseFloat(screenWidth) - 60) / 2, height: 45, }}>
                              {this.state.deliveryAsap == false ?
                                <TouchableOpacity activeOpacity={0.8} style={{ height: 45, width: 60, alignItems: 'center', justifyContent: 'center', }}>
                                   <Text style={{ fontWeight: '700', color: '#000', fontSize: 17 }}>BACK</Text> 
                                </TouchableOpacity>
                                :
                                null}
                            </View> */}

                            <View style={{ height: 40, marginRight: 14, marginLeft: 14, }}>
                              <TouchableOpacity activeOpacity={0.8} onPress={() => { this.state.deliveryAsap == false ? this.deliveryNext_button_clickOn() : this.state.selectdeliveryasap == false ? this.deliveryNext_button_clickOn() : this.Check_nearreststore() }}
                                style={{ height: 40, backgroundColor: '#F68E20', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: '700', color: '#fff', fontSize: 17 }}>NEXT</Text>
                              </TouchableOpacity>
                            </View>

                          </View>
                          {
                            this.state.getnearstore == false ?
                              <Text style={{ marginLeft: 20, marginBottom: 10, textAlign: 'center', marginRight: 20, fontSize: 13.3, color: '#000', }}>Sorry, delivery is currently unavailable for this address, please try another location or call 13000 13000.</Text>
                              :
                              null
                          }
                          {/* <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ deliverytimepopup: false }), this.setState({ openoutlet: true }) }} style={{ marginBottom: 15, backgroundColor: '#f08e1f', alignSelf: 'center', borderRadius: 1, height: 40, width: 120, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#000', fontWeight: '700', fontSize: 17, textAlign: 'center' }}>PICK UP</Text>
                  </TouchableOpacity> */}

                          {/* <TouchableOpacity activeOpacity={1}
                    onPress={() => {
                      this.setState({ getnearstore: true });
                      if (this.state.IsPreorder == "true") {
                        this.setState({ deliverytimepopup: false });
                        this.setState({ openoutlet: false });
                        this.setState({ pickupButtonClick: true });
                        this.setState({ preorderpopup: true });
                        this.setState({ IsPreorder: "true" });
                      }
                      else {
                        this.setState({ deliverytimepopup: false });
                        this.setState({ pickupButtonClick: false });
                        this.setState({ openoutlet: false });
                      }
                    }}
                    style={{ marginBottom: 15, backgroundColor: '#f08e1f', alignSelf: 'center', borderRadius: 1, height: 40, width: 120, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: '700', fontSize: 17, textAlign: 'center' }}>GO BACK</Text>
                  </TouchableOpacity> */}

                        </View>
                        {/* <Toast ref="deliverypopup" /> */}
                      </View>
                      :
                      null
                  }

                  {
                    this.state.pickupButtonClick == false ?
                      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0)', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>

                        <View style={{ backgroundColor: 'rgb(247,143,33)', borderRadius: 10, padding: 20, width: parseFloat(screenWidth) - 30 }}>

                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderBottomWidth: 1.5, paddingBottom: 8, borderBottomColor: '#fff' }}>

                            <Text style={{ color: '#fff', fontSize: 28, fontWeight: '600' }}>SELECT</Text>
                            <Text style={{ color: 'rgb(40, 40, 41)', fontSize: 28, marginLeft: 6, fontWeight: '600' }}>ONE</Text>

                          </View>

                          {this.state.showdeliveryButton == true ?

                            <TouchableOpacity activeOpacity={1}
                              onPress={() => {

                                this.setState({ headerOutletName: "Find A RASHAYS Near You" });
                                this.setState({ outletName: "" });

                                this.setState({ showtimer: false });
                                this.setState({ IsPreorder: "false" }),
                                  this.setState({ pickupButtonClick: true }),
                                  this.setState({
                                    deliverytimepopup: true,
                                    deliveryAsap: true,
                                    TwoButtonShowinDeliverypopup: false,
                                    editaddress: true
                                  })
                                this.setState({ OrderTrenddingTimeValue: "" });
                                AsyncStorage.setItem("IsPreorder", "false");
                                this.setState({ scanqr: "false" });
                                AsyncStorage.setItem('scanqr', "false");
                                AsyncStorage.setItem('DineInCustomerInformation', "");

                                AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
                                  if (MemberDeliveryAddress != null) {
                                    let responseJson = JSON.parse(MemberDeliveryAddress);

                                    this.setState({ deliverystno: responseJson.StreetNo });
                                    this.setState({ deliveryStreet: responseJson.StreetAddress });
                                    this.setState({ deliveryarea: responseJson.Suburb });
                                    this.setState({ deliverystate: responseJson.State });
                                    this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
                                    this.setState({ deliveryapptno: responseJson.ApptNo });

                                  } else {
                                    this.setState({ deliverystno: "" });
                                    this.setState({ deliveryStreet: "" });
                                    this.setState({ deliveryarea: "" });
                                    this.setState({ deliverystate: "" });
                                    this.setState({ deliverypincode: "" });
                                    this.setState({ deliveryapptno: "" });
                                  }

                                }).done();

                              }}
                              style={{ backgroundColor: '#fff', borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 20, padding: 5 }}>

                              <Text style={{ letterSpacing: 2, fontSize: 28, color: 'rgb(40,40,41)', fontWeight: '700', textAlign: 'center', marginTop: 10 }}>DELIVERY</Text>

                              <Text style={{ fontSize: 14, color: 'rgb(40,40,41)', textAlign: 'center', marginBottom: 10, marginTop: 2, }}>$ 10 DELIVERY FEE</Text>

                            </TouchableOpacity>
                            :
                            null}

                          {this.state.showdeliveryButton == true && this.state.showpickupButton == true ?
                            <Text style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(255,255,255)', fontWeight: '700', textAlign: 'center', marginTop: 6 }}>OR</Text>
                            :
                            null}

                          {this.state.showpickupButton == true ?
                            <TouchableOpacity activeOpacity={1}
                              onPress={() => {

                                this.setState({ headerOutletName: "Find A RASHAYS Near You" });
                                this.setState({ outletName: "" });

                                this.Get_pickup_Store();
                                // this.check_first_store(this.state.OutletArray[0]);
                                this.setState({ IsPreorder: "false" });
                                this.setState({ pickupButtonClick: true });
                                this.setState({ deliverytimepopup: false });
                                this.setState({ openoutlet: true });
                                AsyncStorage.setItem('scanqr', "false");
                                AsyncStorage.setItem("IsPreorder", "false");
                                this.setState({ scanqr: "false" });
                                AsyncStorage.setItem('DineInCustomerInformation', "");

                                AsyncStorage.setItem("DeliveryStreet", "");
                                AsyncStorage.setItem("DeliverySuburb", "");
                                AsyncStorage.setItem("DeliveryState", "");
                                AsyncStorage.setItem("DeliveryPostcode", "");
                                AsyncStorage.setItem("DeliveryTime", "");
                                AsyncStorage.setItem("DeliverystNo", "");
                                hideandshowDeliveryonColor = false;
                                this.setState({ OrderTrenddingTimeValue: "" });
                              }}
                              style={{ backgroundColor: '#fff', borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 6, padding: 5 }}>

                              <Text style={{ letterSpacing: 2, fontSize: 28, color: 'rgb(247,143,33)', fontWeight: '700', textAlign: 'center', marginTop: 10 }}>PICK UP</Text>

                              <Text style={{ fontSize: 14, color: 'rgb(40,40,41)', textAlign: 'center', marginBottom: 10, marginTop: 2, }}>10% DISCOUNT</Text>

                            </TouchableOpacity>
                            :
                            null}

                          {/* <Text style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(255,255,255)', fontWeight: '700', textAlign: 'center', marginTop: 6 }}>OR</Text>

                            <TouchableOpacity
                              onPress={() => {
                                this.setState({ showtimer: false });
                                this.setState({ IsPreorder: "false" });
                                AsyncStorage.setItem("IsPreorder", "false");
                                this.setState({ OrderTrenddingTimeValue: "" });

                                this.setState({ pickupButtonClick: true });
                                // this.setState({ openqrcode: true });
                                this.setState({ Bookingpopup: true });

                                AsyncStorage.setItem("DeliveryStreet", "");
                                AsyncStorage.setItem("DeliverySuburb", "");
                                AsyncStorage.setItem("DeliveryState", "");
                                AsyncStorage.setItem("DeliveryPostcode", "");
                                AsyncStorage.setItem("DeliveryTime", "");
                                AsyncStorage.setItem("DeliverystNo", "");
                                hideandshowDeliveryonColor = false;
                              }}
                              activeOpacity={1} style={{ backgroundColor: '#fff', borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 6 }}>

                              <Text style={{ letterSpacing: 2, fontSize: 28, color: 'rgb(221,58,89)', fontWeight: '700', textAlign: 'center', marginTop: 10 }}>DINE-IN</Text>

                              <Text style={{ fontSize: 12, color: 'rgb(40,40,41)', textAlign: 'center', marginBottom: 10, marginTop: 2, }}>FOR TABLE ORDERS</Text>

                            </TouchableOpacity> */}

                          {this.state.Offer_Order_Type != "Both" ?
                            this.state.showPreorder == true ?
                              <TouchableOpacity
                                onPress={() => {

                                  this.setState({ headerOutletName: "Find A RASHAYS Near You" });
                                  this.setState({ outletName: "" });

                                  this.setState({ PreOrderdate: "" });
                                  this.setState({ preordertime: '' });
                                  this.setState({ OrderTrenddingTimeValue: '' });
                                  this.setState({ oprnpreordertimeArrayList: [] });
                                  this.setState({ PreOrderStoreListAray: [] });

                                  this.setState({ showtimer: false });
                                  this.setState({ pickupButtonClick: true });
                                  this.setState({ preorderpopup: true });
                                  this.setState({ IsPreorder: "true" });
                                  this.setState({ OrderTrenddingTimeValue: "" });
                                  AsyncStorage.setItem('scanqr', "false");
                                  AsyncStorage.setItem('DineInCustomerInformation', "");
                                  this.setState({ scanqr: "false" });
                                  AsyncStorage.setItem("IsPreorder", "true");

                                  AsyncStorage.setItem("DeliveryStreet", "");
                                  AsyncStorage.setItem("DeliverySuburb", "");
                                  AsyncStorage.setItem("DeliveryState", "");
                                  AsyncStorage.setItem("DeliveryPostcode", "");
                                  AsyncStorage.setItem("DeliveryTime", "");
                                  AsyncStorage.setItem("DeliverystNo", "");
                                  hideandshowDeliveryonColor = false;

                                }}
                                activeOpacity={1} style={{ backgroundColor: '#fff', borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 25, padding: 5 }}>

                                <Text style={{ letterSpacing: 2, fontSize: 28, color: 'rgb(221,58,89)', fontWeight: '700', textAlign: 'center', marginTop: 10 }}>PRE-ORDER</Text>

                                <Text style={{ fontSize: 14, color: 'rgb(40,40,41)', textAlign: 'center', marginBottom: 10, marginTop: 2, }}>FOR FUTURE ORDERS</Text>

                              </TouchableOpacity>
                              :
                              null
                            :
                            null}

                          {this.state.Offer_Order_Type != "Both" ?
                            <TouchableOpacity
                              onPress={() => {
                                Linking.openURL("https://mealkits.rashays.com/").catch((err) => console.error('An error occurred', err));
                              }}
                              activeOpacity={1} style={{ backgroundColor: '#fff', borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 25, padding: 5 }}>

                              <Text style={{ letterSpacing: 2, fontSize: 28, color: 'rgb(40,40,41)', fontWeight: '700', textAlign: 'center', marginTop: 10 }}>MEAL KITS</Text>

                              <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 2, alignSelf: 'center' }} >

                                <Text style={{ fontSize: 14, color: 'rgb(40,40,41)', textAlign: 'center', }}>By </Text>
                                <Text style={{ fontSize: 14, color: '#E9943F', textAlign: 'center', }}>RASHAYS</Text>

                              </View>

                            </TouchableOpacity>
                            :
                            null}
                        </View>

                      </View>
                      :
                      null
                  }

                  {
                    this.state.PastOrderScreen == true ?
                      <View style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                        <View style={{ width: screenWidth, height: screenHeight, backgroundColor: 'white', marginBottom: 10 }}>

                          <View style={{ height: 50, width: screenWidth, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)' }}>

                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ PastOrderScreen: false }); }} style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 5, zIndex: 9999, }}>
                              <Image style={{ height: 20, width: 20, transform: [{ rotate: '-180deg' }] }} source={require('./assets/next.png')} />
                            </TouchableOpacity>

                            <Text style={{ letterSpacing: 1, fontSize: 18, color: '#fff', fontWeight: '600' }}>ORDER HISTORY</Text>

                          </View>

                          <FlatList
                            data={this.state.GetMemberOrderHistoryArrayList}
                            renderItem={({ item }) =>
                              item.IsDeliveryOrPickup == "PickUp" ?

                                <Card style={{ padding: 1, backgroundColor: 'rgb(247,143,33)', borderRadius: 5, marginTop: 10 }}>
                                  <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 5 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '700', paddingLeft: 10 }}>PICKUP</Text>
                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', position: 'absolute', right: 15 }}>{Moment(item.DeliveryDate).format("DD-MM-YYYY / hh:mm A")}</Text>
                                    </View>

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, }} />

                                    {item.OrderSummary.map((items, index) => {
                                      return (
                                        <View>
                                          <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                            <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center', backgroundColor: '' }}>

                                              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                                                <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{items.Quantity}</Text>
                                                <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                              </View>

                                            </View>

                                            <View style={{ width: parseFloat(screenWidth) - 146, backgroundColor: '', justifyContent: 'center' }}>
                                              <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>{items.ProductName}</Text>
                                            </View>

                                            <View style={{ width: 80, justifyContent: 'center', backgroundColor: '' }}>
                                              <Text style={{ fontSize: 15, textAlign: 'right', color: '#000', marginRight: 5, }}>${items.Price.toFixed(2)}</Text>
                                            </View>

                                          </View>

                                          {items.SalesModifierItems.map((itemss, index) => {
                                            return (
                                              <View style={{ flexDirection: 'row', marginTop: 3, }}>

                                                <View style={{ width: 50, justifyContent: 'center', backgroundColor: '' }}>
                                                </View>

                                                <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 146, backgroundColor: '', }}>
                                                  <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{itemss.Quantity}</Text>
                                                  <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                                  <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 6 }}>{itemss.ModifierName}</Text>
                                                </View>

                                                <View style={{ width: 80, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: '' }}>
                                                  <Text style={{ fontSize: 15, color: '#000', marginRight: 5, }}>${itemss.Price.toFixed(2)}</Text>
                                                </View>

                                              </View>
                                            )
                                          })}

                                        </View>

                                      )
                                    })}

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, marginBottom: 6 }} />

                                    {item.TakeAwayDiscount != 0 ?

                                      <View style={{ flexDirection: 'row', marginTop: 4, }}>

                                        <Text style={{ width: ((parseFloat(screenWidth) - 22) / 4) * 3, fontSize: 15, color: '#28a745', paddingLeft: 10 }}>10% TAKE AWAY DISCOUNT</Text>

                                        <Text style={{ width: (parseFloat(screenWidth) - 22) / 4, fontSize: 15, color: '#28a745', textAlign: 'right', paddingRight: 1 }}>${item.TakeAwayDiscount.toFixed(2)}</Text>

                                      </View>
                                      :
                                      null
                                    }

                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                      <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', paddingLeft: 10 }}>TOTAL</Text>
                                      <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', textAlign: 'right', paddingRight: 1 }}>${item.TotalAmount.toFixed(2)}</Text>

                                    </View>

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, marginBottom: 10 }} />

                                    <View style={{ flexDirection: 'row' }}>

                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', paddingLeft: 10 }}>PICKED UP FROM :-</Text>
                                      <Text style={{ fontSize: 14, color: '#000', paddingLeft: 10, }}>RASHAYS {item.OutletName}</Text>

                                    </View>

                                  </View>
                                </Card>
                                :
                                <Card style={{ padding: 1, backgroundColor: 'rgb(247,143,33)', borderRadius: 5, marginTop: 10 }}>
                                  <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', borderRadius: 5 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '700', paddingLeft: 10 }}>DELIVERY</Text>
                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', position: 'absolute', right: 15 }}>{Moment(item.DeliveryDate).format("DD-MM-YYYY / hh:mm A")}</Text>
                                    </View>

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, }} />

                                    {item.OrderSummary.map((items, index) => {
                                      return (
                                        <View>
                                          <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                            <View style={{ width: 50, flexDirection: 'row', justifyContent: 'center', backgroundColor: '' }}>

                                              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                                                <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{items.Quantity}</Text>
                                                <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                              </View>

                                            </View>

                                            <View style={{ width: parseFloat(screenWidth) - 146, backgroundColor: '', justifyContent: 'center' }}>
                                              <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 1 }}>{items.ProductName}</Text>
                                            </View>

                                            <View style={{ width: 80, justifyContent: 'center', backgroundColor: '' }}>
                                              <Text style={{ fontSize: 15, textAlign: 'right', color: '#000', marginRight: 5, }}>${items.Price.toFixed(2)}</Text>
                                            </View>

                                          </View>

                                          {items.SalesModifierItems.map((itemss, index) => {
                                            return (
                                              <View style={{ flexDirection: 'row', marginTop: 3, }}>

                                                <View style={{ width: 50, justifyContent: 'center', backgroundColor: '' }}>
                                                </View>

                                                <View style={{ flexDirection: 'row', width: parseFloat(screenWidth) - 146, backgroundColor: '', }}>
                                                  <Text style={{ fontSize: 15, color: '#000', marginLeft: 0 }}>{itemss.Quantity}</Text>
                                                  <Text style={{ fontSize: 15, color: '#000', marginLeft: 1 }}>x</Text>
                                                  <Text numberOfLines={1} style={{ fontSize: 14, color: '#000', marginLeft: 6 }}>{itemss.ModifierName}</Text>
                                                </View>

                                                <View style={{ width: 80, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: '' }}>
                                                  <Text style={{ fontSize: 15, color: '#000', marginRight: 5, }}>${itemss.Price.toFixed(2)}</Text>
                                                </View>

                                              </View>
                                            )
                                          })}

                                        </View>

                                      )
                                    })}

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, marginBottom: 6 }} />

                                    <View style={{ flexDirection: 'row', marginTop: 4, }}>

                                      <Text style={{ width: ((parseFloat(screenWidth) - 22) / 4) * 3, fontSize: 15, color: '#000', paddingLeft: 10 }}>DELIVERY FEE</Text>

                                      <Text style={{ width: (parseFloat(screenWidth) - 22) / 4, fontSize: 15, color: '#000', textAlign: 'right', paddingRight: 1 }}>${item.DeliveryFees.toFixed(2)}</Text>

                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                      <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', paddingLeft: 10 }}>TOTAL</Text>
                                      <Text style={{ width: (parseFloat(screenWidth) - 22) / 2, fontSize: 20, color: 'rgb(230, 118, 60)', textAlign: 'right', paddingRight: 1 }}>${item.TotalAmount.toFixed(2)}</Text>

                                    </View>

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, marginBottom: 10 }} />

                                    <View style={{ flexDirection: 'row' }}>

                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', paddingLeft: 10 }}>DELIVERED FROM :-</Text>
                                      <Text style={{ fontSize: 14, color: '#000', paddingLeft: 10, }}>RASHAYS {item.OutletName}</Text>

                                    </View>

                                    <View style={{ height: 1, alignSelf: 'center', width: parseFloat(screenWidth) - 22, backgroundColor: '#F1F1F1', marginTop: 10, marginBottom: 10 }} />

                                    <View style={{}}>

                                      <Text style={{ fontSize: 15, color: '#000', fontWeight: '600', paddingLeft: 10 }}>DELIVERY ADDRESS :-</Text>
                                      <Text style={{ fontSize: 14, color: '#000', paddingLeft: 10, marginTop: 5 }}>{item.Address}</Text>

                                    </View>

                                  </View>
                                </Card>

                            }
                            keyExtractor={(item, index) => index}
                          />

                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.MemberCardScreen == true ?
                      <View style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                        <View style={{ zIndex: 9999, width: screenWidth, height: screenHeight, backgroundColor: 'white' }}>

                          <View style={{ zIndex: 9999, height: 50, width: screenWidth, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(40, 40, 41)' }}>

                            <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ MemberCardScreen: false }) }} style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 5, zIndex: 9999, }}>
                              <Image style={{ height: 20, width: 20, transform: [{ rotate: '-180deg' }] }} source={require('./assets/next.png')} />
                            </TouchableOpacity>

                            <Text style={{ letterSpacing: 1, fontSize: 18, color: '#fff', fontWeight: '600' }}>MEMBER CARDS</Text>

                          </View>

                          <FlatList
                            data={this.state.GetMemberCardArrayList}
                            renderItem={({ item }) =>

                              <Card style={{ zIndex: 9999, padding: 1.2, borderRadius: 10, backgroundColor: 'rgb(247,143,33)', elevation: 5, marginLeft: 6, marginRight: 6, marginTop: 12, }}>

                                <View style={{ borderRadius: 10, backgroundColor: 'rgb(40, 40, 41)', paddingTop: 17, paddingBottom: 17, }}>

                                  <Image style={{ height: 60, marginLeft: 20, width: ((parseFloat(screenWidth) - 12) / 10) * 5, resizeMode: 'stretch' }} source={require('./assets/logo_card.png')} />

                                  <Text style={{ letterSpacing: 0.5, fontWeight: '700', paddingLeft: 20, color: '#fff', marginTop: 15, fontSize: 22 }}>{item.MemberName}</Text>

                                  <View style={{ flexDirection: 'row', backgroundColor: '', height: 50, marginTop: 10, width: parseFloat(screenWidth) - 20 }}>

                                    <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 12) / 10) * 6 }}>
                                      <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                                        <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Points</Text>
                                        <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.Points}</Text>
                                      </View>
                                    </View>

                                    <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 12) / 10) * 4 }}>
                                      <View style={{}}>
                                        <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Expiry</Text>
                                        <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{Moment(item.ExpiryDate).format("DD/MM/YYYY")}</Text>
                                      </View>
                                    </View>

                                  </View>

                                  <View style={{ flexDirection: 'row', backgroundColor: '', height: 50, marginTop: 10, width: parseFloat(screenWidth) - 20 }}>

                                    <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 12) / 10) * 6 }}>
                                      <View style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                                        <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Member Card No.</Text>
                                        <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.MemberCardId}</Text>
                                      </View>
                                    </View>

                                    <View style={{ justifyContent: 'center', height: 50, width: ((parseFloat(screenWidth) - 12) / 10) * 4 }}>
                                      <View style={{}}>
                                        <Text style={{ letterSpacing: 0.5, color: '#fff', fontSize: 15 }}>Status</Text>
                                        <Text style={{ letterSpacing: 0.5, fontWeight: '700', color: '#fff', fontSize: 17 }}>{item.Active == true ? "Active" : "InActive"}</Text>
                                      </View>
                                    </View>

                                  </View>

                                </View>

                              </Card>

                            }
                            keyExtractor={(item, index) => index}
                          />

                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    this.state.Bookingpopup == true ?
                      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>

                        <Image resizeMode="stretch" style={{ marginTop: - 50, height: (parseFloat(screenHeight) - 56) / 1.7, width: screenWidth }} source={require('./assets/backgroundbooking.webp')} />


                        <ImageBackground resizeMode="stretch" style={{ height: parseFloat(screenHeight) / 1.74, width: screenWidth, zIndex: 9999, position: 'absolute', bottom: 0, }} source={require('./assets/background_circle.png')} >

                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this.Get_Store_For_Bookingform();
                              // this.setState({ Bookingpopup: false });
                              this.setState({ BookTable: true });
                            }}
                            style={{ width: parseFloat(screenWidth) - 80, height: 60, alignSelf: 'center', marginTop: parseFloat(screenHeight) / 7.4 }}>

                            <ImageBackground resizeMode="stretch" style={{ width: parseFloat(screenWidth) - 80, justifyContent: 'center', alignItems: 'center', height: 60 }} source={require('./assets/buttonbooking.png')} >
                              <Text style={{ alignSelf: 'center', color: 'rgb(0, 0, 0)', fontSize: parseFloat(screenWidth) / 23 }}>MAKE A BOOKING</Text>
                            </ImageBackground>

                          </TouchableOpacity>

                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this.setState({ Bookingpopup: false });
                              this.setState({ openqrcode: true });
                              this.setState({ ParkingToPickup: 'false' });
                              AsyncStorage.setItem("ParkingToPickup", "");
                              AsyncStorage.setItem('Slotnumber', "");
                            }}
                            style={{ width: parseFloat(screenWidth) - 80, height: 60, alignSelf: 'center', marginTop: (parseFloat(screenHeight) - 56) / 20 }}>

                            <ImageBackground resizeMode="stretch" style={{ width: parseFloat(screenWidth) - 80, justifyContent: 'center', alignItems: 'center', height: 60 }} source={require('./assets/buttonbooking.png')} >
                              <Text style={{ alignSelf: 'center', color: 'rgb(0, 0, 0)', fontSize: parseFloat(screenWidth) / 23 }}>BOOKING AT TABLE QR CODE</Text>
                            </ImageBackground>

                          </TouchableOpacity>

                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this.setState({ Bookingpopup: false });
                              this.setState({ openqrcode: true });
                            }}
                            style={{ width: parseFloat(screenWidth) - 80, height: 60, alignSelf: 'center', marginTop: (parseFloat(screenHeight) - 56) / 20 }}>

                            <ImageBackground resizeMode="stretch" style={{ width: parseFloat(screenWidth) - 80, justifyContent: 'center', alignItems: 'center', height: 60 }} source={require('./assets/buttonbooking.png')} >
                              <Text style={{ alignSelf: 'center', color: 'rgb(0, 0, 0)', fontSize: parseFloat(screenWidth) / 23 }}>BOOKING AT PARKING SLOT</Text>
                            </ImageBackground>

                          </TouchableOpacity>

                        </ImageBackground>

                      </View>
                      :
                      null
                  }

                </View>
                :
                null
            }

            {
              this.state.LoginScreen == true ?
                <View style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, backgroundColor: 'transparent' }}>
                  <View style={{ width: screenWidth, height: parseFloat(screenHeight) - 56, backgroundColor: '#fff' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: (parseFloat(screenHeight) / 22), }}>
                      <Text style={{ color: 'rgb(40, 40, 41)', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>Sign in</Text>
                    </View>

                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgb(40, 40, 41)', marginTop: (parseFloat(screenHeight) / 16), backgroundColor: '', borderRadius: 1, height: 45, marginRight: 30, marginLeft: 30, }}>

                      {/* <Image style={{ height: 25, width: 28, marginLeft: 5 }} source={require('./assets/login_email.png')} /> */}

                      <TextInput
                        style={{ fontSize: 16, color: 'rgb(40, 40, 41)', backgroundColor: '', height: 45, fontWeight: 'normal', }}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholderTextColor="rgb(40, 40, 41)"
                        // defaultValue={Person_FirstName}
                        onChangeText={(text) => { this.setState({ MemberEmail: text }) }}
                        onSubmitEditing={(event) => {
                          this.Password.focus();
                        }}
                      />

                    </View>

                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgb(40, 40, 41)', marginTop: 25, backgroundColor: '', borderRadius: 1, height: 45, marginRight: 30, marginLeft: 30, }}>

                      {/* <Image style={{ height: 25, width: 25, marginLeft: 5 }} source={require('./assets/key.png')} /> */}

                      <TextInput
                        ref={input => { this.Password = input }}
                        // ref='Password'
                        style={{ fontSize: 16, color: 'rgb(40, 40, 41)', backgroundColor: '', height: 45, fontWeight: 'normal', }}
                        placeholder="Password"
                        // underlineColorAndroid='transparent'
                        // keyboardType="email-address"
                        returnKeyType="done"
                        secureTextEntry={true}
                        placeholderTextColor="rgb(40, 40, 41)"
                        onChangeText={(text) => { this.setState({ MemberPassword: text }) }}
                      />

                    </View>

                    <View style={{ paddingTop: 7, paddingBottom: 5, marginLeft: 31, }}>
                      <Text onPress={() => { Linking.openURL("https://members.rashays.com/").catch((err) => console.error('An error occurred', err)); }} style={{ color: 'rgb(247,143,33)', alignSelf: 'flex-start', borderBottomWidth: 0.5, borderBottomColor: 'rgb(247,143,33)', fontSize: 14, letterSpacing: 1, fontWeight: '600', }}>Forgot your password?</Text>
                    </View>

                    <Card style={{ marginRight: 30, marginLeft: 30, borderRadius: 5, marginTop: 20, height: 50, backgroundColor: 'rgb(247,143,33)' }}>
                      <TouchableOpacity activeOpacity={1} onPress={() => { this.Member_Login_Api_call() }} style={{ borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: 50, }}>
                        <Text style={{ color: '#fff', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>Sign in</Text>
                      </TouchableOpacity>
                    </Card>

                    <View style={{ backgroundColor: 'rgba(247,143,33, 0.5)', height: 0.4, marginLeft: 17, marginRight: 17, marginTop: 20, }} />

                    <Card style={{ marginRight: 30, marginLeft: 30, borderRadius: 5, marginTop: 20, height: 50, backgroundColor: 'rgb(247,143,33)' }}>
                      <TouchableOpacity activeOpacity={1}
                        onPress={() => {
                          Linking.openURL("https://members.rashays.com/rewards-order/").catch((err) => console.error('An error occurred', err));
                        }}
                        style={{ borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: 50, }}>
                        <Text style={{ color: '#fff', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>Create an account</Text>
                      </TouchableOpacity>
                    </Card>

                    {/* <View style={{ marginRight: 30, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: (parseFloat(screenHeight) / 16), }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => { }} style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgb(247,143,33)', marginBottom: 2 }}>
                      <Text style={{ color: 'rgb(247,143,33)', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>SKIP AS GUEST</Text>
                    </TouchableOpacity>
                  </View> */}

                    {/* <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', marginTop: (parseFloat(screenHeight) / 14), justifyContent: 'center' }}>
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ LoginScreen: false }); }} style={{ position: 'absolute', left: 10, zIndex: 9999, padding: 5 }}>
                    <Image style={{ height: 20, width: 20 }} source={require('./assets/back_login.png')} />
                  </TouchableOpacity>
                  <Image style={{ height: 42, width: 240, resizeMode: 'stretch', alignSelf: 'center', }} source={require('./assets/rasahys_logo.png')} />
                </View> */}

                    {/* <View style={{ marginTop: parseFloat(screenHeight) / 3, borderTopLeftRadius: 50, borderTopRightRadius: 50, width: screenWidth, height: (parseFloat(screenHeight) / 3) * 2, backgroundColor: '#EFEFF4' }}>

                    </View> */}

                    {/* <Card style={{ borderRadius: 10, elevation: 2, left: 15, right: 15, width: parseFloat(screenWidth) - 30, height: (parseFloat(screenHeight) / 5) * 3.5, position: 'absolute', top: parseFloat(screenHeight) / 10, zIndex: 9999 }}>

                      <View style={{ width: parseFloat(screenWidth) - 30, marginTop: (parseFloat(screenHeight) / 22), }}>
                        <Text style={{ color: 'rgb(40, 40, 41)', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>Login</Text>
                      </View>

                      <View style={{ width: parseFloat(screenWidth) - 30, marginTop: (parseFloat(screenHeight) / 16), }}>

                        <View style={{ flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: 'rgb(40, 40, 41)', alignItems: 'center', marginTop: 15, backgroundColor: '', borderRadius: 1, height: 45, marginRight: 24, marginLeft: 24, }}>

                          <Image style={{ height: 25, width: 28, marginLeft: 5 }} source={require('./assets/login_email.png')} />

                          <TextInput
                            style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 117, backgroundColor: '', fontWeight: 'normal', marginLeft: 5 }}
                            placeholder="Email*"
                            underlineColorAndroid='transparent'
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholderTextColor="rgb(40, 40, 41)"
                            // defaultValue={Person_FirstName}
                            onChangeText={(text) => { this.setState({ MemberEmail: text }) }}
                            onSubmitEditing={(event) => {
                              this.Password.focus();
                            }}
                          />

                        </View>

                        <View style={{ flexDirection: 'row', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: 'rgb(40, 40, 41)', alignItems: 'center', marginTop: 25, backgroundColor: '', borderRadius: 1, height: 45, marginRight: 24, marginLeft: 24, }}>

                          <Image style={{ height: 25, width: 25, marginLeft: 5 }} source={require('./assets/key.png')} />

                          <TextInput
                            ref={input => { this.Password = input }}
                            // ref='Password'
                            style={{ fontSize: 16, color: 'rgb(40, 40, 41)', width: parseFloat(screenWidth) - 117, backgroundColor: '', fontWeight: 'normal', marginLeft: 8 }}
                            placeholder="Password*"
                            underlineColorAndroid='transparent'
                            keyboardType="email-address"
                            returnKeyType="done"
                            secureTextEntry={true}
                            placeholderTextColor="rgb(40, 40, 41)"
                            onChangeText={(text) => { this.setState({ MemberPassword: text }) }}
                          />

                        </View>

                      </View>

                      <Card style={{ marginRight: 22, marginLeft: 22, marginTop: (parseFloat(screenHeight) / 16), height: 45, backgroundColor: 'rgb(247,143,33)' }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.Member_Login_Api_call() }} style={{ justifyContent: 'center', alignItems: 'center', height: 45, }}>
                          <Text style={{ color: '#fff', fontSize: 20, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>LOGIN</Text>
                        </TouchableOpacity>
                      </Card>

                      <View style={{ marginRight: 22, marginLeft: 22, marginTop: (parseFloat(screenHeight) / 40), }}>

                        <View style={{ height: 0.7, backgroundColor: '#ccc' }} />

                        <Text style={{ paddingLeft: 7, color: 'rgb(40, 40, 41)', letterSpacing: 0.5, paddingRight: 7, backgroundColor: 'white', top: -8, zIndex: 9999, alignSelf: 'center', position: 'absolute' }}>OR</Text>

                      </View>

                      <View style={{ marginRight: 22, marginLeft: 22, marginTop: (parseFloat(screenHeight) / 40), height: 45, backgroundColor: '' }}>
                        <TouchableOpacity activeOpacity={1}
                          onPress={() => {
                            Linking.openURL("https://members.rashays.com/?utm_source=OrdersApp&utm_medium=AppSignup&utm_campaign=OrdersApp").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ justifyContent: 'center', alignItems: 'center', height: 45, }}>
                          <Text style={{ color: 'rgb(247,143,33)', fontSize: 18, letterSpacing: 1, fontWeight: '600', textAlign: 'center' }}>Go to RASHAYS Member Site</Text>
                        </TouchableOpacity>
                      </View>

                    </Card> */}

                  </View>
                </View>
                :
                null
            }

            {
              this.state.OnlineOrder == true ?
                null
                :
                this.state.MyOfferScreen == true ?
                  null
                  :
                  this.state.LoginScreen == true ?
                    null
                    :
                    this.state.LoginMember == "" ?
                      <TouchableOpacity onPress={() => { this.setState({ JoinNowscreen: false }), this.setState({ LoginScreen: true }) }} activeOpacity={1} style={{ height: 60, flexDirection: 'row', backgroundColor: 'rgb(247,143,33)', justifyContent: 'center', alignItems: 'center', shadowColor: "#000000", shadowOffset: { width: 0, height: -3, }, shadowOpacity: 0.58, shadowRadius: 16, elevation: 10, position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: 9999 }}>

                        <Text style={{ letterSpacing: 0.8, fontSize: 20, alignSelf: 'center', color: '#fff' }}>SIGN IN</Text>

                      </TouchableOpacity>
                      :
                      <View style={{ height: 60, flexDirection: 'row', backgroundColor: '#FFF', alignItems: 'center', shadowColor: "#000000", shadowOffset: { width: 0, height: -3, }, shadowOpacity: 0.58, shadowRadius: 16, elevation: 10, position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: 9999 }}>

                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ Dashboard: true });
                            this.setState({ Profile: false });
                            this.setState({ LoginScreen: false });
                            this.setState({ Memberscreen: false });
                            this.setState({ BookTable: false });
                          }}
                          activeOpacity={1} style={{ width: (parseFloat(screenWidth) / 5) * 0.9, height: 50, justifyContent: 'center', alignItems: 'center' }}>

                          <Image
                            style={{
                              height: 45,
                              width: 45,
                              resizeMode: 'stretch'
                            }}
                            source={this.state.Dashboard == true ? require('./assets/home_select.png') : require('./assets/home.png')}
                          />

                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ MemberpointsandorderhistoryArrayList: this.state.MemberpointsandorderhistoryArrayList.length = 0 });
                            this.setState({ pageno: 0 });
                            this.GetMemberCard_from_api();
                            this.GetMemberPointswithhistory(0);
                            this.GetMemberpointsforredeem();

                            this.setState({ Memberscreen: true });
                            this.setState({ Dashboard: false });
                            this.setState({ Profile: false });
                            this.setState({ LoginScreen: false });
                            this.setState({ BookTable: false });
                          }}
                          activeOpacity={1} style={{ width: (parseFloat(screenWidth) / 5) * 0.9, height: 50, justifyContent: 'center', alignItems: 'center' }}>

                          <Image
                            style={{
                              height: 45,
                              width: 45,
                              resizeMode: 'stretch'
                            }}
                            source={this.state.Memberscreen == true ? require('./assets/reward_select.png') : require('./assets/reward.png')}
                          />

                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            if (this.state.Offer_Order_Type == "PickUp") {
                              this.Get_pickup_Store();
                              // this.check_first_store(this.state.OutletArray[0]);
                              this.setState({ ShowStartAgainButton: true });

                              this.setState({ IsPreorder: "false" });
                              this.setState({ pickupButtonClick: true });
                              this.setState({ deliverytimepopup: false });
                              this.setState({ openoutlet: true });
                              AsyncStorage.setItem('scanqr', "false");
                              AsyncStorage.setItem("IsPreorder", "false");
                              this.setState({ scanqr: "false" });
                              AsyncStorage.setItem('DineInCustomerInformation', "");

                              AsyncStorage.setItem("DeliveryStreet", "");
                              AsyncStorage.setItem("DeliverySuburb", "");
                              AsyncStorage.setItem("DeliveryState", "");
                              AsyncStorage.setItem("DeliveryPostcode", "");
                              AsyncStorage.setItem("DeliveryTime", "");
                              AsyncStorage.setItem("DeliverystNo", "");
                              hideandshowDeliveryonColor = false;
                              this.setState({ OrderTrenddingTimeValue: "" });

                            }
                            else if (this.state.Offer_Order_Type == "Delivery") {
                              this.setState({ ShowStartAgainButton: true });

                              this.setState({ showtimer: false });
                              this.setState({ IsPreorder: "false" }),
                                this.setState({ pickupButtonClick: true }),
                                this.setState({
                                  deliverytimepopup: true,
                                  deliveryAsap: true,
                                  TwoButtonShowinDeliverypopup: false,
                                  // editaddress: true
                                })
                              this.setState({ OrderTrenddingTimeValue: "" });
                              AsyncStorage.setItem("IsPreorder", "false");
                              this.setState({ scanqr: "false" });
                              AsyncStorage.setItem('scanqr', "false");
                              AsyncStorage.setItem('DineInCustomerInformation', "");

                              AsyncStorage.getItem("MemberDeliveryAddress").then((MemberDeliveryAddress) => {
                                if (MemberDeliveryAddress != null) {
                                  let responseJson = JSON.parse(MemberDeliveryAddress);

                                  this.setState({ deliverystno: responseJson.StreetNo });
                                  this.setState({ deliveryStreet: responseJson.StreetAddress });
                                  this.setState({ deliveryarea: responseJson.Suburb });
                                  this.setState({ deliverystate: responseJson.State });
                                  this.setState({ deliverypincode: responseJson.PostCode != null ? responseJson.PostCode.toString() : '' });
                                  this.setState({ deliveryapptno: responseJson.ApptNo });

                                } else {
                                  this.setState({ deliverystno: "" });
                                  this.setState({ deliveryStreet: "" });
                                  this.setState({ deliveryarea: "" });
                                  this.setState({ deliverystate: "" });
                                  this.setState({ deliverypincode: "" });
                                  this.setState({ deliveryapptno: "" });
                                }

                              }).done();

                            }
                            else {
                              // this.check_first_store(this.state.OutletArray[0]);
                            }
                            this.setState({ OnlineOrder: true })
                          }}
                          activeOpacity={1} style={{ width: (parseFloat(screenWidth) / 5) * 1.4, height: 50, justifyContent: 'center', alignItems: 'center' }}>

                          <Image
                            style={{
                              height: 45,
                              width: 85,
                              resizeMode: 'stretch'
                            }}
                            source={require('./assets/order.png')}
                          />

                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {

                            BookingStoreId = "0";
                            this.setState({ BookingDate: "" });
                            this.setState({ Bookingfname: "" });
                            this.setState({ Bookinglname: "" });
                            this.setState({ Bookingemail: "" });
                            this.setState({ Bookingphone: "" });
                            this.setState({ Bookingnote: "" });
                            this.setState({ tableId: '' });
                            BookingpeopleId = 0;
                            BookingHourFrom = '0';
                            BookingHourTo = "";

                            this.Get_Store_For_Bookingform();
                            this.setState({ BookTable: true });
                            this.setState({ Dashboard: false });
                            this.setState({ Profile: false });
                            this.setState({ LoginScreen: false });
                            this.setState({ Memberscreen: false });
                          }}
                          activeOpacity={1} style={{ width: (parseFloat(screenWidth) / 5) * 0.9, height: 50, justifyContent: 'center', alignItems: 'center' }}>

                          <Image
                            style={{
                              height: 45,
                              width: 45,
                              resizeMode: 'stretch'
                            }}
                            source={this.state.BookTable == true ? require('./assets/booking_select.png') : require('./assets/booking.png')}
                          />

                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            this.Get_Profile_api();
                            this.setState({ Profile: true });
                            this.setState({ Dashboard: false });
                            this.setState({ LoginScreen: false });
                            this.setState({ Memberscreen: false });
                            this.setState({ BookTable: false });
                          }}
                          activeOpacity={1} style={{ width: (parseFloat(screenWidth) / 5) * 0.9, height: 50, justifyContent: 'center', alignItems: 'center' }}>

                          <Image
                            style={{
                              height: 45,
                              width: 45,
                              resizeMode: 'stretch'
                            }}
                            source={this.state.Profile == true ? require('./assets/profile_select.png') : require('./assets/profile.png')}
                          />

                        </TouchableOpacity>

                      </View>
            }

            {
              this.state.drawer == true ?
                <TouchableOpacity onPress={() => this._close()} activeOpacity={1} style={{ position: 'absolute', right: 0, left: 0, top: DeviceInfo.getModel() == "iPhone X" ? 86 : DeviceInfo.getModel() == "iPhone XS" ? 86 : DeviceInfo.getModel() == "iPhone XS Max" ? 86 : DeviceInfo.getModel() == "iPhone XR" ? 86 : DeviceInfo.getModel() == "iPhone 11" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro" ? 86 : DeviceInfo.getModel() == "iPhone 11 Pro Max" ? 86 : 56, bottom: 0, zIndex: 9999, elevation: 10, backgroundColor: 'transparent' }}>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          translateX: this.state.SlideInLeft.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-600, 0]
                          })
                        }
                      ],
                      height: parseFloat(screenHeight) - 56,
                      width: parseFloat(screenWidth),
                      backgroundColor: "rgb(40, 40, 41)",
                      // justifyContent: "center"
                    }}
                  >
                    <ImageBackground // source={require('./assets/splash.png')} 
                      style={{ flex: 1, zIndex: 9999, }}>

                      <TouchableOpacity activeOpacity={1} onPress={() => { }} style={{ flex: 1, zIndex: 9999, }}>

                        <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginLeft: 2, marginRight: 2 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            Linking.openURL("https://members.rashays.com/").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ height: 40, marginTop: 18, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                          <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>My Account</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, alignSelf: 'center', backgroundColor: 'rgba(84, 81, 80, 0.8)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            Linking.openURL("https://www.rashays.com/faqs/").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                          <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>FAQs</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, alignSelf: 'center', backgroundColor: 'rgba(84, 81, 80, 0.8)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            Linking.openURL("https://www.rashays.com/privacy-policy/").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                          <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>Privacy Policy</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, alignSelf: 'center', backgroundColor: 'rgba(84, 81, 80, 0.8)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            Linking.openURL("https://www.rashays.com/delivery-policy/").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                          <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>Delivery Policy</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, alignSelf: 'center', backgroundColor: 'rgba(84, 81, 80, 0.8)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            Linking.openURL("https://www.rashays.com/general-enquiries/").catch((err) => console.error('An error occurred', err));
                          }}
                          style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                          <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>Contact Us</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, alignSelf: 'center', backgroundColor: 'rgba(84, 81, 80, 0.8)', width: parseFloat(screenWidth) / 1.24 }} />

                        {this.state.LoginMember == "" ?
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this._close();
                              setTimeout(() => {
                                this.setState({ LoginScreen: true });
                              }, 100);
                            }}
                            style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                            <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>Login</Text>

                          </TouchableOpacity>
                          :
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              AsyncStorage.setItem('LOGIN', "");
                              AsyncStorage.setItem('MemberId', "");
                              // AsyncStorage.setItem('MemberDetails', "");
                              // AsyncStorage.setItem('MemberDeliveryAddress', "");
                              AsyncStorage.setItem('MemberName', "");
                              Person_cardno = "";
                              this.setState({
                                getmemberdetail: false,
                                getdata: false,
                              });
                              this.setState({ LoginMember: "" });
                              this.setState({ Dashboard: true });
                              this.setState({ BookTable: false });
                              this.setState({ Profile: false });
                              // this.setState({ Dashboard: false });
                              // this.setState({ Dashboard: false });
                              this.setState({ Memberscreen: false });
                              this._close();
                            }}
                            style={{ height: 40, marginTop: 8, marginBottom: 8, alignSelf: 'center', width: parseFloat(screenWidth) / 1.24, justifyContent: 'center' }}>

                            <Text numberOfLines={1} style={{ letterSpacing: 1, fontSize: 18, color: 'rgb(247,143,33)', fontWeight: '600' }}>Logout</Text>

                          </TouchableOpacity>
                        }

                        <View style={{ flexDirection: 'row', bottom: 125, alignSelf: 'center', fontSize: 20, color: 'rgb(247,143,33)', position: 'absolute', zIndex: 9999, }}>
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              Linking.openURL("https://www.facebook.com/Rashayscasualdining/").catch((err) => console.error('An error occurred', err));
                            }} >
                            <Image style={{ height: 39.27, width: 39.5, resizeMode: 'stretch' }} source={require('./assets/fb.png')} />
                          </TouchableOpacity>

                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              Linking.openURL("https://www.instagram.com/rashays/").catch((err) => console.error('An error occurred', err));
                            }} >
                            <Image style={{ height: 39.27, marginLeft: 25, width: 39.5, resizeMode: 'stretch' }} source={require('./assets/instagram.png')} />
                          </TouchableOpacity>
                        </View>

                        <Text style={{ alignSelf: 'center', fontSize: 26, color: 'rgb(247,143,33)', bottom: 60, position: 'absolute', zIndex: 9999, }} >13000 13000</Text>

                        <Text style={{ alignSelf: 'center', fontSize: 12, color: 'rgb(247,143,33)', bottom: 15, position: 'absolute', zIndex: 9999, }} >VERSION 1.0</Text>

                        {/* <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            this._close();
                            this.setState({ BookTable: false });
                            this.setState({ Memberscreen: false });
                          }} style={{ height: 50, marginTop: 12, marginBottom: 8, flexDirection: 'row', alignItems: 'center', }}>

                          <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/order_history.png')} />

                          <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>Back to Order</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, backgroundColor: 'rgba(84, 81, 80, 0.5)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            this._close();
                            this.setState({ Memberscreen: false });
                            this.Get_Store_For_Bookingform();
                            this.setState({ BookTable: true });
                          }} style={{ height: 50, marginTop: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center', }}>

                          <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/table_icon.png')} />

                          <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>Reserve A Table</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, backgroundColor: 'rgba(84, 81, 80, 0.5)', width: parseFloat(screenWidth) / 1.24 }} />

                        <TouchableOpacity activeOpacity={0.8}
                          onPress={() => {
                            this._close();
                            this.GetOffer();
                            this.setState({ BookTable: false });
                            this.setState({ Memberscreen: false });
                          }} style={{ height: 50, marginTop: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center', }}>

                          <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/offers.png')} />

                          <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>My Offers</Text>

                        </TouchableOpacity>

                        <View style={{ height: 1, backgroundColor: 'rgba(84, 81, 80, 0.5)', width: parseFloat(screenWidth) / 1.24 }} />

                        {this.state.LoginMember != "" ?
                          <TouchableOpacity activeOpacity={0.8}
                            onPress={() => {
                              this._close();
                              this.setState({ MemberpointsandorderhistoryArrayList: this.state.MemberpointsandorderhistoryArrayList.length = 0 });
                              this.setState({ pageno: 0 });
                              this.GetMemberCard_from_api();
                              this.GetMemberPointswithhistory(0);
                              this.setState({ welcomebackview: false })
                              setTimeout(() => {
                                this.setState({ Memberscreen: true });
                              }, 100);
                            }}
                            style={{ height: 50, marginTop: 8, marginBottom: 8, flexDirection: 'row', backgroundColor: this.state.MemberCardScreen == true ? "rgb(247, 143, 33)" : 'transparent', alignItems: 'center', }}>

                            <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/card.png')} />

                            <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>Member Rewards</Text>

                          </TouchableOpacity>
                          :
                          null
                        }

                        {this.state.LoginMember != "" ?
                          <View style={{ height: 1, backgroundColor: 'rgba(84, 81, 80, 0.5)', width: parseFloat(screenWidth) / 1.24 }} />
                          :
                          null
                        }

                        {this.state.LoginMember == "" ?
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              this._close();
                              setTimeout(() => {
                                this.setState({ LoginScreen: true });
                              }, 100);
                            }}
                            style={{ height: 50, marginTop: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center', }}>

                            <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/login.png')} />

                            <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>Login</Text>

                          </TouchableOpacity>
                          :
                          <TouchableOpacity activeOpacity={1}
                            onPress={() => {
                              AsyncStorage.setItem('LOGIN', "");
                              AsyncStorage.setItem('MemberId', "");
                              AsyncStorage.setItem('MemberDetails', "");
                              AsyncStorage.setItem('MemberDeliveryAddress', "");
                              Person_FirstName = "";
                              Person_LastName = "";
                              Person_Email = "";
                              Person_Mobile = "";
                              Person_cardno = "";
                              this.setState({
                                getmemberdetail: false,
                                getdata: false,
                              });
                              this.setState({ LoginMember: "" })
                              this.setState({ Memberscreen: false });
                              this._close();
                            }}
                            style={{ height: 50, marginTop: 8, marginBottom: 8, flexDirection: 'row', alignItems: 'center', }}>

                            <Image style={{ height: 25, marginLeft: 14, width: 25, resizeMode: 'stretch' }} source={require('./assets/logout.png')} />

                            <Text numberOfLines={1} style={{ marginLeft: 15, letterSpacing: 1, fontSize: 19, color: '#fff', fontWeight: '600' }}>Logout</Text>

                          </TouchableOpacity>
                        } */}

                        {/* <View style={{ height: 1, backgroundColor: 'rgba(84, 81, 80, 0.5)', width: parseFloat(screenWidth) / 1.24 }} />

                        <Image style={{ height: 60, width: 180, alignSelf: 'center', bottom: 30, position: 'absolute', zIndex: 9999, resizeMode: 'stretch' }} source={require('./assets/bottomimg.png')} /> */}

                      </TouchableOpacity>
                    </ImageBackground>
                  </Animated.View>
                </TouchableOpacity>
                :
                null
            }

            {
              this.state.payloader == true ?
                <TouchableOpacity activeOpacity={1} style={{ elevation: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 1, width: parseFloat(screenWidth) - 22, padding: 10 }}>
                    <Image
                      source={require('./assets/loader.gif')}
                      style={{ width: 35, height: 35 }}
                    />

                    <Text style={{ color: "#FF8200", fontSize: 22, marginTop: 20 }}>Processing your payment...{'\n'} Please don't close app.</Text>

                  </View>
                </TouchableOpacity>
                :
                null
            }

            {
              this.state.showapiloader == true ?
                <TouchableOpacity activeOpacity={1} style={{ elevation: 10, position: 'absolute', justifyContent: 'center', alignItems: 'center', right: 0, left: 0, top: 0, bottom: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                  <Image
                    source={require('./assets/loader_all.gif')}
                    style={{ width: 90, height: 90 }}
                  />
                </TouchableOpacity>
                :
                null
            }

            {
              this.state.Success_notification == true ?
                <View style={{ position: 'absolute', top: 0, elevation: 10, right: 0, left: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                  <View style={{ borderRadius: 4, backgroundColor: '#228B22', marginRight: 15, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/green_checked.png')}
                      style={{ height: 100, width: 100, marginTop: 15, marginBottom: 15, marginRight: 20, marginLeft: 20 }} />
                    <Text style={{ fontSize: 18, color: '#fff', marginRight: 15, marginLeft: 20, marginBottom: 15 }}>{this.state.success_message}</Text>
                  </View>
                </View>
                : null
            }

            {
              this.state.Suggestion_notification == true ?
                <View style={{ position: 'absolute', top: 0, elevation: 10, right: 0, left: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                  <View style={{ borderRadius: 4, backgroundColor: '#F1C40F', justifyContent: 'center', margin: 20, alignItems: 'center' }}>
                    <View style={{ height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff', width: 100, marginTop: 15, marginBottom: 15, marginRight: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}  >
                      <Image source={require('./assets/warning.png')}
                        style={{ height: 70, width: 70, marginBottom: 8 }} />
                    </View>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', marginRight: 15, marginLeft: 20, marginBottom: 15 }}>{this.state.suggestion_message}</Text>
                  </View>
                </View>
                : null
            }

            {
              this.state.networkconnection == true ?
                <View style={{ justifyContent: 'center', elevation: 10, alignItems: 'center', backgroundColor: '#fff', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 9999 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 1, width: parseFloat(screenWidth) - 22, padding: 10 }}>
                    <Image
                      source={require('./assets/netlost.png')}
                      style={{ width: 180, height: 150, opacity: 0.7 }}
                      resizeMode="stretch"
                    />

                    <Text style={{ color: "#3D3331", fontSize: 22, marginTop: 30 }}>Ooops!</Text>
                    <Text style={{ color: "#7A716F", fontSize: 14, marginTop: 4 }}>No Internet Connection found</Text>
                    <Text style={{ color: "#7A716F", fontSize: 14, }}>Check your connection</Text>

                    <TouchableOpacity activeOpacity={1} onPress={() => { this.Checknet_connection() }} style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 1, width: 180, backgroundColor: '#e87d42', height: 45 }}>
                      <Text style={{ color: "#fff", fontSize: 16, }}>Try Again</Text>
                    </TouchableOpacity>

                  </View>
                </View>
                :
                null
            }

            {/* <Toast ref="toas" /> */}
          </View >
        </Root>
      );

  }

}

class Accordian extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: props.default === null ? false : true,
      isChecked: false,
      checkboxindex: 0,
      selectaarray: props.default === null ? [] : props.default,
      modifiergroupid: props.modifiergroupid,
      selectmodifiers: [],
      MaxQty: props.MaxQty,
    }
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })

  }

  itemsSelected = (selectedItem) => {

    this.setState({ selectmodifiers: Selected_Modifiers_Array });

    let array = [];

    if (selectedItem.length == 0) {
      const items = Selected_Modifiers_Array.filter(item => item.ModifierGroupId !== this.state.modifiergroupid);
      Selected_Modifiers_Array = items;
    }
    else {
      const items = Selected_Modifiers_Array.filter(item => item.ModifierGroupId !== this.state.modifiergroupid);
      Selected_Modifiers_Array = items;
      selectedItem.map((item) => {
        let index = this.getIndex(item.ModifierName);
        array.push(index);
        Selected_Modifiers_Array.push(item);
      });
    }
    // console.log(" Data ", Selected_Modifiers_Array);
    this.setState({ selectaarray: array });
  }

  getIndex(string) {
    return this.state.data.findIndex(obj => obj.ModifierName === string);
  }

  rowItem = (item,) => (
    <View>
      <View style={{ flexDirection: 'row', paddingTop: 12, paddingBottom: 12 }}>

        <Text style={{ fontSize: 15, width: parseFloat(screenWidth) - 105, color: '#2f2f2d', }}>{item.ModifierName}</Text>
        <Text style={{ width: 35, textAlign: 'right', fontSize: 15, color: '#2f2f2d', }}>${item.Price}</Text>

      </View>
      <View style={{ height: 0.5, backgroundColor: '#F0EEEB', }} />
    </View>
  )

  render() {

    console.disableYellowBox = true;

    return (
      <View>
        <TouchableOpacity activeOpacity={1} style={{ marginTop: 20, backgroundColor: '#F3F0E8', height: 45 }} onPress={() => this.toggleExpand()}>
          <Text style={{ color: '#2F2F2D', fontSize: 17, fontWeight: '600', paddingLeft: 12, paddingTop: 10 }}>{this.props.title}</Text>
          <Image style={{ height: 28, width: 28, transform: [{ rotate: this.state.expanded == true ? '90deg' : '270deg' }], position: 'absolute', zIndex: 9999, right: 13, top: 8 }} resizeMode="stretch" source={require('./assets/back.png')} />
        </TouchableOpacity>
        {
          this.state.expanded &&
          <View>

            <Text style={{ fontSize: 14, color: 'rgb(230, 118, 60)', marginTop: 10, alignSelf: 'center' }}>Select any {this.state.MaxQty}</Text>

            <SelectableFlatlist
              data={this.state.data}
              state={STATE.EDIT}
              // multiSelect={this.state.MaxQty == 1 ? false : true}
              multiSelect={true}
              itemsSelected={(selectedItem) => { this.itemsSelected(selectedItem); }}
              initialSelectedIndex={this.state.selectaarray}
              maxlength={this.state.MaxQty}
              cellItemComponent={(item, index) => this.rowItem(item, index)}
            />
          </View>
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  triangleCorner:
  {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: '#B3B3B3',
    transform: [{ rotate: '90deg' }]
  },
  triangletabledown:
  {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderRightColor: 'transparent',
    borderTopColor: '#95A5A6',
    transform: [{ rotate: '225deg' }]
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 2,
    paddingRight: 3,
    paddingBottom: 2,
    margin: 3,
    borderRadius: 1,
    borderWidth: 0,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

