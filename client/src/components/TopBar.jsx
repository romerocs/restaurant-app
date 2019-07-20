import React, { Component } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import sizes from "../style-settings/scale";
import colors from "../style-settings/colors";

import logo from "../_images/idontfeellikecooking.svg";

const Logo = styled.h1`
    max-width: 1000px;
    margin:0 auto;
    padding: ${sizes.large};
`;

const Wrapper = styled.header`
    background-color: ${colors.pinkLight};
    margin-bottom: ${sizes.xxlarge};
    padding: ${sizes.base} 0;
    position: relative;
    z-index: 10;
`;

class TopBar extends Component {

    render() {
        return (
            <Wrapper>
                <Logo>
                    <Link to="/" className="button-primary">
                        <img src={logo} alt=""/>
                    </Link>
                </Logo>
            </Wrapper>
        )
    }
}

export default TopBar;