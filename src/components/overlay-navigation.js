// Import Style sheet below
import '../Css/overlay-navigation.css';
import { Outlet, Link } from "react-router-dom";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


//Insert your navigations 
function Overlay_Navigation(location1, location2, location3, location4)
{
    const navigate = useNavigate();
    
    const navigateToLocation1 = () => 
    {
        navigate('/');
    };
    const navigateToLocation2 = () => 
    {
        navigate('/');
    };
    const navigateToLocation3 = () => 
    {
        navigate('/');
    };
    const navigateToLocation4 = () => 
    {
        navigate('');
    };

    useEffect(()=> 
    {
        function openNav() 
        {
            document.getElementById("myNav").style.height = "100%";
        }
  
        function closeNav() 
        {
            document.getElementById("myNav").style.height = "0%";
        }

        let open = document.getElementById("open");
        let close = document.getElementById("close");

        open.onclick = function(event)
        {
            openNav();
        }

        close.onclick = function(event)
        {
            closeNav();
        }
    }, []);


    return (
    <>  
        <div id = "myNav" className = "overlay">
            <a id = "close" className = "closebtn">&times;</a>

            <div className = "overlay-content">
                <a href = "#">{location1}</a>
                <a href = "#">{location2}</a>
                <a href = "#">{location3}</a>
                <a href = "#">{location4}</a>
            </div>
        </div>
        <span id = "open">open</span>
        <Outlet />
    </>    
    )  
}

export default Overlay_Navigation;