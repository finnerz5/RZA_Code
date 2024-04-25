import header from "../assets/Hotelheader.jpg";

function Hotelheader(){
    return(
        <>
        <header>
      <div
        id="header-img"
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${header})` }}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Our Hotel</h1>
              <h4 className='mb-3'>Plan your Stay at our safari themed hotel</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
        </>
    )
}

export default Hotelheader;