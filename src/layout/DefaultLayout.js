import React from 'react'
import AppContent from 'src/components/AppContent'
import AppFooter from 'src/components/AppFooter'
import AppHeader from 'src/components/AppHeader'
import AppSidebar from 'src/components/AppSidebar'


const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        {/* className="body flex-grow-1 px-3" */}
        <div className="body flex-grow-1  px-1 "> 
          <AppContent />
        </div>
        <br />
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
