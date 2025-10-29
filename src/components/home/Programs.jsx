import React from 'react'

const items = [
  { title: 'Education', desc: 'Literacy camps, bridge schooling, digital readiness.' },
  { title: 'Health', desc: 'Preventive care, camps, nutrition & awareness.' },
  { title: 'Employment', desc: 'Career guidance, skills, and placement support.' },
]

export default function Programs(){
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">What we do</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Programs at a glance</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map(it => (
          <article key={it.title} className="card hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-slate-700">{it.desc}</p>
            <a href="#" className="btn-secondary mt-6 inline-flex">Learn More</a>
          </article>
        ))}
      </div>
    </section>
  )
}
