import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'

const Section = () => {
    return (
        <Card className="bg-Warning  text-white" style={{height: "300px",backgroundColor:"orange"}}>
        <Card.Img src="https://www.best4geeks.com/wp-content/uploads/2018/08/34-professional-lady-image-for-instagram-dpz-1.jpg" alt="Card image" style={{width: "100px",height:"100px", borderRadius: "50%",marginLeft:"20px",marginTop:"50px"}}/>
        <Card.ImgOverlay>
            <Card.Title style={{marginLeft: "170px",marginTop:"20px"}}>PERSONAL INFORMATION</Card.Title>
            <Card.Text style={{marginLeft: "170px"}}>
                GYANWATI KUMARI
            </Card.Text>
            <Card.Text style={{marginLeft: "170px"}}>
                FRONTEND ENGINEER
            </Card.Text>
            <Card.Text style={{marginLeft: "170px"}}>
                Email: gyan@attainu.com
            </Card.Text>
            <Card.Text style={{marginLeft: "170px"}}>
                MobileNo: +918765458976
            </Card.Text>
           
        </Card.ImgOverlay>
        </Card>
        
    );
};

export default Section;