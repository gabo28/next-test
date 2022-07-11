import React from 'react';
import { useEffect, useState } from 'react'
import GeneralHead from '@/components/GeneralHead'
import GeneralFooter from '@/components/GeneralFooter'
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';

export default function HomeId({ data }) {
    return (
        <div >
            <div className="card" style={{width:"16rem"}}>
                <img className="card-img-top" src={data?.imageCollection?.items[0].url} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{data?.titlee}</p>
                </div>
            </div>
            <GeneralFooter />

        </div>
    )
}


export async function getStaticPaths() {
    const query = `query {
        bannerCollection {
          total
          items {
            sys {
              id
              publishedAt
            }
            titlee
            description
            buttonText
            imageCollection{
              total
              items{
                title
                url
              }
            }
          }
        }
      }`;

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
    const result = await res.json()
    // Get the paths we want to pre-render based on posts

    console.log('....',result.data);
    const paths = result.data.bannerCollection.items.map((item) => ({
        params: { id: item.sys.id },
    }))
    console.log('....',paths);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
   
    const query = `query {
        banner(id: "${params.id}") {
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
        props: { data: dapros },
    }
}