// Import Modules & Components
import { useRouter } from 'next/router';
// Import Prisma Client
import prisma from 'lib/prisma';

// getStaticPaths
export async function getStaticPaths() {
  const res = await prisma.project.findMany()
  const projects = await JSON.parse(JSON.stringify(res))

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { slug: project.Slug },
  }))
  return {
    paths, fallback: false
  };
}
// getStaticProps
export async function getStaticProps({ params }) {
  // Prisma SQL lookup
  const data = await prisma.project.findFirst({
    where: {
      Slug: params.slug
    },
    include: {
      DonationCategory: true
    }
  })
  // Stringify and Pars to eliminate Date and Decimal serialization error
  const dataJSON = await JSON.parse(JSON.stringify(data))

  return {
    props: {
      project: dataJSON
    },
  };
}

export default function ProjectPage({project}) {
  
  return (
    <>
      <div>
        Projekt: {project.AmountTarget}
      </div>
    </>
  )
}