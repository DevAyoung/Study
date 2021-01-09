import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const MainFooter = styled.div`
    background-color : lightpink;
    text-align: center;
    padding: 0.5rem;
`


const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    }


    return (
        <MainFooter>
            <Row>
                <Col>
                    <p>
                        Copyright &copy; <span>{thisYear()}</span>
                    </p>
                </Col>
            </Row>
        </MainFooter>
    )

};

export default Footer;