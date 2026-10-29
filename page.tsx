"use client";

import { FormEvent, useMemo, useState } from "react";

type Listing = {
  name: string;
  category: string;
  description: string;
  country: string;
  url: string;
  featured?: boolean;
};

const demoListings: Listing[] = [
  { name: "Northstar Creative", category: "Design & Marketing", description: "Brand identity, creative campaigns and digital design for growing teams.", country: "United States", url: "https://example.com", featured: true },
  { name: "CloudCraft Studio", category: "Technology", description: "Web development and practical cloud solutions for modern businesses.", country: "India", url: "https://example.com" },
  { name: "Bloom & Co.", category: "Retail & Shopping", description: "Thoughtful everyday goods from an independent online store.", country: "United Kingdom", url: "https://example.com" },
  { name: "GreenPath Advisory", category: "Professional Services", description: "Business planning and sustainability advice for small companies.", country: "Australia", url: "https://example.com" },
  { name: "BrightLearn", category: "Education", description: "Online learning resources for ambitious students and professionals.", country: "India", url: "https://example.com" },
  { name: "Wanderwell Travel", category: "Travel & Hospitality", description: "Custom travel planning for memorable journeys and getaways.", country: "Singapore", url: "https://example.com" },
];
const categories = ["All categories", "Technology", "Design & Marketing", "Retail & Shopping", "Professional Services", "Education", "Travel & Hospitality"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ name: "", url: "", category: "Technology", country: "", email: "", description: "" });

  const filtered = useMemo(() => demoListings.filter((item) => {
    const matchesCategory = category === "All categories" || item.category === category;
    const haystack = `${item.name} ${item.description} ${item.category} ${item.country}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [query, category]);

  function submitListing(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("Thanks! This starter form is a demo and has not submitted or saved your listing. Connect the database and payment flow before accepting real submissions.");
  }

  return (
    <main>
      <div className="announcement">A new way to get discovered <span>✦</span> Business listings for a global audience</div>
      <header className="nav wrap">
        <a className="brand" href="#" aria-label="Sonaro Promotion home"><span className="brand-mark">S</span><span>sonaro<span className="brand-light"> promotion</span></span></a>
        <nav><a href="#directory">Explore</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></nav>
        <button className="button button-small" onClick={() => { setShowForm(true); setNotice(""); }}>List your business <span>↗</span></button>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> THE WORLD IS YOUR MARKET</div>
          <h1>Good businesses<br />deserve to be <em>found.</em></h1>
          <p className="hero-text">Put your business in front of new people. Discover useful brands, services and websites from around the world.</p>
          <div className="hero-actions"><button className="button" onClick={() => document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" })}>Explore businesses <span>→</span></button><button className="text-button" onClick={() => { setShowForm(true); setNotice(""); }}>Promote your business <span>↗</span></button></div>
          <div className="trust-row"><div className="avatar-stack"><span>✦</span><span>◎</span><span>↗</span></div><span>Made for ambitious businesses everywhere</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative business growth illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="glow"></div>
          <div className="hero-tile tile-main"><span className="tile-icon">↗</span><span className="tile-label">YOUR NEXT CUSTOMER</span><strong>Starts with<br />being seen.</strong><div className="tile-line"></div><span className="tile-foot">SONARO PROMOTION <span>✦</span></span></div>
          <div className="floating-card card-top"><span className="mini-icon purple">✳</span><span><b>More visibility</b><small>Reach new audiences</small></span><span className="mini-arrow">↗</span></div>
          <div className="floating-card card-bottom"><span className="mini-icon green">✓</span><span><b>Built for business</b><small>Your brand, your story</small></span></div>
          <span className="spark spark-a">✦</span><span className="spark spark-b">✳</span>
        </div>
      </section>

      <section className="stats wrap">
        <div><strong>Global</strong><span>Reach beyond borders</span></div><div><strong>Every industry</strong><span>One place to get discovered</span></div><div><strong>Made simple</strong><span>Clear, straightforward listings</span></div>
      </section>

      <section className="directory-section" id="directory">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">THE DIRECTORY</div><h2>Discover your next <em>favorite.</em></h2><p>Explore businesses, tools and services worth knowing.</p></div><span className="result-count">{filtered.length} sample listings</span></div>
          <div className="search-tools"><label className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search businesses, services, or keywords…" aria-label="Search businesses" /></label><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">{categories.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div className="listing-grid">
            {filtered.map((item, i) => <article className={`listing-card ${item.featured ? "featured" : ""}`} key={item.name}>
              <div className="listing-top"><div className={`company-icon icon-${i % 4}`}>{item.name.charAt(0)}</div>{item.featured && <span className="featured-tag">✦ FEATURED</span>}<span className="country">{item.country}</span></div>
              <span className="category-label">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p>
              <a className="visit-link" href={item.url} target="_blank" rel="noreferrer">Visit website <span>↗</span></a>
            </article>)}
            {filtered.length === 0 && <div className="empty-state"><span>⌕</span><h3>No matches yet</h3><p>Try another keyword or choose a different category.</p><button className="text-button" onClick={() => { setQuery(""); setCategory("All categories"); }}>Clear filters ↗</button></div>}
          </div>
          <p className="demo-note">Demo content: these sample companies and links are placeholders, not verified businesses.</p>
        </div>
      </section>

      <section className="how-section wrap" id="how-it-works">
        <div className="section-heading"><div><div className="eyebrow">HOW IT WORKS</div><h2>Three steps to <em>stand out.</em></h2><p>Simple to understand. Built around your business.</p></div></div>
        <div className="steps-grid"><article><span className="step-no">01</span><div className="step-icon">⌘</div><h3>Share your business</h3><p>Tell us about your brand, add your website and choose the right category.</p></article><article><span className="step-no">02</span><div className="step-icon">✦</div><h3>Choose your listing</h3><p>Select a paid listing package that suits your promotion goals.</p></article><article><span className="step-no">03</span><div className="step-icon">↗</div><h3>Get discovered</h3><p>After payment verification and review, your listing can go live.</p></article></div>
      </section>

      <section className="pricing-section" id="pricing"><div className="wrap pricing-wrap"><div><div className="eyebrow">SIMPLE PRICING</div><h2>Your business.<br /><em>More visibility.</em></h2><p>One listing fee. No complicated plans.</p></div><div className="price-card"><span className="price-kicker">STARTER LISTING</span><div className="price"><span>₹</span>499 <small>/ 30 days</small></div><p>Everything you need to introduce your business to the directory.</p><ul><li>✓ Business profile and website link</li><li>✓ Category and country placement</li><li>✓ Searchable directory listing</li><li>✓ Reviewed before publication</li></ul><button className="button button-full" onClick={() => { setForm((f) => ({ ...f })); setShowForm(true); setNotice(""); }}>Submit your business <span>→</span></button><small className="price-note">Demo pricing. Checkout is not enabled in this starter.</small></div></div></section>

      <section className="cta wrap"><div className="cta-spark">✦</div><div><h2>Ready to put your business<br />on the map?</h2><p>Make your next customer discovery a little easier.</p></div><button className="button button-white" onClick={() => { setShowForm(true); setNotice(""); }}>Get your business listed <span>↗</span></button></section>
      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-mark">S</span><span>sonaro<span className="brand-light"> promotion</span></span></a><span>© {new Date().getFullYear()} Sonaro Promotion. All rights reserved.</span><div><a href="mailto:hello@example.com">Contact</a><a href="#pricing">Pricing</a></div></div><div className="wrap footer-disclaimer">A starter project for demonstration. Replace placeholder contact details and demo listings before launch.</div></footer>

      {showForm && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="form-title"><button className="modal-close" onClick={() => setShowForm(false)} aria-label="Close form">×</button><div className="eyebrow">GET DISCOVERED</div><h2 id="form-title">List your business</h2><p className="modal-intro">Share the basics. This demo will not store or charge for your submission.</p>
        <form onSubmit={submitListing} className="listing-form">
          <label>Business name<input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your company name" /></label>
          <label>Website URL<input required type="url" value={form.url} onChange={(e) => setForm({...form, url: e.target.value})} placeholder="https://yourwebsite.com" /></label>
          <div className="form-row"><label>Category<select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>{categories.slice(1).map((c) => <option key={c}>{c}</option>)}</select></label><label>Country<input required value={form.country} onChange={(e) => setForm({...form, country: e.target.value})} placeholder="Country" /></label></div>
          <label>Contact email<input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@business.com" /></label>
          <label>Short description<textarea required maxLength={300} rows={3} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder="What makes your business useful?" /></label>
          <button className="button button-full" type="submit">Continue to listing review <span>→</span></button>
          {notice && <p className="notice" role="status">{notice}</p>}
        </form>
      </section></div>}
    </main>
  );
}
