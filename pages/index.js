import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicHeader = dynamic(() => import('../components/header.js'), {
  suspense: true,
})

const Summary = dynamic(() => import('../components/summary.js'), {
  suspense: true,
})

const Install = dynamic(() => import('../components/install.js'), {
  suspense: true,
})

const Documentation = dynamic(() => import('../components/documentation.js'), {
  suspense: true,
})

const About = dynamic(() => import('../components/about.js'), {
  suspense: true,
})

export default function Home() {
  return (<>
  
    <Suspense fallback={`Loading...`}>
      <DynamicHeader />
    </Suspense>

    <Suspense fallback={`Loading...`}>
      <Summary />
    </Suspense>

    <Suspense fallback={`Loading...`}>
      <Install />
    </Suspense>

    <Suspense fallback={`Loading...`}>
      <Documentation />
    </Suspense>

    <Suspense fallback={`Loading...`}>
      <About />
    </Suspense>

  </>)
}
