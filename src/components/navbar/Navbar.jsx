// Style imports
import './navbar.scss';

// Library imports
import { Typography, IconButton } from "@mui/material"
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';

// Component imports
import Logo from "../../assets/images/Logo128.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-items">
        <li className="item">
          <IconButton className="button logo" href="#" color="secondary">
            <Typography className="item-text">Budgeteer</Typography>
            <RocketLaunchTwoToneIcon className="item-icon rotate" fontSize="large"/>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="#" color="secondary">
            <TimelineTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Graph</Typography>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="#incomes" color="secondary">
            <AddCircleTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Incomes</Typography>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="#expenses" color="secondary">
            <RemoveCircleTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Expenses</Typography>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="#wallet" color="secondary">
            <AccountBalanceWalletTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">My Wallet</Typography>
          </IconButton>
        </li>
        <li className="item">
          <IconButton className="button" href="#logout" color="secondary">
            <MeetingRoomTwoToneIcon className="item-icon" fontSize="large"/>
            <Typography className="item-text">Sign Out</Typography>
          </IconButton>
        </li>
      </ul>
    </div>
  )
}