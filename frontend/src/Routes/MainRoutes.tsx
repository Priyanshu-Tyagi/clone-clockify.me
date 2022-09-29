import { Routes, Route } from "react-router-dom"
import RequireAuth from "../hoc/RequireAuth"
import Clients from "../Pages/Clients"
import Login from "../Pages/Login"

import { Projects } from "../Pages/Projects"
import Team from "../Pages/Team"
import { TimeTracker } from "../Pages/TimeTracker"
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={"home"} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={"signup"} />
        <Route path="/downloads" element={"downloads"} />
        <Route path="/features" element={"features"} />
        <Route path="/tracker" element={<RequireAuth><TimeTracker /></RequireAuth>} />
        <Route path="/projects" element={<RequireAuth><Projects/></RequireAuth>} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={<RequireAuth><Team /></RequireAuth>} />
        <Route path="/clients" element={<Clients />} />
    </Routes>
  )
}
