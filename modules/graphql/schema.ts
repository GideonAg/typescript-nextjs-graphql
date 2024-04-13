import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

const schema = makeSchema({
  types: types,
  contextType: {
    export: "Context",
    module: join(process.cwd(), "./types/context.ts"),
  },
  outputs: {
    schema: join(process.cwd(), "./generated/schema.graphql"),
    typegen: join(process.cwd(), "./generated/nexus-typegen.d.ts"),
  },
});

export { schema };
