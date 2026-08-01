import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux"
import  { addUser }  from "../feature/authSlice";

export const useAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState : { errors } } = useForm();
    const [registeredUsers, setRegisteredUsers] = useState(
        JSON.parse(localStorage.getItem("registeredUsers")) || []
    );

    const registerForm = (data) => {
        let arr = [...registeredUsers, data];
        setRegisteredUsers(arr);
        localStorage.setItem("registeredUsers", JSON.stringify(arr));
        toast.success("user registered!")
        
    };
    const loginForm = (data) => {
        let user = registeredUsers.find((val)=>{
            return val.email === data.email && val.password === data.password;
        })

        if(!user) {
            toast.error("Invalid Email or Password!");
            reset();
            return;
        }
        dispatch(addUser(user));
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        toast.success("user logged in!")
        reset();
    };

    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerForm,
        loginForm,
    }
}