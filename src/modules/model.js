import image from '../assets/image.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from "../classes/blocks";

let text = `Простая и лёгкая модель, где можно сконструировать собственный сайт без лишнеих трудностей.
            Достаточно выбрать нужный блок и вставить его на страницу. Попробуйте! Это легко!`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imgStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: 'Картинка для данного курса',
    }),
    new ColumnsBlock( [
        'Приложение на чистом JS без использования библиотек',
        'Читый код, который не пишут на других курсах',
        'JavaScript - лучший язык для освоения веб',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
        }
    }),
    new TextBlock(text, {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        }
    }),
]