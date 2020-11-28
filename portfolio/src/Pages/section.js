import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import {section} from 'react-bootstrap'

const Section = () => {
    return (
        <div>
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
            <div>
                <h3 style={{backgroundColor: "steelblue",color: "white",padding:"10px",marginTop:"20px"}}>About me</h3>
                <p style={{margin:"35px"}}> I have completed my Bachelor of Engineering in Electrical & Electronics Engineering (EEE)
                from Rajiv Gandhi Prodyogiki Vishwavidyalaya, Bhopal in 2015with 79%marks. I have done my 
                CERTIFICATION and Training in Electrical System Design from smart Brain Engineers & Technology 
                PVT. LTD Noida and worked with M/s Crompton Graves Limited Gurgaon as an Electrical Engineer
                (Graduate Engineer Trainees) and also worked with M/s. Nu-cork Product (P) Limited Gurgaon as 
                Associate Engineer , presently I am learning Full Stack Web Developer from AttainU</p>
                <p style={{margin:"35px"}}>Looking for opportunity as UI(Frontend) development/Software Engineer in reputed IT Company 
                in Delhi NCR. To offer my quick learning skills and a completely different perspective to 
                benefit the organization.</p>
                <h4 style={{backgroundColor: "lightblue",color: "white",padding:"10px",margin:"30px"}}>Work Experience</h4>
                <li style={{color: "orange",marginLeft:"75px"}}>AttainU</li>
                <p style={{marginLeft:"75px"}}>I am learning here full stack web develover. I have worked on python-project(swiggy) as backend
                    and i have also worked on UI Design.
                </p>
                <li style={{color: "orange",marginLeft:"75px"}}>Crompton Graves Limited</li>
                <p style={{marginLeft:"75px"}}>Worked as Graduate Engineer Trainee in Crompton Greaves Limited Gurgaon from Nov -2015 to 31 March -2016 (5 Months).</p>
                <li style={{color: "orange",marginLeft:"75px"}}>Nu-cork Product (P) Limited</li>
                <p style={{marginLeft:"75px"}}>Worked as Associate Engineer in Nu-cork Product (P) Limited Gurgaon from April 2016 to April 2017(1 Year).</p>
                <li style={{color: "orange",marginLeft:"75px"}}>interest</li>
                <p style={{marginLeft:"75px"}}>UI development , Watching Movie,playing game </p>
            </div>
           
        </div>
        
        
        
    );
};

export default Section;