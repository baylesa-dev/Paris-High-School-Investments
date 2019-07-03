interface LookUpInterface {
    [index: string]: string
}

export const tableHeadCell = (towns: string[], states: string[]) => {
    let lookupTownObj: LookUpInterface = {}
    let lookupStateObj: LookUpInterface = {}
    for (let town of towns) {
        lookupTownObj[town] = town
    }
    for (let state of states) {
        lookupStateObj[state] = state
    }
    const columns: any[] = [
        {
            title: 'Ville',
            field: 'ville',
            lookup: lookupTownObj,
            cellStyle: {
                border: 'none'
            }
        },
        {
            title: 'Lycée',
            field: 'lycee',
            filtering: false,
            cellStyle: {
                border: 'none'
            }
        },
        {
            title: 'Titre Opération',
            field: 'titreoperation',
            filtering: false,
            cellStyle: {
                border: 'none'
            }
        },
        {
            title: 'Livraison',
            field: 'annee_de_livraison',
            filtering: false,
            cellStyle: {
                border: 'none'
            },
        },
        {
            title: 'Etat',
            field: 'etat_d_avancement',
            lookup: lookupStateObj,
            cellStyle: {
                border: 'none'
            },
        }
    ]
    return (
        columns
    )
}

export const tableOptions = {
    padding: 'default',
    exportButton: true,
    search: true,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    actionsColumnIndex: -1,
    loadingType: 'overlay',
    actionsCellStyle: {
        border: 'none'
    },
    filtering: true,
    headerStyle: {
        backgroundColor: '#2D61A6',
        color: '#FFF'
    }
}