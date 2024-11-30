import { Route, Routes } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import { Suspense, lazy } from "react"

const MainPage = lazy(() => import("../../pages/PersonalInformation"))
const PrintPage = lazy(() => import("../../pages/PrintDocument"))
const PrintPagePrintingMode = lazy(() => import("../../pages/PrintingDocumentPrintingMode"));
const TransactionPage = lazy(() => import("../../pages/TransactionHistory"))
const BuyPage = lazy(() => import("../../pages/BuyMorePage"))

const UserRoute = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <Routes>
                <Route 
                    path="student_information"
                    element={
                        <Suspense>
                            <MainPage />
                        </Suspense>
                    }
                />
                <Route 
                    path="print_document"
                    element={
                        <Suspense>
                            <PrintPage />
                        </Suspense>
                    }
                />
                    {/* New Route for Printing Mode */}
                <Route 
                path="print_document/printing_mode"
                element={
                    <Suspense>
                        <PrintPagePrintingMode />
                    </Suspense>
                }
                />
                
                <Route 
                    path="transaction_history"
                    element={
                        <Suspense>
                            <TransactionPage />
                        </Suspense>
                    }
                />
                
                <Route 
                    path="buy_more_paper"
                    element={
                        <Suspense>
                            <BuyPage />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}

export default UserRoute;