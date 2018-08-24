import React from 'react'
import Layout from "../components/Layout"
import { navigateTo } from 'gatsby'
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleRecaptcha = value => {
        this.setState({ "g-recaptcha-response": value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (
            <Layout>
                <Container>
                    <h6 className='text-center'>
                        Please use the form below to contact us and we will get back to you as soon as possible.
                </h6>
                    <br />
                    <Form method="post"
                        action="/thanks/"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="email" name="name" id="name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="message" sm={2}>Message</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="message" id="message" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className='text-center'>
                            <Recaptcha
                                ref="recaptcha"
                                sitekey={RECAPTCHA_KEY}
                                onChange={this.handleRecaptcha}
                            />
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </Layout>
        )
    }
}