import { NextApiRequest, NextApiResponse } from "next";
import { Polybase } from "@polybase/client";

// For connecting to the database
import db from "../../../polybase/config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    /* 
    Info: URL to the database
    URL : /api/schemas/SampleSchema
    */
    const createResponse = await db.applySchema(`
      
      @public    
      collection SampleCollection2 {
        id: string;
        name: string;
        age: number;
        

        constructor(id: string, name: string, age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
          
        }
      }
    `);

    res
      .status(200)
      .json({ message: "Database SampleCollections created successfully." });
    console.log(res);
  } else {
    res.status(400).json({ message: "Invalid request method." });
  }
}
