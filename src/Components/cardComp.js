import React from 'react'
import Tag0 from '../Assets/CardTags/Tag0.svg';
import Tag1 from '../Assets/CardTags/Tag1.svg';
import Tag2 from '../Assets/CardTags/Tag2.svg';
import Tag3 from '../Assets/CardTags/Tag3.svg';
import Tag4 from '../Assets/CardTags/Tag4.svg';



import './cardComp.css'

export default function Card(property) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{property.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{property.cardDetails.userObj.name[0]}{property.cardDetails.userObj.name[1]}</div>
                    <div className={property.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {property.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={Tag0}/></div>,
                        1: <div className="card-tag-icon"><img src={Tag1}/></div>,
                        2: <div className="card-tag-icon"><img src={Tag2}/></div>,
                        3: <div className="card-tag-icon"><img src={Tag3}/></div>,
                        4: <div className="card-tag-icon"><img src={Tag4}/></div>,
                       
                    }[property.cardDetails.priority]
                }

                {
                    property.cardDetails.tag.map((tag) => {
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
