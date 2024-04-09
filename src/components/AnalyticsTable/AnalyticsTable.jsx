import React from "react";
import AnalyticsTableHeader from "./AnalyticsTableHeader";
import "./analyticsTable.css";
import chart1 from "../../assets/Column_Chart_1.svg"
import chart2 from "../../assets/Column_Chart_2.svg"
import chart3 from "../../assets/Column_Chart_3.svg"
import chart4 from "../../assets/Column_Chart_4.svg"
import chart5 from "../../assets/Column_Chart_5.svg"
import data from "../../data/PageViewData.json"
import chart6 from "../../assets/Column_Chart_6.svg"
import AnalyticsTableRow from "./AnalyticsTableRow";
const AnalyticsTable = () => {
  return (
    <div className="analytics-table">
      <AnalyticsTableHeader />
      <div className="analytics-table-col-header-container">
        <div className="analytics-table-col-header page-col">Page</div>
        <div className="analytics-table-col-header">
          <span className="col-title">Pageviews</span>
          <span className="col-title-value">356,928</span>
          <img src ={chart1}/>
        </div>
        <div className="analytics-table-col-header">
          <span className="col-title">Unique Pageviews</span>
          <span className="col-title-value">275,588</span>
          <img src ={chart2}/>
        </div>
        <div className="analytics-table-col-header">
          <span className="col-title">Avg. time on page</span>
          <span className="col-title-value">00:03:51</span>
          <img src ={chart3}/>
        </div>
        <div className="analytics-table-col-header">
          <span className="col-title">Extrances</span>
          <span className="col-title-value">315,643</span>
          <img src ={chart4}/>
        </div>
        <div className="analytics-table-col-header">
          <span className="col-title">% Exit</span>
          <span className="col-title-value">39,84%</span>
          <img src ={chart5}/>
        </div>
        <div className="analytics-table-col-header">
          <span className="col-title">Page Value</span>
          <span className="col-title-value">$19,983</span>
          <img src ={chart6}/>
        </div>
      </div>
      <div className="analytics-table-row-container">
        {data.map((rowData,index) => <AnalyticsTableRow key={index} rowData={rowData}/>)}
      </div>
      
    </div>
  );
};

export default AnalyticsTable;
