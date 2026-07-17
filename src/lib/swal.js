import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BaseSwal = withReactContent(Swal);

const MySwal = {
    ...BaseSwal,
    fire: (...args) => {
        let options = {};
        if (args.length === 1 && typeof args[0] === 'object') {
            options = { ...args[0] };
        } else {
            const [title, html, icon] = args;
            options = { title, html, icon };
        }

        const isDark = document.documentElement.getAttribute("data-theme") === "dark";

        const themedOptions = isDark
            ? {
                  background: '#1f2937', // gray-800
                  color: '#f3f4f6',      // gray-100
                  confirmButtonColor: options.confirmButtonColor || '#0f766e', // teal-700
                  cancelButtonColor: options.cancelButtonColor || '#be123c',   // rose-700
                  ...options
              }
            : {
                  background: '#ffffff',
                  color: '#1f2937',      // gray-800
                  confirmButtonColor: options.confirmButtonColor || '#0d9488', // teal-600
                  cancelButtonColor: options.cancelButtonColor || '#e11d48',   // rose-600
                  ...options
              };

        return BaseSwal.fire(themedOptions);
    }
};

export default MySwal;