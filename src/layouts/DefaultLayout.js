import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function DefaultLayout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </React.Fragment>
    );
  }