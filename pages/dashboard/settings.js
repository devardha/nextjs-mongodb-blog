import DashboardLayout from "../../components/dashboard/DashboardLayout"

export default (props)=> {
    return(
        <DashboardLayout>
            <form className="settings-form">
                <button className="btn btn-primary">Save</button>
                <div className="settings">
                    <div className="setting-wrapper">
                        <h2 className="setting-title">General</h2>
                        <div className="field">
                            <label htmlFor="title">Blog Title</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="field">
                            <label htmlFor="title">Description</label>
                            <input type="text" name="title"/>
                        </div>
                    </div>
                    <div className="setting-wrapper">
                        <h2 className="setting-title">Security</h2>
                        <div className="field">
                            <label htmlFor="title">Username</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="field">
                            <label htmlFor="title">Password</label>
                            <input type="text" name="title"/>
                        </div>
                    </div>
                </div>
            </form>
            <style jsx>{`
            
            form{
                display:flex;
            }
            .btn{
                margin: 30px 0 0 auto;
            }
            .setting-title{
                font-size:1.5rem;
                font-weight:bold;
                margin-bottom:10px;
            }
            input{
                height:30px;
                padding: 0 10px;
                border-radius:5px;
                border:1px solid #bbb;
                width:80%;
            }
            label{
                margin: 0 0 5px 0;
            }
            .settings{
                display:flex;
                justify-content:space-between;
            }
            .setting-wrapper{
                margin-top:20px;
                background-color:#fff;
                padding:15px;
                width:49%;
                border-radius:10px;
            }
            .settings-form{
                display:flex;
                flex-direction:column;
            }
            .field{
                margin: 5px 0 10px 0;
                display:flex;
                flex-direction:column;
            }
            
            `}</style>
        </DashboardLayout>
    )
}