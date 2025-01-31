import { Route, Routes } from "react-router-dom"
import Adminsidebar from "../../components/AdminSidebar"
import { Suspense, lazy } from "react"

const AdminPersonalInformationPage = lazy(() => import("../../pages/admin/PersonalInformation"))
const SystemManagementPage = lazy(() => import("../../pages/admin/SystemManagement"))
const PrintingHistoryPage = lazy(() => import("../../pages/admin/PrintingHistory"))
const MaintenancePage = lazy(() => import("../../pages/admin/MaintenanceSchedule"))

const AdminRoute = () => {
    return (
        <div className="flex h-full">
            <Adminsidebar />
            <Routes>
                <Route 
                    path="manage_system"
                    element={
                        <Suspense>
                            <SystemManagementPage />
                        </Suspense>
                    }
                />
                <Route
                    path="printing_history"
                >
                    <Route 
                        path=""   
                        element={
                            <Suspense>
                                <PrintingHistoryPage />
                            </Suspense>
                        }
                        />
                    <Route 
                        path="student"
                        element={
                            <Suspense>
                                <AdminPersonalInformationPage />
                            </Suspense>
                        }
                    />
                </Route>
                
                <Route 
                    path="maintenance_scheduling"
                    element={
                        <Suspense>
                            <MaintenancePage />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}

export default AdminRoute;