import { Routes, Route } from 'react-router-dom'
import './App.css'
import { INDEX_PATH, BOOKING_PATH, ACCOUNT_PATH, NOT_FOUND_PATH, SOCIAL_MEDIA_PATH, LOGIN_PATH, SIGN_UP_PATH, HELP_PATH, EDUCATION_PATH, MEMBER_PATH, HOTEL_PATH, INFO_PATH, TICKET_PATH } from './Constants/Paths'
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
              </Route>
        </Routes>
      </AccountCredentialsProvider>
    </>
  )
}

export default App
