import React from 'react'
import downArrow from "../../assets/DownArrow.svg"
import AnalyticsDropdown from './AnalyticsDropdown'
const AnalyticsTableHeader = () => {
  return (
    <div className='analytics-table-header'>
        <span className='analytics-table-title'>Pageviews <img src={downArrow}/>  </span>
        <div className="analytics-table-header-tab-list">
            <div className="analytics-table-header-tab">Today</div>
            <div className="analytics-table-header-tab">Yesterday</div>
            <div className="analytics-table-header-tab">Week</div>
            <div className="analytics-table-header-tab">Month</div>
            <div className="analytics-table-header-tab">Quarter</div>
            <div className="analytics-table-header-tab last-tab">Year</div>
        </div>
        <AnalyticsDropdown/>
    </div>
  )
}

export default AnalyticsTableHeader