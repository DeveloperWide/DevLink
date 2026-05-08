import { useState } from "react"
import Input from "./Input"

type data = {
    username: string,
    email: string,
    password: string
}

const Signup = () => {
    const [data, setData] = useState<data>({
        username: "",
        email: "",
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
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email || ""}
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

export default Signup