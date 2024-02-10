import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);
let cellName = "go-server";

let started = await cellService.start(<cells.CellServiceStartRequest>{
    cellName: "go-server",
    executable: cells.Executable.fromPartial({
        command: "/home/florent/devel/go-http/main",
        description: "Run a simple http server",
        name: cellName
    })
})
console.log('Started:', started)
