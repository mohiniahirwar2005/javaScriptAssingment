function Login(){
    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
                <h1 className="tex-center">Welcome Back!!!</h1>
                <br />
                <form>
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="userName" className="form-control"/>
                    <br />
                    <label htmlFor="passward">Passward</label>
                    <input type="text" name="passward" className="form-control"/>
                </form>
            </div>
            
        </div>
        </>
    );
}

export default Login;