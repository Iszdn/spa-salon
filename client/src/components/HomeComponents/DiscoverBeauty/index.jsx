import React, { useEffect, useState } from 'react'
import dis from "../../../assets/imgs/discver.png"
import "./index.scss"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { t } from 'i18next';
const Discover = () => {
  const [spaCategory, setSpaCategory] = useState([])
  const [loading, setLoading] = useState(true)

  async function getSpaCategory() {
    const res=await axios("http://localhost:5000/spaCategoryServices")
    setSpaCategory(res.data)
  setLoading(false)
  }
  useEffect(() => {
    getSpaCategory()
  }, [])
  return (
    <section id='discover'>
      <div className="container">
        <div className="row">
          <div  data-aos="fade-right" data-aos-duration="1000" className="col-lg-6 col-md-12 col-12">
              <div className="title">
         <h3>{t("Our Services")}</h3>
      </div>
      <div className="services">
        {
          loading ? <span className="loader"></span> :
        
        (
          spaCategory && spaCategory.map(x=>
            <div key={x._id} className="formula">
        <div className="image">
        <img src={x.image} alt="" />
        </div> 
        <div className="info">
          <h4><Link to={`/services/${x._id}`}>{x.title}</Link></h4>
          <p>{x.description}</p>
        </div>
        </div>
            )
       ) }
        
        
      
      <div className="read-more">
      <div className="button-an">
    <Link to="/services">read more</Link>
  </div>
      </div>
      </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" className="col-lg-6 col-md-12 col-12">
            <div className="massage">
             <img src={dis} alt="" />
            </div>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Discover