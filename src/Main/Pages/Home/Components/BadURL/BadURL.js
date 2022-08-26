import React from 'react';
import {Result} from 'antd';
import {useNavigate} from "react-router-dom";
import 'antd/dist/antd.css';
import {Home} from "@mui/icons-material";
import {IconButton} from "@mui/material";

const BadURL = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/`,);

    }
    return (
        <div>
            <Result
                status="warning"
                title="Pagina nu poate fi accesată."
                extra={
                    <IconButton color="primary" component="label" onClick={handleRedirect}>
                        <Home/>
                    </IconButton>

                }
            />

        </div>)
}

export default BadURL;