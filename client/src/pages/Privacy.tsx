import "../legal.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link href="/" className="logo-link" aria-label="BELYN home"><img src="https://litter.catbox.moe/f2twec.png" alt="Belyn" className="nav-logo" /></Link>
          <Link href="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
        </div>
      </header>

      <main className="container legal-content">
        <p className="section-number">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">
          We respect your privacy and are committed to protecting the personal information you share with BELYN.
        </p>

        <section>
          <h2>Information we collect</h2>
          <p>
            We may collect information such as your name, phone number, email address, delivery address and order details when you place an order or contact us.
          </p>
        </section>

        <section>
          <h2>How we use your information</h2>
          <p>
            Your information is used for purposes such as processing orders, arranging delivery, responding to enquiries, providing customer support and improving our services.
          </p>
        </section>

        <section>
          <h2>Sharing of information</h2>
          <p>
            We do not sell or rent your personal information to third parties.
          </p>
          <p>
            Information may be shared with trusted service providers only when necessary to process your order, complete delivery or provide related services.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We take reasonable measures to protect the information we hold. However, no method of transmission or electronic storage can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2>Third-party platforms</h2>
          <p>
            Our website may contain links to third-party platforms such as WhatsApp, Instagram or Facebook. Their use is governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2>Acknowledgement</h2>
          <p>
            By using the BELYN website or placing an order, you acknowledge this Privacy Policy.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© 2026 BELYN. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy Policy</Link>
            {" · "}
            <Link href="/terms">Terms &amp; Conditions</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
