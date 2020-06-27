import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'
import Character from '../../components/character'

function CharacterDetail({ character }) {
  console.log(character)
  return (
    <Layout>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div className="container single">
        <Character character={character} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()

  const paths = characters.results.map(character => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterDetail
