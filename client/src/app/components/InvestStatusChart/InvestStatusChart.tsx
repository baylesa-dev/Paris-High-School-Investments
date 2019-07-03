import React from 'react'

import PieChart from 'react-minimal-pie-chart'
import {
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText
} from '@material-ui/core'

const InvestStatusChart = (props: any) => {
    if (!props.invests || props.invests.length === 0)
        return null
    const { invests } = props
    const data = [
        {
            title: 'Opérations livrées',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Opération livrée' ? ++acc : acc, 0),
            color: '#2d61a6'
        },
        {
            title: 'En Chantier',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'En Chantier' ? ++acc : acc, 0),
            color: '#6983ba'
        },
        {
            title: 'Etude de maîtrise d\'œuvre',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Etude de maîtrise d\'œuvre' ? ++acc : acc, 0),
            color: '#9aa8ce'
        },
        {
            title: 'Sélection entreprise',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Sélection entreprise' ? ++acc : acc, 0),
            color: '#c8cee2'
        },
        {
            title: 'Sélection maîtrise d\'œuvre',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Sélection maîtrise d\'œuvre' ? ++acc : acc, 0),
            color: '#f6f6f6'
        },
        {
            title: 'Sélection mandataire',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Sélection mandataire' ? ++acc : acc, 0),
            color: '#fbd9d1'
        },
        {
            title: 'Etudes et diagnostics',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Etudes et diagnostics' ? ++acc : acc, 0),
            color: '#fbbcac'
        },
        {
            title: 'Suspendue',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Suspendue' ? ++acc : acc, 0),
            color: '#f89e88'
        },
        {
            title: 'Abandonné',
            value: invests.reduce((acc: number, cur: any) =>
                cur.etat_d_avancement === 'Abandonné' ? ++acc : acc, 0),
            color: '#f28066'
        }
    ]

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', boxShadow: 'none' }}>
            <CardHeader
                title={'Répartition des états d\'avancement'} />
            <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PieChart
                        data={data}
                        animate={true} />
                </div>
                <div style={{ flex: 1, alignItems: 'center' }}>
                    {data.map((elem: any, index: number) => {
                        let p = 100 * elem.value / invests.length
                        return (
                            <List dense={true} key={index}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ color: elem.color === '#f6f6f6' ? '#c6c6c6' : '#FFF', backgroundColor: elem.color, padding: '2px' }}>
                                            {`${Math.round(p)}%`}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={elem.title} />
                                </ListItem>
                            </List>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}

export default InvestStatusChart