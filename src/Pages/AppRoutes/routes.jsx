import { Route, Routes } from 'react-router-dom';
import FirstPage from '../Views/firstPage';
import Info from '../Views/info';

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<FirstPage/>}/>
            <Route path='info' element={<Info/>}/>
        </Routes>
    );
};

export default AppRoutes;