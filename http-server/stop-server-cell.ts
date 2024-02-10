#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae";
import * as cells from "../../aurae/auraescript/gen/cells";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);

let cellName = "http-server";

// [ Stop ]
let stopped_out = await cellService.stop(<cells.CellServiceStopRequest>{
    cellName,
    executableName: cellName,
})
