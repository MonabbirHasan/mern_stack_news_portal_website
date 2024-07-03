import React, { lazy } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./cookie_policy.css"
import { Helmet } from 'react-helmet'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const CookiePolicy = () => {
    return (
        <>
            <Header />
            <Helmet>
                <title>LenexIT - Cookie policy</title>
                <link rel="canonical" href={location.href} />
            </Helmet>
            <div className='cookie_policy'>
                <Container>
                    <h1>Cookie Policy of Lenexit</h1>
                    <hr />
                    <div >
                        <div>
                            <b>What are Cookies?</b>
                            <p>
                                Cookies are small text files that are stored on your device (computer, mobile device, or tablet) when you visit our website. These files contain information that helps improve your browsing experience and allows us to analyze website traffic and usage.
                            </p>
                        </div>
                        <div>
                            <b>Types of Cookies Used</b>
                            <p>
                                a. Necessary Cookies: These cookies are essential for the functioning of our website and cannot be disabled. They enable core functionality, such as accessing secure areas and remembering user preferences.
                            </p>
                            <p>
                                b. Analytical Cookies: We use analytical cookies to collect information about how visitors use our website. This helps us analyze website traffic, identify trends, and improve our website's performance and functionality.
                            </p>
                            <p>
                                c. Marketing Cookies: Marketing cookies are used to track visitors across websites. The information collected is used to deliver personalized advertisements and measure the effectiveness of our marketing campaigns.
                            </p>
                        </div>
                        <div>
                            <b>Cookie Management</b>
                            <p>
                                By using our website, you consent to the use of cookies as described in this policy. You can manage and control cookies through your browser settings. Most web browsers allow you to delete or block cookies, and you can also set preferences for how cookies are handled. However, please note that blocking or deleting cookies may impact your browsing experience and certain website functionality.
                            </p>
                        </div>
                        <div>
                            <b>Third-Party Cookies</b>
                            <p>
                                We may use third-party services on our website that may also place cookies on your device. These third-party services include analytics tools, advertising networks, and social media platforms. We do not have control over the cookies placed by these third parties and recommend reviewing their respective cookie policies for more information.
                            </p>
                        </div>
                        <div>
                            <b>Data Privacy and Security</b>
                            <p>
                                We are committed to protecting your privacy and ensuring the security of your personal data. The use of cookies does not enable us to collect personally identifiable information unless you voluntarily provide it. For more information on how we handle and protect your personal data, please refer to our Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <b>Updates to the Cookie Policy</b>
                            <p>
                                We may update our Cookie Policy from time to time to reflect any changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed about how we use cookies.
                                If you have any questions or concerns about our Cookie Policy, please <NavLink to={"/contact"}>contact</NavLink> us for more information.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default CookiePolicy