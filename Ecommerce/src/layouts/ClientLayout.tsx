import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "../actions/auth";
import { useUser } from "../hooks";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { Loader } from "../components/shared/Loader";

export const ClientLayout = () => {

    const {session, isLoading: isLoadingSession} = useUser();
    const navigate = useNavigate();

    useEffect(()=> {
        supabase.auth.onAuthStateChange(async(event, session) => {
            if (event === 'SIGNED_OUT' || !session){
                navigate('/login')
            }
        })
    }, [navigate]);

    if (isLoadingSession) return <Loader/>

    const handleLogout = async () => {
        await signOut();
    }



    return (
        <div className="flex flex-col gap-5">
            {/* menu */}
            <nav className="flex justify-center gap-10 text-sm font-medium text-gray-950">
                <NavLink to='/account/orders' className={({isActive}) => 
                    `${isActive ? 'underline hover:text-gray-500' : 'hover:underline hover:text-gray-500'}`
                    }
                >
                    Orders
                </NavLink>

                {/* Dashboard*/}

                <button
                className="hover:underline "
                onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>

            <main className="container mt-12 flex-1">
                <Outlet/>

            </main>
        </div>

    )
};