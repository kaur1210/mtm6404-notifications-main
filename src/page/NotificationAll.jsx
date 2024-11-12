import React, { useState } from 'react';
import sampleNotifications from '../notifications';
import NotificationsDisplay from '../ components/NotificationsDisplay'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function NotificationAll() {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const removeNotification = (notificationId) => {
    setNotifications(notifications.filter(notification => notification.id !== notificationId));
  };

 
  const removeAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="ml-4 container d-flex flex-column align-items-center mt-2">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold fst-italic">Notification</h1>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <h2 className="text-secondary me-3 mb-0">
            Total Notifications: <span className="text-primary">{notifications.length}</span>
          </h2>
          {notifications.length > 0 && (
            <button
              onClick={removeAllNotifications}
              className="btn btn-primary btn-md ml-4"
            >
              Clear All Notifications
            </button>
          )}
        </div>
      </div>

      <div className="card my-4 shadow-sm w-100">
        <div className="card-body">
          {notifications.length === 0 ? (
            <p className="text-center text-muted">No notifications available</p>
          ) : (
            <NotificationsDisplay notifications={notifications} reset={removeNotification} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationAll;
