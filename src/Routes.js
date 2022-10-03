import React from "react";
import RadioIntegration from "pages/RadioIntegration";
import Bluetooth from "pages/Bluetooth";
import GettyImagesIntegration from "pages/GettyImagesIntegration";
import FreshdeskIntegration from "pages/FreshdeskIntegration";
import TwilioIntegration from "pages/TwilioIntegration";
import StripeIntegration from "pages/StripeIntegration";
import StellarIntegration from "pages/StellarIntegration";
import SkypeIntegration from "pages/SkypeIntegration";
import SendyIntegration from "pages/SendyIntegration";
import SchemaorgIntegration from "pages/SchemaorgIntegration";
import SalesforceIntegration from "pages/SalesforceIntegration";
import MailchimpIntegration from "pages/MailchimpIntegration";
import WordpressIntegration from "pages/WordpressIntegration";
import ScheduleOnce from "pages/ScheduleOnce";
import IntegrateAndroidWearUILibrary from "pages/IntegrateAndroidWearUILibrary";
import DocusignIntegration from "pages/DocusignIntegration";
import HubspotIntegration from "pages/HubspotIntegration";
import DisqusIntegration from "pages/DisqusIntegration";
import CustomAdvertisement from "pages/CustomAdvertisement";
import CounterpartyIntegration from "pages/CounterpartyIntegration";
import CardconnectIntegration from "pages/CardconnectIntegration";
import BluetoothIntegration from "pages/BluetoothIntegration";
import BeefreeIntegration from "pages/BeefreeIntegration";
import KekaPayrollIntegration from "pages/KekaPayrollIntegration";
import OutlookIntegration from "pages/OutlookIntegration";
import QuickbooksIntegration from "pages/QuickbooksIntegration";
import MixpanelIntegration from "pages/MixpanelIntegration";
import IntercomIntegration from "pages/IntercomIntegration";
import FreechargeIntegration from "pages/FreechargeIntegration";
import BHIMUPIIntegration from "pages/BHIMUPIIntegration";
import GoogleAdsenseIntegration from "pages/GoogleAdsenseIntegration";
import GooglenewsIntegration from "pages/GooglenewsIntegration";
import GocardlessIntegration from "pages/GocardlessIntegration";
import RupayIntegration from "pages/RupayIntegration";
import ApplePayIntegration from "pages/ApplePayIntegration";
import MobikwikIntegration from "pages/MobikwikIntegration";
import PaytmIntegration from "pages/PaytmIntegration";
import PaypalIntegration from "pages/PaypalIntegration";
import GooglePayIntegration from "pages/GooglePayIntegration";
import AmazonPayIntegration from "pages/AmazonPayIntegration";
import Followers from "pages/Followers";
import UserAccount from "pages/UserAccount";
import ContactSharing from "pages/ContactSharing";
import AddFriends from "pages/AddFriends";
import ActivityFeed from "pages/ActivityFeed";
import Hashtags from "pages/Hashtags";
import Share from "pages/Share";
import FriendList from "pages/FriendList";
import Emaillogin from "pages/Emaillogin";
import ContactUs from "pages/ContactUs";
import VideoLibrary from "pages/VideoLibrary";
import ImageManagement from "pages/ImageManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/imagemanagement" element={<ImageManagement />} />
        <Route path="/videolibrary" element={<VideoLibrary />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/emaillogin" element={<Emaillogin />} />
        <Route path="/friendlist" element={<FriendList />} />
        <Route path="/share" element={<Share />} />
        <Route path="/hashtags" element={<Hashtags />} />
        <Route path="/activityfeed" element={<ActivityFeed />} />
        <Route path="/addfriends" element={<AddFriends />} />
        <Route path="/contactsharing" element={<ContactSharing />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/followers" element={<Followers />} />
        <Route
          path="/amazonpayintegration"
          element={<AmazonPayIntegration />}
        />
        <Route
          path="/googlepayintegration"
          element={<GooglePayIntegration />}
        />
        <Route path="/paypalintegration" element={<PaypalIntegration />} />
        <Route path="/paytmintegration" element={<PaytmIntegration />} />
        <Route path="/mobikwikintegration" element={<MobikwikIntegration />} />
        <Route path="/applepayintegration" element={<ApplePayIntegration />} />
        <Route path="/rupayintegration" element={<RupayIntegration />} />
        <Route
          path="/gocardlessintegration"
          element={<GocardlessIntegration />}
        />
        <Route
          path="/googlenewsintegration"
          element={<GooglenewsIntegration />}
        />
        <Route
          path="/googleadsenseintegration"
          element={<GoogleAdsenseIntegration />}
        />
        <Route path="/bhimupiintegration" element={<BHIMUPIIntegration />} />
        <Route
          path="/freechargeintegration"
          element={<FreechargeIntegration />}
        />
        <Route path="/intercomintegration" element={<IntercomIntegration />} />
        <Route path="/mixpanelintegration" element={<MixpanelIntegration />} />
        <Route
          path="/quickbooksintegration"
          element={<QuickbooksIntegration />}
        />
        <Route path="/outlookintegration" element={<OutlookIntegration />} />
        <Route
          path="/kekapayrollintegration"
          element={<KekaPayrollIntegration />}
        />
        <Route path="/beefreeintegration" element={<BeefreeIntegration />} />
        <Route
          path="/bluetoothintegration"
          element={<BluetoothIntegration />}
        />
        <Route
          path="/cardconnectintegration"
          element={<CardconnectIntegration />}
        />
        <Route
          path="/counterpartyintegration"
          element={<CounterpartyIntegration />}
        />
        <Route path="/customadvertisement" element={<CustomAdvertisement />} />
        <Route path="/disqusintegration" element={<DisqusIntegration />} />
        <Route path="/hubspotintegration" element={<HubspotIntegration />} />
        <Route path="/docusignintegration" element={<DocusignIntegration />} />
        <Route
          path="/integrateandroidwearuilibrary"
          element={<IntegrateAndroidWearUILibrary />}
        />
        <Route path="/scheduleonce" element={<ScheduleOnce />} />
        <Route
          path="/wordpressintegration"
          element={<WordpressIntegration />}
        />
        <Route
          path="/mailchimpintegration"
          element={<MailchimpIntegration />}
        />
        <Route
          path="/salesforceintegration"
          element={<SalesforceIntegration />}
        />
        <Route
          path="/schemaorgintegration"
          element={<SchemaorgIntegration />}
        />
        <Route path="/sendyintegration" element={<SendyIntegration />} />
        <Route path="/skypeintegration" element={<SkypeIntegration />} />
        <Route path="/stellarintegration" element={<StellarIntegration />} />
        <Route path="/stripeintegration" element={<StripeIntegration />} />
        <Route path="/twiliointegration" element={<TwilioIntegration />} />
        <Route
          path="/freshdeskintegration"
          element={<FreshdeskIntegration />}
        />
        <Route
          path="/gettyimagesintegration"
          element={<GettyImagesIntegration />}
        />
        <Route path="/bluetooth" element={<Bluetooth />} />
        <Route path="/radiointegration" element={<RadioIntegration />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
