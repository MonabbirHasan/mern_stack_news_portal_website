import React from 'react'
import "./admin_dashboard.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Stack } from '@mui/material'
const AdminDasboard = () => {
    return (
        <div className='admin_dashboard'>
            <Container>
                <div className="admin_dashboard_wrapper">
                    <div className="analytic">
                        <Row lg={3} sm={1} md={2}>
                            <Col>
                                <div className="visitor feature_card">
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                        <p>visitor today</p>
                                        <p>20-03-2023</p>
                                    </Stack>
                                    <h1>303</h1>
                                </div>
                            </Col>
                            <Col>
                                <div className="visitor feature_card">
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                        <p>total visitor</p>
                                        <p>20-03-2023</p>
                                    </Stack>
                                    <h1>1234</h1>
                                </div>
                            </Col>
                            <Col>
                                <div className="visitor feature_card">
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                        <p>total post</p>
                                        <p>20-03-2023</p>
                                    </Stack>
                                    <h1>654</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="admin_dashboard_content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis asperiores necessitatibus dicta neque repudiandae nihil doloremque eveniet est, at distinctio ad autem culpa repellat beatae similique voluptatibus dolor enim quisquam. Maiores eum dignissimos sit impedit laboriosam corporis nostrum error cupiditate. Nisi architecto reprehenderit possimus qui eum in recusandae nemo ullam distinctio rem vitae sit hic veritatis laudantium, minus at commodi impedit maxime cum optio nobis a repellendus iure blanditiis. Temporibus, accusamus velit totam id voluptatum inventore blanditiis, fugiat tenetur dolore at dignissimos amet minima delectus similique, adipisci ratione quaerat non. Voluptatem quae, velit aliquam, consequatur saepe officiis mollitia quas ipsa exercitationem tempore odio quaerat iure reprehenderit porro blanditiis libero natus fuga, asperiores ex iusto eius. Ab cum temporibus earum dolore maiores perspiciatis qui voluptate iste saepe. Cum sunt, deleniti nemo rem rerum dolores voluptatibus perferendis aut autem ipsam quis. Vel velit doloremque tempora. Tenetur animi dolor quisquam quos itaque eius laborum, necessitatibus totam. Cumque eius fugit consectetur, expedita unde odit nesciunt soluta. In sed, accusantium, ex cumque soluta corrupti id magnam error iste laboriosam alias aliquam dolor aspernatur eius magni exercitationem delectus. Ex, pariatur quia. Dolorum libero voluptatum tenetur et! Voluptatem facere vero modi odit corporis magnam! Suscipit fuga nesciunt quae quasi autem eum voluptatibus provident aperiam tempora sit perspiciatis molestiae, saepe commodi mollitia iste eius quis nihil tempore et culpa recusandae vero possimus necessitatibus adipisci! Quae reiciendis deserunt veniam totam modi culpa possimus, vel blanditiis ipsum, quis esse, voluptas laudantium repellat provident iste qui aspernatur voluptatum maxime amet. Ut sint aliquid tenetur sit magnam nisi fuga assumenda ratione fugit harum blanditiis, explicabo reiciendis dignissimos natus accusamus similique ea odio impedit adipisci. Impedit provident unde accusamus ipsa illo reiciendis voluptatibus sequi dicta rerum sit, commodi modi accusantium nihil. Deleniti tenetur voluptatibus culpa accusamus debitis veniam assumenda excepturi officiis ab nostrum.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AdminDasboard