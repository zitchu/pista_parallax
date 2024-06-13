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
        <p className='font-mono text-yellow-600' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        Prezado senhor Severin <br/>
        É com gozar que informamos o passar de <span className='text-green-700'>Frostmorning e seu líder cultista </span>
        A saber das ideias adversas que surgem em Waterdeep, é necessário saber o paradeiro das máscaras crómaticas.
        O projeto de Neverwinter parece ter avançado a passos rápidos. <span className='text-yellow-600'>Nottinghill parece não saber de nada </span>
        E agora nos compete observar seus movimentos.
        Com relação a <span className='text-green-600'>Laeral Silverhand</span>, precisamos eliminá-la prontamente. pois ela parece estar encontrando alguns aventureiros.
        Futuramente escreveremos novamente sobre as próximas etapas da nossa conspiração.
        Outros parecem tentar sabotar nosso plano, ainda não sabemos se sozinhos ou se com ajuda de outros dragões.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className='font-mono '>
        Prezado senhor Rosiel, <br/>
        É com pesar que informamos o passar de <span className='text-yellow-600'>Lord Meiskar nosso representante </span>
        A saber das ideias adversas que surgem em Waterdeep, é necessário saber dos projetos relacionados a taverna.
        O projeto de Neverwinter parece ter avançado a passos rápidos. <span className='text-yellow-600'>Nottinghill pediu ajuda a Silverhand </span>
        E agora nos compete observar seus movimentos.
        Com relação a <span className='text-yellow-600'>Laeral Silverhand</span>, precisamos manter vigilância total pois ela parece estar encontrando alguns aventureiros.
        Futuramente escreveremos novamente sobre as próximas etapas da nossa colaboração.
        Outros parecem tentar sabotar nosso plano, ainda não sabemos se sozinhos ou se com ajuda de você sabe quem.
        </p>
      </div>
    </main>
  )
}