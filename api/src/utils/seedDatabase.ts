import * as fs from 'fs'
import * as path from 'path'

import { InvestmentModel, InvestmentSchemaType } from '../data'

const seedDatabase = async () => {
    try {
        const res = await InvestmentModel.find({})
        if (res.length) {
            return
        }
    } catch (err) {
        throw (err)
    }

    console.info('Seeding database...')

    const data = fs.readFileSync(path.join(__dirname, '../../data/dataset.json'), 'utf8')
    if (data) {
        const parsedData = JSON.parse(data)
        parsedData.forEach((element: InvestmentSchemaType) => {
            const newInvestment = new InvestmentModel(element)
            try {
                newInvestment.save()
            } catch (err) {
                throw (err)
            }
        })
    }

    console.info('Seeded database successfully.')
}

export default seedDatabase