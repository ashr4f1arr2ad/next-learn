import { useRouter } from 'next/router'

// When using getStaticProps
// export const getStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()

//   const paths = data.map((user) => {
//     return {
//       params: { id: user.id.toString() },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

// Static Site Generators - SSG
// export const getStaticProps = async (context) => {
//   const id = context.params.id
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   const data = await res.json()

//   return {
//     props: { user: data },
//   }
// }

// Server Side Rendering - SSR
export const getServerSideProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { user: data },
  }
}

export default function PostDetails({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.username}</p>
    </div>
  )
}
