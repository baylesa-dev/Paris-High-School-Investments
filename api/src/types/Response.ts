import { FastifyReply } from 'fastify'
import { ServerResponse } from 'http'

type Response = FastifyReply<ServerResponse>

export default Response
