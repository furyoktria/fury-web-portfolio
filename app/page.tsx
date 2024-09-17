import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fury Oktria Putra Portfolio
      </h1>
      <div className="mb-8">
        <p className="mb-4">
          I'm Fury, a Product Person with over 6 years of experience in Financial Services and Supply Chain in Indonesia. My expertise lies in meeting expectations and cracking financial services and consulting challenges.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Key Experiences:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>tumbuh.in (P2P Lending):</strong> Built disbursement engine, API for partner connections, and established core P2P processes.
          </li>
          <li>
            <strong>DOKU (Payment Gateway):</strong> Delivered initiatives for small-medium market segment, including WhatsApp Link and Jokul Retail, achieving triple-digit MoM user growth.
          </li>
          <li>
            <strong>Payfazz (Fazz Agen):</strong> Improved financial services for warungs, reducing subsidy costs by billions of rupiahs and extending runway.
          </li>
          <li>
            <strong>Independent Contractor:</strong> Provided financial services consultancy to Finnet and Jamkrindo, focusing on AI implementation and business process optimization.
          </li>
          <li>
            <strong>GOTOKO (Unilever and GOTO JV):</strong> Senior Product Manager overseeing core product ecosystem, aligning processes in SKU, Pricing, Inventory, and Marketing Management.
          </li>
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
