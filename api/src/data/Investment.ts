import { Document, Model, model, Schema } from 'mongoose'

export type InvestmentSchemaType = {
    titreoperation: string,
    entreprise: string,
    annee_de_livraison: number,
    ville: string,
    mandataire: string,
    ppi: string,
    lycee: string,
    notification_du_marche: number,
    codeuai: string,
    longitude: number,
    etat_d_avancement: string,
    montant_des_ap_votes_en_meu: number,
    cao_attribution: number,
    latitude: number,
    maitrise_d_oeuvre: string,
    mode_de_devolution: string,
    annee_d_individualisation: number,
    enveloppe_prev_en_meu: number

}

export const InvestmentSchema: Schema<InvestmentSchemaType> = new Schema<InvestmentSchemaType> ({
    titreoperation: String,
    entreprise: String,
    annee_de_livraison: Date,
    ville: String,
    mandataire: String,
    ppi: String,
    lycee: String,
    notification_du_marche: Date,
    codeuai: String,
    longitude: Number,
    etat_d_avancement: String,
    montant_des_ap_votes_en_meu: Number,
    cao_attribution: Date,
    latitude: Number,
    maitrise_d_oeuvre: String,
    mode_de_devolution: String,
    annee_d_individualisation: Date,
    enveloppe_prev_en_meu: Number
})

export type InvestmentModelType = InvestmentSchemaType & Document

export const InvestmentModel: Model<InvestmentModelType> = model<InvestmentModelType>(
    'Investment',
    InvestmentSchema
)

export default InvestmentModel