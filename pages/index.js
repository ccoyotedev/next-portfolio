import Head from 'next/head'
import {BlogApi} from '../services/blog'
import BlogPanel from '../components/BlogPanel'

export default function Home({entries}) {
  console.log(entries);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {entries.map(entry => {
          return (
            <BlogPanel
              key={entry.id}
              title={entry.title}
              date={entry.date}
              heroImage={entry.heroImage}
              logo={entry.logo}
              logoWidth={entry.logoWidth}
              description={entry.excerpt}
              link={entry.link}
              color={entry.color}
            />
          )
        })}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const api = new BlogApi();
  const entries = await api.fetchWorkEntries();

  return {
    props: {
      entries,
    },
  }
}


