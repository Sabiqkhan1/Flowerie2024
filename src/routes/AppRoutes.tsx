import React from 'react'
import { Routes, Route } from 'react-router-dom'

// ------------------ PAGES --------------------
import Home from '../pages/Home'
import Search from '../pages/Search'
import Product from '../pages/Product'
import Host from '../pages/Host'
import VendorDashboard from '../pages/VendorDashboard'
import PostForm from '../pages/PostForm'
import MoodBoard from '../pages/MoodBoard'
import Chat from '../pages/Chat'
import MemberDashboard from '../pages/MemberDashboard'
// ------------------ TABS ----------------------

//VENDOR DASHBOARD TABS
import Transaction from '../components/VendorDashboardComponents/Transaction'
import Post from '../components/VendorDashboardComponents/Post'
import Order from '../components/VendorDashboardComponents/Order'
import Help from '../components/VendorDashboardComponents/Help'
import Offer from '../components/VendorDashboardComponents/Offer'
import Payment from '../components/VendorDashboardComponents/Payment'

//MOOD BOARD TABS
import Venues from '../components/MoodBoardComponents/Venues'
import Catering from '../components/MoodBoardComponents/Catering'
import DecorLighting from '../components/MoodBoardComponents/Decor&Lighting'
import Videography from '../components/MoodBoardComponents/Videography'
import Transport from '../components/MoodBoardComponents/Transport'
import HairBeauty from '../components/MoodBoardComponents/Hair&Beauty'
import Musician from '../components/MoodBoardComponents/Musician'
import ShowStoppers from '../components/MoodBoardComponents/ShowStoppers'
import Other from '../components/MoodBoardComponents/Other'

//CHAT TAB
import ChatTab from '../components/ChatComponents/ChatTab'
import Settings from '../components/ChatComponents/Settings'

//CHAT MESSAGE TAB
import Message from '../components/ChatComponents/Message'

//CHAT SETTING TAB
import General from '../components/ChatComponents/General'
import Appearance from '../components/ChatComponents/Appearance'

//POST FORM TAB
import Welcome from '../components/PostFormComponents/Welcome'
import Category from '../components/PostFormComponents/Category'

//VENUE CATEGORY TAB
import Venue from '../components/PostFormComponents/Venue'
import PostCatering from '../components/PostFormComponents/Catering'
import Decor from '../components/PostFormComponents/Decor&Lighting'
import Hair from '../components/PostFormComponents/Hair&Beauty'

//MEMBER DASHBOARD TAB
import Info from '../components/MemberDashboardComponents/Info'
import Steps from '../components/MemberDashboardComponents/Steps'

//PLANNER TAB
import Wedding from '../components/MemberDashboardComponents/tabs/Wedding'
import CheckList from '../components/MemberDashboardComponents/tabs/CheckList'
import Suppliers from '../components/MemberDashboardComponents/tabs/Suppliers'
import GuestList from '../components/MemberDashboardComponents/tabs/GuestList'
import Overview from '../components/MemberDashboardComponents/tabs/GuestListTabs/Overview'
import Reception from '../components/MemberDashboardComponents/tabs/GuestListTabs/Reception'
import Ceremony from '../components/MemberDashboardComponents/tabs/GuestListTabs/Ceremony'
import Breakfast from '../components/MemberDashboardComponents/tabs/GuestListTabs/Breakfast'
import BudgetPlanner from '../components/MemberDashboardComponents/tabs/BudgetPlanner'
// ---------------------------------------------
const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/host" element={<Host />} />
            <Route path="/product" element={<Product />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />}>
                <Route path="" element={<Transaction />} />
                <Route path="posts" element={<Post />} />
                <Route path="orders" element={<Order />} />
                <Route path="help" element={<Help />} />
                <Route path="offers" element={<Offer />} />
                <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="/post-form" element={<PostForm />}>
                <Route path="" element={<Welcome />} />
                <Route path="category" element={<Category />} />
                <Route path="venue" element={<Venue />} />
                <Route path="catering" element={<PostCatering />} />
                <Route path="decor&lighting" element={<Decor />} />
                <Route path="hair&beauty" element={<Hair />} />
            </Route>
            <Route path="/mood-board" element={<MoodBoard />}>
                <Route path="" element={<Venues />} />
                <Route path="catering" element={<Catering />} />
                <Route path="decor&lighting" element={<DecorLighting />} />
                <Route path="videography" element={<Videography />} />
                <Route path="transport" element={<Transport />} />
                <Route path="hair&beauty" element={<HairBeauty />} />
                <Route path="musician" element={<Musician />} />
                <Route path="show-stoppers" element={<ShowStoppers />} />
                <Route path="other" element={<Other />} />
            </Route>
            <Route path="/member-dashboard/:id" element={<MemberDashboard />}>
                <Route path="" element={<Info />} />
                <Route path="planner" element={<Steps />}>
                    <Route path="wedding" element={<Wedding />} />
                    <Route path="checklist" element={<CheckList />} />
                    <Route path="suppliers" element={<Suppliers />} />
                    <Route path="guest-lists" element={<GuestList />}>
                        <Route path="" element={<Overview />} />
                        <Route path="reception" element={<Reception />} />
                        <Route path="ceremony" element={<Ceremony />} />
                        <Route
                            path="wedding-breakfast"
                            element={<Breakfast />}
                        />
                    </Route>
                    <Route path="budget-planner" element={<BudgetPlanner />} />
                </Route>
            </Route>
            <Route path="chat" element={<Chat />}>
                <Route path="" element={<ChatTab />}>
                    <Route path=":id" element={<Message />} />
                </Route>
                <Route path="settings/*" element={<Settings />}>
                    <Route path="" element={<General />} />
                    <Route path="appearance" element={<Appearance />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes
