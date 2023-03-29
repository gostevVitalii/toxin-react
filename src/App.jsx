import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import Landing from './components/Landing/Landing'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
