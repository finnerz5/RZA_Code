import { Routes, Route } from 'react-router-dom'
import './App.css'
import { INDEX_PATH, BOOKING_PATH, ACCOUNT_PATH, NOT_FOUND_PATH, SOCIAL_MEDIA_PATH, LOGIN_PATH, SIGN_UP_PATH, HELP_PATH, EDUCATION_PATH, MEMBER_PATH, HOTEL_PATH, INFO_PATH, TICKET_PATH, CONFIRM_PATH, STAYFORM_PATH, MEMBER_SIGN_UP_PATH } from './Constants/Paths'
import Homepage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NOTFOUND'
import SignUp from './Pages/SignUp'
import SocialMedia from './Pages/SocialMedia'
import Help from './Pages/Help'
import Booking from './Pages/Booking'
import Account from './Pages/Account'
import PageLayout from './Components/PageLayout'
import Education from './Pages/Education'
import Loyal from './Pages/Membership'
import Hotel from './Pages/Hotel'
import Info from './Pages/Information'
import Ticket from './Pages/Tickets'
import AccountCredentialsProvider from './Components/LoginForm/AccountProvider'
import Confirmation from './Pages/BookingConfirm'
import HotelForm from './Pages/HotelBook'
import MemSign from './Pages/MemberShipSignUp,'


/* The `function App() {` is defining a functional component named `App`. This component is responsible
for rendering the main structure of the application. Inside the component, it returns JSX elements
that represent the different routes and pages of the application using React Router. Each `<Route>`
component specifies a path and the corresponding component to render when that path is matched.
Additionally, the component is wrapped in an `<AccountCredentialsProvider>` component, which likely
provides authentication-related functionality to the child components. */

function App() {

  return (
    <>
      <AccountCredentialsProvider>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path={INDEX_PATH} element={<Homepage />} />
                <Route path={BOOKING_PATH} element={<Booking />} />
                <Route path={ACCOUNT_PATH} element={<Account />} />
                <Route path={HELP_PATH} element={<Help />} />
                <Route path={NOT_FOUND_PATH} element={<NotFound />} />
                <Route path={SOCIAL_MEDIA_PATH} element={<SocialMedia />} />
                <Route path={LOGIN_PATH} element={<Login />} />
                <Route path={SIGN_UP_PATH} element={<SignUp />} />
                <Route path={HOTEL_PATH} element={<Hotel />} />
                <Route path={EDUCATION_PATH} element={<Education />} />
                <Route path={MEMBER_PATH} element={<Loyal />} />
                <Route path={INFO_PATH} element={<Info />} />
                <Route path={TICKET_PATH} element={<Ticket />} />
                <Route path={CONFIRM_PATH} element={<Confirmation />} />
                <Route path={STAYFORM_PATH} element={<HotelForm />} />
                <Route path={MEMBER_SIGN_UP_PATH} element={<MemSign />} />
              </Route>
        </Routes>
      </AccountCredentialsProvider>
    </>
  )
}

export default App
