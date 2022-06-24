import React from 'react';
import { client, urlFor } from '../client';


const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
    return (
        <div>
            <img className="rounded-lg w-full" alt="user-post" src={urlFor(image).width(200).url()}/>
        </div>
    )
}

export default Pin
