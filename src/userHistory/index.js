import React from "react";
import hellopic from "../images/Hello.svg"
import {Link} from "react-router-dom";
import { Background,DataContainer,
Welcome,WelcomeText,HeadTiltle,HeadTiltle2,LayoutImage, DivCenter,CenteredDiv,
RowW,ColumnW,ContainerW,BoxW, LabelW,LabelW1, RowW1,FloatingButton

} from "./userhistoryElements";


function UserHistory() {
  // let history = JSON.parse(localStorage.getItem("history"));
  // const apiResponse = { history: history };
  const apiResponse = {history:[
    {
        "TxId": "dc14745e6d4b75f685a3a0b7d1117aa35afb788be0a55a97e822ca483f480d35",
        "Timestamp": {
            "seconds": "1675699803",
            "nanos": 106000000
        },
        "Value": {
            "name": "Ali Imtiaz",
            "address": "harbanspura madina town",
            "units": 20,
            "cnic": "35201-5389-10800"
        }
    }
] }
  var resultHistory = null;
  return (
    <Background>
        <Link to="/user-dashboard">
       <FloatingButton>Dashboard</FloatingButton>
       </Link>
    <DivCenter>
    <Welcome>
      <WelcomeText> 
          <HeadTiltle>History</HeadTiltle>
          <HeadTiltle2>All time transaction history.</HeadTiltle2>
      </WelcomeText>
      <LayoutImage src={hellopic} />
      </Welcome> 
      </DivCenter>
     
      {getHistory(apiResponse)}
      {resultHistory}
      
    </Background>
  );
    
  function getHistory(data) {
    resultHistory = data.history.map((item, key) => {
      const date = new Date(item.Timestamp.seconds * 1000);
      const dateString = date.toLocaleString();
      return (
        <>
        <CenteredDiv>
          
        <DataContainer key={key}>
          
          
          <ContainerW>
          {/* <LabelW>-• Record No: key1 •-</LabelW> */}
            <RowW>
              <ColumnW>
                <LabelW>Name</LabelW>
                <BoxW>{item.Value.name}</BoxW>
              </ColumnW>
              <ColumnW>
                <LabelW>Time Stamp</LabelW>
                <BoxW>{dateString}</BoxW>
              </ColumnW>
            </RowW>
            <RowW>
              <ColumnW>
                <LabelW>Address</LabelW>
                <BoxW>{item.Value.address}</BoxW>
              </ColumnW>
              <ColumnW>
                <LabelW>Units</LabelW>
                <BoxW>{item.Value.units}</BoxW>
              </ColumnW>
            </RowW>
            <RowW1>
              <LabelW1>Transaction Id</LabelW1>
              <BoxW>{item.TxId}</BoxW>
            </RowW1>
          </ContainerW>



        </DataContainer>
        
        </CenteredDiv>
        </>
      );


    });
  }
}

export default UserHistory;
