import { action } from "@storybook/addon-actions";
import React from "react";
import HKAccountMain from "./HKAccountMain";

export default {
  title: "HK-Accounts/WhatYouHaveCard",
  component: HKAccountMain,
};
export const DefaultWhatYouHaveCard = () => {
  return (
    <HKAccountMain
      currency={"PKR"}
      amount={"20,000"}
      infoClick={action("info click")}
    />
  );
};

export const DifferentBgColorWhatYouHaveCard = () => {
  return (
    <HKAccountMain
      currency={"PKR"}
      amount={"20,000"}
      bgColor={"#E73C4E"}
      infoClick={action("info click")}
    />
  );
};
