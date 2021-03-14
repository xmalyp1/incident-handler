import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ReactDOM from "react-dom";
import Testimonials from "../components/Testimonials";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        //borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    homeIcon: {
        verticalAlign: "bottom",
    },
    heroContent: {
        padding: theme.spacing(22, 12, 15, 18),
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(0, 0, 10, 0),
        color: theme.palette.common.white,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    incidentButton: {
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            background: theme.palette.background.paper,
        },
        display: "block",
        width: 170,
        margin: "auto",
        marginTop: "2.5em",
    }
}));

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];


export default function Home(props) {
    const classes = useStyles();
    const productList = JSON.parse(props.products);
    useEffect(function () {
        console.log(productList)
    })
    return (
        <React.Fragment>
            <CssBaseline/>
            {/* Hero unit */}
            <Box component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="#fff" gutterBottom>
                    Zaregistruj pracovný úraz online
                </Typography>
                <Typography variant="h5" align="center" color="#fff" component="p">
                    Zamestnávateľ je povinný registrovať pracovný úraz, ktorým bola spôsobená pracovná neschopnosť
                    zamestnanca trvajúca viac ako tri dni, ku ktorej došlo následkom pracovného úrazu.
                </Typography>
                <Button className={classes.incidentButton} variant='outlined' color="primary" href="/incident">
                    Registrovať úraz
                </Button>
            </Box>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {productList.map((product, index) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={product.name} xs={12} sm={product.name === 'Unlimited' ? 12 : 6} md={4}>
                            <Card className="product-card">
                                <CardHeader
                                    title={product.name}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={product.name === '10' ? <StarIcon/> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            &euro; {product.price}
                                        </Typography>

                                    </div>
                                    <ul>
                                        <Typography variant="h6" color="textSecondary" align="center">
                                            Počet reportov: {product.credits}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center">
                                            {product.description}
                                        </Typography>
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth
                                            variant={product.name === 'Viacnásobné' ? 'contained' : 'outlined'}
                                            color="primary">
                                        Objednať
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Testimonials/>
        </React.Fragment>
    );
}
if (document.getElementById('home')) {
    const propsContainer = document.getElementById("home-props");
    const props = Object.assign({}, propsContainer.dataset);
    ReactDOM.render(<Home {...props}/>, document.getElementById('home'));
}
