import { FileText } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <main className="container-site py-16">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-gray-700">
          <FileText className="h-4 w-4 text-brand-red" />
          PLEASE READ CAREFULLY
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-slate-900">
          Terms & <span className="text-brand-red">Conditions</span>
        </h1>
        <div className="mt-4 h-1 w-20 bg-brand-red" />
        <p className="mt-4 text-sm text-gray-500">Last updated: August 27, 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600">
          <Section title="1. Acceptance of Terms">
            By accessing or using Recondition House Nepal ("the Platform"),
            you agree to be bound by these Terms & Conditions. If you do not
            agree, please do not use the Platform.
          </Section>

          <Section title="2. Nature of the Platform">
            Recondition House Nepal is a listing platform that connects
            buyers and sellers of second-hand bikes and scooters. We are not
            a party to any transaction between buyers and sellers, and we do
            not guarantee the condition, legality, or ownership of any
            vehicle listed.
          </Section>

          <Section title="3. User Responsibilities">
            <ul className="list-disc space-y-2 pl-5">
              <li>Sellers must provide accurate and truthful information about the vehicle, including condition, ownership, and documentation.</li>
              <li>Buyers are responsible for inspecting a vehicle and verifying documents before completing a purchase.</li>
              <li>Users must not post false, misleading, or fraudulent listings.</li>
              <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
            </ul>
          </Section>

          <Section title="4. Verified Listings">
            "Verified" badges indicate that a listing has passed our basic
            inspection or documentation check at the time of review. This
            does not constitute a guarantee or warranty of the vehicle's
            condition at the time of sale.
          </Section>

          <Section title="5. Transactions">
            All negotiations, payments, and transfers of ownership occur
            directly between buyers and sellers. Recondition House Nepal is
            not responsible for any disputes, losses, or damages arising from
            transactions conducted through the Platform.
          </Section>

          <Section title="6. Prohibited Conduct">
            <ul className="list-disc space-y-2 pl-5">
              <li>Listing stolen, counterfeit, or illegally modified vehicles.</li>
              <li>Harassing, defrauding, or misleading other users.</li>
              <li>Attempting to circumvent the Platform's fees or safety measures.</li>
            </ul>
          </Section>

          <Section title="7. Limitation of Liability">
            To the fullest extent permitted by law, Recondition House Nepal
            shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of the Platform or any transaction
            conducted through it.
          </Section>

          <Section title="8. Termination">
            We reserve the right to suspend or terminate accounts that violate
            these Terms or engage in fraudulent or harmful activity on the
            Platform.
          </Section>

          <Section title="9. Changes to These Terms">
            We may revise these Terms from time to time. Continued use of the
            Platform after changes are posted constitutes acceptance of the
            updated Terms.
          </Section>

          <Section title="10. Contact Us">
            For questions about these Terms, contact us at{" "}
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