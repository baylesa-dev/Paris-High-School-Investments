import { boomify } from 'boom'

import { InvestmentModel } from '../data'
import { Request, Response } from '../types'

export const listInvestments = async (req: Request, res: Response) => {
    try {
        return await InvestmentModel.find({})
    } catch (e) {
        throw boomify(e)
    }
}

export const listInvestmentsByCityOrProgress = async (req: Request, res: Response) => {
    try {
        return await InvestmentModel.find({
            $and: [
                { 'ville': { $regex: req.params.city, $options: 'i' } },
                { 'etat_d_avancement': { $regex: req.params.progress, $options: 'i' } }
            ]
        })
    } catch (e) {
        throw boomify(e)
    }
}

export const getInvestment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        return await InvestmentModel.findById(id)
    } catch (e) {
        throw boomify(e)
    }
}