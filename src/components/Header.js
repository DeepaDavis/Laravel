import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic'; // Microphone icon import

import HomeIcon from '@mui/icons-material/Home';
import { Explore as ExploreIcon } from '@mui/icons-material';
import { Subscriptions as SubscriptionIcon } from '@mui/icons-material';
import { VideoLibrary as VideoLibraryIcon } from '@mui/icons-material';
import { History, OndemandVideo, WatchLater, ThumbUp, ExpandMoreOutlined, YouTube, Theaters, SportsEsports, Settings, Flag, Help, Feedback } from '@mui/icons-material';

import ytLogo from './assets/ytlogo.webp'; // Import your logo
import './Header.css';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import SubscriptionRow from './SubscriptionRow';

function Header() {
    return (


        <div className='header_parent'>

            <div className='header'>
                <div className='header_left'>
                    <MenuIcon />
                    <img className='header_logo' src={ytLogo} alt="YouTube Logo" />
                </div>{/* End of div with className = header_left  */}
                <div className='header_input'>
                    <div className='header_middle'>
                        <input className='searchInput' placeholder='Search' type="text" />
                        <SearchIcon className='header_searchBtn' />
                    </div>{/* End of div with className = header_middle  */}
                    <MicIcon />
                </div>{/* End of div with className = header_input  */}
                <div className='header_right'>
                    <VideoCallIcon />
                    <AppsIcon className='header_icons' />
                    <NotificationsIcon />
                </div>{/* End of div with className = header_right  */}
           
            </div>  {/*  End of div with className = Header  */}

            <div className='sidebar'>
                <SidebarRow icon={HomeIcon} title="Home" />
                <SidebarRow icon={ExploreIcon} title="Explore" />
                <SidebarRow icon={SubscriptionIcon} title="Subscriptions" />
                <hr/>
                <SidebarRow icon={VideoLibraryIcon} title="Library" />
                <SidebarRow icon={History} title="History" />
                <SidebarRow icon={OndemandVideo} title="Your Videos"/>
                <SidebarRow icon={WatchLater} title="Watch later"/>
                <SidebarRow icon={ThumbUp} title="Liked Voideos" />
                <SidebarRow icon={ExpandMoreOutlined} title="Show More" />
                <hr/>
                <h4 className='sidebar_heading'>SUBSCRIPTIONS</h4>
                
            </div> {/*  End of div with className = sidebar  */}

  
        </div>
    );
};

export default Header;
