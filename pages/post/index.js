import AllPost from '@/components/posts/allPost'
import { wrapper } from '@/redux/store/store'
import { setCounter, setData } from '@/redux/reducers/counterSlice'
import { useDispatch } from 'react-redux'

// Static Site Generators - SSG
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()

//   return {
//     props: { users: data },
//   }
// }

// Server Side Rendering - SSR
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  store.dispatch(setData(data))

  return {
    // props: { users: data },
  }
})

export default function Post({ users }) {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>All Post</h1>
      <button onClick={() => dispatch(setCounter())}>Count</button>
      {/* <AllPost users={users} /> */}
    </div>
  )
}
