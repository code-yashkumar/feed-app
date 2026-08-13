import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Feed from './pages/Feed'
import CreatePost from './pages/CreatePost'
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/create-post' element ={<CreatePost/>} />
        <Route path='/feed' element ={<Feed />} />
      </Routes> 
    </Router>
  )
}

export default App