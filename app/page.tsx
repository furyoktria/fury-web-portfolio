import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fury Oktria Putra Portfolio
      </h1>
      <p className="mb-4">
        {`I’m Fury, ++6 yoe as Product Person who work on Financial Service and Supply Chain scenes in Indonesia. I have several experiences and strongly believe in meeting the expectations especially to crack the financial services and consulting experience in Indonesia:

1️⃣ Helpin tumbuh.in, one of the newest P2P Lending in Indonesia, backed by Antler. My responsibility is to build their own engine for disbursement, a dedicated API to connect with partners, and establish the core-process of the P2P scheme.

2️⃣ I used to work at DOKU, one of the largest Payment Gateway in Indonesia, at that time I had the responsibility of delivering some initiatives for a new segment attempt (small medium market segment) by creating a WhatsApp Link (invoice generator via chatbot WhatsApp) and Jokul Retail (a lite version of Shopify) with user growth MoM three digits percents.

3️⃣ Worked at Payfazz (nowadays, Fazz Agen within Fazz Financial Group), serving warungs who can receive and send payment easily from their phone. I successfully reduced subsidy costs by up to two digits billion rupiahs and made runaway longer than before.

4️⃣ Become an independent contractor (on behalf of Frost and Sullivan) to give financial services conditions to Finnet (Payment Gateway company in Indonesia) and nowadays helping Jamkrindo (credit guarantor company - state-owned enterprise) to make a prominent strategy with artificial intelligence implementation and make their business process become more effective and efficient.

5️⃣ Establish GOTOKO (Joint Venture company between Unilever and GOTO) product ecosystem as Senior Product Manager handles the core product. Working closely with diverse stakeholders to align core business processes on SKU Management, Pricing Management, Inventory Management, and Marketing Management.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
