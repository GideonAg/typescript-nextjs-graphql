import { NextApiRequest, NextApiResponse } from "next";

// A function provided by next.js that helps in handling
// cross-origin when accessing your api in a next app (cors)
export default function initMiddleware(middleware: Function) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
