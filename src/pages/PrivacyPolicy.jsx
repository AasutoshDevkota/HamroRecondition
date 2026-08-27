import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="container-site py-16">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-gray-700">
          <ShieldCheck className="h-4 w-4 text-brand-red" />
          YOUR PRIVACY MATTERS
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-slate-900">
          Privacy <span className="text-brand-red">Policy</span>
        </h1>
        <div className="mt-4 h-1 w-20 bg-brand-red" />
        <p className="mt-4 text-sm text-gray-500">Last updated: August 27, 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600">
          <Section title="1. Introduction">
            Recondition House Nepal ("we", "our", "us") operates this website
            to help buyers and sellers connect for second-hand bikes and
            scooters in Nepal. This Privacy Policy explains how we collect,
            use, and protect your information when you use our platform.
          </Section>

          <Section title="2. Information We Collect">
            <ul className="list-disc space-y-2 pl-5">
              <li>Personal details you provide, such as your name, phone number, and email address, when you register, list a bike, or contact a seller.</li>
              <li>Listing information, including photos, vehicle details, and pricing you submit when selling a bike.</li>
              <li>Usage data, such as pages visited, searches made, and device/browser information collected automatically.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>To connect buyers and sellers and facilitate communication between them.</li>
              <li>To verify listings and maintain the trust and safety of our marketplace.</li>
              <li>To improve our website, respond to inquiries, and provide customer support.</li>
              <li>To send updates related to your listings, inquiries, or account activity.</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            We do not sell your personal information. Contact details may be
            shared between buyers and sellers solely to facilitate a
            transaction. We may share information with service providers who
            help us operate the platform (e.g. hosting, analytics), under
            confidentiality obligations.
          </Section>

          <Section title="5. Data Security">
            We take reasonable technical and organizational measures to
            protect your data. However, no method of transmission over the
            internet is completely secure, and we cannot guarantee absolute
            security.
          </Section>

          <Section title="6. Your Choices">
            You may update or delete your account information at any time by
            contacting us. You may also opt out of promotional communications.
          </Section>

          <Section title="7. Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated "Last updated" date.
          </Section>

          <Section title="8. Contact Us">
            If you have questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:info@reconditionhouse.com.np" className="font-semibold text-brand-red hover:underline">
              info@reconditionhouse.com.np
            </a>.
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}