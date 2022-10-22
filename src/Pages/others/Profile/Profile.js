import { stripBasename } from '@remix-run/router';
import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider';



const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName)
    const photoURLRef = useRef(user.photoURL)
    // const photoURLRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleChange = event => {
        setName(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={name} type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Your Photo url</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text"  name='photoUrl' placeholder="Enter photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Register
            </Button>
            {/* <Form.Text className="text-danger">
                {error}
            </Form.Text> */}
        </Form>
    );
};

export default Profile;