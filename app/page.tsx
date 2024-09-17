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
        <ul className="list-none pl-0 space-y-4">
          <li className="flex items-start">
            <span className="mr-2">1️⃣</span>
            <div>
              <strong>tumbuh.in (P2P Lending):</strong> Built disbursement engine, API for partner connections, and established core P2P processes.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">2️⃣</span>
            <div>
              <strong>DOKU (Payment Gateway):</strong> Delivered initiatives for small-medium market segment, including WhatsApp Link and Jokul Retail, achieving triple-digit MoM user growth.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">3️⃣</span>
            <div>
              <strong>Payfazz (Fazz Agen):</strong> Improved financial services for warungs, reducing subsidy costs by billions of rupiahs and extending runway.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">4️⃣</span>
            <div>
              <strong>Independent Contractor:</strong> Provided financial services consultancy to Finnet and Jamkrindo, focusing on AI implementation and business process optimization.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">5️⃣</span>
            <div>
              <strong>GOTOKO (Unilever and GOTO JV):</strong> Senior Product Manager overseeing core product ecosystem, aligning processes in SKU, Pricing, Inventory, and Marketing Management.
            </div>
          </li>
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
