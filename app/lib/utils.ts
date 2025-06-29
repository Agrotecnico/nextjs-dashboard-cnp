import { Revenue } from './definitions';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("es-AR"/* 'en-US' */, {
    style: 'currency',
    currency: "ARS" /* 'USD' */,
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "es-AR" /* 'en-US' */,
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric'/* 'short' */,
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isUrl= (texto: string) : boolean => { 
  const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9-./?%&=]*)?$/; 
  return regex.test(texto); 
}

//Generación de una Cadena Aleatoria
export const generarClaveUnica= (longitud: number) => { 
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  let clave = ''; 
  for (let i = 0; i < longitud; i++) { 
    const index = Math.floor(Math.random() * caracteres.length); 
    clave += caracteres[index]; 
  } 
  return clave; 
}




// export const guardarConsulta = (buttonRef): void => {
//   if (buttonRef.current) buttonRef.current.click();
// };

