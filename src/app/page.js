'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../components/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 150 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p className='font-mono inset-0 -mt-0 ' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            Complemento de frases de modo a gerar uma <span className='text-red-600'>gama de possibilidades que promova </span>
            Desprendimento
          </p>
      </motion.div>

      <div className={styles.body}>
        <p className='font-mono inset-0 -mt-0 '>
          Complemento de frases de modo a gerar uma <span className='text-[#ec4e39]'>gama de possibilidades que promova </span> 
          Desprendimento
        </p>
      </div>

    </main>
  )
}