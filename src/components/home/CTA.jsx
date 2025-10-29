import React from 'react'

export default function CTA(){
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <div className="card flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Join the movement</h3>
          <p className="mt-2 text-slate-700">Volunteer your time or support a program—every step counts.</p>
        </div>
        <div className="flex gap-3">
          <a href="#volunteer" className="btn-primary">Volunteer</a>
          <a href="#donate" className="btn-secondary">Donate</a>
        </div>
      </div>
    </section>
  )
}
