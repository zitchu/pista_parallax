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
        <p className='font-mono text-center' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        <span className='text-green-700'>P</span>rezado senhor Severin <br/>
        Com gozar que informamos o passar de <span className='text-white'>Frostmorning</span> e seu líder cultista <br/>
        <span className='text-green-700'>A</span> saber das ideias adversas que surgem em Wa<span className='text-green-700'>T</span>erdeep, <br/>
        <span className='text-green-700'>É</span> necessário saber o paradeiro das máscaras crómaticas.<br/>
        O projeto de Neverwin<span className='text-green-700'>T</span>er parece ter <span className='text-green-700'>A</span>vançado a <span className='text-green-700'>P</span>assos rápidos.<br/>
        Nighthill par<span className='text-green-700'>E</span>ce não sabe<span className='text-green-700'>R</span> de nada 
        e agora nos compete observar <br/>
        seus mov<span className='text-green-700'>I</span>mentos. Com relação a <span className='text-blue-900'>Laeral Silverhand</span>,<br/>
        precisamos eliminá-la prontamente. pois ela parece estar encontrando<br/>
        alguns aventureiros. Futuramente escreveremos novamente sobre <br/>
        as próximas etapas da nossa conspiração. Outros parecem tentar sabotar nosso plano, ainda não sabemos se sozinhos ou se com ajuda<br/>
        de outros dra<span className='text-green-700'>Gõ</span>es.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className='font-mono  text-center'>
        Prezado senhor Rosiel, <br/>
        Com pesar que informamos o passar de <span className='text-black'>Lord Meiskar </span> nosso representante. <br/>
        A saber das ideias adversas que surgem em Waterdeep, <br/>
        é necessário saber dos projetos relacionados a taverna.<br/>
        O projeto de Neverwinter parece ter avançado a passos rápidos.<br/>
        <span className='text-black'>Nighthill </span>pediu <span className='text-black'>ajuda</span> a <span className='text-black'>Silverhand </span> 
        e agora nos compete observar <br/>
        seus movimentos. Com relação a <span className='text-black'>Laeral Silverhand</span>,<br/>
        precisamos manter <span className='text-black'>vigilância</span> total pois ela parece estar encontrando<br/>
        alguns <span className='text-black'>aventureiros</span>. Futuramente escreveremos novamente sobre <br/>
        as próximas etapas da nossa colaboração. Outros parecem tentar sabotar nosso plano, ainda não sabemos se <span className='text-black'>sozinhos</span> ou se com ajuda<br/>
        de você sabe quem.
        </p>
      </div>
    </main>
  )
}