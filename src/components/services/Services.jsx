import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
      <h5>What I've Done</h5>
      <h2>Previous experiences</h2>

    {/* ------------ UI/UX Design ------------ */}

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Designing mockups</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Prototyping</p>
            </li>
          </ul>
        </article>

    {/* ------------ Marketing ------------ */}

        <article className="service">
          <div className="service__head">
            <h3>Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Socialmedia marketing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>CMS configuration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>SEO optimization</p>
            </li>
          </ul>
        </article>

    {/* ------------ Content Creation ------------ */}

        <article className="service">
          <div className="service__head">
            <h3> Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Logos, banners, typographical products</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Music production for commercial videos</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Video editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
