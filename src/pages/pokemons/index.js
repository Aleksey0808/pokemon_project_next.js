import Head from "next/head";
import Link from "next/link";
import styles from '../../styles//Pokemons.module.scss'


export const getStaticProps = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
 
    const data = await response.json();

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
          props: {
            pokemons: data
          },
        };
}

const Comics = ({pokemons}) => {
console.log(pokemons.results);
    return (
      <>
      <Head>
        <title>Pokemons</title>
      </Head>
      
      <ul>
        {pokemons && pokemons.results.map(({name, url}) => (
            <li key={name}>
            <Link className={styles.link} href={`/pokemons/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      </>
    );
};

export default Comics;
