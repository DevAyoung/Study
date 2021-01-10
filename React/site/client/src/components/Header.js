import React from "react";
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import headerBg from '../assets/img/headerBg.png';


const PageHeader = styled.div`
    height: 250px;
    background: url(${headerBg});
    background-attachment: fixed;
    background-size: cover;
    background-position: 100% 0%;
    background-repeat: no-repeat;
    color: #fff;
    border-bottom: 8px solid #47196c;
    padding-top: 70px;
`

const Header = () => {
    return (
        <PageHeader className="mb-3">
            <Row className="mr-0">
                <Col md="6" sm="auto" className="text-center m-auto">
                    <h1>Frontend Developer</h1>
                    <p>Jenny's 개발스터디 블로그입니다.</p>
                </Col>
            </Row>
        </PageHeader>
    );
};

export default Header;