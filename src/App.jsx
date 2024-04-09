
import './App.css'
import Sidebar from './components/Sidebar'
import MediumCard from './components/MediumCard';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import bell from "./assets/Bell.svg"
import messageCircle from "./assets/Message circle.svg"
import settings from "./assets/Settings_black.svg"
import profile from "./assets/profile.png"
import SmallCard from './components/SmallCard';

import data from "./data/MediumCard.json"
import AnalyticsTable from './components/AnalyticsTable/AnalyticsTable';
function App() {

  return (
    <>
    <div className='page-container'>
      <div className='sidebar-container'>
      <Sidebar/>

      </div>
      <div className='analytics-page-container'>
        <div className="analytics-page-header">
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput 
            sx={{height:40}}
            id="outlined-adornment-password"
          
            startAdornment={
              <span>&#x1F50D;</span>
            }
            endAdornment={
              <span>&#8855;</span> 
            }
            defaultValue={'   Search by profile, setting, artifact etc...'}
            label="Password"
          />
        </FormControl>
        <div className="header-icon-container">
        <button className='header-icon-btn'>
          <img src={bell} /> </button>
        <button className='header-icon-btn'> <img src={messageCircle} /> </button>
        <button className='header-icon-btn'> <img src={settings} /> </button>
        <button className='header-icon-btn profile-image-btn'> <img className="profile-image"src={profile}/> </button>
        </div>
    
        </div>
        <div className="analytics-page-button-container">
          <button className='analytics-page-button' style={{backgroundColor :'#2F667F',color:'white'}}><span className='plus-sign'>&#x2B;</span>  Create Report</button>
          <button className='analytics-page-button'> Share this dashboard</button>
          <button className='analytics-page-button'> Select Duration</button>
          <button className='analytics-page-button'> Compare with Duration</button>
        </div>
        <div className="analytics-page-small-cards-container">
          <SmallCard title={"Efficiency"} subtitle={"Lorem Ipsum"} value={"1.1921"} change={0.015} change_in_percent={0.13} price={"0.00 USD"}/>
          <SmallCard title={"Time to market"} subtitle={"Lorem Ipsum"} value={"327,176"} change={"-97,914.00 "} change_in_percent={-23.03} price={"131,040,723,108 JPY"}/>
          <SmallCard title={"Tech debt"} subtitle={"Lorem Ipsum"} value={1.1763} change={0.015} change_in_percent={0.13} price={"0.00 USD"}/>
          <SmallCard title={"Predictability"} subtitle={"Lorem Ipsum"} value={0.00313010} change={-0.00050430} change_in_percent={-13.88} price={"1,566 BTC"}/>
        </div>
        <div className="analytics-page-medium-cards-container">
          {data.map((cardData,index) => <MediumCard key={index} cardData={cardData}/>)}
        </div>
        <div className="pageviews-container">
          <AnalyticsTable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
