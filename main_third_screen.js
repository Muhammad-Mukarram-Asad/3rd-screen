import React, { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsToggleOff } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import HKMonthYearTabs from "./imported_components/HKMonthYearTabs/HKMonthYearTabs";
import HKYourTransactionsSection from "./imported_components/HKTransactionList/HKYourTransactionsSection/HKYourTransactionsSection";
import { BsWallet } from "react-icons/bs";
// import HKTitlebar from "./imported_components/HKTitlebar/HKTitlebar";
// import HKAccountItem from "../second_screen/HKAccountItem";
import "../../App.css";

function Main_third_screen() {
  const ref = useRef();
  const [tabIndex, setTabIndex] = useState(3);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [setTabIndex]);

  const handleTabClick = (index) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setTabIndex(index);
  };

  return (
    <div className="main_div_3_screen">

      <div className="heading_div">
        <BsThreeDotsVertical  className="heading_div_icons" />
        <h1>Account Details</h1>
        <AiOutlineSearch className="heading_div_icons" />
      </div>

      <div className="header-app">
        <div className="monthsTab">
          <HKMonthYearTabs
            tabItemList={[
              "sept 2022",
              "oct 2022",
              "nov 2022",
              "dec 2022",
              "jan 2023",
              <BsWallet style={{fontSize:"25px"}} />
            ]}
            activeIndex={tabIndex}
            onTabClick={handleTabClick}
            reference={ref}
          />

        </div>
      </div>

      <div className="center_div">
        <div className="icons_div">
          <div className="inner_icon_div">
            <div className="icon_circle_div circle_div_1">
              <FaRegEdit className="inner_icons" />
            </div>
            <p> Edit </p>
          </div>

          <div className="inner_icon_div">
            <div className="icon_circle_div circle_div_2">
              <RiDeleteBin6Fill className="inner_icons" />
            </div>
            <p> Delete </p>
          </div>

          <div className="inner_icon_div">
            <div className="icon_circle_div circle_div_3">
              <BsToggleOff className="inner_icons" />
            </div>
            <p> Deactivate </p>
          </div>
        </div>

        <div className="amount_div">
          <div className="inner_amount_div">
            <p>Opening </p>
            <p id="span1"> PKR 455,000 </p>
          </div>

          <div className="inner_amount_div">
            <p>Inflow</p>
            <p id="span2"> PKR 70,000 </p>
          </div>

          <div className="inner_amount_div">
            <p>Outflow</p>
            <p id="span3"> PKR 25,000 </p>
          </div>
        </div>
      </div>

      <div className="yoursTrSec">
        <HKYourTransactionsSection
          tabsList={["Today", "Yesterday", "This Week"]}
          tabActive={0}
          tabItemClick={() => {}}
          transactionList={["200", "-200", "200"]}
          viewAllFunc={() => {}}
          itemClick={() => {}}
          actionPerform={() => {}}
        />
      </div>
    </div>
  );
}

export default Main_third_screen;
