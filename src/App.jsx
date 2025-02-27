import './App.css'

import useToastNotification from "./hooks/useToastNotification";

function App() {
  const { notificationComponent, toast } = useToastNotification();

  return (
    <div className="main-container">

      <div className="btn-container">

        <button className="toast-btn success-btn" onClick={() => toast({
          type: "success",
          message: "Toast notification for success Message",
          duration: 1000,
        })}>
          Success
        </button>

        <button className="toast-btn error-btn" onClick={() => toast({
          type: "error",
          message: "Toast notification for error Message",
          duration: 1000,
        })}>
          Error
        </button>

        <button className="toast-btn info-btn" onClick={() => toast({
          type: "info",
          message: "Toast notification for info Message",
          duration: 1000,
        })}>
          Info
        </button>

        <button className="toast-btn warning-btn" onClick={() => toast({
          type: "warning",
          message: "Toast notification for warning Message",
          duration: 1000,
        })}>
          Warning
        </button>


      </div>

      {notificationComponent}
    </div>
  )
}

export default App
