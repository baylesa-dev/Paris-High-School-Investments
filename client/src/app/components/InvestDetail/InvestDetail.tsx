import React from 'react'
import {
    Dialog,
    DialogContent,
    Card,
    CardHeader,
    IconButton,
    CardContent,
    List,
    ListItem,
    Grid,
    Paper,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@material-ui/core'
import { Close, Place } from '@material-ui/icons'
import { StaticMap, Marker } from 'react-map-gl'

const formatDate = (date: string) => {
    let d = new Date(date)
    let formatedDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDay() < 10 ? '0' + d.getDay() : d.getDay())
    return (formatedDate)
}

const InvestDetail = (props: any) => {
    let { openState, rowData } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    if (rowData) {
        let viewPort = {
            latitude: rowData.latitude,
            longitude: rowData.longitude,
            zoom: 8
        }
        return (
            <Dialog
                open={openState}
                fullWidth={true}
                fullScreen={fullScreen}
                scroll='body'
                maxWidth='md'>
                <DialogContent>
                    <Card style={{ boxShadow: 'none' }}>
                        <CardHeader
                            title={`Lycée ${rowData.lycee} à ${rowData.ville}`}
                            subheader={rowData.codeuai ? `Code UAI: ${rowData.codeuai}` : ''}
                            action={
                                <IconButton
                                    aria-label="Close"
                                    onClick={props.handleClose}>
                                    <Close />
                                </IconButton>
                            } />
                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid item xs={6} sm={3}>
                                    <Grid container spacing={4} direction='column'>
                                        <Grid item >
                                            <Paper style={{ padding: '10px' }}>
                                                <ListItemText
                                                    primary={rowData.titreoperation}
                                                    secondary={'Titre de l\'opération'} />
                                            </Paper>
                                        </Grid>
                                        <Grid item >
                                            <Paper style={{ padding: '10px' }}>
                                                <ListItemText
                                                    primary={rowData.etat_d_avancement}
                                                    secondary={'Etat d\'avancement'} />
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper style={{ padding: '10px' }}>
                                                <ListItemText
                                                    primary={rowData.annee_d_individualisation}
                                                    secondary={'Année d\'individualiation'} />
                                            </Paper>
                                        </Grid>
                                        <Grid item >
                                            <Paper style={{ padding: '10px' }}>
                                                <ListItemText
                                                    primary={rowData.annee_de_livraison}
                                                    secondary={'Année de livraison'} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper>
                                        <List>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.entreprise}
                                                    secondary='Entreprise' />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.mandataire}
                                                    secondary='Mandataire' />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.maitrise_d_oeuvre}
                                                    secondary={'Maîtrise d\'oeuvre'} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.mode_de_devolution}
                                                    secondary='Mode de dévolution' />
                                            </ListItem>
                                        </List>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper>
                                        <List>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.ppi}
                                                    secondary={'PPI'} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary={formatDate(rowData.notification_du_marche)}
                                                    secondary={'Notification du marché'} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary={rowData.cao_attribution}
                                                    secondary={'CAO Attribution'} />
                                            </ListItem>
                                        </List>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <StaticMap
                                        {...viewPort}
                                        width='100%'
                                        height='30vh'
                                        mapboxApiAccessToken={'pk.eyJ1IjoiYmF5bGVzYSIsImEiOiJjanhtYzVxcncwMjdnM21ydGdqaTM3OWZ3In0.gqd5UG0d0s5gC42JaO8ciQ'}>
                                        <Marker latitude={rowData.latitude} longitude={rowData.longitude}>
                                            <Place style={{ color: '#F28066' }} />
                                        </Marker>
                                    </StaticMap>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        )
    } else {
        return null
    }
}

export default InvestDetail