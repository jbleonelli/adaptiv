import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Statement — Adaptiv Systems",
  description:
    "Adaptiv Systems' Privacy Statement: how we collect, use, share, store, and protect your personal information, and your rights as a data subject.",
};

const SECTION_HEADING =
  "text-h4 text-[#111827] mt-12 mb-4 leading-snug scroll-mt-24";
const P = "mb-4";
const SUB_HEADING = "text-base font-semibold text-[#111827] mt-6 mb-3";

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="// LEGAL"
      title="Privacy Statement"
      updated="Effective Date: July 25, 2024"
    >
      {/* Table of contents */}
      <nav className="mb-12 p-6 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[#f8f9fb] text-sm">
        <p className="font-semibold text-[#111827] mb-3 text-xs uppercase tracking-widest">
          Contents
        </p>
        <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[#4b5563] list-decimal list-inside">
          <li><a href="#introduction" className="hover:text-[#FF00B2]">Introduction</a></li>
          <li><a href="#data-protection" className="hover:text-[#FF00B2]">Data Protection Requests</a></li>
          <li><a href="#collection" className="hover:text-[#FF00B2]">How we collect and use your personal information</a></li>
          <li><a href="#website-use" className="hover:text-[#FF00B2]">Use of the Adaptiv Systems Website</a></li>
          <li><a href="#cookies" className="hover:text-[#FF00B2]">Cookies and tracking technologies</a></li>
          <li><a href="#third-parties" className="hover:text-[#FF00B2]">Sharing information with third parties</a></li>
          <li><a href="#transfers" className="hover:text-[#FF00B2]">Transferring personal data to the U.S.</a></li>
          <li><a href="#rights" className="hover:text-[#FF00B2]">Data Subject rights</a></li>
          <li><a href="#retention" className="hover:text-[#FF00B2]">Data storage and retention</a></li>
          <li><a href="#children" className="hover:text-[#FF00B2]">Children&rsquo;s data</a></li>
          <li><a href="#contact" className="hover:text-[#FF00B2]">Questions, concerns or complaints</a></li>
        </ol>
      </nav>

      <h2 id="introduction" className={SECTION_HEADING}>Introduction</h2>
      <p className={P}>
        Adaptiv Systems is an Industrial IoT technology company. We design, build, deploy
        and maintain exclusive IIoT ecosystems for our clients.
      </p>
      <p className={P}>
        We understand that you are aware of and care about your own personal privacy
        interests, and we take that seriously. This Privacy Notice describes Adaptiv
        Systems, Inc.&rsquo;s policies and practices regarding its collection and use of
        your personal data, and sets forth your privacy rights. We recognize that
        information privacy is an ongoing responsibility, and so we will from time to
        time update this Privacy Notice as we undertake new personal data practices or
        adopt new privacy policies.
      </p>

      <h2 id="data-protection" className={SECTION_HEADING}>Data Protection Requests</h2>
      <p className={P}>
        Adaptiv Systems is headquartered in New York, NY, in the United States. If you
        have any questions or concerns about Adaptiv&rsquo;s personal data policies or
        practices, or you would like to exercise your privacy rights, please direct
        your query to:{" "}
        <a href="mailto:privacy@adaptiv.systems" className="text-[#FF00B2] hover:underline">
          privacy@adaptiv.systems
        </a>
      </p>

      <h2 id="collection" className={SECTION_HEADING}>
        How we collect and use (process) your personal information
      </h2>
      <p className={P}>
        Adaptiv Systems collects personal information about its website visitors and
        customers. With a few exceptions, this information is generally limited to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1 text-[#4b5563]">
        <li>name</li>
        <li>job title</li>
        <li>employer name</li>
        <li>work address</li>
        <li>work email</li>
        <li>work phone number</li>
      </ul>
      <p className={P}>We use this information to provide prospects and customers with services.</p>
      <p className={P}>
        We do not sell personal information to anyone and only share it with third
        parties who are facilitating the delivery of our services.
      </p>
      <p className={P}>
        From time to time, Adaptiv Systems receives personal information about
        individuals from third parties. Typically, information collected from third
        parties will include further details on your employer or industry. We may also
        collect your personal data from a third party website (e.g. LinkedIn).
      </p>

      <h2 id="website-use" className={SECTION_HEADING}>Use of the Adaptiv Systems Website</h2>
      <p className={P}>
        As is true of most other websites, Adaptiv Systems&rsquo;s website collects
        certain information automatically and stores it in log files. The information
        may include internet protocol (IP) addresses, the region or general location
        where your computer or device is accessing the internet, browser type, operating
        system and other usage information about the use of Adaptiv System&rsquo;s
        website, including a history of the pages you view. We use this information to
        help us design our site to better suit our users&rsquo; needs. We may also use
        your IP address to help diagnose problems with our server and to administer our
        website, analyze trends, track visitor movements, and gather broad demographic
        information that assists us in identifying visitor preferences.
      </p>
      <p className={P}>
        Adaptiv Systems has a legitimate interest in understanding how members,
        customers and potential customers use its website. This assists Adaptiv Systems
        with providing more relevant products and services, with communicating value to
        our sponsors and corporate members, and with providing appropriate staffing to
        meet member and customer needs.
      </p>

      <h2 id="cookies" className={SECTION_HEADING}>Cookies and tracking technologies</h2>
      <p className={P}>
        Adaptiv Systems does not make use of cookies or other tracking technologies in
        its website.
      </p>

      <h2 id="third-parties" className={SECTION_HEADING}>
        Sharing information with third parties
      </h2>
      <p className={P}>
        The personal information Adaptiv Systems collects from you is stored in one or
        more databases hosted by third parties located in the United States. These third
        parties do not use or have access to your personal information for any purpose
        other than cloud storage and retrieval. On occasion, Adaptiv Systems engages
        third parties to send information to you, including information about our
        products, services, and events.
      </p>
      <p className={P}>
        A list of our third party sub-processors can be found here:{" "}
        <a
          href="https://app.vanta.com/adaptiv.company/trust/st3xri2hma9dieqb311wqa/subprocessors"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF00B2] hover:underline break-words"
        >
          Vanta sub-processor list
        </a>
      </p>
      <p className={P}>
        We do not otherwise reveal your personal data to non-Adaptiv Systems persons or
        businesses for their independent use unless: (1) you request or authorize it;
        (2) it&rsquo;s in connection with Adaptiv-hosted and Adaptiv co-sponsored
        conferences as described above; (3) the information is provided to comply with
        the law (for example, compelled by law enforcement to comply with a search
        warrant, subpoena, or court order), enforce an agreement we have with you, or
        to protect our rights, property or safety, or the rights, property or safety of
        our employees or others; (4) the information is provided to our agents, vendors
        or service providers who perform functions on our behalf; (5) to address
        emergencies or acts of God; or (6) to address disputes, claims, or to persons
        demonstrating legal authority to act on your behalf. We may also gather
        aggregated data about our services and website visitors and disclose the
        results of such aggregated (but not personally identifiable) information to our
        partners, service providers, advertisers, and/or other third parties for
        marketing or promotional purposes.
      </p>
      <p className={P}>
        The Adaptiv Systems website connects with third party services such as Facebook,
        LinkedIn, Twitter and others. If you choose to share information from the
        Adaptiv Systems website through these services, you should review the privacy
        policy of that service. If you are a member of a third party service, the
        aforementioned connections may allow that service to connect your visit to our
        site to your personal data.
      </p>

      <h2 id="transfers" className={SECTION_HEADING}>
        Transferring personal data to the U.S.
      </h2>
      <p className={P}>
        Adaptiv Systems has its headquarters in the United States. Information we
        collect about you will be processed in the United States. By using Adaptiv
        Systems&rsquo;s services, you acknowledge that your personal information will
        be processed in the United States. The United States has not sought nor
        received a finding of &ldquo;adequacy&rdquo; from the European Union under
        Article 45 of the GDPR. Pursuant to Article 46 of the GDPR, Adaptiv Systems is
        providing for appropriate safeguards by entering binding, standard data
        protection clauses, enforceable by data subjects in the EEA and the UK. These
        clauses have been enhanced based on the guidance of the European Data
        Protection Board and will be updated when the new draft model clauses are
        approved.
      </p>
      <p className={P}>
        Depending on the circumstance, Adaptiv Systems also collects and transfers to
        the U.S. personal data with consent; to perform a contract with you; or to
        fulfill a compelling legitimate interest of Adaptiv Systems in a manner that
        does not outweigh your rights and freedoms. Adaptiv Systems endeavors to apply
        suitable safeguards to protect the privacy and security of your personal data
        and to use it only consistent with your relationship with Adaptiv Systems and
        the practices described in this Privacy Statement. Adaptiv Systems also enters
        into data processing agreements and model clauses with its vendors whenever
        feasible and appropriate. Since it was founded, Adaptiv Systems has received
        zero government requests for information.
      </p>
      <p className={P}>
        For more information or if you have any questions, please contact us at{" "}
        <a href="mailto:privacy@adaptiv.systems" className="text-[#FF00B2] hover:underline">
          privacy@adaptiv.systems
        </a>
      </p>

      <h2 id="rights" className={SECTION_HEADING}>Data Subject rights</h2>
      <p className={P}>
        The European Union&rsquo;s General Data Protection Regulation (GDPR) and other
        countries&rsquo; privacy laws provide certain rights for data subjects. Data
        Subject rights under GDPR include the following:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1 text-[#4b5563]">
        <li>Right to be informed</li>
        <li>Right of access</li>
        <li>Right to rectification</li>
        <li>Right to erasure</li>
        <li>Right to restrict processing</li>
        <li>Right of data portability</li>
        <li>Right to object</li>
        <li>Rights related to automated decision making including profiling</li>
      </ul>
      <p className={P}>
        This Privacy Notice is intended to provide you with information about what
        personal data Adaptiv Systems collects about you and how it is used.
      </p>
      <p className={P}>
        If you wish to confirm that Adaptiv Systems is processing your personal data,
        or to have access to the personal data Adaptiv Systems may have about you,
        please contact us.
      </p>
      <p className={P}>
        You may also request information about: the purpose of the processing; the
        categories of personal data concerned; who else outside Adaptiv Systems might
        have received the data from Adaptiv Systems; what the source of the information
        was (if you didn&rsquo;t provide it directly to Adaptiv Systems); and how long
        it will be stored. You have a right to correct (rectify) the record of your
        personal data maintained by Adaptiv Systems if it is inaccurate. You may
        request that Adaptiv Systems erase that data or cease processing it, subject to
        certain exceptions. You may also request that Adaptiv Systems cease using your
        data for direct marketing purposes. In many countries, you have a right to
        lodge a complaint with the appropriate data protection authority if you have
        concerns about how Adaptiv Systems processes your personal data. When
        technically feasible, Adaptiv Systems will&mdash;at your request&mdash;provide
        your personal data to you.
      </p>
      <p className={P}>
        Reasonable access to your personal data will be provided at no cost. If access
        cannot be provided within a reasonable time frame, Adaptiv Systems will provide
        you with a date when the information will be provided. If for some reason
        access is denied, Adaptiv Systems will provide an explanation as to why access
        has been denied.
      </p>
      <p className={P}>
        For questions or complaints concerning the processing of your personal data,
        you can email us at{" "}
        <a href="mailto:privacy@adaptiv.systems" className="text-[#FF00B2] hover:underline">
          privacy@adaptiv.systems
        </a>
        . Alternatively, if you are located in the European Union, you can also have
        recourse to the European Data Protection Supervisor or with your nation&rsquo;s
        data protection authority.
      </p>

      <h2 id="retention" className={SECTION_HEADING}>Data storage and retention</h2>
      <p className={P}>
        Your personal data is stored by Adaptiv Systems on its servers, and on the
        servers of the cloud-based database management services Adaptiv Systems
        engages, located in the United States. Adaptiv Systems retains service data
        for the duration of the customer&rsquo;s business relationship with Adaptiv
        Systems and for a period of time thereafter, to analyze the data for Adaptiv
        Systems&rsquo;s own operations, and for historical and archiving purposes
        associated with Adaptiv Systems&rsquo;s services. Adaptiv Systems retains
        prospect data until such time as it no longer has business value and is purged
        from Adaptiv Systems data stores. All personal data that Adaptiv Systems
        controls may be deleted upon verified request from Data Subjects or their
        authorized agents. For more information on where and how long your personal
        data is stored, and for more information on your rights of erasure and
        portability, please contact us at:{" "}
        <a href="mailto:privacy@adaptiv.systems" className="text-[#FF00B2] hover:underline">
          privacy@adaptiv.systems
        </a>
      </p>

      <h2 id="children" className={SECTION_HEADING}>Children&rsquo;s data</h2>
      <p className={P}>
        We do not knowingly attempt to solicit or receive information from children.
      </p>

      <h2 id="contact" className={SECTION_HEADING}>
        Questions, concerns or complaints
      </h2>
      <p className={P}>
        If you have questions, concerns, complaints, or would like to exercise your
        rights, please contact us at:
      </p>
      <address className="not-italic mt-4 p-5 rounded-xl border border-[rgba(0,0,0,0.06)] bg-[#f8f9fb] text-sm text-[#374151] leading-relaxed">
        Adaptiv Systems<br />
        85 Broad Street, 17th Floor<br />
        New York, NY 10004<br />
        <a href="mailto:privacy@adaptiv.systems" className="text-[#FF00B2] hover:underline mt-2 inline-block">
          privacy@adaptiv.systems
        </a>
      </address>

      <p className={`${SUB_HEADING} mt-12 text-center text-[#94a3b8] font-normal text-xs uppercase tracking-widest`}>
        End of Privacy Statement
      </p>
    </LegalLayout>
  );
}
