import "./glassCard.scss";

import { useState } from 'react';
import Tilt from "../Tilt";

import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton, Tooltip } from "@mui/material"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

function generateParagraph(credit) {
  var string = "";
  if (credit.amount > 0) {
    string = "You are earning " + formatter.format(credit.amount) + " every " + credit.interval + " from " + credit.target;
  } else {
    string = "You are paying " + formatter.format(credit.amount) + " every " + credit.interval + " to " + credit.target;
  }
  return <p>{string}</p>
}

function generatePriceTooltip(credit) {

  function getTimeAbbreviation(interval) {
    switch (interval) {
      case "year":
        return "yr";
      case "month":
        return "mo";
      case "week":
        return "wk";
      case "day":
        return "day";
      case "hour":
        return "hr";
      default:
        return "?";
    }
  }

  function getDirClass(dir) {
    return dir === "+" ? "positive" : "negative";
  }

  const amt = formatter.format(credit.amount);
  const dir = credit.amount > 0 ? "+" : ""
  const string = dir + amt + " / " + getTimeAbbreviation(credit.interval);
  return <div className={"price " + getDirClass(dir)}>{string}</div>
}

function getDirection(credit) {
  return credit.amount > 0 ? "positive" : "negative";
}



export default function GlassCard({ credit, deleteCredit, freezeCredit }) {

  const [active, setActive] = useState(credit.active);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  async function toggleFreeze() {
    freezeCredit(credit)
    if (isFlashing) { setIsFalling(false); }
    setIsFlashing(true);
    setActive(!active);
    await delay(400);
    setIsFlashing(false);
  }

  async function toggleFalling() {
    setIsFalling(true);
    await delay(1500);
    deleteCredit(credit);
  }

  function getStatusButtons() {
    if (active) {
      return (
        <div className="top-buttons">
          <Tooltip title="Freeze Card">
            <IconButton className="left" onClick={() => toggleFreeze()}>
              <AcUnitTwoToneIcon fontSize="large" color="textSecondary"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Destroy Card">
            <IconButton className="right" onClick={() => toggleFalling()}>
              <DeleteTwoToneIcon fontSize="large" color="textSecondary"/>
            </IconButton>
          </Tooltip>
        </div>
      )
    } else {
      return (
        <div className="top-buttons">
          <Tooltip title="Unfreeze Card">
            <IconButton className="left" onClick={() => toggleFreeze()}>
              <LocalFireDepartmentTwoToneIcon fontSize="large" color="textSecondary"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Destroy Card" onClick={() => toggleFalling()}>
            <IconButton className="right">
              <DeleteTwoToneIcon fontSize="large" color="textSecondary"/>
            </IconButton>
          </Tooltip>
        </div>
      )
    }
  }

  return (
    <Tilt options={{perspective: 1, max: 150, glare: true }} className={"card " + getDirection(credit) + " "  + (active ? "active" : "frozen") + (isFalling ? " falling " : "") + (isFlashing ? " flash " : "") + (isHidden ? "hidden " : "")}>
      <div className="status">
        {getStatusButtons()}
      </div>
      <div className="title">
        <div className="header">{credit.target}</div>
        {generatePriceTooltip(credit)}
      </div>
      <div className="content">
        {generateParagraph(credit)}
        <a href={"#" + credit.target}>Edit</a>
      </div>
    </Tilt>
  )
}
