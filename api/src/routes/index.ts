import { FastifyInstance } from 'fastify'

import { Route } from '../types'

import Investment from './Investment'

const anonymousRoutes: Route[] = [...Investment]

export const registerAnonymousRoutes = async (
    fastify: FastifyInstance,
    opts: any,
    next: any
) => {
    for (const route of anonymousRoutes) {
        await fastify.route(route)
    }
    next()
}

export const registerRoutes = async (
    fastify: FastifyInstance,
    opts: any,
    next: any
) => {
    fastify.register(registerAnonymousRoutes)
    next()
}

export default registerRoutes