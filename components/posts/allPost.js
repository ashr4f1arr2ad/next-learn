import PostItem from '@/components/posts/postItem'

// const posts = [
//   {
//     id: 1,
//     title: 'Post 1',
//   },
//   {
//     id: 2,
//     title: 'Post 2',
//   },
// ]

export default function AllPost({ users }) {
  return <div>{users?.length && users.map((user) => <PostItem key={user.id} user={user} />)}</div>
}
