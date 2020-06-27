import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'
import Character from '../components/character'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>
      <h1 className="title">THE RICK AND MORTY</h1>
      <div className="container">
        {characters.results.map(character => (
          <Character key={character.id} character={character}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </Character>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage
