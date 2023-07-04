import React from 'react';
import Button from "../Elements/Button/button";
import {Image, Skeleton, Space} from "antd";

const Details = (props) => {

    return (

        <div className={'item-vehicle'}>

            <div className={"content-vehicle-item " + props.type}>

                <div className="avatar-vehicle">
                    <Image
                        src={'car1.png'}
                        preview={false}
                        alt=""
                    />
                </div>
                <div className="info-vehicle">
                    <h1>Cadillac Escalade 2023</h1>
                    <h3>Luxury Suv</h3>
                    <h4>6 Passengers With Luggage Leather Interior</h4>
                    <p>Exciting, bold, iconic—move through the world in a vehicle befitting your status. In motion
                        and
                        at rest, Escalade demands attention with exceptional physicality and magnificent design.
                        Witness
                        as luxury transforms into legendary.</p>
                    <div className={'d-flex'}>
                        <Button>Reserve Now</Button>
                        <h3>$130 / Hour $390 / min 3h</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;