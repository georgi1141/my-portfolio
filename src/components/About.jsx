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
                    <p className='text-slate-600 mt-8 leading-loose'>Seasoned Software Engineer with experience in developing and delivering high-quality software solutions, specializing in React and React Native. Adept at researching and integrating cutting-edge technologies, while consistently adhering to best practices. Proven ability to create stable, maintainable codebases and significantly improve productivity through strong team collaboration and clear communication. Passionate about building scalable, user-centric applications that drive business success.</p>
                </article>
            </div>
        </section>
    )
}

export default About