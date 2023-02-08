import React from 'react';
import { useEffect, useState } from 'react'
import GeneralHead from '@/components/GeneralHead'
import GeneralFooter from '@/components/GeneralFooter'
import Image from 'next/image';

const query = `query {
  banner(id: "6Xclg2Kaav0rMDbcfAgl68") {
    title
    description
    caption
    buttonText
    buttonLink
    icon
    imageCollection {
      items {
        title
        url
      }
    }
  }
}`;


export default function Ssr(props) {

console.log(props.data);

  return (
    <div >
      <GeneralHead />
      <section id="banner">
        <div className="swiper-banner">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img loading="lazy"
              src={props.data?.imageCollection?.items[0].url}
              alt="imagen 1" /></div>
            <div className="swiper-slide"><img loading="lazy"
              src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/4f6f0acd-eccc-4f1f-932a-a42b31dc3034/carrusel-banner-2x-2-optimizada.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P864E0Q30449MS3000-4f6f0acd-eccc-4f1f-932a-a42b31dc3034-nX11-ZB"
              alt="imagen 2" /></div>
            <div className="swiper-slide"><img loading="lazy"
              src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/b7c302c4-beab-4616-bbb8-02f50adac97b/carrusel-banner-3-2xOpt.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P864E0Q30449MS3000-b7c302c4-beab-4616-bbb8-02f50adac97b-nXv1mxn"
              alt="imagen 3" /></div>
          </div>
          <div className="swiper-pagination-banner"></div>
        </div>
        <div className="informacion-banner">
          <h1>{props.data?.title}</h1>
          <p>{props.data?.description}</p>
          <div className="aviso-banner">
            <em className="bc-icon" aria-hidden="true" aria-label="prueba" role="img">{props.data?.icon}</em>
            <p>{props.data?.caption}</p>
          </div>

          <div id="btn-open-modal-container" className="">
            <button id="btn-open-modal" className="bc-button-primary bc-button" data-toggle="modal" data-target="#modalApp">
              {props.data?.buttonText}
            </button>
          </div>
          <div className="alerta-banner">
            <img loading="lazy"
              src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/fae2c5aa-7e4b-403f-a7ce-da3cece0cb1f/pic-hand-holding-coins.svg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_K9HC1202P864E0Q30449MS3000-fae2c5aa-7e4b-403f-a7ce-da3cece0cb1f-nXqXv4Y"
              alt="icono alerta" />
            <p>
              Regístrate en la App y por el buen uso podrás acceder a un préstamo con Crédito A la mano. Aplican TyC*
            </p>
            <em className="bc-icon icon-close" aria-hidden="true" aria-label="close" role="img">icon-error</em>
          </div>
        </div>
      </section>
      <GeneralFooter />

    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${process.env.NEXT_PUBLIC_AUTHORIZATION}`
    },
    body: JSON.stringify({
      query
    })
  })
  const data = await res.json()
  const dapros = data.data.banner
  return {
    props: { data:dapros },
  }
}