import { createContext } from 'react';

import { useProducts } from '../hooks/useProducts'
import { Product, ProductContexProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext( {} as ProductContexProps )
const  { Provider } = ProductContext

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {
  
  const { counter, increseBy } = useProducts()
  
  return (
    <Provider value={{
      counter,
      increseBy,
      product,
    }}>
      <div 
        className={ `${styles.productCard} ${className}` }
        style={ style }
      >
          { children }
      </div>
   </Provider>
  )
}




