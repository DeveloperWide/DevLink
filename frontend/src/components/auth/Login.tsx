import { useState } from "react"
import Input from "./Input"

type data = {
    username: string,
    password: string
}

const Login = () => {
    const [data, setData] = useState<data>({
        username: "",
        password: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    return (
        <>
            <Input
                label="Username"
                type="text"
                name="username"
                onChange={handleChange}
                value={data.username || ""}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password || ""}
            />
        </>
    )
}


export default Login