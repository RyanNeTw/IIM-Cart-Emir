/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            padding: {
                page: '6rem',
                small: '0.25rem',
                mid: '0.5rem',
                big: '1rem',
            },
            colors: {
                yellow: '#FFFFFF',
                cyan: '#3A4F41',
                brown: '#543d46',
                dark: '#292830',
            },
            gap: {
                small: '0.25rem',
                mid: '0.5rem',
                big: '1rem',
            },
            textColor: {
                dark: '#292830',
                cyan: '#5da7ae',
            },
        },
    },
    plugins: [],
}
