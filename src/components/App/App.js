import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Declaration from "../Declaration/Declaration.js";
import Registered from "../Registered/Registered.js";
import Verification from "../Verification/Verification.js";
import VerifiedSuccess from "../VerifiedSuccess/VerifiedSuccess.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Benefits from "../Dashboard/Benefits/Benefits.js";
import Points from "../Dashboard/Points/Points.js";
import ScanPoints from "../Dashboard/Points/ScanPoints/ScanPoints.js";
import ScanPointCamera from "../Dashboard/Points/ScanPointCamera/ScanPointCamera.js";
import ScanPointSuccess from "../Dashboard/Points/ScanPointSuccess/ScanPointSuccess.js";
import FailureReply from "../Dashboard/Points/FailureReply/FailureReply.js";
import FailureReplyDone from "../Dashboard/Points/FailureReply/FailureReplyDone.js";
import MemberSetting from "../Dashboard/MemberSetting/MemberSetting.js";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Declaration}/>
                <Route path="/Registered" component={Registered}/>
                <Route path="/Verification" component={Verification}/>
                <Route path="/VerifiedSuccess" component={VerifiedSuccess}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/Benefits" component={Benefits}/>
                <Route path="/Points" component={Points}/>
                <Route path="/ScanPoints" component={ScanPoints}/>
                <Route path="/ScanPointCamera" component={ScanPointCamera}/>
                <Route path="/ScanPointSuccess" component={ScanPointSuccess}/>
                <Route path="/FailureReply" component={FailureReply}/>
                <Route path="/FailureReplyDone" component={FailureReplyDone}/>
                <Route path="/MemberSetting" component={MemberSetting}/>
            </Switch>
        </Router>
    )
}