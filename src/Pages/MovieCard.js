import React from 'react'
import { Modal, ModalBody, Button, show} from 'react-bootstrap'
import '../Pages/MovieCard.css'
import { useState } from 'react'





const MovieCard = ({poster_path, original_title , vote_average, release_date, overview}) => {

    const [show,setShow]=useState (false);

    const handleShow = () => setShow (true);
    const handleClose = () => setShow (false);
    const API_IMG= 'https://image.tmdb.org/t/p/w500/'

    return <div className='container'>
        <div className='card text-center bg -secondary mb-3'>
            <div>
                <img className='card-img-top' src={(API_IMG+poster_path)}/>
                <div className='card-body'>
                    <button type='button' className="btn btn-secondary" onClick={handleShow}>Xem Thêm</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                        <img className='card-img-top' style={{width: '15rem', padding: '5px'}} src={(API_IMG+poster_path)}/>
                        <h2>{original_title}</h2>
                        <h3>{vote_average}</h3>
                        <h4>Release Date :{release_date}</h4>
                        <br></br>
                        <h6>Overview:</h6>
                        <p>{overview}</p>
                        </ModalBody>
                        <Modal.Footer>
                            <button variant="secondary" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
}
export default MovieCard