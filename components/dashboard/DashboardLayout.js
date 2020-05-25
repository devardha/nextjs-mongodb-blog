import DashboardHeader from "./DashboardHeader";


const DasboardLayout = (props) => {

    return(
        <div>
            <DashboardHeader/>
            <div className="dashboard-content">
                {props.children}
            </div>
            <style jsx global>{`
            
            .dashboard-content{
                padding:50px 10%;
            }
            .ck {
                display:none !important;
            }

            `}</style>
        </div>
    )
}

export default DasboardLayout;