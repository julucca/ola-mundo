import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido-2.png';
import minhaFoto from 'assets/minha_foto-2.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, Mundo!</h1>
            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Juliana Lucca, estudante de Front-end da Alura. Aqui compartilho minhas aprendizagens nessa jornada dev.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido} 
                src={circuloColorido} 
                aria-hidden={true}
            />
            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto da Juliana Lucca sorrindo." />
        </div>
    </div>
  )
}
