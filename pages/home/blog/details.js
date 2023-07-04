import React from 'react';
import Button from "@/pages/Elements/Button/button";

const Details = (props) => {
    return (
            <div className="blog-item">
                <div className="avatar-blog">
                    <img src={'blog-1.png'} alt=""/>
                </div>
                <div className="info-blog">
                    <h2>The Best Cars to Hire for a Infinite Service</h2>
                    <p>The Silimo will constantly update its fleet to include</p>
                    <Button>More</Button>
                </div>
            </div>
    );
};

export default Details;