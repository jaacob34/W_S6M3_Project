import React from "react";


export default function Figure({ imageURL, caption }) {
    return (
    <figure>
        <img src={imageURL} height='300px' />
        <figcaption>Picture taken on {caption}</figcaption>
    </figure>
    )
}
