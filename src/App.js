// import the airtable ids
import { apiKey, baseId } from "./airtableIds";

import React, { useEffect, useState } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: apiKey }).base(baseId);

function App() {

  const [entries, setEntries] = useState([]);

   //this method pulls in the data
   useEffect(() => {
    //pull in the 'goals' table view data
    base("entries")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => { 
        setEntries(records);
        // console.log(records)
        fetchNextPage();
      });
  }, []);


  let total = 0

  return (
    <div style={{textAlign: "center", fontFamily: "'Roboto', sans-serif"}}>
      <h1>STRYK Work Log</h1>
      <p>Total time worked: {total}

      </p>
      <h3>All Entries</h3>
      {entries.map((entry, index) => (
        <div key={index}>
          <span>🗓{entry.fields.date} </span>
          <span>🕐{entry.fields.minutes} min – </span>
          <span><i>#{entry.fields.tag}</i></span>
          <br/>
          <span><i>{entry.fields.description}</i></span>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default App;
