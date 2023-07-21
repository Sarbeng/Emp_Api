import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        fontFamily: {
            'sans': ['DM Sans', 'sans-serif']
          },
        extend: {
            colors: {
                primary:"#FD6100",
                accent:"#360C04",
                secondary:"#F2E9E7",
                text:"#030000",
                background:"#FFFFFF",
                bg_grey:"#F4F4F4"
            },
            fontFamily: {
                'cursive':['Sacramento','cursive']
              },
              fontSize: {
                'display': ['64px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                }],
                'card-title': ['18px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                }],
                'lead-text': ['18px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }],
                'paragraph-text': ['16px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                }],
                'highlight-text': ['16px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }],
                'sub-title': ['40px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                }],
                'section-title': ['20px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                }],
                'section-categories': ['16px', {
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: '900',
                  lineHeight: 'normal',
                }],

              },

        },
    },

    plugins: [forms],
};
