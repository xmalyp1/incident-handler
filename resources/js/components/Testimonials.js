import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Card, CardActions} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    testimonialsContainer: {
        padding: theme.spacing(18, 12, 18, 12),
        width: "100%",
        height: 500,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(0, 0, 10, 0),
        color: theme.palette.common.white,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    testimonialsCard: {
        maxWidth: 600,
        margin: "auto",
    },
    testimonialAuthor: {
        float: "right",
    },
    testimonialContent: {
        margin: 10,
    }
}));

const testimonials = [
    {
        author: "Patrik Malý",
        position: "Podnikateľ",
        text: "Vďaka tomuto riešeniu sa mi rýchlo podarilo vyriešiť všetky povinnosti zamestnávateľa pri riešení pracovného úrazu.",
        imgSrc: "/img/testimonials/maly.png",
    },
    {
        author: "Igor Kozel",
        position: "Bezpečnostný technik",
        text: "Tento nástroj poskytuje jednoduché riešenie v zložitých životných situáciach. Umožňuje generovať všetky potrebné dokumenty, potrebné pri riešení pracovného úrazu.",
        imgSrc: "/img/testimonials/kozel.jpg"
    },
    {
        author: "Roman Stražanec",
        position: "Podnikateľ",
        text: "Rychle generovanie všetkých potrebných dokumentov. Nie je potrebné ich hľadať po rôznych iných stránkach.",
        imgSrc: ""
    }
];

function TestimonialPage(props) {
    return (
        <Card className={props.styleClasses.testimonialsCard}>
            <CardContent className={props.styleClasses.testimonialContent}>
                <Typography variant="subtitle1" component="p">
                    &bdquo; {props.testimonial.text} &rdquo;
                </Typography>
            </CardContent>
            <CardActions className={props.styleClasses.testimonialAuthor}>
                <Avatar alt={props.testimonial.author} src={props.testimonial.imgSrc}/>
                <Typography variant="caption" gutterBottom>
                    {props.testimonial.author} <br/> {props.testimonial.position}
                </Typography>
            </CardActions>
        </Card>
    );
}

let index = 0;

function loadTestimonial() {
    let length = testimonials.length;
    let testimonial = testimonials[(index % length + length) % length];
    index = index + 1;
    return testimonial;
}

export default function Testimonials() {
    const classes = useStyles();
    const [testimonial, setTestimonial] = useState(loadTestimonial);
    useEffect(function () {
        $('.carousel').carousel(0);
    })
    return (
        <React.Fragment>
            <CssBaseline/>
            <div id="carouselExampleIndicators"
                 className={"carousel slide " + classes.testimonialsContainer}
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    {testimonials.map((testimonialItem, index) => {
                        return <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index}/>
                    })}
                </ol>
                <div className="carousel-inner">
                    {testimonials.map((item, index) => {
                        let style = index === 1 ? 'carousel-item active' : 'carousel-item';
                        console.log(style)
                        return <div key={index} className={style}>
                            <TestimonialPage styleClasses={classes} testimonial={item}/>
                        </div>
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>)
}


