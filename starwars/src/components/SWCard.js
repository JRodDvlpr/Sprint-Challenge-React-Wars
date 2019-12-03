import React from 'react';
import { Card, CardText, CardBody, CardTitle, Col} from "reactstrap";


export default function StarWarsList (props){
    return(
        <Col width = "80%">
            <Card className = "listname" key={props.id}>
                <CardBody>
                
                    <CardTitle>Name: {props.name} </CardTitle>
                    <CardText>Sex: {props.sex}</CardText>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Eye Color: {props.height}</CardText>
                    <CardText>Hair Color: {props.hair}</CardText>
                </CardBody>
            </Card>
            <hr />
        </Col>
    );
};