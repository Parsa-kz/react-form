import React,{useState} from 'react';

const SignUp = () => {

    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="name" value={data.name} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} />
                </div>
            </form>
        </div>
    );
};

export default SignUp;