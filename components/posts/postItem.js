import Link from 'next/link'

export default function PostItem({ user }) {
  return (
    <Link href={`post/${user.id}`}>
      <div>{user.name}</div>
      <div>{user.username}</div>
    </Link>
  )
}
