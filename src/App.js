import logo from './logo.svg';
import './index.css';
import React from "react";

import FixedColumnTable from "./FixedColumnTable";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const headerTitles = [
  "Order Status",
  "Payment Status",
  "Order ID",
  "Order Date ",
  "Order Value",
  "Store Name ",
  "Delivery/Pickup Date",
  "Delivery Type",
  "Delivery/PickUp Location",
  "Delivery/Pickup Slot",
  "Sender Name",
  "Sender Phone No.",
  "Recepient Name",
  "Recepient Phone No.",
  "No. of Items",
  "Message Card",
  "Call Me Before Delivery",
  "Special Delivery Instructions",
  "Surprise Gift",
  "Payment Due"
];

const tableHeaders = [
  <div>
    <span>
      <input type="checkbox" />
    </span>
  </div>
  /////////////////
];

headerTitles.map((items) => {
  return tableHeaders.push(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <span style={{ marginRight: "5px", color: "#ffffff" }}>{items}</span>
      <div style={{ position: "relative" }}>
        <div>
          <RiArrowUpSFill style={{ color: "#ffffff" }} />
        </div>
        <div style={{ position: "absolute", top: "5px" }}>
          <RiArrowDownSFill style={{ color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
});

console.log("------->", tableHeaders);



const tableData = [
  [
    <span className="row-styles check-box-style " style={{width:'50px'}}><input type="checkbox"></input></span>,
    <span className="row-styles">Order Recieved</span>,
    <span className="row-styles">Payment Completed</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>
  ],
  [
    <span className="row-styles check-box-style"><input type="checkbox"></input></span>,
    <span className="row-styles">Order Recieved</span>,
    <span className="row-styles">Payment Completed</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>
  ],
  [
    <span className="row-styles check-box-style"><input type="checkbox"></input></span>,
    <span className="row-styles">Order Recieved</span>,
    <span className="row-styles">Payment Completed</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>
  ],
  [
    <span className="row-styles check-box-style"><input  type="checkbox"></input></span>,
    <span className="row-styles">Order Recieved</span>,
    <span className="row-styles">Payment Completed</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>,
    <span className="row-styles">#ODR_090</span>
  ]
];

function App() {
  return (
    <FixedColumnTable headers={tableHeaders} data={tableData} frozen={5} />
  );
}

export default App;
