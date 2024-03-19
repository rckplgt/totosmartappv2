import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, ButtonGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
//import products from '../products'

const ProductScreen = () => {


    const [product, setProduct] = useState({})
    const {id:productId} =useParams()

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/product/${productId}`)
            setProduct(data)
        }
        fetchProduct()

    },[productId])

    //const product = products.find((p)=>p._id === productId)

  return (
    <>
    <Link className="btn btn-light my-3" to="/">Go back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup>
                <ListGroup.Item>
                    {product.name}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: KES{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                            <strong>KES {product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                            <strong>{product.countInStock > 0? 'In stock': 'Out of stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                            Add to cart

                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen