import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Link href="/help">
        <a title="About Page">Help Page</a>
      </Link>
      <p>Next.js App</p>

      <style jsx global>{`
      html,
      body,
      :root,
      iframe {
        height: 100%;
      }
    `}</style>
    </>
  )
}