import { Modals } from "./Modals";
import { ListMovieUser } from "./ListMovieUser";
import { NavbarUser } from "./NavbarUser";


const DashboardUser = () => {
    

    return <div>
        <NavbarUser/>
        <Modals/>
        <ListMovieUser/>
        
    </div>;
};

export { DashboardUser };
