import React, { useEffect } from "react";
import "./App.css";
import HKTitlebar from "./components/HKTitlebar/HKTitlebar";
import HKAccountMain from "./components/HKAccounts/HKAccountMain";
import YourAccountsHeader from "./components/HKSectionHeadings/YouAccounts/YourAccountsHeader";
import HKAccountsCard from "./components/HKAccountsCard/HKAccountsCard";
import Dashboard from "./public/icons/Dashboard.svg";
import QuickAddTransactionGroup from "./components/HKRoundedCornerButton/QuickAddTransactionGroup/QuickAddTransactionGroup";
import HKBottomNav from "./components/HKBottomNav/HKBottomNav";
import AddDetailsHeader from "./components/HKSectionHeadings/AddDetailsTransactionHeader/AddDetailsHeader";
import HKCategorizedItem from "./components/HKCategorizedTransactions/CategorizedItem/HKCategorizedItem";
import HKBarChart from "./components/HKCharts/BarChart/HKBarChart";
import OtherFeaturesGroup from "./components/HKRoundedCornerButton/OtherFeaturesGroup/OtherFeaturesGroup";
import HKYourTransactionsSection from "./components/HKTransactionList/HKYourTransactionsSection/HKYourTransactionsSection";
import HKBudgetSection from "./components/HKBudgets/HKBudgetSection";
import Accounts from "./public/icons/Accounts.svg";
import HKMonthYearTabs from "./components/HKTabs/HKMonthYearTabs/HKMonthYearTabs";
import { useRef, useState } from "react";
const Screen = () => {
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
    <div>
      <div className="header-app">
        <HKTitlebar
          withHKLogo={true}
          leftAction={() => {}}
          rightAction2={() => {}}
        />
        <div className="monthsTab">
          <HKMonthYearTabs
            tabItemList={[
              "sept 2022",
              "oct 2022",
              "nov 2022",
              "dec 2022",
              "jan 2023",
            ]}
            activeIndex={tabIndex}
            onTabClick={handleTabClick}
            reference={ref}
          />
        </div>
      </div>
      <div id="con">
        <div id="content">
          <div className="whathaveCard">
            <HKAccountMain
              currency={"PKR"}
              amount={"20,000"}
              infoClick={() => {}}
            />
          </div>
          <div className="header-padding">
            <YourAccountsHeader
              addFunc={() => {}}
              viewAllFunc={() => {}}
              showViewAll={true}
              title={"Your Accounts"}
            />
          </div>
          <div className="acc-list">
            {["", "", "", ""].map((item, i) => {
              return (
                <div className="acc-item" key={i}>
                  <HKAccountsCard
                    icon={Dashboard}
                    accountName={"Demo Account"}
                    accountAmount={2000}
                    accountAmountInText={"pkr 2000"}
                    onClick={() => {}}
                    index={i}
                  />
                </div>
              );
            })}
          </div>

          <div className="quickAdd">
            <QuickAddTransactionGroup
              expenseAction={() => {}}
              incomeAction={() => {}}
              transferAction={() => {}}
              atmAction={() => {}}
            />
          </div>
          <div className="categorySect">
            <AddDetailsHeader
              title={"Categorize Transactions"}
              subtitle={
                "Make sure your banked transactions are in the right \n categories"
              }
              viewAllFunc={() => {}}
            />
            {["", "", ""].map((element, index) => {
              return (
                <HKCategorizedItem
                  key={index}
                  title={"Title"}
                  subtitle={"Subtitle"}
                  description={"Description"}
                  amount={1200}
                />
              );
            })}
          </div>
          <div className="chartSect">
            <HKBarChart
              barData={[
                { category: "Traveling", barValue: 100 },
                { category: "Transport", barValue: 90 },
                { category: "Bills & Utility", barValue: 80 },
                { category: "Education", barValue: 70 },
                { category: "Home", barValue: 60 },
                { category: "Gifts", barValue: 50 },
                { category: "Office", barValue: 40 },
                { category: "Personal", barValue: 30 },
                { category: "Medical", barValue: 20 },
                { category: "Other", barValue: 16 },
              ]}
              spentTotal={"1,000"}
              viewAllFunc={() => {}}
              date="Sept 2022"
            />
          </div>
          <div className="othersSec">
            <OtherFeaturesGroup
              historyAction={() => {}}
              budgetAction={() => {}}
              savingsAction={() => {}}
              eventsAction={() => {}}
            />
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
          <div className="budgetSect">
            <HKBudgetSection
              budgetList={[
                {
                  budgetCategory: "Category",
                  budgetAmount: 300,
                  spentAmount: 0,
                  progress: 0,
                  icon: Accounts,
                },
                {
                  budgetCategory: "Category",
                  budgetAmount: 300,
                  spentAmount: 200,
                  progress: 60,
                  icon: Accounts,
                },
                ,
                {
                  budgetCategory: "Category",
                  budgetAmount: 300,
                  spentAmount: 500,
                  progress: 100,
                  icon: Accounts,
                },
              ]}
              addFunc={() => {}}
              onBudgetItemClick={() => {}}
            />
          </div>
        </div>
        <div id="footer">
          <HKBottomNav onItemClick={() => {}} active={0} isBottomNavOn={true} />
        </div>
      </div>
    </div>
  );
};

export default Screen;
