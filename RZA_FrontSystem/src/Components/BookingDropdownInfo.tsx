import { MDBDropdown, MDBBtn, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-react-ui-kit";

function BookingDrop (){
    // a drop down that provides users on info about scam ticket sellers

    return (
        <MDBDropdown className='btn-group'>
          <MDBBtn>Be weary of scam ticket sellers!</MDBBtn>
          <MDBDropdownToggle split></MDBDropdownToggle>
          <MDBDropdownMenu style={{ maxWidth: '500px' }}>
          <p>We are well aware that people promote our tickets at a 'larger discounted price'.
            At RZA we will only ever promote our discounts through our Official website and social media pages,
            never on anything else.
          </p>
          </MDBDropdownMenu>
        </MDBDropdown>
      );
}

export default BookingDrop;