#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);

let cellName = "http-server";

// [ Stop ]
let stopped_http_server = await cellService.stop(<cells.CellServiceStopRequest>{
    cellName,
    executableName: "go-server",
})
console.log(stopped_http_server)

// [ Stop ]
let stopped_out = await cellService.stop(<cells.CellServiceStopRequest>{
    cellName,
    executableName: "echo-stdout",
})
console.log(stopped_out)
