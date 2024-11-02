import { useUser } from '../hooks/useUser';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const auth = useUser();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
