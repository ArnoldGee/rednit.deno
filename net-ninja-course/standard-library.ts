// uuid module

import { v4, v1 } from "https://deno.land/std@0.91.0/uuid/mod.ts";

const myUuid  = v4.generate();
console.log(myUuid);

const myV1Id = v1.generate();
console.log(myV1Id);
console.log(v1.validate(myV1Id as string))



