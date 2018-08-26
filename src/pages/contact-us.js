import React from "react";
import { navigate } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import Layout from '../components/Layout';
import {Container} from 'reactstrap';

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
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Container>
            <form
            name="contact-recaptcha"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-recaptcha="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
            <noscript>
                <p>This form won’t work with Javascript disabled</p>
            </noscript>
          <input type="hidden" name="form-name" value="contact-recaptcha-new" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
            <div className="form-group">
                <label htmlFor="name">
                Your name
                </label>
                <input type="text" name="name" className="form-control" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">
                Your email
                </label>
                <input type="email" name="email" className="form-control" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">
                Message
                </label>
                <textarea name="message" className="form-control" onChange={this.handleChange} />
            </div>
            <Recaptcha
                ref="recaptcha"
                sitekey={RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
            />
            <button type="submit"  className="btn btn-primary">Send</button>
            </form>
        </Container>
      </Layout>
    );
  }
}