import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./faq";
import "./main.css";

const Accordion = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "How do I place an order?",
      answer:
        "It’s easy. Simply add products to your basket, then tap the checkout button and enter your delivery details - or log in to your account. If you’re having any trouble at all, you can address any queries to representatives over Live Chat.",
      open: true,
    },
    {
      question: "When will I receive my items?",
      answer:
        "Parcel deliveries (small orders) dispatched on standard delivery are usually delivered within 3-5 working days, Monday-Friday excluding weekends. This doesn’t include Northern Ireland, the Highlands and selected postcodes. There are collection and drop offs options available too.",
      open: false,
    },
    {
      question: "Can I cancel an order I’ve placed?",
      answer:
        "It depends where in the process cycle your order is. We offer a 7 day refund if goods are returned in resellable condition within seven days of customers receiving their order. If in doubt, just contact our friendly customer service team on 0345 561 0156, who’ll be able to advise if it’s possible.",
      open: false,
    },
    {
      question: "What is the refund and exchange policy?",
      answer:
        "We offer a goodwill refund or exchange on all products when items are returned in a resalable condition and in their original packaging. And within 7 working days of receipt of the item.",
      open: false,
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  return (
    <div className="Faq">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;