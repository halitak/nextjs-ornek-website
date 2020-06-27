import styles from '../components/character.module.css'

function Character({ children, character }) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
      <div className={styles.body}>
        <h2>{children ? children : character.name}</h2>
        <p>
          <small>Status:</small>
          {character.status}
        </p>
        <p>
          <small>Species:</small>
          {character.species}
        </p>
        <p>
          <small>Location:</small>
          {character.location.name}
        </p>
      </div>
    </div>
  )
}

export default Character
