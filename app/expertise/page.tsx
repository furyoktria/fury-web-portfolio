import React from 'react'
import ExpertiseTable from '../components/ExpertiseTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'My areas of expertise in as Start-up and Business Consultant who already understand on Tech-Startup Scene',
}

const ExpertisePage: React.FC = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Expertise</h1>
      <ExpertiseTable />
    </section>
  )
}

export default ExpertisePage
