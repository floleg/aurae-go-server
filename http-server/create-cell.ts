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
            max: 400 * (10 ** 3), // 0.4 seconds in microseconds
        }),
        memory: cells.MemoryController.fromPartial({
            high: 5000000, // 50k
            max: 10000000, // 100k
        })
    })
});
console.log('Allocated:', allocated)