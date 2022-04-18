import axios from 'axios';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { productsActions } from '../redux/actions/productsAction';

export default function Products() {
  const { products } = useSelector(state => state);
  const store = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("products.json")
      .then(res => {
        // console.log(res.data)
        dispatch(productsActions(res.data))
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="container">
        {console.log(products)}
        <div className="row">
          {products.map((item, index) => (
            <div className="col-3 mt-2" key={index}>
              <div className="card">
                <div className="card-header p-2">
                  <img className='w-100' style={{ objectFit: "cover", height: "200px" }} src={item.image} alt="rasm" />
                </div>
                <div className="card-body">
                  <h5>Title:{item.category}</h5>
                  <h6>Price:</h6>
                  <p>Description:</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
