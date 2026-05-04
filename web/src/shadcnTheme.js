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

// Shadcn-style Ant Design theme configuration.
// Adapted from the "shadcn" preset on https://ant.design/

import {DefaultColorPrimary} from "./Conf";

function hexToRgbComma(hex) {
  const h = hex.replace(/^#/, "");
  const n = parseInt(h, 16);
  if (h.length !== 6 || Number.isNaN(n)) {
    return "38, 38, 38";
  }
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

const primaryRgb = hexToRgbComma(DefaultColorPrimary);

// Link tokens for dark mode — must be light enough to read on dark backgrounds.
// colorPrimary is near-black (#404040), so the algorithm would derive dark links by default.
const darkLinkTokens = {
  colorLink: "#d4d4d4",
  colorLinkHover: "#f5f5f5",
  colorLinkActive: "#a3a3a3",
};

// Structural tokens that apply regardless of theme (no colors)
const structuralTokens = {
  fontFamily: "'Manrope', 'SF Pro Display', 'SF Pro Text', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
  fontFamilyCode: "'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  borderRadius: 18,
  borderRadiusXS: 8,
  borderRadiusSM: 12,
  borderRadiusLG: 24,
  padding: 18,
  paddingSM: 12,
  paddingLG: 28,
  margin: 18,
  marginSM: 12,
  marginLG: 28,
  controlHeight: 44,
  controlHeightLG: 48,
  controlHeightSM: 36,
  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.10), 0 8px 24px rgba(15, 23, 42, 0.08)",
  boxShadowSecondary: "0 26px 80px rgba(15, 23, 42, 0.14), 0 12px 36px rgba(15, 23, 42, 0.10)",
};

// Light-mode color tokens
const lightColorTokens = {
  colorPrimary: DefaultColorPrimary,
  colorSuccess: "#12b886",
  colorWarning: "#f59f00",
  colorError: "#e03131",
  colorInfo: DefaultColorPrimary,
  colorTextBase: "#132238",
  colorBgBase: "#eef3f8",
  colorPrimaryBg: `rgba(${primaryRgb}, 0.08)`,
  colorPrimaryBgHover: `rgba(${primaryRgb}, 0.14)`,
  colorPrimaryBorder: `rgba(${primaryRgb}, 0.22)`,
  colorPrimaryBorderHover: `rgba(${primaryRgb}, 0.34)`,
  colorPrimaryHover: DefaultColorPrimary,
  colorPrimaryActive: DefaultColorPrimary,
  colorPrimaryText: DefaultColorPrimary,
  colorPrimaryTextHover: DefaultColorPrimary,
  colorPrimaryTextActive: DefaultColorPrimary,
  colorSuccessBg: "#ecfdf7",
  colorSuccessBgHover: "#d3f9e8",
  colorSuccessBorder: "#8ce7c5",
  colorSuccessBorderHover: "#63d6ae",
  colorSuccessHover: "#099268",
  colorSuccessActive: "#087f5b",
  colorSuccessText: "#087f5b",
  colorSuccessTextHover: "#087f5b",
  colorSuccessTextActive: "#065f46",
  colorWarningBg: "#fff8db",
  colorWarningBgHover: "#ffec99",
  colorWarningBorder: "#ffd43b",
  colorWarningBorderHover: "#fcc419",
  colorWarningHover: "#f08c00",
  colorWarningActive: "#e67700",
  colorWarningText: "#e67700",
  colorWarningTextHover: "#e67700",
  colorWarningTextActive: "#d9480f",
  colorErrorBg: "#fff5f5",
  colorErrorBgHover: "#ffe3e3",
  colorErrorBorder: "#ffc9c9",
  colorErrorBorderHover: "#ffa8a8",
  colorErrorHover: "#e03131",
  colorErrorActive: "#c92a2a",
  colorErrorText: "#c92a2a",
  colorErrorTextHover: "#c92a2a",
  colorErrorTextActive: "#a51111",
  colorInfoBg: `rgba(${primaryRgb}, 0.08)`,
  colorInfoBgHover: `rgba(${primaryRgb}, 0.14)`,
  colorInfoBorder: `rgba(${primaryRgb}, 0.22)`,
  colorInfoBorderHover: `rgba(${primaryRgb}, 0.34)`,
  colorInfoHover: DefaultColorPrimary,
  colorInfoActive: DefaultColorPrimary,
  colorInfoText: DefaultColorPrimary,
  colorInfoTextHover: DefaultColorPrimary,
  colorInfoTextActive: DefaultColorPrimary,
  colorLink: DefaultColorPrimary,
  colorLinkHover: DefaultColorPrimary,
  colorLinkActive: DefaultColorPrimary,
  colorText: "#132238",
  colorTextSecondary: "#607085",
  colorTextTertiary: "#8591a2",
  colorTextQuaternary: "#a7b2c1",
  colorTextDisabled: "#b0bac7",
  colorBgContainer: "#ffffff",
  colorBgElevated: "rgba(255, 255, 255, 0.96)",
  colorBgLayout: "#eef3f8",
  colorBgSpotlight: `rgba(${primaryRgb}, 0.92)`,
  colorBgMask: "rgba(15, 23, 42, 0.45)",
  colorFillSecondary: "rgba(19, 34, 56, 0.05)",
  colorFillTertiary: "rgba(19, 34, 56, 0.08)",
  colorFillQuaternary: "rgba(19, 34, 56, 0.03)",
  colorBorder: "#dbe4ee",
  colorBorderSecondary: "#eaf0f6",
};

export function getShadcnThemeToken(isDark) {
  if (isDark) {
    return {
      ...structuralTokens,
      ...darkLinkTokens,
      colorPrimary: DefaultColorPrimary,
      colorInfo: DefaultColorPrimary,
      colorTextBase: "#edf4ff",
      colorText: "#edf4ff",
      colorTextSecondary: "#93a4bc",
      colorTextTertiary: "#7b8ba3",
      colorTextQuaternary: "#617086",
      colorTextDisabled: "#506077",
      colorBgBase: "#09111d",
      colorBgLayout: "#09111d",
      colorBgContainer: "#0f1726",
      colorBgElevated: "rgba(12, 21, 35, 0.96)",
      colorBgMask: "rgba(2, 6, 23, 0.65)",
      colorFillSecondary: "rgba(255, 255, 255, 0.06)",
      colorFillTertiary: "rgba(255, 255, 255, 0.10)",
      colorFillQuaternary: "rgba(255, 255, 255, 0.04)",
      colorBorder: "rgba(255, 255, 255, 0.12)",
      colorBorderSecondary: "rgba(255, 255, 255, 0.08)",
      colorPrimaryBg: `rgba(${primaryRgb}, 0.18)`,
      colorPrimaryBgHover: `rgba(${primaryRgb}, 0.24)`,
      colorPrimaryBorder: `rgba(${primaryRgb}, 0.32)`,
      colorPrimaryBorderHover: `rgba(${primaryRgb}, 0.42)`,
    };
  }
  return {
    ...structuralTokens,
    ...lightColorTokens,
  };
}

// Keep for backward compatibility
export const shadcnThemeToken = {
  ...structuralTokens,
  ...lightColorTokens,
};

function getLightComponents() {
  return {
    Button: {
      primaryShadow: `0 18px 30px rgba(${primaryRgb}, 0.22)`,
      defaultShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
      dangerShadow: "0 14px 24px rgba(224, 49, 49, 0.18)",
      defaultBorderColor: "rgba(255, 255, 255, 0.68)",
      defaultColor: "#132238",
      defaultBg: "#ffffff",
      defaultHoverBg: "#f8fbff",
      defaultHoverBorderColor: "#cfd9e5",
      defaultHoverColor: "#132238",
      defaultActiveBg: "#edf2f8",
      defaultActiveBorderColor: "#c3d0df",
      contentFontSize: 14,
      contentFontSizeLG: 15,
      fontWeight: 700,
      paddingInline: 18,
      paddingInlineLG: 22,
      borderRadius: 14,
    },
    Input: {
      activeShadow: `0 0 0 6px rgba(${primaryRgb}, 0.10)`,
      hoverBorderColor: `rgba(${primaryRgb}, 0.28)`,
      activeBorderColor: `rgba(${primaryRgb}, 0.42)`,
      borderRadius: 16,
      paddingBlock: 12,
    },
    Select: {
      optionSelectedBg: `rgba(${primaryRgb}, 0.10)`,
      optionActiveBg: "rgba(19, 34, 56, 0.04)",
      optionSelectedFontWeight: 700,
      borderRadius: 16,
    },
    Alert: {
      borderRadiusLG: 18,
    },
    Card: {
      headerFontSize: 18,
      headerHeight: 72,
      bodyPadding: 24,
      bodyPaddingSM: 20,
    },
    Breadcrumb: {
      itemColor: "#748399",
      lastItemColor: "#132238",
      separatorColor: "#a7b2c1",
      fontSize: 12,
      linkColor: "#607085",
      linkHoverColor: "#132238",
    },
    Drawer: {
      colorBgElevated: "rgba(255, 255, 255, 0.92)",
    },
    Dropdown: {
      controlPaddingHorizontal: 16,
      paddingBlock: 8,
    },
    Modal: {
      borderRadiusLG: 24,
    },
    Progress: {
      defaultColor: DefaultColorPrimary,
      remainingColor: "#e9eef4",
    },
    Segmented: {
      itemSelectedBg: "#ffffff",
      itemSelectedColor: "#132238",
      trackBg: "rgba(19, 34, 56, 0.06)",
      borderRadius: 999,
      paddingSM: 4,
    },
    Steps: {
      iconSize: 32,
    },
    Switch: {
      trackHeight: 24,
      trackMinWidth: 44,
      innerMinMargin: 4,
      innerMaxMargin: 24,
    },
    Checkbox: {
      borderRadiusSM: 6,
    },
    Slider: {
      trackBg: "rgba(19, 34, 56, 0.16)",
      trackHoverBg: "rgba(19, 34, 56, 0.24)",
      handleSize: 18,
      handleSizeHover: 20,
      railSize: 6,
    },
    ColorPicker: {
      borderRadius: 14,
    },
    Menu: {
      itemFontSize: 14,
      groupTitleFontSize: 12,
      itemHeight: 44,
      fontWeightStrong: 700,
      itemSelectedBg: `rgba(${primaryRgb}, 0.10)`,
      itemHoverBg: "rgba(19, 34, 56, 0.05)",
      itemSelectedColor: "inherit",
    },
    Tag: {
      borderRadiusSM: 999,
      defaultBg: "rgba(19, 34, 56, 0.06)",
      defaultColor: "#44556c",
    },
    Table: {
      headerBg: "rgba(255, 255, 255, 0.78)",
      headerSplitColor: "transparent",
      rowHoverBg: `rgba(${primaryRgb}, 0.05)`,
      borderColor: "#eef2f6",
      fontWeightStrong: 700,
      cellPaddingBlockMD: 14,
      cellPaddingInlineMD: 14,
    },
  };
}

function getDarkComponents() {
  return {
    Button: {
      primaryShadow: `0 18px 30px rgba(${primaryRgb}, 0.18)`,
      defaultShadow: "0 12px 28px rgba(0, 0, 0, 0.28)",
      dangerShadow: "0 16px 26px rgba(224, 49, 49, 0.18)",
      fontWeight: 700,
      paddingInline: 18,
      borderRadius: 14,
    },
    Input: {
      activeShadow: `0 0 0 6px rgba(${primaryRgb}, 0.12)`,
      hoverBorderColor: `rgba(${primaryRgb}, 0.30)`,
      activeBorderColor: `rgba(${primaryRgb}, 0.44)`,
      borderRadius: 16,
    },
    Select: {
      optionSelectedFontWeight: 700,
      optionActiveBg: "rgba(255, 255, 255, 0.06)",
      optionSelectedBg: `rgba(${primaryRgb}, 0.18)`,
      hoverBorderColor: `rgba(${primaryRgb}, 0.28)`,
      activeBorderColor: `rgba(${primaryRgb}, 0.40)`,
      borderRadius: 16,
    },
    Alert: {
      borderRadiusLG: 18,
    },
    Card: {
      headerFontSize: 18,
      headerHeight: 72,
      bodyPadding: 24,
      bodyPaddingSM: 20,
    },
    Breadcrumb: {
      itemColor: "#73839b",
      lastItemColor: "#edf4ff",
      separatorColor: "#516175",
      fontSize: 12,
      linkColor: "#93a4bc",
      linkHoverColor: "#edf4ff",
    },
    Drawer: {
      colorBgElevated: "rgba(10, 18, 31, 0.94)",
    },
    Modal: {
      borderRadiusLG: 24,
    },
    Segmented: {
      itemSelectedBg: "rgba(255, 255, 255, 0.12)",
      itemSelectedColor: "#edf4ff",
      trackBg: "rgba(255, 255, 255, 0.05)",
      borderRadius: 999,
      paddingSM: 4,
    },
    Steps: {
      iconSize: 32,
    },
    Switch: {
      trackHeight: 24,
      trackMinWidth: 44,
      innerMinMargin: 4,
      innerMaxMargin: 24,
    },
    Checkbox: {
      borderRadiusSM: 6,
    },
    Slider: {
      handleSize: 18,
      handleSizeHover: 20,
      railSize: 6,
    },
    ColorPicker: {
      borderRadius: 14,
    },
    Menu: {
      itemFontSize: 14,
      groupTitleFontSize: 12,
      itemHeight: 44,
      fontWeightStrong: 700,
      itemHoverBg: "rgba(255, 255, 255, 0.08)",
      itemSelectedBg: `rgba(${primaryRgb}, 0.22)`,
      itemSelectedColor: "inherit",
    },
    Tag: {
      borderRadiusSM: 999,
      defaultBg: "rgba(255, 255, 255, 0.08)",
      defaultColor: "#d7e2f0",
    },
    Table: {
      headerBg: "rgba(9, 17, 29, 0.76)",
      headerSplitColor: "transparent",
      rowHoverBg: "rgba(255, 255, 255, 0.04)",
      borderColor: "rgba(255, 255, 255, 0.08)",
      fontWeightStrong: 700,
      cellPaddingBlockMD: 14,
      cellPaddingInlineMD: 14,
    },
  };
}

export function getShadcnThemeComponents(isDark) {
  return isDark ? getDarkComponents() : getLightComponents();
}

// Keep for backward compatibility
export const shadcnThemeComponents = getLightComponents();
