import React from 'react'
import { Carousel } from "react-bootstrap"
import photo1 from "../../assets/measureslide.png"
// import photo2 from "../assets/testimage2.png"
// import photo3 from "../assets/testimage3.jpg"
import './style.css';


function CarouselTest() {
    return (
        <div>
            <Carousel fade={true} className="carousel" controls={true}>
                <Carousel.Item interval={4000}>
                        <div class='carousel'>
                    <img
                        className="d-block w-100 carSlide"

                        src={photo1}
                        alt="First slide"
                    />
                        </div>
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Neck</h3>
                        <p class='slideText'>Measure around your neck over your Adam's apple, following its natural curve.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Second slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Shoulders</h3>
                        <p class='slideText'>Identify the bones at the top edge of each shoulder. Measure from bone to bone, over the natural curve of your back.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Third slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Biceps</h3>
                        <p class='slideText'>Relax your arms at your sides. Wrap the tape measure around your bicep in line with your nipples.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption class='carSlideTextLg carousel-caption'>
                        <h3 class='slideTitle'>Arms</h3>
                        <p class='slideText'>Relax your arms. Measure the length in two steps. Start from the bone at the top edge of your shoulder and measure to your elbow. Hold the tape measure there and continue measuring to your wrist, just below your wrist bone.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Wrists</h3>
                        <p class='slideText'>Wrap the tape measure around your wrist, just below your wrist bone.</p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption class='carSlideTextMd carousel-caption'>
                        <h3 class='slideTitle'>Torso Length</h3>
                        <p class='slideText'>Relax your arms. Measure from the highest point of your shoulder at the base of your neck straight down your torso—in line with your first thumb joint.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Seventh slide"
                    />
                    <Carousel.Caption class='carSlideTextMd carousel-caption'>
                        <h3 class='slideTitle'>Chest</h3>
                        <p class='slideText'>Measure around your chest beneath your armpits, and in line with your nipples. Ensure the tape measure is level all the way around. Keep your arms relaxed at your sides.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Eighth slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Stomach</h3>
                        <p class='slideText'>Wrap the tape measure around your stomach in line with your belly button. Ensure the tape measure is level all the way around.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Ninth slide"
                    />
                    <Carousel.Caption class='carSlideTextLg carousel-caption'>
                        <h3 class='slideTitle'>Waist</h3>
                        <p class='slideText'>Locate your waist by placing four fingers beneath your belly button. Wrap the tape measure around your waistline just below your fourth finger. Ensure the tape measure is level all the way around. Please note that your natural waistline may not match the waistline on the pants you're wearing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Tenth slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Hips</h3>
                        <p class='slideText'>Wrap the tape measure around your hips at the widest point of your bum. Ensure the tape measure is level all the way around.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Eleventh slide"
                    />
                    <Carousel.Caption class='carSlideTextLg carousel-caption'>
                        <h3 class='slideTitle'>Legs</h3>
                        <p class='slideText'>Locate your waist by placing four fingers beneath your belly button and wrapping the tape measure level around your waistline just below your fourth finger. Mark a point at one side and remove the tape measure. Measure your leg from that point straight down to the floor.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Twelfth slide"
                    />
                    <Carousel.Caption class='carSlideTextXl carousel-caption'>
                        <h3 class='slideTitle'>Crotch</h3>
                        <p class='slideText'>Locate your waist by placing four fingers beneath your belly button and wrapping the tape measure level around your waistline just below your fourth finger. Mark the center front and center back points and remove the tape measure. Hold the metal tip of the tape measure at the front point. Measure from here to the opposite point on your back, keeping the tape measure centered and snug.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={11000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Thirteenth slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Thighs</h3>
                        <p class='slideText'>Wrap the tape measure around your thigh just below the crotch. Ensure the tape measure is level all the way around.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fourteenth slide"
                    />
                    <Carousel.Caption class='carSlideText carousel-caption'>
                        <h3 class='slideTitle'>Knees</h3>
                        <p class='slideText'>Wrap the tape measure around your knee cap at the widest point. Ensure the tape measure is level all the way around.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel> 
        </div>
    )
}

export default CarouselTest