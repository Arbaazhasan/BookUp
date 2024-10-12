import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthonticated, children }) => {

    return isAuthonticated ? children : <Navigate to="/login" />;

};

export default ProtectedRoute;
