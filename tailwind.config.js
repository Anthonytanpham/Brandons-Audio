/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          red: '#CC0000',
          white: '#FFFFFF',
          silver: '#C0C0C0',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'sans': ['Orbitron', 'ui-sans-serif', 'system-ui'],
        'display': ['Rajdhani', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #CC0000, 0 0 10px #CC0000, 0 0 15px #CC0000' },
          '100%': { boxShadow: '0 0 10px #CC0000, 0 0 20px #CC0000, 0 0 30px #CC0000' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'red-black-gradient': 'linear-gradient(135deg, #CC0000 0%, #660000 50%, #000000 100%)',
      }
    },
  },
  plugins: [],
} 