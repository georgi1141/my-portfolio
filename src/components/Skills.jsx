import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

function Skills() {
    return (
        <section className='py-20 mx-auto max-w-7xl px-8' id='skills'>
            <SectionTitle text={'Tech Stack'} />
            <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {skills.map(skill => {
                    return <SkillsCard key={skill.id} {...skill} />

                })}
            </div>
        </ section>
    )
}

export default Skills