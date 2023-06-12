/* This file conatins initial setup for the polybase db */

// Imports

import { Polybase } from "@polybase/client";

// Namespace setup

const db = new Polybase({
  defaultNamespace: "pt_namespace",
});

export default db;
