import styles from '../styles/LoadMore.module.scss'
import { animateScroll as scroll } from 'react-scroll'
import { useState } from 'react'

const LoadMorePokemon = ({ getPokemon }) => {
  const [limit, setLimit] = useState(40)

  const loadMore = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=5`,
    )
    const data = await response.json()
    setLimit((prevState) => prevState + 5)

    getPokemon(data.results)
    scroll.scrollToBottom()
  }

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.button} type="button" onClick={loadMore}>
          Load More
        </button>
      </div>
    </>
  )
}

export default LoadMorePokemon
