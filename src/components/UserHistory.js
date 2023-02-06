import React from "react";

function UserHistory() {
  let history = JSON.parse(localStorage.getItem("history"));
  const apiResponse = { history: history };
  var resultHistory = null;
  return (
    <div>
      {getHistory(apiResponse)}
      {resultHistory}
    </div>
  );

  function getHistory(data) {
    resultHistory = data.history.map((item, key) => {
      const date = new Date(item.Timestamp.seconds * 1000);
      const dateString = date.toLocaleString();
      return (
        <div key={key}>
          <p>Name: {item.Value.name}</p>
          <p>Transaction Id :{item.TxId}</p>
          <p>Time: {dateString}</p>
          <p>Address: {item.Value.address}</p>
          <p>Units: {item.Value.units}</p>
        </div>
      );
    });
  }
}

export default UserHistory;
