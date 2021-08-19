import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class Iframe extends Component {
    render() {
        return(
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        );
    }
}

export default Iframe