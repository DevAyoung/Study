import React, { Fragment } from 'react';
import { Row, Spinner } from 'reactstrap';

export const GrowingSpinner = (
    <Fragment>
        <Row className='d-flex justify-content-center m-5'>
            <Spinner style={{ width: '3rem', height: '3rem', backgroundColor: '#251552' }} type="grow" />
        </Row>
    </Fragment>
)
