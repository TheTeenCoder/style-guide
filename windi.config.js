import { defineConfig } from "windicss/helpers";

export default defineConfig({
  shortcuts: {
   'btn': ' py-2 focus:(ring-2 ring-blue-300 outline-none) px-3 border-2 border-gray-200 font-semibold rounded-lg shadow-md',
   'input': 'transition duration-300 border border-black rounded-md shadow-lg px-2 py-1 focus:(ring-2 ring-blue-500) outline-none',
   'select': 'border border-black rounded-lg shadow-lg p-2'
  },  
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        dum: "#000",
      },
    },
  },
  // plugins: [
  //   plugin(({ addComponents, theme }) => {
  //     const buttons = {
  //       '.btn': {
  //         padding: '0.5rem .75rem 0.5rem .75rem',
  //         borderRadius: '.25rem',
  //         border: '1px',
  //         fontWeight: '600',  
  //       }
  //     };
  //     addComponents(buttons);
  //   }),
  // ],
});
