import React from "react";

const AnalyticsTableRow = ({ rowData }) => {
  return (
    <div className="analytics-row">
      <span className="analytics-cell page-row">{rowData.page}</span>
      <span className="analytics-cell">
        <span className="row-value">{rowData.pageviews.value}</span>{" "}
        <span className="row-percent">({rowData.pageviews.percent})</span>
      </span>
      <span className="analytics-cell">
        <span className="row-value">{rowData.uniquePageviews.value}</span>{" "}
        <span className="row-percent">({rowData.uniquePageviews.percent})</span>
      </span>
      <span className="analytics-cell">
        <span className="row-value">{rowData.avgTimeOnPage}</span>
      </span>
      <span className="analytics-cell">
        <span className="row-value">{rowData.extrances.value}</span>{" "}
        <span className="row-percent">({rowData.extrances.percent})</span>
      </span>
      <span className="analytics-cell">
        <span className="row-value">{rowData.exitPercent}</span>
      
      </span>
      <span className="analytics-cell">
        <span className="row-value">${rowData.pageValue.value}</span>{" "}
        <span className="row-percent">({rowData.pageValue.percent})</span>
      </span>
    </div>
  );
};

export default AnalyticsTableRow;
