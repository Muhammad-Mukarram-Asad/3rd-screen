import React from "react";
import HKAccountItem from "./HKAccountItem";
import bankIcon from "../../../public/icons/bankIcon.svg";
import { action } from "@storybook/addon-actions";
export default {
  title: "HK-Accounts/Account-Item",
  component: HKAccountItem,
};
export const DefaultHKAccountItem = () => {
  return (
    <HKAccountItem
      currency={"PKR"}
      amount={"250,000"}
      accountName={"Alfalah Bank"}
      accountIcon={bankIcon}
      index={1}
      accountItemClick={action("Account item click")}
      moreClick={action("More icon click")}
    />
  );
};
export const DefaultHKAccountItemDeactivated = () => {
  return (
    <HKAccountItem
      currency={"PKR"}
      amount={"0"}
      accountName={"Alfalah Bank"}
      accountIcon={bankIcon}
      index={1}
      accountItemClick={action("Account item click")}
      moreClick={action("More icon click")}
      isAccountDeactivated={true}
    />
  );
};
export const DefaultHKAccountItemDifferentColor = () => {
  return (
    <HKAccountItem
      currency={"PKR"}
      amount={"250,000"}
      accountName={"Alfalah Bank"}
      accountIcon={bankIcon}
      index={1}
      accountItemClick={action("Account item click")}
      moreClick={action("More icon click")}
      bgColor={"#E73C4E"}
    />
  );
};
