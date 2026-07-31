import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"

export const useAuth = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
    }
}