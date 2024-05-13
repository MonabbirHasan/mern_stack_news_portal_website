import React from 'react'
import "./page_title.css"
const PageTitle = (props) => {
    return (
        <div>
            <h1
                style={{
                    fontSize: props.fontSize,
                    textTransform: props.textTransform,
                    color: props.color,
                    background: props.background,
                    fontWeight: props.fontWeight,
                    margin: props.margin,
                    marginTop: props.marginTop,
                    marginLeft: props.marginLeft,
                    marginBottom: props.marginBottom,
                    marginRight: props.marginRight,
                    padding: props.padding,
                    paddingLeft: props.paddingLeft,
                    paddingTop: props.paddingTop,
                    paddingRight: props.paddingRight,
                    fontFamily:props.fontFamily
                }}
            >{props.text}</h1>
        </div>
    )
}

export default PageTitle