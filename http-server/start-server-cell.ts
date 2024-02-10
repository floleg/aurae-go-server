import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);
let cellName = "http-server";

let started = await cellService.start(<cells.CellServiceStartRequest>{
    cellName: cellName,
    executable: cells.Executable.fromPartial({
        command: "/home/florent/devel/aurae-go-server/http-server/source/target/http-server",
        description: "Run a simple http source",
        name: cellName
    })
})
console.log('Started:', started)
