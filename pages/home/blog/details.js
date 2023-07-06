import React from 'react';
import Button from "@/pages/Elements/Button/button";
import {baseUrl} from "@/configs/axiosIntance";

const Details = ({item}) => {
    return (
            <div className="blog-item">
                <div className="avatar-blog">
                    <img src={baseUrl+"/"+item.avatar} alt=""/>
                </div>
                <div className="info-blog">
                    <h2>{item.title}</h2>
                    <Button>More</Button>
                </div>
            </div>
    );
};

export default Details;