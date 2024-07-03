import React, { lazy, useEffect, useState } from 'react'
import "./category.css"
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import PostCard from '../../components/post_card/PostCard'
import { useLocation, useNavigate } from 'react-router-dom'
import ApiClient from '../../../utils/ApiClient/ApiClient'
import { ThreeDots } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
const Header = lazy(() => import("../../components/common/header/Header"))
const Footer = lazy(() => import("../../components/common/footer/Footer"))
const Category = () => {
    const [ImgUrl, setImgUrl] = useState("")
    const navigate = useNavigate()
    const [AllPosts, setAllPosts] = useState([])
    const [AllCategory, setAllCategory] = useState()
    const [DataLoader, setDataLoader] = useState(false)
    const location = useLocation()
    const c_id = location.state.c_id
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
            const filt = response.data.filter((item) => item.post_category == AllCategory.category_id);
            setAllPosts(filt);
            setDataLoader(false)
        }
    }
    /*********************
     * FETCH CATEGORY
     *********************/
    const fetch_category = async () => {
        setDataLoader(true)
        const response = await ClientApi.read(`api/category/${c_id}`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            setAllCategory(response.data)
            setDataLoader(false)
        }
    }
    useEffect(() => {
        fetch_post()
        fetch_category()
    }, [c_id])
    /*********************
     * GENERATE SLUGS
     *********************/
    const slug_generate = (text) => {
        const t = text.replaceAll(" ", "-");
        return t;
    }
    useEffect(() => {
        const img = `https://source.unsplash.com/random/1080x600?sig=${Math.floor(Math.random() * 200)}`
        setImgUrl(img)
    }, [ImgUrl])

    return (
        <>
            <Header />
            <Helmet>
                <title>LenexIT - Category</title>
                <link rel="canonical" href={location.href} />
            </Helmet>
            <div className="category_page">
                <Container>
                    <div className="category_wrapper">
                        {/* CATEGORY BANNER START HERE*/}
                        <div className="category_banner">
                            <h1>Posts Category</h1>
                            <img src={ImgUrl} alt="category page thumbnail" />
                        </div>
                        {/* CATEGORY CONTAINER START HERE*/}
                        <div className="category_container">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/category">Category</Breadcrumb.Item>
                            </Breadcrumb>
                            <Row lg={4}>
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
                                        AllPosts.map((items) => (
                                            <Col>
                                                <PostCard
                                                    post_id={items.post_id}
                                                    thumbnail={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`}
                                                    title={items.post_title}
                                                    author_name={items.post_author}
                                                    published={items.post_published.split("T")[0]}
                                                    comment="302"
                                                    category={AllCategory.category_name}
                                                    description={<div dangerouslySetInnerHTML={{ __html: items.post_description.slice(0, 140) + "..." }} />}
                                                />
                                            </Col>
                                        ))
                                }
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Category