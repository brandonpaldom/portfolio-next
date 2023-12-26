export async function getProject(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
