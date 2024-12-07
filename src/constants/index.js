import {barette1, barette2, barette3, barette4} from '../assets/index'
import {hat1, hat2, hat3, hat4} from '../assets/index';
import { hoodie1, hoodie2, hoodie3, hoodie4 } from '../assets/index';
import { scarf1, scarf2, scarf3, scarf4 } from '../assets/index';
import { balaclava1, balaclava2, balaclava3, balaclava4 } from '../assets/index';


export const navLinks = [
    // { href: {About}, label: "about" },//cannot link to a section element, need a whole new page???
    { href: "#calculator", label: "calculator" },
    { href: "#galery", label: "galery" },
    { href: "#contact", label: "contact" },
];

export const statistics = [
    { value: '5h', label: 'Time' },
    { value: '120€', label: 'Wage' },
    { value: '3 skeins', label: 'Materials' },
];

export const galery = [
    {
        id: 1,
        imgUrl: barette1, 
        date: '09.10.2024', 
        title: 'Crochet hat', 
        description: 'Beautiful crochet hat with subtle aesthetics',
        extraImages: [barette1, barette2, barette3, barette4],
        details: 'This crochet hat is made from high-quality yarn and perfect for any season. Comfortable and stylish.',
        shopLink: 'https://teocodess.github.io/fadenfroh/product/1'
    },
    {
        id: 2,
        imgUrl: hoodie3, 
        date: '09.10.2024', 
        title: 'Crochet hat', 
        description: 'Beautiful crochet hat with subtle aesthetics',
        extraImages: [hoodie3, hoodie2, hoodie1, hoodie4],
        details: 'This crochet hat is made from high-quality yarn and perfect for any season. Comfortable and stylish.',
        shopLink: 'https://teocodess.github.io/fadenfroh/product/2'
    },
    {
        id: 3,
        imgUrl: hat1, 
        date: '09.10.2024', 
        title: 'Crochet hat', 
        description: 'Beautiful crochet hat with subtle aesthetics',
        extraImages: [hat1, hat2, hat3, hat4],
        details: 'This crochet hat is made from high-quality yarn and perfect for any season. Comfortable and stylish.',
        shopLink: 'https://teocodess.github.io/fadenfroh/product/3'
    },
    {
        id: 4,
        imgUrl: scarf2, 
        date: '09.10.2024', 
        title: 'Crochet hat', 
        description: 'Beautiful crochet hat with subtle aesthetics',
        extraImages: [scarf1, scarf2, scarf3, scarf4],
        details: 'This crochet hat is made from high-quality yarn and perfect for any season. Comfortable and stylish.',
        shopLink: 'https://teocodess.github.io/fadenfroh/product/4'
    },
    {
        id: 5,
        imgUrl: balaclava3, 
        date: '09.10.2024', 
        title: 'Crochet hat', 
        description: 'Beautiful crochet hat with subtle aesthetics',
        extraImages: [balaclava3, balaclava2, balaclava1, balaclava4],
        details: 'This crochet hat is made from high-quality yarn and perfect for any season. Comfortable and stylish.',
        shopLink: 'https://teocodess.github.io/fadenfroh/product/5'
    }
];