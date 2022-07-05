
import { useEffect, useState } from 'react'
import GeneralHead from '@/components/GeneralHead'
import GeneralFooter from '@/components/GeneralFooter'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
const [ state, setState] = useState(null)

  
  const query = `query {
      banner(id: "6Xclg2Kaav0rMDbcfAgl68") {
        titlee
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

    useEffect(()=>{
      console.log(state);
    }, [state])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ftt5X_tlh9PNCWGLkFUq5ABILm2dpNnzZAmEi0EqwAk"
      },
      body: JSON.stringify({
        query
      })
    }).then(response => response.json())
    .then(data => setState(data.data.banner))

  }, [])

  return (
    <div >
      <GeneralHead />
      <section id="banner">
        <div className="swiper-banner">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img loading="lazy"
              src={state?.imageCollection.items[0].url}
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
          <h1>{state?.titlee}</h1>
          <p>{state?.description}</p>
          <div className="aviso-banner">
            <em className="bc-icon" aria-hidden="true" aria-label="prueba" role="img">{state?.icon}</em>
            <p>{state?.caption}</p>
          </div>

          <div id="btn-open-modal-container" className="">
            <button id="btn-open-modal" className="bc-button-primary bc-button" data-toggle="modal" data-target="#modalApp">
              {state?.buttonText}
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
