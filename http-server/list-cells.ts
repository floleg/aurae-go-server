import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);

// [ List cellService ]
let listed = await cellService.list(<cells.CellServiceListRequest>{})
console.log('Listed:', listed)
