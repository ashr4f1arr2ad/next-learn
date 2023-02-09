import { useRouter } from 'next/router'
import { wrapper } from '@/redux/store/store'
import { setSingleData, singleUserData } from '@/redux/reducers/counterSlice'
import { useSelector } from 'react-redux'

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
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  store.dispatch(setSingleData(data))

  return {
    // props: { user: data },
  }
})

export default function PostDetails() {
  const singleUser = useSelector(singleUserData)

  return (
    <div>
      <h1>{singleUser.name}</h1>
      <p>{singleUser.username}</p>
    </div>
  )
}
