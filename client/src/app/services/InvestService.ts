import { InvestModel } from 'app/models'

const ENABLE_RANDOM_ERRORS = false

export class InvestService {
    static getAll(): Promise<InvestModel[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'))
                } else {
                    fetch('http://0.0.0.0:8080/investments')
                        .then(res => res.json())
                        .then(res => {
                            if (res.error) {
                                throw (res.error)
                            } else {
                                resolve(res)
                            }
                        })
                }
            }, 1500)
        })
    }
}
