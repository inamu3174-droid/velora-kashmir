import "../legal.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link href="/" className="wordmark">BELYN<span>®</span></Link>
          <Link href="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
        </div>
      </header>

      <main className="container legal-content">
        <p className="section-number">Legal</p>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-lead">
          By using the BELYN website or placing an order, you agree to these Terms &amp; Conditions.
        </p>

        <section>
          <h2>Products &amp; information</h2>
          <p>
            We make reasonable efforts to ensure that product descriptions, quantities, availability and other information displayed on the website are accurate. Product appearance may naturally vary.
          </p>
        </section>

        <section>
          <h2>Orders</h2>
          <p>
            Orders are confirmed after the required order details and payment, where applicable, have been received and accepted by BELYN.
          </p>
        </section>

        <section>
          <h2>Availability</h2>
          <p>
            All products are subject to availability. If a selected product is unavailable, we will contact you regarding the available options.
          </p>
        </section>

        <section>
          <h2>Order cancellation</h2>
          <p>
            Orders can be cancelled only before they are dispatched. Once an order has been dispatched, it cannot be cancelled, subject to any rights available under applicable law.
          </p>
        </section>

        <section>
          <h2>Pricing</h2>
          <p>
            Prices displayed on the website are subject to change without prior notice. The applicable price at the time of order confirmation will apply.
          </p>
        </section>

        <section>
          <h2>Payment</h2>
          <p>
            Payment methods available for an order will be communicated at the time of purchase.
          </p>
        </section>

        <section>
          <h2>Shipping &amp; delivery</h2>
          <p>
            Orders are processed after confirmation and are dispatched from BELYN’s designated location. Delivery timelines depend on the destination, courier partner and other circumstances that may affect transportation.
          </p>
          <p>
            Customers will be provided with available tracking information where applicable. Delivery may be affected by weather, holidays, remote locations, courier delays or circumstances beyond BELYN’s control.
          </p>
          <p>
            Please ensure that the delivery address and contact details provided during WhatsApp ordering are accurate.
          </p>
        </section>

        <section>
          <h2>Custom quantities &amp; gift hampers</h2>
          <p>
            Custom quantities and gift hampers are subject to product availability and confirmation by BELYN. Additional charges may apply depending on the request.
          </p>
        </section>

        <section>
          <h2>Damaged or incorrect products</h2>
          <p>
            If your order arrives damaged, incorrect or defective, please contact us within 24 hours of delivery with photographs and order details. After reviewing the issue, BELYN may offer an appropriate resolution, which may include replacement or refund where applicable.
          </p>
        </section>

        <section>
          <h2>Returns</h2>
          <p>
            Because our products are food items, we generally do not accept returns once products have been delivered, except where required under applicable law or where an eligible issue with the order is confirmed.
          </p>
        </section>

        <section>
          <h2>Refunds</h2>
          <p>
            Where a refund is approved, it will be processed using the applicable payment method or another mutually agreed method. Refund processing times may vary depending on the payment provider or bank.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            All BELYN names, logos, text, photographs, graphics, designs and other website content are the property of BELYN or are used with permission and may not be reproduced or used without prior written permission.
          </p>
        </section>

        <section>
          <h2>Limitation</h2>
          <p>
            BELYN is not responsible for delays or failures caused by circumstances beyond its reasonable control, including courier delays, natural events, weather conditions or other unforeseen circumstances.
          </p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>
            BELYN may update these Terms &amp; Conditions from time to time. Updated terms will be published on this website.
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
