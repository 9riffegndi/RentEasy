import  useUser  from "../Hooks/useUser";


export default function Profile() {

    const user = useUser();

    return (
    <div>
            {user ? (
                <div>
                    <h1>Profile Page</h1>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Please log in to access your profile.</p>
            )}
        </div>
    )
    
}