#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae";
import * as cells from "../../aurae/auraescript/gen/cells";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);
let cellName = "http-server";

let started = await cellService.start(<cells.CellServiceStartRequest>{
    cellName: cellName,
    executable: cells.Executable.fromPartial({
        command: "/home/florent/devel/go-http/main",
        description: "Run a simple http source",
        name: cellName
    })
})
console.log('Started:', started)
