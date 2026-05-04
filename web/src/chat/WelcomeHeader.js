// Copyright 2023 The OpenAgent Authors. All Rights Reserved.
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
import {Welcome} from "@ant-design/x";
import * as Setting from "../Setting";
import i18next from "i18next";

const WelcomeHeader = ({store}) => {
  const avatar = (store === undefined) ? null : store.avatar || Setting.getDefaultAiAvatar();
  const isDark = Setting.getIsDark();

  return (
    <div className="chat-welcome">
      <div className="chat-welcome__eyebrow">
        {store?.displayName || i18next.t("general:Chat")}
      </div>
      <Welcome
        variant="borderless"
        icon={avatar}
        title={(store === undefined) ? null : store.welcomeTitle || i18next.t("chat:Hello, I'm OpenAgent AI Assistant")}
        description={(store === undefined) ? null : store.welcomeText || i18next.t("chat:I'm here to help answer your questions")}
        style={{textAlign: "center"}}
        styles={{
          title: {fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 1.02},
          description: {fontSize: "16px", color: isDark ? "#9aacbf" : "#66768c", marginTop: "14px", maxWidth: "620px", lineHeight: 1.7},
        }}
      />
      <div className="chat-welcome__hint">
        {i18next.t("chat:Type message here")}
      </div>
    </div>
  );
};

export default WelcomeHeader;
