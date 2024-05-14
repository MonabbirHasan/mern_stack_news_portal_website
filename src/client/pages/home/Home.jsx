import React, { lazy, useEffect, useState } from 'react'
import "./home.css"
import { Badge, Carousel, Col, Container, Form, Row } from 'react-bootstrap'
import { Facebook, Google, Instagram, Twitter } from '@mui/icons-material'
import ApiClient from "../../../utils/ApiClient/ApiClient"
import PostCard from '../../components/post_card/PostCard'
import { Blocks, ThreeDots } from 'react-loader-spinner'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import page_not_found from "../../../assets/img/page_not_found.svg"
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const Home = () => {
    const navigate = useNavigate()
    const [AllPosts, setAllPosts] = useState([])
    const [AllCategory, setAllCategory] = useState([])
    const [DataLoader, setDataLoader] = useState(false)
    const [AllComment, setAllComment] = useState([])

    const [subscribeMail, setSubscriberMail] = useState("")
    /*****************************
     * INITIALIZE CLIENT API ROOT
     ****************************/
    const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
    /***********************
     * FETCH ALL POSTS
     ***********************/
    const fetch_post = async () => {
        setDataLoader(true)
        const response = await ClientApi.read(`api/posts`, import.meta.env.VITE_API_ACCESS_KEY);
        if (response.status === 200) {
            setAllPosts(response.data)
            setDataLoader(false)
        }
    }
    /*********************
     * FETCH CATEGORY
     *********************/
    const fetch_category = async () => {
        setDataLoader(true)
        const response = await ClientApi.read(`api/category`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            setAllCategory(response.data)
            setDataLoader(false)
        }
    }
    /*********************
    * FETCH COMMENT
    *********************/
    const fetch_comment = async () => {
        const response = await ClientApi.read(`api/comments`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            // const filt = response.data.filter((items) => items.comment_post == SinglePost.post_id);
            // const filteredComments = response.data.filter((item) => item.comment_post === p_id);
            setAllComment(response.data)
        }
    }
    useEffect(() => {
        fetch_post()
        fetch_category()
        fetch_comment()
    }, [])
    /*********************
     * SAVE SUBSCRIBER
     *********************/
    const save_subscriber = async () => {
        if (subscribeMail != "") {
            toast.success("subscribe success")
        } else {
            toast.error("please Enter Your Mail")
        }
    }
    /*********************
     * GENERATE SLUGS
     *********************/
    const slug_generate = (text) => {
        const t = text.replaceAll(" ", "-");
        return t;
    }
    return (
        <>
            <Header />
            <div className='home_page'>
                <Container>
                    {/* BLOG BANNER SECTION START HERE */}
                    <section className="blog_banner">
                        <Row>
                            <Col lg={8}>
                                {
                                    DataLoader ? <section style={{
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: "100%",
                                        height: "100%"
                                    }}>
                                        <Blocks
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            visible={true}
                                        />
                                    </section> :
                                        <Carousel>
                                            {
                                                AllPosts.map((items, index) => (
                                                    <Carousel.Item key={index}>
                                                        <div className="banner_left">
                                                            <div className="banner_thumbnail">
                                                                <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`} alt="" />
                                                            </div>
                                                            <div className="blog_details">
                                                                <Badge>{AllCategory.filter((item) => item.category_id == items.post_category).map((i) => i.category_name)}</Badge>
                                                                <h3 onClick={() => navigate(`/${slug_generate(items.post_title)}`, { state: { post_id: items.post_id } })}>{items.post_title}</h3>
                                                                <div className="post_author">
                                                                    <span className="author_name">{items.post_author} | </span>
                                                                    <span>{items.post_published}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Carousel.Item>
                                                ))
                                            }
                                        </Carousel>
                                }
                            </Col>
                            <Col lg={4}>
                                <div className="banner_right">
                                    {
                                        DataLoader ? <section style={{
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: "100%",
                                            height: "100%"
                                        }}>
                                            <Blocks
                                                height="80"
                                                width="80"
                                                color="#4fa94d"
                                                ariaLabel="blocks-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="blocks-wrapper"
                                                visible={true}
                                            />
                                        </section> :
                                            AllPosts.slice(0, 2).map((items, index) => (
                                                <div className="banner_item">
                                                    <div className="banner_thumbnail">
                                                        <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`} alt="" />
                                                    </div>
                                                    <div className="blog_details">
                                                        <Badge bg='danger'>{AllCategory.filter((item) => item.category_id == items.post_category).map((i) => i.category_name)}</Badge>
                                                        <h3 onClick={() => navigate(`/${slug_generate(items.post_title)}`, { state: { post_id: items.post_id } })}>{items.post_title}</h3>
                                                        <div className="post_author">
                                                            <span className="author_name">{items.post_author} | </span>
                                                            <span>{items.post_published}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </Col>
                        </Row>
                    </section>
                    {/* MIDDLE SECTION START HERE */}
                    <section className="middle_area">
                        <Row>
                            <Col lg={9}>
                                {/* RECENT POST SECTION START HERE */}
                                <div className="recent_post">
                                    <div className="section_title">
                                        <h2>recent post</h2>
                                    </div>
                                    <Row lg={3}>
                                        {
                                            DataLoader ? <section style={{
                                                display: "flex",
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="#4fa94d"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                />
                                            </section> :
                                                AllPosts ? AllPosts.map((items) => (
                                                    <Col>
                                                        <PostCard
                                                            post_id={items.post_id}
                                                            thumbnail={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`}
                                                            title={items.post_title}
                                                            author_name={items.post_author}
                                                            published={items.post_published.split("T")[0]}
                                                            comment={AllComment.filter(comment => comment.comment_post === items.post_comment).length}
                                                            category={
                                                                AllCategory.filter((item) => item.category_id == items.post_category).map((i) => i.category_name)
                                                            }
                                                            description={<div dangerouslySetInnerHTML={{ __html: items.post_description.slice(0, 140) + "..." }} />}
                                                        />
                                                    </Col>
                                                )) : (<section style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <img src={page_not_found} alt="" />
                                                </section>)
                                        }
                                    </Row>
                                </div>
                                {/* CATEGORY POST SECTION START HERE */}
                                <div className="category_post">
                                    {
                                        DataLoader ? <section style={{
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: "100%",
                                            height: "100%"
                                        }}>
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="#4fa94d"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />
                                        </section> :
                                            AllCategory.map(category => (
                                                <div className="category_item" key={category.category_id}>
                                                    <h4 className='category_post_title'>{category.category_name}</h4>
                                                    <Row lg={3}>
                                                        {AllPosts ? AllPosts.filter(post => post.post_category !== category.category_id).map(post => (
                                                            <Col key={post.post_id}>
                                                                <PostCard
                                                                    post_id={post.post_id}
                                                                    thumbnail={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${post.post_thumbnail}`}
                                                                    title={post.post_title}
                                                                    author_name={post.post_author}
                                                                    published={new Date().toLocaleDateString()}
                                                                    comment="302"
                                                                    category={category.category_name}
                                                                    description={<div dangerouslySetInnerHTML={{ __html: post.post_description.slice(0, 140) + "..." }} />}
                                                                />
                                                            </Col>
                                                        )) : (<section style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={page_not_found} alt="" />
                                                        </section>)}
                                                    </Row>
                                                </div>
                                            ))}
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="right_sidebar">
                                    {/* ADS SECTION START HERE */}
                                    <div className="ads">
                                        <img style={{ width: '100%', height: "auto", borderRadius: '10px' }} src="https://preview.colorlib.com/theme/callie/img/post-2.jpg.webp" alt="" />
                                    </div>
                                    {/* FOLLOW US SECTION START HERE */}
                                    <div className="follow_us">
                                        <h4>follow us</h4>
                                        <div className="social_media">
                                            <div className='follow_item'>
                                                <span><Twitter htmlColor='#1DA1F2' /></span>
                                                <p>23.3k</p>
                                                <p>followers</p>
                                            </div>
                                            <div className='follow_item'>
                                                <span><Instagram htmlColor='#833AB4' /></span>
                                                <p>23.3k</p>
                                                <p>followers</p>
                                            </div>
                                            <div className='follow_item'>
                                                <span><Facebook htmlColor='#1877F2' /></span>
                                                <p>23.3k</p>
                                                <p>followers</p>
                                            </div>
                                            <div className='follow_item'>
                                                <span><Google htmlColor='#4285F4' /></span>
                                                <p>23.3k</p>
                                                <p>followers</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* CATEGORY SECTION START HERE */}
                                    <div className="category">
                                        <h4>
                                            categories
                                        </h4>
                                        <ul style={{ margin: 0, padding: 0 }}>
                                            {
                                                DataLoader ? <section style={{
                                                    display: "flex",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: "100%",
                                                    height: "100%"
                                                }}>
                                                    <ThreeDots
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        color="#4fa94d"
                                                        radius="9"
                                                        ariaLabel="three-dots-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                    />
                                                </section> :
                                                    AllCategory.map((items) => (
                                                        <li className='blog_category_right_sidebar' onClick={() => navigate(`category/${items.category_name}`, { state: { c_id: items.category_id } })}>{items.category_name}</li>
                                                    ))
                                            }
                                        </ul>
                                    </div>
                                    {/* RECENT POST SECTION START HERE */}
                                    <div className="news_letter">
                                        <h4>
                                            news letter
                                        </h4>
                                        <div className="subscribe_box">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid sed similique velit eligendi voluptates soluta! Magnam, deleniti totam quo dicta reprehenderit et nihil quaerat culpa unde amet distinctio! Sit?</p>
                                            <Form.Control
                                                onChange={(e) => setSubscriberMail(e.target.value)}
                                                value={subscribeMail}
                                                type='email'
                                                name="mail"
                                                required
                                                placeholder='Enter Your Email!' />
                                            <Button
                                                onClick={save_subscriber}
                                                variant='outlined'
                                                sx={{ mt: 1 }}
                                                color='error'
                                            >subscribe</Button>
                                        </div>

                                    </div>
                                    {/* POPULAR POST SECTION START HERE */}
                                    <div className="popular_post">
                                        <h4 className='popular_post_title'>
                                            popular post
                                        </h4>
                                        {
                                            DataLoader ? <section style={{
                                                display: "flex",
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="#4fa94d"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                />
                                            </section> :
                                                AllPosts ? AllPosts.slice(0, 3).reverse().map((items) => (
                                                    <PostCard
                                                        post_id={items.post_id}
                                                        thumbnail={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`}
                                                        title={items.post_title}
                                                        author_name={items.post_author}
                                                        published={items.post_published.split("T")[0]}
                                                        comment="302"
                                                        category={
                                                            AllCategory.filter((item) => item.category_id == items.post_category).map((i) => i.category_name)
                                                        }
                                                        description={<div dangerouslySetInnerHTML={{ __html: items.post_description.slice(0, 140) + "..." }} />}
                                                    />
                                                )) : (<section style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <img src={page_not_found} alt="" />
                                                </section>)
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    {/* ADS SECTION START HERE */}
                    <section className="center_ads">
                        <center>
                            <img style={{ width: '100%', height: '60vh', borderRadius: '10px' }} src="https://media.licdn.com/dms/image/D4E12AQEXMcLFHTrS_w/article-cover_image-shrink_720_1280/0/1694756462683?e=2147483647&v=beta&t=1uV52_rsMD0_nkewJrVTDKHSbS5iQiL-_NeHjMA3iIU" alt="" />
                        </center>
                    </section>
                    <section className='random_post'>
                    </section>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Home