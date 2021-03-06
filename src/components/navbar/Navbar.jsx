// Style imports
import './navbar.scss';

// Library imports
import { Typography, IconButton, List } from "@mui/material"
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';

import { signOutUser } from '../../Firebase'


export default function Navbar() {

  async function handleSignOut() {
    signOutUser().then(() => {
      localStorage.removeItem('budgeteer:user');
      localStorage.removeItem('budgeteer:credits');
      window.location = "/home";
    });
  }

  return (
    <div className="navbar">
      <List className="nav-items">
        <li className="item">
          <IconButton className="button logo" href="/home" color="secondary">
            <Typography className="item-text">Budgeteer</Typography>
            <RocketLaunchTwoToneIcon className="item-icon rotate" fontSize="large"/>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="/graph" color="secondary">
            <TimelineTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Graph</Typography>
          </IconButton>
        </li>
        <div className="divider"/>
        <li className="item">
          <IconButton className="button" href="/wallet" color="secondary">
            <AccountBalanceWalletTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">My Wallet</Typography>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" onClick={() => handleSignOut()} color="textPrimary">
            <MeetingRoomTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Sign Out</Typography>
          </IconButton>
        </li>
      </List>
    </div>
  )
}
