import React, {Component} from 'react';
import styled from 'styled-components';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const CharDetailsHeader = styled.div `
    margin-bottom: 20px;
    text-align: center;
`;
const TermView = styled.span `
    font-weight: bold;
`;

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock>
                <CharDetailsHeader>John Snow</CharDetailsHeader>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Gender</TermView>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Born</TermView>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Died</TermView>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Culture</TermView>
                        <span>First</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }   
}