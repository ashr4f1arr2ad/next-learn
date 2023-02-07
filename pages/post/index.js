import AllPost from '@/components/posts/allPost'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { users: data },
  }
}

export default function Post({ users }) {
  return (
    <div>
      <h1>All Post</h1>
      <AllPost users={users} />
    </div>
  )
}
