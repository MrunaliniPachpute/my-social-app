import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Form from "./components/Form"
import "./App.css"
import PostList from "./components/PostList"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return <PostListProvider>
    <div className="app-container">
    <SideBar selectedTab = {selectedTab}  setSelectedTab={setSelectedTab}></SideBar>
    
    <div className="content">
      <Header></Header>
      {selectedTab === "Home" ? <PostList></PostList> : <Form></Form> }

      <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
}

export default App
