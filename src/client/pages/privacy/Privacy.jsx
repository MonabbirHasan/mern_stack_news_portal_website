import React, { lazy } from 'react'
import { Container } from 'react-bootstrap'
import "./privacy_policy.css"
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const Privacy = () => {
    return (
        <>
            <Header />
            <div className='privacy_policy'>
                <Container>
                    <h1 style={{ textTransform: 'capitalize' }}>our Terms & conditions</h1>
                    <hr />
                    <div>
                        <b>Acceptance of Terms</b>
                        <p>
                            By accessing and using Lenexit's services, including but not limited to website development, mobile app development, and digital marketing, you agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our services.
                        </p>
                    </div>
                    <div>
                        <b>Services</b>
                        <p>
                            Lenexit provides web and mobile application development, digital marketing, and related services. The specifics of the services provided, including deliverables, timelines, and pricing, will be outlined in a separate agreement or project proposal.
                        </p>
                    </div>
                    <div>
                        <b>Intellectual Property</b>
                        <p>
                            All intellectual property rights, including trademarks, copyrights, and patents, related to Lenexit's services and deliverables remain the property of Lenexit unless otherwise stated in a separate agreement. Unauthorized use, reproduction, or distribution of Lenexit's intellectual property is strictly prohibited.
                        </p>
                    </div>
                    <div>
                        <b>Client Responsibilities</b>
                        <p>
                            Clients are responsible for providing accurate and complete information, materials, and necessary access required for the provision of services by Lenexit. Clients also bear responsibility for ensuring that any content provided does not infringe upon any third-party rights.
                        </p>
                    </div>
                    <div>
                        <b>Payment and Fees</b>
                        <p>
                            Payment terms and fees for Lenexit's services will be outlined in a separate agreement or project proposal. Clients agree to make timely payments according to the agreed-upon terms. Failure to make payments may result in project delays or termination of services.
                        </p>
                    </div>
                    <div>
                        <b>Confidentiality</b>
                        <p>
                            Lenexit and clients agree to treat any confidential information shared during the course of the project as strictly confidential. Both parties shall take appropriate measures to maintain the confidentiality and protect sensitive information from unauthorized access or disclosure.
                        </p>
                    </div>
                    <div>
                        <b>Limitation of Liability</b>
                        <p>
                            Lenexit shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. We make no guarantees or warranties regarding the performance, accuracy, or suitability of the services provided.
                        </p>
                    </div>
                    <div>
                        <b>Termination</b>
                        <p>
                            Either party may terminate the agreement for services upon providing written notice. Termination may result in additional fees, depending on the stage of the project and the work completed. Any outstanding payments or obligations shall be settled upon termination.
                        </p>
                    </div>
                    <div>
                        <b>Governing Law and Jurisdiction</b>
                        <p>
                            These terms and conditions shall be governed by and construed in accordance with the laws of [jurisdiction]. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [jurisdiction].
                        </p>
                    </div>
                    <div>
                        <b>Amendments</b>
                        <p>
                            Lenexit reserves the right to modify or update these terms and conditions at any time. Clients will be notified of any changes, and continued use of our services after the notification constitutes acceptance of the modified terms.
                            These terms and conditions constitute the entire agreement between Lenexit and its clients and supersede any prior agreements or understandings.
                            If you have any questions or concerns about these terms and conditions, please contact Lenexit for clarification.
                        </p>
                    </div>

                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Privacy