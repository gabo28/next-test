import React from 'react';
import { useEffect, useState } from 'react'
import GeneralHead from '@/components/GeneralHead'
import GeneralFooter from '@/components/GeneralFooter'
import Link from 'next/link';



export default function HomeList({items}) {

    return (
        <div >
            <ul className="list-group">
                {
                    items.map(item => (
                        <Link href={`/list/${item.sys.id}`} key={item.sys.id}> 
                           <a>
                           <li className="list-group-item d-flex justify-content-between align-items-center" >
                                {item?.titlee}
                                <span className="badge badge-primary badge-pill">{item?.imageCollection.total}</span>
                            </li>
                           </a>
                        </Link>
                    ))
                }

            </ul>
            <GeneralFooter />

        </div>
    )
}


export async function getStaticProps() {

    const query = `query {
        # add your query
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
    const data = await res.json()
    const dapros = data.data.bannerCollection.items
    return {
      props: { items:dapros },
      revalidate: 20,
    }
  }