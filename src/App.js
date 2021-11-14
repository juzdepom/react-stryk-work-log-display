// import the airtable ids
import { apiKey, baseId } from "./airtableIds";

import React, { useEffect, useState } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: apiKey }).base(baseId);

function App() {

   //this method pulls in the data
   useEffect(() => {
    //pull in the 'goals' table view data
    base("entries")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => { 
        console.log(records)
        fetchNextPage();
      });
  }, []);

  return (
    <div>
    </div>
  );
}

export default App;
