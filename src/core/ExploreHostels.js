import React from "react";
import { Col, Row } from "react-bootstrap";
import Base from "./Base";
import { hostelDetails } from "./helper/coreapicalls";
import AH from "../assets/images/ahostel1.jpg";
import BH from "../assets/images/bhostel.jpg";
import CH from "../assets/images/chostel.jpg";
import DH from "../assets/images/dhostel.jpg";
import EH from "../assets/images/ehostel.jpg";
import FH from "../assets/images/fhostel.jpg";
import GH from "../assets/images/ghostel.jpg";
import PG1H from "../assets/images/pg1hostel.jpg";

import HostelCard from "./helper/HostelCard";

function ExploreHostels() {
  const details = hostelDetails().data;
  return (
      <Base title="">
        <HostelCard id="A" name="A Hostel" image={AH} Hosteldetails = {details.ahostel} class = "card" type="2"/>
        <HostelCard id="B" name="B Hostel" image={BH} Hosteldetails = {details.bhostel} class = "card" type="1"/>
        <HostelCard id="C" name="C Hostel" image={CH} Hosteldetails = {details.chostel} class = "card" type="2"/>
        <HostelCard id="D" name="D Hostel" image={DH} Hosteldetails = {details.dhostel} class = "card" type="1"/>
        <HostelCard id="E" name="E Hostel" image={EH} Hosteldetails = {details.ehostel} class = "card" type="2"/>
        <HostelCard id="F" name="F Hostel" image={FH} Hosteldetails = {details.fhostel} class = "card" type="1"/>
        <HostelCard id="G" name="G Hostel" image={GH} Hosteldetails = {details.ghostel} class = "card" type="2"/>
        <HostelCard id="PG1" name="PG1 Hostel" image={PG1H} Hosteldetails = {details.pg1hostel} class = "card" type="1"/>


      </Base>
  );
}

export default ExploreHostels;

