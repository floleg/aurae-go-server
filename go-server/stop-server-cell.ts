import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);

let cellName = "go-server";

// [ Stop ]
let stopped_out = await cellService.stop(<cells.CellServiceStopRequest>{
    cellName,
    executableName: cellName,
})
