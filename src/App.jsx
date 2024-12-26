import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="pt-16 -mt-px">
                {/* Pages*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={"/projects"} element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}

