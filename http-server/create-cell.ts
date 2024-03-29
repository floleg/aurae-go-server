#!/usr/bin/env auraescript

import * as aurae from "../../aurae/auraescript/gen/aurae.ts";
import * as cells from "../../aurae/auraescript/gen/cells.ts";

let client = await aurae.createClient();
let cellService = new cells.CellServiceClient(client);
let cellName = "http-server";

let allocated = await cellService.allocate(<cells.CellServiceAllocateRequest>{
    cell: cells.Cell.fromPartial({
        name: cellName,
        cpu: cells.CpuController.fromPartial({
            weight: 2, // Percentage of CPUs
            max: 1000 * (10 ** 3), // 1 seconds in microseconds
        }),
        memory: cells.MemoryController.fromPartial({
            high: 100000000, //100MB
            max: 500000000, //500MB
        }),
    })
});

console.log('Allocated:', allocated)