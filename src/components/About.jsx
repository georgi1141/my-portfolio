import React from 'react'
import aboutSvg from './../assets/about.svg'
import SectionTitle from './SectionTitle'

function About() {
    return (
        <section className='bg-white py-20' id='about'>

            <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' alt="picture with people interacting on a keyboard" />
                <article>
                    <SectionTitle text={'About me'} />
                    <p className='text-slate-600 mt-8 leading-loose'>As a recent graduate in Front-End Development, I specialize in React and have hands-on experience with both MEAN and MERN stack technologies. I'm eager to apply my skills in an entry-level or Junior position where I can contribute to innovative projects.</p>
                </article>
            </div>
        </section>
    )
}

export default About