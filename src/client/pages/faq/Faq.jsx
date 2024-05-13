import React, { lazy } from 'react'
import "./faq.css"
import { Accordion, Container } from 'react-bootstrap'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const Faq = () => {
    return (
        <>
            <Header />
            <div className='faq_pages'>
                <Container>
                    <div id="accordianId" role="tablist" aria-multiselectable="true">
                        <h1>FAQs</h1>
                        <hr />
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='accordion-header'>What services does Lenexit provide?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Lenexit offers a range of services including web and mobile app development, custom plugin and theme development, SEO, UI/UX design, penetration testing, and more. We provide comprehensive solutions to meet your business needs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='accordion-header'>How experienced is the team at Lenexit?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Our team consists of highly skilled professionals with years of experience in their respective domains. We have a diverse team of experts in web development, mobile app development, design, SEO, and more, ensuring that we can deliver top-quality solutions tailored to your requirements.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='accordion-header'>Can you handle projects of any size?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Yes, we have the capabilities to handle projects of varying sizes and complexities. Whether you need a small website or a large-scale enterprise application, we can provide the expertise and resources to ensure successful project delivery.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='accordion-header'>How long does it take to complete a project?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    The project timeline depends on the specific requirements and scope of work. We work closely with our clients to establish realistic timelines and milestones. We strive to deliver projects on time, ensuring quality and customer satisfaction.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='accordion-header'>How involved will I be in the development process?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    We believe in close collaboration with our clients throughout the development process. Your input and feedback are invaluable to us. We encourage regular communication to ensure that the project aligns with your vision and requirements.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='accordion-header'>Do you offer post-development support and maintenance?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Yes, we provide post-development support and maintenance services to ensure that your website or application continues to perform optimally. We offer different support packages tailored to your needs, including bug fixes, updates, and enhancements.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className='accordion-header'>How do you ensure the security of my project?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    At Lenexit, we prioritize the security of our clients' projects. We follow industry best practices and implement robust security measures to protect your data and ensure a secure development environment. We conduct regular security audits and follow strict protocols to safeguard your project.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header className='accordion-header'>Can you assist with website optimization and SEO?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Absolutely! We have expertise in SEO and website optimization techniques. We can help improve your website's visibility, organic rankings, and overall performance through strategic SEO practices and optimization strategies.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header className='accordion-header'> Can you integrate third-party services into my project?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    Yes, we have experience integrating various third-party services, APIs, and platforms into projects. Whether it's payment gateways, social media integrations, or CRM systems, we can seamlessly incorporate them into your project to enhance its functionality.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header className='accordion-header'>What is the process to start a project with Lenexit?</Accordion.Header>
                                <Accordion.Body className='accordion_body'>
                                    To start a project with Lenexit, simply reach out to us with your requirements. We'll schedule an initial consultation to discuss your project in detail. From there, we'll provide you with a proposal outlining the project scope, timeline, and cost. Once you approve the proposal, we'll initiate the project development process.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Faq