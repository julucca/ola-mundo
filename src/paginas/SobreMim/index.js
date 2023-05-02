import React from 'react';
import styles from './SobreMim.module.css';
import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto-2.jpg';

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>Olá, eu sou a Juliana!</h3>
      <img 
        className={styles.fotoSobreMim}
        src={fotoSobreMim} 
        alt="Foto da Juliana Lucca sorrindo"
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className={styles.paragrafo}>
        Perspiciatis quas cumque itaque illum error eum, libero odio obcaecati porro excepturi fugit, modi debitis placeat, neque quos fuga vel? Reiciendis, officiis.
      </p>
      <p className={styles.paragrafo}>
        Sed reiciendis dolores ab numquam commodi quis ratione similique laborum illum, minus exercitationem impedit suscipit nisi modi eligendi asperiores provident, repellendus incidunt.
      </p>
      <p className={styles.paragrafo}>
        Nulla at voluptatibus dolorum vero tenetur quae distinctio repellendus ut eaque sit magni maxime id repellat neque enim eveniet corrupti, facere laudantium.
      </p>
      <p className={styles.paragrafo}>
        Autem, sunt! Placeat enim quo, unde aspernatur aliquid eum excepturi harum? Possimus id debitis est obcaecati fugit consequuntur culpa sint sit amet.
      </p>
      <p className={styles.paragrafo}>
        Pariatur ducimus totam atque assumenda, est saepe nesciunt at soluta! Quae nesciunt ex quibusdam quia pariatur quas mollitia nemo repellendus repellat ipsam.
      </p>
    </PostModelo>
  )
}
