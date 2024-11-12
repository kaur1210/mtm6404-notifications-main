import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

function NotificationsDisplay({ notifications, reset, clearAllNotifications }) {
  return (
    <div>
      <ListGroup>
        {notifications.map((notification, index) => (
          <ListGroupItem
            key={notification.id}
            className="d-flex justify-content-between align-items-center shadow-sm mb-2 p-3"
          >
            <h6 
              className="mr-3 mb-1 fw-bold text-truncate text-dark rounded-3 p-3 fs-5 shadow-sm"
              style={{ transition: 'background-color 0.3s, transform 0.3s' }}
              onMouseEnter={(e) => e.target.classList.add('bg-warning-subtle')}
              onMouseLeave={(e) => e.target.classList.remove('bg-warning-subtle')}
            >
              {index + 1} 
            </h6>

            <div className="d-flex flex-column flex-grow-1 me-3">
              <h5 
                className="mb-1 fw-bold text-truncate text-primary"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#0056b3'}
                onMouseLeave={(e) => e.target.style.color = 'inherit'}
              >
                {notification.name}
              </h5>

              <p 
                className="mb-1 text-muted"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#6c757d'}
                onMouseLeave={(e) => e.target.style.color = 'inherit'}
              >
                {notification.message}
              </p>
            </div>

            <Button 
              color="warning"
              onClick={() => reset(notification.id)}
              className="ms-3"
            >
              Clear
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default NotificationsDisplay;
