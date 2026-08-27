import React from 'react'
import "./portfolio-list.scss"

function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li className="portfolio-list-item" role="presentation">
      <button
        type="button"
        role="tab"
        aria-selected={active}
        className={active ? "portfolio-tab active" : "portfolio-tab"}
        onClick={() => setSelected(id)}
      >
        {title}
      </button>
    </li>
  )
}

export default PortfolioList