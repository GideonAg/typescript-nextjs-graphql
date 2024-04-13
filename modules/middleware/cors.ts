import Cors from "cors";
import initMiddleware from "./initMiddleware";

// Makes use of initMiddleware function provided by
// next.js for handling cors issues on the server
const cors = initMiddleware(
  Cors({
    credentials: true,
    origin: ["https://studio.apollographql.com"],
  })
);

export { cors };
