import {
    DefaultBody,
    DefaultHeaders,
    DefaultParams,
    DefaultQuery,
    FastifyRequest
} from 'fastify'
import { IncomingMessage } from 'http'

type Request = FastifyRequest<
    IncomingMessage,
    DefaultQuery,
    DefaultParams,
    DefaultHeaders,
    DefaultBody
>

export default Request
