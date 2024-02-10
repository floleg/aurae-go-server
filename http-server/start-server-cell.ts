#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);
let cellName = "http-server";

let started = await cellService.start(<cells.CellServiceStartRequest>{
    cellName: cellName,
    executable: cells.Executable.fromPartial({
        command: "/home/florent/devel/aurae-go-server/http-server/source/target/http-server",
        description: "Run a simple http server",
        name: "go-server"
    })
})
console.log('Started:', started)

let started_out = await cellService.start(<cells.CellServiceStartRequest>{
    cellName,
    executable: cells.Executable.fromPartial({
        command: "/usr/bin/echo 'hello world'",
        description: "outputs a message to stdout",
        name: "echo-stdout"
    })
})
console.log(started_out)