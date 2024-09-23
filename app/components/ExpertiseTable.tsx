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
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Skills</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {expertiseData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">{item.category}</td>
              <td className="py-4 px-6">
                <ul className="list-none space-y-1">
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
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