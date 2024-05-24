import React from 'react'
import "./product_card.css"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Star, StarHalf, StarOutline } from '@mui/icons-material'
const ProductCard = (props) => {
    const navigate = useNavigate()
    // LIVE WINDOW FUNCTION
    const live_window = (url) => {
        window.open(url);
    }
    // RATING PROVIDER FUNCTION
    const RatingProviver = (ratings) => {
        return ratings == 1 ?
            <>
                <Star htmlColor='orange' />
                <StarOutline htmlColor='orange' />
                <StarOutline htmlColor='orange' />
                <StarOutline htmlColor='orange' />
                <StarOutline htmlColor='orange' />
            </>
            :
            ratings == 1.5 ?
                <>
                    <Star htmlColor='orange' />
                    <StarHalf htmlColor='orange' />
                    <StarOutline htmlColor='orange' />
                    <StarOutline htmlColor='orange' />
                    <StarOutline htmlColor='orange' />
                </>
                :
                ratings == 2 ?
                    <>
                        <Star htmlColor='orange' />
                        <Star htmlColor='orange' />
                        <StarOutline htmlColor='orange' />
                        <StarOutline htmlColor='orange' />
                        <StarOutline htmlColor='orange' />
                    </>
                    :
                    ratings == 2.5 ?
                        <>
                            <Star htmlColor='orange' />
                            <Star htmlColor='orange' />
                            <StarHalf htmlColor='orange' />
                            <StarOutline htmlColor='orange' />
                            <StarOutline htmlColor='orange' />
                        </>
                        :
                        ratings == 3 ?
                            <>
                                <Star htmlColor='orange' />
                                <Star htmlColor='orange' />
                                <Star htmlColor='orange' />
                                <StarOutline htmlColor='orange' />
                                <StarOutline htmlColor='orange' />
                            </>
                            :
                            ratings == 3.5 ?
                                <>
                                    <Star htmlColor='orange' />
                                    <Star htmlColor='orange' />
                                    <Star htmlColor='orange' />
                                    <StarHalf htmlColor='orange' />
                                    <StarOutline htmlColor='orange' />
                                </>
                                :
                                ratings == 4 ?
                                    <>
                                        <Star htmlColor='orange' />
                                        <Star htmlColor='orange' />
                                        <Star htmlColor='orange' />
                                        <Star htmlColor='orange' />
                                        <StarOutline htmlColor='orange' />
                                    </>
                                    :
                                    ratings == 4.5 ?
                                        <>
                                            <Star htmlColor='orange' />
                                            <Star htmlColor='orange' />
                                            <Star htmlColor='orange' />
                                            <Star htmlColor='orange' />
                                            <StarHalf htmlColor='orange' />

                                        </>
                                        :
                                        ratings == 5 ?
                                            <>
                                                <Star htmlColor='orange' />
                                                <Star htmlColor='orange' />
                                                <Star htmlColor='orange' />
                                                <Star htmlColor='orange' />
                                                <Star htmlColor='orange' />
                                            </>
                                            :
                                            <>
                                                <StarOutline htmlColor='orange' />
                                                <StarOutline htmlColor='orange' />
                                                <StarOutline htmlColor='orange' />
                                                <StarOutline htmlColor='orange' />
                                                <StarOutline htmlColor='orange' />
                                            </>
    }
    return (
        <div className='product_card'>
            {/* PRODUCT THUMB */}
            <div className="product_thumb">
                <img src={props.thumb} alt="" />
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="product_subtitle">
                <span>{props.subtitle}</span>
                <span>
                    {RatingProviver(props.rating)}
                </span>
            </div>
            {/* PRODUCT TITLE */}
            <div className="product_title">
                <h4>{props.title}</h4>
                <h4>${props.price}</h4>
            </div>
            {/* PRODUCT ACTION */}
            <div className="product_action">
                <Button
                    fullWidth
                    variant='outlined'
                    size='small'
                    onClick={() => navigate(`${import.meta.env.VITE_API_ROOT_URI}/${props.tmp_details}`)}
                >Template Details</Button>
                <Button
                    fullWidth
                    variant='outlined'
                    size='small'
                    onClick={() => live_window(props.live_url)}
                >LIve preveiw</Button>
            </div>
        </div>
    )
}

export default ProductCard