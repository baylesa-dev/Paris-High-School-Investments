import { HTTPMethod } from 'fastify'

import Request from './Request'
import Response from './Response'

type Route = {
  method: HTTPMethod
  url: string
  handler: (req: Request, res: Response) => Promise<any>
}

export default Route
