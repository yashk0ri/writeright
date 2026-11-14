import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronDown, Menu, X, Sparkles, WandSparkles, Copy, Check, Play, PenLine, Mail, Megaphone, FileText, Instagram, Linkedin, Zap, ShieldCheck, Quote, ChevronRight, Star } from 'lucide-react';
import './style.css';

const examples = {
  'Product description': 'Meet the everyday bottle that keeps up with you. Thoughtfully designed, easy to carry, and made to keep every sip refreshingly simple.',
  'Social media': 'A little upgrade. A lot more everyday magic. ✨ Meet your new favourite way to stay refreshed — wherever the day takes you.',
  'Email subject line': 'Your everyday essential just got an upgrade',
  'Ad headline': 'Make every sip feel like a fresh start.'
};
const navItems = [
  {label:'Product', links:['AI writer','Templates','Tone of voice']},
  {label:'Solutions', links:['For marketers','For founders','For creators']},
  {label:'Resources', links:['Writing guides','Use cases','Help centre']}
];

function App(){
  const [openNav,setOpenNav]=useState('');
  const [mobileOpen,setMobileOpen]=useState(false);
  const [activeType,setActiveType]=useState('Product description');
  const [tone,setTone]=useState('Friendly');
  const [prompt,setPrompt]=useState('A reusable water bottle designed for busy people who are always on the go.');
  const [result,setResult]=useState(examples['Product description']);
  const [generated,setGenerated]=useState(false);
  const [copied,setCopied]=useState(false);
  const [email,setEmail]=useState('');
  const [subscribed,setSubscribed]=useState(false);
  const [demoName,setDemoName]=useState('');
  const [demoEmail,setDemoEmail]=useState('');
  const [demoGoal,setDemoGoal]=useState('Product descriptions');
  const [demoSubmitted,setDemoSubmitted]=useState(false);
  const generate=()=>{
    const base=prompt.trim() || 'A product people will love';
    const starters={
      Friendly:`Say hello to your new everyday favourite. ${base} Thoughtfully made to fit your routine, with little details that make a big difference.`,
      Professional:`Designed with purpose. ${base} A considered solution that brings convenience, quality, and reliability to your everyday workflow.`,
      Playful:`Busy day? We've got your back. ${base} Less fuss, more fun — that's how everyday should feel.`,
      Bold:`Ready for better everyday? ${base} Make the switch. Make it count.`
    };
    const social=`${base} ✨ The little things make a big difference. Discover a smarter way to do everyday.`;
    const emailCopy=`A better everyday starts here — discover what's new`;
    const ad=`${base.split(' ').slice(0,7).join(' ')}. Made for more.`;
    setResult(activeType==='Social media'?social:activeType==='Email subject line'?emailCopy:activeType==='Ad headline'?ad:starters[tone]);
    setGenerated(true);setCopied(false);
  };
  const copy=async()=>{try{await navigator.clipboard.writeText(result);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch(e){setCopied(false)}};
  const scrollToDemo=()=>document.getElementById('studio')?.scrollIntoView({behavior:'smooth'});
  const scrollToFeatures=()=>document.getElementById('features')?.scrollIntoView({behavior:'smooth'});

  return <div className="app">
    <div className="announcement"><Sparkles size={14}/> Your ideas, meet their best words. <a href="#studio">Try the writing studio <ArrowUpRight size={13}/></a></div>
    <header className="header">
      <a className="brand" href="#"><span className="brand-mark">w</span>writeright<span className="brand-dot">.</span><span className="brand-ai">ai</span></a>
      <nav className="desktop-nav">
        <a className="nav-link plain" href="#features">Features</a>
        <a className="nav-link plain" href="#how">How it works</a>
        <a className="nav-link plain" href="#pricing">Pricing</a>
        <a className="nav-link plain" href="#contact">Contact</a>
      </nav>
      <div className="header-actions"><button className="login" onClick={scrollToDemo}>Log in</button><button className="btn btn-small" onClick={scrollToDemo}>Get started <ArrowUpRight size={15}/></button></div>
      <button className="mobile-toggle" aria-label="Toggle menu" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
    </header>
    {mobileOpen&&<div className="mobile-menu">{[{label:'Features',href:'#features'},{label:'How it works',href:'#how'},{label:'Pricing',href:'#pricing'},{label:'Contact',href:'#contact'}].map(x=><a href={x.href} onClick={()=>setMobileOpen(false)} key={x.label}>{x.label}<ArrowUpRight size={16}/></a>)}<button className="btn" onClick={()=>{setMobileOpen(false);scrollToDemo()}}>Get started</button></div>}

    <main>
      <section className="hero">
        <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        <div className="hero-inner">
          <div className="eyebrow"><span className="eyebrow-line"></span> THE WORDS BEHIND THE WOW</div>
          <h1>Make every word<br/> <span className="headline-highlight">work harder.</span></h1>
          <div className="hero-subtitle"><span className="scribble">Good ideas deserve</span> <span className="typed">great copy<span className="cursor">|</span></span></div>
          <p className="hero-copy">Meet your creative sidekick for copy that connects.<br className="desktop-break"/> Write clearer, sound more you, and get to “publish” faster.</p>
          <div className="hero-cta"><button className="btn btn-large" onClick={scrollToDemo}>Start writing for free <ArrowUpRight size={18}/></button><button className="btn btn-outline btn-large" onClick={scrollToFeatures}><span className="play"><Play size={11} fill="currentColor"/></span> Explore features</button></div>
          <div className="hero-visual" aria-label="Preview of the WriteRight writing assistant">
            <div className="visual-top"><span><i></i> WRITING ASSISTANT</span><span className="visual-dots">•••</span></div>
            <div className="visual-prompt"><span className="visual-spark"><Sparkles size={14}/></span><span>Make this product sound irresistible...</span></div>
            <div className="visual-output"><small>YOUR COPY, REFINED</small><strong>Good ideas deserve words that move people.</strong><div className="visual-lines"><i></i><i></i><i></i></div></div>
            <div className="visual-tags"><span>Clear</span><span>Confident</span><span>On-brand</span></div>
          </div>
          <div className="hero-proof"><div className="avatars"><span>J</span><span>M</span><span>A</span><span>K</span></div><div><div className="stars">★★★★★</div><small>Loved by people who write for a living</small></div><div className="proof-divider"></div><small><strong>10k+</strong> words made better</small></div>
        </div>
        <div className="floating-note note-left"><span className="note-icon"><WandSparkles size={17}/></span><div><b>Fresh ideas</b><small>Just a prompt away</small></div></div>
        <div className="floating-note note-right"><span className="note-check"><Check size={16}/></span><div><b>Sounds like you</b><small>Your tone, your rules</small></div></div>
        <div className="hero-bottom-label">WRITE WITH INTENTION <span>✳</span> CREATE WITH CONFIDENCE</div>
      </section>

      <section className="logo-strip"><span>MADE FOR THE MANY HATS YOU WEAR</span><div className="logo-list"><b>foundry<span>®</span></b><b className="serif-logo">northstar.</b><b className="wide-logo">goodkind</b><b className="italic-logo">morrow</b><b className="mono-logo">STUDIO 08</b></div></section>

      <section className="intro section-pad" id="features">
        <div className="section-kicker">LESS BLANK PAGE. MORE BRIGHT IDEAS.</div>
        <div className="intro-grid"><h2>All the right words.<br/><em>None of the guesswork.</em></h2><p>From first draft to final polish, WriteRight helps you turn what's in your head into copy people actually want to read.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-purple"><div className="feature-top"><span className="feature-icon"><WandSparkles/></span><span className="feature-number">01 / CREATE</span></div><h3>Start with a spark.</h3><p>Turn a simple thought into a polished first draft. No blinking cursor required.</p><div className="mini-prompt"><span>“Write a launch announcement…”</span><Sparkles size={15}/></div></article>
          <article className="feature-card feature-peach"><div className="feature-top"><span className="feature-icon"><PenLine/></span><span className="feature-number">02 / REFINE</span></div><h3>Find your voice.</h3><p>Make it punchier, warmer, clearer, or unmistakably you. One click at a time.</p><div className="tone-pills"><span>Friendly</span><span>Bold</span><span>Witty</span></div></article>
          <article className="feature-card feature-green"><div className="feature-top"><span className="feature-icon"><Zap/></span><span className="feature-number">03 / MOVE</span></div><h3>Get to done, faster.</h3><p>Skip the endless rewrites and spend more time bringing your best ideas to life.</p><div className="progress-mini"><span></span><span></span><span></span><span></span><span></span><b>Ready to go</b></div></article>
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-wrap">
          <div className="studio-copy"><div className="section-kicker">YOUR CREATIVE WORKSPACE</div><h2>From “what if”<br/>to <em>“that's the one.”</em></h2><p>A little direction is all it takes. Pick what you're creating, tell us the gist, and let the words flow.</p><div className="studio-benefits"><span><Check size={16}/> No complicated setup</span><span><Check size={16}/> Made for real-world writing</span><span><Check size={16}/> Your first draft, in seconds</span></div></div>
          <div className="writer-card">
            <div className="writer-head"><div><span className="live-dot"></span><b>Writing studio</b><small>Let's make something good.</small></div><span className="sparkle-badge"><Sparkles size={17}/></span></div>
            <label className="field-label">WHAT ARE WE WRITING TODAY?</label>
            <div className="type-grid">{[{name:'Product description',icon:<FileText/>},{name:'Social media',icon:<Instagram/>},{name:'Email subject line',icon:<Mail/>},{name:'Ad headline',icon:<Megaphone/>}].map(t=><button key={t.name} onClick={()=>{setActiveType(t.name);setResult(examples[t.name]);setGenerated(false)}} className={`type-option ${activeType===t.name?'selected':''}`}>{t.icon}{t.name}</button>)}</div>
            <label className="field-label prompt-label" htmlFor="prompt">TELL US A LITTLE ABOUT IT</label>
            <textarea id="prompt" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Describe your product, audience, or big idea..."/>
            <div className="tone-row"><span className="field-label">CHOOSE YOUR TONE</span><div className="tone-select">{['Friendly','Professional','Playful','Bold'].map(t=><button key={t} onClick={()=>setTone(t)} className={tone===t?'tone-active':''}>{t}</button>)}</div></div>
            <button className="generate-btn" onClick={generate}><Sparkles size={17}/> Generate my copy <ArrowUpRight size={17}/></button>
            <div className="result-area"><div className="result-head"><span><span className="result-dot"></span> YOUR FIRST DRAFT</span><button onClick={copy} className="copy-btn">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'Copied':'Copy'}</button></div><p>{result}</p>{generated&&<span className="generated-label"><Sparkles size={12}/> Freshly generated draft</span>}</div>
            <div className="writer-foot"><ShieldCheck size={14}/> Your ideas stay yours. Always.</div>
          </div>
        </div>
      </section>

      <section className="how-section section-pad" id="how">
        <div className="section-kicker">A BETTER WRITING FLOW</div><h2>Three steps. <em>One less headache.</em></h2>
        <div className="steps">{[{n:'01',title:'Bring the idea',desc:'A rough brief, a product, or a half-formed thought. It all starts somewhere.'},{n:'02',title:'Shape the words',desc:'Choose your format and tone. Let WriteRight help you find the right angle.'},{n:'03',title:'Make it yours',desc:'Tweak, refine, copy, and share. The final word is always yours.'}].map((s,i)=><div className="step" key={s.n}><div className="step-number">{s.n}<span>{i===0?'✳':i===1?'↗':'✓'}</span></div><h3>{s.title}</h3><p>{s.desc}</p></div>)}</div>
      </section>

      <section className="pricing-section section-pad" id="pricing">
        <div className="section-kicker">SIMPLE PLANS, ROOM TO GROW</div>
        <div className="pricing-heading"><h2>Good copy shouldn't<br/><em>come with guesswork.</em></h2><p>Start with the essentials. Upgrade when your ideas need more room.</p></div>
        <div className="pricing-grid">
          <article className="price-card">
            <div className="price-label">STARTER</div><h3>Free</h3><p className="price-desc">For curious minds and occasional copy needs.</p>
            <div className="price-value">₹0 <small>/ forever</small></div>
            <a className="price-button price-button-outline" href="#studio">Try the writing studio <ArrowUpRight size={15}/></a>
            <ul><li><Check/> 5 writing drafts per day</li><li><Check/> 4 copy formats</li><li><Check/> 4 writing tones</li><li><Check/> Copy to clipboard</li></ul>
          </article>
          <article className="price-card price-card-featured">
            <span className="popular-tag">MOST FLEXIBLE</span><div className="price-label">PRO</div><h3>Creator</h3><p className="price-desc">For creators and teams who write every day.</p>
            <div className="price-value">₹499 <small>/ month</small></div>
            <a className="price-button" href="#contact">Request early access <ArrowUpRight size={15}/></a>
            <ul><li><Check/> More room for daily drafts</li><li><Check/> All writing formats</li><li><Check/> Brand voice presets</li><li><Check/> Saved copy library</li><li><Check/> Priority support</li></ul>
          </article>
        </div>
        <p className="pricing-note">Plans are illustrative for this internship prototype. No payment is collected.</p>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-copy"><div className="section-kicker">LET'S MAKE SOMETHING GOOD</div><h2>Have a project?<br/><em>Let's talk words.</em></h2><p>Tell us what you're working on and what kind of copy you need. Send a demo request and we'll show a confirmation right here.</p><div className="contact-detail"><span className="contact-icon"><Mail size={17}/></span><div><b>Email us</b><a href="mailto:hello@writeright.example">hello@writeright.example</a></div></div><div className="contact-detail"><span className="contact-icon"><PenLine size={17}/></span><div><b>Built for better communication</b><small>Copywriting support for your next big idea</small></div></div></div>
        <form className="demo-form" onSubmit={e=>{e.preventDefault();setDemoSubmitted(true);}}>
          <div className="demo-form-head"><span className="live-dot"></span><b>Request a demo</b><small>We'll take it from here.</small></div>
          {demoSubmitted ? <div className="form-success"><span><Check size={22}/></span><h3>Request received!</h3><p>Thanks, {demoName}. Your demo request is ready. This prototype doesn't send data to a server.</p><button type="button" className="reset-form" onClick={()=>{setDemoSubmitted(false);setDemoName('');setDemoEmail('');setDemoGoal('Product descriptions')}}>Send another request</button></div> : <>
            <label htmlFor="demo-name">YOUR NAME</label><input id="demo-name" value={demoName} onChange={e=>setDemoName(e.target.value)} placeholder="Your name" required minLength="2"/>
            <label htmlFor="demo-email">WORK EMAIL</label><input id="demo-email" type="email" value={demoEmail} onChange={e=>setDemoEmail(e.target.value)} placeholder="you@company.com" required/>
            <label htmlFor="demo-goal">WHAT DO YOU WANT TO WRITE?</label><select id="demo-goal" value={demoGoal} onChange={e=>setDemoGoal(e.target.value)}><option>Product descriptions</option><option>Social media content</option><option>Email campaigns</option><option>Ads and landing pages</option><option>Something else</option></select>
            <button className="generate-btn" type="submit">Request my demo <ArrowUpRight size={17}/></button>
            <small className="form-privacy">No backend required — your details stay in this page preview.</small>
          </>}
        </form>
      </section>

      <section className="quote-section"><div className="quote-mark"><Quote size={30}/></div><blockquote>“The hardest part of writing isn't always the writing. Sometimes, it's just getting started.”</blockquote><p>LET'S MAKE THAT PART EASIER.</p><button className="btn btn-light" onClick={scrollToDemo}>Find your words <ArrowUpRight size={17}/></button><div className="quote-decoration">✳</div></section>

      <section className="faq-section section-pad"><div><div className="section-kicker">GOOD QUESTIONS</div><h2>A few things<br/><em>you might wonder.</em></h2></div><div className="faq-list">{[{q:'What is WriteRight?',a:'WriteRight is an AI-powered copywriting assistant that helps you create and refine everyday marketing copy, from product descriptions to social posts and email subject lines.'},{q:'Do I need to be a professional writer?',a:'Not at all. Bring a rough idea, a short brief, or even a single sentence. WriteRight is designed to help at every stage of the writing process.'},{q:'Can I choose the tone of my copy?',a:'Yes. Switch between tones like Friendly, Professional, Playful, and Bold to shape the voice of your draft.'},{q:'Can I edit the generated content?',a:'Absolutely. Treat every result as a starting point. You can refine it, rewrite it, and make it your own before using it.'}].map((f,i)=><Faq key={i} {...f}/>)}</div></section>

      <section className="newsletter"><div><div className="section-kicker">A NOTE FROM THE WRITING DESK</div><h2>Good words.<br/><em>In your inbox.</em></h2><p>Writing tips, creative prompts, and a little inspiration for your next big idea.</p></div><form onSubmit={e=>{e.preventDefault();if(email.includes('@'))setSubscribed(true)}}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-input"><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/><button aria-label="Subscribe"><ArrowUpRight/></button></div><small>{subscribed?'You’re on the list — keep an eye on your inbox.':'No noise. Just good things to read.'}</small></form></section>
    </main>
    <footer className="footer"><a className="brand" href="#"><span className="brand-mark">w</span>writeright<span className="brand-dot">.</span><span className="brand-ai">ai</span></a><p>Words that work. Ideas that move.</p><div className="footer-right"><span>© 2026 WriteRight</span><a href="#features">Product</a><a href="#how">About</a><a href="#contact">Contact</a><a href="#pricing">Pricing</a></div></footer>
  </div>
}

function Faq({q,a}){const [open,setOpen]=useState(false);return <div className={`faq-item ${open?'faq-open':''}`}><button onClick={()=>setOpen(!open)}><span>{q}</span><span className="faq-plus">{open?'−':'+'}</span></button>{open&&<p>{a}</p>}</div>}
createRoot(document.getElementById('root')).render(<App/>);
