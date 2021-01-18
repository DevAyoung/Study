import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const MainFooter = styled.div`
    background-color : #251552;
    text-align: center;
    padding: 0.5rem;
    color: #fff;
`


const FooterText = styled.div`
    color: #fff;
    font-size: 12px;
`

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    }




    return (
        <MainFooter>
            <Row className="mr-0">
                <Col>
                    <p>
                        Copyright &copy; <span>{thisYear()}</span> 
                    </p>
                    <FooterText>
                        LEEAYOUNG's Blog All Rights Reserved.
                    </FooterText>
                </Col>
            </Row>
        </MainFooter>
    )

};

export default Footer;