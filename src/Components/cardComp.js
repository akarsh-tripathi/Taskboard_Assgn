import React from 'react'
import Tag0 from '../../Assets/CardTags/Tag0.svg';
import Tag1 from '../../Assets/CardTags/Tag1.svg';
import Tag2 from '../../Assets/CardTags/Tag2.svg';
import Tag3 from '../../Assets/CardTags/Tag3.svg';
import Tag4 from '../../Assets/CardTags/Tag4.svg';

import './Card.css'

export default function Card(dataproperty) {
  return (
    <>
        <div className="card-box">
            <div className="card-id-wrapper">
                <div className="card-id">{dataproperty.cardDetails.id}</div>
                <div className="profile">
                    <div className="card-profile-initial">{dataproperty.cardDetails.userObj.name[0]}{dataproperty.cardDetails.userObj.name[1]}</div>
                    <div className={dataproperty.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {dataproperty.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><image src={Tag0}/></div>,
                        1: <div className="card-tag-icon"><image src={Tag1}/></div>,
                        2: <div className="card-tag-icon"><image src={Tag2}/></div>,
                        3: <div className="card-tag-icon"><image src={Tag3}/></div>,
                        4: <div className="card-tag-icon"><image src={Tag4}/></div>
                    }[dataproperty.cardDetails.priority]
                }

                {
                    dataproperty.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
