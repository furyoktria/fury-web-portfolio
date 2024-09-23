import React from 'react'

const expertiseData = [
  {
    category: 'Financial Technology',
    skills: [
      'Payment Gateway Systems',
      'P2P Lending Platforms',
      'Digital Wallets',
      'Financial API Integration',
      'Regulatory Compliance (FinTech)',
    ],
  },
  {
    category: 'Supply Chain',
    skills: [
      'Inventory Management',
      'SKU Optimization',
      'Pricing Strategies',
      'Logistics Coordination',
      'Supplier Relationship Management',
    ],
  },
]

const ExpertiseTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Skills</th>
          </tr>
        </thead>
        <tbody>
          {expertiseData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 border-b">
                <ul className="list-disc pl-5">
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpertiseTable
