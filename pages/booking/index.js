import React, {useState} from 'react';
import {Button, DatePicker, Input, Select} from 'antd';
import Header from "@/pages/header/header";
import Footer from "@/pages/footer/footer";

const {Option} = Select;

const Booking = () => {
  const [bookingPage, setBookingPage] = useState(false);

  return (
    <div>
      <Header/>
      <div className="booking-page">
        {bookingPage && (
          <div className="booking-page-content">
            <div className="booking-header">
              <Button onClick={() => setBookingPage(false)}>Distance</Button>
              <Button type="primary" onClick={() => setBookingPage(true)}>
                Hourly
              </Button>
            </div>
            <div className="content-form">
              <div className="header-content-form">Ride Details</div>
              <form action="">
                <div className="pickup-dates">
                  <div className="form-group-picker">
                    <DatePicker style={{width: '100%'}}/>
                  </div>
                  <div className="form-group-picker">
                    <DatePicker.TimePicker style={{width: '100%'}}/>
                  </div>
                </div>
                <div className="form-group-field">
                  <Input fullWidth={true} placeholder="Pickup location"/>
                </div>
                <div className="form-group-field">
                  <Input fullWidth={true} placeholder="Drive location"/>
                </div>
                <div className="form-group-field">
                  <Select style={{width: '100%'}} placeholder="DURATION (IN HOURS)">
                    <Option value={10}>Ten</Option>
                    <Option value={20}>Twenty</Option>
                    <Option value={30}>Thirty</Option>
                  </Select>
                </div>
                <div className="form-group-field">
                  <Button style={{height: '50px'}} type="primary" block>
                    CHOOSE A VEHICLE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        {!bookingPage && (
          <div className="booking-page-content">
            <div className="booking-header">
              <Button type="primary" onClick={() => setBookingPage(false)}>
                Distance
              </Button>
              <Button onClick={() => setBookingPage(true)}>Hourly</Button>
            </div>
            <div className="content-form">
              <div className="header-content-form">Ride Details</div>
              <form action="">
                <div className="pickup-dates">
                  <div className="form-group-picker">
                    <DatePicker style={{width: '100%'}}/>
                  </div>
                  <div className="form-group-picker">
                    <DatePicker.TimePicker format="HH:mm" style={{width: '100%'}}/>
                  </div>
                </div>
                <div className="form-group-field">
                  <Input fullWidth={true} placeholder="Pickup location"/>
                </div>
                <div className="form-group-field">
                  <Input fullWidth={true} placeholder="Drive location"/>
                </div>
                <div className="form-group-field">
                  <Select style={{width: '100%'}} placeholder="Transfer type">
                    <Option value={10}>Ten</Option>
                    <Option value={20}>Twenty</Option>
                    <Option value={30}>Thirty</Option>
                  </Select>
                </div>
                <div className="form-group-field">
                  <Select style={{width: '100%'}} placeholder="Extra time">
                    <Option value={10}>Ten</Option>
                    <Option value={20}>Twenty</Option>
                    <Option value={30}>Thirty</Option>
                  </Select>
                </div>
                <div className="form-group-field">
                  <Button style={{height: '50px'}} type="primary" block>
                    CHOOSE A VEHICLE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Booking;
