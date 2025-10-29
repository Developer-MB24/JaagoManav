import React from 'react'

function Stat({k, v}){
  return (
    <div className="card text-center">
      <div className="text-3xl font-bold text-primary">{k}</div>
      <div className="mt-1 text-slate-600">{v}</div>
    </div>
  )
}

export default function Impact(){
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Impact</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Measuring outcomes that matter</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-4">
        <Stat k="2,100+" v="Learners supported" />
        <Stat k="78%" v="Return-to-school rate" />
        <Stat k="1,200+" v="Health screenings" />
        <Stat k="300+" v="Active volunteers" />
      </div>
    </section>
  )
}
