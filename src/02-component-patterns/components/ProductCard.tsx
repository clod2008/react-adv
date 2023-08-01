import {useState} from 'react'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'


export const ProductCard = () => {

  
  const [counter, setCounter] = useState(0);

  const increseBy = (value: number ) => {
    
    setCounter(prev => Math.max( prev + value, 0 ))
    
  }
  
  return (
    <div className={ styles.productCard }>
        <img className={ styles.productImg } src='./coffee-mug.png' alt='coffee mug'/>
        {/* <img className={ styles.productImg } src={ noImage } alt='noImage'/> */}
        <span className={styles.productDescription}>Coffee Mug</span>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.buttonMinus}
            onClick ={increseBy(-1)}> - </button>
          <div className={styles.countLabel}> {counter} </div>
          <button 
            className={styles.buttonAdd} 
            onClick={increseBy(+1)}> + </button>
        </div>
    </div>
  )
}
