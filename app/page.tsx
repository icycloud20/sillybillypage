import Link from 'next/link';
import Reveal from '../components/Reveal';
import { AccordionItem } from '../components/Accordion';
function robuxFromUSD(usd:number){ return Math.round(usd/0.0035); }

export default function HomePage(){
  return (
    <main id="home" className="container pt-24">
      <Reveal>
        <section className="text-center">
          <h1 className="brand-gradient hero-title">duckydev</h1>
          <p className="hero-sub mt-2">A Roblox backend & frontend developer for over 7 years 😎</p>
          <p className="mt-3 italic text-gray-400">I create immersive, high performance Roblox experiences. From concept to deployment.</p>
          <div className="mt-6"><Link href="/showcase" className="cta-btn">See My Work</Link></div>
        </section>
      </Reveal>

      <Reveal>
        <section id="about" className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl mb-4">What I build</h2>
          <p className="text-gray-400 leading-relaxed">High quality, polished systems that are easy to configure per users request. Always with a satisfying feel & appealing look.</p>
        </section>
      </Reveal>

      <Reveal>
        <section id="pricing" className="mt-24">
          <h2 className="text-center text-5xl font-display mb-2">Pricing</h2>
          <p className="text-center text-gray-400 mb-8">Clear, upfront tiers for different project scopes.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="work-card p-6 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl mb-2">Basic</h3>
              <p className="font-bold text-4xl text-transparent bg-gradient-to-r from-[#FF9F1C] to-[#FFD43B] bg-clip-text">$5+</p>
              <p className="mt-1 text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">{`~${robuxFromUSD(5).toLocaleString()} R$`}</p>
              <div className="h-3" />
              <ul className="text-gray-400 text-sm mb-4 space-y-2">
                <li>Small System/Script</li><li>Quick bug fix</li><li>1-2 day delivery</li>
              </ul>
              <a href="#contact" className="cta-btn">Contact Me</a>
            </div>
            <div className="work-card p-6 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl mb-2">Standard</h3>
              <p className="font-bold text-4xl text-transparent bg-gradient-to-r from-[#FF9F1C] to-[#FFD43B] bg-clip-text">$45+</p>
              <p className="mt-1 text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">{`~${robuxFromUSD(45).toLocaleString()} R$`}</p>
              <div className="h-3" />
              <ul className="text-gray-400 text-sm mb-4 space-y-2">
                <li>Medium Sized Project/System</li><li>Custom UI & polish</li><li>3-5 day delivery</li>
              </ul>
              <a href="#contact" className="cta-btn">Contact Me</a>
            </div>
            <div className="work-card p-6 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl mb-2">Premium</h3>
              <p className="font-bold text-4xl text-transparent bg-gradient-to-r from-[#FF9F1C] to-[#FFD43B] bg-clip-text">$125+</p>
              <p className="mt-1 text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">{`~${robuxFromUSD(125).toLocaleString()} R$`}</p>
              <div className="h-3" />
              <ul className="text-gray-400 text-sm mb-4 space-y-2">
                <li>Large Scale System or Full Game</li><li>Full Scripting & UI</li><li>1-2 week delivery</li>
              </ul>
              <a href="#contact" className="cta-btn">Contact Me</a>
            </div>
          </div>
          <p className="mt-6 text-sm opacity-70 text-center">50% of the agreed price is paid upfront.</p>
        </section>
      </Reveal>

      <Reveal>
        <section id="faq" className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-center text-5xl font-display mb-6">Questions</h2>
          <div className="space-y-4">
            <AccordionItem title="Do you offer revisions or fixes?">Yes, revisions or fixes are included for free unless drastic, then we can talk about payment.</AccordionItem>
            <AccordionItem title="What do you charge?">I charge based on the complexity and estimated time it would take to complete a project. Pricing above displays estimates.</AccordionItem>
            <AccordionItem title="Can you join long-term projects or teams?">I don't do long term at the current moment unless it is a project I would personally enjoy being a part of.</AccordionItem>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
