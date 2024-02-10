#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);

let cellName = "http-server";

// [ Free ]
let freed = await cellService.free(<cells.CellServiceFreeRequest>{
    cellName
});
console.log(freed)