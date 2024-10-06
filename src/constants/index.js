import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets";
import {thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, bigShoe1, bigShoe2, bigShoe3} from '../assets/index'
import About from '../sections/About'
import { galery1, galery2, galery3, crochetProject } from "../assets";
import Galery from '../sections/Galery'

export const navLinks = [
    // { href: {About}, label: "about" },//cannot link to a section element, need a whole new page???
    { href: "#calculator", label: "calculator" },
    { href: "#galery", label: "galery" },
    { href: "#contact", label: "contact" },
];

export const shoes = [ //replace imgs and banners to fit
    {
        thumbnail: thumbnailShoe1,
        bigShoe:  bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '5h', label: 'Time' },
    { value: '120€', label: 'Wage' },
    { value: '3 skeins', label: 'Materials' },
];

export const galery = [
    {
        index: 1,
        imgUrl: galery1, 
        date: '07.08.2024', 
        title: 'Crochet Flower', 
        description: 'Beautiful crochet flower with subtle aesthetics'
    },
    {
        index: 2,
        imgUrl: galery2, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    },
    {
        index: 3,
        imgUrl: galery3, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    },
    {
        index: 4,
        imgUrl: galery1, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    },
    {
        index: 5,
        imgUrl: galery1, 
        date: '07.08.2024', 
        title: 'Crochet Flower', 
        description: 'Beautiful crochet flower with subtle aesthetics'
    },
    {
        index: 6,
        imgUrl: galery2, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    },
    {
        index: 7,
        imgUrl: galery3, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    },
    {
        index: 8,
        imgUrl: galery1, 
        date: '07.08.2024', 
        title: 'Crochet Fruit', 
        description: 'Try out summer fresh crochet fruits'
    }
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];