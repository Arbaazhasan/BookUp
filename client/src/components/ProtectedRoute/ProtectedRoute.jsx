import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthonticated, children }) => {
    const location = useLocation();

    if (!isAuthonticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
