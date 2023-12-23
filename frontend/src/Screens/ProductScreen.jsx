import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../products'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../Components/Rating'

function ProductScreen() {
    const { id: productId } = useParams();

    const product = products.find((p)=> p._id === productId)
    console.log(product)
  return (
    <>
    <h1>Products</h1>
    <Link className='btn btn-light my-3' to='/'>Back</Link>
    <Row>
        <Col mg={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col mg={4}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    {product.name}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${products.numReviews} Reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
        <Col mg={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                <strong>{product.countInStock > 0 ? "In-Stock": "Out of Stock"}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen