import './Banner.css'

function Banner() {

    return (
        <div className="App">
            <div className="container-banner">
              
                {/* <img src="./Assets/Group 82.svg" /> */}
                <div className='backImage' style={{
                    backgroundImage: `url("./Assets/Group 82.svg")`
                }}>  
                <div className='technology'>
                    <h1>INNOVATION DIGITAL TECHNOLOGY</h1>
                    <h4>everything we do is the consumer, imagination and you.</h4>
                </div>
               
                </div>
            </div>
            <div className='white-box'>

</div>
        </div>
    );
}
export default Banner;