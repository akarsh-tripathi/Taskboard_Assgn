import React, {useState} from 'react'
import filterIcon from '../Assets/IconModule/FilterIcon.svg'
import downIcon from '../Assets/IconModule/DownIcon.svg'

import './Navigation.css'

export default function Navbar(dataproperty) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            dataproperty.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            dataproperty.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="menu">
            <div className="menu-wrapper">
                <div>
                    <div className="menu-toggle-button" onClick={handleDisplayToggle}>
                        <div className="menu-icon menu-filter-icon">
                            <img src={filterIcon} alt="icon" />
                        </div>
                        <div className="menu-title">Display Options</div>
                        <div className="menu-icon menu-dropdown-icon">
                            <img src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "menu-dropdown menu-dropdown-active" : "menu-dropdown"}>
                        <div className="menu-filter-section">
                            <div className="menu-category-label">
                                Group By
                            </div>
                            <div className="menu-option-selector">
                                <select className="menu-select-box" value={dataproperty.groupValue} onChange={handleDisplayToggle} name="groupingOptions">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="menu-filter-section">
                            <div className="menu-category-label">
                                Sort By
                            </div>
                            <div className="menu-option-selector">
                                <select className="menu-select-box" value={dataproperty.orderValue} onChange={handleOrderingValue} name="orderingOptions">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
