/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: {
            light: '#0063b3',
            DEFAULT: '#004B87',
            dark: '#003a69',
          },
          green: {
            light: '#8cd42a',
            DEFAULT: '#78BE20',
            dark: '#62991a',
          }
        },
        slate: {
          950: '#0f172a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-ieee': {
          'background-image': 'linear-gradient(to right, var(--tw-gradient-stops))',
          '--tw-gradient-from': '#004B87',
          '--tw-gradient-to': '#78BE20',
          '--tw-gradient-stops': 'var(--tw-gradient-from), #0063b3, var(--tw-gradient-to)',
        },
        '.text-gradient-ieee': {
          'background-image': 'linear-gradient(to right, #004B87, #0063b3, #78BE20)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.button-ieee': {
          'background-image': 'linear-gradient(to right, #004B87, #78BE20)',
          'color': '#fff',
          'transition': 'all 0.3s ease',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            'background-image': 'linear-gradient(to right, #003a69, #62991a)',
            'box-shadow': '0 10px 15px -3px rgba(0, 98, 155, 0.2)',
          }
        }
      })
    }
  ],
}
