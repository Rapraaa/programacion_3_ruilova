import styles from '../../styles/My_project/ficha_mp.module.css'

export default function CssModuleDemo_mp() {
  return (
    <div className={styles.ficha}>
      <h3 className={styles.titulo}>Ficha con CSS Modules</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Cada clase recibe un nombre unico en el build, asi no choca con las
        clases de otras pantallas de la clinica.
      </p>
      <button className={styles.btn}>Agendar cita</button>
    </div>
  )
}
