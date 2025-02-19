import { server } from "@/lib/apolloServer";
import { cors } from "@/modules/middleware/cors";
import { NextApiRequest, NextApiResponse } from "next";

// To prevent next.js from parsing the request body
export const config = {
  api: {
    bodyParser: false,
  },
};

const serverStart = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);
  // schema-wide-middleware

  await serverStart;
  await server.createHandler({ path: "/api/graphql" })(req, res);
  return;
}
