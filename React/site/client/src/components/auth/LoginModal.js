import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from '../../redux/types';

const LoginModal = () => {
    const [modal, setModal] = useState(false)
    const [localMsg, setLocalMsg] = useState('')
    const [form, setValues] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const {errorMsg} = useSelector((state) => state.auth)
    useEffect(() => {
        try{
            setLocalMsg(errorMsg)
        } catch(e) {
            console.log(e)
        }
    }, [errorMsg])

    const handleToggle = () => {
        dispatch({
            type: CLEAR_ERROR_REQUEST
        })
        setModal(!modal)
    }

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const {email, password} = form
        const user = {email, password}
        console.log(user)
        dispatch({
            type: LOGIN_REQUEST,
            payload
: user,
        })
    }
    return (
        <div>
            <NavLink onClick={handleToggle} href="#">
                LOGIN
            </NavLink>

            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>
                    LOGIN
                </ModalHeader>

                <ModalBody>
                    {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}

                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="email">EMAIL</Label>
                            <Input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder='이메일을 입력해주세요.'
                            // React에서는 onChange를 필수로 입력해줘야 함.
                            onChange={onChange}
                            />


                            <Label for="password">PASSWORD</Label>
                            <Input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder='비밀번호를 입력해주세요.'
                            onChange={onChange}
                            />

                            <Button style={{marginTop: "2rem", backgroundColor:"#47196c"}} block>
                                로그인
                            </Button>

                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default LoginModal;