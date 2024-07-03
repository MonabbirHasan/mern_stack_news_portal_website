import React, { useEffect, useRef, useState } from 'react'
import "./post_details.css"
import { CalendarMonth, Close, Comment, CopyAll, Facebook, Instagram, Mail, Person, Share, Telegram, Twitter, Visibility, YouTube } from '@mui/icons-material'
import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, IconButton, Stack } from '@mui/material'
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import PostCard from '../../components/post_card/PostCard'
import { useLocation, useNavigate } from 'react-router-dom'
import ApiClient from '../../../utils/ApiClient/ApiClient'
import Carousel from 'react-multi-carousel';
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
const PostDetails = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const post_id = location.state.post_id;
    const [ShowReplyCommentInput, setShowReplyCommentInput] = useState("")

    const [Comment_text, setComment] = useState("")
    const [Cname, setCname] = useState("")

    const [replyComment, setReplyComment] = useState("")
    const [replyCname, setReplyCname] = useState("")

    const [AllComment, setAllComment] = useState([])
    const [DataLoader, setDataLoader] = useState(false)
    const text_ref = useRef()
    const [OpenShareDailog, setOpenShareDailog] = useState(false);
    const handleOpenShareDailog = () => {
        setOpenShareDailog(true);
    };
    const handleCloseShareDailog = () => {
        setOpenShareDailog(false);
    };
    const [SinglePost, setSinglePost] = useState([])
    const [AllCategory, setAllCategory] = useState([])
    const [AllPosts, setAllPosts] = useState([])
    /*****************************
     * INITIALIZE CLIENT API ROOT
     ****************************/
    const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
    /*******************
     * SHARE CONTROLL
     ******************/
    const shareOnFacebook = (post_url) => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post_url)}`, '_blank');
        // window.open("https://www.facebook.com/sharer/sharer.php?u=" + post_url, "pop", "width=600, height=400, scrollbars=no");
    }
    const shareOnTwitter = (post_url) => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(post_url)}`, '_blank');
    }
    const shareOnInstagram = (post_url) => {
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(post_url)}`, '_blank');
    }
    const shareOnTelegram = (post_url) => {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(post_url)}`, '_blank');
    }
    const shareViaEmail = (post_url, s, b) => {
        const subject = encodeURIComponent('Check out this post!');
        const body = encodeURIComponent('Hi there,\n\nI thought you might be interested in this post:\n\n' + post_url);
        window.location.href = `mailto:?subject=${s}&body=${b}`;
    }
    const ShareCopy = () => {
        text_ref.current.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        toast.success("Url Copy Success")
    }
    /***********************
     * FETCH ALL POSTS
     ***********************/
    const single_post = async () => {
        setDataLoader(true)
        const response = await ClientApi.read(`api/posts/${post_id}`, import.meta.env.VITE_API_ACCESS_KEY);
        if (response.status === 200) {
            setSinglePost(response.data)
            setDataLoader(false)
        }
    }
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
    useEffect(() => {
        single_post()
        fetch_post()
        fetch_category()
    }, [post_id])

    /*********************
     * INSERT COMMENT
     *********************/
    const insert_comment = async () => {
        if (Comment_text != "" && Cname != "") {
            const data = {
                comment_content: Comment_text,
                comment_created: new Date().toLocaleDateString(),
                comment_reply: 0,
                comment_post: SinglePost.post_id,
                comment_author: Cname,
                is_active: 1
            }
            const response = await ClientApi.create(`api/comments`, data, import.meta.env.VITE_API_ACCESS_KEY)
            console.log(response)
            if (response.status === 201) {
                setComment("")
                toast.success("Commented")
                fetch_comment()
                setCname("")
            }
        } else {
            toast.error("please write comment!")
        }
    }
    /*********************
     * REPLY COMMENT
     *********************/
    const insert_reply_comment = async (reply_id, p_id) => {
        if (replyComment != "" && replyCname != "") {
            const data = {
                comment_content: replyComment,
                comment_created: new Date().toLocaleDateString(),
                comment_reply: reply_id,
                comment_post: p_id,
                comment_author: replyCname,
                is_active: 1
            }
            const response = await ClientApi.create(`api/comments`, data, import.meta.env.VITE_API_ACCESS_KEY)
            console.log(response)
            if (response.status === 201) {
                toast.success("Reply Commented")
                fetch_comment()
                setReplyComment("")
                setCname("")
            }
        } else {
            toast.error("please write reply!")
        }
    }
    /*********************
     * FETCH COMMENT
     *********************/
    const fetch_comment = async () => {
        const response = await ClientApi.read(`api/comments`, import.meta.env.VITE_API_ACCESS_KEY)
        if (response.status === 200) {
            // const filt = response.data.filter((items) => items.comment_post == SinglePost.post_id);
            const filteredComments = response.data.filter((item) => item.comment_post === post_id);
            setAllComment(filteredComments)
        }
    }
    useEffect(() => {
        fetch_comment()
    }, [post_id])
    /*********************
     * CARAUSAL SLIDER
     *********************/
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    /*********************
     * GENERATE SLUGS
     *********************/
    const slug_generate = (text) => {
        const t = text.replaceAll(" ", "-");
        return t;
    }

    if (DataLoader) {
        return <section style={{
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
        </section>
    }
    return (
        <>
            <Header />
            <Helmet>
                <title>LenexIT - Post Details</title>
                <link rel="canonical" href={location.href} />
            </Helmet>
            <div className='post_details'>
                <Container fluid>
                    <div className="post_details_banner">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/earum veniam consequatu">Details</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <section className='post_details_container'>
                        <Row>
                            <Col lg={9}>
                                <div className="post_details_wrapper">
                                    <div className="post_details_thumb">
                                        <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${SinglePost.post_thumbnail}`} alt="" />
                                    </div>
                                    <div className="post_details_category">
                                        <Stack direction={'row'} justifyContent={'space-between'} pt={3}>
                                            <Chip sx={{ textTransform: "capitalize" }} variant='outlined' color='success' label={AllCategory.filter((item) => item.category_id == SinglePost.post_category).map((i) => i.category_name)} />
                                            <Button onClick={handleOpenShareDailog} variant='outlined' color='success' size='small' startIcon={<Share />}>Share</Button>
                                        </Stack>
                                    </div>
                                    <div className="post_details_title">
                                        <h3>{SinglePost.post_title}</h3>
                                    </div>
                                    <div className="post_details_info">
                                        <span><Person htmlColor='green' fontSize='small' /><small>{SinglePost.post_author}</small></span>
                                        <span><CalendarMonth htmlColor='green' fontSize='small' /><small>{SinglePost.post_published}</small></span>
                                        <span><Comment htmlColor='green' fontSize='small' /><small>845</small></span>
                                        <span><Visibility htmlColor='green' fontSize='small' /><small>233</small></span>
                                    </div>
                                    <div className="post_details_description">
                                        <p>
                                            <div dangerouslySetInnerHTML={{ __html: SinglePost.post_description }} />
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                {/* DETAILS PAGE POST SECTION START HERE */}
                                <section className='post_details_page_right_post'>

                                </section>
                                {/* HORIZONTAL POST SECTION START HERE */}
                                <section className="horizontal_right">
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
                                                <div className="horizontal_post">
                                                    <div className="h_post_thumb">
                                                        <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`} alt="" />
                                                    </div>
                                                    <div className="h_post_detail">
                                                        <p onClick={() => navigate(`/${slug_generate(items.post_title)}`, { state: { post_id: items.post_id } })}>{items.post_title ? items.post_title.slice(0, 50)+"..." : "title not provided"}</p>
                                                        <div className="h_post_info">
                                                            <span><CalendarMonth fontSize='small' /> <small>{items.post_published}</small></span>
                                                            <span><Comment fontSize='small' /> <small>343</small></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </section>
                                {/* DETAILS PAGE ADS SECTION START HERE */}
                                <section className="details_page_ads">
                                    <img src="https://images.unsplash.com/photo-1537340728969-d9c8b65093be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZDNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                                </section>
                                {/* DETAILS PAGE POPULAR POST SECTION START HERE */}
                                <section className="most_popular_post">
                                    <h3>most popular</h3>
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
                                            AllPosts.reverse().map((items) => (
                                                <div className="horizontal_post">
                                                    <div className="h_post_thumb">
                                                        <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`} alt="" />
                                                    </div>
                                                    <div className="h_post_detail">
                                                        <p onClick={() => navigate(`/${slug_generate(items.post_title)}`, { state: { post_id: items.post_id } })}>{items.post_title ? items.post_title.slice(0, 50)+"..." : "title not provided"}</p>
                                                        <div className="h_post_info">
                                                            <span><CalendarMonth fontSize='small' /> <small>{items.post_published}</small></span>
                                                            <span><Comment fontSize='small' /> <small>343</small></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </section>
                            </Col>
                        </Row>
                    </section>
                    {/* RELETED POST SECTION START HERE */}
                    <section className='RELATED POSTS'>
                        <h4>RELATED POSTS</h4>
                        <Carousel arrows={true} responsive={responsive}>
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
                                        <div style={{ margin: '0 5px' }}>
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
                                                description={<div dangerouslySetInnerHTML={{ __html: items.post_description.slice(0, 150).replaceAll("<br>", " ") + "..." }} />}
                                            />
                                        </div>
                                    ))
                            }
                        </Carousel>
                        {/*
                        <Row>
                            {
                                Array.from({ length: 5 }).map((items) => (
                                    <Col>
                                        <PostCard
                                            thumbnail="https://preview.colorlib.com/theme/magazine/img/f1.jpg.webp"
                                            title="A Discount Toner Cartridge Is Better Than Ever."
                                            author_name="Jhone Doe"
                                            published={new Date().toLocaleDateString()}
                                            comment="302"
                                            category="news"
                                            description="Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius..."
                                        />
                                    </Col>
                                ))
                            }
                        </Row> */}
                    </section>
                    {/* COMMENT SECTION START HERE */}
                    <section className='post_details_comments_section'>
                        <Row>
                            <Col lg={7}>
                                <h5><Divider>({AllComment.length}) Comments</Divider></h5>
                                <div className="comments_list">
                                    {
                                        AllComment.reverse().map((items) => (
                                            <div className="comment_item border p-1 rounded-3" style={{
                                                marginLeft: items.comment_reply == 0 ? "" : "25px"
                                            }}>
                                                <Avatar />
                                                <div>
                                                    <p>{items.comment_author}</p>
                                                    <small>{items.comment_created}</small>
                                                    <p>{items.comment_content}</p>
                                                    <FormControl>
                                                        <Stack direction={'row'} spacing={1}>
                                                            <Button onClick={() => {
                                                                setShowReplyCommentInput(items.comment_id);
                                                            }} variant='outlined' color='success' size='small'>reply</Button>
                                                            {ShowReplyCommentInput === items.comment_id ?
                                                                (
                                                                    <Stack direction={'row'} spacing={1}>
                                                                        <FormControl>
                                                                            <Form.Control
                                                                                type="text"
                                                                                onChange={(e) => setReplyCname(e.target.value)}
                                                                                value={replyCname}
                                                                                placeholder='Your Name*'
                                                                                required
                                                                            />
                                                                        </FormControl>
                                                                        <FormControl>
                                                                            <Form.Control
                                                                                type="text"
                                                                                onChange={(e) => setReplyComment(e.target.value)}
                                                                                value={replyComment}
                                                                                placeholder='Your Comment*'
                                                                            />
                                                                        </FormControl>
                                                                        <button onClick={() => { insert_reply_comment(items.comment_id, SinglePost.post_id); setShowReplyCommentInput("") }}>send</button>
                                                                        <IconButton onClick={() => setShowReplyCommentInput("")}><Close htmlColor='red' /></IconButton>
                                                                    </Stack>
                                                                )
                                                                : ""}
                                                        </Stack>
                                                    </FormControl>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="comment_item is_reply">
                                            <Avatar src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305314294/original/57afc0685f147dc6af030c7d5b884fcbd39c78b0/create-stunning-ai-art-with-midjourney.png' />
                                            <div>
                                                <p>Emilly Blunt</p>
                                                <small>December 4, 2017 at 3:12 pm</small>
                                                <p>Never say goodbye till the end comes!</p>
                                                <button onClick={() => {
                                                    ShowReplyCommentInput == false ? setShowReplyCommentInput(true) : setShowReplyCommentInput(false)
                                                }}>reply</button>
                                                <FormControl>
                                                    {ShowReplyCommentInput ? <Form.Control /> : ""}
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="comment_item ">
                                            <Avatar src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305314294/original/57afc0685f147dc6af030c7d5b884fcbd39c78b0/create-stunning-ai-art-with-midjourney.png' />
                                            <div>
                                                <p>Emilly Blunt</p>
                                                <small>December 4, 2017 at 3:12 pm</small>
                                                <p>Never say goodbye till the end comes!</p>
                                                <button onClick={() => {
                                                    ShowReplyCommentInput == false ? setShowReplyCommentInput(true) : setShowReplyCommentInput(false)
                                                }}>reply</button>
                                                <FormControl>
                                                    {ShowReplyCommentInput ? <Form.Control /> : ""}
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="comment_item is_reply">
                                            <Avatar src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305314294/original/57afc0685f147dc6af030c7d5b884fcbd39c78b0/create-stunning-ai-art-with-midjourney.png' />
                                            <div>
                                                <p>Emilly Blunt</p>
                                                <small>December 4, 2017 at 3:12 pm</small>
                                                <p>Never say goodbye till the end comes!</p>
                                                <button onClick={() => {
                                                    ShowReplyCommentInput == false ? setShowReplyCommentInput(true) : setShowReplyCommentInput(false)
                                                }}>reply</button>
                                                <FormControl>
                                                    {ShowReplyCommentInput ? <Form.Control /> : ""}
                                                </FormControl>
                                            </div>
                                        </div> */}

                                </div>
                                <div className="comment_form shadow-sm p-3 rounded-1">
                                    <hr />
                                    <h4>Leave a Comment</h4>
                                    <FormControl fullWidth>
                                        <Form.Label>Your Name*</Form.Label>
                                        <Form.Control onChange={(e) => setCname(e.target.value)} value={Cname} type='text' />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <Form.Label>Your Comment*</Form.Label>
                                        <Form.Control onChange={(e) => setComment(e.target.value)} value={Comment_text} as="textarea" rows={4} />
                                    </FormControl>
                                    <Button onClick={insert_comment} variant='contained' sx={{ mt: 1 }} size='small' color='success'>Submit</Button>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                            <Col lg={3}>
                                <div className="comment_section_ads">
                                    <img src="https://images.unsplash.com/photo-1537340728969-d9c8b65093be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZDNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
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
                                                <div className="horizontal_post">
                                                    <div className="h_post_thumb">
                                                        <img src={`${import.meta.env.VITE_IMAGE_ROOT_URI}/blog_img/${items.post_thumbnail}`} alt="" />
                                                    </div>
                                                    <div className="h_post_detail">
                                                        <p onClick={() => navigate(`/${slug_generate(items.post_title)}`, { state: { post_id: items.post_id } })}>{items.post_title ? items.post_title.slice(0, 50)+"..." : "title not provided"}</p>
                                                        <div className="h_post_info">
                                                            <span><CalendarMonth fontSize='small' /> <small>{items.post_published}</small></span>
                                                            <span><Comment fontSize='small' /> <small>343</small></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                    <img src="https://images.unsplash.com/photo-1537340728969-d9c8b65093be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZDNzfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
            <Dialog
                open={OpenShareDailog}
                onClose={handleCloseShareDailog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Share in Your Network
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Stack direction={'row'} spacing={1}>
                            <IconButton onClick={() => shareOnFacebook(`${window.location.href}`)}><Facebook htmlColor='#1877F2' /></IconButton>
                            <IconButton onClick={() => shareOnInstagram(`${window.location.href}`)}><Instagram htmlColor='#C13584' /></IconButton>
                            <IconButton onClick={() => shareOnTelegram(`${window.location.href}`)}><Telegram htmlColor='#0088cc' /></IconButton>
                            <IconButton onClick={() => shareOnTwitter(`${window.location.href}`)}><Twitter htmlColor='#1DA1F2' /></IconButton>
                            <IconButton onClick={() => shareViaEmail(`${window.location.href}`, SinglePost.post_title, SinglePost.post_description)}><Mail htmlColor='#007bff' /></IconButton>
                            <IconButton onClick={ShareCopy}><CopyAll htmlColor='green' /></IconButton>
                        </Stack>
                        <Form.Control ref={text_ref} type='text' value={window.location.href} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseShareDailog} variant='outlined' size='small' color='error'>Close</Button>
                </DialogActions>
            </Dialog>
            <Footer />
        </>
    )
}

export default PostDetails