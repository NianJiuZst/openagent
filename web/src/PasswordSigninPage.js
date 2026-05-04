// Copyright 2026 The OpenAgent Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import {Button, Form, Input, Result, Spin, message} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import i18next from "i18next";
import * as AccountBackend from "./backend/AccountBackend";
import * as Setting from "./Setting";

class PasswordSigninPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showSignin: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    AccountBackend.getSigninOptions()
      .then((res) => {
        if (res.status === "ok" && res.data?.casdoorAvailable) {
          window.location.replace(Setting.getSigninUrl());
          return;
        }

        this.setState({
          loading: false,
          showSignin: res.status === "ok" && !res.data?.casdoorAvailable && res.data?.signinAvailable,
          errorMessage: res.status === "ok" ? "" : res.msg,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          showSignin: false,
          errorMessage: error.message,
        });
      });
  }

  onFinish(values) {
    AccountBackend.signinWithPassword(values.username, values.password)
      .then((res) => {
        if (res.status === "ok") {
          const from = sessionStorage.getItem("from") || "/";
          sessionStorage.removeItem("from");
          window.location.href = from;
        } else {
          message.error(res.msg);
        }
      })
      .catch((error) => message.error(error.message));
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
          <Spin size="large" tip={i18next.t("login:Signing in...")} />
        </div>
      );
    }

    if (!this.state.showSignin) {
      return (
        <Result
          status="warning"
          title={i18next.t("login:Login Error")}
          subTitle={this.state.errorMessage || i18next.t("account:Sign in is unavailable")}
        />
      );
    }

    return (
      <div className="signin-page">
        <div className="signin-page__orbs">
          <div className="signin-page__orb signin-page__orb--primary" />
          <div className="signin-page__orb signin-page__orb--secondary" />
        </div>
        <div className="signin-page__panel">
          <div className="signin-page__hero">
            <div className="signin-page__badge">OPENAGENT</div>
            <div style={{marginBottom: "36px"}}>
              <img src={this.props.logo} alt="OpenAgent" style={{width: "260px", maxWidth: "100%"}} />
            </div>
            <h1 className="signin-page__title">Ship ideas faster.</h1>
            <p className="signin-page__subtitle">
              {i18next.t("chat:I'm here to help answer your questions")}
            </p>
            <div className="signin-page__meta">
              <span>AI Workspace</span>
              <span>Knowledge Base</span>
              <span>Cloud Runtime</span>
            </div>
          </div>
          <div className="signin-page__card">
            <div className="signin-page__card-header">
              <h2>{i18next.t("account:Sign In")}</h2>
              <p>{i18next.t("general:Username")} / {i18next.t("general:Password")}</p>
            </div>
            <Form className="signin-page__form" initialValues={{username: "admin"}} onFinish={(values) => this.onFinish(values)} requiredMark={false}>
              <Form.Item name="username" rules={[{required: true, message: i18next.t("account:Please input your username")}]}>
                <Input
                  prefix={<UserOutlined style={{fontSize: "16px", color: "#222222"}} />}
                  placeholder={i18next.t("general:Username")}
                  style={{height: "50px", fontSize: "15px"}}
                />
              </Form.Item>
              <Form.Item name="password" rules={[{required: true, message: i18next.t("account:Please input your password")}]}>
                <Input.Password
                  prefix={<LockOutlined style={{fontSize: "16px", color: "#222222"}} />}
                  placeholder={i18next.t("general:Password")}
                  autoFocus
                  style={{height: "50px", fontSize: "15px"}}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" block style={{height: "50px", marginTop: "12px", fontSize: "15px"}}>
                {i18next.t("account:Sign In")}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordSigninPage;
