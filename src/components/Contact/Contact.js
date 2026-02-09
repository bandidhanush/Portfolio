import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!formData.user_name || !formData.user_email || !formData.message) {
            setNotDone(true);
            return;
        }

        // Trigger animation and reset immediately
        setDone(true);
        setFormData({}); // Clear form data
        form.current.reset(); // Clear form fields

        setTimeout(() => {
            setDone(false);
        }, 5000); // Reset animation state after 5 seconds

        emailjs
            .sendForm(
                "service_h96c5oy", // Replace with your Service ID
                "template_rkvhhi9", // Replace with your Template ID
                form.current,
                "OWOxqf_Bo_KJS7uKc" // Replace with your Public Key
            )
            .then(
                (result) => {
                    console.log("Email status:", result.text);
                },
                (error) => {
                    console.log("Email status:", error.text);
                }
            );
    };

    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Contact <strong className="purple">Me</strong>
                        </h1>
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <input
                                type="text"
                                name="user_name"
                                className="input-field"
                                placeholder="Name"
                                value={formData.user_name || ""}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="user_email"
                                className="input-field"
                                placeholder="Email"
                                value={formData.user_email || ""}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                className="input-field"
                                placeholder="Message"
                                rows="4"
                                value={formData.message || ""}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                disabled={done}
                                style={{ maxWidth: "200px" }}
                            >
                                {done ? "Sent!" : "Send"} <AiOutlineSend />
                            </Button>
                            {notDone && <span className="not-done">Please fill all the associated fields</span>}
                            {done && (
                                <div className="success-animation">
                                    <div className="checkmark-circle">
                                        <div className="checkmark draw"></div>
                                    </div>
                                    <span className="done-text">Message Sent!</span>
                                </div>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
