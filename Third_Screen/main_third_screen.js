import React, { useEffect, useRef, useState } from "react";
import "../../App.css";

import { FaAddressCard, FaBeer, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsToggleOff } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsWallet } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { FaStarAndCrescent } from "react-icons/fa";

import HKMonthYearTabs from "./imported_components/HKMonthYearTabs/HKMonthYearTabs";
// import HKYourTransactionsSection from "./imported_components/HKTransactionList/HKYourTransactionsSection/HKYourTransactionsSection";
import BankIcon from "../../public/icons/bankIcon.svg";
import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";

// import HKTitlebar from "./imported_components/HKTitlebar/HKTitlebar";
// import HKAccountItem from "../second_screen/HKAccountItem";

function Main_third_screen() {
  let your_ts_array = [
    {
      icon: <FaBeer style={{fontSize:25, marginTop:10}}/>,
      heading: "Travel",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },
    {
      icon: <FaRegEdit style={{fontSize:25, marginTop:10}}/>,
      heading: "Travel",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },
    {
      icon: <FaAddressCard style={{fontSize:25, marginTop:10}}/>,
      heading: "Travel",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },

    {
      icon: <FaStarAndCrescent style={{fontSize:25, marginTop:10}} />,
      heading: "Entertainment",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },

    {
      icon: <FaStarAndCrescent style={{fontSize:25, marginTop:10}} />,
      heading: "Entertainment",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },
    {
      icon: <FaStarAndCrescent style={{fontSize:25, marginTop:10}} />,
      heading: "Entertainment",
      paragraph: "Telenor Microfinance Bank",
      amount: "PKR - 2500",
      date: "10-july-21",
    },
  ];

  const ref = useRef();
  const [tabIndex, setTabIndex] = useState(3);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [setTabIndex]);

  const handleTabClick = (index) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setTabIndex(index);
  };

  const bgStyle = {
    backgroundColor: "#4799a6",
    backgroundImage: `url(${WhatYouhavebg})`,
    backgroundSize: "cover",
    gridArea: "1 / 1",
    opacity: "100",
    borderRadius: "16px",
  };

  return (
    <div className="main_div_3_screen">
      <div className="heading_div">
        <BsThreeDotsVertical className="heading_div_icons" />
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
              <BsWallet style={{ fontSize: "25px" }} />,
            ]}
            activeIndex={tabIndex}
            onTabClick={handleTabClick}
            reference={ref}
          />
        </div>

        <div className="AccountItem-Container">
          <div style={bgStyle}></div>
          <div className="AccountItem-overlay">
            <div className="mainGrid-account">
              <div className="AccountItem-info-account-area">
                <p>Alfalah Bank</p>

                <div
                  className="AccountItem-moreArea"
                  onClick={() => alert("More items will appear soon")}
                >
                  <BsThreeDotsVertical className="heading_div_icons" />
                </div>
              </div>
              <div className="AccountItem-available-to-spend-area">
                <p className="heading">Available to Spend</p>
                <div className="AccountItem-spend-amount">
                  <p className="currency">PKR</p>
                  <p className="amount">250,000</p>
                </div>
              </div>
              <div className="AccountItem-account-icon-area">
                <div className="AccountItem-account-icon-area-btn-main">
                  <img
                    src={BankIcon}
                    width={24}
                    height={24}
                    alt="bank_icon_image"
                  />
                </div>
              </div>
            </div>
          </div>
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

      <div className="your_ts_main_div">
        <div className="your_ts_left_div">
          <h1>Transactions</h1>
          <p>Monthly Transactions: 5</p>
        </div>

        <div className="your_ts_right_div">
          <p>PKR - 8,675</p>
        </div>
      </div>

      <div>
        {your_ts_array.map((elements) => {
          return (
            <div className="your_ts_array">
              <div className="your_ts_array_left_div">
                <div id="icon_left_div"> 
                    {elements.icon} 
                </div>

                <div className="ts_array_left_inner_div">
                  <h5> {elements.heading} </h5>
                  <p> {elements.paragraph} </p>
                </div>
              </div>

              <div className="your_ts_array_right_div">
                <h5> {elements.amount} </h5>
                <p> {elements.date} </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="yoursTrSec">
        <HKYourTransactionsSection
          tabsList={["Today", "Yesterday", "This Week"]}
          tabActive={0}
          tabItemClick={() => {}}
          transactionList={["200", "-200", "200"]}
          viewAllFunc={() => {}}
          itemClick={() => {}}
          actionPerform={() => {}}
        />
      </div> */}
    </div>
  );
}

export default Main_third_screen;
