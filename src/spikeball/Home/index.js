import Matches from "../Matches/Matches";

function Home() {
    return (
        <div className="table-responsive">
            <table className="table-borderless" border="0">
                <thead>
                <tr>
                    <td>
                        <h1>Northeastern Club Roundnet </h1>
                        <hr/>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <h2> Today's matches </h2>
                        <Matches/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
} export default Home;